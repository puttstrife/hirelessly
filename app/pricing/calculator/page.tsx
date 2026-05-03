import type { Metadata } from "next";
import PricingCalculator from "@/components/PricingCalculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build Your AI Assistant Plan | Custom Pricing | Hirelessly",
  description: "Pick exactly which AI agents, integrations, and support level you need. See your managed AI assistant cost instantly — no sales call required.",
  alternates: { canonical: "https://hirelessly.com/pricing/calculator" },
};

export default function CalculatorPage() {
  return (
    <section style={{ background: "var(--surface)", minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 20px 0", textAlign: "center" }}>
        <Link href="/pricing" style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
          ← Back to Pricing
        </Link>
        <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.1)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
          Build Your Plan
        </span>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, fontFamily: "Roboto Condensed, sans-serif", marginBottom: 16 }}>
          Custom AI Assistant Pricing
        </h1>
        <p style={{ fontSize: "1rem", color: "rgba(242,242,240,0.6)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
          Pick exactly the agents, integrations, and support level you need — see your price update in real time.
        </p>
      </div>

      <PricingCalculator />
    </section>
  );
}
