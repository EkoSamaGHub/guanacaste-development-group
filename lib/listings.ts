// The client's REAL inventory — 7 listings sourced from the WordPress export
// (listings.json) with photos already optimized under /public/properties/.
// Every fact below (prices, areas, locations, amenities) comes from that
// export; nothing is invented. English descriptions condense the original
// listing content; Spanish descriptions are faithful translations (ustedeo-
// neutral descriptive prose). The Uvita price (9,999,999.99) was a placeholder
// in the source → shown as "price on request".

import type { Locale, Localized, PropertyCategoryKey } from "@/lib/site";

export type Listing = {
  slug: string;
  title: Localized;
  description: Localized;
  /** USD asking price; null when on request. */
  price: number | null;
  priceOnRequest?: true;
  currency: "USD";
  beds: number | null;
  baths: number | null;
  size: number | null;
  sizeUnit: "m2" | "acres" | null;
  lot: number | null;
  lotUnit: "m2" | null;
  location: Localized;
  category: PropertyCategoryKey;
  status: Localized;
  /** Paths under /public, in manifest order. photos[0] is the cover. */
  photos: string[];
  /** Intrinsic pixel size of photos[0], for explicit <img> dimensions. */
  coverWidth: number;
  coverHeight: number;
};

const status: Localized = { es: "En venta", en: "For sale" };

