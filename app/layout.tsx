import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LeadCaptureProvider } from "@/components/LeadCapture";
import { DemoBookingProvider } from "@/components/DemoBooking";

export const metadata: Metadata = {
  metadataBase: new URL("https://hirelessly.com"),
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    site: "@hirelessly",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Roboto+Condensed:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/*
          THESIS: Hirelessly presents managed AI operations as a composed system of clarity, not a commodity automation catalogue.
          OWN-WORLD: Mineral-white fields, ink-blue typography, cobalt-to-rose horizon light, fine architectural rules, and precise instrument-like status marks.
          STORY: An operator sees what Hirelessly puts into motion, trusts the delivery process, and can start a conversation or reserve a demo.
          FIRST VIEWPORT: A spacious light-stage composition places the offer and two actions left of an operational proof panel; a luminous horizon carries the page's only saturated atmosphere.
          FORM: Persuade / stagecraft cyclorama dawn, seed abd9a28b.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        <LeadCaptureProvider>
          <DemoBookingProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </DemoBookingProvider>
        </LeadCaptureProvider>
      </body>
    </html>
  );
}
