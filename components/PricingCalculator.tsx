"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LeadCaptureButton } from "@/components/LeadCapture";

// ─── Data ────────────────────────────────────────────────────────────────────

const AGENTS = [
  { id: "va", label: "VA Agent", desc: "Emails, scheduling, admin tasks", price: 0, included: true },
  { id: "email", label: "Email Agent", desc: "Inbox triage, drafts, follow-ups", price: 0, included: true },
  { id: "scheduler", label: "Scheduler Agent", desc: "Books meetings, manages calendar", price: 10, included: false },
  { id: "crm", label: "CRM Agent", desc: "Updates records, tags leads, logs activity", price: 15, included: false },
  { id: "support", label: "Support Agent", desc: "Resolves 40–60% of customer inquiries automatically", price: 20, included: false },
  { id: "lead", label: "Lead Agent", desc: "Qualifies leads, books discovery calls 24/7", price: 20, included: false },
  { id: "research", label: "Research Agent", desc: "Web browsing, summaries, structured reports", price: 15, included: false },
  { id: "seo", label: "SEO Agent", desc: "Site audits, optimized content, keyword tracking", price: 20, included: false },
  { id: "coding", label: "Coding Agent", desc: "Reads codebase, writes/tests code, bug fixes", price: 29, included: false },
  { id: "design", label: "Design Agent", desc: "Reads Figma, generates production-ready code", price: 29, included: false },
];

const VOLUME_LEVELS = [
  { id: "light", label: "Light", desc: "<500 tasks/mo — simple, single-step tasks", multiplier: 1 },
  { id: "standard", label: "Standard", desc: "500–2,000 tasks/mo — mixed complexity, some agentic chains", multiplier: 1.3 },
  { id: "heavy", label: "Heavy", desc: "2,000+ tasks/mo — high volume, multi-step agentic workflows", multiplier: 1.6 },
];

const INTEGRATION_GROUPS = [
  {
    label: "Basic — Included",
    included: true,
    items: ["Gmail", "Google Calendar", "Notion", "Google Sheets"],
  },
  {
    label: "Advanced — +$10/mo each",
    included: false,
    items: ["HubSpot", "Salesforce", "Shopify", "Pipedrive", "Intercom", "Slack", "Twilio", "Airtable", "ClickUp", "Stripe", "QuickBooks", "GoHighLevel"],
  },
];

const SUPPORT_LEVELS = [
  { id: "self-serve", label: "Self-Serve", desc: "Access to docs and async support", price: 0 },
  { id: "standard", label: "Standard Support", desc: "Response within 24hrs", price: 15 },
  { id: "priority", label: "Priority Support", desc: "Response within 4hrs + monthly check-in", price: 40 },
];

// ─── Types ───────────────────────────────────────────────────────────────────

type VolumeId = "light" | "standard" | "heavy";
type SupportId = "self-serve" | "standard" | "priority";

interface CalcState {
  step: number;
  agents: string[];
  volume: VolumeId;
  integrations: string[];
  support: SupportId;
}

// ─── Price helpers ───────────────────────────────────────────────────────────

function calcPrice(state: CalcState) {
  const base = 149;
  const agentsCost = AGENTS.filter((a) => !a.included && state.agents.includes(a.id)).reduce((s, a) => s + a.price, 0);
  const vol = VOLUME_LEVELS.find((v) => v.id === state.volume)!;
  const volumeAdj = Math.round((base + agentsCost) * (vol.multiplier - 1));
  const integrationsCost = state.integrations.filter((i) => INTEGRATION_GROUPS[1].items.includes(i)).length * 10;
  const supportCost = SUPPORT_LEVELS.find((s) => s.id === state.support)!.price;
  // 25% buffer covers unpredictable agentic API call spikes (multi-step reasoning loops, retries)
  const agenticBuffer = Math.round((base + agentsCost + volumeAdj) * 0.25);
  const total = base + agentsCost + volumeAdj + integrationsCost + supportCost + agenticBuffer;
  return { base, agentsCost, volumeAdj, integrationsCost, supportCost, agenticBuffer, total };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

const mono: React.CSSProperties = { fontFamily: "DM Mono, monospace" };

function SummaryRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
      <span style={{ fontSize: "0.9375rem", color: "rgba(242,242,240,0.65)" }}>{label}</span>
      <span style={{ ...mono, fontSize: "0.9375rem", fontWeight: 700, color: accent ? "var(--accent)" : "var(--text-primary)" }}>{value}</span>
    </div>
  );
}

function StepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40 }}>
      {Array.from({ length: total }).map((_, i) => {
        const active = i + 1 === step;
        const done = i + 1 < step;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: active ? 32 : 24,
              height: 24,
              borderRadius: 100,
              background: done ? "var(--brand-primary)" : active ? "var(--brand-primary)" : "var(--surface-3)",
              border: active ? "none" : done ? "none" : "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.6875rem",
              fontWeight: 700,
              color: done || active ? "#fff" : "var(--text-muted)",
              transition: "all 0.2s",
            }}>
              {done ? "✓" : i + 1}
            </div>
            {i < total - 1 && (
              <div style={{ width: 24, height: 1, background: done ? "var(--brand-primary)" : "var(--border)", transition: "background 0.3s" }} />
            )}
          </div>
        );
      })}
      <span style={{ marginLeft: 8, fontSize: "0.8125rem", color: "var(--text-muted)" }}>
        Step {step} of {total}
      </span>
    </div>
  );
}

function SectionTitle({ label, title, desc }: { label: string; title: string; desc?: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand-primary)", background: "rgba(239,111,46,0.1)", padding: "3px 10px", borderRadius: 100, marginBottom: 12 }}>{label}</span>
      <h2 style={{ fontSize: "clamp(1.375rem, 3vw, 1.875rem)", fontWeight: 800, letterSpacing: "-0.02em", fontFamily: "Roboto Condensed, sans-serif", marginBottom: desc ? 8 : 0 }}>{title}</h2>
      {desc && <p style={{ fontSize: "0.9375rem", color: "rgba(242,242,240,0.6)", lineHeight: 1.6 }}>{desc}</p>}
    </div>
  );
}

// ─── Steps ───────────────────────────────────────────────────────────────────