export const listings: Listing[] = [
  {
    slug: "hotel-for-sale-san-jose-barrio-amon-investment-opportunity",
    title: {
      es: "Hotel boutique y restaurante en San José",
      en: "Boutique hotel and restaurant in San José",
    },
    description: {
      es: "Mansión histórica de 1929 que hoy opera como hotel boutique en el corazón de Barrio Amón, distrito declarado oficialmente de interés público por su desarrollo turístico, cultural, ecológico y natural (Decreto Legislativo N.º 10480). Ofrece 29 habitaciones de diseño singular, restaurante y bar tropical, sala de conferencias, licencia de casino incluida, parqueo con seguridad y vigilancia 24 horas. Una combinación de elegancia atemporal, ubicación privilegiada y notable potencial comercial.",
      en: "A historic 1929 mansion now operating as a boutique hotel in the heart of Barrio Amón, a district officially declared of public interest for its tourism, cultural, ecological and natural development (Legislative Decree No. 10480). It offers 29 individually designed guest rooms, a tropical restaurant and bar, a conference room, a casino license included in the sale, secured parking and 24-hour security. A blend of timeless elegance, prime location and remarkable commercial potential.",
    },
    price: 2700000,
    currency: "USD",
    beds: 29,
    baths: null,
    size: 2800,
    sizeUnit: "m2",
    lot: 1637,
    lotUnit: "m2",
    location: {
      es: "Barrio Amón, San José",
      en: "Barrio Amón, San José",
    },
    category: "commercial",
    status,
    photos: [
      "/properties/hotel-for-sale-san-jose-barrio-amon-investment-opportunity/1.jpg",
      "/properties/hotel-for-sale-san-jose-barrio-amon-investment-opportunity/2.jpg",
    ],
    coverWidth: 1600,
    coverHeight: 898,
  },
  {
    // The source description for this entry was lorem-ipsum filler, so this
    // copy is written ONLY from its structured facts (size, place, use).
    slug: "lake-arenal-volcano-view-property-hacienda-poseidon-guanacas",
    title: {
      es: "Ecodesarrollo: 13,34 hectáreas",
      en: "Eco-development: 13.34 hectares",
    },
    description: {
      es: "Terreno de 13,34 hectáreas (33 acres) en Tejona de Tilarán, Guanacaste, cerca del Lago Arenal. Se ofrece en venta con vocación residencial.",
      en: "A 13.34-hectare (33-acre) property in Tejona, Tilarán — Guanacaste, near Lake Arenal. Offered for sale for residential use.",
    },
    price: 795000,
    currency: "USD",
    beds: null,
    baths: null,
    size: 33,
    sizeUnit: "acres",
    lot: null,
    lotUnit: null,
    location: {
      es: "Tejona de Tilarán, Guanacaste",
      en: "Tejona, Tilarán — Guanacaste",
    },
    category: "land",
    status,
    photos: [
      "/properties/lake-arenal-volcano-view-property-hacienda-poseidon-guanacas/1.jpg",
    ],
    coverWidth: 768,
    coverHeight: 576,
  },
  {
    slug: "development-opportunity-next-to-mcdonalds",
    title: {
      es: "Desarrollo de uso mixto en Turrialba, frente a la Ruta 10",
      en: "Turrialba mixed-use development fronting Route 10",
    },
    description: {
      es: "Propiedad de 20 379 m² (5 acres) en Turrialba, contigua al nuevo McDonald's, KFC y Subway, cerca de la Universidad de Costa Rica y de los Tribunales de Justicia, y a solo 5 minutos del CATIE. Cuenta con zonificación aprobada para desarrollo de uso mixto —comercial y residencial—, frente a vía principal de alto tránsito con acceso a transporte público, y servicios de agua, electricidad e internet de alta velocidad disponibles.",
      en: "A 20,379 m² (5-acre) property in Turrialba, adjacent to the new McDonald's, KFC and Subway, close to the University of Costa Rica and the Supreme Courts, and only 5 minutes from CATIE. It carries approved zoning for mixed-use development — commercial and residential — on a high-traffic main road with public transport access, and water, electricity and high-speed internet available.",
    },
    price: 1000000,
    currency: "USD",
    beds: null,
    baths: null,
    size: 20000,
    sizeUnit: "m2",
    lot: null,
    lotUnit: null,
    location: {
      es: "Turrialba, Cartago",
      en: "Turrialba, Cartago",
    },
    category: "land",
    status,
    photos: [
      "/properties/development-opportunity-next-to-mcdonalds/1.png",
      "/properties/development-opportunity-next-to-mcdonalds/2.png",
      "/properties/development-opportunity-next-to-mcdonalds/3.png",
      "/properties/development-opportunity-next-to-mcdonalds/4.png",
      "/properties/development-opportunity-next-to-mcdonalds/5.png",
      "/properties/development-opportunity-next-to-mcdonalds/6.png",
      "/properties/development-opportunity-next-to-mcdonalds/7.png",
      "/properties/development-opportunity-next-to-mcdonalds/8.png",
      "/properties/development-opportunity-next-to-mcdonalds/9.png",
      "/properties/development-opportunity-next-to-mcdonalds/10.png",
    ],
    coverWidth: 1600,
    coverHeight: 1067,
  },
  {
    slug: "7-7-hectares-development-mix-usage",
    title: {
      es: "7,7 hectáreas para desarrollo de uso mixto",
      en: "7.7 hectares for mixed-use development",
    },
    description: {
      es: "Propiedad de 77 064 m² cercana al centro de Turrialba, con zonificación de uso mixto (residencial y comercial) y casi 400 metros de frente a calle pública — aproximadamente $30 por metro cuadrado. Rodeada de urbanizaciones residenciales, con acceso por vías públicas asfaltadas cerca de la carretera nacional, electricidad y agua a lo largo de todo el frente, y topografía plana a ligeramente ondulada.",
      en: "A 77,064 m² property near the center of Turrialba, zoned for mixed residential and commercial use, with nearly 400 meters of public road frontage — approximately $30 per square meter. Surrounded by residential subdivisions, accessible via paved public roads near the national highway, with power and water along the entire frontage and flat to gently sloping terrain.",
    },
    price: 2300000,
    currency: "USD",
    beds: null,
    baths: null,
    size: 77064,
    sizeUnit: "m2",
    lot: null,
    lotUnit: null,
    location: {
      es: "Turrialba, Cartago",
      en: "Turrialba, Cartago",
    },
    category: "land",
    status,
    photos: [
      "/properties/7-7-hectares-development-mix-usage/1.jpg",
      "/properties/7-7-hectares-development-mix-usage/2.jpg",
      "/properties/7-7-hectares-development-mix-usage/3.jpg",
      "/properties/7-7-hectares-development-mix-usage/4.jpg",
      "/properties/7-7-hectares-development-mix-usage/5.jpg",
      "/properties/7-7-hectares-development-mix-usage/6.jpg",
      "/properties/7-7-hectares-development-mix-usage/7.jpg",
    ],
    coverWidth: 1540,
    coverHeight: 772,
  },
  {
    slug: "beachfront-property-playa-hermosa-osa",
    title: {
      es: "Propiedad frente al mar en Playa Hermosa",
      en: "Beachfront property, Playa Hermosa",
    },
    description: {
      es: "Codiciada propiedad frente al mar de 1,2 acres contigua a Santa Teresa, que combina vistas prístinas al océano, acceso a quebradas naturales y una tranquila zona verde — el retiro eco-lujoso por excelencia, con privacidad y naturaleza en un ambiente exclusivo. Los desarrollos de la zona, como el proyecto de la marina de Tambor, el aeropuerto de Cóbano y el parque Punta Vista, señalan una tendencia económica al alza, con acceso en vuelos chárter desde Manzanillo y vuelos regulares a San José desde Tambor.",
      en: "A prized 1.2-acre beachfront property next to Santa Teresa, combining pristine ocean views, access to natural creeks and a tranquil green zone — the quintessential eco-luxurious retreat, affording privacy and nature in an upscale ambiance. Developments in the vicinity, such as the Tambor marina project, the Cobano Airport and Punta Vista Park, indicate an upward economic trend, with access by charter from Manzanillo and scheduled flights to San José from Tambor.",
    },
    price: 6000000,
    currency: "USD",
    beds: null,
    baths: null,
    size: null,
    sizeUnit: null,
    lot: null,
    lotUnit: null,
    location: {
      es: "Playa Hermosa, Cóbano — Puntarenas",
      en: "Playa Hermosa, Cóbano — Puntarenas",
    },
    category: "beachfront",
    status,
    photos: [
      "/properties/beachfront-property-playa-hermosa-osa/1.jpg",
      "/properties/beachfront-property-playa-hermosa-osa/2.jpg",
      "/properties/beachfront-property-playa-hermosa-osa/3.jpg",
      "/properties/beachfront-property-playa-hermosa-osa/4.jpg",
      "/properties/beachfront-property-playa-hermosa-osa/5.jpg",
    ],
    coverWidth: 1600,
    coverHeight: 1198,
  },
  {
    // Source price 9,999,999.99 is a placeholder → price on request.
    slug: "shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d",
    title: {
      es: "Sitio de desarrollo con plan maestro, listo para construir, en Uvita",
      en: "Shovel-ready master-planned development site, Uvita",
    },
    description: {
      es: "Preparada para un desarrollo versátil, esta propiedad de 130 hectáreas se ubica en Bahía Ballena de Puntarenas, comunidad costera emergente contigua a Uvita y al Parque Nacional Marino Ballena. Apta para residencias de lujo, condominios, espacios comerciales y ecolodges, con vista panorámica al océano, zonas verdes, senderos naturales y fácil acceso a las reservas de biodiversidad circundantes.",
      en: "Primed for versatile development, this 130-hectare property is located in Bahía Ballena, Puntarenas, an upcoming coastal community adjacent to Uvita and Marino Ballena National Park. Suited for luxury homes, condos, retail spaces and eco-lodges, it comes with panoramic ocean views, green zones, nature trails and easy access to the surrounding biodiversity reserves.",
    },
    price: null,
    priceOnRequest: true,
    currency: "USD",
    beds: null,
    baths: null,
    size: null,
    sizeUnit: null,
    lot: null,
    lotUnit: null,
    location: {
      es: "Bahía Ballena, Uvita — Puntarenas",
      en: "Bahía Ballena, Uvita — Puntarenas",
    },
    category: "land",
    status,
    photos: [
      "/properties/shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d/1.jpeg",
      "/properties/shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d/2.jpg",
      "/properties/shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d/3.jpg",
      "/properties/shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d/4.jpg",
      "/properties/shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d/5.jpg",
      "/properties/shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d/6.jpg",
      "/properties/shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d/7.jpg",
      "/properties/shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d/8.jpg",
      "/properties/shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d/9.jpg",
      "/properties/shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d/10.jpg",
    ],
    coverWidth: 980,
    coverHeight: 551,
  },
  {
    slug: "pura-jungla-one-lots-5-6",
    title: {
      es: "Pura Jungla One — Lotes #5 y #6",
      en: "Pura Jungla One — Lots #5 & #6",
    },
    description: {
      es: "Dos lotes contiguos con vista al mar, debidamente titulados e independientes, que suman 17 950 m² (casi 4,5 acres) dentro de Pura Jungla One, desarrollo residencial y reserva biológica en la zona de Playa Negra, en la Costa Dorada sur de Guanacaste; se venden únicamente en conjunto. Cuentan con servicios de agua y electricidad al frente del acceso, cartas de disponibilidad de agua vigentes e internet de fibra óptica disponible, con vistas panorámicas al atardecer y a las montañas, y varias playas a entre 3 y 10 minutos en vehículo.",
      en: "Two legally titled, individual adjacent ocean-view lots totaling 17,950 m² (nearly 4.5 acres) inside Pura Jungla One, a residential development and biological reserve in the Playa Negra area of Guanacaste's southern Gold Coast; the lots are sold only together. Water and electric services run along the access-road frontage, with current valid will-serve water letters and fiber-optic internet available, panoramic sunset and mountain views, and multiple beaches within a 3–10 minute drive.",
    },
    price: 295000,
    currency: "USD",
    beds: null,
    baths: null,
    size: null,
    sizeUnit: null,
    lot: null,
    lotUnit: null,
    location: {
      es: "Playa Negra, Guanacaste",
      en: "Playa Negra, Guanacaste",
    },
    category: "residential",
    status,
    photos: [
      "/properties/pura-jungla-one-lots-5-6/1.png",
      "/properties/pura-jungla-one-lots-5-6/2.jpeg",
      "/properties/pura-jungla-one-lots-5-6/3.jpeg",
      "/properties/pura-jungla-one-lots-5-6/4.jpeg",
      "/properties/pura-jungla-one-lots-5-6/5.png",
    ],
    coverWidth: 1284,
    coverHeight: 707,
  },
];

