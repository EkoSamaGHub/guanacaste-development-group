"use client";

import { useState } from "react";
import { Icon } from "@/lib/icon";
import type { Locale } from "@/lib/site";

// Property photo gallery: large active image + thumbnail strip. No external
// lib. The active image carries explicit dimensions (it's the detail page LCP)
// and eager-loads; thumbnails lazy-load. Keyboard-accessible (real buttons).
export function PropertyGallery({
  photos,
  alt,
  width,
  height,
  locale,
}: {
  photos: string[];
  alt: string;
  width: number;
  height: number;
  locale: Locale;
}) {
  const [active, setActive] = useState(0);
  const thumbLabel = locale === "es" ? "Ver foto" : "View photo";

  return (
    <div>
      <div className="relative overflow-hidden rounded-sm border border-line bg-line/40" style={{ aspectRatio: `${width} / ${height}` }}>
        <img
          key={active}
          src={photos[active]}
          alt={alt}
          width={width}
          height={height}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {photos.length > 1 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-accent-2/90 px-3 py-1 text-[0.72rem] font-medium text-surface backdrop-blur-sm">
            <Icon name="Waves" size={12} className="mr-1 inline text-accent" />
            {active + 1} / {photos.length}
          </span>
        )}
      </div>

      {photos.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2.5">
          {photos.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${thumbLabel} ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              className={`h-16 w-24 shrink-0 overflow-hidden rounded-sm border transition-all ${
                i === active ? "border-accent ring-1 ring-accent" : "border-line opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
