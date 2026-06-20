# Información legal pendiente — Confecciones SV

Este documento reúne los datos necesarios para completar las páginas legales y desbloquear la indexación de la web. Puede rellenarse directamente en GitHub o descargarse como archivo Markdown.

> Importante: no incluyas contraseñas, documentos escaneados, números de cuenta ni información privada innecesaria. Los datos solicitados aquí acabarán siendo públicos en la web.

## 1. Datos que debe facilitar el titular

Completa la columna **Respuesta** sin borrar el nombre técnico del campo.

| Campo en `legal.js` | Información solicitada | Respuesta |
| --- | --- | --- |
| `legalName` | Nombre y apellidos del autónomo o razón social completa de la empresa | PENDIENTE |
| `taxId` | NIF del titular o CIF de la sociedad | PENDIENTE |
| `registeredAddress` | Domicilio fiscal o dirección completa del establecimiento que deba publicarse | PENDIENTE |
| `registryDetails` | Registro, tomo, folio, hoja e inscripción si corresponde; escribir `No aplicable` cuando legalmente no proceda | PENDIENTE |
| `siteUrl` | Dominio definitivo con `https://`, sin barra final | PENDIENTE |
| `hostingProvider` | Empresa que alojará la web, previsiblemente Vercel u otro proveedor | PENDIENTE |
| `emailProvider` | Proveedor que gestiona `confecciones.sv10@gmail.com`, previsiblemente Google/Gmail | PENDIENTE |
| `privacyRetention` | Plazo aprobado para conservar consultas que no terminan en contratación | PENDIENTE |
| `effectiveDate` | Fecha de entrada en vigor de los textos, en formato `DD/MM/AAAA` | PENDIENTE |

## 2. Datos ya disponibles que deben confirmarse

| Campo | Valor actual | Confirmación o corrección |
| --- | --- | --- |
| Nombre comercial | Confecciones SV | PENDIENTE DE CONFIRMAR |
| Correo público | confecciones.sv10@gmail.com | PENDIENTE DE CONFIRMAR |
| Teléfono principal | 657 730 970 | PENDIENTE DE CONFIRMAR |
| Teléfono secundario | 602 571 925 | PENDIENTE DE CONFIRMAR |
| Jurisdicción de referencia | Zaragoza, España | PENDIENTE DE CONFIRMAR |

## 3. Decisiones que deben verificarse antes del lanzamiento

- [ ] Confirmar que no se utiliza Google Analytics, Meta Pixel ni otra herramienta de seguimiento.
- [ ] Confirmar si Vercel instala o utiliza algún mecanismo técnico que deba declararse.
- [ ] Revisar las condiciones y el acuerdo de tratamiento de datos del proveedor de hosting.
- [ ] Revisar el uso de Gmail y WhatsApp/Meta, incluidos sus posibles tratamientos internacionales.
- [ ] Decidir el plazo de conservación de consultas con asesoramiento profesional.
- [ ] Confirmar que las fotografías, logotipos y textos pueden publicarse legalmente.
- [ ] Revisar los textos legales con una persona profesional antes de eliminar el bloqueo de indexación.

## 4. Cómo incorporar las respuestas

Cuando esté todo confirmado, copia los valores en [`src/config/legal.js`](src/config/legal.js):

```js
export const legalConfig = Object.freeze({
  legalName: "VALOR CONFIRMADO",
  tradeName: "Confecciones SV",
  taxId: "VALOR CONFIRMADO",
  registeredAddress: "VALOR CONFIRMADO",
  registryDetails: "VALOR CONFIRMADO O NO APLICABLE",
  email: "confecciones.sv10@gmail.com",
  phone: "657 730 970",
  secondaryPhone: "602 571 925",
  siteUrl: "https://dominio-definitivo.es",
  hostingProvider: "VALOR CONFIRMADO",
  emailProvider: "VALOR CONFIRMADO",
  privacyRetention: "VALOR CONFIRMADO",
  effectiveDate: "DD/MM/AAAA",
  jurisdiction: "Zaragoza, España",
});
```

Al no quedar campos obligatorios vacíos, `robots.txt` permitirá la indexación y `sitemap.xml` publicará las rutas ES/EN automáticamente.

## 5. Validación final

Después de inyectar los datos:

```bash
npm run lint
npm run build
```

Revisa visualmente estas seis rutas:

- `/es/legal/aviso-legal`
- `/es/legal/privacidad`
- `/es/legal/cookies`
- `/en/legal/aviso-legal`
- `/en/legal/privacidad`
- `/en/legal/cookies`

Este documento organiza la información técnica pendiente, pero no sustituye el asesoramiento jurídico profesional.
