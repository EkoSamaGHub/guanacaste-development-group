import { site, type Locale } from "@/lib/site";

// Structured data. Only real facts are emitted; unknown fields (street
// address, geo, hours, ratings, priceRange) are OMITTED, never invented.
// addressCountry = CR. inLanguage follows the page locale.

function organization(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/${locale}/`,
    description:
      locale === "es"
        ? "Firma de desarrollo e inversión inmobiliaria en Guanacaste, Costa Rica."
        : "Real estate development and investment firm in Guanacaste, Costa Rica.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Guanacaste, Costa Rica",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Guanacaste",
      addressCountry: "CR",
    },
    telephone: site.phoneE164,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      contactType: "sales",
      availableLanguage: ["Spanish", "English"],
    },
  };
}

function website(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/${locale}/`,
    name: site.name,
    inLanguage: locale === "es" ? "es-CR" : "en",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

function block(data: unknown, id: string) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrgJsonLd({ locale }: { locale: Locale }) {
  return (
    <>
      {block(organization(locale), "ld-org")}
      {block(website(locale), "ld-website")}
    </>
  );
}

// Breadcrumb items carry an already-localized name and a locale-relative path
// ("/", "/about/", …); the locale prefix is added here so the emitted item URL
// matches the real page URL.
export function BreadcrumbJsonLd({
  locale,
  items,
}: {
  locale: Locale;
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}/${locale}${it.path}`,
    })),
  };
  return block(data, "ld-breadcrumb");
}
