import type { Metadata } from "next";
import { site, waHref } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PhotoPending } from "@/components/PhotoPending";
import { Section, Eyebrow } from "@/components/ui";
import { InquiryForm } from "@/components/InquiryForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacte a Guanacaste Development Group por WhatsApp o mediante nuestro formulario. Atención a compradores, inversionistas y socios de desarrollo en Guanacaste, Costa Rica.",
  alternates: { canonical: "/contact/" },
};

const channels = [
  {
    icon: "WhatsappLogo",
    label: "WhatsApp",
    value: site.phoneDisplay,
    note: "La vía más directa para coordinar una consulta.",
    href: waHref(),
    external: true,
  },
  {
    icon: "MapPin",
    label: "Ubicación",
    value: "Guanacaste, Costa Rica",
    note: "Dirección exacta de oficina por confirmar.",
  },
  {
    icon: "Clock",
    label: "Horario",
    value: "Horario de atención por confirmar",
    note: "Escríbanos por WhatsApp y le confirmamos disponibilidad.",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contact/" },
        ]}
      />

      <Section className="pt-32 sm:pt-40">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — channels */}
          <Reveal priority>
            <Eyebrow>Contacto</Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl leading-[1.05] text-ink">
              Conversemos sobre Guanacaste
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-muted">
              Ya sea que busque comprar, invertir o desarrollar, estamos para
              escucharle. Escríbanos por WhatsApp o complete el formulario y le
              responderemos a la brevedad.
            </p>

            <ul className="mt-10 space-y-5">
              {channels.map((c) => {
                const inner = (
                  <>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-2 text-accent">
                      <Icon name={c.icon} size={20} />
                    </span>
                    <span>
                      <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-ink">
                        {c.label}
                      </span>
                      <span className="mt-1 block text-ink">{c.value}</span>
                      <span className="mt-0.5 block text-sm text-ink-muted">
                        {c.note}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 rounded-sm border border-line bg-surface p-5 transition-colors hover:border-accent/60"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 rounded-sm border border-line bg-surface p-5">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Guanacaste map slot — honest placeholder, no fabricated address */}
            <div className="mt-8">
              <PhotoPending
                label="Guanacaste, Costa Rica"
                caption="Mapa por incorporar"
                icon="MapPin"
                className="h-48 rounded-sm"
              />
            </div>
          </Reveal>

          {/* Right — inquiry form */}
          <Reveal delay={120}>
            <div className="rounded-sm border border-line bg-surface p-8 sm:p-10">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
                Envíenos su consulta
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Complete los campos y prepararemos su mensaje por WhatsApp, el
                canal por el que atendemos de forma más ágil.
              </p>
              <div className="mt-8">
                <InquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Audience routing */}
      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>¿Con quién desea hablar?</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              Atendemos a cada perfil de forma dedicada
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: "HouseLine",
              title: "Compradores",
              body: "Propiedades residenciales, frente al mar y de estilo de vida en Guanacaste.",
            },
            {
              icon: "ChartLineUp",
              title: "Inversionistas",
              body: "Oportunidades estructuradas para inversionistas privados y family offices.",
            },
            {
              icon: "Handshake",
              title: "Socios de desarrollo",
              body: "Alianzas con propietarios, desarrolladores y actores institucionales.",
            },
          ].map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="h-full rounded-sm border border-line bg-surface p-7">
                <Icon name={r.icon} size={30} className="text-accent" />
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
