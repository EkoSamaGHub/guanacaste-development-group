import type { Metadata } from "next";
import { site, waHref, localeHref, pageAlternates, type Locale } from "@/lib/site";
import { LegalPage, LegalH2 } from "@/components/Legal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  return {
    title: locale === "es" ? "Política de cookies" : "Cookie policy",
    description:
      locale === "es"
        ? "Política de cookies de Guanacaste Development Group: categorías, finalidades y administración del consentimiento conforme a la Ley n.º 8968 de Costa Rica."
        : "Guanacaste Development Group cookie policy: categories, purposes and consent management under Costa Rica's Law No. 8968.",
    alternates: pageAlternates(locale, "/politica-de-cookies/"),
  };
}

const categories = {
  es: [
    { name: "Estrictamente necesarias", consent: "No requiere consentimiento", body: "Garantizan el funcionamiento básico del sitio (sesión, seguridad). Sin ellas el sitio no funciona." },
    { name: "Preferencias", consent: "Requiere consentimiento", body: "Recuerdan opciones de la interfaz, como el idioma o la vista." },
    { name: "Analíticas", consent: "Requiere consentimiento", body: "Nos ayudan a entender cómo se usa el sitio para mejorarlo. No identifican a personas individuales." },
    { name: "Marketing", consent: "Requiere consentimiento", body: "Permiten medir la efectividad de campañas y mostrar contenido relevante en otros sitios." },
  ],
  en: [
    { name: "Strictly necessary", consent: "No consent required", body: "Ensure the basic operation of the site (session, security). Without them the site does not work." },
    { name: "Preferences", consent: "Consent required", body: "Remember interface options, such as language or view." },
    { name: "Analytics", consent: "Consent required", body: "Help us understand how the site is used in order to improve it. They do not identify individuals." },
    { name: "Marketing", consent: "Consent required", body: "Allow us to measure campaign effectiveness and show relevant content on other sites." },
  ],
} as const;

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const es = locale === "es";
  const cats = categories[locale];
  return (
    <LegalPage
      locale={locale}
      eyebrow="Legal"
      title={es ? "Política de cookies" : "Cookie policy"}
      updated={es ? "7 de julio de 2026" : "July 7, 2026"}
      breadcrumb={{
        name: es ? "Política de cookies" : "Cookie policy",
        path: "/politica-de-cookies/",
      }}
    >
      <p>
        {es
          ? `Este sitio de ${site.name} utiliza cookies y tecnologías similares. Las cookies estrictamente necesarias hacen funcionar el sitio; las demás categorías solo se activan con su consentimiento previo.`
          : `This ${site.name} site uses cookies and similar technologies. Strictly necessary cookies make the site work; the other categories are only activated with your prior consent.`}
      </p>

      <LegalH2>{es ? "Categorías de cookies" : "Cookie categories"}</LegalH2>
      <div className="mt-4 space-y-4">
        {cats.map((c) => (
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

      <LegalH2>{es ? "Consentimiento" : "Consent"}</LegalH2>
      <p>
        {es
          ? "Las cookies no esenciales (preferencias, analíticas y marketing) operan bajo un esquema de opt-in: permanecen desactivadas hasta que usted las acepta. Puede aceptar, rechazar o configurar las categorías en detalle, y retirar su consentimiento en cualquier momento con la misma facilidad con que lo otorgó."
          : "Non-essential cookies (preferences, analytics and marketing) operate on an opt-in basis: they remain disabled until you accept them. You can accept, reject or configure the categories in detail, and withdraw your consent at any time as easily as you gave it."}
      </p>

      <LegalH2>{es ? "Proveedores" : "Providers"}</LegalH2>
      <p>
        {es
          ? "El listado específico de proveedores de analítica o marketing efectivamente utilizados está por confirmar y se detallará en esta política una vez definidas las integraciones del sitio. No activamos cookies de terceros antes de contar con su consentimiento."
          : "The specific list of analytics or marketing providers actually used is to be confirmed and will be detailed in this policy once the site's integrations are defined. We do not activate third-party cookies before obtaining your consent."}
      </p>

      <LegalH2>{es ? "Cómo administrar las cookies" : "How to manage cookies"}</LegalH2>
      <p>
        {es
          ? "Además de las opciones de consentimiento de este sitio, usted puede administrar o eliminar las cookies desde la configuración de su navegador. Tenga en cuenta que desactivar ciertas cookies puede afectar el funcionamiento del sitio."
          : "In addition to this site's consent options, you can manage or delete cookies from your browser settings. Note that disabling certain cookies may affect how the site works."}
      </p>

      <LegalH2>{es ? "Más información" : "More information"}</LegalH2>
      <p>
        {es ? "Para conocer cómo tratamos sus datos personales, consulte nuestra " : "To learn how we handle your personal data, see our "}
        <a href={localeHref(locale, "/politica-de-privacidad/")}>
          {es ? "Política de privacidad" : "Privacy policy"}
        </a>
        {es ? ". Si tiene dudas, escríbanos por " : ". If you have questions, message us on "}
        <a href={waHref(locale)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        {` ${es ? "al" : "at"} ${site.phoneDisplay}.`}
      </p>

      <p className="mt-10 text-sm">
        {es
          ? "Esta política se basa en la Ley n.º 8968 de Costa Rica y "
          : "This policy is based on Costa Rica's Law No. 8968 and "}
        <strong>{es ? "no constituye asesoría legal" : "does not constitute legal advice"}</strong>
        {es
          ? ". Debe ser revisada por la asesoría jurídica del responsable e incorporar los datos marcados como «por confirmar»."
          : ". It should be reviewed by the controller's legal counsel and incorporate the data marked as “to be confirmed”."}
      </p>
    </LegalPage>
  );
}
