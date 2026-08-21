import Link from "next/link";
import type { Metadata } from "next";
import { EnvelopeSimple, CalendarBlank, ChartBar, ChatCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "AI Operations Assistant for Business | Hirelessly",
  description: "Tired of manual operations that depend on people being available? Hirelessly deploys AI that runs your business 24/7 — at a fraction of the cost. Live in 5–7 days.",
  alternates: { canonical: "https://hirelessly.com/ai-virtual-assistant-philippines" },
  openGraph: {
    title: "AI Operations Assistant for Business | Hirelessly",
    description: "Tired of manual operations that depend on people being available? Hirelessly deploys AI that runs your business 24/7 — at a fraction of the cost. Live in 5–7 days.",
    url: "https://hirelessly.com/ai-virtual-assistant-philippines",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Operations Assistant for Business | Hirelessly",
    description: "Tired of manual operations that depend on people being available? Hirelessly deploys AI that runs your business 24/7 — at a fraction of the cost. Live in 5–7 days.",
  },
};

const costRows = [
  { item: "Monthly salary", human: "$600–$1,500", ai: "$149–$399" },
  { item: "Onboarding time", human: "2–4 weeks", ai: "5–7 days" },
  { item: "Hours available", human: "40h/week", ai: "168h/week" },
  { item: "Sick days", human: "Yes", ai: "None" },
  { item: "Management time", human: "3–5h/week", ai: "None" },
  { item: "Scale up cost", human: "Hire another VA", ai: "Same plan" },
  { item: "Consistency", human: "Varies by person", ai: "100% rule-based" },
];

const tasks = [
  { category: "Email & Comms", icon: <EnvelopeSimple size={20} weight="duotone" />, items: ["Inbox triage & prioritization", "Draft & send responses", "Follow-up sequences", "Unsubscribe management"] },
  { category: "Scheduling", icon: <CalendarBlank size={20} weight="duotone" />, items: ["Book & reschedule meetings", "Send calendar invites", "Zoom/Meet link generation", "Buffer time management"] },
  { category: "CRM & Leads", icon: <ChartBar size={20} weight="duotone" />, items: ["Update contact records", "Tag & score leads", "Log call & email activity", "Pipeline stage updates"] },
  { category: "Customer Support", icon: <ChatCircle size={20} weight="duotone" />, items: ["Respond to inbound tickets", "FAQ resolution", "Escalation routing", "Satisfaction follow-up"] },
];

const faqs = [
  {
    q: "How much does it cost to run business operations manually vs with AI?",
    a: "Traditional operations — salaries, management time, onboarding — typically cost $600–$1,500/mo per role. Hirelessly starts at $149/mo and handles the same operational output 24/7.",
  },
  {
    q: "How long does it take to set up an AI operations system?",
    a: "Hirelessly deploys in 5–7 business days. We handle workflow mapping, agent configuration, integrations, and testing before anything goes live.",
  },
  {
    q: "Can AI really replace manual business operations?",
    a: "For repetitive, rule-based tasks — email triage, scheduling, CRM updates, lead qualification, support tickets — yes. Hirelessly resolves 40–60% of support tickets automatically and handles admin operations around the clock.",
  },
  {
    q: "What happens when my operations volume grows?",
    a: "Nothing changes on your end. Hirelessly scales with your volume at the same flat monthly rate — no new hires, no onboarding, no management overhead.",
  },
  {
    q: "Do I need to manage the AI system myself?",
    a: "No. Hirelessly is fully managed. We build it, configure it, and maintain it. You get a weekly activity digest and a direct line to our team for any adjustments.",
  },
];

