import type { Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import "../globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { OrgJsonLd } from "@/components/JsonLd";
import { site, locales, htmlLang, type Locale } from "@/lib/site";

// Two families only — one display + one body. Pinned to the exact weights the
// design uses and to the `latin` subset (covers Spanish accents ñ/á/¿/¡), so we
// ship small static cuts. `display: optional` locks the LCP hero heading to its
// first paint instead of a late font-swap re-paint.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400"],
  display: "optional",
});

const franklin = Libre_Franklin({
  variable: "--font-franklin",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "optional",
  preload: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const es = locale === "es";
  return {
    metadataBase: new URL(site.url),
    title: {
      default: es
        ? "Guanacaste Development Group — Desarrollo e inversión inmobiliaria"
        : "Guanacaste Development Group — Real estate development & investment",
      template: "%s — Guanacaste Development Group",
    },
    description: es
      ? "Firma de desarrollo e inversión inmobiliaria en Guanacaste, Costa Rica. Proyectos residenciales, comerciales, hoteleros y de uso mixto, del concepto a la entrega."
      : "Real estate development and investment firm in Guanacaste, Costa Rica. Residential, commercial, hospitality and mixed-use projects, from concept to delivery.",
    alternates: {
      canonical: `/${locale}/`,
      languages: { es: "/es/", en: "/en/", "x-default": "/es/" },
    },
    openGraph: {
      type: "website",
      locale: es ? "es_CR" : "en_US",
      siteName: site.name,
      title: "Guanacaste Development Group",
      description: es
        ? "Desarrollo e inversión inmobiliaria de nivel institucional en Guanacaste, Costa Rica."
        : "Institutional-grade real estate development and investment in Guanacaste, Costa Rica.",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = (await params) as { locale: Locale };
  return (
    <html
      lang={htmlLang[locale]}
      className={`${fraunces.variable} ${franklin.variable} h-full`}
    >
      <head>
        {/* Brand markers for the BMA to verify icon-set + font discipline */}
        <meta name="eko:icons" content="phosphor" />
        <meta name="eko:fonts" content="Fraunces, Libre Franklin" />
        <OrgJsonLd locale={locale} />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <WhatsAppFab locale={locale} />
      </body>
    </html>
  );
}
