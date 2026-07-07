import type { Metadata } from "next";
import { waHref } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import {
  PageHero,
  Section,
  Eyebrow,
  PrimaryCta,
} from "@/components/ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invertir",
  description:
    "Tesis de inversión inmobiliaria en Guanacaste, Costa Rica: estructuras de oportunidad, debida diligencia rigurosa y asesoría para inversionistas privados, family offices y socios de desarrollo.",
  alternates: { canonical: "/invest/" },
};

const structures = [
  {
    icon: "Buildings",
    title: "Coinversión en desarrollo",
    body: "Participación en proyectos residenciales, comerciales, hoteleros o de uso mixto, desde la fase de concepto hasta la entrega.",
  },
  {
    icon: "MapTrifold",
    title: "Adquisición de terrenos",
    body: "Adquisición estratégica de tierra con potencial de habilitación, zonificación y plusvalía a largo plazo.",
  },
  {
    icon: "Sparkle",
    title: "Activos residenciales de lujo",
    body: "Residencias y condominios de alta gama orientados a renta, plusvalía o uso propio del inversionista.",
  },
  {
    icon: "Handshake",
    title: "Alianzas y empresas conjuntas",
    body: "Estructuras conjuntas con propietarios, desarrolladores y socios institucionales para proyectos de mayor escala.",
  },
];

const diligence = [
  {
    icon: "ChartLineUp",
    title: "Análisis de mercado",
    body: "Estudio de demanda, comparables y dinámica de la zona antes de comprometer capital.",
  },
  {
    icon: "Coins",
    title: "Modelación financiera",
    body: "Proyecciones, escenarios y estructura de capital construidas caso por caso.",
  },
  {
    icon: "Scales",
    title: "Revisión legal y de zonificación",
    body: "Verificación de títulos, uso de suelo, permisos y marco regulatorio aplicable.",
  },
  {
    icon: "Leaf",
    title: "Evaluación ambiental",
    body: "Consideraciones ambientales y de sostenibilidad integradas a la factibilidad.",
  },
];

const audiences = [
  { icon: "Coins", label: "Inversionistas privados" },
  { icon: "Users", label: "Family offices" },
  { icon: "Handshake", label: "Socios de desarrollo" },
  { icon: "Globe", label: "Inversionistas internacionales" },
];

export default function InvestPage() {
  return (
    <>
      <PageHero
        eyebrow="Inversión"
        title="Exposición a uno de los mercados de mayor proyección de Costa Rica"
        lede="Estructuramos y presentamos oportunidades de inversión inmobiliaria en Guanacaste para inversionistas privados, family offices y socios de desarrollo — siempre con rigor y transparencia."
        photoLabel="Sitios de desarrollo e inversión en Guanacaste"
        photoIcon="ChartLineUp"
        breadcrumb={[{ name: "Invertir", path: "/invest/" }]}
      />

      {/* Thesis */}
      <Section className="pt-4">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <Eyebrow>La tesis</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-lg">
              Un mercado con fundamentos de largo plazo
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="leading-relaxed text-ink-muted">
              Guanacaste combina litoral del Pacífico, conectividad
              internacional, estabilidad institucional y un mercado
              inmobiliario en crecimiento. Nuestra presencia local nos permite
              identificar oportunidades con potencial real y acompañarlas con la
              disciplina de una firma de inversión.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Nuestro enfoque prioriza la creación de valor sostenido{" "}
              —desarrollo responsable, planificación maestra y horizontes de
              largo plazo— por encima de la especulación de corto plazo.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Opportunity structures */}
      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Estructuras de oportunidad</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              Distintas formas de participar
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {structures.map((s, i) => (
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

      {/* Due diligence — the one committed dark field on this page */}
      <section className="bg-accent-2 text-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow">Debida diligencia</p>
            <h2 className="mt-5 max-w-2xl text-3xl sm:text-4xl lg:text-[2.9rem] leading-[1.08] text-surface">
              El rigor es la base de toda decisión de inversión
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-surface/70">
              Cada oportunidad se somete a un proceso estructurado antes de
              presentarse. No comprometemos capital —ni el suyo ni el nuestro—
              sin fundamento.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {diligence.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="border-t border-line-dark pt-6">
                  <Icon name={d.icon} size={30} className="text-accent" />
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl text-surface">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface/65">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Para quién trabajamos</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-md">
              Acompañamos a inversionistas exigentes
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-muted">
              Guiamos a inversionistas nacionales e internacionales por el
              mercado inmobiliario de Costa Rica, ayudándoles a identificar
              oportunidades, gestionar el riesgo y construir portafolios de
              largo plazo.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {audiences.map((a, i) => (
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

      {/* Advisory CTA */}
      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-sm border border-line bg-surface p-10 text-center">
            <Icon name="Compass" size={30} className="mx-auto text-accent" />
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl text-ink">
              Asesoría al inversionista
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Coordinemos una conversación confidencial para entender su tesis y
              presentarle las oportunidades vigentes. Sin compromiso.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryCta
                href={waHref(
                  "Buenos días, soy inversionista y me interesa conocer las oportunidades en Guanacaste.",
                )}
                external
              >
                <Icon name="WhatsappLogo" size={17} />
                Hablar con un asesor
              </PrimaryCta>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:border-accent"
              >
                Formulario de contacto
                <Icon name="ArrowRight" size={16} className="text-accent" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Honest disclosure — no guaranteed returns, no fabricated figures */}
      <Section className="py-14">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
            La información de esta página es de carácter general e ilustrativo y
            no constituye una oferta de valores, una recomendación de inversión
            ni asesoría legal, financiera o fiscal. No garantizamos rendimientos.
            Toda inversión conlleva riesgo y está sujeta a debida diligencia y
            confirmación.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
