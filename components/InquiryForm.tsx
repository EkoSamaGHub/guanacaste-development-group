"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Icon } from "@/lib/icon";

// Inquiry form. This is a static-export site (no backend), so rather than post
// to an invented email endpoint, the form composes a structured, prefilled
// WhatsApp message from the fields and opens the client's real WhatsApp — the
// one verified contact channel. Register: ustedeo, site-wide.
const audiences = [
  { value: "comprador", label: "Comprador / estilo de vida" },
  { value: "inversionista", label: "Inversionista privado / family office" },
  { value: "socio", label: "Socio de desarrollo" },
  { value: "propietario", label: "Propietario de terreno" },
  { value: "otro", label: "Otra consulta" },
];

const interests = [
  "Propiedades",
  "Proyectos",
  "Oportunidades de inversión",
  "Adquisición de terrenos",
  "Otro",
];

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const audienceValue = String(data.get("audience") ?? "");
    const audience =
      audiences.find((a) => a.value === audienceValue)?.label ?? audienceValue;
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      "Buenos días, escribo desde la página web de Guanacaste Development Group.",
      name && `Mi nombre es ${name}.`,
      audience && `Perfil: ${audience}.`,
      interest && `Interés: ${interest}.`,
      message && `Consulta: ${message}`,
    ].filter(Boolean);

    const href = `https://wa.me/${site.waDigits}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulario de consulta">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-ink">
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-accent"
            placeholder="Su nombre"
          />
        </div>

        <div>
          <label htmlFor="audience" className="block text-sm font-medium text-ink">
            Su perfil
          </label>
          <select
            id="audience"
            name="audience"
            required
            defaultValue=""
            className="mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
          >
            <option value="" disabled>
              Seleccione una opción
            </option>
            {audiences.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-ink">
            Área de interés
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            className="mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
          >
            <option value="" disabled>
              Seleccione una opción
            </option>
            {interests.map((it) => (
              <option key={it} value={it}>
                {it}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-ink">
            Su consulta
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 w-full resize-y rounded-sm border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-accent"
            placeholder="Cuéntenos brevemente qué está buscando en Guanacaste."
          />
        </div>
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-2.5 rounded-full bg-accent-2 px-7 py-3.5 text-sm font-medium tracking-wide text-surface transition-colors hover:bg-ink"
      >
        <Icon name="WhatsappLogo" size={17} />
        Enviar por WhatsApp
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
        Se abrió WhatsApp con su consulta. Si no se abrió, escríbanos al {site.phoneDisplay}.
      </p>

      <p className="text-xs leading-relaxed text-ink-muted">
        Al enviar, se abrirá WhatsApp con su mensaje ya redactado para que lo
        confirme. Sus datos se tratan conforme a nuestra{" "}
        <a href="/politica-de-privacidad/" className="text-gold-ink link-underline">
          política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
