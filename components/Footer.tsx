import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface-2)", borderTop: "1px solid var(--border)", padding: "48px 0 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32, marginBottom: 40 }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--brand-primary)", letterSpacing: "-0.02em", fontFamily: "Roboto Condensed, sans-serif", textDecoration: "none" }}>
              Hire<span style={{ color: "var(--text-primary)" }}>lessly</span>
            </Link>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, marginTop: 12, maxWidth: 280 }}>
              AI systems that run your business operations 24/7 — without manual bottlenecks.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
                Services
              </div>
              {[
                { label: "AI Assistant", href: "/ai-virtual-assistant" },
                { label: "AI for Business Ops", href: "/ai-virtual-assistant-philippines" },
                { label: "Pricing", href: "/#pricing" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-link"
                  style={{ display: "block", fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
                Company
              </div>
              {[
                { label: "Blog", href: "/blog" },
                { label: "Service Agreement", href: "/service-agreement" },
                { label: "Get Started", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer-link"
                  style={{ display: "block", fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: 0 }}>
            © {new Date().getFullYear()} Hirelessly. All rights reserved.
          </p>
          <Link href="/service-agreement" className="footer-link" style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textDecoration: "none" }}>
            Service Agreement
          </Link>
        </div>

      </div>
    </footer>
  );
}
