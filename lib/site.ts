// Guanacaste Development Group — single source of site content.
// Register: ustedeo (usted) site-wide. Only verified fact is the WhatsApp
// number; nothing else (founding year, prices, projects, credentials) is
// fabricated. Portfolio/property entries are clearly-marked representative
// placeholders, never presented as closed transactions.

export const site = {
  name: "Guanacaste Development Group",
  shortName: "GDG",
  niche: "Real Estate Development & Investment",
  region: "Guanacaste, Costa Rica",
  // Only verified contact detail (task input). Displayed exactly as supplied.
  phoneDisplay: "+506 7161550",
  phoneE164: "+5067161550",
  waDigits: "5067161550",
  locale: "es-CR",
  url: "https://guanacastedevelopmentgroup.com",
  tagline: "Desarrollo e inversión inmobiliaria en Guanacaste",
};

// wa.me click-to-chat with prefilled, ustedeo-register message.
export function waHref(
  message = "Buenos días, vengo de la página web — quisiera coordinar una consulta sobre oportunidades en Guanacaste.",
): string {
  return `https://wa.me/${site.waDigits}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/about/", label: "Firma" },
  { href: "/services/", label: "Servicios" },
  { href: "/projects/", label: "Proyectos" },
  { href: "/properties/", label: "Propiedades" },
  { href: "/invest/", label: "Invertir" },
  { href: "/contact/", label: "Contacto" },
];

export type Service = {
  index: string;
  title: string;
  icon: string;
  body: string;
};

// The twelve supplied capabilities — translated faithfully to es-CR (ustedeo),
// no capability dropped, nothing invented.
export const services: Service[] = [
  {
    index: "01",
    icon: "Buildings",
    title: "Desarrollo inmobiliario",
    body: "Desarrollamos proyectos residenciales, comerciales, hoteleros y de uso mixto, desde el concepto hasta la entrega, creando comunidades sostenibles y valor de inversión a largo plazo.",
  },
  {
    index: "02",
    icon: "MapTrifold",
    title: "Adquisición y habilitación de terrenos",
    body: "Identificamos, evaluamos y adquirimos terrenos estratégicos con alto potencial de desarrollo, gestionando zonificación, planificación, infraestructura y factibilidad de proyecto.",
  },
  {
    index: "03",
    icon: "HouseLine",
    title: "Venta de propiedades",
    body: "Representamos propiedades residenciales, comerciales, frente al mar y de inversión en toda Guanacaste, conectando a compradores con oportunidades excepcionales.",
  },
  {
    index: "04",
    icon: "Coins",
    title: "Oportunidades de inversión",
    body: "Estructuramos y presentamos oportunidades de inversión inmobiliaria para inversionistas privados, family offices y socios de desarrollo que buscan exposición al mercado costarricense.",
  },
  {
    index: "05",
    icon: "Path",
    title: "Gerencia de proyectos",
    body: "Supervisamos cada fase del desarrollo, coordinando consultores, arquitectos, ingenieros, contratistas y aprobaciones regulatorias para entregar proyectos con eficiencia.",
  },
  {
    index: "06",
    icon: "ShieldCheck",
    title: "Factibilidad y debida diligencia",
    body: "Realizamos análisis de mercado, modelación financiera, revisión de zonificación, evaluaciones ambientales y análisis de riesgo para respaldar decisiones de inversión informadas.",
  },
  {
    index: "07",
    icon: "Blueprint",
    title: "Planificación maestra",
    body: "Diseñamos comunidades que equilibran funcionalidad, sostenibilidad y valor a largo plazo, maximizando el potencial de cada propiedad.",
  },
  {
    index: "08",
    icon: "Storefront",
    title: "Desarrollo comercial",
    body: "Desde centros comerciales y espacios de oficina hasta proyectos hoteleros y de uso mixto, creamos desarrollos que sirven tanto a las empresas como a las comunidades.",
  },
  {
    index: "09",
    icon: "Sparkle",
    title: "Desarrollo residencial de lujo",
    body: "Desarrollamos residencias, condominios y comunidades cerradas de alta calidad, diseñadas tanto para compradores de estilo de vida como para inversionistas.",
  },
  {
    index: "10",
    icon: "PresentationChart",
    title: "Mercadeo y estrategia de ventas",
    body: "Creamos campañas de mercadeo a la medida, estrategias digitales y programas de ventas internacionales para maximizar la exposición y acelerar la venta de propiedades.",
  },
  {
    index: "11",
    icon: "Handshake",
    title: "Alianzas estratégicas",
    body: "Colaboramos con propietarios, inversionistas, arquitectos, desarrolladores y actores locales para dar vida a proyectos ambiciosos.",
  },
  {
    index: "12",
    icon: "Compass",
    title: "Asesoría al inversionista",
    body: "Guiamos a inversionistas nacionales e internacionales por el mercado inmobiliario de Costa Rica, ayudándoles a identificar oportunidades, gestionar el riesgo y construir portafolios de largo plazo.",
  },
];

// Development typologies we work in — categories, not fabricated projects.
export type ProjectType = {
  kind: string;
  title: string;
  scope: string;
  icon: string;
};

export const projectTypes: ProjectType[] = [
  {
    kind: "Residencial",
    title: "Comunidades residenciales y condominios",
    scope: "Comunidades cerradas, condominios y residencias de lujo concebidas para el estilo de vida y la inversión.",
    icon: "HouseLine",
  },
  {
    kind: "Hospitalidad",
    title: "Desarrollos hoteleros y de uso mixto",
    scope: "Proyectos que integran hospitalidad, comercio y residencia en un mismo plan maestro.",
    icon: "Buildings",
  },
  {
    kind: "Comercial",
    title: "Centros comerciales y de oficinas",
    scope: "Espacios comerciales y de oficina diseñados para servir tanto a empresas como a comunidades.",
    icon: "Storefront",
  },
  {
    kind: "Terreno",
    title: "Habilitación de terrenos y plan maestro",
    scope: "Adquisición estratégica de tierra, zonificación, infraestructura y planificación maestra de comunidades.",
    icon: "MapTrifold",
  },
];

// Categories of premium property we represent — filter facets, not listings.
export const propertyCategories = [
  { key: "beachfront", label: "Frente al mar", icon: "Waves" },
  { key: "residential", label: "Residencial", icon: "HouseLine" },
  { key: "commercial", label: "Comercial", icon: "Storefront" },
  { key: "land", label: "Terreno", icon: "MapTrifold" },
];

// Representative property archetypes — the KINDS of premium property we
// represent in Guanacaste. These are illustrative categories, NOT specific
// listings: no fabricated prices, addresses, or availability. Real inventory
// is shared directly, under confidentiality, per each buyer's profile.
export type PropertyArchetype = {
  category: string; // matches a propertyCategories key
  categoryLabel: string;
  title: string;
  area: string; // general market area, not a fabricated street address
  detail: string;
  icon: string;
};

export const propertyArchetypes: PropertyArchetype[] = [
  {
    category: "beachfront",
    categoryLabel: "Frente al mar",
    title: "Residencias y lotes frente al mar",
    area: "Costa del Pacífico, Guanacaste",
    detail: "Propiedades de primera línea y lotes con vista al océano en las zonas costeras más reconocidas de la provincia.",
    icon: "Waves",
  },
  {
    category: "residential",
    categoryLabel: "Residencial",
    title: "Casas y condominios en comunidades cerradas",
    area: "Guanacaste",
    detail: "Residencias de lujo y condominios en comunidades planificadas, pensados para el estilo de vida y la inversión.",
    icon: "HouseLine",
  },
  {
    category: "land",
    categoryLabel: "Terreno",
    title: "Terrenos con potencial de desarrollo",
    area: "Guanacaste",
    detail: "Fincas y lotes estratégicos con potencial residencial, hotelero o de uso mixto, evaluados por nuestro equipo.",
    icon: "MapTrifold",
  },
  {
    category: "commercial",
    categoryLabel: "Comercial",
    title: "Espacios comerciales y de uso mixto",
    area: "Guanacaste",
    detail: "Locales, oficinas y componentes comerciales dentro de desarrollos de uso mixto en la región.",
    icon: "Storefront",
  },
  {
    category: "residential",
    categoryLabel: "Residencial",
    title: "Villas y residencias de lujo",
    area: "Guanacaste",
    detail: "Residencias de alta gama con arquitectura contemporánea, orientadas al comprador internacional exigente.",
    icon: "Sparkle",
  },
  {
    category: "beachfront",
    categoryLabel: "Frente al mar",
    title: "Oportunidades hoteleras y de hospitalidad",
    area: "Costa del Pacífico, Guanacaste",
    detail: "Activos y terrenos con vocación hotelera para inversionistas y socios de desarrollo del sector turístico.",
    icon: "Buildings",
  },
];
