import Link from "next/link";
import type { ReactNode } from "react";
import { site, waHref, localeHref, type Locale } from "@/lib/site";
import { Icon } from "@/lib/icon";
import { Reveal } from "@/components/Reveal";
import { PhotoPending } from "@/components/PhotoPending";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export function PrimaryCta({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const cls =
    "group inline-flex items-center gap-2.5 rounded-full bg-accent-2 px-7 py-3.5 text-sm font-medium tracking-wide text-surface transition-colors hover:bg-ink";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <Icon
          name="ArrowRight"
          size={17}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      <Icon
        name="ArrowRight"
        size={17}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}

export function GhostCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink border-b border-accent/40 pb-1 transition-colors hover:border-accent"
    >
      {children}
      <Icon
        name="ArrowUpRight"
        size={16}
        className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

// Interior page hero — asymmetric editorial band with an honest pending-photo
// field to the side, mirroring the layout signatures.
export function PageHero({
  locale,
  eyebrow,
  title,
  lede,
  photoLabel,
  photoCaption,
  photoIcon = "MapTrifold",
  breadcrumb,
}: {
  locale: Locale;
  eyebrow: string;
  title: ReactNode;
  lede: string;
  photoLabel: string;
  photoCaption?: string;
  photoIcon?: string;
  breadcrumb: { name: string; path: string }[];
}) {
  const home = locale === "es" ? "Inicio" : "Home";
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <BreadcrumbJsonLd
        locale={locale}
        items={[{ name: home, path: "/" }, ...breadcrumb]}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal priority>
              <Eyebrow>{eyebrow}</Eyebrow>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-ink">
                {title}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
                {lede}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <PhotoPending
              label={photoLabel}
              caption={photoCaption}
              icon={photoIcon}
              className="h-56 sm:h-72 rounded-sm"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

// The one committed dark field — deep-navy investor CTA band.
export function InvestBand({
  locale,
  eyebrow,
  title,
  body,
}: {
  locale: Locale;
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  const d =
    locale === "es"
      ? {
          eyebrow: "Invierta con nosotros",
          title: "Construyamos valor duradero en Guanacaste",
          body: "Ya sea usted un comprador de estilo de vida, un inversionista privado, un family office o un socio de desarrollo, coordinemos una conversación confidencial sobre las oportunidades en el mercado costarricense.",
          wa: "Hablemos por WhatsApp",
          form: "Formulario de contacto",
        }
      : {
          eyebrow: "Invest with us",
          title: "Let's build lasting value in Guanacaste",
          body: "Whether you are a lifestyle buyer, a private investor, a family office or a development partner, let's arrange a confidential conversation about opportunities in the Costa Rican market.",
          wa: "Message us on WhatsApp",
          form: "Contact form",
        };
  return (
    <section className="bg-accent-2 text-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-accent">{eyebrow ?? d.eyebrow}</p>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.9rem] leading-[1.08] text-surface max-w-2xl">
              {title ?? d.title}
            </h2>
            <p className="mt-6 max-w-xl text-surface/70 leading-relaxed">
              {body ?? d.body}
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:justify-self-end">
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <PrimaryCta href={waHref(locale)} external>
                <Icon name="WhatsappLogo" size={17} />
                {d.wa}
              </PrimaryCta>
              <Link
                href={localeHref(locale, "/contact/")}
                className="inline-flex items-center gap-2 rounded-full border border-line-dark px-7 py-3.5 text-sm font-medium tracking-wide text-surface transition-colors hover:border-accent hover:text-accent"
              >
                {d.form}
                <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Credibility strip — expertise markers, NO fabricated numbers.
export function CredibilityStrip({ locale }: { locale: Locale }) {
  const items =
    locale === "es"
      ? [
          { icon: "MapPin", label: "Enfoque en Guanacaste y Costa Rica" },
          { icon: "ShieldCheck", label: "Debida diligencia rigurosa" },
          { icon: "Leaf", label: "Desarrollo sostenible" },
          { icon: "Handshake", label: "Alianzas locales e internacionales" },
        ]
      : [
          { icon: "MapPin", label: "Focus on Guanacaste and Costa Rica" },
          { icon: "ShieldCheck", label: "Rigorous due diligence" },
          { icon: "Leaf", label: "Sustainable development" },
          { icon: "Handshake", label: "Local and international partnerships" },
        ];
  return (
    <div className="border-y border-line bg-surface/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {items.map((it) => (
            <li
              key={it.label}
              className="flex items-center gap-3 px-2 py-7 lg:px-8"
            >
              <Icon name={it.icon} size={26} className="text-accent shrink-0" />
              <span className="text-sm leading-snug text-ink-muted">
                {it.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { site, waHref, Icon, Reveal, PhotoPending };
