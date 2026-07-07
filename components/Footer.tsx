import Link from "next/link";
import { nav, site, waHref, localeHref, type Locale } from "@/lib/site";
import { Icon } from "@/lib/icon";

export function Footer({ locale }: { locale: Locale }) {
  const t =
    locale === "es"
      ? {
          blurb:
            "Desarrollo e inversión inmobiliaria en Guanacaste, Costa Rica. Del concepto a la entrega, con rigor institucional y una visión de valor a largo plazo.",
          navLabel: "Pie de página",
          navTitle: "Navegación",
          contact: "Contacto",
          region: "Guanacaste, Costa Rica",
          hours: "Horario de atención por confirmar",
          rights: "Todos los derechos reservados.",
          legalLabel: "Legal",
          privacy: "Política de privacidad",
          cookies: "Política de cookies",
          disclaimer:
            "La información sobre proyectos y propiedades es de carácter ilustrativo y no constituye una oferta vinculante ni asesoría legal, financiera o fiscal. Las oportunidades de inversión están sujetas a debida diligencia y confirmación. Consúltenos para detalles actualizados.",
        }
      : {
          blurb:
            "Real estate development and investment in Guanacaste, Costa Rica. From concept to delivery, with institutional rigor and a long-term view of value.",
          navLabel: "Footer",
          navTitle: "Navigation",
          contact: "Contact",
          region: "Guanacaste, Costa Rica",
          hours: "Business hours to be confirmed",
          rights: "All rights reserved.",
          legalLabel: "Legal",
          privacy: "Privacy policy",
          cookies: "Cookie policy",
          disclaimer:
            "Project and property information is illustrative and does not constitute a binding offer or legal, financial or tax advice. Investment opportunities are subject to due diligence and confirmation. Contact us for current details.",
        };

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
              {t.blurb}
            </p>
            <a
              href={waHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-line-dark px-5 py-2.5 text-sm text-surface transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="WhatsappLogo" size={17} />
              {site.phoneDisplay}
            </a>
          </div>

          <nav aria-label={t.navLabel} className="text-sm">
            <p className="eyebrow text-accent mb-5">{t.navTitle}</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localeHref(locale, item.href)}
                    className="text-surface/70 transition-colors hover:text-surface link-underline"
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="eyebrow text-accent mb-5">{t.contact}</p>
            <ul className="space-y-4 text-surface/70">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={18} className="mt-0.5 text-accent shrink-0" />
                <span>{t.region}</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="WhatsappLogo" size={18} className="mt-0.5 text-accent shrink-0" />
                <a
                  href={waHref(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-surface"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Clock" size={18} className="mt-0.5 text-accent shrink-0" />
                <span>{t.hours}</span>
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
          <p>© {site.name}. {t.rights}</p>
          <nav aria-label={t.legalLabel} className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href={localeHref(locale, "/politica-de-privacidad/")} className="hover:text-surface/80">
              {t.privacy}
            </Link>
            <Link href={localeHref(locale, "/politica-de-cookies/")} className="hover:text-surface/80">
              {t.cookies}
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-[0.68rem] leading-relaxed text-surface/60 max-w-3xl">
          {t.disclaimer}
        </p>
      </div>
    </footer>
  );
}
