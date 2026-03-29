import Link from "next/link";
import ChatDemo from "@/components/ChatDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Virtual Assistant Services | Hirelessly — Systemize Your Business Operations 24/7",
  alternates: { canonical: "https://hirelessly.com" },
};

const stats = [
  { num: "6", desc: "AI Agent types deployed" },
  { num: "5–7", desc: "Days to go live" },
  { num: "60%", desc: "Avg operational cost reduction" },
  { num: "24/7", desc: "System uptime, no gaps" },
];

const agents = [
  { icon: "💻", label: "Coding Agent", desc: "Writes, reviews, and deploys code autonomously. Bug fixes, feature builds, test generation.", badge: "Dev" },
  { icon: "🔍", label: "Research Agent", desc: "Scours the web, synthesizes insights, and delivers structured reports on demand.", badge: "Intelligence" },
  { icon: "📬", label: "VA Agent", desc: "Handles email, scheduling, CRM updates, and lead follow-ups — your always-on virtual assistant.", badge: "Operations" },
  { icon: "📈", label: "SEO Agent", desc: "Audits, optimizes, and publishes content that ranks. Fully autonomous content pipeline.", badge: "Growth" },
  { icon: "🎨", label: "Design Agent", desc: "Generates UI mockups, brand assets, and marketing visuals from briefs and Figma files.", badge: "Creative" },
];

const pricing = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    popular: false,
    actions: "500",
    desc: "Perfect for solo operators and early-stage businesses automating their first workflows.",
    features: ["1 AI Agent (VA Agent)", "500 actions/mo", "Email + Calendar automation", "Slack + Gmail integration", "Email support"],
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mo",
    popular: true,
    actions: "2,000",
    desc: "For growing teams that need multi-agent coverage across operations, sales, and support.",
    features: ["3 AI Agents", "2,000 actions/mo", "CRM integration", "Lead qualification", "Priority support", "Custom workflows"],
  },
  {
    name: "Scale",
    price: "$99",
    period: "/mo",
    popular: false,
    actions: "Unlimited",
    desc: "Full-stack AI operations for businesses ready to run on autopilot.",
    features: ["All 5 AI Agents", "Unlimited actions", "Custom agent training", "API access", "Dedicated onboarding", "SLA guarantee"],
  },
];

const faqs = [
  {
    q: "What is an AI virtual assistant?",
    a: "An AI virtual assistant is software powered by artificial intelligence that performs tasks traditionally handled by human VAs — email management, scheduling, CRM updates, customer support — autonomously, around the clock.",
  },
  {
    q: "How long does it take to deploy?",
    a: "Most businesses are fully operational within 5–7 business days. Compare that to 2–4 weeks to onboard a human VA.",
  },
  {
    q: "How much does it cost compared to a Filipino VA?",
    a: "A Filipino VA typically costs $600–$1,500/mo plus management overhead. Hirelessly starts at $29/mo with 24/7 availability and unlimited task execution.",
  },
  {
    q: "What tasks can it automate?",
    a: "Email management, calendar scheduling, CRM updates, customer support responses, lead follow-ups, data entry, report generation — any high-volume, rule-based business task.",
  },
];

