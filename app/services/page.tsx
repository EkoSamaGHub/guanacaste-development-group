import type { Metadata } from "next";
import { services } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, Eyebrow, InvestBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Doce capacidades integradas: desarrollo inmobiliario, adquisición de terrenos, planificación maestra, factibilidad, gerencia de proyectos, asesoría al inversionista y más, en Guanacaste, Costa Rica.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capacidades"
        title="El ciclo completo del desarrollo y la inversión"
        lede="Doce disciplinas integradas bajo un mismo estándar — del terreno a la entrega, y de la factibilidad a la estructuración de inversión."
        photoLabel="Planos y sitios de desarrollo"
        photoIcon="Blueprint"
        breadcrumb={[{ name: "Servicios", path: "/services/" }]}
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
                      {s.title}
                    </h2>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-muted">
                    {s.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/60 border-y border-line py-16">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Un solo interlocutor</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              Integramos cada disciplina bajo un mismo estándar
            </h2>
            <p className="mt-6 leading-relaxed text-ink-muted">
              Coordinar desarrollo, inversión, planificación y comercialización
              desde un solo equipo reduce la fricción, protege el valor y
              acelera la ejecución. Cuéntenos su objetivo y le indicamos cómo
              podemos acompañarlo.
            </p>
          </div>
        </Reveal>
      </Section>

      <InvestBand
        eyebrow="Empecemos"
        title="¿Cuál de estas capacidades necesita hoy?"
        body="Escríbanos y coordinaremos una conversación para entender su proyecto o su tesis de inversión y proponerle el acompañamiento adecuado."
      />
    </>
  );
}