export const listingBySlug = (slug: string): Listing | undefined =>
  listings.find((l) => l.slug === slug);

// ── Formatting helpers (deterministic — no ICU dependency, no hydration risk) ──

/** Group thousands: es → narrow spaces (SI style, avoids decimal-comma
 *  ambiguity), en → commas. */
export function formatNumber(n: number, locale: Locale): string {
  const sep = locale === "es" ? " " : ",";
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

/** "$2,700,000 USD" — or the localized on-request label. */
export function formatPrice(l: Listing, locale: Locale): string {
  if (l.priceOnRequest || l.price == null) {
    return locale === "es" ? "Precio a consultar" : "Price on request";
  }
  return `$${String(l.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${l.currency}`;
}

const unitLabel: Record<"m2" | "acres", string> = {
  m2: "m²",
  acres: "acres",
};

/** Compact spec badges (only fields the listing actually has). */
export function listingSpecs(l: Listing, locale: Locale): string[] {
  const es = locale === "es";
  const specs: string[] = [];
  if (l.beds != null) specs.push(es ? `${l.beds} habitaciones` : `${l.beds} rooms`);
  if (l.baths != null) specs.push(es ? `${l.baths} baños` : `${l.baths} baths`);
  if (l.size != null && l.sizeUnit) {
    specs.push(`${formatNumber(l.size, locale)} ${unitLabel[l.sizeUnit]}`);
  }
  if (l.lot != null && l.lotUnit) {
    specs.push(
      es
        ? `Lote: ${formatNumber(l.lot, locale)} ${unitLabel[l.lotUnit]}`
        : `Lot: ${formatNumber(l.lot, locale)} ${unitLabel[l.lotUnit]}`,
    );
  }
  return specs;
}