export default function Home() {
  return (
    <>
      {/* ======= HERO ======= */}
      <section className="hero-section" style={{ paddingTop: 120, paddingBottom: 80, background: "var(--surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 60, alignItems: "center" }} className="hero-grid">

            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,255,135,0.08)", border: "1px solid rgba(0,255,135,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "block", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--accent)", letterSpacing: "0.04em" }}>Systemized Business Execution — Running 24/7</span>
              </div>

              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20, fontFamily: "Roboto Condensed, sans-serif" }}>
                Your Business Runs 24/7.{" "}
                <span style={{ color: "var(--brand-primary)" }}>Your Operations Should Too.</span>
              </h1>

              <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Hirelessly deploys <strong style={{ color: "var(--text-primary)" }}>AI systems</strong> that handle the repetitive work — emails, scheduling, CRM updates, customer support — so your business executes consistently without manual bottlenecks.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                <Link href="/#contact" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, background: "var(--brand-primary)", color: "#fff", textDecoration: "none", fontSize: "1rem", display: "inline-block" }}>
                  Get Your AI Assistant
                </Link>
                <Link href="/#contact" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, border: "1.5px solid rgba(242,242,240,0.15)", color: "var(--text-primary)", textDecoration: "none", fontSize: "1rem", display: "inline-block" }}>
                  Book a Demo
                </Link>
              </div>

              <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#EF6F2E"><path d="M8 1L10.06 5.26L14.72 5.73L11.5 8.66L12.47 13.27L8 10.9L3.53 13.27L4.5 8.66L1.28 5.73L5.94 5.26L8 1Z"/></svg>
                No long-term contracts. Deploy in days, not weeks.
              </p>
            </div>

            {/* Right — Chat Demo */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ChatDemo />
            </div>

          </div>
        </div>
      </section>

      {/* ======= STATS STRIP ======= */}
      <div className="stats-strip" style={{ background: "var(--surface-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "32px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, textAlign: "center" }} className="stats-grid">
            {stats.map((s) => (
              <div key={s.num}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--brand-primary)", fontFamily: "Roboto Condensed, sans-serif", letterSpacing: "-0.02em" }}>{s.num}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 4 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======= AGENTS ======= */}
      <section id="solutions" style={{ padding: "80px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              Agentic AI Services
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: 12, fontFamily: "Roboto Condensed, sans-serif" }}>
              Five Specialized AI Agents. One Platform.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", maxWidth: 560, margin: "0 auto" }}>
              Each agent is purpose-built for its domain — not a general chatbot, but an autonomous specialist.
            </p>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {agents.map((agent) => (
              <div
                key={agent.label}
                className="agent-card"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 24, display: "flex", gap: 20, alignItems: "flex-start", transition: "border-color 0.2s, box-shadow 0.2s" }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(239,111,46,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>
                  {agent.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 6, fontSize: "1rem" }}>{agent.label}</div>
                  <div style={{ fontSize: "0.875rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.6 }}>{agent.desc}</div>
                  <span style={{ display: "inline-block", marginTop: 10, fontSize: "0.75rem", fontWeight: 600, color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", borderRadius: 999, padding: "3px 10px" }}>
                    {agent.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= HOW IT WORKS ======= */}
      <section id="how-it-works" style={{ padding: "80px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              How It Works
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", fontFamily: "Roboto Condensed, sans-serif" }}>
              From Zero to Automated in 5–7 Days
            </h2>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {[
              { step: "01", title: "Tell us your workflows", desc: "We map out the tasks your business runs repeatedly — emails, scheduling, CRM, support — and identify what can be automated." },
              { step: "02", title: "We configure your AI agents", desc: "Your agents are trained on your business context, tone, and tools. Integrations with Gmail, Slack, CRM, and more." },
              { step: "03", title: "Go live in 5–7 days", desc: "Your AI assistant starts handling tasks immediately. You review, approve, and gain confidence as it runs." },
              { step: "04", title: "It runs 24/7 from here", desc: "Your business executes consistently — no sick days, no gaps, no manual follow-up. You focus on growth." },
            ].map((item) => (
              <div key={item.step} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 20, padding: 24, display: "flex", gap: 20 }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--brand-primary)", fontFamily: "Roboto Condensed, sans-serif", opacity: 0.5, flexShrink: 0, lineHeight: 1 }}>{item.step}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 8, fontSize: "1rem" }}>{item.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= PRICING ======= */}
      <section id="pricing" style={{ padding: "80px 0", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              Pricing
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", fontFamily: "Roboto Condensed, sans-serif", marginBottom: 12 }}>
              Less Than One Hour of a Human VA
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", maxWidth: 480, margin: "0 auto" }}>
              Human VAs cost $600–$1,500/mo. Hirelessly starts at $29.
            </p>
          </div>

          <div style={{ display: "grid", gap: 16 }} className="pricing-grid">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.popular ? "linear-gradient(135deg, rgba(239,111,46,0.12), rgba(0,255,135,0.06))" : "var(--surface)",
                  border: `1px solid ${tier.popular ? "var(--brand-primary)" : "var(--border)"}`,
                  borderRadius: 20,
                  padding: 28,
                  position: "relative",
                }}
              >
                {tier.popular && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--brand-primary)", color: "#fff", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: "1.125rem", color: "var(--text-primary)" }}>{tier.name}</span>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-primary)", fontFamily: "Roboto Condensed, sans-serif", letterSpacing: "-0.03em" }}>{tier.price}</span>
                  <span style={{ fontSize: "1rem", color: "var(--text-muted)" }}>{tier.period}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.55, marginBottom: 20 }}>{tier.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 8, fontSize: "0.875rem", color: "rgba(242,242,240,0.65)" }}>
                      <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "14px",
                    borderRadius: 12,
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    background: tier.popular ? "var(--brand-primary)" : "transparent",
                    color: tier.popular ? "#fff" : "var(--text-primary)",
                    border: tier.popular ? "none" : "1.5px solid rgba(242,242,240,0.15)",
                    textDecoration: "none",
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FAQ ======= */}
      <section style={{ padding: "80px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
              FAQ
            </span>
            <h2 style={{ fontSize: "clamp(1.625rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", fontFamily: "Roboto Condensed, sans-serif" }}>
              Common Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: 10, fontSize: "1rem", fontFamily: "Roboto Condensed, sans-serif" }}>{faq.q}</div>
                <div style={{ fontSize: "0.9375rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section id="contact" style={{ padding: "80px 0", background: "var(--surface-2)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: "Roboto Condensed, sans-serif" }}>
            Ready to Run on Autopilot?
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7, marginBottom: 32 }}>
            Book a free 20-minute call. We&apos;ll map out exactly which tasks your AI assistant can take over — starting this week.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://cal.com/hirelessly" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, background: "var(--brand-primary)", color: "#fff", textDecoration: "none", fontSize: "1rem" }}>
              Book a Free Demo
            </a>
            <Link href="/ai-virtual-assistant-philippines" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, border: "1.5px solid rgba(242,242,240,0.15)", color: "var(--text-primary)", textDecoration: "none", fontSize: "1rem" }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .pricing-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .hero-section { padding-top: 88px !important; padding-bottom: 48px !important; }
          .hero-grid { gap: 32px !important; }
          .section-pad { padding: 48px 0 !important; }
          .stats-strip { padding: 24px 0 !important; }
        }
      `}</style>
    </>
  );
}
