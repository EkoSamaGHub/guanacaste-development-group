import type { Metadata } from "next";
import { waHref } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PropertyExplorer } from "@/components/PropertyExplorer";
import {
  PageHero,
  Section,
  Eyebrow,
  PrimaryCta,
  InvestBand,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Propiedades",
  description:
    "Propiedades premium en Guanacaste, Costa Rica: frente al mar, residencial, comercial y terrenos con potencial de desarrollo. Inventario a consultar de forma directa.",
  alternates: { canonical: "/properties/" },
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Propiedades"
        title="Propiedades premium en Guanacaste"
        lede="Representamos propiedades residenciales, comerciales, frente al mar y de inversión en toda la provincia. Explore las categorías y consúltenos por las opciones disponibles."
        photoLabel="Propiedad frente al mar en Guanacaste"
        photoIcon="Waves"
        breadcrumb={[{ name: "Propiedades", path: "/properties/" }]}
      />

      <Section className="pt-4">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Explorar</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              Las categorías de propiedad que representamos
            </h2>
            <p className="mt-6 leading-relaxed text-ink-muted">
              Las siguientes son categorías representativas de nuestro alcance.
              El inventario específico —con ubicaciones, precios y
              disponibilidad— se comparte de forma directa y bajo
              confidencialidad, según el perfil de cada comprador.
            </p>
          </div>
        </Reveal>
        <div className="mt-12">
          <PropertyExplorer />
        </div>
      </Section>

      {/* Honest note — no fabricated listings, prices, or availability */}
      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-sm border border-line bg-surface p-10 text-center">
            <Icon name="ShieldCheck" size={30} className="mx-auto text-accent" />
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl text-ink">
              Inventario curado, compartido de forma directa
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Cada oportunidad se presenta con su documentación, su contexto de
              mercado y su debida diligencia, de forma personalizada. Escríbanos
              e indíquenos qué está buscando; le compartiremos las propiedades
              que se ajusten a su perfil.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryCta
                href={waHref(
                  "Buenos días, me gustaría conocer las propiedades disponibles en Guanacaste.",
                )}
                external
              >
                <Icon name="WhatsappLogo" size={17} />
                Consultar propiedades
              </PrimaryCta>
            </div>
          </div>
        </Reveal>
      </Section>

      <InvestBand
        eyebrow="Compra e inversión"
        title="¿Busca una propiedad o una oportunidad de inversión?"
        body="Ya sea para vivir, para su portafolio o para desarrollar, coordinemos una conversación y le presentaremos las opciones adecuadas en Guanacaste."
      />
    </>
  );
}
