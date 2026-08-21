import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import DashboardMockup from "@/components/DashboardMockup";
import HowItWorksSection from "@/components/HowItWorksSection";
import { DemoBookingButton } from "@/components/DemoBooking";
import {
  Robot, MagnifyingGlass, EnvelopeSimple, ChartBar, PaintBrush,
  CurrencyDollar, Clock, TrendUp, Users,
  ClipboardText, ChatCircle, Gear, CalendarBlank, Funnel,
  User, X, Check,
  HourglassSimple, LinkSimple, Warning,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "AI Operations Assistant | Hirelessly",
  description: "Hirelessly deploys AI systems that handle your business operations 24/7 — email, scheduling, CRM, support, leads — so you focus on strategy and growth. Live in 5–7 days.",
  alternates: { canonical: "https://hirelessly.com" },
  twitter: {
    card: "summary_large_image",
    title: "AI Operations Assistant | Hirelessly",
    description: "Hirelessly deploys AI systems that handle your business operations 24/7 — email, scheduling, CRM, support, leads — so you focus on strategy and growth. Live in 5–7 days.",
  },
};

const LEDGER_FACTS = [
  { num: "Managed", desc: "AI operations systems" },
  { num: "5–7", desc: "Days to go live" },
  { num: "24/7", desc: "Operational coverage" },
  { num: "Your stack", desc: "No rip-and-replace" },
];

const AGENTS = [
  { icon: <Robot size={20} weight="duotone" />, title: "Coding Agent", desc: "Reads your codebase, writes and tests code autonomously. Handles bug fixes, feature development, and code reviews without a developer on standby.", badge: "Engineering Automation" },
  { icon: <MagnifyingGlass size={20} weight="duotone" />, title: "Research Agent", desc: "Browses the web, summarizes findings, and writes structured reports. Replaces hours of manual research with instant, cited deliverables.", badge: "Market & Competitive Intel" },
  { icon: <EnvelopeSimple size={20} weight="duotone" />, title: "VA Agent", desc: "Handles emails, manages schedules, and executes tasks automatically. Your always-on virtual assistant that never misses a follow-up.", badge: "Admin & Operations" },
  { icon: <ChartBar size={20} weight="duotone" />, title: "SEO Agent", desc: "Audits your site, generates optimized content, and tracks keyword rankings. Turns your SEO strategy into an automated, compounding growth engine.", badge: "Growth & Visibility" },
  { icon: <PaintBrush size={20} weight="duotone" />, title: "Design Agent", desc: "Reads Figma files, generates production-ready code, and iterates on designs. Bridges the gap between design and engineering at AI speed.", badge: "Design to Code" },
];

const INDUSTRIES = [
  { name: "Real Estate", desc: "Lead follow-ups, scheduling showings, CRM" },
  { name: "E-Commerce", desc: "Order support, returns, customer queries" },
  { name: "Marketing Agencies", desc: "Reporting, client comms, campaign ops" },
  { name: "Startups", desc: "Lean ops, founder support, fast execution" },
  { name: "Support Teams", desc: "Ticket routing, FAQs, 24/7 chat coverage" },
];

const BENEFITS = [
  { icon: <CurrencyDollar size={20} />, title: "Reduce Operational Cost", desc: "Automate high-frequency work at a fraction of the cost of manual execution — without adding headcount." },
  { icon: <Clock size={20} />, title: "Eliminate Execution Bottlenecks", desc: "Repetitive tasks run automatically — no queues, no delays, no one needing to be online for work to happen." },
  { icon: <TrendUp size={20} />, title: "Reclaim Your Team's Leverage", desc: "When the system handles operations, your team focuses on the work that actually moves the business forward." },
  { icon: <Users size={20} />, title: "Scale Without Adding Headcount", desc: "Volume grows, the system absorbs it. Your costs stay flat while your capacity expands." },
];

const SI = (slug: string) => `https://cdn.simpleicons.org/${slug}/8A91A6`;
const IC = (id: string) => `https://api.iconify.design/${id}.svg?color=%238A91A6`;
const ICL = (id: string) => `https://api.iconify.design/logos:${id}.svg`;

