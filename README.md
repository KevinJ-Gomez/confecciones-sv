# Confecciones SV - Alta Costura Digital

Proyecto de desarrollo web a medida para **Confecciones SV**, un taller de restauración y arreglos en Zaragoza.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Internationalization:** Native Server-side i18n (ES/EN)

## Características clave

- **Calculadora de Presupuestos Dinámica:** Motor de cálculo en tiempo real con integración directa a WhatsApp, permitiendo al cliente conocer un coste estimado antes de contactar.
- **Arquitectura i18n:** Sistema de diccionarios JSON nativos, evitando dependencias externas y maximizando el SEO.
- **UX Editorial:** Interfaz diseñada bajo principios de "Alta Costura", priorizando la legibilidad y la elegancia minimalista.

## Puesta en marcha

Requisitos: Node.js 20.9 o posterior.

```bash
npm install
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev    # Entorno de desarrollo
npm run build  # Compilación de producción
npm run start  # Servidor de producción
npm run lint   # Análisis estático
```

## Preparación legal

Las páginas de aviso legal, privacidad y cookies se generan en español e inglés. Antes de publicar, completa todos los campos de [`src/config/legal.js`](src/config/legal.js). Mientras falte alguno, la aplicación:

- muestra una advertencia en los documentos legales;
- reemplaza los datos ausentes por marcadores visibles;
- bloquea la indexación de buscadores desde `robots.txt`;
- devuelve un sitemap vacío.

Los textos son una base técnica y deben revisarse profesionalmente antes del lanzamiento.

La información que debe recopilarse está organizada en [`INFORMACION-LEGAL-PENDIENTE.md`](INFORMACION-LEGAL-PENDIENTE.md), preparado para rellenarse, visualizarse o descargarse desde GitHub.

## Gestión del proyecto

Este proyecto fue desarrollado bajo una metodología *Issue-Driven*, documentando cada fase de desarrollo y corrección de bugs, garantizando un código mantenible y escalable.
