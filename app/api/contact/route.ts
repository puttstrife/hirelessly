import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_TABLE  = "tblZhP4GkOGCWYxhf";
const NOTIFY_EMAIL    = "jeff.puttstrife@gmail.com";
const EMAIL_RE        = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_RE         = /^[\p{L}\p{M}'\-.\s]+$/u;
const MAX_LEN         = 500;

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name          = sanitize(body.name);
    const email         = sanitize(body.email);
    const business_type = sanitize(body.business_type);
    const bottleneck    = sanitize(body.bottleneck);

    if (!name || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!NAME_RE.test(name)) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    const errors: string[] = [];
    let delivered = false;

    // ── Airtable ──────────────────────────────────────────────────────────
    if (AIRTABLE_BASE_ID && AIRTABLE_API_KEY) {
      const atRes = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Name: name,
              Email: email,
              "Business Type": business_type,
              "Bottle Neck": bottleneck,
              Source: "hirelessly.com",
              "Submitted At": new Date().toISOString().split("T")[0],
            },
          }),
        }
      );
      if (!atRes.ok) {
        const atErr = await atRes.text();
        errors.push(`Airtable ${atRes.status}: ${atErr}`);
      } else {
        delivered = true;
      }
    }

    // ── Resend ────────────────────────────────────────────────────────────
    if (process.env.RESEND_API_KEY) {
      const sName = esc(name);
      const sEmail = esc(email);
      const sBiz = esc(business_type) || "—";
      const sBot = esc(bottleneck) || "—";

      const { error } = await resend.emails.send({
        from: "Hirelessly Leads <onboarding@resend.dev>",
        to: [NOTIFY_EMAIL],
        subject: `New lead: ${sName} — ${sBiz}`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#1A1410;color:#F2F2F0;border-radius:12px">
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#EF6F2E;margin-bottom:12px">Hirelessly — New Lead</div>
            <h2 style="margin:0 0 20px;font-size:20px;color:#fff">${sName}</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480;width:120px">Email</td><td style="padding:8px 0;font-size:13px"><a href="mailto:${sEmail}" style="color:#EF6F2E">${sEmail}</a></td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Business Type</td><td style="padding:8px 0;font-size:13px">${sBiz}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Bottleneck</td><td style="padding:8px 0;font-size:13px">${sBot}</td></tr>
              <tr><td style="padding:8px 0;font-size:12px;color:#8A8480">Submitted</td><td style="padding:8px 0;font-size:13px">${new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })} BKK</td></tr>
            </table>
            <div style="margin-top:24px;padding-top:16px;border-top:1px solid #3A3430;font-size:11px;color:#555">hirelessly.com · Bangkok, Thailand</div>
          </div>
        `,
      });
      if (error) {
        errors.push(`Resend: ${error.message}`);
      } else {
        delivered = true;
      }
    }

    if (!delivered) {
      return NextResponse.json({ error: "Could not deliver your request right now." }, { status: 503 });
    }

    if (errors.length) console.error("Contact route errors:", errors);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route crash:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
