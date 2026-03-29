import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Virtual Assistant Services | One Assistant. A Whole Team. | Hirelessly",
  description: "Hirelessly's AI Virtual Assistant runs multiple specialized AI agents — email, scheduling, CRM, support, and leads — all working as one seamless hire. No management. No overhead.",
  alternates: { canonical: "https://hirelessly.com/ai-virtual-assistant" },
  openGraph: {
    title: "AI Virtual Assistant Services | One Assistant. A Whole Team.",
    description: "Multiple specialized AI agents — email, scheduling, CRM, support, leads — coordinated as a single hire. Live in 5 days.",
    url: "https://hirelessly.com/ai-virtual-assistant",
  },
};

const agents = [
  { icon: "📬", name: "Email Agent", desc: "Reads, categorizes, drafts, and sends email responses within your defined rules. Never misses a follow-up." },
  { icon: "📅", name: "Scheduler Agent", desc: "Books, reschedules, and manages calendar events across your team. No back-and-forth." },
  { icon: "📊", name: "CRM Agent", desc: "Updates records, tags leads, logs activity, and keeps your pipeline clean without manual entry." },
  { icon: "💬", name: "Support Agent", desc: "Resolves 40–60% of customer inquiries automatically using your approved knowledge base." },
  { icon: "🎯", name: "Lead Agent", desc: "Qualifies inbound leads, responds instantly, and books discovery calls — around the clock." },
];

const steps = [
  { num: "01", title: "Workflow mapping", desc: "We map your existing workflows — emails, scheduling, CRM, support — and define exactly what each agent is authorized to do." },
  { num: "02", title: "Agent configuration", desc: "We build and train each agent on your business context, tone, templates, and tools. You review and approve before anything goes live." },
  { num: "03", title: "Integration & testing", desc: "We connect to your existing stack — Gmail, HubSpot, Slack, Salesforce, Notion — and run a full test cycle with you." },
  { num: "04", title: "Go live", desc: "Your agents start working. You get a weekly activity digest and a direct line to our team for adjustments." },
];

const compare = [
  { feature: "Cost/month", human: "$600–$1,500", ai: "From $29" },
  { feature: "Availability", human: "8h/day, 5 days", ai: "24/7, 365 days" },
  { feature: "Onboarding time", human: "2–4 weeks", ai: "5–7 days" },
  { feature: "Sick days / holidays", human: "Yes", ai: "None" },
  { feature: "Scales with volume", human: "Hire more", ai: "Instant" },
  { feature: "Consistent quality", human: "Varies", ai: "Defined rules" },
  { feature: "Management overhead", human: "High", ai: "None" },
];

const faqs = [
  {
    q: "What does multi-agent mean in plain English?",
    a: "Instead of one AI doing everything sequentially, Hirelessly assigns a dedicated agent to each type of task — one for email, one for scheduling, one for CRM. They run in parallel so nothing waits in a queue.",
  },
  {
    q: "Do I need to be technical to use this?",
    a: "No. We handle everything — setup, configuration, integrations, and ongoing maintenance. You just review the weekly digest and tell us when something needs adjusting.",
  },
  {
    q: "How is this different from Zapier or Make?",
    a: "Zapier and Make require you to build, test, and maintain every automation yourself. Hirelessly is fully managed — we build the agents, deploy them, and maintain them as your business evolves. You hire an outcome, not a tool.",
  },
  {
    q: "What tools does it connect to?",
    a: "Gmail, Outlook, Google Calendar, HubSpot, Salesforce, Slack, Notion, Intercom, and more. We plug into your existing stack — no switching required.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most businesses are fully live within 5 business days of kickoff. We map your workflows, build the agents, and deploy. No technical work required from your team.",
  },
];