function Step1({ state, setState }: { state: CalcState; setState: React.Dispatch<React.SetStateAction<CalcState>> }) {
  const toggle = (id: string) => {
    const agent = AGENTS.find((a) => a.id === id)!;
    if (agent.included) return;
    setState((s) => ({
      ...s,
      agents: s.agents.includes(id) ? s.agents.filter((a) => a !== id) : [...s.agents, id],
    }));
  };

  return (
    <>
      <SectionTitle label="Step 1 — Agents" title="Select Your AI Agents" desc="VA Agent and Email Agent are included in every plan." />
      <div className="calc-grid">
        {AGENTS.map((agent) => {
          const selected = agent.included || state.agents.includes(agent.id);
          return (
            <div
              key={agent.id}
              onClick={() => toggle(agent.id)}
              className="calc-card"
              style={{
                background: "var(--surface-2)",
                border: `1.5px solid ${selected && !agent.included ? "var(--brand-primary)" : selected && agent.included ? "rgba(0,255,135,0.25)" : "var(--border)"}`,
                borderRadius: 16,
                padding: "16px 18px",
                cursor: agent.included ? "default" : "pointer",
                boxShadow: selected && !agent.included ? "0 0 0 3px rgba(239,111,46,0.15)" : "none",
                transition: "border-color 0.15s, box-shadow 0.15s",
                opacity: 1,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)", fontFamily: "Roboto Condensed, sans-serif" }}>{agent.label}</span>
                <span style={{ ...mono, fontSize: "0.8125rem", fontWeight: 700, color: agent.included ? "var(--accent)" : "var(--brand-primary)", whiteSpace: "nowrap", marginLeft: 8 }}>
                  {agent.included ? "Included" : `+$${agent.price}/mo`}
                </span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "rgba(242,242,240,0.55)", lineHeight: 1.5, margin: 0 }}>{agent.desc}</p>
              {agent.included && (
                <div style={{ marginTop: 8, display: "inline-block", fontSize: "0.625rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--accent)", background: "rgba(0,255,135,0.08)", padding: "2px 8px", borderRadius: 100 }}>Always included</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

function Step2({ state, setState }: { state: CalcState; setState: React.Dispatch<React.SetStateAction<CalcState>> }) {
  return (
    <>
      <SectionTitle label="Step 2 — Volume" title="What's Your Usage Volume?" desc="We'll scale resources to match your task volume." />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {VOLUME_LEVELS.map((vol) => {
          const selected = state.volume === vol.id;
          return (
            <div
              key={vol.id}
              onClick={() => setState((s) => ({ ...s, volume: vol.id as VolumeId }))}
              style={{
                background: "var(--surface-2)",
                border: `1.5px solid ${selected ? "var(--brand-primary)" : "var(--border)"}`,
                borderRadius: 16,
                padding: "20px 24px",
                cursor: "pointer",
                boxShadow: selected ? "0 0 0 3px rgba(239,111,46,0.15)" : "none",
                transition: "border-color 0.15s, box-shadow 0.15s",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.0625rem", fontFamily: "Roboto Condensed, sans-serif", marginBottom: 4 }}>{vol.label}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(242,242,240,0.55)" }}>{vol.desc}</div>
              </div>
              <div style={{ ...mono, fontSize: "0.875rem", fontWeight: 700, color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                {vol.multiplier === 1 ? "Base rate" : `×${vol.multiplier} on agents`}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Step3({ state, setState }: { state: CalcState; setState: React.Dispatch<React.SetStateAction<CalcState>> }) {
  const toggle = (item: string, included: boolean) => {
    if (included) return;
    setState((s) => ({
      ...s,
      integrations: s.integrations.includes(item) ? s.integrations.filter((i) => i !== item) : [...s.integrations, item],
    }));
  };

  return (
    <>
      <SectionTitle label="Step 3 — Integrations" title="Which Tools Do You Use?" desc="Basic integrations are included. Advanced ones are $10/mo each." />
      {INTEGRATION_GROUPS.map((group) => (
        <div key={group.label} style={{ marginBottom: 28 }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: group.included ? "var(--accent)" : "var(--text-muted)", marginBottom: 12 }}>{group.label}</div>
          <div className="chip-grid">
            {group.items.map((item) => {
              const selected = group.included || state.integrations.includes(item);
              return (
                <div
                  key={item}
                  onClick={() => toggle(item, group.included)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 100,
                    border: `1.5px solid ${selected && !group.included ? "var(--brand-primary)" : selected && group.included ? "rgba(0,255,135,0.3)" : "var(--border)"}`,
                    background: selected && !group.included ? "rgba(239,111,46,0.08)" : selected && group.included ? "rgba(0,255,135,0.06)" : "var(--surface-2)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: selected ? "var(--text-primary)" : "rgba(242,242,240,0.5)",
                    cursor: group.included ? "default" : "pointer",
                    transition: "all 0.15s",
                    boxShadow: selected && !group.included ? "0 0 0 2px rgba(239,111,46,0.12)" : "none",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

function Step4({ state, setState }: { state: CalcState; setState: React.Dispatch<React.SetStateAction<CalcState>> }) {
  return (
    <>
      <SectionTitle label="Step 4 — Support" title="Choose Your Support Level" desc="All plans include access to our setup documentation." />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {SUPPORT_LEVELS.map((sup) => {
          const selected = state.support === sup.id;
          return (
            <div
              key={sup.id}
              onClick={() => setState((s) => ({ ...s, support: sup.id as SupportId }))}
              style={{
                background: "var(--surface-2)",
                border: `1.5px solid ${selected ? "var(--brand-primary)" : "var(--border)"}`,
                borderRadius: 16,
                padding: "20px 24px",
                cursor: "pointer",
                boxShadow: selected ? "0 0 0 3px rgba(239,111,46,0.15)" : "none",
                transition: "border-color 0.15s, box-shadow 0.15s",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.0625rem", fontFamily: "Roboto Condensed, sans-serif", marginBottom: 4 }}>{sup.label}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(242,242,240,0.55)" }}>{sup.desc}</div>
              </div>
              <div style={{ ...mono, fontSize: "0.9375rem", fontWeight: 700, color: sup.price === 0 ? "var(--accent)" : "var(--brand-primary)", whiteSpace: "nowrap" }}>
                {sup.price === 0 ? "Included" : `+$${sup.price}/mo`}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Step5({ state }: { state: CalcState }) {
  const price = calcPrice(state);
  const selectedAgents = AGENTS.filter((a) => !a.included && state.agents.includes(a.id));
  const advancedIntegrations = state.integrations.filter((i) => INTEGRATION_GROUPS[1].items.includes(i));
  const support = SUPPORT_LEVELS.find((s) => s.id === state.support)!;
  const volume = VOLUME_LEVELS.find((v) => v.id === state.volume)!;

  return (
    <>
      <SectionTitle label="Step 5 — Summary" title="Your Custom Plan" />
      <div style={{ display: "grid", gap: 24 }} className="summary-grid">
        {/* Breakdown */}
        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 20, padding: 28 }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 16 }}>Plan Breakdown</div>
          <SummaryRow label="Base plan (VA + Email agents)" value="$149/mo" />
          {selectedAgents.length > 0 && (
            <SummaryRow label={`Add-on agents (${selectedAgents.map((a) => a.label).join(", ")})`} value={`+$${price.agentsCost}/mo`} />
          )}
          {price.volumeAdj > 0 && (
            <SummaryRow label={`Volume adjustment (${volume.label} ×${volume.multiplier})`} value={`+$${price.volumeAdj}/mo`} />
          )}
          {advancedIntegrations.length > 0 && (
            <SummaryRow label={`Advanced integrations (${advancedIntegrations.join(", ")})`} value={`+$${price.integrationsCost}/mo`} />
          )}
          {price.supportCost > 0 && (
            <SummaryRow label={support.label} value={`+$${price.supportCost}/mo`} />
          )}
          <SummaryRow label="Agentic buffer (25%) — covers multi-step reasoning spikes" value={`+$${price.agenticBuffer}/mo`} accent />
          {/* Total */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, marginTop: 4 }}>
            <span style={{ fontWeight: 800, fontSize: "1.0625rem", fontFamily: "Roboto Condensed, sans-serif" }}>Monthly Total</span>
            <span style={{ ...mono, fontSize: "1.5rem", fontWeight: 700, color: "var(--accent)" }}>${price.total}/mo</span>
          </div>
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.875rem", color: "rgba(242,242,240,0.55)" }}>One-time setup fee</span>
            <span style={{ ...mono, fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-muted)" }}>$299</span>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, rgba(239,111,46,0.1), rgba(0,255,135,0.05))", border: "1px solid var(--brand-primary)", borderRadius: 20, padding: 28, textAlign: "center" }}>
          <div style={{ ...mono, fontSize: "2rem", fontWeight: 700, color: "var(--accent)", marginBottom: 4 }}>${price.total}/mo</div>
          <div style={{ fontSize: "0.875rem", color: "rgba(242,242,240,0.5)", marginBottom: 24 }}>+ $299 one-time setup fee</div>
          <LeadCaptureButton
            planName="Custom Calculator Plan"
            monthly={price.total}
            setup={299}
            source="pricing-calculator"
            style={{ display: "block", width: "100%", padding: "16px 32px", background: "var(--brand-primary)", color: "#fff", fontWeight: 700, borderRadius: 16, fontSize: "1rem", textDecoration: "none", marginBottom: 12, border: "none" }}
          >
            Get Started — Go Live in 5–7 Days
          </LeadCaptureButton>
          <p style={{ fontSize: "0.8125rem", color: "rgba(242,242,240,0.4)", margin: 0 }}>
            No long-term contracts. Cancel anytime after month 3.
          </p>
        </div>
      </div>
    </>
  );
}

// ─── Sticky Price Bar ─────────────────────────────────────────────────────────

function PriceBar({ total, step }: { total: number; step: number }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(26,20,16,0.92)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid var(--border)",
        padding: "14px 20px",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: "0.8125rem", color: "rgba(242,242,240,0.5)" }}>Running total</span>
          <motion.span
            key={total}
            initial={{ scale: 1.15, color: "#00FF87" }}
            animate={{ scale: 1, color: "#00FF87" }}
            transition={{ duration: 0.25 }}
            style={{ ...mono, fontSize: "1.25rem", fontWeight: 700 }}
          >
            ${total}/mo
          </motion.span>
        </div>
        <span style={{ fontSize: "0.8125rem", color: "rgba(242,242,240,0.35)" }}>
          {step < 5 ? `Step ${step} of 5` : "+ $299 setup fee"}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const TOTAL_STEPS = 5;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
};

export default function PricingCalculator() {
  const [state, setState] = useState<CalcState>({
    step: 1,
    agents: [],
    volume: "light",
    integrations: [],
    support: "self-serve",
  });
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > state.step ? 1 : -1);
    setState((s) => ({ ...s, step: next }));
  };

  const price = calcPrice(state);

  return (
    <>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 20px 120px" }}>
        <StepIndicator step={state.step} total={TOTAL_STEPS} />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={state.step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            {state.step === 1 && <Step1 state={state} setState={setState} />}
            {state.step === 2 && <Step2 state={state} setState={setState} />}
            {state.step === 3 && <Step3 state={state} setState={setState} />}
            {state.step === 4 && <Step4 state={state} setState={setState} />}
            {state.step === 5 && <Step5 state={state} />}
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        <div style={{ display: "flex", gap: 12, marginTop: 40, justifyContent: "space-between" }}>
          {state.step > 1 ? (
            <button
              onClick={() => go(state.step - 1)}
              style={{ padding: "12px 24px", borderRadius: 12, border: "1.5px solid var(--border)", background: "transparent", color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9375rem", cursor: "pointer" }}
            >
              ← Back
            </button>
          ) : (
            <div />
          )}
          {state.step < TOTAL_STEPS && (
            <button
              onClick={() => go(state.step + 1)}
              style={{ padding: "12px 32px", borderRadius: 12, background: "var(--brand-primary)", color: "#fff", fontWeight: 700, fontSize: "0.9375rem", cursor: "pointer", border: "none" }}
            >
              Next →
            </button>
          )}
        </div>
      </div>

      <PriceBar total={price.total} step={state.step} />

      <style>{`
        .calc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 520px) {
          .calc-grid { grid-template-columns: 1fr 1fr; }
        }
        .chip-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .summary-grid {
          grid-template-columns: 1fr;
        }
      `}</style>
    </>
  );
}
