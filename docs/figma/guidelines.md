# antonioblanquez.es — guidelines for Figma Make

Read this file before every prompt. It is the single source of truth. When a
prompt conflicts with this file, follow this file and say so.

## What we are building

The personal website of Antonio Blánquez: a home page and one page per
project. It is a visual model only; production will be a static Astro site
(not your concern here). Three sizes with equal weight: desktop (1280 px),
tablet (820 px) and mobile (390 px). Language of every UI string:
**Spanish (Spain)**, exactly as given in this file or in the prompts; never
translate, rephrase, shorten or add copy.

## Hard rules (never break)

1. **Use only the copy given.** Where copy is missing, write
   `[texto pendiente]`. Never invent sentences, taglines, testimonials,
   numbers, skills, dates or project details. Keep Spanish quotes « »,
   accents and «ñ» exactly as given.
2. **Contrast (WCAG 2.2 AA):** text ≥ 4.5:1; large text, UI parts and
   focus rings ≥ 3:1 on their background.
3. **Colour is never the only cue.** Links are underlined or clearly
   labelled; a project's colour always sits next to its name in words.
4. **Keyboard and focus:** everything clickable is a real link or button,
   with a visible focus ring (2 px, 2 px offset). A «Saltar al contenido»
   skip link is the first focusable element.
5. **Structure:** one `h1` per page; headings in order without skipping
   levels; `header`, `nav`, `main` and `footer` landmarks.
6. **Touch targets:** links and buttons ≥ 44 × 44 px on tablet and mobile.
7. **No horizontal scroll at 320 px.** Mobile is a first-class layout.
8. **Contact is direct:** email shown as a `mailto:` link, plus LinkedIn and
   GitHub. No contact form.
9. **Forbidden:** gradients, glass/blur effects, glowing orbs, animated or
   patterned backgrounds, parallax, scroll animations, heavy shadows,
   emojis, decorative icons, stock photos, generic illustrations, avatars,
   skill bars or percentages, "available" badges, typing effects, counters,
   carousels. Do not add dark mode, features or sections that no prompt
   asks for.

## Content (verbatim)

### Owner
- Name: Antonio Blánquez
- Short line: «Convierto procesos manuales en aplicaciones web que
  funcionan.»
- Long statement: «Ayudo a empresas que pierden horas en procesos manuales.
  Los convierto en aplicaciones web que funcionan. Llevo más de quince años
  dentro de esos procesos: banca, gestión documental, comercio electrónico.
  Ahora, además, construyo la herramienta. Defino qué hace y decido su
  arquitectura. Y no doy nada por entregado sin comprobar que funciona.»
- Email: ablanquez@gmail.com
- LinkedIn: https://www.linkedin.com/in/antonioblanquez/
- GitHub: https://github.com/ablanquez

### Projects (order of the current site; a later prompt may change it)
1. **RadiografIA** · colour `#332288`
   «Pon tu texto a contraluz: señala los rasgos de estilo que los
   asistentes de IA dejan más que las personas. 50 reglas con sus fuentes,
   6 géneros calibrados; nada sale del navegador.»
   En vivo: https://radiografia.antonioblanquez.es ·
   Código: https://github.com/ablanquez/radiografia
2. **Desplázame** · colour `#2563eb`
   «Cómo ir de un portal a otro en Zaragoza: 8 modos de transporte con
   motor de rutas propio.»
   En vivo: https://desplazame.antonioblanquez.es ·
   Código: https://github.com/ablanquez/desplazame
3. **ZetaBus** · colour `#7048e8`
   «Visor en vivo del autobús urbano de Zaragoza: llegadas por parada,
   flota en el mapa y desvíos detectados cruzando cuatro fuentes
   oficiales.»
   En vivo: https://zetabus.antonioblanquez.es ·
   Código: https://github.com/ablanquez/zetabus
4. **Linaje** · colour `#0f857d`
   «Tu árbol genealógico, autoalojado y bajo tu control: instalador
   guiado, parentesco automático, copias de seguridad y exportación
   completa.»
   Demo en vivo: https://linaje.antonioblanquez.es ·
   Código: https://github.com/ablanquez/linaje

Each project colour belongs to that project. Whether and where the site
uses these colours will be decided in a later prompt; until then do not use
them.

### Footer
«© 2026 Antonio Blánquez» and links «Aviso legal» (/aviso-legal.html),
«Privacidad» (/privacidad.html), «Condiciones» (/condiciones.html).

## Provisional (later prompts will replace these; do not polish them)

- **Colours:** white background, near-black text `#1A1A1A`, secondary text
  `#4A4A4A`, lines `#D9D9D9`. No accent colour yet.
- **Type:** the system sans-serif stack, 18 px body, line-height 1.5, text
  column max 66 characters.
- **Home sections, in this order:** header with name and navigation ·
  presentation (name, short line, long statement, contact links) ·
  projects · «Cómo trabajo» `[texto pendiente]` · «Sobre mí»
  `[texto pendiente]` · contact · footer.
- **Project page sections:** project name and one line · facts (role,
  technology, date, «En vivo» and «Código» links) · problem · solution ·
  decisions · how it was verified · result · what I would do differently.
  All body copy `[texto pendiente]` unless a prompt gives it.

## Deliverables we want from you

- Screens as previews we can «Copy as design layers». Layer names semantic
  and in Spanish: `cabecera`, `presentacion`, `proyectos`,
  `tarjeta-proyecto`, `como-trabajo`, `sobre-mi`, `contacto`, `pie`,
  `ficha-proyecto`.
- When asked, a `tokens.json` in the Design Tokens Community Group 2025.10
  format (colour as objects with colorSpace and components; dimensions
  with value and unit).
- No backend, no API calls, no storage, no analytics, no cookies.
