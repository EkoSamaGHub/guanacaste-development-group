// Full property detail copy, keyed by listing slug. Sourced verbatim (meaning-
// preserving) from the client's WordPress export; English is the original
// listing text lightly cleaned, Spanish is a faithful translation. Nothing is
// invented — where the source had filler (the Eco-Development lorem-ipsum), the
// copy is written only from its real structured facts.
import type { Localized } from "@/lib/site";

export type DetailSection = { h: Localized; p?: Localized; bullets?: Localized[] };
export type ListingDetail = { intro: Localized; sections: DetailSection[] };

export const listingDetails: Record<string, ListingDetail> = {
  "hotel-for-sale-san-jose-barrio-amon-investment-opportunity": {
    intro: {
      es: "Oportunidad de inversión en San José, Costa Rica, en el corazón de Barrio Amón, distrito declarado oficialmente de interés público por su desarrollo turístico, cultural, ecológico y natural (Decreto Legislativo N.º 10480). Esta mansión histórica de 1929, hoy en operación como hotel boutique, combina elegancia atemporal, ubicación privilegiada y un notable potencial comercial.",
      en: "Investment opportunity in San José, Costa Rica, in the heart of Barrio Amón, a district officially declared of public interest for its tourism, cultural, ecological and natural development (Legislative Decree No. 10480). This historic 1929 mansion, now operating as a boutique hotel, blends timeless elegance, a prime location and remarkable commercial potential.",
    },
    sections: [
      {
        h: { es: "Características destacadas", en: "Property highlights" },
        bullets: [
          { es: "29 habitaciones de diseño singular: acabados en madera cálida, arte nativo pintado a mano y comodidades modernas como TV de pantalla plana, minibar y baño privado.", en: "29 individually designed guest rooms: warm wood finishes, hand-painted native artwork and modern amenities such as flat-screen TVs, mini-bars and private baths." },
          { es: "Wi-Fi de alta velocidad en toda la propiedad.", en: "High-speed Wi-Fi throughout." },
          { es: "Restaurante y bar tropical para huéspedes y visitantes.", en: "Tropical restaurant and bar serving guests and locals." },
          { es: "Sala de conferencias para eventos y reuniones corporativas.", en: "Conference room for events and corporate meetings." },
          { es: "Licencia de casino incluida, con potencial de ampliación.", en: "Casino license included, with potential for expansion." },
          { es: "Parqueo con seguridad y lotes adicionales incluidos en la venta.", en: "Secured parking, with additional lots included in the sale." },
          { es: "Seguridad 24 horas, lavandería y asistencia turística.", en: "24-hour security, laundry service and tourist assistance." },
        ],
      },
      {
        h: { es: "Ubicación estratégica en Barrio Amón", en: "Strategic location in Barrio Amón" },
        p: {
          es: "Barrio Amón es uno de los barrios más emblemáticos de San José, reconocido por su arquitectura histórica y su creciente popularidad como polo cultural y turístico. Con su reciente declaratoria de interés público (Decreto Legislativo N.º 10480), la zona está posicionada para un crecimiento sustancial mediante iniciativas de respaldo estatal orientadas a: desarrollo turístico sostenible; conservación del patrimonio cultural y ambiental; y apoyo a las pymes vinculadas al turismo. El Estado costarricense se compromete a preservar y potenciar la vitalidad social, cultural y económica de Barrio Amón y del vecino Barrio Otoya.",
          en: "Barrio Amón is one of San José's most iconic neighborhoods, known for its historic architecture and growing popularity as a cultural and tourism hub. With its recent declaration of public interest (Legislative Decree No. 10480), the area is positioned for substantial growth through government-backed initiatives supporting: sustainable tourism development; conservation of cultural and environmental heritage; and support for small and medium-sized businesses (PYMEs) linked to tourism. The Costa Rican government is committed to preserving and enhancing the social, cultural and economic vitality of Barrio Amón and neighboring Barrio Otoya.",
        },
      },
      {
        h: { es: "Oportunidades de expansión", en: "Expansion opportunities" },
        p: { es: "La venta incluye lotes adicionales con potencial para:", en: "The sale includes additional lots with the potential to:" },
        bullets: [
          { es: "Agregar más habitaciones.", en: "Add more guest rooms." },
          { es: "Desarrollar un condominio de varios niveles.", en: "Add a multi-story condo development." },
          { es: "Ampliar las instalaciones de casino.", en: "Expand the hotel's casino facilities." },
          { es: "Crear nuevos espacios comerciales o culturales alineados con los objetivos turísticos y ecológicos de la zona.", en: "Create new commercial or cultural spaces aligned with the area's tourism and ecological goals." },
        ],
      },
      {
        h: { es: "Beneficios clave para el inversionista", en: "Key benefits for investors" },
        bullets: [
          { es: "Ubicada en una zona de interés público.", en: "Located in a public-interest zone." },
          { es: "Reputación consolidada.", en: "Established reputation." },
          { es: "Posición estratégica en una zona de alta demanda.", en: "Strategic positioning in a high-demand area." },
          { es: "Oportunidades de expansión para aumentar los ingresos.", en: "Expansion opportunities to increase revenue." },
        ],
      },
    ],
  },

  "lake-arenal-volcano-view-property-hacienda-poseidon-guanacas": {
    intro: {
      es: "Finca de 13,34 hectáreas (32,96 acres) en Tejona de Tilarán, Guanacaste, en la campiña de Santa Rosa, con vistas al Lago Arenal y a los volcanes Arenal y Tenorio. Bien posicionada tanto para un retiro sereno como para una inversión rentable, combina tranquilidad y conectividad.",
      en: "A 13.34-hectare (32.96-acre) property in Tejona, Tilarán — Guanacaste, set in the countryside of Santa Rosa, with views of Lake Arenal and the Arenal and Tenorio volcanoes. Well positioned for both a serene escape and a profitable investment, it blends tranquility with connectivity.",
    },
    sections: [
      {
        h: { es: "Características destacadas", en: "Property highlights" },
        bullets: [
          { es: "Superficie: 13,34 hectáreas (32,96 acres).", en: "Size: 13.34 hectares (32.96 acres)." },
          { es: "Vistas al Lago Arenal y a los volcanes Arenal y Tenorio.", en: "Views of Lake Arenal and the Arenal and Tenorio volcanoes." },
          { es: "Servicios: electricidad en sitio y concesión de pozo de agua registrada.", en: "Utilities: on-site electricity and a registered water-well concession." },
          { es: "Frente a calle pública, lo que permite subdivisión y fácil acceso.", en: "Public road frontage, allowing subdivision and easy access." },
          { es: "A 15 minutos de Tilarán, 90 minutos del Aeropuerto Internacional de Liberia y 2 horas de las playas del Pacífico.", en: "15 minutes from Tilarán, 90 minutes to Liberia International Airport, and 2 hours from Costa Rica's Pacific beaches." },
        ],
      },
      {
        h: { es: "Oportunidades de desarrollo", en: "Development opportunities" },
        p: {
          es: "Con su frente a calle pública (que permite subdividir en varias parcelas), su amplia extensión (apta para proyectos residenciales, de ecoturismo o agrícolas) y sus servicios en sitio (electricidad y fuente de agua registrada), la propiedad ofrece la base para una comunidad residencial de lujo, un ecolodge o un retiro sostenible.",
          en: "With its public road frontage (allowing subdivision into multiple parcels), large acreage (suitable for residential, eco-tourism or agricultural projects) and on-site utilities (electricity and a registered water source), the property offers the foundation for a luxury residential community, an eco-lodge or a sustainable retreat.",
        },
      },
      {
        h: { es: "Beneficios clave para el inversionista", en: "Key benefits for investors" },
        bullets: [
          { es: "Zona de alta demanda: Guanacaste es una de las regiones más buscadas de Costa Rica para turismo e inmobiliario.", en: "High-demand location: Guanacaste is one of Costa Rica's most sought-after regions for tourism and real estate." },
          { es: "Potencial versátil: zonificación y servicios que admiten desde fincas privadas hasta proyectos generadores de ingresos.", en: "Versatile potential: zoning and utilities support everything from private estates to income-generating ventures." },
          { es: "Recursos naturales: incluye un pozo de agua registrado, recurso invaluable para el desarrollo en la región.", en: "Natural resources: includes a registered water well, an invaluable resource for development in the region." },
        ],
      },
    ],
  },

  "development-opportunity-next-to-mcdonalds": {
    intro: {
      es: "Oportunidad de inversión en Turrialba, Costa Rica. Propiedad de 20 379 m² (5 acres) ubicada junto a puntos comerciales, académicos y judiciales de referencia, con potencial para desarrollo de uso mixto: una plaza comercial, un complejo residencial o una combinación de ambos con excelente visibilidad.",
      en: "Investment opportunity in Turrialba, Costa Rica. A 20,379 m² (5-acre) property located near major commercial, academic and judicial landmarks, with potential for mixed-use development: a commercial plaza, a residential complex or a combination of both with strong visibility.",
    },
    sections: [
      {
        h: { es: "Ubicación", en: "Location" },
        bullets: [
          { es: "Junto al nuevo McDonald's, KFC y Subway.", en: "Next to the new McDonald's, KFC and Subway." },
          { es: "Cerca de la Universidad de Costa Rica (UCR) y de los Tribunales Supremos de Justicia.", en: "Close to the University of Costa Rica (UCR) and the Supreme Courts of Justice." },
          { es: "A solo 5 minutos del CATIE, institución de investigación y enseñanza de renombre mundial.", en: "Only 5 minutes from CATIE, a world-renowned research and education institution." },
        ],
      },
      {
        h: { es: "Zonificación y potencial", en: "Zoning & development potential" },
        bullets: [
          { es: "Aprobada para desarrollo de uso mixto (comercial y residencial).", en: "Approved for mixed-use development (commercial and residential)." },
          { es: "Ideal para locales comerciales, oficinas, vivienda estudiantil, hoteles boutique y proyectos de ecoturismo.", en: "Ideal for retail spaces, offices, student housing, boutique hotels and eco-tourism projects." },
          { es: "Frente a vía principal de alto tránsito con acceso a transporte público.", en: "On a high-traffic main road with public transport access." },
          { es: "Lista para construir, con agua, electricidad e internet de alta velocidad disponibles.", en: "Ready to build, with water, electricity and high-speed internet available." },
        ],
      },
      {
        h: { es: "Por qué invertir aquí", en: "Why invest here" },
        bullets: [
          { es: "Visibilidad estratégica: alto tránsito peatonal y vehicular junto a instituciones y polos comerciales clave.", en: "Strategic visibility: high foot and vehicle traffic near key institutions and commercial hubs." },
          { es: "Alta demanda: ideal para atender a estudiantes, profesionales y familias locales.", en: "High demand: ideal for students, professionals and local families." },
          { es: "Flexibilidad: la zonificación admite opciones diversas para maximizar la inversión.", en: "Flexibility: the zoning allows diverse options to maximize your investment." },
        ],
      },
    ],
  },

  "7-7-hectares-development-mix-usage": {
    intro: {
      es: "Superficie de 77 064 m², con un costo aproximado de $30 por metro cuadrado. La propiedad se ubica cerca del centro de Turrialba, con zonificación de uso mixto (residencial y comercial) y casi 400 metros de frente a calle pública, lo que abre potencial para desarrollos variados.",
      en: "A 77,064 m² property at approximately $30 per square meter. Located near the center of Turrialba, zoned for mixed use (residential and commercial), with nearly 400 meters of public road frontage — opening potential for varied development.",
    },
    sections: [
      {
        h: { es: "Usos posibles", en: "Possible uses" },
        bullets: [
          { es: "Vivienda residencial.", en: "Residential housing." },
          { es: "Clínicas.", en: "Clinics." },
          { es: "Supermercados.", en: "Supermarkets." },
          { es: "Otros desarrollos comerciales o de uso mixto.", en: "Other commercial or mixed-use developments." },
        ],
      },
      {
        h: { es: "Características", en: "Highlights" },
        bullets: [
          { es: "Ubicación privilegiada en la zona central de Turrialba.", en: "Prime location in Turrialba's central area." },
          { es: "Apta para diversas oportunidades de desarrollo.", en: "Suitable for diverse development opportunities." },
          { es: "Excelente conectividad vial; rodeada de urbanizaciones y cerca de la carretera nacional.", en: "Excellent road connectivity; surrounded by subdivisions and near the national highway." },
          { es: "Electricidad y agua a lo largo de todo el frente de calle.", en: "Power and water along all road frontage." },
          { es: "Topografía plana a ligeramente ondulada.", en: "Flat to gently sloping terrain." },
        ],
      },
    ],
  },

  "beachfront-property-playa-hermosa-osa": {
    intro: {
      es: "Codiciada propiedad frente al mar de 1,2 acres contigua a Santa Teresa. Playa Hermosa representa una rara oportunidad de inversión: combina vistas prístinas al océano, acceso a quebradas naturales y una tranquila zona verde, conformando el retiro eco-lujoso por excelencia. En la creciente zona de Santa Teresa, ofrece privacidad, lujo y naturaleza en un ambiente exclusivo.",
      en: "A prized 1.2-acre beachfront property next to Santa Teresa. Playa Hermosa presents a rare investment opportunity: combining pristine ocean views, access to natural creeks and a tranquil green zone, it forms the quintessential eco-luxurious retreat. In the trending Santa Teresa area, it affords privacy, luxury and nature in an upscale ambiance.",
    },
    sections: [
      {
        h: { es: "Contexto y acceso", en: "Context & access" },
        p: {
          es: "Los desarrollos cercanos —el proyecto multimillonario de la Marina de Tambor, el Aeropuerto de Cóbano y el parque Punta Vista— señalan una tendencia económica al alza. El acceso se refuerza con vuelos chárter desde el Aeropuerto de Manzanillo y vuelos regulares a San José desde el Aeropuerto de Tambor.",
          en: "Nearby developments — the billion-dollar Tambor Marina project, the Cóbano Airport and Punta Vista Park — point to an upward economic trend. Access is further supported by charter flights from Manzanillo Airport and scheduled flights to San José from Tambor Airport.",
        },
      },
    ],
  },

  "shovel-ready-property-in-uvita-costa-rica-130-hectares-for-d": {
    intro: {
      es: "Lista para un desarrollo versátil, esta propiedad de 130 hectáreas se ubica en Bahía Ballena de Puntarenas, Costa Rica. Apta para residencias de lujo, condominios, espacios comerciales y ecolodges, cuenta con vista panorámica al océano, zonas verdes y senderos naturales.",
      en: "Primed for versatile development, this 130-hectare property is located in Bahía Ballena, Puntarenas, Costa Rica. Suited for luxury homes, condos, retail spaces and eco-lodges, it comes with panoramic ocean views, green zones and nature trails.",
    },
    sections: [
      {
        h: { es: "Ubicación", en: "Location" },
        p: {
          es: "Con fácil acceso a las reservas de biodiversidad circundantes, Bahía Ballena es una comunidad costera emergente contigua a Uvita y al Parque Nacional Marino Ballena.",
          en: "With easy access to the surrounding biodiversity reserves, Bahía Ballena is an upcoming coastal community adjacent to Uvita and Marino Ballena National Park.",
        },
      },
    ],
  },

  "pura-jungla-one-lots-5-6": {
    intro: {
      es: "Dos lotes contiguos con vista al mar, debidamente titulados e independientes, que suman 17 950 m² (casi 4,5 acres). Se venden únicamente en conjunto. Ubicados en el área de Playa Negra, en la Costa Dorada sur de Guanacaste, dentro de Pura Jungla One — desarrollo residencial y reserva biológica.",
      en: "Two legally titled, individual adjacent ocean-view lots totaling 17,950 m² (nearly 4.5 acres). Sold only together. Located in the Playa Negra area of Guanacaste's southern Gold Coast, inside Pura Jungla One — a residential development and biological reserve.",
    },
    sections: [
      {
        h: { es: "Características", en: "Characteristics" },
        bullets: [
          { es: "Acceso por servidumbre agrícola.", en: "Access via agricultural easement (servidumbre agrícola)." },
          { es: "Servicios públicos (agua y electricidad) al frente de la calle de acceso.", en: "Public utilities (water and electricity) at the frontage of the access road." },
          { es: "Cartas de disponibilidad de agua vigentes.", en: "Current valid will-serve water letters." },
          { es: "Internet de fibra óptica disponible.", en: "Fiber-optic internet available." },
          { es: "Vistas panorámicas de 360°: atardeceres al oeste/sur y montañas al norte y este.", en: "360-degree panoramic views: west/south sunsets and mountain views to the north and east." },
          { es: "Zonificación residencial, lote mínimo de 5 000 m² (aprox. 1¼ acre).", en: "Residential zoning, minimum lot size 5,000 m² (approx. 1¼ acre)." },
          { es: "Terreno: zona alta con crestón para plataformas con vista, piscina, bodegas y parqueo (aprox. 2 000 m²); lado norte boscoso y de pendiente pronunciada.", en: "Terrain: upper ridge for view-site building pads, pool, storage and parking (approx. 2,000 m²); forested, steeper north side." },
        ],
      },
      {
        h: { es: "Ubicación y conectividad", en: "Location & connectivity" },
        bullets: [
          { es: "De 3 a 10 minutos en auto de varias playas: Negra, Callejones, Blanca, Junquillal, Avellana y Venado.", en: "A 3–10 minute drive from multiple beaches: Negra, Callejones, Blanca, Junquillal, Avellana and Venado." },
          { es: "A dos minutos del pueblo de Paraíso.", en: "Two minutes from the village of Paraíso." },
          { es: "A 1 hora 10 minutos del Aeropuerto Internacional de Liberia; media hora de Tamarindo y su aeropuerto nacional.", en: "1 hour 10 minutes from Liberia International Airport; half an hour from Tamarindo and its national airport." },
          { es: "Media hora por carretera pavimentada a Tamarindo (principal pueblo turístico de playa) y a Santa Cruz (centro cantonal).", en: "Half an hour on paved road to Tamarindo (a top beach tourist town) and to Santa Cruz (the county seat)." },
          { es: "Restaurantes, pequeños hoteles boutique y ecolodges muy cerca; varios parques nacionales a una hora u hora y media.", en: "Restaurants, small boutique hotels and eco-lodges nearby; several national parks within one to one-and-a-half hours." },
        ],
      },
      {
        h: { es: "Nota", en: "Note" },
        p: {
          es: "El desarrollo Pura Jungla solicita un pago anual de mantenimiento de vías y reserva biológica de $1 200 por el primer lote y $600 por el segundo.",
          en: "The Pura Jungla development requests an annual road and biological-reserve maintenance payment of $1,200 for the first lot and $600 for the second.",
        },
      },
    ],
  },
};
