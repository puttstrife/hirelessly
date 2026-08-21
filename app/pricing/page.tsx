"use client";

import Link from "next/link";
import { useState } from "react";
import { LeadCaptureButton } from "@/components/LeadCapture";

const ANNUAL_DISCOUNT = 0.10;

const PLANS = [
  {
    id: "assisted",
    name: "Assisted",
    tagline: "For businesses starting their AI journey",
    monthlyBase: 149,
    setupFee: 499,
    baseActions: 2000,
    maxActions: 8000,
    actionStep: 500,
    overageRate: 0.010,
    agents: 1,
    color: "rgba(242,242,240,0.08)",
    border: "rgba(242,242,240,0.12)",
    ctaColor: "transparent",
    ctaBorder: "1.5px solid rgba(242,242,240,0.2)",
    ctaText: "var(--text-primary)",
    badge: null,
    features: [
      "1 AI agent (your choice)",
      "Email or scheduling automation",
      "1 integration (Gmail, Outlook, etc.)",
      "25% agentic buffer included",
      "Weekly activity digest",
      "Standard support",
      "3-month minimum",
    ],
    notIncluded: ["Multi-agent coordination", "CRM sync", "Priority support"],
  },
  {
    id: "copilot",
    name: "Copilot",
    tagline: "For growing teams replacing repetitive ops",
    monthlyBase: 199,
    setupFee: 999,
    baseActions: 8000,
    maxActions: 20000,
    actionStep: 1000,
    overageRate: 0.008,
    agents: 3,
    color: "rgba(239,111,46,0.06)",
    border: "var(--brand-primary)",
    ctaColor: "var(--brand-primary)",
    ctaBorder: "none",
    ctaText: "#fff",
    badge: "Most Popular",
    features: [
      "3 AI agents (email, scheduler, CRM)",
      "Multi-agent coordination",
      "Up to 3 integrations",
      "25% agentic buffer included",
      "Bi-weekly strategy call",
      "Priority support",
      "3-month minimum",
    ],
    notIncluded: ["Custom agent logic", "Dedicated account manager"],
  },
  {
    id: "autopilot",
    name: "Autopilot",
    tagline: "For businesses running fully on AI ops",
    monthlyBase: 399,
    setupFee: 1999,
    baseActions: 20000,
    maxActions: 50000,
    actionStep: 2000,
    overageRate: 0.006,
    agents: 5,
    color: "rgba(0,255,135,0.04)",
    border: "rgba(0,255,135,0.3)",
    ctaColor: "var(--accent)",
    ctaBorder: "none",
    ctaText: "#0a0a0a",
    badge: "Best Value",
    features: [
      "5 AI agents (full stack)",
      "Custom agent logic & workflows",
      "Unlimited integrations",
      "25% agentic buffer included",
      "Dedicated account manager",
      "Monthly strategy sessions",
      "SLA guarantee",
      "3-month minimum",
    ],
    notIncluded: [],
  },
];

const FAQS = [
  { q: "What counts as an action?", a: "One action = one task completed. Sending an email reply, updating a CRM record, booking a meeting, resolving a support ticket — each is 1 action. Most small businesses use 500–3,000/mo." },
  { q: "What's the setup fee for?", a: "The setup fee covers workflow mapping, agent configuration, integration testing, and your first 30 days of optimization. It's a one-time cost — no recurring setup charges." },
  { q: "Is there a long-term contract?", a: "No long-term contract. We ask for a 3-month minimum because setup and optimization takes 30–60 days to fully tune. After month 3, cancel anytime." },
  { q: "What if I exceed my action limit?", a: "We alert you at 80% of your monthly action limit. Overage is billed at your plan's per-action rate. You'll never be auto-charged without notice." },
  { q: "Can I switch plans?", a: "Yes. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle." },
  { q: "What tools do you connect to?", a: "Gmail, Outlook, Google Calendar, HubSpot, Salesforce, Slack, Notion, Intercom, and more. If your tool has a REST API or webhook, we can connect to it." },
];

