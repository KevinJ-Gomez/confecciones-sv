import { legalConfig, legalValue } from "../config/legal";

const links = {
  aepd: "https://www.aepd.es/",
  gdpr: "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=es",
};

export const legalSlugs = ["aviso-legal", "privacidad", "cookies"];

export function getLegalDocument(slug, lang) {
  const es = lang === "es";
  const v = (field) => legalValue(field, lang);
  const common = {
    back: es ? "Volver a inicio" : "Back to home",
    pendingTitle: es ? "Documento pendiente de completar" : "Document awaiting completion",
    pendingText: es
      ? "No publiques esta web hasta completar todos los campos indicados en src/config/legal.js y revisar el texto con un profesional."
      : "Do not publish this website until every field in src/config/legal.js is completed and the text has been professionally reviewed.",
    updated: es ? `Última actualización: ${v("effectiveDate")}` : `Last updated: ${v("effectiveDate")}`,
  };

  const documents = es ? spanishDocuments(v) : englishDocuments(v);
  return documents[slug] ? { ...common, ...documents[slug] } : null;
}

function spanishDocuments(v) {
  return {
    "aviso-legal": {
      title: "Aviso legal",
      description: "Información legal y condiciones de uso de Confecciones SV.",
      sections: [
        { title: "1. Identificación del titular", paragraphs: [
          `Titular: ${v("legalName")} (nombre comercial: ${legalConfig.tradeName}).`,
          `NIF/CIF: ${v("taxId")}. Domicilio: ${v("registeredAddress")}.`,
          `Correo: ${legalConfig.email}. Teléfonos: ${legalConfig.phone} / ${legalConfig.secondaryPhone}.`,
          `Datos registrales, si proceden: ${v("registryDetails")}.`,
        ]},
        { title: "2. Objeto y aceptación", paragraphs: ["Este sitio informa sobre servicios de confección y arreglos y facilita solicitudes de información o presupuesto. El acceso implica aceptar estas condiciones; si no estás de acuerdo, no utilices el sitio."] },
        { title: "3. Uso permitido", paragraphs: ["La persona usuaria se compromete a utilizar el sitio de forma lícita, sin dañar sus sistemas, introducir código malicioso, suplantar identidades ni emplear sus contenidos con fines fraudulentos."] },
        { title: "4. Precios y contratación", paragraphs: ["Los precios mostrados son orientativos y no constituyen una oferta contractual cerrada. El presupuesto definitivo depende de la prenda, tejido, dificultad y acabado, y se confirmará antes de ejecutar el trabajo."] },
        { title: "5. Propiedad intelectual", paragraphs: ["Salvo indicación contraria, el diseño, textos, logotipos, fotografías y demás contenidos pertenecen a su titular o se utilizan con autorización. No se permite su reproducción o explotación sin autorización previa."] },
        { title: "6. Responsabilidad y enlaces", paragraphs: ["Se procura mantener información correcta y disponible, pero no se garantiza la ausencia absoluta de errores o interrupciones. Los servicios externos enlazados, como WhatsApp o correo electrónico, se rigen por sus propias condiciones y políticas."] },
        { title: "7. Legislación aplicable", paragraphs: [`Estas condiciones se rigen por la legislación española. Cuando la normativa lo permita, las controversias se someterán a los juzgados y tribunales de ${legalConfig.jurisdiction}. Se respetarán siempre los fueros imperativos de consumidores y usuarios.`] },
      ],
    },
    privacidad: {
      title: "Política de privacidad",
      description: "Cómo trata Confecciones SV los datos enviados mediante la web.",
      sections: [
        { title: "1. Responsable", paragraphs: [`Responsable: ${v("legalName")}. NIF/CIF: ${v("taxId")}. Dirección: ${v("registeredAddress")}. Contacto para privacidad: ${legalConfig.email}.`] },
        { title: "2. Datos, finalidad y base jurídica", paragraphs: ["Tratamos los datos que facilitas —nombre, teléfono o correo, servicio solicitado y mensaje— para responder consultas, preparar presupuestos y gestionar medidas precontractuales o la relación de servicio.", "La base jurídica es la aplicación de medidas precontractuales solicitadas por la persona interesada y, cuando corresponda, la ejecución del contrato. La lectura de esta política no autoriza comunicaciones comerciales."] },
        { title: "3. Conservación", paragraphs: [`Las consultas se conservarán durante ${v("privacyRetention")} y, si nace una relación contractual, durante los plazos necesarios para cumplir obligaciones legales y atender responsabilidades.`] },
        { title: "4. Destinatarios y transferencias", paragraphs: [`No vendemos datos. Podrán acceder a ellos proveedores necesarios: alojamiento (${v("hostingProvider")}), correo (${v("emailProvider")}) y WhatsApp/Meta cuando elijas ese canal. Deben revisarse sus contratos, ubicaciones y garantías de transferencia internacional antes del lanzamiento.`] },
        { title: "5. Derechos", paragraphs: [`Puedes solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${legalConfig.email}, identificando tu petición. También puedes reclamar ante la Agencia Española de Protección de Datos.`], links: [{ label: "Agencia Española de Protección de Datos", href: links.aepd }] },
        { title: "6. Seguridad y minimización", paragraphs: ["Solo solicitamos datos adecuados para atender la consulta y aplicamos medidas razonables para protegerlos. No envíes categorías especiales de datos ni información innecesaria mediante el formulario."] },
        { title: "7. Menores", paragraphs: ["Este formulario no está dirigido a menores de 14 años. Si eres menor de esa edad, no envíes datos sin la intervención de quien ejerza tu patria potestad o tutela."] },
        { title: "8. Normativa", paragraphs: ["Esta política se interpreta conforme al RGPD y a la Ley Orgánica 3/2018."], links: [{ label: "Reglamento General de Protección de Datos", href: links.gdpr }] },
      ],
    },
    cookies: {
      title: "Política de cookies",
      description: "Información sobre cookies y tecnologías similares.",
      sections: [
        { title: "1. Situación actual", paragraphs: ["En la versión actual no se instalan cookies propias de analítica, publicidad o personalización, ni se ejecutan rastreadores no esenciales. Por ello no se muestra un panel de consentimiento."] },
        { title: "2. Cookies técnicas", paragraphs: [`El proveedor de alojamiento (${v("hostingProvider")}) podría utilizar mecanismos estrictamente necesarios para seguridad, entrega de contenido o funcionamiento técnico. Debe confirmarse su inventario antes del lanzamiento.`] },
        { title: "3. Servicios externos", paragraphs: ["Los enlaces a WhatsApp, Facebook o correo no instalan cookies en esta web por el mero hecho de mostrarse. Al seguirlos abandonas este sitio y se aplican las políticas del proveedor correspondiente."] },
        { title: "4. Cambios futuros", paragraphs: ["Si se incorporan analítica, publicidad, mapas, vídeos embebidos u otras tecnologías no necesarias, se actualizará esta política y se solicitará consentimiento previo mediante un panel que permita aceptar, rechazar y configurar."] },
        { title: "5. Contacto", paragraphs: [`Para consultas sobre esta política escribe a ${legalConfig.email}.`] },
      ],
    },
  };
}

