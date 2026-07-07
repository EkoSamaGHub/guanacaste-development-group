"use client";

import { useState } from "react";
import {
  propertyArchetypes,
  propertyCategories,
  waHref,
} from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PhotoPending } from "@/components/PhotoPending";

// Imagery-forward, filterable property grid. Entries are illustrative
// categories of premium property we represent — never fabricated listings,
// prices, or addresses. Filter runs client-side over the archetypes.
export function PropertyExplorer() {
  const [active, setActive] = useState<string>("all");

  const filters = [{ key: "all", label: "Todas", icon: "Compass" }, ...propertyCategories];
  const shown =
    active === "all"
      ? propertyArchetypes
      : propertyArchetypes.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filtrar propiedades">
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
        {shown.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 70}>
            <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-surface">
              <PhotoPending
                label={p.title}
                icon={p.icon}
                caption="Imagen representativa — inventario a consultar"
                className="h-56"
              />
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-2 text-gold-ink">
                  <span className="h-px w-6 bg-accent" />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]">
                    {p.categoryLabel}
                  </span>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-muted">
                  <Icon name="MapPin" size={15} className="text-accent shrink-0" />
                  {p.area}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {p.detail}
                </p>
                {/* price/detail row on a thin gold hairline — honest: to consult */}
                <div className="mt-6 flex items-center justify-between border-t border-accent/40 pt-4">
                  <span className="text-sm text-ink">Precio y disponibilidad a consultar</span>
                  <a
                    href={waHref(
                      `Buenos días, me interesa la categoría "${p.title}" en Guanacaste. ¿Podrían compartirme las opciones disponibles?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar sobre ${p.title} por WhatsApp`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-ink transition-colors hover:text-ink"
                  >
                    Consultar
                    <Icon name="ArrowUpRight" size={15} />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
