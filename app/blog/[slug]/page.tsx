import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getAllSlugs, posts, formatDate } from "@/lib/blog";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    alternates: { canonical: `https://hirelessly.com/blog/${slug}` },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://hirelessly.com/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const otherRelated = posts
    .filter((p) => p.slug !== slug && !related.find((r) => r.slug === p.slug))
    .slice(0, 3 - related.length);

  const relatedPosts = [...related, ...otherRelated].slice(0, 3);

  return (
    <>
      {/* Schema.org Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.seoDescription ?? post.excerpt,
            author: { "@type": "Organization", name: "Hirelessly Editorial Team" },
            publisher: { "@type": "Organization", name: "Hirelessly", url: "https://hirelessly.com" },
            mainEntityOfPage: `https://hirelessly.com/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: post.date,
          }),
        }}
      />

      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://hirelessly.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://hirelessly.com/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://hirelessly.com/blog/${post.slug}` },
            ],
          }),
        }}
      />

      <article style={{ paddingTop: 100, paddingBottom: 80 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>

          {/* Breadcrumb */}
          <nav style={{ display: "flex", gap: 6, alignItems: "center", fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: 32 }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Blog</Link>
            <span>/</span>
            <span style={{ color: "var(--text-primary)" }}>{post.category}</span>
          </nav>

          {/* Category + Meta */}
          <div style={{ marginBottom: 20 }}>
            <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: post.isPillar ? "#fff" : "var(--brand-primary)", background: post.isPillar ? "var(--brand-primary)" : "rgba(239,111,46,0.12)", padding: "3px 10px", borderRadius: 100, marginBottom: 16 }}>
              {post.isPillar ? "⭐ Pillar Guide" : post.category}
            </span>
            <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 16, fontFamily: "Roboto Condensed, sans-serif" }}>
              {post.title}
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.7, marginBottom: 20 }}>
              {post.excerpt}
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center", fontSize: "0.8125rem", color: "var(--text-muted)", paddingBottom: 24, borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontWeight: 600, color: "var(--text-muted)" }}>Hirelessly Editorial Team</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Content placeholder — replace with Sanity Portable Text */}
          <div style={{ marginTop: 40, padding: 28, background: "var(--surface-2)", border: "1px dashed var(--border)", borderRadius: 16, marginBottom: 48 }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brand-primary)", marginBottom: 12 }}>
              Content — Migrate from /hirelessly/blog/{post.slug}.html
            </div>
            <p style={{ fontSize: "0.9375rem", color: "rgba(242,242,240,0.5)", lineHeight: 1.7, margin: 0 }}>
              This article&apos;s full content lives at{" "}
              <code style={{ fontFamily: "DM Mono, monospace", fontSize: "0.875rem", color: "var(--accent)", background: "rgba(0,255,135,0.08)", padding: "2px 6px", borderRadius: 4 }}>
                /hirelessly/blog/{post.slug}.html
              </code>
              . When Sanity is connected, replace this block with the Portable Text renderer.
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, rgba(239,111,46,0.12), rgba(0,255,135,0.06))", border: "1px solid var(--brand-primary)", borderRadius: 20, padding: 28, textAlign: "center", marginBottom: 48 }}>
            <h3 style={{ fontSize: "1.375rem", fontWeight: 800, letterSpacing: "-0.015em", marginBottom: 10, fontFamily: "Roboto Condensed, sans-serif" }}>
              Ready to automate your business operations?
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "rgba(242,242,240,0.65)", marginBottom: 20, lineHeight: 1.6 }}>
              Hirelessly deploys AI assistants in 5–7 days. No long-term contracts.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#contact" style={{ padding: "12px 24px", fontWeight: 600, borderRadius: 12, background: "var(--brand-primary)", color: "#fff", textDecoration: "none", fontSize: "0.9375rem" }}>
                Get Your AI Assistant
              </Link>
              <Link href="/#pricing" style={{ padding: "12px 24px", fontWeight: 600, borderRadius: 12, border: "1.5px solid rgba(242,242,240,0.15)", color: "var(--text-primary)", textDecoration: "none", fontSize: "0.9375rem" }}>
                See Pricing
              </Link>
            </div>
          </div>

          {/* Back to blog */}
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none", marginBottom: 48 }}>
            ← Back to Blog
          </Link>

        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 48 }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 24, fontFamily: "Roboto Condensed, sans-serif" }}>Related Articles</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }} className="related-grid">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="blog-card"
                    style={{ display: "block", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 20, textDecoration: "none", transition: "border-color 0.2s, box-shadow 0.2s" }}
                  >
                    <span style={{ display: "inline-block", fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brand-primary)", background: "rgba(239,111,46,0.12)", padding: "3px 10px", borderRadius: 100, marginBottom: 8 }}>
                      {p.category}
                    </span>
                    <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 6, lineHeight: 1.35, fontFamily: "Roboto Condensed, sans-serif" }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: "0.8125rem", color: "rgba(242,242,240,0.65)", lineHeight: 1.6, margin: 0 }}>
                      {p.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      <style>{`
        .blog-card:hover {
          border-color: var(--brand-primary) !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.32) !important;
        }
        @media (min-width: 640px) {
          .related-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
