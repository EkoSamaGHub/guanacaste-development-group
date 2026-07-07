"use client";

import { useEffect, useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { waHref, type Locale } from "@/lib/site";

// Floating WhatsApp CTA — the primary contact channel across the site.
export function WhatsAppFab({ locale }: { locale: Locale }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waHref(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={locale === "es" ? "Escríbanos por WhatsApp" : "Message us on WhatsApp"}
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] pl-3.5 pr-4 py-3.5 text-white shadow-lg shadow-black/20 transition-all duration-500 hover:scale-[1.03] ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <WhatsappLogo weight="fill" size={24} aria-hidden="true" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
}
