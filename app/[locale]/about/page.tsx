import type { Metadata } from "next";
import { pageAlternates, type Locale } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { SiteImage } from "@/components/SiteImage";
import { PageHero, Section, Eyebrow, InvestBand } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  return {
    title: locale === "es" ? "La firma" : "The firm",
    description:
      locale === "es"
        ? "Guanacaste Development Group es una firma de desarrollo e inversión inmobiliaria enfocada en el crecimiento sostenible y el valor de largo plazo en Guanacaste, Costa Rica."
        : "Guanacaste Development Group is a real estate development and investment firm focused on sustainable growth and long-term value in Guanacaste, Costa Rica.",
    alternates: pageAlternates(locale, "/about/"),
  };
}

const copy = {
  es: {
    eyebrow: "La firma",
    title: (
      <>
        Una visión de desarrollo <br className="hidden sm:block" />
        de clase mundial para Guanacaste
      </>
    ),
    lede: "Guanacaste Development Group reúne desarrollo, inversión y planificación maestra bajo un mismo estándar, con la ambición de una firma global y el conocimiento profundo de un actor local.",
    photoLabel: "El equipo y los sitios de Guanacaste",
    breadcrumb: "La firma",
    storyEyebrow: "Nuestra historia",
    storyTitle: "Del concepto a la comunidad, con propósito",
    storyP1: "Nacimos con la convicción de que Guanacaste merece un desarrollo a la altura de su belleza y su potencial. Combinamos la disciplina de una firma de inversión con la sensibilidad de quien conoce y respeta la región.",
    storyP2: "Acompañamos cada proyecto en su ciclo completo —adquisición de tierra, planificación maestra, factibilidad, gerencia, comercialización y estructuración de inversión— para entregar comunidades que crean valor duradero.",
    storyPhoto: "Sitios de desarrollo y paisaje de Guanacaste",
    philEyebrow: "Filosofía",
    philTitle: "Los principios que guían cada proyecto",
    whyPhoto: "Costa del Pacífico, Guanacaste",
    whyEyebrow: "Por qué Guanacaste",
    whyTitle: "Una región con proyección internacional",
    whyP1: "Guanacaste ofrece una combinación singular de litoral del Pacífico, conectividad internacional, estabilidad y un mercado inmobiliario en crecimiento. Nuestra presencia local nos permite anticipar oportunidades y desarrollarlas con responsabilidad.",
    whyP2: "Mantenemos nuestro enfoque exclusivamente en esta región para profundizar el conocimiento del mercado y honrar el compromiso con las comunidades que la habitan.",
    bandEyebrow: "Trabajemos juntos",
    bandTitle: "Conversemos sobre su próximo proyecto o inversión",
    bandBody: "Estamos abiertos a nuevas alianzas con propietarios, inversionistas y socios de desarrollo que compartan nuestra visión de valor a largo plazo.",
    principles: [
      { icon: "Leaf", title: "Sostenibilidad primero", body: "Desarrollamos comunidades que respetan el entorno natural de Guanacaste y crean valor perdurable para sus residentes y su ecosistema." },
      { icon: "ShieldCheck", title: "Rigor institucional", body: "Cada decisión se sustenta en debida diligencia, análisis de mercado, modelación financiera y evaluación de riesgo." },
      { icon: "Handshake", title: "Alianzas de largo plazo", body: "Construimos relaciones duraderas con propietarios, inversionistas, family offices y actores locales." },
      { icon: "ChartLineUp", title: "Valor a largo plazo", body: "Priorizamos la creación de valor sostenido por encima de la ganancia de corto plazo, en cada proyecto." },
    ],
  },
  en: {
    eyebrow: "The firm",
    title: (
      <>
        A world-class development vision <br className="hidden sm:block" />
        for Guanacaste
      </>
    ),
    lede: "Guanacaste Development Group brings development, investment and master planning together under a single standard — with the ambition of a global firm and the deep knowledge of a local player.",
    photoLabel: "The team and the sites of Guanacaste",
    breadcrumb: "The firm",
    storyEyebrow: "Our story",
    storyTitle: "From concept to community, with purpose",
    storyP1: "We were founded on the conviction that Guanacaste deserves development worthy of its beauty and its potential. We combine the discipline of an investment firm with the sensibility of those who know and respect the region.",
    storyP2: "We accompany each project through its full cycle — land acquisition, master planning, feasibility, management, marketing and investment structuring — to deliver communities that create lasting value.",
    storyPhoto: "Development sites and Guanacaste landscape",
    philEyebrow: "Philosophy",
    philTitle: "The principles that guide every project",
    whyPhoto: "Pacific coast, Guanacaste",
    whyEyebrow: "Why Guanacaste",
    whyTitle: "A region with international standing",
    whyP1: "Guanacaste offers a singular combination of Pacific coastline, international connectivity, stability and a growing real estate market. Our local presence lets us anticipate opportunities and develop them responsibly.",
    whyP2: "We keep our focus exclusively on this region to deepen our market knowledge and honor our commitment to the communities that inhabit it.",
    bandEyebrow: "Let's work together",
    bandTitle: "Let's talk about your next project or investment",
    bandBody: "We are open to new partnerships with landowners, investors and development partners who share our long-term view of value.",
    principles: [
      { icon: "Leaf", title: "Sustainability first", body: "We develop communities that respect Guanacaste's natural environment and create enduring value for their residents and ecosystem." },
      { icon: "ShieldCheck", title: "Institutional rigor", body: "Every decision rests on due diligence, market analysis, financial modeling and risk assessment." },
      { icon: "Handshake", title: "Long-term partnerships", body: "We build lasting relationships with landowners, investors, family offices and local stakeholders." },
      { icon: "ChartLineUp", title: "Long-term value", body: "We prioritize sustained value creation over short-term gain, on every project." },
    ],
  },
} as const;

export default async function AboutPage({
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
        image="/site/coast.jpg"
        imageAlt={t.photoLabel}
        breadcrumb={[{ name: t.breadcrumb, path: "/about/" }]}
      />

      <Section className="pt-4">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow>{t.storyEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-xl">
              {t.storyTitle}
            </h2>
            <p className="mt-7 leading-relaxed text-ink-muted max-w-xl">{t.storyP1}</p>
            <p className="mt-4 leading-relaxed text-ink-muted max-w-xl">{t.storyP2}</p>
          </Reveal>
          <Reveal delay={100}>
            <SiteImage
              src="/site/development.jpg"
              alt={t.storyPhoto}
              className="aspect-[4/5] rounded-sm"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.philEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              {t.philTitle}
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {t.principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex gap-5 border-t border-line pt-6">
                <Icon name={p.icon} size={30} className="text-accent shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SiteImage
              src="/site/beach-2.jpg"
              alt={t.whyPhoto}
              className="aspect-[5/4] rounded-sm"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>{t.whyEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-lg">
              {t.whyTitle}
            </h2>
            <p className="mt-7 leading-relaxed text-ink-muted max-w-xl">{t.whyP1}</p>
            <p className="mt-4 leading-relaxed text-ink-muted max-w-xl">{t.whyP2}</p>
          </Reveal>
        </div>
      </Section>

      <InvestBand locale={locale} eyebrow={t.bandEyebrow} title={t.bandTitle} body={t.bandBody} />
    </>
  );
}
