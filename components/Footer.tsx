import Link from "next/link";
import { nav, site, waHref } from "@/lib/site";
import { Icon } from "@/lib/icon";

export function Footer() {
  return (
    <footer className="bg-accent-2 text-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl leading-tight">
              Guanacaste
              <span className="block text-sm font-[family-name:var(--font-body)] uppercase tracking-[0.22em] text-accent mt-1">
                Development Group
              </span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-surface/65">
              Desarrollo e inversión inmobiliaria en Guanacaste, Costa Rica.
              Del concepto a la entrega, con rigor institucional y una visión
              de valor a largo plazo.
            </p>
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-line-dark px-5 py-2.5 text-sm text-surface transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="WhatsappLogo" size={17} />
              {site.phoneDisplay}
            </a>
          </div>

          <nav aria-label="Pie de página" className="text-sm">
            <p className="eyebrow text-accent mb-5">Navegación</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-surface/70 transition-colors hover:text-surface link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="eyebrow text-accent mb-5">Contacto</p>
            <ul className="space-y-4 text-surface/70">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={18} className="mt-0.5 text-accent shrink-0" />
                <span>Guanacaste, Costa Rica</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="WhatsappLogo" size={18} className="mt-0.5 text-accent shrink-0" />
                <a
                  href={waHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-surface"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Clock" size={18} className="mt-0.5 text-accent shrink-0" />
                <span>Horario de atención por confirmar</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-dark text-surface/50">
                <Icon name="InstagramLogo" size={18} />
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-dark text-surface/50">
                <Icon name="LinkedinLogo" size={18} />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-line-dark pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-surface/60">
          <p>
            © {site.name}. Todos los derechos reservados.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/politica-de-privacidad/" className="hover:text-surface/80">
              Política de privacidad
            </Link>
            <Link href="/politica-de-cookies/" className="hover:text-surface/80">
              Política de cookies
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-[0.68rem] leading-relaxed text-surface/60 max-w-3xl">
          La información sobre proyectos y propiedades es de carácter
          ilustrativo y no constituye una oferta vinculante ni asesoría legal,
          financiera o fiscal. Las oportunidades de inversión están sujetas a
          debida diligencia y confirmación. Consúltenos para detalles
          actualizados.
        </p>
      </div>
    </footer>
  );
}
