import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

// Shared chrome for the CR-legal pages (privacy, cookies). One <h1> per page.
export function LegalPage({
  eyebrow,
  title,
  updated,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  breadcrumb: { name: string; path: string };
  children: ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Inicio", path: "/" }, breadcrumb]}
      />
      <section className="pt-32 pb-8 sm:pt-40">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal priority>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl leading-[1.06] text-ink">
              {title}
            </h1>
            <p className="mt-6 text-sm text-ink-muted">
              Última actualización: {updated}
            </p>
          </Reveal>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="legal-prose space-y-4 leading-relaxed text-ink-muted">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 mb-3 font-[family-name:var(--font-display)] text-2xl text-ink">
      {children}
    </h2>
  );
}
