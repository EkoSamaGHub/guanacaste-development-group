import type { Metadata } from "next";
import { projectTypes, waHref } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PhotoPending } from "@/components/PhotoPending";
import {
  PageHero,
  Section,
  Eyebrow,
  PrimaryCta,
  InvestBand,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Tipologías de desarrollo de Guanacaste Development Group: comunidades residenciales, hospitalidad, uso mixto, comercial y habilitación de terrenos en Guanacaste, Costa Rica.",
  alternates: { canonical: "/projects/" },
};

const phases = [
  {
    step: "01",
    icon: "MapTrifold",
    title: "Adquisición",
    body: "Identificación y adquisición estratégica de tierra con alto potencial de desarrollo.",
  },
  {
    step: "02",
    icon: "Blueprint",
    title: "Planificación maestra",
    body: "Diseño de comunidades que equilibran funcionalidad, sostenibilidad y valor.",
  },
  {
    step: "03",
    icon: "Path",
    title: "Desarrollo",
    body: "Gerencia integral de consultores, arquitectos, ingenieros y aprobaciones.",
  },
  {
    step: "04",
    icon: "HouseLine",
    title: "Entrega y venta",
    body: "Comercialización y entrega, con estrategia de ventas nacional e internacional.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Comunidades pensadas para perdurar"
        lede="Desarrollamos a través de varias tipologías —residencial, hospitalidad, comercial y de uso mixto— siempre con planificación maestra y visión de largo plazo."
        photoLabel="Proyecto en Guanacaste"
        photoIcon="Buildings"
        breadcrumb={[{ name: "Proyectos", path: "/projects/" }]}
      />

      <Section className="pt-4">
        <Reveal>
          <Eyebrow>Tipologías</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-xl">
            Las categorías de proyecto que desarrollamos
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projectTypes.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 90}>
              <article className="group overflow-hidden rounded-sm border border-line bg-surface">
                <PhotoPending
                  label={p.title}
                  icon={p.icon}
                  caption="Render de proyecto — por confirmar"
                  className="h-64"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                      {p.kind}
                    </span>
                    <span className="rounded-full border border-line px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-ink-muted">
                      Tipología representativa
                    </span>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">
                    {p.scope}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Development process — numbered, editorial */}
      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Cómo desarrollamos</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              Un proceso disciplinado, de principio a fin
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((ph, i) => (
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
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {ph.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Honest note — no fabricated closed transactions */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-sm border border-line bg-surface p-10 text-center">
            <Icon name="FileText" size={30} className="mx-auto text-accent" />
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl text-ink">
              Portafolio detallado a solicitud
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              La información específica de proyectos, cronogramas y
              disponibilidad se comparte de forma directa y bajo
              confidencialidad, según el perfil de cada comprador o
              inversionista. Escríbanos y con gusto le presentamos las
              oportunidades vigentes.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryCta href={waHref()} external>
                <Icon name="WhatsappLogo" size={17} />
                Solicitar el portafolio
              </PrimaryCta>
            </div>
          </div>
        </Reveal>
      </Section>

      <InvestBand />
    </>
  );
}