export default function AIVirtualAssistantPhilippines() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: "var(--surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,255,135,0.08)", border: "1px solid rgba(0,255,135,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "block" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--accent)" }}>AI Operations — Replace Manual Ops with AI</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: "Roboto Condensed, sans-serif" }}>
              Replace Manual Ops with AI
            </h1>
            <p style={{ fontSize: "1.125rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7, marginBottom: 12, maxWidth: 620 }}>
              Your business shouldn&apos;t stop when a person goes offline. Hirelessly deploys AI systems that handle operations{" "}
              <strong style={{ color: "var(--text-primary)" }}>24/7</strong> — at a fraction of the cost of running it manually.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32, marginBottom: 20 }}>
              <Link href="/#contact" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, background: "var(--brand-primary)", color: "#fff", textDecoration: "none", fontSize: "1rem" }}>
                Get Your AI Assistant
              </Link>
              <Link href="/#pricing" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, border: "1.5px solid rgba(242,242,240,0.15)", color: "var(--text-primary)", textDecoration: "none", fontSize: "1rem" }}>
                See Pricing
              </Link>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
              No long-term contracts · Deploy in 5–7 days · Fully managed
            </p>
          </div>
        </div>
      </section>

      {/* COST COMPARISON */}
      <section style={{ padding: "80px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              Cost Breakdown
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", fontFamily: "Roboto Condensed, sans-serif", marginBottom: 12 }}>
              Traditional Hire / Manual Ops vs AI — Real Numbers
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", maxWidth: 520, margin: "0 auto" }}>
              The salary is just the start. Factor in onboarding, management time, and replacement costs.
            </p>
          </div>

          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "var(--surface-3)", padding: "14px 20px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
              <div></div>
              <div style={{ textAlign: "center" }}>Traditional Hire / Manual Ops</div>
              <div style={{ textAlign: "center", color: "var(--brand-primary)" }}>Hirelessly AI</div>
            </div>
            {costRows.map((row, i) => (
              <div key={row.item} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "14px 20px", borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "var(--surface)" : "var(--surface-2)" }}>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" }}>{row.item}</div>
                <div style={{ fontSize: "0.875rem", color: "#FF6B6B", textAlign: "center" }}>{row.human}</div>
                <div style={{ fontSize: "0.875rem", color: "var(--accent)", fontWeight: 600, textAlign: "center" }}>{row.ai}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24, padding: 20, background: "rgba(0,255,135,0.06)", border: "1px solid rgba(0,255,135,0.2)", borderRadius: 16, textAlign: "center" }}>
            <p style={{ fontSize: "1rem", color: "var(--text-primary)", margin: 0 }}>
              Average savings: <strong style={{ color: "var(--accent)" }}>$8,000–$17,000/year</strong> vs running operations the traditional way
            </p>
          </div>
        </div>
      </section>

      {/* TASKS */}
      <section style={{ padding: "80px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              What It Handles
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", fontFamily: "Roboto Condensed, sans-serif" }}>
              Every task a VA does — automated
            </h2>
          </div>
          <div style={{ display: "grid", gap: 16 }} className="tasks-grid">
            {tasks.map((cat) => (
              <div key={cat.category} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
                <div style={{ padding: "16px 20px", background: "var(--surface-3)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "flex", color: "var(--brand-primary)" }}>{cat.icon}</span>
                  <span style={{ fontWeight: 700, color: "var(--text-primary)", fontFamily: "Roboto Condensed, sans-serif" }}>{cat.category}</span>
                </div>
                <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {cat.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.875rem", color: "rgba(242,242,240,0.65)" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--brand-primary)", flexShrink: 0, display: "block" }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              FAQ
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", fontFamily: "Roboto Condensed, sans-serif" }}>
              AI vs Manual Ops — Honest Answers
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, fontFamily: "Roboto Condensed, sans-serif", fontSize: "1rem" }}>{faq.q}</div>
                <div style={{ fontSize: "0.9375rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "80px 0", background: "var(--surface)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: "Roboto Condensed, sans-serif" }}>
            Stop running operations manually.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7, marginBottom: 32 }}>
            Get your AI operations system live in 5–7 days. Flat monthly rate. No management required.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#contact" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, background: "var(--brand-primary)", color: "#fff", textDecoration: "none", fontSize: "1rem" }}>
              Book a Free Demo
            </Link>
            <Link href="/blog/virtual-assistant-philippines-vs-ai" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, border: "1.5px solid rgba(242,242,240,0.15)", color: "var(--text-primary)", textDecoration: "none", fontSize: "1rem" }}>
              Read the Comparison →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 640px) {
          .tasks-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
