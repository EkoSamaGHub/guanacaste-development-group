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
    title: locale === "es" ? "Política de privacidad" : "Privacy policy",
    description:
      locale === "es"
        ? "Política de privacidad de Guanacaste Development Group conforme a la Ley n.º 8968 de Costa Rica y su Reglamento."
        : "Guanacaste Development Group privacy policy under Costa Rica's Law No. 8968 and its Regulation.",
    alternates: pageAlternates(locale, "/politica-de-privacidad/"),
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const es = locale === "es";
  return (
    <LegalPage
      locale={locale}
      eyebrow="Legal"
      title={es ? "Política de privacidad" : "Privacy policy"}
      updated={es ? "7 de julio de 2026" : "July 7, 2026"}
      breadcrumb={{
        name: es ? "Política de privacidad" : "Privacy policy",
        path: "/politica-de-privacidad/",
      }}
    >
      {es ? (
        <>
          <p>
            Esta política describe cómo {site.name} trata los datos personales que
            usted proporciona a través de este sitio web ({site.url}).
          </p>
          <LegalH2>1. Identidad del responsable</LegalH2>
          <p>
            <strong>{site.name}</strong>, con cédula jurídica <em>(por confirmar)</em>,
            domiciliada en Guanacaste, Costa Rica <em>(dirección exacta por confirmar)</em>,
            teléfono <strong>{site.phoneDisplay}</strong> (WhatsApp), es la responsable del
            tratamiento de los datos personales recolectados a través de este sitio. El
            correo electrónico de contacto para asuntos de privacidad está por confirmar;
            mientras tanto, puede escribirnos por WhatsApp.
          </p>
          <LegalH2>2. Marco legal</LegalH2>
          <p>
            Esta política se rige por la <strong>Ley n.º 8968 — Protección de la Persona
            frente al Tratamiento de sus Datos Personales</strong> y su Reglamento (Decreto
            n.º 37554-JP), así como por la normativa sectorial aplicable en Costa Rica.
          </p>
          <LegalH2>3. Datos que recolectamos</LegalH2>
          <ul>
            <li><strong>Datos de identificación y contacto:</strong> nombre, apellidos, teléfono y cualquier dato que usted incluya al escribirnos por WhatsApp o mediante el formulario de contacto.</li>
            <li><strong>Datos de navegación:</strong> dirección IP, tipo de dispositivo, navegador y páginas visitadas, recolectados mediante cookies y tecnologías similares (ver Sección 9).</li>
          </ul>
          <p>No recolectamos datos personales de personas menores de edad sin el consentimiento expreso de sus padres o representantes legales.</p>
          <LegalH2>4. Finalidades del tratamiento</LegalH2>
          <ul>
            <li>Atender las consultas que usted nos envíe.</li>
            <li>Coordinar y prestar los servicios de desarrollo, inversión o venta solicitados.</li>
            <li>Enviarle información sobre propiedades u oportunidades, solo si usted lo autoriza expresamente.</li>
            <li>Cumplir obligaciones legales, contables y fiscales.</li>
          </ul>
          <LegalH2>5. Base de legitimación</LegalH2>
          <ul>
            <li>Su <strong>consentimiento informado y expreso</strong> (artículo 5 de la Ley 8968).</li>
            <li>La ejecución de un contrato o de gestiones precontractuales solicitadas por usted.</li>
            <li>El cumplimiento de una obligación legal aplicable a {site.name}.</li>
          </ul>
          <LegalH2>6. Plazo de conservación</LegalH2>
          <p>Conservamos sus datos durante el tiempo necesario para cumplir las finalidades enumeradas y los plazos legales aplicables. Una vez extinguidas las finalidades y vencidos dichos plazos, sus datos se eliminan o se anonimizan.</p>
          <LegalH2>7. Destinatarios y encargados de tratamiento</LegalH2>
          <p>Para operar este sitio y prestar nuestros servicios, sus datos pueden ser tratados por encargados como el proveedor de alojamiento web y el proveedor de mensajería (WhatsApp Business). El detalle específico de encargados y proveedores de analítica está por confirmar y se actualizará en esta política. Todo encargado accede a sus datos únicamente para prestar el servicio contratado, bajo deber de confidencialidad.</p>
          <LegalH2>8. Transferencias internacionales</LegalH2>
          <p>Algunos encargados de tratamiento pueden encontrarse fuera de Costa Rica. Cualquier transferencia se realiza al amparo del artículo 14 de la Ley 8968, procurando un nivel de protección equivalente. El detalle de los encargados internacionales está por confirmar.</p>
          <LegalH2>9. Cookies</LegalH2>
          <p>Este sitio utiliza cookies. Consulte nuestra <a href={localeHref(locale, "/politica-de-cookies/")}>Política de cookies</a> para conocer las categorías, finalidades y cómo administrar su consentimiento.</p>
          <LegalH2>10. Sus derechos (ARCO + Oposición)</LegalH2>
          <p>Conforme al artículo 7 de la Ley 8968, usted tiene derecho de <strong>acceso, rectificación, actualización, supresión</strong> y <strong>oposición</strong> respecto de sus datos. Para ejercerlos, escríbanos por WhatsApp al {site.phoneDisplay} indicando su nombre completo y el derecho que desea ejercer. Tenemos un plazo máximo de cinco (5) días hábiles para acusar recibo y de treinta (30) días naturales para resolver su solicitud.</p>
          <LegalH2>11. Denuncia ante PRODHAB</LegalH2>
          <p>Si considera que el tratamiento de sus datos no se ajusta a la normativa, puede presentar denuncia ante la <strong>Agencia de Protección de Datos de los Habitantes (PRODHAB)</strong>, órgano adscrito al Ministerio de Justicia y Paz, con sede en San José, Costa Rica.</p>
          <LegalH2>12. Seguridad de los datos</LegalH2>
          <p>Aplicamos medidas técnicas y organizativas razonables para proteger sus datos contra el acceso no autorizado, la pérdida y la alteración, incluyendo cifrado en tránsito (HTTPS) y control de acceso.</p>
          <LegalH2>13. Cambios a esta política</LegalH2>
          <p>Podemos actualizar esta política para reflejar cambios normativos o en nuestras prácticas. La fecha de la última actualización aparece al inicio del documento.</p>
          <LegalH2>14. Contacto</LegalH2>
          <p>Para cualquier consulta sobre esta política, escríbanos por <a href={waHref(locale)} target="_blank" rel="noopener noreferrer">WhatsApp</a> al {site.phoneDisplay}.</p>
          <p className="mt-10 text-sm">Este documento se basa en la Ley n.º 8968 de Costa Rica y <strong>no constituye asesoría legal</strong>. Antes de considerarse definitivo, debe ser revisado por la asesoría jurídica del responsable, e incorporar los datos marcados como «por confirmar».</p>
        </>
      ) : (
        <>
          <p>
            This policy describes how {site.name} handles the personal data you provide
            through this website ({site.url}).
          </p>
          <LegalH2>1. Identity of the data controller</LegalH2>
          <p>
            <strong>{site.name}</strong>, corporate ID <em>(to be confirmed)</em>, domiciled
            in Guanacaste, Costa Rica <em>(exact address to be confirmed)</em>, telephone{" "}
            <strong>{site.phoneDisplay}</strong> (WhatsApp), is the controller of the personal
            data collected through this site. The contact email for privacy matters is to be
            confirmed; in the meantime, you can reach us on WhatsApp.
          </p>
          <LegalH2>2. Legal framework</LegalH2>
          <p>
            This policy is governed by <strong>Law No. 8968 — Protection of the Individual
            with regard to the Processing of their Personal Data</strong> and its Regulation
            (Decree No. 37554-JP), together with the applicable sector-specific rules in Costa Rica.
          </p>
          <LegalH2>3. Data we collect</LegalH2>
          <ul>
            <li><strong>Identification and contact data:</strong> first name, surname, phone and any data you include when you contact us via WhatsApp or the contact form.</li>
            <li><strong>Browsing data:</strong> IP address, device type, browser and pages visited, collected through cookies and similar technologies (see Section 9).</li>
          </ul>
          <p>We do not collect personal data from minors without the express consent of their parents or legal guardians.</p>
          <LegalH2>4. Purposes of processing</LegalH2>
          <ul>
            <li>To respond to the inquiries you send us.</li>
            <li>To coordinate and provide the development, investment or sales services requested.</li>
            <li>To send you information about properties or opportunities, only if you expressly authorize it.</li>
            <li>To comply with legal, accounting and tax obligations.</li>
          </ul>
          <LegalH2>5. Legal basis</LegalH2>
          <ul>
            <li>Your <strong>informed, express consent</strong> (Article 5 of Law 8968).</li>
            <li>The performance of a contract or of pre-contractual steps requested by you.</li>
            <li>Compliance with a legal obligation applicable to {site.name}.</li>
          </ul>
          <LegalH2>6. Retention period</LegalH2>
          <p>We retain your data for as long as necessary to fulfill the stated purposes and the applicable legal periods. Once the purposes are exhausted and those periods have expired, your data is deleted or anonymized.</p>
          <LegalH2>7. Recipients and data processors</LegalH2>
          <p>To operate this site and provide our services, your data may be processed by processors such as the web hosting provider and the messaging provider (WhatsApp Business). The specific list of processors and analytics providers is to be confirmed and will be updated in this policy. Every processor accesses your data solely to provide the contracted service, under a duty of confidentiality.</p>
          <LegalH2>8. International transfers</LegalH2>
          <p>Some data processors may be located outside Costa Rica. Any transfer is carried out under Article 14 of Law 8968, seeking an equivalent level of protection. The details of the international processors are to be confirmed.</p>
          <LegalH2>9. Cookies</LegalH2>
          <p>This site uses cookies. See our <a href={localeHref(locale, "/politica-de-cookies/")}>Cookie policy</a> for the categories, purposes and how to manage your consent.</p>
          <LegalH2>10. Your rights (access, rectification, cancellation, opposition)</LegalH2>
          <p>Under Article 7 of Law 8968, you have the right of <strong>access, rectification, updating, deletion</strong> and <strong>opposition</strong> regarding your data. To exercise them, message us on WhatsApp at {site.phoneDisplay} stating your full name and the right you wish to exercise. We have a maximum of five (5) business days to acknowledge receipt and thirty (30) calendar days to resolve your request.</p>
          <LegalH2>11. Complaint before PRODHAB</LegalH2>
          <p>If you believe the processing of your data does not comply with the rules, you may file a complaint with the <strong>Agency for the Protection of Residents' Data (PRODHAB)</strong>, a body attached to the Ministry of Justice and Peace, based in San José, Costa Rica.</p>
          <LegalH2>12. Data security</LegalH2>
          <p>We apply reasonable technical and organizational measures to protect your data against unauthorized access, loss and alteration, including encryption in transit (HTTPS) and access control.</p>
          <LegalH2>13. Changes to this policy</LegalH2>
          <p>We may update this policy to reflect regulatory changes or changes in our practices. The date of the latest update appears at the top of the document.</p>
          <LegalH2>14. Contact</LegalH2>
          <p>For any questions about this policy, message us on <a href={waHref(locale)} target="_blank" rel="noopener noreferrer">WhatsApp</a> at {site.phoneDisplay}.</p>
          <p className="mt-10 text-sm">This document is based on Costa Rica's Law No. 8968 and <strong>does not constitute legal advice</strong>. Before being considered final, it should be reviewed by the controller's legal counsel and incorporate the data marked as "to be confirmed".</p>
        </>
      )}
    </LegalPage>
  );
}