const INTEGRATIONS_ROWS = [
  [
    { name: "n8n",           src: SI("n8n") },
    { name: "Make",          src: SI("make") },
    { name: "Zapier",        src: SI("zapier") },
    { name: "Retool",        src: SI("retool") },
    { name: "Slack",         src: IC("simple-icons:slack") },
    { name: "Discord",       src: SI("discord") },
    { name: "Telegram",      src: SI("telegram") },
    { name: "WhatsApp",      src: SI("whatsapp") },
    { name: "Twilio",        src: IC("simple-icons:twilio") },
    { name: "Intercom",      src: SI("intercom") },
  ],
  [
    { name: "HubSpot",       src: SI("hubspot") },
    { name: "Salesforce",    src: IC("simple-icons:salesforce") },
    { name: "Pipedrive",     src: ICL("pipedrive") },
    { name: "Zoho CRM",      src: SI("zoho") },
    { name: "Monday.com",    src: ICL("monday-icon") },
    { name: "ClickUp",       src: SI("clickup") },
    { name: "Asana",         src: SI("asana") },
    { name: "Linear",        src: SI("linear") },
    { name: "Airtable",      src: SI("airtable") },
    { name: "Trello",        src: SI("trello") },
  ],
  [
    { name: "Gmail",         src: SI("gmail") },
    { name: "Outlook",       src: IC("simple-icons:microsoftoutlook") },
    { name: "Google Sheets", src: SI("googlesheets") },
    { name: "Google Drive",  src: SI("googledrive") },
    { name: "Notion",        src: SI("notion") },
    { name: "Calendly",      src: SI("calendly") },
    { name: "Zoom",          src: SI("zoom") },
    { name: "GitHub",        src: SI("github") },
    { name: "Supabase",      src: SI("supabase") },
    { name: "Shopify",       src: SI("shopify") },
    { name: "Stripe",        src: SI("stripe") },
    { name: "Webflow",       src: SI("webflow") },
  ],
];

const BLOG_POSTS = [
  { href: "/blog/what-is-ai-virtual-assistant", tag: "Guide", title: "What is an AI Assistant?", desc: "A plain-English breakdown of what AI VAs actually do, how they work, and who they're for." },
  { href: "/blog/ai-virtual-assistant-vs-human", tag: "Comparison", title: "AI Assistant vs Human VA", desc: "A full breakdown of cost, speed, reliability, and use cases — so you can make the right call." },
  { href: "/blog/virtual-assistant-salary-philippines", tag: "Cost", title: "Virtual Assistant Salary in the Philippines", desc: "The real cost of manual business operations in 2025 — and what businesses are doing instead." },
];

