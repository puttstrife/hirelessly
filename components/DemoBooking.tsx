"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ButtonHTMLAttributes, CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";
import {
  CalendarBlank,
  CheckCircle,
  Clock,
  EnvelopeSimple,
  Headset,
  Note,
  Rocket,
  SlidersHorizontal,
  SquaresFour,
  Target,
  Users,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";

type DemoPayload = {
  source?: string;
};

type DemoState = {
  step: number;
  source: string;
  name: string;
  email: string;
  businessType: string;
  bottleneck: string;
  focus: string;
  tools: string[];
  otherTool: string;
  urgency: string;
  attendees: string;
  successCriteria: string;
  notes: string;
  selectedDate: string;
  selectedTime: string;
};

type DemoContextValue = {
  isOpen: boolean;
  state: DemoState | null;
  open: (payload?: DemoPayload) => void;
  close: () => void;
  setState: Dispatch<SetStateAction<DemoState | null>>;
};

const DemoContext = createContext<DemoContextValue | null>(null);

const BUTTON_RESET: CSSProperties = {
  border: "none",
  background: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
};

const TIME_SLOTS = [
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
];
const MIN_BUSINESS_DAYS_AHEAD = 8;
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BIZ_OPTIONS = ["E-commerce", "SaaS / Software", "Agency / Consulting", "Real Estate", "Healthcare / Wellness", "Finance / Insurance", "Other"];
const BOTTLE_OPTIONS = [
  "Email overload",
  "Lead follow-ups",
  "Scheduling",
  "CRM updates",
  "Customer support",
  "Reporting",
  "Other workflow",
];
const TOOL_OPTIONS = ["Gmail", "Google Calendar", "HubSpot", "Slack", "Notion", "Airtable", "Google Sheets", "Intercom", "Shopify", "Other"];

function useDemoBooking() {
  const ctx = useContext(DemoContext);
  if (!ctx) {
    return {
      isOpen: false,
      state: null as DemoState | null,
      open: () => {},
      close: () => {},
      setState: (() => {}) as Dispatch<SetStateAction<DemoState | null>>,
    };
  }
  return ctx;
}

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidName(value: string) {
  return /^[\p{L}\p{M}'\-.\s]+$/u.test(value.trim());
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

function minBookingDate() {
  return addBusinessDays(todayInBangkok(), MIN_BUSINESS_DAYS_AHEAD);
}

function isSelectableBookingDate(date: Date) {
  const day = date.getDay();
  if (day !== 3 && day !== 5) return false;
  return date >= minBookingDate();
}

function firstAvailableBookingDate() {
  const date = new Date(minBookingDate());
  while (!isSelectableBookingDate(date)) {
    date.setDate(date.getDate() + 1);
  }
  return date;
}

function toDateInputValue(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatLongDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function localTZLabel() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g, " ");
  } catch {
    return "your timezone";
  }
}

function thaiTimeToLocal(thaiHours: number, thaiMinutes: number) {
  const thaiOffset = 7;
  const visitorOffset = -new Date().getTimezoneOffset() / 60;
  let hours = thaiHours + (visitorOffset - thaiOffset);
  let dayOffset = 0;
  if (hours >= 24) {
    hours -= 24;
    dayOffset = 1;
  }
  if (hours < 0) {
    hours += 24;
    dayOffset = -1;
  }
  const period = hours >= 12 ? "PM" : "AM";
  const display = `${hours % 12 || 12}:${String(thaiMinutes).padStart(2, "0")} ${period}`;
  return { display, dayOffset };
}

function parseTimeToMinutes(time: string) {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function getLocalTimeSlots() {
  const thaiSlots = [
    { value: "2:00 PM", hours: 14, minutes: 0 },
    { value: "2:30 PM", hours: 14, minutes: 30 },
    { value: "3:00 PM", hours: 15, minutes: 0 },
    { value: "3:30 PM", hours: 15, minutes: 30 },
    { value: "4:00 PM", hours: 16, minutes: 0 },
    { value: "4:30 PM", hours: 16, minutes: 30 },
    { value: "8:30 PM", hours: 20, minutes: 30 },
    { value: "9:00 PM", hours: 21, minutes: 0 },
    { value: "9:30 PM", hours: 21, minutes: 30 },
    { value: "10:00 PM", hours: 22, minutes: 0 },
    { value: "10:30 PM", hours: 22, minutes: 30 },
    { value: "11:00 PM", hours: 23, minutes: 0 },
  ];

  const isThai = -new Date().getTimezoneOffset() / 60 === 7;

  return thaiSlots.map((slot) => {
    const local = thaiTimeToLocal(slot.hours, slot.minutes);
    return {
      value: slot.value,
      thaiLabel: slot.value,
      localLabel: isThai ? slot.value : local.display,
      dayOffset: local.dayOffset,
      isThai,
    };
  });
}

function defaultFocus(bottleneck: string) {
  const key = bottleneck.toLowerCase();
  if (key.includes("email")) return "Inbox triage and responses";
  if (key.includes("lead")) return "Lead follow-up and qualification";
  if (key.includes("sched")) return "Scheduling and calendar automation";
  if (key.includes("crm")) return "CRM updates and pipeline hygiene";
  if (key.includes("support")) return "Customer support automation";
  if (key.includes("report")) return "Reporting and status updates";
  return "Custom workflow review";
}

function defaultTools(businessType: string, bottleneck: string) {
  const tools = new Set<string>(["Gmail", "Google Calendar"]);
  const type = businessType.toLowerCase();
  const issue = bottleneck.toLowerCase();

  if (type.includes("e-commerce")) tools.add("Shopify");
  if (type.includes("saas")) tools.add("HubSpot");
  if (type.includes("agency")) tools.add("Notion");
  if (type.includes("real estate")) tools.add("HubSpot");
  if (issue.includes("support")) tools.add("Intercom");
  if (issue.includes("crm")) tools.add("HubSpot");
  if (issue.includes("report")) tools.add("Google Sheets");

  return [...tools];
}

function defaultUrgency(source?: string) {
  if (source?.includes("homepage")) return "This month";
  return "This month";
}

function defaultAttendees(businessType: string) {
  const type = businessType.toLowerCase();
  if (type.includes("agency") || type.includes("saas")) return "Me + team";
  if (type.includes("real estate")) return "Me + assistant";
  return "Just me";
}

function initialState(payload?: DemoPayload): DemoState {
  const source = payload?.source ?? "website:book-demo";
  return {
    step: 1,
    source,
    name: "",
    email: "",
    businessType: "",
    bottleneck: "",
    focus: defaultFocus(""),
    tools: defaultTools("", ""),
    otherTool: "",
    urgency: defaultUrgency(source),
    attendees: defaultAttendees(""),
    successCriteria: "",
    notes: "",
    selectedDate: toDateInputValue(firstAvailableBookingDate()),
    selectedTime: TIME_SLOTS[0],
  };
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "rgba(255,255,255,0.72)" }}>{label}</span>
      {children}
    </label>
  );
}

