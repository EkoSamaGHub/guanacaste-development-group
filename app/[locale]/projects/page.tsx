import type { Metadata } from "next";
import { projectTypes, localeHref, pageAlternates, type Locale } from "@/lib/site";
import { listings, formatPrice } from "@/lib/listings";
import { Icon } from "@/lib/icon";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteImage } from "@/components/SiteImage";
import { PageHero, Section, Eyebrow, PrimaryCta, InvestBand } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  return {
    title: locale === "es" ? "Proyectos" : "Projects",
    description:
      locale === "es"
        ? "Tipologías de desarrollo y oportunidades vigentes de Guanacaste Development Group: comunidades residenciales, hospitalidad, uso mixto, comercial y habilitación de terrenos en Costa Rica."
        : "Development typologies and current opportunities from Guanacaste Development Group: residential communities, hospitality, mixed-use, commercial and land entitlement in Costa Rica.",
    alternates: pageAlternates(locale, "/projects/"),
  };
}

const copy = {
  es: {
    eyebrow: "Portafolio",
    title: "Comunidades pensadas para perdurar",
    lede: "Desarrollamos a través de varias tipologías —residencial, hospitalidad, comercial y de uso mixto— siempre con planificación maestra y visión de largo plazo.",
    photoLabel: "Proyecto en Guanacaste",
    breadcrumb: "Proyectos",
    typEyebrow: "Tipologías",
    typTitle: "Las categorías de proyecto que desarrollamos",
    typTag: "Tipología representativa",
    projectCaption: "Render de proyecto — por confirmar",
    oppEyebrow: "Oportunidades vigentes",
    oppTitle: "Sitios de desarrollo disponibles hoy",
    oppBody: "Terrenos reales con potencial de habilitación y desarrollo, actualmente en nuestro portafolio.",
    oppCta: "Ver todas las propiedades",
    procEyebrow: "Cómo desarrollamos",
    procTitle: "Un proceso disciplinado, de principio a fin",
    noteTitle: "Portafolio detallado a solicitud",
    noteBody: "La información específica de proyectos, cronogramas y disponibilidad se comparte de forma directa y bajo confidencialidad, según el perfil de cada comprador o inversionista. Escríbanos y con gusto le presentamos las oportunidades vigentes.",
    noteCta: "Solicitar el portafolio",
    phases: [
      { step: "01", icon: "MapTrifold", title: "Adquisición", body: "Identificación y adquisición estratégica de tierra con alto potencial de desarrollo." },
      { step: "02", icon: "Blueprint", title: "Planificación maestra", body: "Diseño de comunidades que equilibran funcionalidad, sostenibilidad y valor." },
      { step: "03", icon: "Path", title: "Desarrollo", body: "Gerencia integral de consultores, arquitectos, ingenieros y aprobaciones." },
      { step: "04", icon: "HouseLine", title: "Entrega y venta", body: "Comercialización y entrega, con estrategia de ventas nacional e internacional." },
    ],
  },
  en: {
    eyebrow: "Portfolio",
    title: "Communities built to last",
    lede: "We develop across several typologies — residential, hospitality, commercial and mixed-use — always with master planning and a long-term vision.",
    photoLabel: "Project in Guanacaste",
    breadcrumb: "Projects",
    typEyebrow: "Typologies",
    typTitle: "The project categories we develop",
    typTag: "Representative typology",
    projectCaption: "Project rendering — to be confirmed",
    oppEyebrow: "Current opportunities",
    oppTitle: "Development sites available today",
    oppBody: "Real land with entitlement and development potential, currently in our portfolio.",
    oppCta: "View all properties",
    procEyebrow: "How we develop",
    procTitle: "A disciplined process, from start to finish",
    noteTitle: "Detailed portfolio on request",
    noteBody: "Specific project information, timelines and availability are shared directly and under confidentiality, based on each buyer's or investor's profile. Write to us and we'll gladly present current opportunities.",
    noteCta: "Request the portfolio",
    phases: [
      { step: "01", icon: "MapTrifold", title: "Acquisition", body: "Strategic identification and acquisition of land with high development potential." },
      { step: "02", icon: "Blueprint", title: "Master planning", body: "Designing communities that balance functionality, sustainability and value." },
      { step: "03", icon: "Path", title: "Development", body: "End-to-end management of consultants, architects, engineers and approvals." },
      { step: "04", icon: "HouseLine", title: "Delivery and sale", body: "Marketing and delivery, with a national and international sales strategy." },
    ],
  },
} as const;

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const t = copy[locale];
  // The real development sites in the portfolio (land parcels for development).
  const devSites = listings.filter((l) => l.category === "land");
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        lede={t.lede}
        image="/site/commercial-2.jpg"
        imageAlt={t.photoLabel}
        breadcrumb={[{ name: t.breadcrumb, path: "/projects/" }]}
      />

      <Section className="pt-4">
        <Reveal>
          <Eyebrow>{t.typEyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-xl">
            {t.typTitle}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projectTypes.map((p, i) => (
            <Reveal key={p.title.en} delay={(i % 2) * 90}>
              <article className="group overflow-hidden rounded-sm border border-line bg-surface">
                <SiteImage
                  src={p.image}
                  alt={p.title[locale]}
                  className="h-64"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                      {p.kind[locale]}
                    </span>
                    <span className="rounded-full border border-line px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-ink-muted">
                      {t.typTag}
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-ink">
                    {p.title[locale]}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">{p.scope[locale]}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Current development opportunities — REAL land parcels from the portfolio */}
      <Section className="bg-surface/60 border-y border-line">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow>{t.oppEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-xl">
              {t.oppTitle}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-muted">{t.oppBody}</p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {devSites.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 3) * 70}>
              <Link
                href={localeHref(locale, `/properties/${l.slug}/`)}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-surface"
              >
                <div className="aspect-[16/10] overflow-hidden bg-line/40">
                  <img
                    src={l.photos[0]}
                    alt={`${l.title[locale]} — ${l.location[locale]}`}
                    width={l.coverWidth}
                    height={l.coverHeight}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-lg leading-snug text-ink">
                    {l.title[locale]}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-muted">
                    <Icon name="MapPin" size={15} className="text-accent shrink-0" />
                    {l.location[locale]}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-accent/40 pt-3">
                    <span className="font-[family-name:var(--font-display)] text-ink">
                      {formatPrice(l, locale)}
                    </span>
                    <Icon name="ArrowUpRight" size={16} className="text-gold-ink" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.procEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              {t.procTitle}
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.phases.map((ph, i) => (
            <Reveal key={ph.step} delay={i * 80}>
              <div className="h-full border-t-2 border-accent/50 pt-6">
                <div className="flex items-center justify-between">
                  <Icon name={ph.icon} size={28} className="text-accent" />
                  <span className="font-[family-name:var(--font-display)] text-2xl text-line">
                    {ph.step}
                  </span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl text-ink">
                  {ph.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{ph.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-sm border border-line bg-surface p-10 text-center">
            <Icon name="FileText" size={30} className="mx-auto text-accent" />
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl text-ink">
              {t.noteTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">{t.noteBody}</p>
            <div className="mt-8 flex justify-center">
              <PrimaryCta href={localeHref(locale, "/properties/")}>
                {t.noteCta}
              </PrimaryCta>
            </div>
          </div>
        </Reveal>
      </Section>

      <InvestBand locale={locale} />
    </>
  );
}