const FAQ = [
  { q: "What is an AI assistant?", a: "An AI assistant is a managed system that handles your business operations automatically — email, scheduling, CRM updates, customer support, lead qualification — without anyone needing to be online for the work to happen. It runs 24/7, never misses a follow-up, and scales with your volume at no extra cost." },
  { q: "How much does an AI assistant cost compared to running operations manually?", a: "Running operations manually — salaries, management time, onboarding — typically costs $600–$1,500/mo per role. Hirelessly starts from $149/mo and handles the same operational output with 24/7 coverage. Most clients save 50–70% compared to their previous ops costs." },
  { q: "Can AI replace manual business operations?", a: "For high-volume, repetitive, rule-based tasks — email triage, scheduling, CRM updates, data entry, support tickets — yes. AI handles these consistently and at scale. For complex judgment calls, client relationships, or creative work, a hybrid model (AI handling volume + human handling exceptions) works best." },
  { q: "How quickly can I get an AI assistant for my business?", a: "Most Hirelessly clients are fully deployed within 5–7 business days. We map your workflows, build the AI automations, integrate with your existing tools, and launch — no technical work required on your end." },
  { q: "What tools do you integrate with?", a: "We work with automation platforms (n8n, Make, Zapier, GoHighLevel), CRMs (HubSpot, Salesforce, Pipedrive), email and calendar (Gmail, Outlook, Google Calendar, Calendly), communication tools (Slack, WhatsApp Business, Intercom), and productivity apps (Notion, Airtable, ClickUp, Google Sheets). If your tool has a REST API or webhook, we can connect to it." },
  { q: "What does the setup fee cover?", a: "Your setup fee covers the full initial build — workflow mapping, agent configuration, tool integrations, and onboarding. Minor workflow adjustments are included in your monthly plan. If your business evolves significantly and requires a major rebuild, that's quoted separately — but most updates are handled within your subscription." },
  { q: "Do you offer a trial or pilot period?", a: "We don't offer a free trial — building and deploying your agents requires real setup work. What we do offer is an honest intake process: before you pay anything, we'll map your workflows and show you exactly what will be automated, what it will cost, and what results to expect. No surprises." },
  { q: "Is my data secure?", a: "Yes. Your data is never stored beyond what's needed to execute your workflows. We use OAuth for all tool integrations — we never store your passwords. Agent logs are retained for debugging and deleted on a rolling 30-day basis. We're happy to share our data handling policy on request." },
  { q: "What happens if I want to cancel?", a: "You can cancel anytime after month 3 — no penalties, no lock-in. We'll offboard your agents cleanly and document everything so you keep your workflows. The setup fee is non-refundable as it covers the build work already done, but your monthly subscription stops the day you cancel." },
];

