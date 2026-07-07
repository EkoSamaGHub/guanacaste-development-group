import type { Metadata } from "next";
import { waHref, localeHref, pageAlternates, type Locale } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, Eyebrow, PrimaryCta } from "@/components/ui";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  return {
    title: locale === "es" ? "Invertir" : "Invest",
    description:
      locale === "es"
        ? "Tesis de inversión inmobiliaria en Guanacaste, Costa Rica: estructuras de oportunidad, debida diligencia rigurosa y asesoría para inversionistas privados, family offices y socios de desarrollo."
        : "Real estate investment thesis in Guanacaste, Costa Rica: opportunity structures, rigorous due diligence and advisory for private investors, family offices and development partners.",
    alternates: pageAlternates(locale, "/invest/"),
  };
}

const copy = {
  es: {
    eyebrow: "Inversión",
    title: "Exposición a uno de los mercados de mayor proyección de Costa Rica",
    lede: "Estructuramos y presentamos oportunidades de inversión inmobiliaria en Guanacaste para inversionistas privados, family offices y socios de desarrollo — siempre con rigor y transparencia.",
    photoLabel: "Sitios de desarrollo e inversión en Guanacaste",
    breadcrumb: "Invertir",
    thesisEyebrow: "La tesis",
    thesisTitle: "Un mercado con fundamentos de largo plazo",
    thesisP1: "Guanacaste combina litoral del Pacífico, conectividad internacional, estabilidad institucional y un mercado inmobiliario en crecimiento. Nuestra presencia local nos permite identificar oportunidades con potencial real y acompañarlas con la disciplina de una firma de inversión.",
    thesisP2: "Nuestro enfoque prioriza la creación de valor sostenido —desarrollo responsable, planificación maestra y horizontes de largo plazo— por encima de la especulación de corto plazo.",
    structEyebrow: "Estructuras de oportunidad",
    structTitle: "Distintas formas de participar",
    dilEyebrow: "Debida diligencia",
    dilTitle: "El rigor es la base de toda decisión de inversión",
    dilBody: "Cada oportunidad se somete a un proceso estructurado antes de presentarse. No comprometemos capital —ni el suyo ni el nuestro— sin fundamento.",
    audEyebrow: "Para quién trabajamos",
    audTitle: "Acompañamos a inversionistas exigentes",
    audBody: "Guiamos a inversionistas nacionales e internacionales por el mercado inmobiliario de Costa Rica, ayudándoles a identificar oportunidades, gestionar el riesgo y construir portafolios de largo plazo.",
    advTitle: "Asesoría al inversionista",
    advBody: "Coordinemos una conversación confidencial para entender su tesis y presentarle las oportunidades vigentes. Sin compromiso.",
    advWa: "Hablar con un asesor",
    advForm: "Formulario de contacto",
    advWaMsg: "Buenos días, soy inversionista y me interesa conocer las oportunidades en Costa Rica.",
    disclaimer: "La información de esta página es de carácter general e ilustrativo y no constituye una oferta de valores, una recomendación de inversión ni asesoría legal, financiera o fiscal. No garantizamos rendimientos. Toda inversión conlleva riesgo y está sujeta a debida diligencia y confirmación.",
    structures: [
      { icon: "Buildings", title: "Coinversión en desarrollo", body: "Participación en proyectos residenciales, comerciales, hoteleros o de uso mixto, desde la fase de concepto hasta la entrega." },
      { icon: "MapTrifold", title: "Adquisición de terrenos", body: "Adquisición estratégica de tierra con potencial de habilitación, zonificación y plusvalía a largo plazo." },
      { icon: "Sparkle", title: "Activos residenciales de lujo", body: "Residencias y condominios de alta gama orientados a renta, plusvalía o uso propio del inversionista." },
      { icon: "Handshake", title: "Alianzas y empresas conjuntas", body: "Estructuras conjuntas con propietarios, desarrolladores y socios institucionales para proyectos de mayor escala." },
    ],
    diligence: [
      { icon: "ChartLineUp", title: "Análisis de mercado", body: "Estudio de demanda, comparables y dinámica de la zona antes de comprometer capital." },
      { icon: "Coins", title: "Modelación financiera", body: "Proyecciones, escenarios y estructura de capital construidas caso por caso." },
      { icon: "Scales", title: "Revisión legal y de zonificación", body: "Verificación de títulos, uso de suelo, permisos y marco regulatorio aplicable." },
      { icon: "Leaf", title: "Evaluación ambiental", body: "Consideraciones ambientales y de sostenibilidad integradas a la factibilidad." },
    ],
    audiences: [
      { icon: "Coins", label: "Inversionistas privados" },
      { icon: "Users", label: "Family offices" },
      { icon: "Handshake", label: "Socios de desarrollo" },
      { icon: "Globe", label: "Inversionistas internacionales" },
    ],
  },
  en: {
    eyebrow: "Investment",
    title: "Exposure to one of Costa Rica's most promising markets",
    lede: "We structure and present real estate investment opportunities in Guanacaste for private investors, family offices and development partners — always with rigor and transparency.",
    photoLabel: "Development and investment sites in Guanacaste",
    breadcrumb: "Invest",
    thesisEyebrow: "The thesis",
    thesisTitle: "A market with long-term fundamentals",
    thesisP1: "Guanacaste combines Pacific coastline, international connectivity, institutional stability and a growing real estate market. Our local presence lets us identify opportunities with real potential and support them with the discipline of an investment firm.",
    thesisP2: "Our approach prioritizes sustained value creation — responsible development, master planning and long-term horizons — over short-term speculation.",
    structEyebrow: "Opportunity structures",
    structTitle: "Different ways to participate",
    dilEyebrow: "Due diligence",
    dilTitle: "Rigor is the foundation of every investment decision",
    dilBody: "Every opportunity goes through a structured process before it is presented. We do not commit capital — yours or ours — without a sound basis.",
    audEyebrow: "Who we work for",
    audTitle: "We work with discerning investors",
    audBody: "We guide domestic and international investors through Costa Rica's real estate market, helping them identify opportunities, manage risk and build long-term portfolios.",
    advTitle: "Investor advisory",
    advBody: "Let's arrange a confidential conversation to understand your thesis and present current opportunities. No obligation.",
    advWa: "Talk to an advisor",
    advForm: "Contact form",
    advWaMsg: "Good morning, I'm an investor and I'd like to learn about opportunities in Costa Rica.",
    disclaimer: "The information on this page is general and illustrative and does not constitute an offer of securities, an investment recommendation or legal, financial or tax advice. We do not guarantee returns. All investment carries risk and is subject to due diligence and confirmation.",
    structures: [
      { icon: "Buildings", title: "Development co-investment", body: "Participation in residential, commercial, hospitality or mixed-use projects, from concept phase through delivery." },
      { icon: "MapTrifold", title: "Land acquisition", body: "Strategic acquisition of land with entitlement, zoning and long-term appreciation potential." },
      { icon: "Sparkle", title: "Luxury residential assets", body: "High-end residences and condominiums oriented to rental income, appreciation or the investor's own use." },
      { icon: "Handshake", title: "Partnerships and joint ventures", body: "Joint structures with landowners, developers and institutional partners for larger-scale projects." },
    ],
    diligence: [
      { icon: "ChartLineUp", title: "Market analysis", body: "Study of demand, comparables and area dynamics before committing capital." },
      { icon: "Coins", title: "Financial modeling", body: "Projections, scenarios and capital structure built case by case." },
      { icon: "Scales", title: "Legal and zoning review", body: "Verification of title, land use, permits and the applicable regulatory framework." },
      { icon: "Leaf", title: "Environmental assessment", body: "Environmental and sustainability considerations integrated into feasibility." },
    ],
    audiences: [
      { icon: "Coins", label: "Private investors" },
      { icon: "Users", label: "Family offices" },
      { icon: "Handshake", label: "Development partners" },
      { icon: "Globe", label: "International investors" },
    ],
  },
} as const;

