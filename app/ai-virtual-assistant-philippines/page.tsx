import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Virtual Assistant Philippines | Replace Your VA with AI | Hirelessly",
  description: "Filipino VAs cost $600–$1,500/mo. Hirelessly's AI virtual assistant starts at $29/mo — 24/7 availability, zero management, deployed in 5 days. The smarter alternative.",
  alternates: { canonical: "https://hirelessly.com/ai-virtual-assistant-philippines" },
  openGraph: {
    title: "AI Virtual Assistant Philippines | Hirelessly",
    description: "The smarter alternative to hiring a Filipino VA. 24/7, no management overhead, live in 5 days. From $29/mo.",
    url: "https://hirelessly.com/ai-virtual-assistant-philippines",
  },
};

const costRows = [
  { item: "Monthly salary", human: "$600–$1,500", ai: "$29–$99" },
  { item: "Onboarding time", human: "2–4 weeks", ai: "5–7 days" },
  { item: "Hours available", human: "40h/week", ai: "168h/week" },
  { item: "Sick days", human: "Yes", ai: "None" },
  { item: "Management time", human: "3–5h/week", ai: "None" },
  { item: "Scale up cost", human: "Hire another VA", ai: "Same plan" },
  { item: "Consistency", human: "Varies by person", ai: "100% rule-based" },
];

const tasks = [
  { category: "Email & Comms", icon: "📬", items: ["Inbox triage & prioritization", "Draft & send responses", "Follow-up sequences", "Unsubscribe management"] },
  { category: "Scheduling", icon: "📅", items: ["Book & reschedule meetings", "Send calendar invites", "Zoom/Meet link generation", "Buffer time management"] },
  { category: "CRM & Leads", icon: "📊", items: ["Update contact records", "Tag & score leads", "Log call & email activity", "Pipeline stage updates"] },
  { category: "Customer Support", icon: "💬", items: ["Respond to inbound tickets", "FAQ resolution", "Escalation routing", "Satisfaction follow-up"] },
];

const faqs = [
  {
    q: "Can AI really replace a Filipino virtual assistant?",
    a: "For repetitive, rule-based tasks — email, scheduling, CRM, support — AI outperforms a human VA on speed, cost, consistency, and availability. For tasks requiring complex judgment or relationships, a hybrid approach works best.",
  },
  {
    q: "What if I already have a Filipino VA?",
    a: "Many clients use Hirelessly to handle the repetitive work that used to take their VA's full day, freeing the VA to focus on higher-value tasks. You don't need to fire anyone — you just stop wasting human talent on repetitive work.",
  },
  {
    q: "How much does a Filipino VA really cost?",
    a: "Salary is $600–$1,500/mo depending on experience. Add job posting, onboarding, management time (3–5h/week of your time), benefits, and replacement costs when they leave. The real cost is often 2x the salary.",
  },
  {
    q: "What happens if the AI makes a mistake?",
    a: "Agents operate within strict rules you approve upfront. Anything outside those rules goes to a human-in-the-loop (HITL) queue. You review before it executes. No surprises.",
  },
  {
    q: "Do I have to set it up myself?",
    a: "No. Hirelessly is fully managed. We map your workflows, configure the agents, run integrations, and maintain everything. You review and approve before anything goes live.",
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
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--accent)" }}>AI Virtual Assistant — Philippines Market</span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: "Roboto Condensed, sans-serif" }}>
              The Smarter Alternative to Hiring a Filipino VA
            </h1>
            <p style={{ fontSize: "1.125rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7, marginBottom: 12, maxWidth: 620 }}>
              Filipino virtual assistants cost <strong style={{ color: "var(--text-primary)" }}>$600–$1,500/mo</strong> plus management overhead.
              Hirelessly deploys AI virtual assistants that handle the same repetitive work —{" "}
              <strong style={{ color: "var(--text-primary)" }}>starting at $29/mo</strong>, available 24/7, live in 5 days.
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
              Filipino VA vs AI Assistant — Real Numbers
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", maxWidth: 520, margin: "0 auto" }}>
              The salary is just the start. Factor in onboarding, management time, and replacement costs.
            </p>
          </div>

          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "var(--surface-3)", padding: "14px 20px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
              <div></div>
              <div style={{ textAlign: "center" }}>Filipino VA</div>
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
              Average savings: <strong style={{ color: "var(--accent)" }}>$8,000–$17,000/year</strong> compared to a mid-range Filipino VA
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
                  <span style={{ fontSize: "1.25rem" }}>{cat.icon}</span>
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
              AI vs Filipino VA — Honest Answers
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
            Stop overpaying for manual work.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7, marginBottom: 32 }}>
            Book a free 20-minute call. We&apos;ll show you exactly which tasks your AI assistant can handle — and what it would cost.
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
