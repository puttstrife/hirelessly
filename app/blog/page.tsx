import Link from "next/link";
import { posts, formatDate } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AI Assistant Resources | Hirelessly",
  description: "Guides, comparisons, and research on AI assistant services, Filipino VA costs, and business automation.",
  alternates: { canonical: "https://hirelessly.com/blog" },
  twitter: {
    card: "summary_large_image",
    title: "Blog | AI Assistant Resources | Hirelessly",
    description: "Guides, comparisons, and research on AI assistant services, Filipino VA costs, and business automation.",
  },
};

const pillar = posts.find((p) => p.isPillar)!;
const rest = posts.filter((p) => !p.isPillar);

export default function BlogIndex() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 80, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "4px 12px", borderRadius: 100, marginBottom: 16 }}>
            Resources
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12, fontFamily: "Roboto Condensed, sans-serif" }}>
            AI Assistant Blog
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", maxWidth: 560 }}>
            Guides, comparisons, and insights on AI automation, virtual assistants, and the future of business operations.
          </p>
        </div>

        {/* Pillar post */}
        <div style={{ marginBottom: 32 }}>
          <Link
            href={`/blog/${pillar.slug}`}
            className="blog-card-featured"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 24,
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: 32,
              textDecoration: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
          >
            <div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#fff", background: "var(--brand-primary)", padding: "3px 10px", borderRadius: 100, marginBottom: 14 }}>
                ⭐ Pillar Guide
              </span>
              <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.015em", marginBottom: 12, fontFamily: "Roboto Condensed, sans-serif" }}>
                {pillar.title}
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7, marginBottom: 16 }}>
                {pillar.excerpt}
              </p>
              <div style={{ display: "flex", gap: 8, fontSize: "0.75rem", color: "var(--text-muted)" }}>
                <span>{formatDate(pillar.date)}</span>
                <span>·</span>
                <span>{pillar.readTime}</span>
              </div>
            </div>
            <div style={{ background: "rgba(239,111,46,0.08)", border: "1px solid rgba(239,111,46,0.2)", borderRadius: 16, padding: 24 }}>
              <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 14 }}>
                In This Guide
              </div>
              {[
                "Definition & how it works",
                "AI vs human comparison",
                "Business benefits",
                "Use cases & examples",
              ].map((item) => (
                <div key={item} style={{ fontSize: "0.875rem", color: "var(--brand-primary)", marginBottom: 10 }}>
                  → {item}
                </div>
              ))}
            </div>
          </Link>
        </div>

        {/* Post grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }} className="blog-grid">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-card"
              style={{
                display: "block",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: 24,
                textDecoration: "none",
                transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
              }}
            >
              <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "3px 10px", borderRadius: 100, marginBottom: 10 }}>
                {post.category}
              </span>
              <h2 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.01em", marginBottom: 8, lineHeight: 1.35, fontFamily: "Roboto Condensed, sans-serif" }}>
                {post.title}
              </h2>
              <p style={{ fontSize: "0.875rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.6, marginBottom: 12 }}>
                {post.excerpt}
              </p>
              <div style={{ display: "flex", gap: 8, fontSize: "0.75rem", color: "var(--text-muted)" }}>
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <style>{`
        .blog-card:hover {
          border-color: var(--brand-primary) !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.32) !important;
          transform: translateY(-2px) !important;
        }
        .blog-card-featured:hover {
          border-color: var(--brand-primary) !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.32) !important;
        }
        @media (min-width: 640px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .blog-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .blog-card-featured { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
