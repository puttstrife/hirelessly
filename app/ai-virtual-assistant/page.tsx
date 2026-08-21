import Link from "next/link";
import type { Metadata } from "next";
import { EnvelopeSimple, CalendarBlank, ChartBar, ChatCircle, Target } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "AI Assistant Services | One System. A Whole Team. | Hirelessly",
  description: "Hirelessly deploys specialized AI agents that handle email, scheduling, CRM, support, and leads — fully managed, live in 5–7 days.",
  alternates: { canonical: "https://hirelessly.com/ai-virtual-assistant" },
  openGraph: {
    title: "AI Assistant Services | One System. A Whole Team. | Hirelessly",
    description: "Hirelessly deploys specialized AI agents that handle email, scheduling, CRM, support, and leads — fully managed, live in 5–7 days.",
    url: "https://hirelessly.com/ai-virtual-assistant",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Assistant Services | One System. A Whole Team. | Hirelessly",
    description: "Hirelessly deploys specialized AI agents that handle email, scheduling, CRM, support, and leads — fully managed, live in 5–7 days.",
  },
};

const agents = [
  { icon: <EnvelopeSimple size={22} weight="duotone" />, name: "Email Agent", desc: "Reads, categorizes, drafts, and sends email responses within your defined rules. Never misses a follow-up." },
  { icon: <CalendarBlank size={22} weight="duotone" />, name: "Scheduler Agent", desc: "Books, reschedules, and manages calendar events across your team. No back-and-forth." },
  { icon: <ChartBar size={22} weight="duotone" />, name: "CRM Agent", desc: "Updates records, tags leads, logs activity, and keeps your pipeline clean without manual entry." },
  { icon: <ChatCircle size={22} weight="duotone" />, name: "Support Agent", desc: "Resolves 40–60% of customer inquiries automatically using your approved knowledge base." },
  { icon: <Target size={22} weight="duotone" />, name: "Lead Agent", desc: "Qualifies inbound leads, responds instantly, and books discovery calls — around the clock." },
];

const steps = [
  { num: "01", title: "Workflow mapping", desc: "We map your existing workflows — emails, scheduling, CRM, support — and define exactly what each agent is authorized to do." },
  { num: "02", title: "Agent configuration", desc: "We build and train each agent on your business context, tone, templates, and tools. You review and approve before anything goes live." },
  { num: "03", title: "Integration & testing", desc: "We connect to your existing stack — Gmail, HubSpot, Slack, Salesforce, Notion — and run a full test cycle with you." },
  { num: "04", title: "Go live", desc: "Your agents start working. You get a weekly activity digest and a direct line to our team for adjustments." },
];

