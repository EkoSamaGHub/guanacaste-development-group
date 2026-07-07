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
import { nav, site, waHref } from "@/lib/site";

export function Nav() {
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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
          <Link href="/" className="group flex items-baseline gap-2.5" aria-label={`${site.name} — inicio`}>
            <span className="font-[family-name:var(--font-display)] text-xl tracking-tight text-ink">
              Guanacaste
            </span>
            <span className="hidden sm:inline text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-ink">
              Development Group
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative text-[0.82rem] tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[1.5px] bg-accent transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent-2 px-5 py-2.5 text-[0.78rem] font-medium tracking-wide text-surface transition-colors hover:bg-ink"
            >
              <WhatsappLogo size={16} aria-hidden="true" />
              Hablemos
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-line/50"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-5 pb-8 pt-2 flex flex-col gap-1"
          aria-label="Móvil"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`flex items-center justify-between border-b border-line py-3.5 text-base ${
                isActive(item.href) ? "text-accent" : "text-ink"
              }`}
            >
              {item.label}
              <CaretRight
                size={16}
                aria-hidden="true"
                className="text-ink-muted"
              />
            </Link>
          ))}
          <a
            href={waHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-accent-2 px-5 py-3.5 text-sm font-medium text-surface"
          >
            <WhatsappLogo size={18} aria-hidden="true" />
            Escríbanos por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
