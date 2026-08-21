"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import ContactForm from "@/components/ContactForm";

type LeadCapturePayload = {
  planName?: string;
  monthly?: number;
  setup?: number;
  source?: string;
};

type LeadCaptureContextValue = {
  isOpen: boolean;
  payload: LeadCapturePayload | null;
  open: (payload?: LeadCapturePayload) => void;
  close: () => void;
};

const LeadCaptureContext = createContext<LeadCaptureContextValue | null>(null);

const BUTTON_RESET: CSSProperties = {
  border: "none",
  background: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
};

function formatMoney(value?: number) {
  if (typeof value !== "number" || Number.isNaN(value)) return "—";
  return `$${value.toLocaleString()}`;
}

function useLeadCapture() {
  const ctx = useContext(LeadCaptureContext);
  if (!ctx) {
    return {
      isOpen: false,
      payload: null as LeadCapturePayload | null,
      open: () => {},
      close: () => {},
    };
  }
  return ctx;
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 14 }}>
      <div style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>{value}</div>
    </div>
  );
}

function LeadCaptureModal() {
  const { isOpen, payload, close } = useLeadCapture();

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

  if (!isOpen) return null;

  const title = payload?.planName ? `${payload.planName} Plan Inquiry` : "Get Started";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-capture-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(9,7,6,0.72)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
      onClick={close}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(100%, 760px)",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "linear-gradient(180deg, #221C17 0%, #1A1410 100%)",
          border: "1px solid var(--border)",
          borderRadius: 24,
          boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
          padding: 24,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand-primary)", marginBottom: 8 }}>
              Contact Sales
            </div>
            <h2 id="lead-capture-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: 8 }}>
              {title}
            </h2>
            <p style={{ margin: 0, color: "rgba(242,242,240,0.65)", lineHeight: 1.6 }}>
              Send your details and we’ll capture the pricing context with the lead.
            </p>
          </div>
          <button type="button" onClick={close} aria-label="Close modal" style={{ ...BUTTON_RESET, color: "var(--text-muted)", fontSize: "1.25rem", lineHeight: 1 }}>
            ×
          </button>
        </div>

        {(typeof payload?.monthly === "number" || typeof payload?.setup === "number" || payload?.planName) && (
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(3, minmax(0, 1fr))", marginBottom: 20 }}>
            <SummaryCard label="Plan" value={payload?.planName ?? "Custom"} />
            <SummaryCard label="Monthly" value={formatMoney(payload?.monthly)} />
            <SummaryCard label="Setup" value={formatMoney(payload?.setup)} />
          </div>
        )}

        <ContactForm
          key={`${payload?.planName ?? "custom"}-${payload?.monthly ?? "none"}-${payload?.setup ?? "none"}-${payload?.source ?? "lead"}`}
          planName={payload?.planName}
          monthlyBudget={payload?.monthly}
          setupBudget={payload?.setup}
          source={payload?.source}
        />
      </div>
    </div>
  );
}

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [payload, setPayload] = useState<LeadCapturePayload | null>(null);

  const value = useMemo<LeadCaptureContextValue>(
    () => ({
      isOpen: payload !== null,
      payload,
      open: (nextPayload = {}) => setPayload(nextPayload),
      close: () => setPayload(null),
    }),
    [payload],
  );

  return (
    <LeadCaptureContext.Provider value={value}>
      {children}
      <LeadCaptureModal />
    </LeadCaptureContext.Provider>
  );
}

export function LeadCaptureButton({
  children,
  planName,
  monthly,
  setup,
  source,
  style,
  className,
  type = "button",
  onClick,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & LeadCapturePayload & { children: ReactNode }) {
  const { open } = useLeadCapture();
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
          open({ planName, monthly, setup, source });
        }
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