function PricingCard({ plan, annual }: { plan: typeof PLANS[0]; annual: boolean }) {
  const steps: number[] = [];
  for (let a = plan.baseActions; a <= plan.maxActions; a += plan.actionStep) steps.push(a);

  const [idx, setIdx] = useState(0);
  const actions = steps[idx];

  const basePrice = plan.monthlyBase * (annual ? 1 - ANNUAL_DISCOUNT : 1);
  const extraActions = Math.max(0, actions - plan.baseActions);
  const extraCost = extraActions * plan.overageRate;
  const totalMonthly = basePrice + extraCost;
  const annualSavings = plan.monthlyBase * 12 * ANNUAL_DISCOUNT;

  return (
    <div style={{ background: plan.color, border: `1.5px solid ${plan.border}`, borderRadius: 24, padding: 28, display: "flex", flexDirection: "column", gap: 20, position: "relative" }}>
      {plan.badge && (
        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: plan.id === "autopilot" ? "var(--accent)" : "var(--brand-primary)", color: plan.id === "autopilot" ? "#0a0a0a" : "#fff", fontSize: "0.6875rem", fontWeight: 800, padding: "4px 14px", borderRadius: 100, letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          {plan.id === "autopilot" ? "✦ " : "◆ "}{plan.badge}
        </div>
      )}

      {/* Plan name */}
      <div>
        <div style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "Roboto Condensed, sans-serif", letterSpacing: "-0.01em", marginBottom: 4 }}>{plan.name}</div>
        <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{plan.tagline}</div>
      </div>

      {/* Actions slider */}
      <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: 12, padding: "16px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: "1.0625rem", fontWeight: 700 }}>✦ {actions.toLocaleString()} actions/mo.</span>
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: 12 }}>
          = {plan.agents} AI agent{plan.agents > 1 ? "s" : ""} · ~{Math.round(actions / 30)} tasks/day
        </div>
        <input
          type="range"
          min={0}
          max={steps.length - 1}
          value={idx}
          onChange={(e) => setIdx(parseInt(e.target.value))}
          style={{ width: "100%", accentColor: "var(--brand-primary)", cursor: "pointer" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 6 }}>
          <span>{plan.baseActions.toLocaleString()}</span>
          <span>{Math.round((plan.baseActions + plan.maxActions) / 2).toLocaleString()}</span>
          <span>{plan.maxActions.toLocaleString()}</span>
        </div>
      </div>

      {/* Price */}
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          {annual && <span style={{ fontSize: "1.125rem", color: "var(--text-muted)", textDecoration: "line-through" }}>${Math.round(plan.monthlyBase + extraCost)}</span>}
          <span style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "Roboto Condensed, sans-serif", lineHeight: 1 }}>${Math.round(totalMonthly)}</span>
          <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>/ mo</span>
        </div>
        {annual
          ? <div style={{ fontSize: "0.8125rem", color: "var(--accent)", marginTop: 4 }}>Save ${Math.round(annualSavings)}/yr billed annually</div>
          : <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 4 }}>billed monthly</div>
        }
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, background: "rgba(239,111,46,0.10)", border: "1px solid rgba(239,111,46,0.25)", borderRadius: 8, padding: "5px 10px" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--brand-primary)" }}>+ ${plan.setupFee}</span>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500 }}>one-time setup fee</span>
        </div>
      </div>

      {/* CTA */}
      <LeadCaptureButton
        planName={`${plan.name}${annual ? " (Annual)" : ""}`}
        monthly={Math.round(totalMonthly)}
        setup={plan.setupFee}
        source={`pricing-page:${plan.id}`}
        style={{ display: "block", textAlign: "center", padding: "14px", fontWeight: 700, borderRadius: 12, background: plan.ctaColor, border: plan.ctaBorder || "none", color: plan.ctaText, textDecoration: "none", fontSize: "0.9375rem", transition: "opacity 0.2s" }}
      >
        Get Started
      </LeadCaptureButton>

      {/* Features */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {plan.features.map(f => (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.875rem" }}>
            <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }}>✓</span>
            <span style={{ color: "var(--text-primary)" }}>{f}</span>
          </div>
        ))}
        {plan.notIncluded.map(f => (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.875rem" }}>
            <span style={{ color: "var(--text-muted)", flexShrink: 0, marginTop: 1 }}>✕</span>
            <span style={{ color: "var(--text-muted)" }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <section style={{ background: "var(--surface)", minHeight: "100vh", paddingTop: 80 }}>
      {/* Header */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 0", textAlign: "center" }}>
        <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.1)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
          Transparent Pricing
        </span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, fontFamily: "Roboto Condensed, sans-serif", marginBottom: 16 }}>
          AI Virtual Assistant Pricing
        </h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--ink-muted)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 32px" }}>
          Pick your plan, adjust your volume, see your price — instantly. No calls required.
        </p>

        {/* Monthly / Annual toggle */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 100, padding: "6px 20px" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: 600, color: annual ? "var(--text-muted)" : "var(--text-primary)" }}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            aria-label="Toggle billing period"
            style={{ width: 44, height: 24, borderRadius: 100, background: annual ? "var(--brand-primary)" : "rgba(242,242,240,0.15)", border: "none", cursor: "pointer", position: "relative", transition: "background 0.25s", flexShrink: 0 }}
          >
            <span style={{ position: "absolute", top: 3, left: annual ? 23 : 3, width: 18, height: 18, borderRadius: "50%", background: "#fff", transition: "left 0.25s", display: "block" }} />
          </button>
          <span style={{ fontSize: "0.875rem", fontWeight: 600, color: annual ? "var(--text-primary)" : "var(--text-muted)" }}>Annual</span>
          <span style={{ background: "var(--accent)", color: "#0a0a0a", fontSize: "0.6875rem", fontWeight: 800, padding: "3px 8px", borderRadius: 100, letterSpacing: "0.04em" }}>SAVE 10%</span>
        </div>
      </div>

      {/* Plan cards */}
      <div style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 20px" }}>
        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(3, 1fr)" }} className="pricing-grid">
          {PLANS.map(plan => <PricingCard key={plan.id} plan={plan} annual={annual} />)}
        </div>
      </div>

      {/* Calculator CTA */}
      <div style={{ maxWidth: 760, margin: "64px auto 0", padding: "0 20px" }}>
        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 20, padding: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.0625rem", marginBottom: 6 }}>Need something more specific?</div>
            <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Pick exact agents, integrations, and support level — see your price instantly.</div>
          </div>
          <Link href="/pricing/calculator" style={{ padding: "12px 24px", background: "var(--brand-primary)", color: "#fff", borderRadius: 10, fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>
            Build Your Plan →
          </Link>
        </div>
      </div>

      {/* Compare strip */}
      <div style={{ maxWidth: 760, margin: "64px auto 0", padding: "0 20px", textAlign: "center" }}>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: 8 }}>
          Traditional VA costs $700–$1,500/mo before management overhead.
          <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}>Filipino virtual assistant</span>
        </p>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
          All plans include a 3-month minimum engagement. After that, cancel anytime.
        </p>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 760, margin: "80px auto 0", padding: "0 20px 80px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "Roboto Condensed, sans-serif", marginBottom: 32, textAlign: "center" }}>Common Questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {FAQS.map((faq, i) => (
            <div key={faq.q} style={{ padding: "20px 0", borderTop: i === 0 ? "1px solid var(--border)" : "1px solid var(--border)", borderBottom: i === FAQS.length - 1 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontWeight: 600, marginBottom: 8, color: "var(--text-primary)" }}>{faq.q}</div>
              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 640px) and (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
