"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  WhatsappLogo,
  List,
  X,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";
import { nav, site, waHref, localeHref, type Locale } from "@/lib/site";

export function Nav({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const home = `/${locale}`;
  // Active when the current path matches the locale-prefixed href.
  const isActive = (href: string) => {
    const full = localeHref(locale, href);
    return href === "/" ? pathname === home || pathname === `${home}/` : pathname.startsWith(full);
  };

  const t = locale === "es"
    ? { menu: "Menú", open: "Abrir menú", close: "Cerrar menú", main: "Principal", mobile: "Móvil", talk: "Hablemos", waMobile: "Escríbanos por WhatsApp", homeAria: "inicio" }
    : { menu: "Menu", open: "Open menu", close: "Close menu", main: "Main", mobile: "Mobile", talk: "Let's talk", waMobile: "Message us on WhatsApp", homeAria: "home" };

  // Language switcher: swap the leading /es|/en segment of the current path.
  const other: Locale = locale === "es" ? "en" : "es";
  const switchHref = (() => {
    const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, "");
    return `/${other}${rest || "/"}`;
  })();

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div className={`inline-flex items-center rounded-full border border-line text-[0.72rem] font-semibold uppercase tracking-[0.12em] ${className}`}>
      <span className="px-2.5 py-1 text-ink" aria-current="true">
        {locale}
      </span>
      <Link
        href={switchHref}
        hrefLang={other}
        className="px-2.5 py-1 text-ink-muted transition-colors hover:text-accent border-l border-line"
        aria-label={other === "en" ? "Switch to English" : "Cambiar a español"}
      >
        {other}
      </Link>
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[color:var(--color-surface)]/95 backdrop-blur-md border-b border-line shadow-[0_1px_20px_rgba(26,42,56,0.05)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href={home} className="group flex items-baseline gap-2.5" aria-label={`${site.name} — ${t.homeAria}`}>
            <span className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink">
              Guanacaste
            </span>
            <span className="hidden sm:inline text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-ink">
              Development Group
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label={t.main}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={localeHref(locale, item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative text-[0.82rem] tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label[locale]}
                <span
                  className={`absolute -bottom-2 left-0 h-[1.5px] bg-accent transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LangSwitch className="hidden sm:inline-flex" />
            <a
              href={waHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent-2 px-5 py-2.5 text-[0.78rem] font-medium tracking-wide text-surface transition-colors hover:bg-ink"
            >
              <WhatsappLogo size={16} aria-hidden="true" />
              {t.talk}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-line/50"
              aria-label={open ? t.close : t.open}
              aria-expanded={open}
            >
              {open ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <List size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? "max-h-[36rem]" : "max-h-0"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-5 pb-8 pt-2 flex flex-col gap-1"
          aria-label={t.mobile}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localeHref(locale, item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex items-center justify-between border-b border-line py-3.5 text-base ${
                isActive(item.href) ? "text-accent" : "text-ink"
              }`}
            >
              {item.label[locale]}
              <CaretRight
                size={16}
                aria-hidden="true"
                className="text-ink-muted"
              />
            </Link>
          ))}
          <div className="mt-5 flex items-center justify-between">
            <LangSwitch />
            <a
              href={waHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-2 px-5 py-3 text-sm font-medium text-surface"
            >
              <WhatsappLogo size={18} aria-hidden="true" />
              {t.waMobile}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