const compare = [
  { feature: "Cost/month", human: "$600–$1,500", ai: "From $149" },
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
            serviceType: "AI Assistant Services",
            name: "Hirelessly AI Assistant",
            provider: { "@type": "Organization", name: "Hirelessly", url: "https://hirelessly.com" },
            description: "A managed AI assistant service that runs multiple specialized AI agents — email, scheduling, CRM, support, leads — coordinated as a single hire.",
            areaServed: "Global",
            offers: { "@type": "Offer", price: "149", priceCurrency: "USD" },
          }),
        }}
      />

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: "var(--surface)", overflow: "hidden" }}>
        <style>{`
          @keyframes orbit1 { from { transform: rotate(0deg) translateX(130px) rotate(0deg); } to { transform: rotate(360deg) translateX(130px) rotate(-360deg); } }
          @keyframes orbit2 { from { transform: rotate(45deg) translateX(130px) rotate(-45deg); } to { transform: rotate(405deg) translateX(130px) rotate(-405deg); } }
          @keyframes orbit3 { from { transform: rotate(90deg) translateX(130px) rotate(-90deg); } to { transform: rotate(450deg) translateX(130px) rotate(-450deg); } }
          @keyframes orbit4 { from { transform: rotate(135deg) translateX(130px) rotate(-135deg); } to { transform: rotate(495deg) translateX(130px) rotate(-495deg); } }
          @keyframes orbit5 { from { transform: rotate(180deg) translateX(130px) rotate(-180deg); } to { transform: rotate(540deg) translateX(130px) rotate(-540deg); } }
          @keyframes orbit6 { from { transform: rotate(225deg) translateX(130px) rotate(-225deg); } to { transform: rotate(585deg) translateX(130px) rotate(-585deg); } }
          @keyframes orbit7 { from { transform: rotate(270deg) translateX(130px) rotate(-270deg); } to { transform: rotate(630deg) translateX(130px) rotate(-630deg); } }
          @keyframes orbit8 { from { transform: rotate(315deg) translateX(130px) rotate(-315deg); } to { transform: rotate(675deg) translateX(130px) rotate(-675deg); } }
          @keyframes pulse-ring { 0%,100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.35; transform: scale(1.05); } }
          @keyframes ai-glow { 0%,100% { box-shadow: 0 0 24px rgba(239,111,46,0.4); } 50% { box-shadow: 0 0 48px rgba(239,111,46,0.7); } }
        `}</style>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="ava-hero-grid">
            {/* Left — copy */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,255,135,0.08)", border: "1px solid rgba(0,255,135,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "block" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--accent)" }}>The smarter alternative to running operations manually</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: "Roboto Condensed, sans-serif" }}>
                AI Assistant Services
              </h1>
              <p style={{ fontSize: "1.375rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 16, fontFamily: "Roboto Condensed, sans-serif" }}>
                One AI System. A Whole Team&apos;s Worth of Output.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "var(--ink-muted)", lineHeight: 1.7, marginBottom: 32, maxWidth: 580 }}>
                Fully managed AI agents that handle your business operations — without the hiring, onboarding, or management overhead.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
                <Link href="/#contact" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, background: "var(--brand-primary)", color: "#fff", textDecoration: "none", fontSize: "1rem" }}>
                  Get Started
                </Link>
                <Link href="#how-it-works" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, background: "transparent", border: "1.5px solid rgba(242,242,240,0.15)", color: "var(--text-primary)", textDecoration: "none", fontSize: "1rem" }}>
                  See How It Works
                </Link>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#00FF87"><path d="M8 1L10.06 5.26L14.72 5.73L11.5 8.66L12.47 13.27L8 10.9L3.53 13.27L4.5 8.66L1.28 5.73L5.94 5.26L8 1Z"/></svg>
                No technical setup. No management overhead. Live in 5 days.
              </p>
            </div>

            {/* Right — Integrations orbit */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", width: 340, height: 340 }}>
                {/* Orbit ring */}
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px dashed rgba(239,111,46,0.2)", animation: "pulse-ring 3s ease-in-out infinite" }} />
                <div style={{ position: "absolute", inset: 28, borderRadius: "50%", border: "1px dashed rgba(239,111,46,0.1)" }} />

                {/* Center AI node */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #EF6F2E, #c45010)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "ai-glow 3s ease-in-out infinite", zIndex: 2 }}>
                  <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1 }}>AI</span>
                  <span style={{ fontSize: "0.45rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Core</span>
                </div>

                {/* Orbiting brand icons — SVG logos inline */}
                {[
                  { label: "Microsoft", delay: "0s", dur: "18s", anim: "orbit1", color: "#00A4EF", svg: <svg viewBox="0 0 21 21" width="20" height="20"><rect x="1" y="1" width="9" height="9" fill="#F25022"/><rect x="11" y="1" width="9" height="9" fill="#7FBA00"/><rect x="1" y="11" width="9" height="9" fill="#00A4EF"/><rect x="11" y="11" width="9" height="9" fill="#FFB900"/></svg> },
                  { label: "Slack", delay: "-2s", dur: "18s", anim: "orbit2", color: "#4A154B", svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/></svg> },
                  { label: "Gmail", delay: "-4s", dur: "18s", anim: "orbit3", color: "#EA4335", svg: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/></svg> },
                  { label: "HubSpot", delay: "-6s", dur: "18s", anim: "orbit4", color: "#FF7A59", svg: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M22.523 12.005c0-1.144-.37-2.203-1.001-3.063V6.857a2.193 2.193 0 0 0-1.097-1.898 2.194 2.194 0 0 0-2.194 0l-.093.054A5.033 5.033 0 0 0 16 5.5V3.757A1.758 1.758 0 0 0 14.243 2h-.486A1.758 1.758 0 0 0 12 3.757V5.5a5.016 5.016 0 0 0-3.475 2.97 5.038 5.038 0 0 0 1.103 5.416 5.034 5.034 0 0 0 5.416 1.103A5.016 5.016 0 0 0 17.5 12a5.003 5.003 0 0 0-.418-2l.093.054a2.193 2.193 0 0 0 2.194 0 2.193 2.193 0 0 0 1.097-1.898v-2.085a5.027 5.027 0 0 1 1.001 3.063 5.016 5.016 0 0 1-2.97 4.556 5.034 5.034 0 0 1-5.452-.999l-4.999 5.001a1.5 1.5 0 1 0 2.121 2.121l4.999-5A5.016 5.016 0 0 0 17.5 17a5.033 5.033 0 0 0 5.023-4.995z" fill="#FF7A59"/></svg> },
                  { label: "Notion", delay: "-8s", dur: "18s", anim: "orbit5", color: "#fff", svg: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="#fff"/></svg> },
                  { label: "Salesforce", delay: "-10s", dur: "18s", anim: "orbit6", color: "#00A1E0", svg: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M10.002 6.378a3.874 3.874 0 0 1 2.72-1.116 3.9 3.9 0 0 1 3.444 2.073 4.79 4.79 0 0 1 1.928-.403 4.836 4.836 0 0 1 4.836 4.836 4.836 4.836 0 0 1-4.836 4.836 4.81 4.81 0 0 1-.765-.063 3.598 3.598 0 0 1-3.312 2.197 3.576 3.576 0 0 1-1.565-.358A4.088 4.088 0 0 1 8.67 20.26a4.088 4.088 0 0 1-4.023-3.367 3.644 3.644 0 0 1-.721.072A3.926 3.926 0 0 1 0 13.039a3.926 3.926 0 0 1 3.926-3.926c.212 0 .42.017.624.05a4.335 4.335 0 0 1 3.913-2.468c.588 0 1.148.12 1.656.337z" fill="#00A1E0"/></svg> },
                  { label: "Zapier", delay: "-12s", dur: "18s", anim: "orbit7", color: "#FF4A00", svg: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M14.924 8.496l4.073-4.073a1.2 1.2 0 0 0-1.698-1.697l-4.072 4.073a7.27 7.27 0 0 0-2.454 0L6.701 2.726a1.2 1.2 0 1 0-1.698 1.697l4.073 4.073a7.254 7.254 0 0 0-1.228 2.127H2.4a1.2 1.2 0 0 0 0 2.4h5.448a7.254 7.254 0 0 0 1.228 2.127L5.003 19.223a1.2 1.2 0 1 0 1.698 1.697l4.072-4.073a7.27 7.27 0 0 0 2.454 0l4.072 4.073a1.2 1.2 0 1 0 1.698-1.697l-4.073-4.073A7.254 7.254 0 0 0 16.152 13H21.6a1.2 1.2 0 0 0 0-2.4h-5.448a7.254 7.254 0 0 0-1.228-2.104zM12 14.4A2.4 2.4 0 1 1 12 9.6a2.4 2.4 0 0 1 0 4.8z" fill="#FF4A00"/></svg> },
                  { label: "Google", delay: "-14s", dur: "18s", anim: "orbit8", color: "#4285F4", svg: <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/></svg> },
                ].map(({ label, anim, dur, delay, svg }) => (
                  <div key={label} title={label} style={{ position: "absolute", top: "50%", left: "50%", width: 44, height: 44, marginTop: -22, marginLeft: -22, animation: `${anim} ${dur} linear infinite`, animationDelay: delay }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--surface-2)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
                      {svg}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .ava-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
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
            <p style={{ fontSize: "1.0625rem", color: "var(--ink-muted)", maxWidth: 560, margin: "0 auto" }}>
              A team of agents, each doing one thing perfectly. Each specialist runs in parallel — nothing waits in a queue.
            </p>
          </div>

          <div style={{ display: "grid", gap: 16 }} className="agents-grid">
            {agents.map((agent) => (
              <div key={agent.name} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 24, display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(239,111,46,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--brand-primary)" }}>
                  {agent.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "1.0625rem", marginBottom: 6, fontFamily: "Roboto Condensed, sans-serif" }}>{agent.name}</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: 1.65 }}>{agent.desc}</div>
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
              { num: "60%", desc: "Avg cost reduction vs traditional ops" },
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
                  <div style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: 1.65 }}>{step.desc}</div>
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
              <div style={{ textAlign: "center" }}>Traditional Hire / Manual Ops</div>
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
                <div style={{ fontSize: "0.9375rem", color: "var(--ink-muted)", lineHeight: 1.7 }}>{faq.a}</div>
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
          <p style={{ fontSize: "1.0625rem", color: "var(--ink-muted)", marginBottom: 32, lineHeight: 1.7 }}>
            Get a fully managed AI assistant — multiple agents, one hire, zero overhead. Starting from $149/mo.
          </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#contact" style={{ padding: "16px 32px", fontWeight: 600, borderRadius: 20, background: "var(--brand-primary)", color: "#fff", textDecoration: "none", fontSize: "1rem" }}>
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
