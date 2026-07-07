import type { Metadata } from "next";
import { waHref, pageAlternates, type Locale } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PropertyExplorer } from "@/components/PropertyExplorer";
import { PageHero, Section, Eyebrow, PrimaryCta, InvestBand } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  return {
    title: locale === "es" ? "Propiedades" : "Properties",
    description:
      locale === "es"
        ? "Propiedades e inversiones en Costa Rica: frente al mar, residencial, comercial y terrenos con potencial de desarrollo en Guanacaste, San José, Puntarenas y Cartago."
        : "Properties and investments in Costa Rica: beachfront, residential, commercial and land with development potential across Guanacaste, San José, Puntarenas and Cartago.",
    alternates: pageAlternates(locale, "/properties/"),
  };
}

const copy = {
  es: {
    eyebrow: "Propiedades",
    title: "Propiedades e inversiones en Costa Rica",
    lede: "Representamos propiedades residenciales, comerciales, frente al mar y de desarrollo en Guanacaste y todo Costa Rica. Explore nuestro inventario actual y consúltenos por cada oportunidad.",
    photoLabel: "Propiedad frente al mar en Costa Rica",
    breadcrumb: "Propiedades",
    exploreEyebrow: "Inventario",
    exploreTitle: "Oportunidades disponibles",
    exploreBody: "Estas son propiedades reales de nuestro portafolio, con su ubicación, precio y características. Escríbanos por WhatsApp para recibir la documentación completa y coordinar una visita. Inventario adicional se comparte de forma directa según su perfil.",
    noteTitle: "Inventario curado, compartido de forma directa",
    noteBody: "Además de las propiedades listadas, contamos con oportunidades que se presentan de forma directa y bajo confidencialidad. Escríbanos e indíquenos qué está buscando; le compartiremos las opciones que se ajusten a su perfil.",
    noteCta: "Consultar propiedades",
    noteWaMsg: "Buenos días, me gustaría conocer las propiedades disponibles en Costa Rica.",
    bandTitle: "¿Busca una propiedad o una oportunidad de inversión?",
    bandBody: "Ya sea para vivir, para su portafolio o para desarrollar, coordinemos una conversación y le presentaremos las opciones adecuadas.",
    bandEyebrow: "Compra e inversión",
  },
  en: {
    eyebrow: "Properties",
    title: "Properties and investments in Costa Rica",
    lede: "We represent residential, commercial, beachfront and development properties across Guanacaste and all of Costa Rica. Explore our current inventory and inquire about each opportunity.",
    photoLabel: "Beachfront property in Costa Rica",
    breadcrumb: "Properties",
    exploreEyebrow: "Inventory",
    exploreTitle: "Available opportunities",
    exploreBody: "These are real properties from our portfolio, with their location, price and features. Message us on WhatsApp for the full documentation and to arrange a visit. Additional inventory is shared directly based on your profile.",
    noteTitle: "Curated inventory, shared directly",
    noteBody: "Beyond the listed properties, we hold opportunities presented directly and under confidentiality. Write to us and tell us what you're looking for; we'll share the options that fit your profile.",
    noteCta: "Inquire about properties",
    noteWaMsg: "Good morning, I'd like to learn about the available properties in Costa Rica.",
    bandTitle: "Looking for a property or an investment opportunity?",
    bandBody: "Whether to live, for your portfolio or to develop, let's arrange a conversation and present the right options.",
    bandEyebrow: "Purchase and investment",
  },
} as const;

export default async function PropertiesPage({
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
        photoIcon="Waves"
        breadcrumb={[{ name: t.breadcrumb, path: "/properties/" }]}
      />

      <Section className="pt-4">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.exploreEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              {t.exploreTitle}
            </h2>
            <p className="mt-6 leading-relaxed text-ink-muted">{t.exploreBody}</p>
          </div>
        </Reveal>
        <div className="mt-12">
          <PropertyExplorer locale={locale} />
        </div>
      </Section>

      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-sm border border-line bg-surface p-10 text-center">
            <Icon name="ShieldCheck" size={30} className="mx-auto text-accent" />
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl text-ink">
              {t.noteTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">{t.noteBody}</p>
            <div className="mt-8 flex justify-center">
              <PrimaryCta href={waHref(locale, t.noteWaMsg)} external>
                <Icon name="WhatsappLogo" size={17} />
                {t.noteCta}
              </PrimaryCta>
            </div>
          </div>
        </Reveal>
      </Section>

      <InvestBand
        locale={locale}
        eyebrow={t.bandEyebrow}
        title={t.bandTitle}
        body={t.bandBody}
      />
    </>
  );
}
