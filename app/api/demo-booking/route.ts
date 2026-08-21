import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_TABLE = "Demo Requests";
const GOOGLE_BOOKING_SCRIPT_URL =
  process.env.GOOGLE_BOOKING_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbyrXpvEYSzcIf7iiFMJoL48QOSYDOyFml-4JtbKICSIR7C8LhBGpaw1dT4L8IUMSEGVOg/exec";
const NOTIFY_EMAIL = "jeff.puttstrife@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_RE = /^[\p{L}\p{M}'\-.\s]+$/u;
const MIN_BUSINESS_DAYS_AHEAD = 8;
const ALLOWED_TIME_SLOTS = new Set([
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
]);
const MAX_LEN = 500;

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function sanitize(val: unknown): string {
  if (typeof val !== "string") return "";
  return val.trim().slice(0, MAX_LEN);
}

function parseTimeLabel(time: string) {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return { hours, minutes };
}

function bookedAtIso(dateStr: string, timeStr: string) {
  const parsed = parseTimeLabel(timeStr);
  if (!parsed) return null;
  const parts = dateStr.split("-").map(Number);
  if (parts.length !== 3 || parts.some((part) => Number.isNaN(part))) return null;
  const { hours, minutes } = parsed;
  const utcHour = hours - 7;
  return new Date(Date.UTC(parts[0], parts[1] - 1, parts[2], utcHour, minutes, 0)).toISOString();
}

function isValidBookingTime(timeStr: string) {
  return ALLOWED_TIME_SLOTS.has(timeStr);
}

function addBusinessDays(date: Date, businessDays: number) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  let added = 0;
  while (added < businessDays) {
    next.setDate(next.getDate() + 1);
    if (next.getDay() !== 0 && next.getDay() !== 6) {
      added += 1;
    }
  }
  return next;
}

function todayInBangkok() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return new Date(`${map.year}-${map.month}-${map.day}T00:00:00`);
}

function isValidBookingDate(dateStr: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const date = new Date(`${dateStr}T00:00:00`);
  const minDate = addBusinessDays(todayInBangkok(), MIN_BUSINESS_DAYS_AHEAD);
  const day = date.getDay();
  return date >= minDate && (day === 3 || day === 5);
}

