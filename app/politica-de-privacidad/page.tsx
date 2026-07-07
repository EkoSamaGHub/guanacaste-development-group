import type { Metadata } from "next";
import { site, waHref } from "@/lib/site";
import { LegalPage, LegalH2 } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Guanacaste Development Group conforme a la Ley n.º 8968 de Costa Rica y su Reglamento.",
  alternates: { canonical: "/politica-de-privacidad/" },
};

// Filled from the CR-legal template. Only verified facts (nombre, teléfono,
// dominio, región) are stated; cédula jurídica, domicilio y correo NO se
// inventan — se dejan como "por confirmar" hasta que el cliente los aporte.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de privacidad"
      updated="por confirmar"
      breadcrumb={{ name: "Política de privacidad", path: "/politica-de-privacidad/" }}
    >
      <p>
        Esta política describe cómo {site.name} trata los datos personales que
        usted proporciona a través de este sitio web ({site.url}).
      </p>

      <LegalH2>1. Identidad del responsable</LegalH2>
      <p>
        <strong>{site.name}</strong>, con cédula jurídica{" "}
        <em>(por confirmar)</em>, domiciliada en Guanacaste, Costa Rica{" "}
        <em>(dirección exacta por confirmar)</em>, teléfono{" "}
        <strong>{site.phoneDisplay}</strong> (WhatsApp), es la responsable del
        tratamiento de los datos personales recolectados a través de este sitio.
        El correo electrónico de contacto para asuntos de privacidad está por
        confirmar; mientras tanto, puede escribirnos por WhatsApp.
      </p>

      <LegalH2>2. Marco legal</LegalH2>
      <p>
        Esta política se rige por la <strong>Ley n.º 8968 — Protección de la
        Persona frente al Tratamiento de sus Datos Personales</strong> y su
        Reglamento (Decreto n.º 37554-JP), así como por la normativa sectorial
        aplicable en Costa Rica.
      </p>

      <LegalH2>3. Datos que recolectamos</LegalH2>
      <ul>
        <li>
          <strong>Datos de identificación y contacto:</strong> nombre,
          apellidos, teléfono y cualquier dato que usted incluya al escribirnos
          por WhatsApp o mediante el formulario de contacto.
        </li>
        <li>
          <strong>Datos de navegación:</strong> dirección IP, tipo de
          dispositivo, navegador y páginas visitadas, recolectados mediante
          cookies y tecnologías similares (ver Sección 9).
        </li>
      </ul>
      <p>
        No recolectamos datos personales de personas menores de edad sin el
        consentimiento expreso de sus padres o representantes legales.
      </p>

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
      <p>
        Conservamos sus datos durante el tiempo necesario para cumplir las
        finalidades enumeradas y los plazos legales aplicables. Una vez
        extinguidas las finalidades y vencidos dichos plazos, sus datos se
        eliminan o se anonimizan.
      </p>

      <LegalH2>7. Destinatarios y encargados de tratamiento</LegalH2>
      <p>
        Para operar este sitio y prestar nuestros servicios, sus datos pueden
        ser tratados por encargados como el proveedor de alojamiento web y el
        proveedor de mensajería (WhatsApp Business). El detalle específico de
        encargados y proveedores de analítica está por confirmar y se
        actualizará en esta política. Todo encargado accede a sus datos
        únicamente para prestar el servicio contratado, bajo deber de
        confidencialidad.
      </p>

      <LegalH2>8. Transferencias internacionales</LegalH2>
      <p>
        Algunos encargados de tratamiento pueden encontrarse fuera de Costa
        Rica. Cualquier transferencia se realiza al amparo del artículo 14 de la
        Ley 8968, procurando un nivel de protección equivalente. El detalle de
        los encargados internacionales está por confirmar.
      </p>

      <LegalH2>9. Cookies</LegalH2>
      <p>
        Este sitio utiliza cookies. Consulte nuestra{" "}
        <a href="/politica-de-cookies/">Política de cookies</a> para conocer las
        categorías, finalidades y cómo administrar su consentimiento.
      </p>

      <LegalH2>10. Sus derechos (ARCO + Oposición)</LegalH2>
      <p>
        Conforme al artículo 7 de la Ley 8968, usted tiene derecho de{" "}
        <strong>acceso, rectificación, actualización, supresión</strong> y{" "}
        <strong>oposición</strong> respecto de sus datos. Para ejercerlos,
        escríbanos por WhatsApp al {site.phoneDisplay} indicando su nombre
        completo y el derecho que desea ejercer. Tenemos un plazo máximo de
        cinco (5) días hábiles para acusar recibo y de treinta (30) días
        naturales para resolver su solicitud.
      </p>

      <LegalH2>11. Denuncia ante PRODHAB</LegalH2>
      <p>
        Si considera que el tratamiento de sus datos no se ajusta a la
        normativa, puede presentar denuncia ante la{" "}
        <strong>Agencia de Protección de Datos de los Habitantes (PRODHAB)</strong>,
        órgano adscrito al Ministerio de Justicia y Paz, con sede en San José,
        Costa Rica.
      </p>

      <LegalH2>12. Seguridad de los datos</LegalH2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger sus
        datos contra el acceso no autorizado, la pérdida y la alteración,
        incluyendo cifrado en tránsito (HTTPS) y control de acceso.
      </p>

      <LegalH2>13. Cambios a esta política</LegalH2>
      <p>
        Podemos actualizar esta política para reflejar cambios normativos o en
        nuestras prácticas. La fecha de la última actualización aparece al
        inicio del documento.
      </p>

      <LegalH2>14. Contacto</LegalH2>
      <p>
        Para cualquier consulta sobre esta política, escríbanos por{" "}
        <a href={waHref()} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{" "}
        al {site.phoneDisplay}.
      </p>

      <p className="mt-10 text-sm">
        Este documento se basa en la Ley n.º 8968 de Costa Rica y{" "}
        <strong>no constituye asesoría legal</strong>. Antes de considerarse
        definitivo, debe ser revisado por la asesoría jurídica del responsable, e
        incorporar los datos marcados como «por confirmar».
      </p>
    </LegalPage>
  );
}
