import type { Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { OrgJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

// Two families only — one display + one body. Pinned to the exact weights
// the design uses (headings 400; body 400/500/600) and to the `latin` subset
// (covers Spanish accents ñ/á/¿/¡), so we ship small static cuts instead of the
// heavy multi-axis variable fonts + latin-ext that were dragging LCP.
// `display: optional` (paired with the preload next/font emits) locks the LCP
// hero heading to its first paint: if the woff2 isn't ready in the ~100ms block
// window the metric-matched fallback stays for the visit instead of a late
// font-swap re-painting the <h1> seconds later (that swap was the poor LCP).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400"],
  display: "optional",
});

// Body font is NOT preloaded: the LCP element is the hero <h1> (display font),
// so we let Fraunces own the font-preload bandwidth on the critical path and
// let Franklin arrive without competing against the render-blocking CSS. With
// `display: optional` + next/font's metric-matched fallback, body text paints
// immediately in the fallback (no swap, no CLS) and Franklin applies from cache.
const franklin = Libre_Franklin({
  variable: "--font-franklin",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "optional",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Guanacaste Development Group — Desarrollo e inversión inmobiliaria",
    template: "%s — Guanacaste Development Group",
  },
  description:
    "Firma de desarrollo e inversión inmobiliaria en Guanacaste, Costa Rica. Proyectos residenciales, comerciales, hoteleros y de uso mixto, del concepto a la entrega.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: site.name,
    title: "Guanacaste Development Group",
    description:
      "Desarrollo e inversión inmobiliaria de nivel institucional en Guanacaste, Costa Rica.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CR"
      className={`${fraunces.variable} ${franklin.variable} h-full`}
    >
      <head>
        {/* Brand markers for the BMA to verify icon-set + font discipline */}
        <meta name="eko:icons" content="phosphor" />
        <meta name="eko:fonts" content="Fraunces, Libre Franklin" />
        <OrgJsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