function titleCase(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const businessType = sanitize(body.businessType);
    const bottleneck = sanitize(body.bottleneck);
    const focus = sanitize(body.focus);
    const tools = Array.isArray(body.tools) ? body.tools.map((item: unknown) => sanitize(item)).filter(Boolean) : [];
    const otherTool = sanitize(body.otherTool);
    const urgency = sanitize(body.urgency);
    const attendees = sanitize(body.attendees);
    const successCriteria = sanitize(body.successCriteria);
    const notes = sanitize(body.notes);
    const selectedDate = sanitize(body.selectedDate);
    const selectedTime = sanitize(body.selectedTime);
    const source = sanitize(body.source) || "website:book-demo";

    if (!name || !email || !businessType || !bottleneck || !selectedDate || !selectedTime) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!NAME_RE.test(name)) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    const bookedAt = bookedAtIso(selectedDate, selectedTime);
    if (!bookedAt) {
      return NextResponse.json({ error: "Invalid booking slot" }, { status: 400 });
    }
    if (!isValidBookingTime(selectedTime)) {
      return NextResponse.json({ error: "Booking times must be within the approved afternoon or evening windows." }, { status: 400 });
    }
    if (!isValidBookingDate(selectedDate)) {
      return NextResponse.json({ error: "Booking dates must be at least 8 business days out and on Wednesday or Friday." }, { status: 400 });
    }

    const submittedAt = new Date();
    const submittedStamp = submittedAt.toISOString();
    const submittedLabel = submittedAt.toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
    const notesWithOtherTool = [notes, otherTool ? `Other tool: ${otherTool}` : ""].filter(Boolean).join("\n");

    if (!AIRTABLE_BASE_ID || !AIRTABLE_API_KEY) {
      return NextResponse.json({ error: "Airtable is not configured" }, { status: 503 });
    }

    const createRes = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          "Work Email": email,
          "Business Type": businessType,
          Bottleneck: bottleneck,
          "Demo Focus": focus || null,
          "Priority Workflow": bottleneck || null,
          "Current Tools": tools.length ? tools : null,
          Urgency: urgency || null,
          "Decision Makers": attendees || null,
          "Success Criteria": successCriteria || null,
          "Additional Notes": notesWithOtherTool || null,
          Source: source,
          Status: "New",
          "Booked At": bookedAt,
        },
      }),
    });

    if (!createRes.ok) {
      const airtableError = await createRes.text();
      return NextResponse.json({ error: `Airtable ${createRes.status}: ${airtableError}` }, { status: 502 });
    }

    const created = await createRes.json();
    const recordId = created?.id as string | undefined;

    const bookingParams = new URLSearchParams({
      name,
      email,
      date: selectedDate,
      time: selectedTime,
      businessType,
      bottleneck,
      focus,
      urgency,
      attendees,
      successCriteria,
      notes: notesWithOtherTool,
      source,
    });

    const bookingRes = await fetch(`${GOOGLE_BOOKING_SCRIPT_URL}?${bookingParams.toString()}`);
    const bookingData = await bookingRes.json().catch(() => null);

    if (!bookingRes.ok || bookingData?.success === false) {
      const errorMessage = bookingData?.error || `Booking service returned ${bookingRes.status}`;
      return NextResponse.json({ error: errorMessage }, { status: 502 });
    }

    if (recordId) {
      await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}/${recordId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Status: "Booked",
            "Booking Link": bookingData?.eventId ? `calendar-event:${bookingData.eventId}` : null,
            "Booked At": bookedAt,
          },
        }),
      });
    }

    if (process.env.RESEND_API_KEY) {
      const sName = esc(name);
      const sEmail = esc(email);
      const sBiz = esc(businessType) || "—";
      const sBot = esc(bottleneck) || "—";
      const sFocus = esc(focus) || "—";
      const sUrgency = esc(urgency) || "—";
      const sAttendees = esc(attendees) || "—";
      const sSuccess = esc(successCriteria) || "—";
      const sNotes = esc(notesWithOtherTool) || "—";
      const sTools = esc(tools.length ? tools.join(", ") : "—");
      const sOtherTool = esc(otherTool) || "—";
      const sSource = esc(source) || "—";
      const sBookedAt = esc(bookedAt);
      const sDate = esc(selectedDate);
      const sTime = esc(selectedTime);

      const { error } = await resend.emails.send({
        from: "Hirelessly Bookings <onboarding@resend.dev>",
        to: [NOTIFY_EMAIL],
        subject: `Demo booked: ${sName} — ${sBiz}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#1A1410;color:#F2F2F0;border-radius:12px">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#EF6F2E;margin-bottom:12px">Hirelessly — Demo Booking</div>
            <h2 style="margin:0 0 20px;font-size:20px;color:#fff">${sName}</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480;width:140px">Email</td><td style="padding:8px 0;font-size:13px"><a href="mailto:${sEmail}" style="color:#EF6F2E">${sEmail}</a></td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Business Type</td><td style="padding:8px 0;font-size:13px">${sBiz}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Bottleneck</td><td style="padding:8px 0;font-size:13px">${sBot}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Demo Focus</td><td style="padding:8px 0;font-size:13px">${sFocus}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Current Tools</td><td style="padding:8px 0;font-size:13px">${sTools}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Urgency</td><td style="padding:8px 0;font-size:13px">${sUrgency}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Decision Makers</td><td style="padding:8px 0;font-size:13px">${sAttendees}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Success Criteria</td><td style="padding:8px 0;font-size:13px">${sSuccess}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Other Tool</td><td style="padding:8px 0;font-size:13px">${sOtherTool}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Additional Notes</td><td style="padding:8px 0;font-size:13px">${sNotes}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Booked At</td><td style="padding:8px 0;font-size:13px">${sDate} · ${sTime} ICT</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Booked At ISO</td><td style="padding:8px 0;font-size:13px">${sBookedAt}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Source</td><td style="padding:8px 0;font-size:13px">${sSource}</td></tr>
            </table>
            <div style="margin-top:24px;padding-top:16px;border-top:1px solid #3A3430;font-size:11px;color:#555">hirelessly.com · Bangkok, Thailand</div>
          </div>
        `,
      });

      if (error) {
        console.error("Demo booking email error:", error);
      }
    }

    if (recordId && bookingData?.eventId) {
      console.log(`Booked demo ${titleCase(name)} -> ${bookingData.eventId}`);
    }

    return NextResponse.json({
      ok: true,
      bookedAt,
      bookingId: bookingData?.eventId ?? null,
      submittedAt: submittedStamp,
      submittedLabel,
    });
  } catch (err) {
    console.error("Demo booking route crash:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