const SECTION_HEAD: React.CSSProperties = { maxWidth: 640, marginBottom: 40 };

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hirelessly",
            url: "https://hirelessly.com",
            logo: "https://hirelessly.com/logo.png",
            description: "Hirelessly deploys AI assistant systems that handle emails, scheduling, CRM, and customer support — 24/7, starting at $149/mo.",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              url: "https://hirelessly.com/#contact",
            },
          }),
        }}
      />

      {/* ===================== HERO ===================== */}
      <section className="home-hero-section" style={{ padding: "128px 0 0", position: "relative", overflow: "hidden" }} id="get-started">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div className="home-hero-grid" style={{ display: "grid", gap: 48, alignItems: "center" }}>

            {/* Left — offer + two actions */}
            <div>
              <h1 style={{ marginBottom: 20, textWrap: "balance" } as React.CSSProperties}>
                Your operations, <span style={{ color: "var(--cobalt-ink)" }}>fully staffed.</span>
              </h1>

              <p style={{ fontSize: "1.0625rem", color: "var(--ink-muted)", marginBottom: 32, maxWidth: 520, lineHeight: 1.7 }}>
                We set up and manage <strong style={{ color: "var(--ink)" }}>AI systems</strong> that handle the repetitive, manual work inside your business — so you stop managing tasks and start building.
              </p>

              <div className="home-hero-ctas" style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                <Link href="/#contact" className="btn-hero" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "16px 32px", background: "var(--ink)", color: "var(--paper)", borderRadius: 12, fontSize: "1rem", fontWeight: 700, textDecoration: "none" }}>
                  Get Your AI Assistant
                </Link>
                <DemoBookingButton source="homepage:hero-book-demo" className="btn-hero" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "16px 32px", background: "var(--surface)", color: "var(--ink)", borderRadius: 12, fontSize: "1rem", fontWeight: 700, textDecoration: "none", border: "1.5px solid var(--border-strong)" }}>
                  Book a Demo
                </DemoBookingButton>
              </div>

              <p style={{ fontSize: "0.8125rem", color: "var(--ink-faint)", margin: 0 }}>
                No long-term contracts. Deploy in 5–7 days. Cancel anytime after month 3.
              </p>
            </div>

            {/* Right — operations ledger / proof panel */}
            <DashboardMockup />

          </div>
        </div>

        {/* the horizon — the page's one saturated register */}
        <div aria-hidden style={{ marginTop: 64, height: 3, background: "var(--horizon)" }} />
        <div aria-hidden style={{ height: 40, background: "linear-gradient(180deg, rgba(43,71,214,0.06), transparent)" }} />
      </section>

      {/* ===================== FACT STRIP ===================== */}
      <div style={{ padding: "24px 0", borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div className="home-facts-row" style={{ display: "flex", flexWrap: "wrap", gap: "10px 32px", alignItems: "baseline", justifyContent: "center" }}>
            {LEDGER_FACTS.map((s, i) => (
              <span key={s.num} className="tabular-nums" style={{ fontSize: "0.9375rem", color: "var(--ink-muted)", display: "inline-flex", alignItems: "baseline", gap: 8, paddingLeft: i === 0 ? 0 : 32, borderLeft: i === 0 ? "none" : "1px solid var(--border)" }}>
                <strong style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--ink)" }}>{s.num}</strong>
                {s.desc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== PROBLEM ===================== */}
      <section style={{ padding: "96px 0" }} id="problem">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gap: 48 }} className="home-problem-grid">

            <div>
              <h2 style={SECTION_HEAD}>Your Business Has a Workflow Execution Problem</h2>
              <p style={{ marginBottom: 8, lineHeight: 1.7, maxWidth: 560 }}>Most businesses don&apos;t have a hiring problem. They have a system problem — work still needs to get done, but the way it gets done is manual, inconsistent, and impossible to scale.</p>
              <div style={{ marginTop: 24 }}>
                {[
                  { icon: <HourglassSimple size={18} weight="duotone" />, text: "Work only happens when someone is available", sub: "Tasks slow down outside working hours — and stop entirely on weekends" },
                  { icon: <CurrencyDollar size={18} weight="duotone" />, text: "Repetitive tasks consume your team's time", sub: "Email replies, CRM updates, scheduling — high-frequency, low-leverage work that never ends" },
                  { icon: <LinkSimple size={18} weight="duotone" />, text: "Your tools are disconnected", sub: "n8n, Zapier, GoHighLevel, CRMs, inboxes — all running separately with no unified logic layer" },
                  { icon: <Warning size={18} weight="duotone" />, text: "Leads wait. Follow-ups get missed. Revenue slips.", sub: "Slow response times and inconsistent execution cost you deals you never see leave" },
                  { icon: <TrendUp size={18} weight="duotone" />, text: "Growth means more headcount, not more efficiency", sub: "More volume requires more people — costs scale linearly while margins compress" },
                ].map((item, i, arr) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 0", borderTop: i === 0 ? "1px solid var(--border)" : "none", borderBottom: i === arr.length - 1 ? "1px solid var(--border)" : "1px solid var(--border)" }}>
                    <div style={{ width: 30, height: 30, color: "var(--cobalt-ink)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--ink)" }}>{item.text}</div>
                      <div style={{ fontSize: "0.8125rem", color: "var(--ink-muted)", marginTop: 2 }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "var(--surface)", borderRadius: 20, border: "1px solid var(--border)", padding: 28, alignSelf: "start" }}>
              <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--ink-faint)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>Monthly cost comparison</div>
              {[
                { label: "Manual Operations", val: "$1,200+/mo", width: "80%", valColor: "var(--danger)", barColor: "var(--danger)" },
                { label: "Automated System",  val: "From $149/mo", width: "25%", valColor: "var(--signal)", barColor: "var(--signal)" },
              ].map(bar => (
                <div key={bar.label} style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--ink)" }}>{bar.label}</span>
                    <span className="tabular-nums" style={{ fontSize: "0.875rem", fontWeight: 700, color: bar.valColor }}>{bar.val}</span>
                  </div>
                  <div style={{ height: 8, background: "var(--surface-2)", borderRadius: 100, overflow: "hidden" }}>
                    <div style={{ height: "100%", borderRadius: 100, background: bar.barColor, width: bar.width }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 24 }}>
                {[
                  { label: "Manual Coverage",    val: "8 hrs/day",     width: "33%", valColor: "var(--danger)", barColor: "var(--danger)" },
                  { label: "Automated Coverage", val: "24/7 always on", width: "100%", valColor: "var(--signal)", barColor: "var(--signal)" },
                ].map(bar => (
                  <div key={bar.label} style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--ink)" }}>{bar.label}</span>
                      <span className="tabular-nums" style={{ fontSize: "0.875rem", fontWeight: 700, color: bar.valColor }}>{bar.val}</span>
                    </div>
                    <div style={{ height: 8, background: "var(--surface-2)", borderRadius: 100, overflow: "hidden" }}>
                      <div style={{ height: "100%", borderRadius: 100, background: bar.barColor, width: bar.width }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--ink-faint)", marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>Illustrative comparison based on typical manual-operations overhead — salary, management time, and coverage gaps — versus a Hirelessly plan.</div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== DEFINITION ===================== */}
      <section style={{ padding: "96px 0", background: "var(--surface-2)" }} id="what-is">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gap: 48 }} className="home-definition-grid">

            <div>
              <h2 style={SECTION_HEAD}>What is an AI Assistant?</h2>
              <p style={{ marginBottom: 16, lineHeight: 1.7 }}>An AI assistant is a managed system that handles your business operations automatically — email, scheduling, CRM, support, leads — without you managing anyone.</p>
              <p style={{ lineHeight: 1.7, marginBottom: 32 }}>Unlike manual processes that depend on people being available, AI assistants connect directly to your tools and run operations 24/7, consistently and at scale.</p>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1px solid var(--border-strong)", borderRadius: 100, padding: "10px 16px" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--signal)", display: "block" }} />
                <span style={{ fontSize: "0.875rem", color: "var(--ink)", fontWeight: 500 }}>Running for businesses like yours — <strong>24/7, no days off</strong></span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Tasks it handles */}
              <div style={{ background: "var(--surface)", borderRadius: 20, padding: 24, border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--ink-faint)", marginBottom: 16 }}>Tasks It Handles</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { label: "Email management",   icon: <EnvelopeSimple size={15} weight="duotone" /> },
                    { label: "Meeting scheduling",  icon: <CalendarBlank  size={15} weight="duotone" /> },
                    { label: "CRM updates",         icon: <ChartBar       size={15} weight="duotone" /> },
                    { label: "Customer support",    icon: <ChatCircle     size={15} weight="duotone" /> },
                    { label: "Lead qualification",  icon: <Funnel         size={15} weight="duotone" /> },
                    { label: "Data entry",          icon: <ClipboardText  size={15} weight="duotone" /> },
                  ].map(task => (
                    <div key={task.label} style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid var(--border)", borderRadius: 10, padding: "10px 12px", fontSize: "0.875rem", fontWeight: 500, color: "var(--cobalt-ink)" }}>
                      {task.icon}
                      {task.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* What you stop doing */}
              <div style={{ background: "var(--surface)", borderRadius: 20, padding: 24, border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "var(--ink-faint)", marginBottom: 16 }}>What You Stop Doing</div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                  {[
                    { icon: <EnvelopeSimple size={15} weight="duotone" />, text: "Triaging your inbox every morning" },
                    { icon: <CalendarBlank  size={15} weight="duotone" />, text: "Going back and forth to book meetings" },
                    { icon: <ChartBar       size={15} weight="duotone" />, text: "Manually updating CRM after every call" },
                    { icon: <ChatCircle     size={15} weight="duotone" />, text: "Answering the same support questions" },
                  ].map(item => (
                    <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.875rem", color: "var(--ink-muted)" }}>
                      <span style={{ color: "var(--danger)", flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ textDecoration: "line-through", opacity: 0.7 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== COMPARISON TABLE ===================== */}
      <section style={{ padding: "96px 0" }} id="comparison">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ ...SECTION_HEAD, margin: "0 auto 40px" }}>
            <h2 style={{ marginBottom: 12 }}>Manual Work vs Systemized Execution</h2>
            <p style={{ lineHeight: 1.7 }}>The difference between running your business on people and running it on systems.</p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
              <thead>
                <tr style={{ background: "var(--surface-3)" }}>
                  <th style={{ padding: "14px 16px", fontSize: "0.875rem", fontWeight: 700, textAlign: "left", width: "30%", color: "var(--ink)" }}>Category</th>
                  <th style={{ padding: "14px 16px", fontSize: "0.875rem", fontWeight: 700, textAlign: "left", color: "var(--ink-muted)" }}><User size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />Traditional Hire / Manual Ops</th>
                  <th style={{ padding: "14px 16px", fontSize: "0.875rem", fontWeight: 700, textAlign: "left", color: "var(--cobalt-ink)", background: "var(--surface)" }}>
                    <Link href="/ai-virtual-assistant" style={{ color: "inherit", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}><Robot size={15} />Automated System ↗</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "Availability",        manual: "Work stops after hours",       ai: "Runs 24/7, no gaps" },
                  { cat: "Time to Deploy",       manual: "Weeks to get productive",      ai: "Live in 5–7 days" },
                  { cat: "Operational Cost",     manual: "Scales with headcount",        ai: "Fixed, predictable cost" },
                  { cat: "Consistency",          manual: "Output varies by person",      ai: "Same quality, every time" },
                  { cat: "Scalability",          manual: "More volume = more hires",     ai: "Volume scales without cost" },
                  { cat: "Knowledge Retention",  manual: "Lost when someone leaves",     ai: "Workflows stay with the system" },
                ].map((row, i) => (
                  <tr key={row.cat} style={{ background: i % 2 === 1 ? "var(--surface-2)" : "var(--surface)" }}>
                    <td style={{ padding: "13px 16px", fontSize: "0.875rem", fontWeight: 500, color: "var(--ink)", borderTop: "1px solid var(--border)" }}>{row.cat}</td>
                    <td style={{ padding: "13px 16px", fontSize: "0.875rem", color: "var(--danger)", borderTop: "1px solid var(--border)" }}><X size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />{row.manual}</td>
                    <td style={{ padding: "13px 16px", fontSize: "0.875rem", color: "var(--signal)", fontWeight: 600, borderTop: "1px solid var(--border)" }}><Check size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================== TASKS ===================== */}
      <section style={{ padding: "96px 0", background: "var(--surface-2)" }} id="tasks">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ ...SECTION_HEAD, margin: "0 auto 40px" }}>
            <h2 style={{ marginBottom: 12 }}>Tasks Your AI Assistant Can Automate</h2>
            <p style={{ lineHeight: 1.7 }}>From day-to-day admin to complex operational workflows — your AI assistant handles it all, across every function of your business.</p>
          </div>
          <div style={{ borderTop: "1px solid var(--border)" }} className="home-tasks-grid">
            {[
              { icon: <ClipboardText size={18} weight="duotone" />, title: "Administration",    items: ["Email management & filtering", "Calendar scheduling", "Document organization", "Meeting notes & follow-ups"] },
              { icon: <TrendUp size={18} weight="duotone" />,       title: "Sales & Marketing", items: ["Lead generation", "CRM updates & tracking", "Email follow-up sequences", "Prospect research"] },
              { icon: <ChatCircle size={18} weight="duotone" />,    title: "Customer Support",  items: ["Chat automation", "Ticket routing", "FAQ responses", "Escalation handling"] },
              { icon: <Gear size={18} weight="duotone" />,          title: "Operations",        items: ["Reporting & analytics", "Workflow automation", "Internal coordination", "Data entry & sync"] },
            ].map(cat => (
              <div key={cat.title} style={{ padding: "24px 0", borderBottom: "1px solid var(--border)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ color: "var(--cobalt-ink)", display: "flex" }}>{cat.icon}</span>
                  <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>{cat.title}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {cat.items.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.875rem", color: "var(--ink-muted)" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--ink-faint)", flexShrink: 0, display: "inline-block" }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/blog/ai-assistant-capabilities-for-business" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.9375rem", fontWeight: 600, color: "var(--cobalt-ink)", textDecoration: "none", borderBottom: "1.5px solid var(--border-strong)", paddingBottom: 2 }}>
              Read: What Can an AI Assistant Actually Do? →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== AGENTIC AI ===================== */}
      <section style={{ padding: "96px 0" }} id="agents">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ ...SECTION_HEAD, margin: "0 auto 40px" }}>
            <h2 style={{ marginBottom: 12 }}>Autonomous AI Agents for Every Function</h2>
            <p style={{ lineHeight: 1.7 }}>Beyond simple automation — Hirelessly deploys intelligent agents that plan, act, and deliver results without constant supervision.</p>
          </div>
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {AGENTS.map(agent => (
              <div key={agent.title} className="home-agent-row" style={{ display: "grid", gap: 20, padding: "24px 0", borderBottom: "1px solid var(--border)", alignItems: "start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid var(--border-strong)", color: "var(--cobalt-ink)" }}>{agent.icon}</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)" }}>{agent.title}</div>
                </div>
                <div style={{ fontSize: "0.9375rem", color: "var(--ink-muted)", lineHeight: 1.6 }}>{agent.desc}</div>
                <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, color: "var(--cobalt-ink)", justifySelf: "start" }}>{agent.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section style={{ padding: "96px 0", background: "var(--surface-2)" }} id="solutions">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ ...SECTION_HEAD, margin: "0 auto 40px" }}>
            <h2 style={{ marginBottom: 12 }}>AI Assistants for Different Industries</h2>
            <p style={{ lineHeight: 1.7 }}>Whether you&apos;re a startup, agency, or enterprise team — Hirelessly scales to fit your operations.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {INDUSTRIES.map(ind => (
              <div key={ind.name} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100, padding: "12px 20px", display: "flex", alignItems: "baseline", gap: 10 }}>
                <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--ink)" }}>{ind.name}</span>
                <span style={{ fontSize: "0.8125rem", color: "var(--ink-muted)" }}>{ind.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BENEFITS ===================== */}
      <section style={{ padding: "96px 0" }} id="benefits">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ ...SECTION_HEAD, margin: "0 auto 40px" }}>
            <h2 style={{ marginBottom: 12 }}>What Changes When You Run on Systems</h2>
            <p style={{ lineHeight: 1.7 }}>This isn&apos;t just about cutting costs. It&apos;s about building an operation that executes consistently, scales without friction, and stops depending on individuals to function.</p>
          </div>
          <div style={{ display: "grid", gap: "0 40px", borderTop: "1px solid var(--border)" }} className="home-benefits-grid">
            {BENEFITS.map(b => (
              <div key={b.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "24px 0", borderBottom: "1px solid var(--border)" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--cobalt-ink)" }}>{b.icon}</div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 4, color: "var(--ink)" }}>{b.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--ink-muted)" }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section style={{ padding: "96px 0", background: "var(--surface-2)" }} id="how-it-works">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <HowItWorksSection />
        </div>
      </section>

      {/* ===================== INTEGRATIONS ===================== */}
      <section style={{ padding: "96px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ ...SECTION_HEAD, margin: "0 auto 40px" }}>
            <h2 style={{ marginBottom: 12 }}>Works with the tools you already use</h2>
            <p style={{ lineHeight: 1.7 }}>We automate on top of your existing stack — no rip-and-replace, no new software to learn.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28, overflow: "hidden" }}>
            {INTEGRATIONS_ROWS.map((row, rowIdx) => {
              const doubled = [...row, ...row];
              const dir = rowIdx % 2 === 1 ? "scroll-right" : "scroll-left";
              return (
                <div key={rowIdx} style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)" }}>
                  <div style={{ display: "flex", gap: 14, animation: `${dir} ${60 + rowIdx * 10}s linear infinite`, width: "max-content" }}>
                    {doubled.map((tool, i) => (
                      <div key={`${tool.name}-${i}`} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 22px", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, flexShrink: 0, minWidth: 160 }}>
                        <img
                          src={tool.src}
                          alt={tool.name}
                          width={22}
                          height={22}
                          style={{ flexShrink: 0, opacity: 0.85 }}
                        />
                        <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--ink-muted)", whiteSpace: "nowrap" }}>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p style={{ textAlign: "center", fontSize: "0.875rem", color: "var(--ink-muted)" }}>
            Don&apos;t see your tool? We support any platform with a REST API or webhook. <Link href="/#contact" style={{ color: "var(--cobalt-ink)" }}>Ask us about your stack →</Link>
          </p>
        </div>
      </section>

      {/* ===================== BLOG PREVIEW ===================== */}
      <section style={{ padding: "96px 0" }} id="blog">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ ...SECTION_HEAD, margin: "0 auto 40px" }}>
            <h2 style={{ marginBottom: 12 }}>AI & Automation Insights</h2>
            <p style={{ lineHeight: 1.7 }}>Practical guides on AI assistants, automation, and what it means for your business.</p>
          </div>
          <div style={{ display: "grid", gap: 20 }} className="blog-preview-grid">
            {BLOG_POSTS.map(post => (
              <Link key={post.href} href={post.href} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 24, textDecoration: "none", display: "flex", flexDirection: "column", gap: 12, transition: "border-color 0.2s" }} className="blog-card">
                <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--cobalt-ink)" }}>{post.tag}</span>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: 1.6, margin: 0 }}>{post.desc}</p>
                <span style={{ fontSize: "0.875rem", color: "var(--cobalt-ink)", fontWeight: 600, marginTop: "auto" }}>Read article →</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", border: "1.5px solid var(--border-strong)", borderRadius: 12, color: "var(--ink)", textDecoration: "none", fontWeight: 600, fontSize: "0.9375rem" }}>View all articles →</Link>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA / CONTACT ===================== */}
      <section style={{ padding: "96px 0", background: "var(--ink)", position: "relative", overflow: "hidden" }} id="contact">
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--horizon)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gap: 48 }} className="home-cta-grid">
            <div>
              <h2 style={{ marginBottom: 12, color: "#fff" }}>Ready to stop running on manual work?</h2>
              <p style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7, marginBottom: 16 }}>Tell us about your business and we&apos;ll follow up within 1 business day with a recommended plan and next steps.</p>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)" }}>No long-term contracts · Deploy in 5–7 days · Cancel anytime after month 3</p>
            </div>
            <div style={{ background: "var(--surface)", borderRadius: 20, padding: 28 }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section style={{ padding: "96px 0", background: "var(--surface-2)" }} id="faq">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ ...SECTION_HEAD, margin: "0 auto 40px" }}>
            <h2 style={{ marginBottom: 12 }}>People Also Ask About AI Assistants</h2>
            <p style={{ lineHeight: 1.7 }}>Common questions about AI assistant services, pricing, and how they compare to human VAs.</p>
          </div>
          <div style={{ maxWidth: 800, margin: "0 auto", borderTop: "1px solid var(--border)" }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ padding: "24px 0", borderBottom: "1px solid var(--border)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: "var(--ink)" }}>{item.q}</h3>
                <p style={{ fontSize: "0.9375rem", margin: 0, color: "var(--ink-muted)", lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (min-width: 640px) {
          .home-hero-ctas { flex-direction: row !important; }
          .blog-preview-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .home-benefits-grid { grid-template-columns: 1fr 1fr !important; }
          .home-tasks-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .home-hero-grid { grid-template-columns: 1.1fr 0.9fr !important; gap: 64px !important; }
          .home-problem-grid { grid-template-columns: 1fr 1fr !important; align-items: start; }
          .home-definition-grid { grid-template-columns: 1fr 1fr !important; align-items: start; }
          .home-cta-grid { grid-template-columns: 1fr 1fr !important; align-items: center; }
          .home-tasks-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .home-agent-row { grid-template-columns: 260px 1fr 200px !important; }
        }
        .home-tasks-grid { display: grid; grid-template-columns: 1fr; }
        .home-benefits-grid { grid-template-columns: 1fr; }
        @media (max-width: 480px) {
          .home-hero-section { padding-top: 88px !important; }
          .btn-hero { padding: 14px 20px !important; font-size: 0.9375rem !important; width: 100%; }
        }
      `}</style>
    </>
  );
}
