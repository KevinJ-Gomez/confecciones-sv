# Confecciones SV

> **Mi punto de partida en desarrollo web.** Este fue mi primer proyecto independiente: un prototipo creado de forma intensiva en un día, cuando todavía estaba comenzando a desarrollar aplicaciones por mi cuenta. Lo conservo público para mostrar de dónde partí y poder comparar su alcance con la evolución conseguida en proyectos posteriores.

Web corporativa experimental para un taller de confección y arreglos de Zaragoza. El objetivo fue transformar una necesidad sencilla de negocio en una primera experiencia digital: explicar servicios, estimar precios y facilitar el contacto.

## Contexto y aprendizaje

El proyecto se desarrolló con apoyo de herramientas de inteligencia artificial para acelerar la estructura inicial, explorar alternativas visuales y resolver dudas técnicas. Mi responsabilidad fue definir el objetivo, elegir y combinar las soluciones, revisar el resultado, corregirlo y convertir una idea inicial en un prototipo funcional desplegable.

Con este proyecto practiqué por primera vez:

- estructuración de una aplicación con Next.js;
- creación de componentes y estilos responsive;
- organización de contenidos en español e inglés;
- lógica de una calculadora de presupuestos;
- conexión de una interfaz web con WhatsApp;
- preparación de un proyecto para su despliegue.

No pretende representar mi nivel actual, sino documentar el comienzo del recorrido y los aprendizajes que después apliqué con mayor profundidad en proyectos como **SONELYA** y **DúoFit**.

## Funcionalidades

- **Calculadora orientativa de presupuestos:** genera una estimación antes del contacto.
- **Contacto mediante WhatsApp:** prepara la consulta con la información seleccionada.
- **Contenido bilingüe:** diccionarios propios para español e inglés.
- **Diseño responsive:** experiencia adaptada a diferentes tamaños de pantalla.
- **Base legal preparada:** páginas y configuración pendientes de completar con los datos definitivos del negocio.

## Tecnologías

- Next.js 16 y React 19
- Tailwind CSS v4
- Framer Motion
- JavaScript
- Vercel

## Demo

[Ver prototipo desplegado](https://confecciones-sv.vercel.app)

> La aplicación debe considerarse un prototipo. Los datos legales aún no están completos y, mientras falten, el proyecto bloquea deliberadamente la indexación de buscadores.

## Ejecución local

Requiere Node.js 20.9 o posterior.

```bash
npm install
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Limitaciones conocidas

- Fue construido como ejercicio intensivo de un día.
- No dispone todavía de una suite completa de pruebas automatizadas.
- Los textos legales requieren revisión profesional y datos definitivos.
- La primera versión dependió mucho de asistencia de IA; los proyectos posteriores muestran una dirección técnica, validación y arquitectura considerablemente más maduras.

## Evolución

Este repositorio permanece público por una razón: un portfolio no solo debe enseñar el mejor resultado, sino también la capacidad de aprender. Confecciones SV muestra el inicio; mis proyectos posteriores muestran cómo evolucioné hacia TypeScript, pruebas automatizadas, autenticación, persistencia, seguridad de datos, aplicaciones instalables y arquitecturas de mayor complejidad.