function WizardHeading({ step, total, title, desc }: { step: number; total: number; title: string; desc: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              width: i + 1 === step ? 28 : 18,
              height: 18,
              borderRadius: 100,
              background: i + 1 <= step ? "var(--brand-primary)" : "var(--surface-3)",
              transition: "all 0.2s",
            }}
          />
        ))}
        <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginLeft: 4 }}>
          Step {step} of {total}
        </span>
      </div>
      <h3 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", marginBottom: 8 }}>{title}</h3>
      <p style={{ margin: 0, color: "rgba(242,242,240,0.65)", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

function ButtonChip({
  active,
  icon,
  children,
  onClick,
}: {
  active?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        minHeight: 44,
        padding: "10px 14px",
        borderRadius: 999,
        border: `1.5px solid ${active ? "var(--brand-primary)" : "var(--border)"}`,
        background: active ? "rgba(239,111,46,0.12)" : "var(--surface-2)",
        color: active ? "#fff" : "var(--text-primary)",
        fontWeight: 600,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      {icon}
      {children}
    </button>
  );
}

function iconForFocus(option: string) {
  if (option.includes("Lead")) return <Target size={18} weight="duotone" />;
  if (option.includes("Scheduling")) return <CalendarBlank size={18} weight="duotone" />;
  if (option.includes("Inbox")) return <EnvelopeSimple size={18} weight="duotone" />;
  if (option.includes("CRM")) return <SlidersHorizontal size={18} weight="duotone" />;
  if (option.includes("Support")) return <Headset size={18} weight="duotone" />;
  return <CheckCircle size={18} weight="duotone" />;
}

function iconForTool(tool: string) {
  if (tool === "Gmail") return <EnvelopeSimple size={18} weight="duotone" />;
  if (tool === "Google Calendar") return <CalendarBlank size={18} weight="duotone" />;
  if (tool === "HubSpot") return <Target size={18} weight="duotone" />;
  if (tool === "Slack") return <Users size={18} weight="duotone" />;
  if (tool === "Notion") return <Note size={18} weight="duotone" />;
  if (tool === "Airtable") return <SquaresFour size={18} weight="duotone" />;
  if (tool === "Google Sheets") return <SquaresFour size={18} weight="duotone" />;
  if (tool === "Intercom") return <Headset size={18} weight="duotone" />;
  if (tool === "Shopify") return <Wrench size={18} weight="duotone" />;
  return <CheckCircle size={18} weight="duotone" />;
}

function iconForUrgency(option: string) {
  if (option === "This week") return <Rocket size={18} weight="duotone" />;
  if (option === "This month") return <CalendarBlank size={18} weight="duotone" />;
  if (option === "Next quarter") return <Clock size={18} weight="duotone" />;
  return <CheckCircle size={18} weight="duotone" />;
}

function DemoBookingCalendar({
  state,
  update,
  slots,
}: {
  state: DemoState;
  update: (patch: Partial<DemoState>) => void;
  slots: ReturnType<typeof getLocalTimeSlots>;
}) {
  const [monthOffset, setMonthOffset] = useState(0);
  const base = useMemo(() => {
    const d = new Date(state.selectedDate ? `${state.selectedDate}T00:00:00` : firstAvailableBookingDate());
    d.setDate(1);
    d.setMonth(d.getMonth() + monthOffset);
    return d;
  }, [monthOffset, state.selectedDate]);

  const year = base.getFullYear();
  const month = base.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const monthLabel = `${MONTH_NAMES[month]} ${year}`;
  const selectedLabel = formatLongDate(state.selectedDate);
  const afternoonSlots = slots.filter((slot) => parseTimeToMinutes(slot.value) < parseTimeToMinutes("8:30 PM"));
  const eveningSlots = slots.filter((slot) => parseTimeToMinutes(slot.value) >= parseTimeToMinutes("8:30 PM"));

  const days: ReactNode[] = [];
  for (let i = 0; i < startOffset; i++) {
    days.push(<div key={`empty-${i}`} style={dayBoxStyle} />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isSelectable = isSelectableBookingDate(date);
    const dateStr = toDateInputValue(date);
    const isSelected = dateStr === state.selectedDate;

    days.push(
      <button
        key={dateStr}
        type="button"
        disabled={!isSelectable}
        onClick={() => update({ selectedDate: dateStr })}
        style={{
          ...dayBoxStyle,
          cursor: isSelectable ? "pointer" : "not-allowed",
          color: isSelected ? "#fff" : isSelectable ? "var(--text-primary)" : "rgba(255,255,255,0.25)",
          background: isSelected ? "var(--brand-primary)" : isSelectable ? "var(--surface-2)" : "rgba(255,255,255,0.02)",
          border: isSelected ? "1px solid var(--brand-primary)" : "1px solid var(--border)",
          opacity: isSelectable ? 1 : 0.45,
        }}
      >
        {day}
      </button>,
    );
  }

  return (
    <div style={{ display: "grid", gap: 20, gridTemplateColumns: "1.1fr 0.9fr" }} className="booking-grid">
      <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 20, padding: 18 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <button type="button" onClick={() => setMonthOffset((value) => value - 1)} style={navButtonStyle}>
            ←
          </button>
          <div style={{ fontWeight: 700 }}>{monthLabel}</div>
          <button type="button" onClick={() => setMonthOffset((value) => value + 1)} style={navButtonStyle}>
            →
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8, marginBottom: 8 }}>
          {DAY_NAMES.map((day) => (
            <div key={day} style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>
              {day}
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>{days}</div>

        <div style={{ marginTop: 16, fontSize: "0.8125rem", color: "var(--text-muted)" }}>
          Selected: <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{selectedLabel}</span>
        </div>
      </div>

      <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 20, padding: 18 }}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 8 }}>
            Pick a time
          </div>
          <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Times shown in your timezone where applicable.</div>
        </div>

        <div style={{ display: "grid", gap: 14 }}>
          {[
            { label: "Afternoon", items: afternoonSlots },
            { label: "Evening", items: eveningSlots },
          ].map((group) => (
            <div key={group.label}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 10 }}>
                {group.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {group.items.map((slot) => {
                  const active = state.selectedTime === slot.value;
                  const dayTag = slot.dayOffset === -1 ? " -1d" : slot.dayOffset === 1 ? " +1d" : "";
                  return (
                    <button
                      key={slot.value}
                      type="button"
                      onClick={() => update({ selectedTime: slot.value })}
                      style={{
                        minHeight: 44,
                        borderRadius: 999,
                        border: active ? "1.5px solid var(--brand-primary)" : "1.5px solid var(--border)",
                        background: active ? "rgba(239,111,46,0.12)" : "var(--surface)",
                        color: "var(--text-primary)",
                        padding: "10px 14px",
                        cursor: "pointer",
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                        minWidth: 112,
                        flex: "1 1 112px",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>
                        {slot.localLabel}
                        {dayTag}
                      </span>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.2 }}>{slot.thaiLabel} ICT</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, padding: 14, borderRadius: 16, background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 6 }}>
            Booking summary
          </div>
          <div style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--text-primary)" }}>
            {selectedLabel} · {state.selectedTime} ICT
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoModal() {
  const { isOpen, state, setState, close } = useDemoBooking();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [close, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setError(null);
      setSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen || !state) return null;

  const totalSteps = 6;
  const slots = getLocalTimeSlots();
  const selectedSlot = slots.find((slot) => slot.value === state.selectedTime) ?? slots[0];
  const selectedLocal = selectedSlot && !selectedSlot.isThai ? `${selectedSlot.localLabel} (${localTZLabel()}) · ${selectedSlot.thaiLabel} ICT` : `${state.selectedTime} ICT`;

  const update = (patch: Partial<DemoState>) => {
    setError(null);
    setState((current) => (current ? { ...current, ...patch } : current));
  };

  const goNext = () => {
    setError(null);
    if (state.step === 1) {
      if (!state.name.trim()) return setError("Add your name before continuing.");
      if (!validateEmail(state.email)) return setError("Add a work email address before continuing.");
      if (!state.businessType) return setError("Choose a business type before continuing.");
      if (!state.bottleneck) return setError("Choose the biggest bottleneck before continuing.");
    }
    update({ step: Math.min(totalSteps, state.step + 1) });
  };

  const goBack = () => {
    setError(null);
    update({ step: Math.max(1, state.step - 1) });
  };

  const submitRequest = async () => {
    if (!isValidName(state.name)) return setError("Add a valid name before booking.");
    if (!validateEmail(state.email)) return setError("Add a valid work email before booking.");

    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/demo-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.error || "We could not complete your booking.");
      }

      update({ step: 7 });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "We could not complete your booking.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-booking-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 210,
        background: "rgba(9,7,6,0.72)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 18,
      }}
      onClick={close}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(100%, 920px)",
          maxHeight: "92vh",
          overflowY: "auto",
          background: "linear-gradient(180deg, #221C17 0%, #1A1410 100%)",
          border: "1px solid var(--border)",
          borderRadius: 24,
          boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
          padding: 24,
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: state.step === 7 ? 0 : 20 }}>
          {state.step !== 7 && (
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand-primary)", marginBottom: 8 }}>
                Book a Demo
              </div>
              <h2 id="demo-booking-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: 8 }}>
                Prep the demo, then pick a time
              </h2>
              <p style={{ margin: 0, color: "rgba(242,242,240,0.65)", lineHeight: 1.6 }}>
                We capture the call context first so the calendar invite goes out with useful notes attached.
              </p>
            </div>
          )}
          <button type="button" onClick={close} aria-label="Close modal" style={{ ...BUTTON_RESET, color: "var(--text-muted)", fontSize: "1.25rem", lineHeight: 1 }}>
            ×
          </button>
        </div>

        {error && (
          <div
            role="alert"
            style={{
              marginBottom: 16,
              padding: "12px 14px",
              borderRadius: 14,
              background: "rgba(255,107,107,0.12)",
              border: "1px solid rgba(255,107,107,0.35)",
              color: "#FFD1D1",
              fontSize: "0.9rem",
            }}
          >
            {error}
          </div>
        )}

        {state.step === 1 && (
          <div>
            <WizardHeading step={1} total={totalSteps} title="Tell us who you are" desc="We need the basics before we prep the call." />
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }} className="demo-grid">
              <Field label="Name">
                <input value={state.name} onChange={(e) => update({ name: e.target.value })} placeholder="Jeff Puttstrife" style={inputStyle} autoComplete="name" />
              </Field>
              <Field label="Work email">
                <input value={state.email} onChange={(e) => update({ email: e.target.value })} placeholder="jeff@hirelessly.com" style={inputStyle} autoComplete="email" inputMode="email" />
              </Field>
              <Field label="Type of business">
                <select
                  value={state.businessType}
                  onChange={(e) => {
                    const businessType = e.target.value;
                    update({
                      businessType,
                      attendees: defaultAttendees(businessType),
                      tools: defaultTools(businessType, state.bottleneck),
                    });
                  }}
                  style={inputStyle}
                >
                  <option value="">Select a business type</option>
                  {BIZ_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Biggest bottleneck">
                <select
                  value={state.bottleneck}
                  onChange={(e) => {
                    const bottleneck = e.target.value;
                    const focus = defaultFocus(bottleneck);
                    update({
                      bottleneck,
                      focus,
                      successCriteria: `Show how ${focus.toLowerCase()} can be handled automatically.`,
                      tools: defaultTools(state.businessType, bottleneck),
                    });
                  }}
                  style={inputStyle}
                >
                  <option value="">Pick the one that hurts most</option>
                  {BOTTLE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
              <button type="button" onClick={goNext} style={primaryButtonStyle} disabled={submitting}>
                Continue
              </button>
            </div>
          </div>
        )}

        {state.step === 2 && (
          <div>
            <WizardHeading step={2} total={totalSteps} title="What should the demo focus on?" desc="Pick the angle you want us to prepare for." />
            <div style={{ display: "grid", gap: 12 }}>
              {[
                "Lead follow-up and qualification",
                "Scheduling and calendar automation",
                "Inbox triage and responses",
                "CRM updates and pipeline hygiene",
                "Support automation",
                "Custom workflow review",
              ].map((option) => (
                <ButtonChip key={option} active={state.focus === option} icon={iconForFocus(option)} onClick={() => update({ focus: option })}>
                  {option}
                </ButtonChip>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, gap: 12 }}>
              <button type="button" onClick={goBack} style={secondaryButtonStyle}>
                Back
              </button>
              <button type="button" onClick={goNext} style={primaryButtonStyle}>
                Continue
              </button>
            </div>
          </div>
        )}

        {state.step === 3 && (
          <div>
            <WizardHeading step={3} total={totalSteps} title="Which tools are in the stack?" desc="Choose the systems we should reference in the demo." />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {TOOL_OPTIONS.map((tool) => (
                <ButtonChip
                  key={tool}
                  active={state.tools.includes(tool)}
                  icon={iconForTool(tool)}
                  onClick={() =>
                    update({
                      tools: state.tools.includes(tool) ? state.tools.filter((item) => item !== tool) : [...state.tools, tool],
                      otherTool: tool === "Other" ? "" : state.otherTool,
                    })
                  }
                >
                  {tool}
                </ButtonChip>
              ))}
            </div>
            {state.tools.includes("Other") && (
              <div style={{ marginTop: 14 }}>
                <Field label="Please specify">
                  <input
                    value={state.otherTool}
                    onChange={(e) => update({ otherTool: e.target.value })}
                    placeholder="Please specify"
                    style={inputStyle}
                  />
                </Field>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, gap: 12 }}>
              <button type="button" onClick={goBack} style={secondaryButtonStyle}>
                Back
              </button>
              <button type="button" onClick={goNext} style={primaryButtonStyle}>
                Continue
              </button>
            </div>
          </div>
        )}

        {state.step === 4 && (
          <div>
            <WizardHeading step={4} total={totalSteps} title="How soon are you looking to launch?" desc="This helps us tailor the demo and next steps." />
            <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} className="urgency-grid">
              {[
                { option: "This week", hint: "Fast turnaround and urgent prep." },
                { option: "This month", hint: "Enough time to align the call and notes." },
                { option: "Next quarter", hint: "Planning ahead for a later kickoff." },
                { option: "Not sure yet", hint: "You’re still exploring the timing." },
              ].map((item) => {
                const active = state.urgency === item.option;
                return (
                  <button
                    key={item.option}
                    type="button"
                    onClick={() => update({ urgency: item.option })}
                    style={{
                      minHeight: 122,
                      borderRadius: 20,
                      border: active ? "1.5px solid var(--brand-primary)" : "1.5px solid var(--border)",
                      background: active ? "rgba(239,111,46,0.12)" : "var(--surface-2)",
                      color: "var(--text-primary)",
                      padding: 18,
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 12,
                      textAlign: "left",
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: active ? "rgba(239,111,46,0.18)" : "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {iconForUrgency(item.option)}
                    </div>
                    <div style={{ width: "100%" }}>
                      <div style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: 4 }}>{item.option}</div>
                      <div style={{ fontSize: "0.84rem", lineHeight: 1.5, color: "var(--text-muted)" }}>{item.hint}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, gap: 12 }}>
              <button type="button" onClick={goBack} style={secondaryButtonStyle}>
                Back
              </button>
              <button type="button" onClick={goNext} style={primaryButtonStyle}>
                Continue
              </button>
            </div>
          </div>
        )}

        {state.step === 5 && (
          <div>
            <WizardHeading step={5} total={totalSteps} title="What does a good demo look like?" desc="Give us a target outcome and any extra context." />
            <div style={{ display: "grid", gap: 14 }}>
              <Field label="Who needs to be involved?">
                <select value={state.attendees} onChange={(e) => update({ attendees: e.target.value })} style={inputStyle}>
                  <option value="Just me">Just me</option>
                  <option value="Me + team">Me + team</option>
                  <option value="Me + assistant">Me + assistant</option>
                  <option value="Need technical person">Need a technical person</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </Field>
              <Field label="Success criteria">
                <textarea
                  value={state.successCriteria}
                  onChange={(e) => update({ successCriteria: e.target.value })}
                  placeholder="What should this demo prove?"
                  style={{ ...inputStyle, minHeight: 110, resize: "vertical" }}
                />
              </Field>
              <Field label="Additional notes">
                <textarea
                  value={state.notes}
                  onChange={(e) => update({ notes: e.target.value })}
                  placeholder="Anything specific we should know before the call?"
                  style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
                />
              </Field>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, gap: 12 }}>
              <button type="button" onClick={goBack} style={secondaryButtonStyle}>
                Back
              </button>
              <button type="button" onClick={goNext} style={primaryButtonStyle}>
                Pick a time
              </button>
            </div>
          </div>
        )}

        {state.step === 6 && (
          <div>
            <WizardHeading step={6} total={totalSteps} title="Pick a date and time" desc="We’ll create the calendar invite once you confirm." />
            <DemoBookingCalendar state={state} update={update} slots={slots} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, gap: 12, flexWrap: "wrap" }}>
              <button type="button" onClick={goBack} style={secondaryButtonStyle}>
                Back
              </button>
              <button type="button" onClick={submitRequest} style={{ ...primaryButtonStyle, minWidth: 220, opacity: submitting ? 0.75 : 1 }} disabled={submitting}>
                {submitting ? "Booking..." : "Confirm booking"}
              </button>
            </div>
          </div>
        )}

        {state.step === 7 && (
          <div style={{ textAlign: "center", padding: "20px 0 8px" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 10 }}>You&apos;re booked.</div>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 10 }}>
              We&apos;ve captured your prep details and reserved {formatLongDate(state.selectedDate)} at {state.selectedTime} ({selectedLocal}).
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", margin: 0 }}>We&apos;ll send the calendar invite and confirmation to {state.email}.</p>
          </div>
        )}
      </div>

      <style>{`
        .demo-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 720px) {
          .demo-grid { grid-template-columns: 1fr !important; }
          .urgency-grid { grid-template-columns: 1fr !important; }
          .booking-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function DemoBookingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState | null>(null);

  const value = useMemo<DemoContextValue>(
    () => ({
      isOpen: state !== null,
      state,
      open: (payload = {}) => setState(initialState(payload)),
      close: () => setState(null),
      setState,
    }),
    [state],
  );

  return (
    <DemoContext.Provider value={value}>
      {children}
      <DemoModal />
    </DemoContext.Provider>
  );
}

export { DemoBookingProvider };

export function DemoBookingButton({
  children,
  style,
  className,
  type = "button",
  source,
  onClick,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; source?: string }) {
  const { open } = useDemoBooking();

  const mergedStyle: CSSProperties = {
    appearance: "none",
    WebkitAppearance: "none",
    fontFamily: "inherit",
    lineHeight: 1.1,
    cursor: "pointer",
    ...style,
  };

  return (
    <button
      type={type}
      style={mergedStyle}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          open({ source });
        }
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

const inputStyle: CSSProperties = {
  padding: "12px 16px",
  borderRadius: 12,
  border: "1.5px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.06)",
  color: "#fff",
  fontSize: "0.9375rem",
  fontFamily: "inherit",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

const primaryButtonStyle: CSSProperties = {
  minHeight: 44,
  padding: "12px 18px",
  borderRadius: 14,
  border: "none",
  background: "var(--brand-primary)",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
};

const secondaryButtonStyle: CSSProperties = {
  minHeight: 44,
  padding: "12px 18px",
  borderRadius: 14,
  border: "1.5px solid rgba(242,242,240,0.15)",
  background: "transparent",
  color: "var(--text-primary)",
  fontWeight: 700,
  cursor: "pointer",
};

const dayBoxStyle: CSSProperties = {
  minHeight: 42,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  border: "1px solid var(--border)",
};

const navButtonStyle: CSSProperties = {
  minHeight: 36,
  minWidth: 36,
  borderRadius: 10,
  border: "1px solid var(--border)",
  background: "var(--surface)",
  color: "var(--text-primary)",
  cursor: "pointer",
};
