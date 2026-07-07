import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { waHref, localeHref, locales, type Locale } from "@/lib/site";
import {
  listings,
  listingBySlug,
  formatPrice,
  listingSpecs,
} from "@/lib/listings";
import { listingDetails } from "@/lib/listing-details";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PropertyGallery } from "@/components/PropertyGallery";
import { Section, PrimaryCta, InvestBand } from "@/components/ui";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    listings.map((l) => ({ locale, slug: l.slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const l = listingBySlug(slug);
  if (!l) return {};
  return {
    title: l.title[locale],
    description: l.description[locale].slice(0, 300),
    alternates: {
      canonical: `/${locale}/properties/${slug}/`,
      languages: {
        es: `/es/properties/${slug}/`,
        en: `/en/properties/${slug}/`,
        "x-default": `/es/properties/${slug}/`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_CR" : "en_US",
      title: l.title[locale],
      description: l.description[locale].slice(0, 300),
      images: l.photos[0] ? [{ url: l.photos[0] }] : undefined,
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const l = listingBySlug(slug);
  if (!l) notFound();
  const detail = listingDetails[slug];
  const specs = listingSpecs(l, locale);
  const es = locale === "es";

  const t = {
    home: es ? "Inicio" : "Home",
    properties: es ? "Propiedades" : "Properties",
    back: es ? "Volver a propiedades" : "Back to properties",
    inquire: es ? "Consultar esta propiedad" : "Inquire about this property",
    ctaTitle: es ? "¿Le interesa esta propiedad?" : "Interested in this property?",
    ctaBody: es
      ? "Escríbanos por WhatsApp y le compartiremos la documentación completa, fotografías adicionales y coordinaremos una visita."
      : "Message us on WhatsApp and we'll share the full documentation, additional photos and arrange a visit.",
  };

  const waMessage = es
    ? `Buenos días, me interesa la propiedad "${l.title.es}" (${l.location.es}). ¿Podrían darme más información?`
    : `Good morning, I'm interested in the property "${l.title.en}" (${l.location.en}). Could you share more information?`;

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: t.home, path: "/" },
          { name: t.properties, path: "/properties/" },
          { name: l.title[locale], path: `/properties/${slug}/` },
        ]}
      />

      <Section className="pt-28 sm:pt-36">
        {/* Breadcrumb + back */}
        <Reveal priority>
          <nav className="flex items-center gap-2 text-sm text-ink-muted" aria-label="breadcrumb">
            <Link href={localeHref(locale, "/properties/")} className="inline-flex items-center gap-1.5 hover:text-accent">
              <Icon name="CaretRight" size={14} className="rotate-180" />
              {t.back}
            </Link>
          </nav>
        </Reveal>

        {/* Header */}
        <Reveal priority>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-gold-ink">
                <span className="h-px w-6 bg-accent" />
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]">
                  {l.status[locale]}
                </span>
              </div>
              <h1 className="mt-3 max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-[1.06] text-ink">
                {l.title[locale]}
              </h1>
              <p className="mt-4 flex items-center gap-2 text-ink-muted">
                <Icon name="MapPin" size={17} className="text-accent shrink-0" />
                {l.location[locale]}
              </p>
            </div>
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-ink shrink-0">
              {formatPrice(l, locale)}
            </p>
          </div>
        </Reveal>

        {/* Gallery */}
        <Reveal priority className="mt-8">
          <PropertyGallery
            photos={l.photos}
            alt={`${l.title[locale]} — ${l.location[locale]}`}
            width={l.coverWidth}
            height={l.coverHeight}
            locale={locale}
          />
        </Reveal>

        {/* Specs */}
        {specs.length > 0 && (
          <Reveal className="mt-8">
            <ul className="flex flex-wrap gap-3">
              {specs.map((s) => (
                <li
                  key={s}
                  className="rounded-sm border border-line bg-surface px-4 py-2 text-sm text-ink"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* Body: intro + sections */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <Reveal>
            <div className="legal-prose max-w-none leading-relaxed text-ink-muted">
              <p className="text-lg text-ink">{detail ? detail.intro[locale] : l.description[locale]}</p>
              {detail?.sections.map((sec) => (
                <div key={sec.h.en} className="mt-8">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl text-ink">
                    {sec.h[locale]}
                  </h2>
                  {sec.p && <p className="mt-3">{sec.p[locale]}</p>}
                  {sec.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {sec.bullets.map((b) => (
                        <li key={b.en} className="flex gap-3">
                          <Icon name="CheckCircle" size={18} className="mt-0.5 shrink-0 text-accent" />
                          <span>{b[locale]}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Sticky inquiry card */}
          <Reveal delay={100}>
            <div className="lg:sticky lg:top-24 rounded-sm border border-line bg-surface p-7">
              <p className="font-[family-name:var(--font-display)] text-xl text-ink">
                {t.ctaTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{t.ctaBody}</p>
              <p className="mt-6 font-[family-name:var(--font-display)] text-2xl text-ink">
                {formatPrice(l, locale)}
              </p>
              <div className="mt-5">
                <PrimaryCta href={waHref(locale, waMessage)} external>
                  <Icon name="WhatsappLogo" size={17} />
                  {t.inquire}
                </PrimaryCta>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <InvestBand locale={locale} />
    </>
  );
}
