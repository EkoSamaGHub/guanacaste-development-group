import { site } from "@/lib/site";

// Structured data. Only real facts are emitted; unknown fields (street
// address, geo, hours, ratings, priceRange) are OMITTED, never invented.
// addressCountry = CR, inLanguage = es-CR per the CR catalogue rules.

const organization = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  description:
    "Firma de desarrollo e inversión inmobiliaria en Guanacaste, Costa Rica.",
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

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "es-CR",
  publisher: { "@id": `${site.url}/#organization` },
};

function block(data: unknown, id: string) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrgJsonLd() {
  return (
    <>
      {block(organization, "ld-org")}
      {block(website, "ld-website")}
    </>
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
  return block(data, "ld-breadcrumb");
}
