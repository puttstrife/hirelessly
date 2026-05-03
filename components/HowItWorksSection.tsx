"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import DashboardMockup from "./DashboardMockup";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const STEPS = [
  {
    n: "1",
    title: "Analyze Your Business Workflows",
    desc: "We map out every repetitive task, handoff, and process that's eating your team's time.",
    lottie: "/animations/analyze-your-business-workflow.json",
  },
  {
    n: "2",
    title: "Build Your AI Assistant",
    desc: "Custom AI automations designed around your tools, voice, and business logic.",
    lottie: "/animations/build-your-ai-assistant.json",
  },
  {
    n: "3",
    title: "Deploy Across Your Systems",
    desc: "We integrate with your CRM, email, calendar, helpdesk, and more — no rip-and-replace.",
    lottie: null,
  },
  {
    n: "4",
    title: "Monitor and Optimize",
    desc: "Ongoing performance reviews to ensure your AI assistant keeps improving over time.",
    lottie: null,
  },
];

function BuildPlaceholder() {
  return (
    <div style={{ background: "#1A1B2E", borderRadius: 20, padding: 28, width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: "0.6875rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>ai-assistant / config.yml</div>
      {[
        { label: "Agent Name", value: "Your Business Assistant" },
        { label: "Trigger",    value: "New email → inbox" },
        { label: "Action",     value: "Classify → Route → Reply" },
        { label: "Integrations", value: "Gmail · HubSpot · Slack" },
        { label: "Status",     value: "Building…" },
      ].map((row, i) => (
        <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#252742", borderRadius: 8, padding: "10px 14px", opacity: 1, animation: `fadeUp 0.4s ease ${i * 0.08}s both` }}>
          <span style={{ fontSize: "0.8125rem", color: "#6B7280" }}>{row.label}</span>
          <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: row.label === "Status" ? "var(--accent)" : "#CBD5E1" }}>{row.value}</span>
        </div>
      ))}
    </div>
  );
}

function DeployPlaceholder() {
  const integrations = ["Gmail", "HubSpot", "Slack", "Notion", "Calendly", "Stripe", "Zendesk", "Airtable"];
  return (
    <div style={{ background: "#1A1B2E", borderRadius: 20, padding: 28, width: "100%" }}>
      <div style={{ fontSize: "0.6875rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>Connected Systems</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {integrations.map((name, i) => (
          <div key={name} style={{ background: "#252742", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: "0.8125rem", color: "#CBD5E1", fontWeight: 500 }}>{name}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, background: "rgba(0,255,135,0.08)", border: "1px solid rgba(0,255,135,0.2)", borderRadius: 10, padding: "10px 14px", fontSize: "0.8125rem", color: "var(--accent)", fontWeight: 600 }}>
        ✓ All systems live — no rip-and-replace
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const [active, setActive] = useState(0);
  const [animData, setAnimData] = useState<Record<string, object>>({});

  useEffect(() => {
    [
      "/animations/analyze-your-business-workflow.json",
      "/animations/build-your-ai-assistant.json",
    ].forEach(url => {
      fetch(url).then(r => r.json()).then(d => {
        setAnimData(prev => ({ ...prev, [url]: d }));
      }).catch(() => {});
    });
  }, []);

  return (
    <div style={{ display: "grid", gap: 48 }} className="how-grid">
      {/* Left: steps */}
      <div>
        <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
          Process
        </span>
        <h2 style={{ marginBottom: 12 }}>How We Work With You</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 32, lineHeight: 1.7 }}>
          We don&apos;t just hand you a chatbot. We build AI assistants that fit your exact workflows and deploy them into your existing systems.
        </p>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 19, top: 32, bottom: 32, width: 2, background: "linear-gradient(180deg, var(--brand-primary), var(--accent))" }} />
          {STEPS.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.n}
                onClick={() => setActive(i)}
                style={{
                  display: "flex", gap: 20, alignItems: "flex-start", padding: "16px 12px 16px 0", position: "relative",
                  width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
                  borderRadius: 12,
                  transition: "background 0.2s",
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", flexShrink: 0, zIndex: 1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.9375rem", fontWeight: 700,
                  background: isActive ? "var(--brand-primary)" : "var(--surface)",
                  color: isActive ? "#fff" : "var(--text-muted)",
                  border: isActive ? "none" : "2px solid var(--border)",
                  boxShadow: isActive ? "0 0 0 4px rgba(239,111,46,0.2)" : "0 0 0 4px var(--surface-2)",
                  transition: "all 0.25s ease",
                }}>
                  {s.n}
                </div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 4, color: isActive ? "var(--text-primary)" : "var(--text-muted)", transition: "color 0.2s" }}>{s.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, maxHeight: isActive ? 80 : 0, overflow: "hidden", transition: "max-height 0.3s ease", opacity: isActive ? 1 : 0 }}>{s.desc}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: visual panel */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "100%", transition: "opacity 0.3s ease", opacity: 1 }}>
          {(active === 0 || active === 1) && (() => {
            const url = STEPS[active].lottie!;
            const d = animData[url];
            return d
              ? (
                <div style={{ maxWidth: 480, margin: "0 auto" }}>
                  <Lottie animationData={d} loop autoplay style={{ width: "100%", display: "block" }} />
                </div>
              )
              : <div style={{ height: 300, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}>Loading…</div>;
          })()}
          {active === 2 && <DeployPlaceholder />}
          {active === 3 && <DashboardMockup />}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .how-grid { grid-template-columns: 1fr; }
        @media (min-width: 1024px) {
          .how-grid { grid-template-columns: 1fr 1fr !important; align-items: start; }
        }
      `}</style>
    </div>
  );
}
