"use client";

import { useState, type FormEvent } from "react";
import { site, localeHref, type Locale } from "@/lib/site";
import { Icon } from "@/lib/icon";

// Inquiry form. This is a static-export site (no backend), so rather than post
// to an invented email endpoint, the form composes a structured, prefilled
// WhatsApp message from the fields and opens the client's real WhatsApp — the
// one verified contact channel.

type Opt = { value: string; label: string };

const copy = {
  es: {
    aria: "Formulario de consulta",
    name: "Nombre completo",
    namePlaceholder: "Su nombre",
    profile: "Su perfil",
    interest: "Área de interés",
    select: "Seleccione una opción",
    message: "Su consulta",
    messagePlaceholder: "Cuéntenos brevemente qué está buscando en Costa Rica.",
    submit: "Enviar por WhatsApp",
    sent: `Se abrió WhatsApp con su consulta. Si no se abrió, escríbanos al ${site.phoneDisplay}.`,
    finePrefix: "Al enviar, se abrirá WhatsApp con su mensaje ya redactado para que lo confirme. Sus datos se tratan conforme a nuestra ",
    fineLink: "política de privacidad",
    intro: "Buenos días, escribo desde la página web de Guanacaste Development Group.",
    myName: (n: string) => `Mi nombre es ${n}.`,
    profileLine: (p: string) => `Perfil: ${p}.`,
    interestLine: (i: string) => `Interés: ${i}.`,
    queryLine: (m: string) => `Consulta: ${m}`,
    audiences: [
      { value: "comprador", label: "Comprador / estilo de vida" },
      { value: "inversionista", label: "Inversionista privado / family office" },
      { value: "socio", label: "Socio de desarrollo" },
      { value: "propietario", label: "Propietario de terreno" },
      { value: "otro", label: "Otra consulta" },
    ] as Opt[],
    interests: [
      "Propiedades",
      "Proyectos",
      "Oportunidades de inversión",
      "Adquisición de terrenos",
      "Otro",
    ],
  },
  en: {
    aria: "Inquiry form",
    name: "Full name",
    namePlaceholder: "Your name",
    profile: "Your profile",
    interest: "Area of interest",
    select: "Select an option",
    message: "Your inquiry",
    messagePlaceholder: "Tell us briefly what you are looking for in Costa Rica.",
    submit: "Send via WhatsApp",
    sent: `WhatsApp opened with your inquiry. If it didn't, message us at ${site.phoneDisplay}.`,
    finePrefix: "On submit, WhatsApp opens with your message drafted for you to confirm. Your data is handled per our ",
    fineLink: "privacy policy",
    intro: "Good morning, I'm writing from the Guanacaste Development Group website.",
    myName: (n: string) => `My name is ${n}.`,
    profileLine: (p: string) => `Profile: ${p}.`,
    interestLine: (i: string) => `Interest: ${i}.`,
    queryLine: (m: string) => `Inquiry: ${m}`,
    audiences: [
      { value: "buyer", label: "Buyer / lifestyle" },
      { value: "investor", label: "Private investor / family office" },
      { value: "partner", label: "Development partner" },
      { value: "landowner", label: "Landowner" },
      { value: "other", label: "Other inquiry" },
    ] as Opt[],
    interests: [
      "Properties",
      "Projects",
      "Investment opportunities",
      "Land acquisition",
      "Other",
    ],
  },
} as const;

export function InquiryForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const audienceValue = String(data.get("audience") ?? "");
    const audience =
      t.audiences.find((a) => a.value === audienceValue)?.label ?? audienceValue;
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      t.intro,
      name && t.myName(name),
      audience && t.profileLine(audience),
      interest && t.interestLine(interest),
      message && t.queryLine(message),
    ].filter(Boolean);

    const href = `https://wa.me/${site.waDigits}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label={t.aria}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-ink">
            {t.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-accent"
            placeholder={t.namePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="audience" className="block text-sm font-medium text-ink">
            {t.profile}
          </label>
          <select
            id="audience"
            name="audience"
            required
            defaultValue=""
            className="mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
          >
            <option value="" disabled>
              {t.select}
            </option>
            {t.audiences.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-ink">
            {t.interest}
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            className="mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
          >
            <option value="" disabled>
              {t.select}
            </option>
            {t.interests.map((it) => (
              <option key={it} value={it}>
                {it}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-ink">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 w-full resize-y rounded-sm border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-accent"
            placeholder={t.messagePlaceholder}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-2.5 rounded-full bg-accent-2 px-7 py-3.5 text-sm font-medium tracking-wide text-surface transition-colors hover:bg-ink"
      >
        <Icon name="WhatsappLogo" size={17} />
        {t.submit}
        <Icon
          name="ArrowRight"
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>

      <p
        aria-live="polite"
        className={`flex items-center gap-2 text-sm text-ink-muted transition-opacity ${
          sent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Icon name="CheckCircle" size={17} className="text-accent" />
        {t.sent}
      </p>

      <p className="text-xs leading-relaxed text-ink-muted">
        {t.finePrefix}
        <a href={localeHref(locale, "/politica-de-privacidad/")} className="text-gold-ink link-underline">
          {t.fineLink}
        </a>
        .
      </p>
    </form>
  );
}
