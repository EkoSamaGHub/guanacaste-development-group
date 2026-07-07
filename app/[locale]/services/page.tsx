import type { Metadata } from "next";
import { services, pageAlternates, type Locale } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, Eyebrow, InvestBand } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  return {
    title: locale === "es" ? "Servicios" : "Services",
    description:
      locale === "es"
        ? "Doce capacidades integradas: desarrollo inmobiliario, adquisición de terrenos, planificación maestra, factibilidad, gerencia de proyectos, asesoría al inversionista y más, en Guanacaste, Costa Rica."
        : "Twelve integrated capabilities: real estate development, land acquisition, master planning, feasibility, project management, investor advisory and more, in Guanacaste, Costa Rica.",
    alternates: pageAlternates(locale, "/services/"),
  };
}

const copy = {
  es: {
    eyebrow: "Capacidades",
    title: "El ciclo completo del desarrollo y la inversión",
    lede: "Doce disciplinas integradas bajo un mismo estándar — del terreno a la entrega, y de la factibilidad a la estructuración de inversión.",
    photoLabel: "Planos y sitios de desarrollo",
    breadcrumb: "Servicios",
    oneEyebrow: "Un solo interlocutor",
    oneTitle: "Integramos cada disciplina bajo un mismo estándar",
    oneBody: "Coordinar desarrollo, inversión, planificación y comercialización desde un solo equipo reduce la fricción, protege el valor y acelera la ejecución. Cuéntenos su objetivo y le indicamos cómo podemos acompañarlo.",
    bandEyebrow: "Empecemos",
    bandTitle: "¿Cuál de estas capacidades necesita hoy?",
    bandBody: "Escríbanos y coordinaremos una conversación para entender su proyecto o su tesis de inversión y proponerle el acompañamiento adecuado.",
  },
  en: {
    eyebrow: "Capabilities",
    title: "The full cycle of development and investment",
    lede: "Twelve disciplines integrated under a single standard — from land to delivery, and from feasibility to investment structuring.",
    photoLabel: "Plans and development sites",
    breadcrumb: "Services",
    oneEyebrow: "A single point of contact",
    oneTitle: "We integrate every discipline under one standard",
    oneBody: "Coordinating development, investment, planning and marketing from a single team reduces friction, protects value and accelerates execution. Tell us your objective and we'll show you how we can support you.",
    bandEyebrow: "Let's begin",
    bandTitle: "Which of these capabilities do you need today?",
    bandBody: "Write to us and we'll arrange a conversation to understand your project or investment thesis and propose the right support.",
  },
} as const;

export default async function ServicesPage({
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
        photoLabel={t.photoLabel}
        photoIcon="Blueprint"
        breadcrumb={[{ name: t.breadcrumb, path: "/services/" }]}
      />

      <Section className="pt-4">
        <div className="grid gap-x-16 gap-y-0 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={(i % 2) * 80}>
              <article className="group flex gap-6 border-t border-line py-8">
                <span className="font-[family-name:var(--font-display)] text-2xl text-gold-ink w-10 shrink-0 leading-none pt-1">
                  {s.index}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <Icon name={s.icon} size={24} className="text-ink" />
                    <h2 className="font-[family-name:var(--font-display)] text-xl text-ink">
                      {s.title[locale]}
                    </h2>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-muted">{s.body[locale]}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/60 border-y border-line py-16">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{t.oneEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              {t.oneTitle}
            </h2>
            <p className="mt-6 leading-relaxed text-ink-muted">{t.oneBody}</p>
          </div>
        </Reveal>
      </Section>

      <InvestBand locale={locale} eyebrow={t.bandEyebrow} title={t.bandTitle} body={t.bandBody} />
    </>
  );
}
