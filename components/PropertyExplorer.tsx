"use client";

import { useState } from "react";
import Link from "next/link";
import { propertyCategories, localeHref, type Locale } from "@/lib/site";
import {
  listings,
  formatPrice,
  listingSpecs,
  type Listing,
} from "@/lib/listings";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";

// Imagery-forward, filterable grid of the client's REAL inventory. Every card
// renders real photos + facts from lib/listings.ts — no fabricated data. The
// filter runs client-side over the listings by category.
export function PropertyExplorer({ locale }: { locale: Locale }) {
  const [active, setActive] = useState<string>("all");

  const t =
    locale === "es"
      ? { all: "Todas", filter: "Filtrar propiedades", detail: "Ver detalle", none: "No hay propiedades en esta categoría por el momento." }
      : { all: "All", filter: "Filter properties", detail: "View details", none: "No properties in this category right now." };

  const filters = [{ key: "all", label: t.all, icon: "Compass" }, ...propertyCategories.map((c) => ({ key: c.key, label: c.label[locale], icon: c.icon }))];
  const shown: Listing[] =
    active === "all" ? listings : listings.filter((p) => p.category === active);

  const categoryLabel = (key: string) =>
    propertyCategories.find((c) => c.key === key)?.label[locale] ?? key;

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2.5" role="group" aria-label={t.filter}>
        {filters.map((f) => {
          const isOn = active === f.key;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={isOn}
              onClick={() => setActive(f.key)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm tracking-wide transition-colors ${
                isOn
                  ? "border-accent bg-accent-2 text-surface"
                  : "border-line bg-surface text-ink-muted hover:border-accent/60 hover:text-ink"
              }`}
            >
              <Icon name={f.icon} size={16} className={isOn ? "text-accent" : "text-accent/80"} />
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((l, i) => {
          const specs = listingSpecs(l, locale);
          return (
            <Reveal key={l.slug} delay={(i % 3) * 70}>
              <Link
                href={localeHref(locale, `/properties/${l.slug}/`)}
                aria-label={l.title[locale]}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-surface transition-colors hover:border-accent/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-line/40">
                  <img
                    src={l.photos[0]}
                    alt={`${l.title[locale]} — ${l.location[locale]}`}
                    width={l.coverWidth}
                    height={l.coverHeight}
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-accent-2/90 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-surface backdrop-blur-sm">
                    {categoryLabel(l.category)}
                  </span>
                  {l.photos.length > 1 && (
                    <span className="absolute bottom-3 right-3 rounded-full bg-accent-2/80 px-2.5 py-1 text-[0.66rem] font-medium text-surface backdrop-blur-sm">
                      {l.photos.length} {locale === "es" ? "fotos" : "photos"}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2 text-gold-ink">
                    <span className="h-px w-6 bg-accent" />
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
                      {l.status[locale]}
                    </span>
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl leading-snug text-ink transition-colors group-hover:text-gold-ink">
                    {l.title[locale]}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-muted">
                    <Icon name="MapPin" size={15} className="text-accent shrink-0" />
                    {l.location[locale]}
                  </p>
                  {specs.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {specs.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-line px-3 py-1 text-[0.72rem] text-ink-muted"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">
                    {l.description[locale]}
                  </p>
                  {/* price + view-details on a thin gold hairline */}
                  <div className="mt-6 flex items-center justify-between border-t border-accent/40 pt-4">
                    <span className="font-[family-name:var(--font-display)] text-lg text-ink">
                      {formatPrice(l, locale)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-ink transition-colors group-hover:text-ink">
                      {t.detail}
                      <Icon name="ArrowUpRight" size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      {shown.length === 0 && (
        <p className="mt-10 text-center text-ink-muted">{t.none}</p>
      )}
    </div>
  );
}
