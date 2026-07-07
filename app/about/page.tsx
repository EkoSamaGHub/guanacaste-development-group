import type { Metadata } from "next";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PhotoPending } from "@/components/PhotoPending";
import {
  PageHero,
  Section,
  Eyebrow,
  InvestBand,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "La firma",
  description:
    "Guanacaste Development Group es una firma de desarrollo e inversión inmobiliaria enfocada en el crecimiento sostenible y el valor de largo plazo en Guanacaste, Costa Rica.",
  alternates: { canonical: "/about/" },
};

const principles = [
  {
    icon: "Leaf",
    title: "Sostenibilidad primero",
    body: "Desarrollamos comunidades que respetan el entorno natural de Guanacaste y crean valor perdurable para sus residentes y su ecosistema.",
  },
  {
    icon: "ShieldCheck",
    title: "Rigor institucional",
    body: "Cada decisión se sustenta en debida diligencia, análisis de mercado, modelación financiera y evaluación de riesgo.",
  },
  {
    icon: "Handshake",
    title: "Alianzas de largo plazo",
    body: "Construimos relaciones duraderas con propietarios, inversionistas, family offices y actores locales.",
  },
  {
    icon: "ChartLineUp",
    title: "Valor a largo plazo",
    body: "Priorizamos la creación de valor sostenido por encima de la ganancia de corto plazo, en cada proyecto.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="La firma"
        title={
          <>
            Una visión de desarrollo <br className="hidden sm:block" />
            de clase mundial para Guanacaste
          </>
        }
        lede="Guanacaste Development Group reúne desarrollo, inversión y planificación maestra bajo un mismo estándar, con la ambición de una firma global y el conocimiento profundo de un actor local."
        photoLabel="El equipo y los sitios de Guanacaste"
        photoIcon="Users"
        breadcrumb={[{ name: "La firma", path: "/about/" }]}
      />

      <Section className="pt-4">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Nuestra historia</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-xl">
              Del concepto a la comunidad, con propósito
            </h2>
            <p className="mt-7 leading-relaxed text-ink-muted max-w-xl">
              Nacimos con la convicción de que Guanacaste merece un desarrollo
              a la altura de su belleza y su potencial. Combinamos la
              disciplina de una firma de inversión con la sensibilidad de
              quien conoce y respeta la región.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted max-w-xl">
              Acompañamos cada proyecto en su ciclo completo —adquisición de
              tierra, planificación maestra, factibilidad, gerencia,
              comercialización y estructuración de inversión— para entregar
              comunidades que crean valor duradero.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <PhotoPending
              label="Sitios de desarrollo y paisaje de Guanacaste"
              icon="MapPin"
              className="aspect-[4/5] rounded-sm"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Filosofía</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              Los principios que guían cada proyecto
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex gap-5 border-t border-line pt-6">
                <Icon name={p.icon} size={30} className="text-accent shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <PhotoPending
              label="Costa del Pacífico, Guanacaste"
              icon="Waves"
              className="aspect-[5/4] rounded-sm"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Por qué Guanacaste</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink max-w-lg">
              Una región con proyección internacional
            </h2>
            <p className="mt-7 leading-relaxed text-ink-muted max-w-xl">
              Guanacaste ofrece una combinación singular de litoral del
              Pacífico, conectividad internacional, estabilidad y un mercado
              inmobiliario en crecimiento. Nuestra presencia local nos permite
              anticipar oportunidades y desarrollarlas con responsabilidad.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted max-w-xl">
              Mantenemos nuestro enfoque exclusivamente en esta región para
              profundizar el conocimiento del mercado y honrar el compromiso
              con las comunidades que la habitan.
            </p>
          </Reveal>
        </div>
      </Section>

      <InvestBand
        eyebrow="Trabajemos juntos"
        title="Conversemos sobre su próximo proyecto o inversión"
        body="Estamos abiertos a nuevas alianzas con propietarios, inversionistas y socios de desarrollo que compartan nuestra visión de valor a largo plazo."
      />
    </>
  );
}
