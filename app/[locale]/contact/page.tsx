import type { Metadata } from "next";
import { site, waHref, pageAlternates, type Locale } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PhotoPending } from "@/components/PhotoPending";
import { Section, Eyebrow } from "@/components/ui";
import { InquiryForm } from "@/components/InquiryForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  return {
    title: locale === "es" ? "Contacto" : "Contact",
    description:
      locale === "es"
        ? "Contacte a Guanacaste Development Group por WhatsApp o mediante nuestro formulario. Atención a compradores, inversionistas y socios de desarrollo en Costa Rica."
        : "Contact Guanacaste Development Group via WhatsApp or our form. We assist buyers, investors and development partners in Costa Rica.",
    alternates: pageAlternates(locale, "/contact/"),
  };
}

const copy = {
  es: {
    home: "Inicio",
    breadcrumb: "Contacto",
    eyebrow: "Contacto",
    title: "Conversemos sobre Costa Rica",
    lede: "Ya sea que busque comprar, invertir o desarrollar, estamos para escucharle. Escríbanos por WhatsApp o complete el formulario y le responderemos a la brevedad.",
    formTitle: "Envíenos su consulta",
    formBody: "Complete los campos y prepararemos su mensaje por WhatsApp, el canal por el que atendemos de forma más ágil.",
    mapLabel: "Guanacaste, Costa Rica",
    mapCaption: "Mapa por incorporar",
    routeEyebrow: "¿Con quién desea hablar?",
    routeTitle: "Atendemos a cada perfil de forma dedicada",
    channels: [
      { icon: "WhatsappLogo", label: "WhatsApp", value: site.phoneDisplay, note: "La vía más directa para coordinar una consulta.", href: waHref("es"), external: true },
      { icon: "MapPin", label: "Ubicación", value: "Guanacaste, Costa Rica", note: "Dirección exacta de oficina por confirmar." },
      { icon: "Clock", label: "Horario", value: "Horario de atención por confirmar", note: "Escríbanos por WhatsApp y le confirmamos disponibilidad." },
    ],
    routes: [
      { icon: "HouseLine", title: "Compradores", body: "Propiedades residenciales, frente al mar y de estilo de vida en Costa Rica." },
      { icon: "ChartLineUp", title: "Inversionistas", body: "Oportunidades estructuradas para inversionistas privados y family offices." },
      { icon: "Handshake", title: "Socios de desarrollo", body: "Alianzas con propietarios, desarrolladores y actores institucionales." },
    ],
  },
  en: {
    home: "Home",
    breadcrumb: "Contact",
    eyebrow: "Contact",
    title: "Let's talk about Costa Rica",
    lede: "Whether you're looking to buy, invest or develop, we're here to listen. Message us on WhatsApp or complete the form and we'll respond promptly.",
    formTitle: "Send us your inquiry",
    formBody: "Fill in the fields and we'll prepare your message on WhatsApp, the channel through which we respond fastest.",
    mapLabel: "Guanacaste, Costa Rica",
    mapCaption: "Map to be added",
    routeEyebrow: "Who would you like to speak with?",
    routeTitle: "We serve each profile with dedicated attention",
    channels: [
      { icon: "WhatsappLogo", label: "WhatsApp", value: site.phoneDisplay, note: "The most direct way to arrange a consultation.", href: waHref("en"), external: true },
      { icon: "MapPin", label: "Location", value: "Guanacaste, Costa Rica", note: "Exact office address to be confirmed." },
      { icon: "Clock", label: "Hours", value: "Business hours to be confirmed", note: "Message us on WhatsApp and we'll confirm availability." },
    ],
    routes: [
      { icon: "HouseLine", title: "Buyers", body: "Residential, beachfront and lifestyle properties across Costa Rica." },
      { icon: "ChartLineUp", title: "Investors", body: "Structured opportunities for private investors and family offices." },
      { icon: "Handshake", title: "Development partners", body: "Partnerships with landowners, developers and institutional players." },
    ],
  },
} as const;

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const t = copy[locale];
  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: t.home, path: "/" },
          { name: t.breadcrumb, path: "/contact/" },
        ]}
      />

      <Section className="pt-32 sm:pt-40">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal priority>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl leading-[1.05] text-ink">
              {t.title}
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-muted">
              {t.lede}
            </p>

            <ul className="mt-10 space-y-5">
              {t.channels.map((c) => {
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
                      <span className="mt-0.5 block text-sm text-ink-muted">{c.note}</span>
                    </span>
                  </>
                );
                return (
                  <li key={c.label}>
                    {"href" in c && c.href ? (
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

            <div className="mt-8">
              <PhotoPending
                label={t.mapLabel}
                caption={t.mapCaption}
                icon="MapPin"
                className="h-48 rounded-sm"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-sm border border-line bg-surface p-8 sm:p-10">
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
                {t.formTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.formBody}</p>
              <div className="mt-8">
                <InquiryForm locale={locale} />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface/60 border-y border-line">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{t.routeEyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl leading-tight text-ink">
              {t.routeTitle}
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {t.routes.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="h-full rounded-sm border border-line bg-surface p-7">
                <Icon name={r.icon} size={30} className="text-accent" />
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
