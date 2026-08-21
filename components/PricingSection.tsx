"use client";
import { useState } from "react";
import { LeadCaptureButton } from "@/components/LeadCapture";

const TIERS = [
  {
    name: "Assisted",
    autonomy: "L1 — You steer, AI accelerates",
    setup: "$499",
    setupNote: "Covers workflow mapping, agent build & onboarding",
    monthly: 149,
    actions: "2,000",
    overage: "$0.01",
    desc: "AI drafts and prepares — you review and approve before anything goes out. Low risk, immediate time savings.",
    agents: [
      { label: "Email Agent — inbox triage & smart replies", isNew: true },
      { label: "Scheduler Agent — meetings booked automatically", isNew: true },
    ],
    features: [
      "Gmail or Outlook + Google Calendar connected",
      "Automation via n8n, Make, or Zapier",
      "Approval workflow — nothing sends without you",
      "25% agentic buffer — handles complex task spikes",
      "Daily monitoring + error alerts",
      "Monthly performance report",
    ],
    cta: "Get Started",
    ctaStyle: "secondary",
    vaCompare: "Still under $150/mo vs $700–$1,200/mo for traditional manual ops.",
    popular: false,
  },
  {
    name: "Copilot",
    autonomy: "L2 — AI owns workflows, you handle exceptions",
    setup: "$999",
    setupNote: "Covers 4-agent build, tool integrations & workflow config",
    monthly: 199,
    actions: "8,000",
    overage: "$0.008",
    desc: "AI runs your day-to-day operations. You stop doing the work — you just oversee what matters.",
    agents: [
      { label: "Email Agent", isNew: false },
      { label: "Scheduler Agent", isNew: false },
      { label: "CRM Agent — pipeline always up to date", isNew: true },
      { label: "Support Agent — customer queries answered 24/7", isNew: true },
    ],
    features: [
      "HubSpot, Salesforce, GoHighLevel, Slack & more",
      "n8n / Make / Zapier workflows orchestrated",
      "Fully autonomous — agents act without approval",
      "Priority onboarding — live in 5 days",
      "Weekly AI activity digest every Monday",
      "Ongoing agent tuning as your business evolves",
    ],
    cta: "Launch My Assistant",
    ctaStyle: "primary",
    vaCompare: "$199/mo vs $700–$1,200/mo for manual operations doing the same work.",
    popular: true,
  },
  {
    name: "Autopilot",
    autonomy: "L3 — Fully autonomous, you lead strategy",
    setup: "$1,999",
    setupNote: "Covers 6+ agent build, custom workflow & full integration",
    monthly: 399,
    actions: "20,000",
    overage: "$0.006",
    desc: "Your full operations run on AI. You spend your time on clients, vision, and growth — not tasks.",
    agents: [
      { label: "Email + Scheduler + CRM + Support Agents", isNew: false },
      { label: "Lead Agent — qualifies & books prospects automatically", isNew: true },
      { label: "Reporting Agent — weekly digest to your inbox", isNew: true },
      { label: "Custom Agent — built for your unique workflow", isNew: true },
    ],
    features: [
      "Everything in Copilot",
      "25% agentic buffer — handles complex task spikes",
      "Dedicated account manager",
      "5+ tool integrations orchestrated",
      "SLA-backed response time",
    ],
    cta: "Book a Call",
    ctaStyle: "secondary",
    vaCompare: "Equivalent to 2–3 human VAs. Costs less than one.",
    popular: false,
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  const getPrice = (monthly: number) => {
    if (billing === "yearly") return Math.round(monthly * 0.9);
    return monthly;
  };

  return (
    <section style={{ padding: "96px 0" }} id="pricing">
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>Pricing</span>
          <h2 style={{ marginBottom: 12 }}>Simple, transparent pricing</h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", maxWidth: 600, margin: "0 auto" }}>Transparent pricing — a one-time setup fee to build your agents, then a low monthly fee to keep them running, monitored, and improving.</p>
        </div>

        {/* What monthly covers */}
        <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: "24px 28px", marginBottom: 40, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 14 }}>What your monthly fee covers — every month</div>
          <div className="monthly-covers-grid" style={{ display: "grid", gap: 10 }}>
            {[
              ["LLM API usage", "every agent action (email read, CRM update, reply sent) runs on AI models that cost tokens. We absorb this cost."],
              ["Integration maintenance", "Gmail, HubSpot, Slack constantly update their APIs. When they break, we fix them before you notice."],
              ["Agent monitoring", "we watch your agent logs daily, catch errors, and prevent silent failures before they affect your business."],
              ["Continuous tuning", "your business evolves. We update agent logic, add new rules, and refine behavior as your workflows change."],
              ["Model upgrades", "when better AI models release, we re-test and migrate your agents so you always run on the best available."],
              ["Weekly activity digest", "every Monday you see exactly what your agents did: tasks handled, hours saved, estimated cost vs hiring."],
            ].map(([title, desc]) => (
              <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.875rem", color: "var(--text-muted)" }}>
                <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span><strong style={{ color: "var(--text-primary)" }}>{title}</strong> — {desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Billing Toggle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 100, padding: 4 }}>
            <button
              onClick={() => setBilling("monthly")}
              style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", border: "none", fontFamily: "inherit", background: billing === "monthly" ? "var(--brand-primary)" : "transparent", color: billing === "monthly" ? "#fff" : "var(--text-muted)", transition: "all 0.2s" }}
            >Monthly</button>
            <button
              onClick={() => setBilling("yearly")}
              style={{ padding: "8px 20px", borderRadius: 100, fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", border: "none", fontFamily: "inherit", background: billing === "yearly" ? "var(--brand-primary)" : "transparent", color: billing === "yearly" ? "#fff" : "var(--text-muted)", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6 }}
            >
              Yearly <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", background: "var(--accent)", color: "#000", padding: "2px 8px", borderRadius: 100 }}>Save 10%</span>
            </button>
          </div>
        </div>

        {/* Social proof strip */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" as const, marginBottom: 32, padding: "16px 20px", background: "var(--surface-2)", borderRadius: 16, border: "1px solid var(--border)", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          {["Done-for-you — zero DIY required", "Live in 5–7 days", "60% avg cost reduction", "No software to learn"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8125rem", color: "var(--text-muted)" }}>
              <span style={{ color: "var(--accent)", fontWeight: 700 }}>✓</span>{item}
            </div>
          ))}
        </div>

        {/* Route 1 label */}
        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
          Route 1 — Gradual Automation · Done For You
          <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>
        <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", marginBottom: 28, maxWidth: 600 }}>Start cautious, end hands-free. Each tier unlocks more agents and more autonomy as your trust in AI grows.</p>

        {/* Tier Cards */}
        <div style={{ display: "grid", gap: 16 }}>
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: "var(--surface)",
                border: tier.popular ? "1.5px solid var(--brand-primary)" : "1.5px solid var(--border)",
                borderRadius: 24,
                padding: "28px 24px",
                boxShadow: tier.popular ? "0 0 0 1px var(--brand-primary), 0 8px 32px rgba(0,0,0,0.32)" : undefined,
                display: "flex",
                flexDirection: "column" as const,
              }}
            >
              {tier.popular && (
                <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", background: "var(--brand-primary)", color: "#fff", padding: "3px 10px", borderRadius: 100, marginBottom: 16, alignSelf: "flex-start" }}>Most Popular</span>
              )}

              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 4 }}>{tier.name}</div>
              <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--brand-primary)", marginBottom: 12 }}>{tier.autonomy}</div>

              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: 2 }}>{tier.setup} <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-muted)" }}>one-time setup</span></div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: 10 }}>{tier.setupNote}</div>

              <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "var(--text-muted)", margin: "8px 0 4px" }}>then</div>
              <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 2 }}>${getPrice(tier.monthly)}<span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-muted)" }}>/mo</span></div>
              <div style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600, marginBottom: 12, minHeight: 18 }}>
                {billing === "yearly" ? `Billed $${Math.round(getPrice(tier.monthly) * 12)}/yr — you save $${Math.round(tier.monthly * 12 * 0.1)}/yr` : ""}
              </div>

              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: 20, lineHeight: 1.55 }}>{tier.desc}</div>

              {/* Actions box */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(239,111,46,0.08)", border: "1px solid rgba(239,111,46,0.15)", borderRadius: 12, padding: "12px 14px", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--brand-primary)", letterSpacing: "-0.02em", lineHeight: 1 }}>{tier.actions}</div>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--text-muted)" }}>actions / month</div>
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "right" as const, lineHeight: 1.4 }}>
                  <strong style={{ color: "var(--brand-primary)", display: "block", fontSize: "0.8125rem" }}>{tier.overage} / action</strong>
                  if you go over
                </div>
              </div>

              {/* Agents */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 8 }}>Agents Running Monthly</div>
                {tier.agents.map((agent) => (
                  <div key={agent.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.875rem", color: agent.isNew ? "var(--text-primary)" : "var(--text-muted)", padding: "4px 0" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: agent.isNew ? "var(--brand-primary)" : "var(--border)", flexShrink: 0, display: "inline-block" }} />
                    {agent.label}
                    {agent.isNew && <span style={{ fontSize: "0.625rem", fontWeight: 700, background: "rgba(239,111,46,0.15)", color: "var(--brand-primary)", padding: "1px 6px", borderRadius: 100, textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>New</span>}
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 8, marginBottom: 20, flex: 1 }}>
                {tier.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.875rem", color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <LeadCaptureButton
                planName={tier.name}
                monthly={getPrice(tier.monthly)}
                setup={Number(tier.setup.replace(/[^0-9]/g, ""))}
                source={`pricing-section:${tier.name.toLowerCase()}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px",
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  background: tier.ctaStyle === "primary" ? "var(--brand-primary)" : "transparent",
                  color: tier.ctaStyle === "primary" ? "#fff" : "var(--text-primary)",
                  border: tier.ctaStyle === "primary" ? "none" : "1.5px solid var(--border)",
                  marginBottom: 12,
                }}
              >{tier.cta}</LeadCaptureButton>

              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", paddingTop: 12, borderTop: "1px solid var(--border)", lineHeight: 1.5, fontStyle: "italic" }}>{tier.vaCompare}</div>
            </div>
          ))}
        </div>

        {/* Fair Use Block */}
        <div style={{ marginTop: 24, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 24px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" as const }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 6 }}>What counts as 1 action?</div>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>One action = one task your agent completes. Reading an email, sending a reply, updating a CRM record, booking a meeting, responding to a support ticket — each one counts as 1 action. Most small businesses use 500–3,000 actions/mo.</p>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 6 }}>Fair use policy</div>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>Your monthly plan includes the actions above at no extra cost. If you exceed your limit, overage is billed at the per-action rate shown — never automatically charged without notice. We&apos;ll alert you at 80% usage so there are no surprises.</p>
            </div>
            <div style={{ flex: 1, minWidth: 220, display: "flex", flexDirection: "column" as const, justifyContent: "center", gap: 10 }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--text-muted)" }}>Not sure which plan fits?</div>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>Answer 5 quick questions about your business and we&apos;ll tell you exactly which plan and how many actions you&apos;ll need.</p>
              <LeadCaptureButton planName="Assisted" monthly={149} setup={499} source="pricing-section:find-my-plan" style={{ display: "inline-flex", alignItems: "center", padding: "9px 16px", background: "var(--brand-primary)", color: "#fff", borderRadius: 8, fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none", alignSelf: "flex-start", border: "none" }}>Find My Plan →</LeadCaptureButton>
            </div>
          </div>
        </div>

        {/* Route 2 Coming Soon */}
        <div style={{ marginTop: 48 }}>
          <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 24, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" as const }}>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--brand-primary)", marginBottom: 6 }}>Coming Soon</div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>Done-With-You AI Transformation</div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0 }}>Full deployment + workshops so your team understands and owns your automation stack.</p>
            </div>
            <LeadCaptureButton planName="Starter" monthly={0} setup={299} source="pricing-section:notify-me" style={{ padding: "10px 24px", background: "var(--brand-primary)", color: "#fff", borderRadius: 8, fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", flexShrink: 0, border: "none" }}>Notify Me</LeadCaptureButton>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: "0.875rem", color: "var(--text-muted)", marginTop: 32, lineHeight: 1.7 }}>
          You keep your existing tools — Gmail, HubSpot, GoHighLevel, Slack, Salesforce, n8n, Make, and more. We connect and automate what you already have. No new software to learn.<br />
          Setup fee is one-time · Monthly fee covers ongoing operations · 3-month minimum engagement (setup + optimization takes 30–60 days to fully tune) · cancel anytime after
        </p>

        {/* ── Starter Entry Point ── */}
        <div style={{ marginTop: 56, borderTop: "1px solid var(--border)", paddingTop: 48 }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "var(--text-muted)" }}>Not sure yet?</span>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginTop: 8, marginBottom: 8 }}>Try the Starter — one time, no commitment</h3>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", maxWidth: 520, margin: "0 auto" }}>Get one AI agent built and running for your business. Pay once. Upgrade to a subscription when you&apos;re ready.</p>
          </div>
          <div style={{ maxWidth: 560, margin: "0 auto", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 20, padding: "28px 28px 24px", display: "flex", flexDirection: "column" as const, gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" as const, gap: 12 }}>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 4 }}>Starter</div>
                <div style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", lineHeight: 1 }}>$299 <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--text-muted)" }}>one-time</span></div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 4 }}>No monthly fee. Yours to keep.</div>
              </div>
              <LeadCaptureButton planName="Starter" monthly={0} setup={299} source="pricing-section:get-the-starter" style={{ padding: "12px 24px", background: "var(--brand-primary)", color: "#fff", borderRadius: 12, fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", flexShrink: 0, alignSelf: "flex-start", border: "none" }}>
                Get the Starter →
              </LeadCaptureButton>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 8 }}>
              {["1 AI agent built and deployed", "Gmail or Outlook + Google Calendar connected", "Basic automation via n8n or Make", "You review before anything goes out", "Upgrade to a subscription plan at any time"].map(f => (
                <li key={f} style={{ display: "flex", gap: 8, fontSize: "0.875rem", color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── VA Savings Calculator ── */}
        <div style={{ marginTop: 56 }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 12 }}>See the Savings</span>
            <h3 style={{ fontSize: "1.375rem", fontWeight: 700, marginBottom: 8 }}>AI vs Traditional Ops — The Math</h3>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", maxWidth: 520, margin: "0 auto" }}>Most businesses running manual operations are overpaying by $8,000–$17,000/year.</p>
          </div>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
            {[
              { tier: "Copilot", monthly: 199, vaMonthly: 1000, label: "vs $1,000/mo manual ops" },
              { tier: "Autopilot", monthly: 399, vaMonthly: 1500, label: "vs $1,500/mo (2 part-time roles)" },
            ].map((row) => {
              const aiAnnual = row.monthly * 12;
              const vaAnnual = row.vaMonthly * 12;
              const saved = vaAnnual - aiAnnual;
              return (
                <div key={row.tier} style={{ padding: "20px 24px", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--brand-primary)", marginBottom: 12 }}>Hirelessly {row.tier} — {row.label}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 12 }}>
                    <div style={{ background: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.2)", borderRadius: 12, padding: "12px 16px" }}>
                      <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 4 }}>Traditional Ops / yr</div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FF6B6B" }}>${vaAnnual.toLocaleString()}</div>
                    </div>
                    <div style={{ fontSize: "1.25rem", color: "var(--text-muted)", textAlign: "center" as const }}>→</div>
                    <div style={{ background: "rgba(0,255,135,0.06)", border: "1px solid rgba(0,255,135,0.2)", borderRadius: 12, padding: "12px 16px" }}>
                      <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", textTransform: "uppercase" as const, letterSpacing: "0.06em", marginBottom: 4 }}>Hirelessly / yr</div>
                      <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--accent)" }}>${aiAnnual.toLocaleString()}</div>
                    </div>
                  </div>
                  <div style={{ marginTop: 12, padding: "10px 16px", background: "rgba(0,255,135,0.06)", border: "1px solid rgba(0,255,135,0.15)", borderRadius: 10, textAlign: "center" as const }}>
                    <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--accent)" }}>Save ${saved.toLocaleString()}/yr</span>
                    <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginLeft: 8 }}>— at the same output, 24/7</span>
                  </div>
                </div>
              );
            })}
            <div style={{ padding: "14px 24px" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>* Based on average cost of manual operations including salary, management overhead, and time cost. AI savings may vary.</p>
            </div>
          </div>
        </div>

        {/* ── Social Proof Placeholder ── */}
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" as const }}>
          {[
            { num: "60%", label: "Average cost reduction vs traditional ops" },
            { num: "5–7", label: "Days to go live" },
            { num: "24/7", label: "Operations coverage" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" as const }}>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--brand-primary)", letterSpacing: "-0.02em" }}>{s.num}</div>
              <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 4, maxWidth: 140 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── FAQ ── */}
        <div style={{ marginTop: 64 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 12 }}>FAQ</span>
            <h3 style={{ fontSize: "1.375rem", fontWeight: 700 }}>Pricing Questions, Answered</h3>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column" as const, gap: 12 }}>
            {[
              { q: "What counts as an action?", a: "One action = one task your agent completes. Reading an email, sending a reply, updating a CRM record, booking a meeting, responding to a support ticket — each one counts as 1 action. Most small businesses use 500–3,000 actions/mo." },
              { q: "Can I switch plans?", a: "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle. There's no penalty for switching." },
              { q: "What happens if I exceed my action limit?", a: "We'll alert you at 80% of your monthly action limit so there are no surprises. If you exceed it, overage is billed at your plan's per-action rate ($0.006–$0.01/action). You'll never be auto-charged without notice." },
              { q: "Is there a long-term contract?", a: "No long-term contract. We ask for a 3-month minimum engagement because setup and optimization takes 30–60 days to fully tune — canceling before then means you don't see the full value. After month 3, you can cancel anytime." },
              { q: "How quickly can I go live?", a: "Copilot and Autopilot clients are typically live in 5–7 business days. Assisted clients go live in 7–10 days. We handle workflow mapping, agent configuration, integrations, and testing before anything touches your business." },
            ].map(faq => (
              <div key={faq.q} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 24px" }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8, fontSize: "0.9375rem" }}>{faq.q}</div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .monthly-covers-grid { grid-template-columns: 1fr; }
        @media (min-width: 640px) { .monthly-covers-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) {
          .pricing-route2-flex { flex-direction: column !important; }
          .pricing-fairuse-flex { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
