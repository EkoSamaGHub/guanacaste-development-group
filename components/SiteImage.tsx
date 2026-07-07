// Real photograph in the site's framed style (replaces the PhotoPending
// placeholder). The parent's className sets the crop box (aspect/height); the
// image fills it with object-cover. Decorative site imagery lazy-loads by
// default; pass `priority` for an above-the-fold image (eager + high fetch
// priority) so it doesn't compete on the critical path.
export function SiteImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden bg-line/40 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