export default function AIVirtualAssistant() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "AI Virtual Assistant Services",
            name: "Hirelessly AI Virtual Assistant",
            provider: { "@type": "Organization", name: "Hirelessly", url: "https://hirelessly.com" },
            description: "A managed AI virtual assistant service that runs multiple specialized AI agents — email, scheduling, CRM, support, leads — coordinated as a single hire.",
            areaServed: "Global",
            offers: { "@type": "Offer", price: "29", priceCurrency: "USD" },
          }),
        }}
      />

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: "var(--surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,255,135,0.08)", border: "1px solid rgba(0,255,135,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "block" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--accent)" }}>The smarter alternative to hiring a VA</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: "Roboto Condensed, sans-serif" }}>
              AI Virtual Assistant Services
            </h1>
            <p style={{ fontSize: "1.375rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 16, fontFamily: "Roboto Condensed, sans-serif" }}>
              One AI Assistant. A Whole Team Working Behind It.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7, marginBottom: 32, maxWidth: 580 }}>
              Most businesses hire one VA and hope they can handle everything. Hirelessly gives you a single AI assistant powered by multiple specialized agents — each one focused, fast, and never offline.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
              <Link href="/ai-virtual-assistant-philippines" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, background: "var(--brand-primary)", color: "#fff", textDecoration: "none", fontSize: "1rem" }}>
                Get Your AI Assistant
              </Link>
              <Link href="#how-it-works" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, border: "1.5px solid rgba(242,242,240,0.15)", color: "var(--text-primary)", textDecoration: "none", fontSize: "1rem" }}>
                See How It Works
              </Link>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="#00FF87"><path d="M8 1L10.06 5.26L14.72 5.73L11.5 8.66L12.47 13.27L8 10.9L3.53 13.27L4.5 8.66L1.28 5.73L5.94 5.26L8 1Z"/></svg>
              No technical setup. No management overhead. Live in 5 days.
            </p>
          </div>
        </div>
      </section>

      {/* AGENTS */}
      <section style={{ padding: "80px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              How It&apos;s Built
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: 12, fontFamily: "Roboto Condensed, sans-serif" }}>
              Not one AI trying to do everything.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", maxWidth: 560, margin: "0 auto" }}>
              A team of agents, each doing one thing perfectly. Each specialist runs in parallel — nothing waits in a queue.
            </p>
          </div>

          <div style={{ display: "grid", gap: 16 }} className="agents-grid">
            {agents.map((agent) => (
              <div key={agent.name} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 24, display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(239,111,46,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.375rem", flexShrink: 0 }}>
                  {agent.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "1.0625rem", marginBottom: 6, fontFamily: "Roboto Condensed, sans-serif" }}>{agent.name}</div>
                  <div style={{ fontSize: "0.9rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.65 }}>{agent.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS STRIP */}
      <div style={{ background: "var(--brand-primary)", padding: "48px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32, textAlign: "center" }} className="results-grid">
            {[
              { num: "5 days", desc: "Average time to go live" },
              { num: "60%", desc: "Avg cost reduction vs human VA" },
              { num: "24/7", desc: "System uptime — no gaps" },
              { num: "0", desc: "Management overhead required" },
            ].map((r) => (
              <div key={r.num}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", fontFamily: "Roboto Condensed, sans-serif" }}>{r.num}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "80px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              How It Works
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", fontFamily: "Roboto Condensed, sans-serif" }}>
              From zero to fully automated in 5 days
            </h2>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            {steps.map((step) => (
              <div key={step.num} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 20, padding: 24, display: "flex", gap: 20 }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--brand-primary)", fontFamily: "Roboto Condensed, sans-serif", opacity: 0.5, flexShrink: 0, lineHeight: 1, minWidth: 36 }}>{step.num}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8, fontSize: "1rem", fontFamily: "Roboto Condensed, sans-serif" }}>{step.title}</div>
                  <div style={{ fontSize: "0.9rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.65 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: "80px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              Side by Side
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", fontFamily: "Roboto Condensed, sans-serif" }}>
              The old way vs. the Hirelessly way
            </h2>
          </div>
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "var(--surface-3)", padding: "14px 20px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
              <div></div>
              <div style={{ textAlign: "center" }}>Human VA</div>
              <div style={{ textAlign: "center", color: "var(--brand-primary)" }}>Hirelessly AI</div>
            </div>
            {compare.map((row, i) => (
              <div key={row.feature} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "14px 20px", borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "var(--surface)" : "var(--surface-2)", alignItems: "center" }}>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" }}>{row.feature}</div>
                <div style={{ fontSize: "0.875rem", color: "#FF6B6B", textAlign: "center" }}>{row.human}</div>
                <div style={{ fontSize: "0.875rem", color: "var(--accent)", fontWeight: 600, textAlign: "center" }}>{row.ai}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              FAQ
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", fontFamily: "Roboto Condensed, sans-serif" }}>
              Plain answers to real questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, fontFamily: "Roboto Condensed, sans-serif", fontSize: "1rem" }}>{faq.q}</div>
                <div style={{ fontSize: "0.9375rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, rgba(239,111,46,0.2), rgba(0,255,135,0.08))", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: "Roboto Condensed, sans-serif" }}>
            Ready to stop managing tasks and start running your business?
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", marginBottom: 32, lineHeight: 1.7 }}>
            Get a fully managed AI assistant — multiple agents, one hire, zero overhead. Starting from $29/mo.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/ai-virtual-assistant-philippines" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, background: "var(--brand-primary)", color: "#fff", textDecoration: "none", fontSize: "1rem" }}>
              Get Your AI Assistant
            </Link>
            <Link href="/blog/what-is-ai-virtual-assistant" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, border: "1.5px solid rgba(242,242,240,0.15)", color: "var(--text-primary)", textDecoration: "none", fontSize: "1rem" }}>
              Read the Full Guide →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 640px) {
          .agents-grid { grid-template-columns: 1fr 1fr !important; }
          .results-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .agents-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
