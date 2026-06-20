# Guía para completar la información legal — Confecciones SV

Este documento explica qué significa cada dato pendiente, por qué se solicita, dónde puede localizarse, quién debe validarlo y cómo trasladarlo a [`src/config/legal.js`](src/config/legal.js).

Puede editarse directamente desde GitHub, visualizarse como una página o descargarse con **Download raw file**. No debe contener contraseñas, certificados, escrituras completas, documentos escaneados, cuentas bancarias ni otra información privada innecesaria. Los valores finales serán públicos en la web.

> Esta guía ayuda a recopilar datos y preparar técnicamente la página. No sustituye el asesoramiento jurídico, fiscal o de protección de datos.

## Cómo utilizar esta guía

Para cada dato:

1. Lee **Qué es** y **Por qué hace falta**.
2. Sigue **Cómo conseguirlo** usando documentación oficial o contractual.
3. Aplica **Cómo validarlo**; no copies un dato solo porque aparezca en una factura antigua.
4. Escribe el resultado en **Respuesta pendiente**.
5. Cuando todos estén confirmados, cópialos en `src/config/legal.js` siguiendo el ejemplo final.

## Resumen de estado

| Campo técnico | Responsable de confirmarlo | Estado |
| --- | --- | --- |
| `legalName` | Titular o asesoría fiscal | ⬜ Pendiente |
| `taxId` | Titular o asesoría fiscal | ⬜ Pendiente |
| `registeredAddress` | Titular o asesoría fiscal | ⬜ Pendiente |
| `registryDetails` | Titular, asesoría o Registro Mercantil | ⬜ Pendiente |
| `siteUrl` | Titular del dominio o desarrollador | ⬜ Pendiente |
| `hostingProvider` | Titular de la cuenta de despliegue | ⬜ Pendiente |
| `emailProvider` | Titular de la cuenta de correo | ✅ Confirmado: Google Gmail gratuito |
| `privacyRetention` | Titular con asesoramiento profesional | ⬜ Pendiente |
| `effectiveDate` | Titular tras aprobar los textos | ⬜ Pendiente |

---

## 1. Titular legal — `legalName`

### Qué es

Es la persona física o jurídica que presta realmente el servicio y responde legalmente por la actividad. No es necesariamente el nombre que aparece en el logotipo.

- Si el negocio pertenece a una persona autónoma, normalmente será su nombre y apellidos completos tal como consten en la Agencia Tributaria.
- Si pertenece a una sociedad, será su razón social completa, incluida su forma jurídica: por ejemplo, `Ejemplo Textil, S.L.`.
- `Confecciones SV` puede mantenerse como nombre comercial en `tradeName`, pero no sustituye al titular legal salvo que coincida con la denominación registrada.

### Por qué hace falta

Permite que clientes, autoridades y personas que ejercen derechos de protección de datos sepan quién presta el servicio y quién es responsable del tratamiento de sus datos.

### Cómo conseguirlo

Consulta, por este orden:

1. Certificado de situación censal de la AEAT.
2. Modelo 036/037 vigente o documentación de alta del titular.
3. Tarjeta acreditativa del NIF, si se trata de una entidad.
4. Nota informativa mercantil, si se trata de una sociedad.
5. Asesoría fiscal, si existe cualquier diferencia entre documentos.

