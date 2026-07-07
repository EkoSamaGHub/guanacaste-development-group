// Guanacaste Development Group — single source of site content.
// Bilingual (es-CR + en). Register: ustedeo (usted) across all Spanish copy.
// Only verified fact is the WhatsApp number; nothing else (founding year,
// credentials, stats) is fabricated. Property listings live in lib/listings.ts
// and are the client's real inventory.

export type Locale = "es" | "en";
export type Localized<T = string> = { es: T; en: T };

export const locales: Locale[] = ["es", "en"];

export const site = {
  name: "Guanacaste Development Group",
  shortName: "GDG",
  niche: "Real Estate Development & Investment",
  region: "Guanacaste, Costa Rica",
  // Only verified contact detail (task input). Displayed exactly as supplied.
  phoneDisplay: "+506 7161550",
  phoneE164: "+5067161550",
  waDigits: "5067161550",
  url: "https://guanacastedevelopmentgroup.com",
  tagline: {
    es: "Desarrollo e inversión inmobiliaria en Guanacaste",
    en: "Real estate development and investment in Guanacaste",
  } satisfies Localized,
};

export const htmlLang: Record<Locale, string> = {
  es: "es-CR",
  en: "en",
};

// wa.me click-to-chat with a prefilled message, localized per locale.
// The Spanish default keeps the original ustedeo-register message verbatim.
const waDefaultMessage: Localized = {
  es: "Buenos días, vengo de la página web — quisiera coordinar una consulta sobre oportunidades en Guanacaste.",
  en: "Good morning — I found you through your website and would like to arrange a consultation about opportunities in Guanacaste.",
};

export function waHref(locale: Locale = "es", message?: string): string {
  return `https://wa.me/${site.waDigits}?text=${encodeURIComponent(
    message ?? waDefaultMessage[locale],
  )}`;
}

// Nav hrefs are locale-relative paths; build the final URL with localeHref().
export const nav: { href: string; label: Localized }[] = [
  { href: "/", label: { es: "Inicio", en: "Home" } },
  { href: "/about/", label: { es: "Firma", en: "Firm" } },
  { href: "/services/", label: { es: "Servicios", en: "Services" } },
  { href: "/projects/", label: { es: "Proyectos", en: "Projects" } },
  { href: "/properties/", label: { es: "Propiedades", en: "Properties" } },
  { href: "/invest/", label: { es: "Invertir", en: "Invest" } },
  { href: "/contact/", label: { es: "Contacto", en: "Contact" } },
];

export function localeHref(locale: Locale, href: string): string {
  return `/${locale}${href}`;
}

// hreflang alternates for a locale-relative path ("/" for home, "/about/", …).
export function pageAlternates(locale: Locale, path: string) {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      es: `/es${path}`,
      en: `/en${path}`,
      "x-default": `/es${path}`,
    },
  };
}

export type Service = {
  index: string;
  icon: string;
  title: Localized;
  body: Localized;
};

