import { Icon } from "@/lib/icon";

// Honest, elegant placeholder for photography that is not yet available.
// Reads as an intentional architectural motif (navy field + gold contour
// draftsmanship) with a clearly-marked caption — never stock or AI filler,
// never a broken image. Sized to the final crop by the parent's className.
export function PhotoPending({
  label,
  caption = "Fotografía por incorporar",
  icon = "MapTrifold",
  className = "",
}: {
  label: string;
  caption?: string;
  icon?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — ${caption}`}
      className={`photo-pending flex flex-col items-center justify-center text-center px-6 ${className}`}
    >
      <Icon
        name={icon}
        className="text-[color:var(--color-accent)]/70"
        size={30}
      />
      <p className="mt-4 font-[family-name:var(--font-display)] text-surface/90 text-lg leading-snug max-w-[24ch]">
        {label}
      </p>
      <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-surface/45">
        {caption}
      </p>
    </div>
  );
}