function englishDocuments(v) {
  return {
    "aviso-legal": {
      title: "Legal notice",
      description: "Legal information and terms of use for Confecciones SV.",
      sections: [
        { title: "1. Website owner", paragraphs: [`Owner: ${v("legalName")} (trade name: ${legalConfig.tradeName}).`, `Tax ID: ${v("taxId")}. Address: ${v("registeredAddress")}.`, `Email: ${legalConfig.email}. Telephone: ${legalConfig.phone} / ${legalConfig.secondaryPhone}.`, `Registration details, where applicable: ${v("registryDetails")}.`] },
        { title: "2. Purpose and acceptance", paragraphs: ["This website provides information about tailoring and alteration services and enables enquiries or estimate requests. By using it you accept these terms."] },
        { title: "3. Permitted use", paragraphs: ["Users must use the site lawfully and must not damage its systems, introduce malicious code, impersonate others or use its content fraudulently."] },
        { title: "4. Prices and contracts", paragraphs: ["Displayed prices are estimates and not a binding final offer. The final quote depends on the garment, fabric, complexity and finish and will be confirmed before work begins."] },
        { title: "5. Intellectual property", paragraphs: ["Unless stated otherwise, designs, text, logos, photographs and other content belong to their owner or are used with permission. Reproduction or commercial use requires prior authorisation."] },
        { title: "6. Liability and links", paragraphs: ["We aim to keep information accurate and available but cannot guarantee the complete absence of errors or interruptions. Linked third-party services apply their own terms and policies."] },
        { title: "7. Applicable law", paragraphs: [`Spanish law applies. Where legally permitted, disputes will be submitted to the courts of ${legalConfig.jurisdiction}, without limiting mandatory consumer jurisdiction.`] },
      ],
    },
    privacidad: {
      title: "Privacy policy",
      description: "How Confecciones SV handles data submitted through this website.",
      sections: [
        { title: "1. Controller", paragraphs: [`Controller: ${v("legalName")}. Tax ID: ${v("taxId")}. Address: ${v("registeredAddress")}. Privacy contact: ${legalConfig.email}.`] },
        { title: "2. Data, purpose and lawful basis", paragraphs: ["We process the name, contact details, requested service and message you provide to answer enquiries, prepare estimates and manage pre-contractual steps or services.", "The lawful basis is taking steps at your request before entering a contract and, where applicable, performing that contract. Reading this policy does not authorise marketing messages."] },
        { title: "3. Retention", paragraphs: [`Enquiries are retained for ${v("privacyRetention")}; contractual records are retained for applicable statutory periods and legal claims.`] },
        { title: "4. Recipients and transfers", paragraphs: [`We do not sell data. Necessary providers may access it: hosting (${v("hostingProvider")}), email (${v("emailProvider")}) and WhatsApp/Meta when selected. Their contracts, locations and international transfer safeguards must be checked before launch.`] },
        { title: "5. Your rights", paragraphs: [`You may request access, correction, deletion, objection, restriction and portability by emailing ${legalConfig.email}. You may also complain to the Spanish Data Protection Agency.`], links: [{ label: "Spanish Data Protection Agency", href: links.aepd }] },
        { title: "6. Security and minimisation", paragraphs: ["We request only the data needed to answer your enquiry and apply reasonable safeguards. Do not submit sensitive or unnecessary information."] },
        { title: "7. Children", paragraphs: ["This form is not intended for children under 14. They should not submit data without a parent or guardian."] },
        { title: "8. Legal framework", paragraphs: ["This policy follows the GDPR and Spanish Organic Law 3/2018."], links: [{ label: "General Data Protection Regulation", href: links.gdpr }] },
      ],
    },
    cookies: {
      title: "Cookie policy",
      description: "Information about cookies and similar technologies.",
      sections: [
        { title: "1. Current status", paragraphs: ["The current version does not set first-party analytics, advertising or personalisation cookies and runs no non-essential trackers. A consent panel is therefore not displayed."] },
        { title: "2. Technical cookies", paragraphs: [`The hosting provider (${v("hostingProvider")}) may use mechanisms strictly necessary for security, content delivery or operation. Its inventory must be confirmed before launch.`] },
        { title: "3. External services", paragraphs: ["Displaying links to WhatsApp, Facebook or email does not itself set their cookies on this site. Their policies apply after you follow a link."] },
        { title: "4. Future changes", paragraphs: ["If analytics, advertising, embedded media or other non-essential technologies are added, this policy will be updated and prior consent will be requested through controls to accept, reject and configure them."] },
        { title: "5. Contact", paragraphs: [`For questions, email ${legalConfig.email}.`] },
      ],
    },
  };
}