// The twelve supplied capabilities — Spanish translated faithfully to es-CR
// (ustedeo), English in institutional register. No capability dropped,
// nothing invented.
export const services: Service[] = [
  {
    index: "01",
    icon: "Buildings",
    title: { es: "Desarrollo inmobiliario", en: "Real estate development" },
    body: {
      es: "Desarrollamos proyectos residenciales, comerciales, hoteleros y de uso mixto, desde el concepto hasta la entrega, creando comunidades sostenibles y valor de inversión a largo plazo.",
      en: "We develop residential, commercial, hospitality and mixed-use projects from concept through delivery, creating sustainable communities and long-term investment value.",
    },
  },
  {
    index: "02",
    icon: "MapTrifold",
    title: {
      es: "Adquisición y habilitación de terrenos",
      en: "Land acquisition and entitlement",
    },
    body: {
      es: "Identificamos, evaluamos y adquirimos terrenos estratégicos con alto potencial de desarrollo, gestionando zonificación, planificación, infraestructura y factibilidad de proyecto.",
      en: "We identify, evaluate and acquire strategic land with strong development potential, managing zoning, planning, infrastructure and project feasibility.",
    },
  },
  {
    index: "03",
    icon: "HouseLine",
    title: { es: "Venta de propiedades", en: "Property sales" },
    body: {
      es: "Representamos propiedades residenciales, comerciales, frente al mar y de inversión en toda Guanacaste, conectando a compradores con oportunidades excepcionales.",
      en: "We represent residential, commercial, beachfront and investment properties across Guanacaste, connecting buyers with exceptional opportunities.",
    },
  },
  {
    index: "04",
    icon: "Coins",
    title: { es: "Oportunidades de inversión", en: "Investment opportunities" },
    body: {
      es: "Estructuramos y presentamos oportunidades de inversión inmobiliaria para inversionistas privados, family offices y socios de desarrollo que buscan exposición al mercado costarricense.",
      en: "We structure and present real estate investment opportunities for private investors, family offices and development partners seeking exposure to the Costa Rican market.",
    },
  },
  {
    index: "05",
    icon: "Path",
    title: { es: "Gerencia de proyectos", en: "Project management" },
    body: {
      es: "Supervisamos cada fase del desarrollo, coordinando consultores, arquitectos, ingenieros, contratistas y aprobaciones regulatorias para entregar proyectos con eficiencia.",
      en: "We oversee every phase of development, coordinating consultants, architects, engineers, contractors and regulatory approvals to deliver projects efficiently.",
    },
  },
  {
    index: "06",
    icon: "ShieldCheck",
    title: {
      es: "Factibilidad y debida diligencia",
      en: "Feasibility and due diligence",
    },
    body: {
      es: "Realizamos análisis de mercado, modelación financiera, revisión de zonificación, evaluaciones ambientales y análisis de riesgo para respaldar decisiones de inversión informadas.",
      en: "We conduct market analysis, financial modeling, zoning review, environmental assessments and risk analysis to support informed investment decisions.",
    },
  },
  {
    index: "07",
    icon: "Blueprint",
    title: { es: "Planificación maestra", en: "Master planning" },
    body: {
      es: "Diseñamos comunidades que equilibran funcionalidad, sostenibilidad y valor a largo plazo, maximizando el potencial de cada propiedad.",
      en: "We design communities that balance functionality, sustainability and long-term value, maximizing the potential of every property.",
    },
  },
  {
    index: "08",
    icon: "Storefront",
    title: { es: "Desarrollo comercial", en: "Commercial development" },
    body: {
      es: "Desde centros comerciales y espacios de oficina hasta proyectos hoteleros y de uso mixto, creamos desarrollos que sirven tanto a las empresas como a las comunidades.",
      en: "From retail centers and office space to hospitality and mixed-use projects, we create developments that serve businesses and communities alike.",
    },
  },
  {
    index: "09",
    icon: "Sparkle",
    title: {
      es: "Desarrollo residencial de lujo",
      en: "Luxury residential development",
    },
    body: {
      es: "Desarrollamos residencias, condominios y comunidades cerradas de alta calidad, diseñadas tanto para compradores de estilo de vida como para inversionistas.",
      en: "We develop high-quality residences, condominiums and gated communities, designed for lifestyle buyers and investors alike.",
    },
  },
  {
    index: "10",
    icon: "PresentationChart",
    title: {
      es: "Mercadeo y estrategia de ventas",
      en: "Marketing and sales strategy",
    },
    body: {
      es: "Creamos campañas de mercadeo a la medida, estrategias digitales y programas de ventas internacionales para maximizar la exposición y acelerar la venta de propiedades.",
      en: "We craft tailored marketing campaigns, digital strategies and international sales programs to maximize exposure and accelerate property sales.",
    },
  },
  {
    index: "11",
    icon: "Handshake",
    title: { es: "Alianzas estratégicas", en: "Strategic partnerships" },
    body: {
      es: "Colaboramos con propietarios, inversionistas, arquitectos, desarrolladores y actores locales para dar vida a proyectos ambiciosos.",
      en: "We collaborate with landowners, investors, architects, developers and local stakeholders to bring ambitious projects to life.",
    },
  },
  {
    index: "12",
    icon: "Compass",
    title: { es: "Asesoría al inversionista", en: "Investor advisory" },
    body: {
      es: "Guiamos a inversionistas nacionales e internacionales por el mercado inmobiliario de Costa Rica, ayudándoles a identificar oportunidades, gestionar el riesgo y construir portafolios de largo plazo.",
      en: "We guide domestic and international investors through Costa Rica's real estate market, helping them identify opportunities, manage risk and build long-term portfolios.",
    },
  },
];

// Development typologies we work in — categories, not fabricated projects.
export type ProjectType = {
  kind: Localized;
  title: Localized;
  scope: Localized;
  icon: string;
};

export const projectTypes: ProjectType[] = [
  {
    kind: { es: "Residencial", en: "Residential" },
    title: {
      es: "Comunidades residenciales y condominios",
      en: "Residential communities and condominiums",
    },
    scope: {
      es: "Comunidades cerradas, condominios y residencias de lujo concebidas para el estilo de vida y la inversión.",
      en: "Gated communities, condominiums and luxury residences conceived for lifestyle and investment.",
    },
    icon: "HouseLine",
  },
  {
    kind: { es: "Hospitalidad", en: "Hospitality" },
    title: {
      es: "Desarrollos hoteleros y de uso mixto",
      en: "Hospitality and mixed-use developments",
    },
    scope: {
      es: "Proyectos que integran hospitalidad, comercio y residencia en un mismo plan maestro.",
      en: "Projects that integrate hospitality, retail and residential uses within a single master plan.",
    },
    icon: "Buildings",
  },
  {
    kind: { es: "Comercial", en: "Commercial" },
    title: {
      es: "Centros comerciales y de oficinas",
      en: "Retail and office centers",
    },
    scope: {
      es: "Espacios comerciales y de oficina diseñados para servir tanto a empresas como a comunidades.",
      en: "Commercial and office spaces designed to serve businesses and communities alike.",
    },
    icon: "Storefront",
  },
  {
    kind: { es: "Terreno", en: "Land" },
    title: {
      es: "Habilitación de terrenos y plan maestro",
      en: "Land entitlement and master planning",
    },
    scope: {
      es: "Adquisición estratégica de tierra, zonificación, infraestructura y planificación maestra de comunidades.",
      en: "Strategic land acquisition, zoning, infrastructure and master-planned community design.",
    },
    icon: "MapTrifold",
  },
];

// Categories of property we represent — filter facets for the real listings.
export type PropertyCategoryKey =
  | "beachfront"
  | "residential"
  | "commercial"
  | "land";

export const propertyCategories: {
  key: PropertyCategoryKey;
  label: Localized;
  icon: string;
}[] = [
  { key: "beachfront", label: { es: "Frente al mar", en: "Beachfront" }, icon: "Waves" },
  { key: "residential", label: { es: "Residencial", en: "Residential" }, icon: "HouseLine" },
  { key: "commercial", label: { es: "Comercial", en: "Commercial" }, icon: "Storefront" },
  { key: "land", label: { es: "Terreno", en: "Land" }, icon: "MapTrifold" },
];