La [Agencia Tributaria permite obtener certificados de situación censal](https://sede.agenciatributaria.gob.es/Sede/censos-nif-domicilio-fiscal/solicitar-obtener-certificado-tributario-sobre-censo.html) para acreditar los datos con los que figura el empresario o profesional.

### Cómo validarlo

- Debe coincidir carácter por carácter con el dato censal vigente.
- No uses un apodo, nombre abreviado ni solo el nombre comercial.
- Si ha cambiado recientemente, confirma que la modificación censal ya está presentada.

### Respuesta pendiente

```text
legalName =
Documento y fecha usados para validarlo =
Persona que lo confirmó =
```

---

## 2. Identificación fiscal — `taxId`

### Qué es

Es el NIF del titular legal. Aunque coloquialmente se siga diciendo “CIF” para sociedades, el valor que debe verificarse es su NIF vigente.

- Persona física/autónoma: NIF de esa persona.
- Sociedad u otra entidad: NIF asignado a la entidad.

### Por qué hace falta

Identifica de forma inequívoca al prestador y evita confundir el negocio con otra persona o entidad de nombre parecido.

### Cómo conseguirlo

Puede localizarse en:

1. Certificado de situación censal.
2. Tarjeta acreditativa del NIF.
3. Modelo 036/037 vigente.
4. Nota informativa mercantil de la sociedad.

Para entidades jurídicas, la AEAT dispone de una [consulta censal por NIF](https://sede.agenciatributaria.gob.es/Sede/ayuda/consultas-informaticas/presentacion-declaraciones-ayuda-tecnica/modelo-036/comprobacion-estar-censado-consulta-nif-juridicas.html) que requiere identificación electrónica y muestra si la entidad consta en el censo.

### Cómo validarlo

- Comprueba que pertenece exactamente al `legalName` anterior.
- Usa la consulta censal o un certificado reciente, no una factura desactualizada.
- No publiques fotografías o copias del documento; solo transcribe el número confirmado.
- Si el NIF aparece revocado, incorrecto o asociado a otro nombre, detén la publicación y consulta a la asesoría.

### Respuesta pendiente

```text
taxId =
Documento y fecha usados para validarlo =
Persona que lo confirmó =
```

---

## 3. Domicilio publicable — `registeredAddress`

### Qué es

Es la dirección que debe identificar al titular o a uno de sus establecimientos permanentes. Debe decidirse con criterio profesional si se publicará el domicilio fiscal, el social o la dirección completa del establecimiento.

Debe incluir, cuando corresponda:

- tipo y nombre de vía;
- número, bloque, piso o local;
- código postal;
- localidad;
- provincia y país.

### Por qué hace falta

La identificación del prestador debe permitir una comunicación directa y efectiva. Poner solo `Zaragoza, España` no identifica un domicilio completo.

### Cómo conseguirlo

1. Consulta el certificado de situación censal vigente.
2. Si existe una sociedad, compáralo con su domicilio social en el Registro Mercantil.
3. Si se pretende publicar el establecimiento en vez del domicilio fiscal, pide a la asesoría que confirme que esa dirección satisface las obligaciones aplicables.
4. Comprueba que el titular autoriza expresamente su publicación.

### Cómo validarlo

- Verifica código postal y escritura exacta de la vía.
- Confirma que la correspondencia legal puede recibirse allí.
- Si es una vivienda particular, no la publiques automáticamente: valida primero con la asesoría qué dirección debe mostrarse.
- No deduzcas la dirección a partir de Google Maps, redes sociales o la ubicación aproximada del taller.

### Respuesta pendiente

```text
registeredAddress =
Tipo de dirección: fiscal / social / establecimiento =
Documento y fecha usados para validarla =
Publicación autorizada por =
```

---

## 4. Datos registrales — `registryDetails`

### Qué es

Son los datos de inscripción en el Registro Mercantil u otro registro público cuando la forma jurídica y la actividad estén sujetas a inscripción. Suelen expresarse mediante Registro, tomo, libro, folio, sección, hoja e inscripción.

### Cuándo puede no aplicar

Una persona autónoma individual puede no tener una inscripción mercantil que deba indicarse. No debe asumirse: la asesoría debe confirmarlo. Si no corresponde, el valor final será una frase explícita como `No aplicable por tratarse de empresario individual no inscrito`, revisada profesionalmente.

### Cómo conseguirlo

1. Revisa la escritura de constitución y las inscripciones posteriores.
2. Solicita una nota informativa mercantil actualizada.
3. Consulta a la asesoría si el titular es una persona física o existe otro registro profesional obligatorio.

El [Colegio de Registradores](https://sede.registradores.org/site/mercantil) indica que la nota informativa mercantil puede incluir denominación, NIF, domicilio y datos registrales de inscripción.

### Cómo validarlo

- Usa la inscripción vigente y la denominación actual.
- No copies únicamente los datos de la escritura inicial si hubo cambios societarios.
- Si no aplica, deja constancia escrita de quién lo confirmó; no dejes el campo vacío.

### Respuesta pendiente

```text
registryDetails =
Si no aplica, motivo confirmado =
Nota o documento consultado y fecha =
Confirmado por =
```

---

## 5. Dominio definitivo — `siteUrl`

### Qué es

Es la dirección pública y canónica de la web. Debe incluir `https://` y no llevar una barra final.

Ejemplos de formato:

```text
https://confeccionessv.es
https://www.confeccionessv.es
```

Debe elegirse una sola variante como principal. La otra debería redirigir hacia ella.

### Por qué hace falta

Se utiliza para generar metadatos, enlaces canónicos, `robots.txt`, `sitemap.xml` y versiones alternativas ES/EN. Un dominio provisional de despliegue no debería convertirse por accidente en la URL oficial.

### Cómo conseguirlo

1. Decide el dominio con el titular.
2. Comprueba quién controla la cuenta del registrador y quién renovará el dominio.
3. Añádelo al proveedor de hosting y configura sus DNS.
4. Activa HTTPS y configura la redirección entre `www` y sin `www`.

### Cómo validarlo

- Abre la URL desde una ventana privada y comprueba que carga con candado HTTPS.
- Verifica que el certificado corresponde al dominio y no muestra advertencias.
- Prueba las variantes `http`, `https`, `www` y sin `www`; todas deben terminar en la URL canónica elegida.
- Comprueba que `/es`, `/en`, `/robots.txt` y `/sitemap.xml` responden correctamente.
- Guarda acceso y datos de renovación en un gestor seguro, no en este repositorio.

### Respuesta pendiente

```text
siteUrl = https://
Registrador del dominio =
Titular de la cuenta =
Fecha de renovación =
Variante canónica validada por =
```

---

## 6. Proveedor de alojamiento — `hostingProvider`

### Qué es

Es la empresa que recibe y sirve la aplicación a través de Internet. Puede tratar datos técnicos como direcciones IP, registros de seguridad y solicitudes HTTP aunque el formulario no guarde datos en una base de datos.

### Cómo saber cuál es

1. Identifica desde qué panel se publica la web.
2. Revisa el proyecto, la cuenta propietaria y el plan contratado.
3. Si se despliega en Vercel, el valor descriptivo podría ser `Vercel Inc.`, pero debe confirmarse con el contrato y los documentos vigentes del plan utilizado.
4. Si hay CDN, proxy, protección DNS o servicios adicionales, anótalos también para revisar si deben declararse.

### Cómo validarlo

- Accede al panel del proyecto; no lo deduzcas únicamente por una URL `vercel.app`.
- Descarga o enlaza las condiciones, política de privacidad, lista de subencargados y acuerdo de tratamiento aplicables.
- Comprueba si el plan permite formalizar el acuerdo necesario. El [DPA de Vercel](https://vercel.com/legal/dpa) publicado actualmente indica el ámbito de planes al que aplica; hay que verificar el plan real y la versión vigente al contratar.
- Confirma si se activarán Vercel Analytics, Speed Insights, registros avanzados u otros servicios. No deben activarse sin revisar la política de cookies y privacidad.

### Respuesta pendiente

```text
hostingProvider =
Nombre de la cuenta propietaria =
Plan contratado =
DPA/condiciones revisados el =
Analítica o servicios adicionales activos = sí / no; detalle:
Confirmado por =
```

---

## 7. Proveedor de correo — `emailProvider`

### Qué es

Es la empresa que almacena y procesa las consultas enviadas por correo. No debe confundirse la dirección visible con el proveedor contractual.

La dirección actual `confecciones.sv10@gmail.com` utiliza una cuenta personal gratuita de Google Gmail, confirmado por el titular.

### Por qué hace falta

Los mensajes pueden contener nombre, teléfono, correo, descripción de una prenda y otra información personal. Debe conocerse quién los almacena, bajo qué condiciones y durante cuánto tiempo.

### Cómo conseguirlo

1. Inicia sesión en la cuenta y revisa el tipo de suscripción.
2. Comprueba si existe consola de administración de Google Workspace.
3. Revisa reenvíos automáticos, cuentas delegadas y aplicaciones con acceso.
4. Revisa las condiciones y herramientas de privacidad aplicables. La [política de privacidad de Google](https://policies.google.com/privacy?hl=es) explica el tratamiento general, pero debe verificarse además el contrato concreto del producto utilizado.

### Cómo validarlo

- Confirma quién es propietario y quién puede acceder a la cuenta.
- Activa autenticación en dos pasos y revisa métodos de recuperación.
- Elimina accesos o reenvíos que ya no sean necesarios.
- No escribas contraseñas ni códigos de recuperación en este documento.
- Consulta con un profesional si el servicio utilizado ofrece garantías contractuales adecuadas para el tratamiento empresarial previsto.

### Respuesta confirmada

```text
emailProvider = Google Gmail (cuenta gratuita)
Producto o plan exacto = Gmail gratuito
Propietario de la cuenta =
Personas con acceso autorizadas y revisadas = sí / no
Reenvíos o integraciones revisados = sí / no
Condiciones revisadas el =
Confirmado por =
```

---

## 8. Plazo de conservación — `privacyRetention`

### Qué es

Es el periodo durante el cual se conservarán las consultas que llegan por email o WhatsApp cuando todavía no existe —o finalmente no existe— una contratación.

No debe elegirse un número arbitrario. Debe corresponder al tiempo realmente necesario para contestar, hacer seguimiento y atender posibles responsabilidades. Si la consulta termina en encargo o factura, otros documentos pueden tener plazos legales distintos y deben gestionarse por separado.

### Por qué hace falta

El principio de limitación del plazo exige no conservar datos identificables más tiempo del necesario para su finalidad. La política debe describir el plazo o los criterios utilizados para determinarlo.

### Cómo decidirlo

1. Describe el ciclo real de una consulta: recepción, respuesta, presupuesto, aceptación o cierre.
2. Decide cuándo se considera cerrada una consulta sin contratación.
3. Identifica si existe un periodo razonable para reabrirla.
4. Separa consultas, encargos, facturas, garantías y reclamaciones.
5. Pide a la asesoría o profesional de privacidad que valide cada plazo.
6. Configura un procedimiento periódico real para borrar o revisar mensajes; escribir un plazo que nunca se aplica no basta.

La AEPD analiza el principio de limitación y el bloqueo de datos en su [informe sobre plazos de conservación](https://www.aepd.es/documento/2019-0148.pdf). La cifra final debe adaptarse al tratamiento concreto.

### Cómo validarlo

- El plazo escrito debe coincidir con la práctica de Gmail, WhatsApp y cualquier copia o exportación.
- Debe existir una persona responsable de ejecutar la revisión o borrado.
- Confirma qué ocurre con copias de seguridad y obligaciones de bloqueo.
- Evita valores vagos como `indefinidamente` o `mientras sea útil`.

### Respuesta pendiente

```text
privacyRetention =
Momento desde el que empieza a contar =
Procedimiento de revisión o borrado =
Frecuencia de la revisión =
Persona responsable =
Validado profesionalmente por y fecha =
```

---

## 9. Fecha de entrada en vigor — `effectiveDate`

### Qué es

Es la fecha desde la que se consideran aprobados y aplicables los textos legales publicados. No es necesariamente la fecha en la que se creó el archivo.

### Cómo determinarla

1. Completa todos los datos anteriores.
2. Revisa las versiones ES y EN.
3. Confirma proveedores, cookies y funcionamiento real de la web.
4. Obtén la aprobación del titular y la revisión profesional acordada.
5. Usa la fecha de aprobación o publicación efectiva.

### Cómo validarlo

- Utiliza un formato inequívoco: `DD/MM/AAAA`.
- La misma fecha debe aparecer en las tres políticas y ambos idiomas.
- Si las condiciones cambian de forma sustancial, actualiza la fecha y conserva internamente la versión anterior.
- No pongas una fecha futura ni una fecha anterior a la revisión final.

### Respuesta pendiente

```text
effectiveDate = DD/MM/AAAA
Versión de los textos =
Aprobado por =
Revisado por =
```

---

## 10. Datos ya incorporados que también deben confirmarse

Estos campos tienen valor en el código, pero no deben considerarse validados solo por aparecer allí.

### Nombre comercial — `tradeName`

- Valor actual: `Confecciones SV`.
- Confirmar que el titular autoriza su uso y que coincide con el nombre público deseado.
- Comprobar si existe registro de marca o nombre comercial; no afirmar que está registrado sin documentación.

```text
tradeName confirmado =
Autorizado por =
```

### Correo público — `email`

- Valor actual: `confecciones.sv10@gmail.com`.
- Enviar y recibir un correo de prueba.
- Confirmar que se revisa regularmente y puede atender solicitudes de derechos.
- Confirmar que no es una cuenta abandonada o compartida sin control.

```text
email confirmado =
Prueba realizada el =
Responsable de atenderlo =
```

### Teléfonos — `phone` y `secondaryPhone`

- Valores actuales: `657 730 970` y `602 571 925`.
- Realizar llamadas de prueba.
- Confirmar quién atiende cada número y que el titular autoriza su publicación.
- Confirmar cuál debe figurar como principal.

```text
phone confirmado =
secondaryPhone confirmado =
Pruebas realizadas el =
Autorizados por =
```

### Jurisdicción — `jurisdiction`

- Valor actual: `Zaragoza, España`.
- No elegirla solo por la ubicación comercial: debe revisarse junto con domicilio, tipo de titular y normas imperativas de consumidores.
- La política ya preserva los fueros obligatorios de consumidores; aun así, la redacción final debe revisarse profesionalmente.

```text
jurisdiction confirmada =
Validada por y fecha =
```

---

## 11. Comprobaciones técnicas y operativas

### Seguimiento y cookies

- [ ] Confirmar que no se usa Google Analytics.
- [ ] Confirmar que no se usa Meta Pixel.
- [ ] Confirmar que no se ha activado Vercel Web Analytics o Speed Insights sin revisión.
- [ ] Confirmar que no hay mapas, vídeos, chats o widgets incrustados que almacenen información.
- [ ] Repetir la auditoría de cookies sobre la versión desplegada, no solo en desarrollo local.

Si se añade cualquiera de estos servicios, habrá que volver a revisar `content.js` y posiblemente implementar un gestor de consentimiento antes de cargarlo.

### Proveedores y accesos

- [ ] Identificar quién posee las cuentas de dominio, hosting, Gmail, WhatsApp y Facebook.
- [ ] Activar autenticación en dos pasos cuando esté disponible.
- [ ] Retirar accesos de personas que ya no deban tenerlos.
- [ ] Guardar códigos de recuperación en un lugar seguro fuera de GitHub.
- [ ] Revisar contratos, subencargados y transferencias internacionales con asesoramiento adecuado.

### Contenidos y actividad

- [ ] Confirmar autorización para publicar fotografías, logotipos y textos.
- [ ] Confirmar que precios, horarios, teléfonos y modalidades de entrega son actuales.
- [ ] Confirmar que el formulario no solicita información innecesaria o especialmente sensible.
- [ ] Definir quién responderá solicitudes de acceso, rectificación, supresión y demás derechos.

---

## 12. Plantilla final para `src/config/legal.js`

Solo sustituye los valores cuando estén documentados y confirmados:

```js
export const legalConfig = Object.freeze({
  legalName: "NOMBRE O RAZÓN SOCIAL CONFIRMADA",
  tradeName: "Confecciones SV",
  taxId: "NIF CONFIRMADO",
  registeredAddress: "DIRECCIÓN COMPLETA CONFIRMADA",
  registryDetails: "DATOS REGISTRALES O TEXTO DE NO APLICACIÓN VALIDADO",
  email: "confecciones.sv10@gmail.com",
  phone: "657 730 970",
  secondaryPhone: "602 571 925",
  siteUrl: "https://dominio-definitivo.es",
  hostingProvider: "PROVEEDOR Y, SI PROCEDE, ENTIDAD CONTRACTUAL",
  emailProvider: "PROVEEDOR Y PRODUCTO CONFIRMADOS",
  privacyRetention: "PLAZO Y CRITERIO CONFIRMADOS",
  effectiveDate: "DD/MM/AAAA",
  jurisdiction: "JURISDICCIÓN VALIDADA",
});
```

Cuando todos los campos obligatorios contengan valores:

- desaparecerá el aviso de documento incompleto;
- `robots.txt` permitirá la indexación;
- `sitemap.xml` incluirá las rutas ES/EN;
- los marcadores `[PENDIENTE: ...]` dejarán de aparecer.

## 13. Validación antes del lanzamiento

Ejecuta:

```bash
npm run lint
npm run build
```

Revisa visualmente:

- `/es/legal/aviso-legal`
- `/es/legal/privacidad`
- `/es/legal/cookies`
- `/en/legal/aviso-legal`
- `/en/legal/privacidad`
- `/en/legal/cookies`
- `/robots.txt`
- `/sitemap.xml`

Finalmente, comprueba desde un móvil y un ordenador que el formulario muestra la información básica de privacidad, exige confirmar su lectura y abre correctamente el canal elegido.