export default async function InvestPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const t = copy[locale];
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        lede={t.lede}
        image="/site/coast-2.jpg"
        imageAlt={t.photoLabel}
        breadcrumb={[{ name: t.breadcrumb, path: "/invest/" }]}
      />

      <Section className="pt-4">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <Eyebrow>{t.thesisEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-lg">
              {t.thesisTitle}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="leading-relaxed text-ink-muted">{t.thesisP1}</p>
            <p className="mt-4 leading-relaxed text-ink-muted">{t.thesisP2}</p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.structEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              {t.structTitle}
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {t.structures.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="flex gap-5 border-t border-line pt-6">
                <Icon name={s.icon} size={30} className="text-accent shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-accent-2 text-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow">{t.dilEyebrow}</p>
            <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl lg:text-[2.9rem] leading-[1.08] text-surface">
              {t.dilTitle}
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-surface/70">{t.dilBody}</p>
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {t.diligence.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="border-t border-line-dark pt-6">
                  <Icon name={d.icon} size={30} className="text-accent" />
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl text-surface">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface/65">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>{t.audEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-md">
              {t.audTitle}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-muted">{t.audBody}</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.audiences.map((a, i) => (
              <Reveal key={a.label} delay={i * 70}>
                <div className="flex items-center gap-4 rounded-sm border border-line bg-surface p-6">
                  <Icon name={a.icon} size={28} className="text-accent shrink-0" />
                  <span className="font-[family-name:var(--font-display)] text-lg text-ink">
                    {a.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-sm border border-line bg-surface p-10 text-center">
            <Icon name="Compass" size={30} className="mx-auto text-accent" />
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl text-ink">
              {t.advTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">{t.advBody}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryCta href={waHref(locale, t.advWaMsg)} external>
                <Icon name="WhatsappLogo" size={17} />
                {t.advWa}
              </PrimaryCta>
              <Link
                href={localeHref(locale, "/contact/")}
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:border-accent"
              >
                {t.advForm}
                <Icon name="ArrowRight" size={16} className="text-accent" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="py-14">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
            {t.disclaimer}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
