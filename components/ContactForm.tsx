"use client";

import { useState } from "react";

const inputStyle = {
  padding: "12px 16px",
  borderRadius: 10,
  border: "1.5px solid var(--border-strong)",
  background: "var(--surface)",
  color: "var(--ink)",
  fontSize: "0.9375rem",
  fontFamily: "inherit",
  outline: "none",
  width: "100%",
  boxSizing: "border-box" as const,
};
const selectStyle = { ...inputStyle };
const labelStyle = { fontSize: "0.8125rem", fontWeight: 600, color: "var(--ink-muted)" };
const errStyle = { fontSize: "0.75rem", color: "var(--danger)", marginTop: 2 };
// Letters (incl. Unicode accents/ñ/é), spaces, hyphens, apostrophes, periods only
const NAME_RE = /^[\p{L}\p{M}'\-.\s]+$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactFormProps = {
  planName?: string;
  monthlyBudget?: number;
  setupBudget?: number;
  source?: string;
};

export default function ContactForm({ planName, monthlyBudget, setupBudget, source }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [businessType, setBusinessType] = useState("");
  const [otherBusiness, setOtherBusiness] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const validateName = (val: string) => {
    if (!val) {
      setNameError("");
      return true;
    }
    const ok = NAME_RE.test(val);
    setNameError(ok ? "" : "Name cannot contain special characters.");
    return ok;
  };

  // Only validate on blur — no error while actively typing
  const validateEmailOnBlur = (val: string) => {
    if (!val) {
      setEmailError("");
      return;
    }
    setEmailError(EMAIL_RE.test(val) ? "" : "Enter a valid email address");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries()) as Record<string, string>;

    const nameOk = validateName(payload.name);
    const emailOk = EMAIL_RE.test(payload.email);
    if (!emailOk) setEmailError("Enter a valid email address");
    if (!nameOk || !emailOk) return;

    if (payload.business_type === "other" && otherBusiness.trim()) {
      payload.business_type = otherBusiness.trim();
    }

    if (typeof monthlyBudget === "number") payload.monthly = String(monthlyBudget);
    if (typeof setupBudget === "number") payload.setup = String(setupBudget);
    if (planName) payload.plan_selected = planName;
    payload.source = source ?? payload.source ?? "website";

    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "We could not send your request right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "32px 0" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--ink)", marginBottom: 12, letterSpacing: "-0.02em" }} className="contact-msg">
          You&apos;re on the list.
        </div>
        <p style={{ fontSize: "0.9375rem", color: "var(--ink-muted)", lineHeight: 1.7, maxWidth: 380, margin: "0 auto" }} className="contact-sub">
          We&apos;ll review your details and reach out within 1 business day with a plan built around your workflow.
        </p>
        <style>{`
          @keyframes fade-up {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .contact-msg { animation: fade-up 0.4s ease both; }
          .contact-sub { animation: fade-up 0.4s ease 0.15s both; }
        `}</style>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="form-row" style={{ display: "grid", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={labelStyle}>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Alex Rivera"
            required
            style={{ ...inputStyle, borderColor: nameError ? "var(--danger)" : "var(--border-strong)" }}
            onBlur={(e) => validateName(e.target.value)}
            onChange={() => nameError && setNameError("")}
          />
          {nameError && <span style={errStyle}>{nameError}</span>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={labelStyle}>Work email</label>
          <input
            type="email"
            name="email"
            placeholder="alex@company.com"
            required
            style={{ ...inputStyle, borderColor: emailError ? "var(--danger)" : "var(--border-strong)" }}
            onBlur={(e) => validateEmailOnBlur(e.target.value)}
            onChange={() => emailError && setEmailError("")}
          />
          {emailError && <span style={errStyle}>{emailError}</span>}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={labelStyle}>Type of business</label>
        <select
          name="business_type"
          required
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          style={selectStyle}
        >
          <option value="" disabled>
            Select your industry
          </option>
          <option value="ecommerce">E-commerce</option>
          <option value="saas">SaaS / Software</option>
          <option value="agency">Agency / Consulting</option>
          <option value="real-estate">Real Estate</option>
          <option value="healthcare">Healthcare / Wellness</option>
          <option value="finance">Finance / Insurance</option>
          <option value="other">Other</option>
        </select>
        {businessType === "other" && (
          <input
            type="text"
            placeholder="Describe your business type"
            value={otherBusiness}
            onChange={(e) => setOtherBusiness(e.target.value)}
            required
            style={{ ...inputStyle, marginTop: 8 }}
          />
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={labelStyle}>What&apos;s your biggest operational bottleneck?</label>
        <select name="bottleneck" required style={selectStyle}>
          <option value="" disabled>
            Pick the one that hurts most
          </option>
          <option value="email">Email — too much to manage manually</option>
          <option value="leads">Lead follow-ups — they fall through the cracks</option>
          <option value="scheduling">Scheduling — back-and-forth is killing time</option>
          <option value="crm">CRM updates — always behind or inaccurate</option>
          <option value="support">Customer support — response times are too slow</option>
          <option value="reporting">Reporting — building it manually every week</option>
        </select>
      </div>

      <input type="hidden" name="monthly" value={typeof monthlyBudget === "number" ? String(monthlyBudget) : ""} />
      <input type="hidden" name="setup" value={typeof setupBudget === "number" ? String(setupBudget) : ""} />
      <input type="hidden" name="plan_selected" value={planName ?? ""} />
      <input type="hidden" name="source" value={source ?? "website"} />

      <button
        type="submit"
        className="contact-btn"
        disabled={loading}
        style={{
          padding: "16px",
          background: "var(--ink)",
          color: "var(--paper)",
          borderRadius: 14,
          fontWeight: 700,
          fontSize: "1rem",
          fontFamily: "inherit",
          cursor: loading ? "default" : "pointer",
          border: "none",
          marginTop: 4,
          opacity: loading ? 0.7 : 1,
          transition: "opacity 0.2s",
        }}
      >
        {loading ? "Sending…" : "Get My Automation Plan"}
      </button>
      {submitError && <div style={{ fontSize: "0.8125rem", color: "var(--danger)", lineHeight: 1.5 }}>{submitError}</div>}
      <style>{`
        .form-row { grid-template-columns: 1fr; }
        @media (min-width: 480px) { .form-row { grid-template-columns: 1fr 1fr; } }
        .contact-btn { transition: background 0.2s, transform 0.15s, box-shadow 0.2s; }
        .contact-btn:hover { background: var(--cobalt) !important; color: #fff !important; transform: translateY(-2px); box-shadow: 0 12px 28px -12px rgba(43,71,214,0.55); }
        .contact-btn:active { transform: translateY(0); box-shadow: none; }
      `}</style>
    </form>
  );
}
