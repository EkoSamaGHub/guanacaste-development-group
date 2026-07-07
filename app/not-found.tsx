import type { Metadata } from "next";
import { PrimaryCta, GhostCta, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description:
    "La página que busca no existe o fue movida. Regrese al inicio o explore nuestros proyectos.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-3xl px-5 py-32 text-center sm:px-8 sm:py-40">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl tracking-tight text-ink sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
          La dirección que buscó no existe o fue movida. Regrese al inicio o
          explore nuestros proyectos y servicios.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <PrimaryCta href="/">Volver al inicio</PrimaryCta>
          <GhostCta href="/projects">Ver proyectos</GhostCta>
        </div>
      </div>
    </div>
  );
}
