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

const ACTIVITY = [
  { color: "#00D4AA", text: "Replied to 8 customer inquiries",  badge: "Done", badgeBg: "rgba(0,212,170,0.15)",   badgeColor: "#00FF87" },
  { color: "#5B5FEF", text: "Scheduled 3 sales calls",          badge: "Live", badgeBg: "rgba(91,95,239,0.2)",    badgeColor: "#8B8FFF" },
  { color: "#FFB74D", text: "Updated CRM with 12 leads",        badge: "AI",   badgeBg: "rgba(255,183,77,0.15)",  badgeColor: "#FFB74D" },
  { color: "#00D4AA", text: "Generated weekly report",          badge: "Done", badgeBg: "rgba(0,212,170,0.15)",   badgeColor: "#00FF87" },
];

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

  const tasks  = useCountUp(2847, 1400, triggered);
  const hours  = useCountUp(312,  1200, triggered);
  const emails = useCountUp(1204, 1500, triggered);
  const saved  = useCountUp(1200, 1300, triggered);

  const fmt = (n: number) => n.toLocaleString();

  return (
    <div
      ref={ref}
      style={{
        background: "var(--surface)",
        borderRadius: 24,
        border: "1px solid var(--border)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.40)",
        overflow: "hidden",
        opacity: triggered ? 1 : 0,
        transform: triggered ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        width: "100%",
      }}
    >
      <div style={{ background: "#1A1B2E", padding: 16, borderRadius: 24 }}>

        {/* Window chrome */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map(c => (
            <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "block" }} />
          ))}
          <span style={{ fontSize: "0.75rem", color: "#6B7280", marginLeft: 8, fontFamily: "DM Mono, monospace" }}>
            hirelessly / ai-assistant-dashboard
          </span>
        </div>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
          {[
            { label: "Tasks Automated", value: fmt(tasks),  suffix: "",    delta: "↑ 24% this week" },
            { label: "Hours Saved",     value: fmt(hours),  suffix: "h",   delta: "↑ this month" },
            { label: "Emails Handled",  value: fmt(emails), suffix: "",    delta: "↑ automated" },
            { label: "Cost Saved",      value: saved >= 1000 ? `$${(saved / 1000).toFixed(1)}k` : `$${saved}`, suffix: "", delta: "↑ vs traditional ops" },
          ].map((card, i) => (
            <div
              key={card.label}
              style={{
                background: "#252742",
                borderRadius: 8,
                padding: 14,
                opacity: triggered ? 1 : 0,
                transform: triggered ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
              }}
            >
              <div style={{ fontSize: "0.6875rem", color: "#6B7280", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{card.label}</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>{card.value}{card.suffix}</div>
              <div style={{ fontSize: "0.6875rem", color: "var(--accent)", marginTop: 2 }}>{card.delta}</div>
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div style={{ background: "#252742", borderRadius: 8, padding: 12 }}>
          <div style={{ fontSize: "0.6875rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
            Live AI Activity
          </div>
          {ACTIVITY.map((row, i) => (
            <div
              key={row.text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 0",
                borderBottom: i < ACTIVITY.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                opacity: triggered ? 1 : 0,
                transform: triggered ? "translateX(0)" : "translateX(-10px)",
                transition: `opacity 0.4s ease ${0.5 + i * 0.1}s, transform 0.4s ease ${0.5 + i * 0.1}s`,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: row.color, flexShrink: 0, display: "inline-block" }} />
              <span style={{ fontSize: "0.75rem", color: "#CBD5E1", flex: 1 }}>{row.text}</span>
              <span style={{ fontSize: "0.625rem", padding: "2px 8px", borderRadius: 100, fontWeight: 600, background: row.badgeBg, color: row.badgeColor }}>
                {row.badge}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
