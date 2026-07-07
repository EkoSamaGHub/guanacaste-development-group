import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Libre_Franklin } from "next/font/google";
import "./globals.css";

// Global (locale-less) 404 — the only route outside app/[locale], so it renders
// its own <html>/<body>. Bilingual, since we can't know the intended locale of
// an unmatched URL. Produces out/404.html on static export.
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["400"], display: "optional" });
const franklin = Libre_Franklin({ variable: "--font-franklin", subsets: ["latin"], weight: ["400", "500"], display: "optional", preload: false });

export const metadata: Metadata = {
  title: "Página no encontrada · Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <html lang="es" className={`${fraunces.variable} ${franklin.variable} h-full`}>
      <body className="min-h-full flex items-center bg-surface">
        <div className="mx-auto w-full max-w-2xl px-5 py-24 text-center sm:px-8">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl tracking-tight text-ink sm:text-5xl">
            Página no encontrada
            <span className="mt-2 block text-2xl text-ink-muted sm:text-3xl">
              Page not found
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
            La dirección que buscó no existe o fue movida.
            <br />
            The address you requested doesn't exist or was moved.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/es/"
              className="inline-flex items-center gap-2 rounded-full bg-accent-2 px-7 py-3.5 text-sm font-medium tracking-wide text-surface transition-colors hover:bg-ink"
            >
              Ir al inicio (Español)
            </Link>
            <Link
              href="/en/"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:border-accent"
            >
              Go home (English)
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
