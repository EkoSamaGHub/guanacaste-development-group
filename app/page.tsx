import { services, projectTypes, waHref } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PhotoPending } from "@/components/PhotoPending";
import {
  PrimaryCta,
  GhostCta,
  Section,
  Eyebrow,
  InvestBand,
  CredibilityStrip,
} from "@/components/ui";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Inicio", path: "/" }]} />

      {/* ── Cinematic hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="photo-pending absolute inset-0" aria-hidden="true" />
        {/* single restrained navy overlay for headline legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-accent-2/90 via-accent-2/45 to-accent-2/25"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 pb-20 sm:pb-28 pt-40">
          <div className="max-w-3xl">
            <Reveal priority>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-accent">
                Guanacaste, Costa Rica
              </p>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-surface">
                Desarrollo e inversión inmobiliaria de nivel institucional
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-surface/80">
                Concebimos, desarrollamos y comercializamos comunidades
                residenciales, comerciales, hoteleras y de uso mixto en una de
                las regiones de mayor crecimiento de Costa Rica — con rigor,
                sostenibilidad y una visión de valor a largo plazo.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <PrimaryCta href="/invest/">Explorar la inversión</PrimaryCta>
                <a
                  href={waHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-surface/30 px-7 py-3.5 text-sm font-medium tracking-wide text-surface transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name="WhatsappLogo" size={17} />
                  Hablemos
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <p className="absolute bottom-5 right-5 text-[0.62rem] uppercase tracking-[0.2em] text-surface/40">
          Fotografía de Guanacaste por incorporar
        </p>
      </section>

      <CredibilityStrip />

      {/* ── Positioning ────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <Reveal>
            <PhotoPending
              label="Paisaje y sitios de desarrollo en Guanacaste"
              icon="MapPin"
              className="aspect-[4/5] rounded-sm"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>La firma</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.1] text-ink max-w-xl">
              Una firma de desarrollo e inversión, no una correduría
              tradicional
            </h2>
            <p className="mt-7 max-w-xl leading-relaxed text-ink-muted">
              Guanacaste Development Group acompaña cada proyecto desde la
              adquisición estratégica de tierra hasta la entrega y la venta,
              integrando planificación maestra, factibilidad, gerencia de
              proyectos y estructuración de inversión bajo un mismo estándar.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">
              Trabajamos con propietarios, inversionistas, family offices,
              arquitectos y actores locales para dar vida a comunidades
              sostenibles que perduran.
            </p>
            <div className="mt-8">
              <GhostCta href="/about/">Conozca nuestra filosofía</GhostCta>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Project typologies ─────────────────────────────────────── */}
      <Section className="bg-surface/60 border-y border-line">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Eyebrow>Portafolio</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-xl">
              Las tipologías que desarrollamos
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <GhostCta href="/projects/">Ver todos los proyectos</GhostCta>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projectTypes.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-sm border border-line bg-surface">
                <PhotoPending
                  label={p.title}
                  icon={p.icon}
                  caption="Render de proyecto — por confirmar"
                  className="h-52"
                />
                <div className="p-7">
                  <div className="flex items-center gap-2 text-gold-ink">
                    <span className="h-px w-6 bg-accent" />
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]">
                      {p.kind}
                    </span>
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {p.scope}
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
            <Eyebrow>Capacidades</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-md">
              Doce disciplinas, un solo estándar
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-muted">
              Del terreno a la entrega, cubrimos el ciclo completo del
              desarrollo inmobiliario y la inversión, con la profundidad de una
              firma global y el conocimiento de un actor local.
            </p>
            <div className="mt-8">
              <GhostCta href="/services/">Ver todas las capacidades</GhostCta>
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
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {s.body}
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
            <Eyebrow>Por qué Guanacaste</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              Una de las regiones de mayor proyección de Costa Rica
            </h2>
            <p className="mt-6 leading-relaxed text-ink-muted">
              Guanacaste combina playas del Pacífico, conectividad
              internacional y un mercado inmobiliario en crecimiento. Nuestra
              presencia local nos permite identificar oportunidades con
              potencial real y desarrollarlas con responsabilidad ambiental y
              comunitaria.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: "Waves",
              title: "Litoral del Pacífico",
              body: "Propiedades frente al mar y comunidades cercanas a las playas más reconocidas de la región.",
            },
            {
              icon: "Compass",
              title: "Conectividad",
              body: "Acceso a corredores de infraestructura y a la conectividad internacional de la provincia.",
            },
            {
              icon: "Leaf",
              title: "Desarrollo responsable",
              body: "Planificación que equilibra el valor de inversión con la sostenibilidad del entorno.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="h-full rounded-sm border border-line bg-surface p-7">
                <Icon name={f.icon} size={30} className="text-accent" />
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <InvestBand />
    </>
  );
}
