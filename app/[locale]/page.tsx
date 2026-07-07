import { services, projectTypes, waHref, localeHref, type Locale } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { SiteImage } from "@/components/SiteImage";
import {
  PrimaryCta,
  GhostCta,
  Section,
  Eyebrow,
  InvestBand,
  CredibilityStrip,
} from "@/components/ui";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const copy = {
  es: {
    region: "Guanacaste, Costa Rica",
    heroTitle: "Desarrollo e inversión inmobiliaria de nivel institucional",
    heroLede:
      "Concebimos, desarrollamos y comercializamos comunidades residenciales, comerciales, hoteleras y de uso mixto en una de las regiones de mayor crecimiento de Costa Rica — con rigor, sostenibilidad y una visión de valor a largo plazo.",
    heroCta: "Explorar la inversión",
    heroTalk: "Hablemos",
    heroPhoto: "Fotografía de Guanacaste por incorporar",
    firmEyebrow: "La firma",
    firmTitle: "Una firma de desarrollo e inversión, no una correduría tradicional",
    firmP1:
      "Guanacaste Development Group acompaña cada proyecto desde la adquisición estratégica de tierra hasta la entrega y la venta, integrando planificación maestra, factibilidad, gerencia de proyectos y estructuración de inversión bajo un mismo estándar.",
    firmP2:
      "Trabajamos con propietarios, inversionistas, family offices, arquitectos y actores locales para dar vida a comunidades sostenibles que perduran.",
    firmCta: "Conozca nuestra filosofía",
    firmPhoto: "Paisaje y sitios de desarrollo en Guanacaste",
    portfolioEyebrow: "Portafolio",
    portfolioTitle: "Las tipologías que desarrollamos",
    portfolioCta: "Ver todos los proyectos",
    projectCaption: "Render de proyecto — por confirmar",
    capsEyebrow: "Capacidades",
    capsTitle: "Doce disciplinas, un solo estándar",
    capsBody:
      "Del terreno a la entrega, cubrimos el ciclo completo del desarrollo inmobiliario y la inversión, con la profundidad de una firma global y el conocimiento de un actor local.",
    capsCta: "Ver todas las capacidades",
    whyEyebrow: "Por qué Guanacaste",
    whyTitle: "Una de las regiones de mayor proyección de Costa Rica",
    whyBody:
      "Guanacaste combina playas del Pacífico, conectividad internacional y un mercado inmobiliario en crecimiento. Nuestra presencia local nos permite identificar oportunidades con potencial real y desarrollarlas con responsabilidad ambiental y comunitaria.",
    why: [
      { icon: "Waves", title: "Litoral del Pacífico", body: "Propiedades frente al mar y comunidades cercanas a las playas más reconocidas de la región." },
      { icon: "Compass", title: "Conectividad", body: "Acceso a corredores de infraestructura y a la conectividad internacional de la provincia." },
      { icon: "Leaf", title: "Desarrollo responsable", body: "Planificación que equilibra el valor de inversión con la sostenibilidad del entorno." },
    ],
  },
  en: {
    region: "Guanacaste, Costa Rica",
    heroTitle: "Institutional-grade real estate development and investment",
    heroLede:
      "We conceive, develop and market residential, commercial, hospitality and mixed-use communities in one of Costa Rica's fastest-growing regions — with rigor, sustainability and a long-term view of value.",
    heroCta: "Explore investment",
    heroTalk: "Let's talk",
    heroPhoto: "Guanacaste photography to be added",
    firmEyebrow: "The firm",
    firmTitle: "A development and investment firm, not a traditional brokerage",
    firmP1:
      "Guanacaste Development Group guides every project from strategic land acquisition through delivery and sale, integrating master planning, feasibility, project management and investment structuring under a single standard.",
    firmP2:
      "We work with landowners, investors, family offices, architects and local stakeholders to bring to life sustainable communities built to last.",
    firmCta: "Discover our philosophy",
    firmPhoto: "Guanacaste landscape and development sites",
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "The typologies we develop",
    portfolioCta: "View all projects",
    projectCaption: "Project rendering — to be confirmed",
    capsEyebrow: "Capabilities",
    capsTitle: "Twelve disciplines, one standard",
    capsBody:
      "From land to delivery, we cover the full cycle of real estate development and investment, with the depth of a global firm and the knowledge of a local player.",
    capsCta: "View all capabilities",
    whyEyebrow: "Why Guanacaste",
    whyTitle: "One of Costa Rica's most promising regions",
    whyBody:
      "Guanacaste combines Pacific beaches, international connectivity and a growing real estate market. Our local presence lets us identify opportunities with real potential and develop them with environmental and community responsibility.",
    why: [
      { icon: "Waves", title: "Pacific coastline", body: "Beachfront properties and communities near the region's most renowned beaches." },
      { icon: "Compass", title: "Connectivity", body: "Access to infrastructure corridors and the province's international connectivity." },
      { icon: "Leaf", title: "Responsible development", body: "Planning that balances investment value with the sustainability of the surroundings." },
    ],
  },
} as const;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const t = copy[locale];
  const home = locale === "es" ? "Inicio" : "Home";

  return (
    <>
      <BreadcrumbJsonLd locale={locale} items={[{ name: home, path: "/" }]} />

      {/* ── Cinematic hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        {/* Real Guanacaste hero — the page LCP: eager + high priority. */}
        <img
          src="/site/hero.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-accent-2/95 via-accent-2/55 to-accent-2/35"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 pb-20 sm:pb-28 pt-40">
          <div className="max-w-3xl">
            <Reveal priority>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-accent">
                {t.region}
              </p>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-surface">
                {t.heroTitle}
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-surface/80">
                {t.heroLede}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <PrimaryCta href={localeHref(locale, "/invest/")}>{t.heroCta}</PrimaryCta>
                <a
                  href={waHref(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-surface/30 px-7 py-3.5 text-sm font-medium tracking-wide text-surface transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name="WhatsappLogo" size={17} />
                  {t.heroTalk}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CredibilityStrip locale={locale} />

      {/* ── Positioning ────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <Reveal>
            <SiteImage
              src="/site/development.jpg"
              alt={t.firmPhoto}
              className="aspect-[4/5] rounded-sm"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>{t.firmEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.1] text-ink max-w-xl">
              {t.firmTitle}
            </h2>
            <p className="mt-7 max-w-xl leading-relaxed text-ink-muted">{t.firmP1}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">{t.firmP2}</p>
            <div className="mt-8">
              <GhostCta href={localeHref(locale, "/about/")}>{t.firmCta}</GhostCta>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Project typologies ─────────────────────────────────────── */}
      <Section className="bg-surface/60 border-y border-line">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow>{t.portfolioEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-xl">
              {t.portfolioTitle}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <GhostCta href={localeHref(locale, "/projects/")}>{t.portfolioCta}</GhostCta>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projectTypes.map((p, i) => (
            <Reveal key={p.title.en} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-sm border border-line bg-surface">
                <SiteImage
                  src={p.image}
                  alt={p.title[locale]}
                  className="h-52"
                />
                <div className="p-7">
                  <div className="flex items-center gap-2 text-gold-ink">
                    <span className="h-px w-6 bg-accent" />
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]">
                      {p.kind[locale]}
                    </span>
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl text-ink">
                    {p.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {p.scope[locale]}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Services preview ───────────────────────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>{t.capsEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-md">
              {t.capsTitle}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-muted">{t.capsBody}</p>
            <div className="mt-8">
              <GhostCta href={localeHref(locale, "/services/")}>{t.capsCta}</GhostCta>
            </div>
          </Reveal>
          <div className="divide-y divide-line border-t border-line">
            {services.slice(0, 5).map((s, i) => (
              <Reveal key={s.index} delay={i * 60}>
                <div className="flex gap-5 py-5">
                  <span className="font-[family-name:var(--font-display)] text-gold-ink text-lg w-8 shrink-0">
                    {s.index}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-ink">
                      {s.title[locale]}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {s.body[locale]}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Why Guanacaste ─────────────────────────────────────────── */}
      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.whyEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              {t.whyTitle}
            </h2>
            <p className="mt-6 leading-relaxed text-ink-muted">{t.whyBody}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {t.why.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="h-full rounded-sm border border-line bg-surface p-7">
                <Icon name={f.icon} size={30} className="text-accent" />
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <InvestBand locale={locale} />
    </>
  );
}
