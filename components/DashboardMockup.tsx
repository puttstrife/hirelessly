"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1400, triggered = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggered, target, duration]);
  return value;
}

const LEDGER = [
  { text: "Replied to inbound customer inquiries", badge: "Done" },
  { text: "Scheduled sales calls from new leads", badge: "Live" },
  { text: "Updated CRM records after each call", badge: "AI" },
  { text: "Generated the weekly ops summary", badge: "Done" },
];

const BADGE_STYLE: Record<string, { bg: string; color: string }> = {
  Done: { bg: "rgba(15,143,104,0.12)", color: "var(--signal)" },
  Live: { bg: "rgba(43,71,214,0.12)", color: "var(--cobalt-ink)" },
  AI: { bg: "rgba(97,82,206,0.12)", color: "var(--iris)" },
};

export default function DashboardMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    // If already in viewport on mount (hero), fire immediately
    const rect = el.getBoundingClientRect();
    const timeout = rect.top < window.innerHeight
      ? window.setTimeout(() => {
          setTriggered(true);
          obs.disconnect();
        }, 0)
      : undefined;
    return () => {
      if (timeout !== undefined) window.clearTimeout(timeout);
      obs.disconnect();
    };
  }, []);

  const tasks  = useCountUp(28, 1400, triggered);
  const hours  = useCountUp(31, 1200, triggered);
  const emails = useCountUp(120, 1500, triggered);
  const saved  = useCountUp(62, 1300, triggered);

  const fmt = (n: number) => n.toLocaleString();

  return (
    <div
      ref={ref}
      style={{
        background: "var(--surface)",
        borderRadius: 24,
        border: "1px solid var(--border)",
        boxShadow: "0 24px 64px -32px rgba(18,23,44,0.35)",
        overflow: "hidden",
        opacity: triggered ? 1 : 0,
        transform: triggered ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        width: "100%",
      }}
    >
      <div aria-hidden style={{ height: 3, background: "var(--horizon)" }} />
      <div style={{ padding: 20 }}>

        {/* Chrome */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "var(--ink-muted)", fontFamily: "'DM Mono', monospace" }}>
            operations-ledger.log
          </span>
          <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-muted)", border: "1px solid var(--border-strong)", borderRadius: 100, padding: "3px 10px" }}>
            Illustrative example
          </span>
        </div>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
          {[
            { label: "Tasks Automated", value: fmt(tasks),  suffix: "" },
            { label: "Hours Reclaimed",  value: fmt(hours),  suffix: "h" },
            { label: "Emails Handled",  value: fmt(emails), suffix: "" },
            { label: "Ops Cost Cut",    value: `${saved}`, suffix: "%" },
          ].map((card, i) => (
            <div
              key={card.label}
              style={{
                background: "var(--surface-2)",
                borderRadius: 12,
                padding: 14,
                opacity: triggered ? 1 : 0,
                transform: triggered ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
              }}
            >
              <div style={{ fontSize: "0.6875rem", color: "var(--ink-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{card.label}</div>
              <div className="tabular-nums" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--ink)" }}>{card.value}{card.suffix}</div>
            </div>
          ))}
        </div>

        {/* Ledger */}
        <div style={{ background: "var(--surface-2)", borderRadius: 12, padding: 12 }}>
          <div style={{ fontSize: "0.6875rem", color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
            Sample activity
          </div>
          {LEDGER.map((row, i) => {
            const badge = BADGE_STYLE[row.badge];
            return (
              <div
                key={row.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 0",
                  borderBottom: i < LEDGER.length - 1 ? "1px solid var(--border)" : "none",
                  opacity: triggered ? 1 : 0,
                  transform: triggered ? "translateX(0)" : "translateX(-10px)",
                  transition: `opacity 0.4s ease ${0.5 + i * 0.1}s, transform 0.4s ease ${0.5 + i * 0.1}s`,
                }}
              >
                <span style={{ fontSize: "0.8125rem", color: "var(--ink)", flex: 1 }}>{row.text}</span>
                <span style={{ fontSize: "0.625rem", padding: "2px 8px", borderRadius: 100, fontWeight: 700, background: badge.bg, color: badge.color }}>
                  {row.badge}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
