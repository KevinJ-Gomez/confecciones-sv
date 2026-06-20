/**
 * Único punto de entrada para los datos legales del negocio.
 * Los campos vacíos bloquean la indexación mediante robots.js y muestran
 * un aviso en las páginas legales para evitar una publicación accidental.
 */
export const legalConfig = Object.freeze({
  legalName: "",
  tradeName: "Confecciones SV",
  taxId: "",
  registeredAddress: "",
  registryDetails: "",
  email: "confecciones.sv10@gmail.com",
  phone: "657 730 970",
  secondaryPhone: "602 571 925",
  siteUrl: "",
  hostingProvider: "",
  emailProvider: "Google Gmail (cuenta gratuita)",
  privacyRetention: "",
  effectiveDate: "",
  jurisdiction: "Zaragoza, España",
});

export const requiredLegalFields = [
  "legalName",
  "taxId",
  "registeredAddress",
  "registryDetails",
  "siteUrl",
  "hostingProvider",
  "emailProvider",
  "privacyRetention",
  "effectiveDate",
];

export const missingLegalFields = requiredLegalFields.filter(
  (field) => !legalConfig[field]?.trim(),
);

export const isLegalConfigComplete = missingLegalFields.length === 0;

export function legalValue(field, lang = "es") {
  const value = legalConfig[field]?.trim();
  if (value) return value;
  return lang === "es"
    ? `[PENDIENTE: ${field}]`
    : `[PENDING: ${field}]`;
}
