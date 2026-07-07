import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Inline the atomic Tailwind CSS as a <style> tag instead of a render-blocking
  // <link rel="stylesheet">. The 94 KB sheet was the top Lighthouse render-blocking
  // resource, gating FCP/LCP behind an extra request; inlining ships styles with the
  // HTML so the hero <h1> (the LCP element) paints without the round-trip. Styles are
  // byte-identical — no HTML-validity or a11y change.
  experimental: {
    inlineCss: true,
    // Rewrite phosphor barrel imports to per-icon paths so the client bundle
    // ships only the ~5 icons the interactive components (Nav, WhatsAppFab)
    // actually render — not the full 37-icon set. That set was a ~110 KB client
    // chunk of unused JavaScript on every route (a top Lighthouse offender).
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default nextConfig;
