import type { Metadata } from "next";
import { site, waHref } from "@/lib/site";
import { LegalPage, LegalH2 } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Política de cookies de Guanacaste Development Group: categorías, finalidades y administración del consentimiento conforme a la Ley n.º 8968 de Costa Rica.",
  alternates: { canonical: "/politica-de-cookies/" },
};

const categories = [
  {
    name: "Estrictamente necesarias",
    consent: "No requiere consentimiento",
    body: "Garantizan el funcionamiento básico del sitio (sesión, seguridad). Sin ellas el sitio no funciona.",
  },
  {
    name: "Preferencias",
    consent: "Requiere consentimiento",
    body: "Recuerdan opciones de la interfaz, como el idioma o la vista.",
  },
  {
    name: "Analíticas",
    consent: "Requiere consentimiento",
    body: "Nos ayudan a entender cómo se usa el sitio para mejorarlo. No identifican a personas individuales.",
  },
  {
    name: "Marketing",
    consent: "Requiere consentimiento",
    body: "Permiten medir la efectividad de campañas y mostrar contenido relevante en otros sitios.",
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de cookies"
      updated="por confirmar"
      breadcrumb={{ name: "Política de cookies", path: "/politica-de-cookies/" }}
    >
      <p>
        Este sitio de {site.name} utiliza cookies y tecnologías similares. Las
        cookies estrictamente necesarias hacen funcionar el sitio; las demás
        categorías solo se activan con su consentimiento previo.
      </p>

      <LegalH2>Categorías de cookies</LegalH2>
      <div className="mt-4 space-y-4">
        {categories.map((c) => (
          <div key={c.name} className="rounded-sm border border-line bg-surface p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-[family-name:var(--font-display)] text-lg text-ink">
                {c.name}
              </h3>
              <span className="rounded-full border border-line px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-ink-muted">
                {c.consent}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.body}</p>
          </div>
        ))}
      </div>

      <LegalH2>Consentimiento</LegalH2>
      <p>
        Las cookies no esenciales (preferencias, analíticas y marketing) operan
        bajo un esquema de <em>opt-in</em>: permanecen desactivadas hasta
        que usted las acepta. Puede aceptar, rechazar o configurar las categorías
        en detalle, y retirar su consentimiento en cualquier momento con la misma
        facilidad con que lo otorgó.
      </p>

      <LegalH2>Proveedores</LegalH2>
      <p>
        El listado específico de proveedores de analítica o marketing
        efectivamente utilizados está por confirmar y se detallará en esta
        política una vez definidas las integraciones del sitio. No activamos
        cookies de terceros antes de contar con su consentimiento.
      </p>

      <LegalH2>Cómo administrar las cookies</LegalH2>
      <p>
        Además de las opciones de consentimiento de este sitio, usted puede
        administrar o eliminar las cookies desde la configuración de su
        navegador. Tenga en cuenta que desactivar ciertas cookies puede afectar
        el funcionamiento del sitio.
      </p>

      <LegalH2>Más información</LegalH2>
      <p>
        Para conocer cómo tratamos sus datos personales, consulte nuestra{" "}
        <a href="/politica-de-privacidad/">Política de privacidad</a>. Si tiene
        dudas, escríbanos por{" "}
        <a href={waHref()} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{" "}
        al {site.phoneDisplay}.
      </p>

      <p className="mt-10 text-sm">
        Esta política se basa en la Ley n.º 8968 de Costa Rica y{" "}
        <strong>no constituye asesoría legal</strong>. Debe ser revisada por la
        asesoría jurídica del responsable e incorporar los datos marcados como
        «por confirmar».
      </p>
    </LegalPage>
  );
}
