"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DemoBookingButton } from "@/components/DemoBooking";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 80);
      setLastY(y);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const navLinks = [
    { label: "AI Assistant", href: "/ai-virtual-assistant" },
    { label: "Solutions", href: "/#solutions" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(247,245,239,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 12px 32px -20px rgba(18,23,44,0.35)" : "none",
          transform: !loaded ? "translateY(-100%)" : hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1), background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

            {/* Logo */}
            <Link href="/" style={{ fontSize: "1.1875rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em", fontFamily: "Barlow Condensed, sans-serif", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--horizon)", display: "inline-block" }} />
              Hirelessly
            </Link>

            {/* Desktop Nav */}
            <nav style={{ display: "none", gap: 28, alignItems: "center" }} className="desktop-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ fontSize: "0.9rem", color: "var(--ink-muted)", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-muted)")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* Pricing pill */}
              <Link
                href="/pricing"
                className="desktop-cta pricing-pill"
                style={{ display: "none", alignItems: "center", gap: 6, padding: "7px 14px", fontSize: "0.8125rem", fontWeight: 700, borderRadius: 100, background: "var(--surface-2)", border: "1.5px solid var(--border-strong)", color: "var(--cobalt-ink)", textDecoration: "none", position: "relative" }}
              >
                Pricing
                <span style={{ background: "var(--signal)", color: "#fff", fontSize: "0.6rem", fontWeight: 800, padding: "2px 6px", borderRadius: 100, letterSpacing: "0.04em", textTransform: "uppercase" }}>Save 10%</span>
              </Link>
              <Link
                href="/#contact"
                className="desktop-cta"
                style={{ padding: "9px 16px", fontSize: "0.8125rem", fontWeight: 600, borderRadius: 8, background: "var(--ink)", color: "#fff", textDecoration: "none", display: "none" }}
              >
                Get AI Assistant
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="hamburger-btn"
                style={{ display: "flex", flexDirection: "column", gap: 5, padding: 6, cursor: "pointer", background: "none", border: "none" }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      display: "block",
                      width: 22,
                      height: 2,
                      background: "var(--ink)",
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      transform: menuOpen
                        ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                        : i === 1 ? "opacity: 0"
                        : "rotate(-45deg) translate(5px, -5px)"
                        : "none",
                      opacity: menuOpen && i === 1 ? 0 : 1,
                    }}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "var(--paper)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
          display: "flex",
          flexDirection: "column",
          padding: "72px 20px 32px",
          gap: 8,
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--ink)", textDecoration: "none", padding: "14px 0", borderBottom: "1px solid var(--border)", fontFamily: "Barlow Condensed, sans-serif" }}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} style={{ padding: "16px", textAlign: "center", fontWeight: 600, borderRadius: 12, background: "var(--ink)", color: "#fff", textDecoration: "none", fontSize: "1rem" }}>
            Get an AI Assistant
          </Link>
          <DemoBookingButton source="navbar:mobile-book-demo" onClick={() => setMenuOpen(false)} style={{ padding: "16px", textAlign: "center", fontWeight: 600, borderRadius: 12, border: "1.5px solid var(--border-strong)", color: "var(--ink)", textDecoration: "none", fontSize: "1rem" }}>
            Book a Demo
          </DemoBookingButton>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 480px) {
          .mobile-menu-cta { padding: 14px !important; font-size: 0.9375rem !important; }
        }
      `}</style>
    </>
  );
}
