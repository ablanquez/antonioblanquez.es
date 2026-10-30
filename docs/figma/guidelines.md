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
   carousels. Do not add features or sections that no prompt asks for.
   Exceptions signed in Decisions 5 and 6: the gradient on the
   short line; soft shadows on project cards, the photo and the phone
   frame; the translucent blurred header and card bar; the signature
   font; icons and third-party logos inside buttons; the motion listed
   in Decision 6. Signed in Decision 12: dark mode and the theme button.
   Signed in Decision 13: the step icons of «Cómo trabajo».
   Signed in Decision 14: the soft shadow on the «Sobre mí» figure cards.
   Signed in Decision 15: the channel icons and the soft shadow of the
   «Contacto» card.

## Content (verbatim)

### Owner
- Name: Antonio Blánquez
- Short line: «Convierto procesos manuales en aplicaciones web.»
- Long statement: «Ayudo a empresas que pierden horas en procesos manuales.
  Llevo más de quince años dentro de esos procesos: banca, gestión
  documental, comercio electrónico. Ahora, además, construyo la
  herramienta: defino qué hace, la diseño y dirijo a la IA que escribe el
  código. Y no doy nada por entregado sin comprobar que funciona.»
- Email: ablanquez@gmail.com
- LinkedIn: https://www.linkedin.com/in/antonioblanquez/
- GitHub: https://github.com/ablanquez

### How I work (verbatim)
- Intro: «Cada proyecto deja reglas para el siguiente: lo que falló en uno
  entra por escrito en el método del otro.»
- 1. «Entender el problema» — «Primero, qué hace falta y para quién. Si
  los datos vienen de fuera, compruebo qué dice cada fuente antes de
  escribir una línea de código.»
- 2. «Diseñar en tres tamaños» — «Ordenador, tableta y móvil desde el
  principio, con las pautas de accesibilidad WCAG 2.2 en nivel AA. Cada
  decisión de diseño la veo aplicada antes de darla por buena, y los
  colores llevan su contraste calculado.»
- 3. «Construir por tandas» — «La IA escribe el código a partir de
  encargos escritos, y reviso cada tanda antes de pasar a la siguiente.
  Primero va lo que no puede fallar; la pantalla, después.»
- 4. «Comprobar» — «Un test solo sirve si falla cuando el código está
  roto, así que lo pruebo rompiendo el código. Cada pantalla la miro
  también en un móvil y una tableta de verdad. Los fallos reales quedan
  apuntados en una bitácora, con lo que daba bien mientras estaba roto.»
- 5. «Cerrar» — «Antes de dar un proyecto por terminado, lo reviso entero
  por partes: código, tests, interfaz, servidor, experiencia y
  documentación. Lo que sale de esa revisión se arregla antes de publicar
  la versión 1.0.0.»
- 6. «Mantener» — «Cuando llega un aviso de seguridad, primero compruebo
  si afecta de verdad. Si afecta, aplico el parche y lo verifico en la web
  publicada. Lo que dejo para más adelante queda apuntado con su motivo.»

### About me (verbatim)
- 1. «2007-2012 · Fundación DFA» — «En la Fundación DFA (Disminuidos
  Físicos de Aragón) digitalizamos el archivo de casi 25.000 socios para
  que las trabajadoras sociales y el equipo de empleo lo tuvieran a un
  clic. Después fui mando intermedio de un departamento de casi 100
  personas, con proyectos como el archivo de personal de la DGA y la
  digitalización del SEPE en más de 20 provincias, junto a Accenture y
  ECI.»
  Figures: casi 25.000 socios digitalizados; casi 100 personas a cargo.
- 2. «2012-2017 · Amazon» — «Vendí como autónomo casi 1.000 referencias de
  ferretería y accesorios de móvil, con más de 10.000 ventas gestionadas
  de principio a fin. Los precios, las comisiones y los portes los
  calculaba en Excel y los subía por CSV.»
  Figures: más de 10.000 ventas; casi 1.000 referencias.
- 3. «2017-2025 · Iberalbion» — «En Iberalbion, filial de WiZink, un banco
  sin oficinas, actualizaba cerca de 15.000 expedientes de KYC al mes
  (algunos meses, más), revisaba con backtesting procesos automáticos como
  el bloqueo de tarjetas o los cargos, y conciliaba las operaciones que el
  sistema no aceptaba. Al buscarles otra vía de entrada, a veces
  encontraba fallos que después se corregían.»
  Figures: cerca de 15.000 expedientes de KYC al mes; durante 8 años en banca digital.
- 4. «2025-2026 · Formación» — «Un año dedicado a formarme: un máster de
  IA y un máster en Frontend 360º.»
  Figures: en un año 2 másteres cursados.
- 5. «Desde 2026 · Aplicaciones propias» — «En junio de 2026 monté mis
  primeras aplicaciones web, las cuatro de esta página, y este portafolio.
  Las construyo en solitario: la IA escribe el código en el lenguaje que
  haga falta; desmontar el problema en piezas y volver a montarlo bien lo
  pongo yo, después de dieciocho años haciéndolo.»
  Figures: en solitario 4 aplicaciones creadas.
- Closing: «Cada etapa de mi carrera siguió un salto de la tecnología: el
  escáner, el comercio en línea, la banca digital. El siguiente es que
  cada empresa tenga procesos y aplicaciones a su medida, para que el
  trabajo repetitivo lo haga un proceso automático y la gente se dedique a
  lo que no se puede automatizar. Si tu empresa está en ese punto, o
  buscas a alguien que lo haga desde dentro, hablemos: estoy abierto a
  proyectos como autónomo y a incorporarme a un equipo.»
- Button: «Descargar CV (PDF)» → /cv-antonio-blanquez.pdf (file pending)

### Contact (verbatim)
- Response time (last line of the card's left column): «Respondo en menos
  de 24 horas laborables.»
- Name: «Antonio Blánquez»
- Role: «Idea, diseño y verificación · código con IA · en solitario»
- Place: «Zaragoza · en remoto o presencial»
- Email: «Correo» — «ablanquez@gmail.com»; buttons «Escríbeme» and
  «Copiar» (then «Copiado»; announced «Correo copiado»; on failure «No se
  pudo copiar»).
- LinkedIn: «LinkedIn» — «linkedin.com/in/antonioblanquez»
- GitHub: «GitHub» — «github.com/ablanquez»

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

Project icons (same order):
RadiografIA https://raw.githubusercontent.com/ablanquez/radiografia/main/docs/figma/icono/icono-c.svg ·
Desplázame https://raw.githubusercontent.com/ablanquez/desplazame/main/docs/img/logo.png ·
ZetaBus https://raw.githubusercontent.com/ablanquez/zetabus/main/docs/capturas/logo.png ·
Linaje https://raw.githubusercontent.com/ablanquez/linaje/main/docs/capturas/logo.png

**Decision 1 (signed 26/10/2026): endorsed.** Each project keeps its own
colour and icon. The colour appears as a 4 px stripe (top edge of its
card; above the h1 on its page) and, since Decision 6, in the project
name on its card; never in other text, links or backgrounds. The
icon sits left of the name: 32 px on its card, 48 px on its page, with
`alt=""` because the name is written next to it. Project icons are not
"decorative icons" in the sense of hard rule 9.

**Decision 2 (signed 26/10/2026): palette.** Page background `#F7F5F0`;
project cards and the screenshot slot on `#FFFFFF`; text `#1A1A1A`;
secondary text `#4A4A4A`; lines `#D9D9D9`; accent `#A63D1E` (terracotta)
for links and focus rings only. Links inside running text are
underlined; navigation, buttons and card names follow Decision 6. The «Menú» button keeps its text and border in `#1A1A1A`; its
focus ring is terracotta.

**Decision 2b (signed 26/10/2026): dark mode.** Light by default; dark
when the system asks for it (`prefers-color-scheme: dark`). Dark values:
page `#1C1A17`; cards and screenshot slot `#26231F`; text `#EDEAE4`;
secondary text `#B8B2A8`; lines `#4A453E`; links and focus rings
`#E58B6B`; «Menú» button text and border `#EDEAE4`; project stripes
RadiografIA `#8E7FEF`, Desplázame `#6B9BF5`, ZetaBus `#B48CF7`, Linaje
`#3FBFB2`. Project icons do not change. Extended by Decision 12.

**Decision 3 (signed 26/10/2026): typography.** IBM Plex Sans for all
text, weights 400 and 700. Sizes stay fixed in `rem` (no fluid type):
18 px body, line-height 1.5, text column max 66 characters. In this model
the font may load from Google Fonts; production will self-host it.

**Decision 4 (signed 26/10/2026): home order and navigation.** Order:
header · presentation · projects · «Cómo trabajo» · «Sobre mí» · contact ·
final navigation · footer. Navigation visible on desktop and tablet; a
«Menú» button only on mobile; the four links repeat before the footer.

**Decision 5 (signed 26/10/2026): colour family and section rhythm**
(route /color-d, built on /con-alma). Light theme:
- Neutral alternating backgrounds, full width: header, presentation,
  «Cómo trabajo» and contact on `#FFFFFF`; projects, «Sobre mí», final
  navigation and footer on `#F7F5F0`. No colour blocks and no dark band.
- Sections: padding-block 48 px on mobile, 80 px on desktop.
- Three tones of one family: dark `#6B2410` for h1 and h2; medium
  `#A63D1E` for links, the «Escríbeme» button and project names;
  light `#E58B6B` for decoration only (never text), currently only the
  4 px ring of the photo.
- Headings IBM Plex Sans 700: project h1 2.25 / 2.75 / 3 rem (mobile /
  tablet / desktop), h2 1.75 / 2.25 rem, card h3 1.5 rem. The home h1 is
  defined in Decision 6.
- Short line (the home h1 since Decision 6): linear gradient `#A63D1E` →
  `#6B2410` clipped to the text, `width: fit-content`; solid `#A63D1E`
  fallback; `forced-colors` → no gradient, `CanvasText`. No other text
  has a gradient.
- Project cards: `#FFFFFF`, 1 px `#D9D9D9` border, 12 px radius with
  `overflow: hidden`, shadow `0 2px 8px rgba(26,26,26,.06)`.
- Photo: circle, 10 rem on mobile and 15 rem from tablet up, 4 px
  `#E58B6B` ring, shadow `0 8px 24px rgba(107,36,16,.12)`.
- Dark-mode values for this decision: Decision 12.

**Decision 6 (signed 27/10/2026): header, buttons, cards and motion**
(route /detalles-3, built on /color-d). Amends Decision 1 and hard rule 9
as stated here.
- Header: sticky, `rgba(255,255,255,.9)` with 12 px backdrop blur and a
  1 px `#D9D9D9` bottom line; opaque `#FFFFFF` fallback (no blur support
  or `prefers-reduced-transparency`). `scroll-padding-top` = real header
  height + 8 px (WCAG 2.4.11).
- Signature: the header link «Antonio Blánquez» stays as real text, set
  in Dancing Script 700, `#6B2410`, 2.25 / 1.875 rem. Placeholder until
  the hand-drawn signature; whatever replaces it must keep the name as
  text for assistive technology and search engines.
- Header navigation: no underline at rest (`#1A1A1A`, 400); hover/focus
  `#A63D1E` with a 2 px underline. «Contacto» is a filled button
  (`#A63D1E`, white, 700, 8 px radius, hover `#6B2410`).
- Presentation: the name is not repeated. The short line is the page h1
  (1.875 / 2.5 / 3 rem, 700, line-height 1.15, max 22ch, gradient as in
  Decision 5), then the long statement, contact buttons and photo.
- Buttons (contact and project cards), 44 px min height, 8 px radius,
  18 px icon on the left (`currentColor`, `aria-hidden`), 8 px gap:
  primary filled `#A63D1E` / white (hover `#6B2410`); secondary white
  with 1 px `#A63D1E` border and text (hover `#FBEDE8`, border and text
  `#6B2410`). Contact: «Escríbeme» (envelope, primary), «LinkedIn» and
  «GitHub» (official marks, secondary). Cards: «En vivo» / «Demo en vivo»
  (globe, primary) and «Código» (GitHub mark, secondary). Narrow cards
  (< 300 px): padding 0 12px, gap 8 px.
- Other links (final navigation, footer): no underline at rest; hover/
  focus `#A63D1E` with a 2 px underline.
- Project card, top to bottom: 4 px project stripe · capture zone 16:10 ·
  description · buttons. Capture zone: desktop screenshot full size;
  56 px translucent white bar on top (same recipe as the header) with the
  project icon (32 / 24 px) and the h3 name; phone frame with the mobile
  screenshot on the right (9:19.5, from 8 px below the bar to 6 % from
  the bottom, 5 % from the right, `#1A1A1A` 5 px frame, 18 px radius,
  shadow `0 8px 24px rgba(26,26,26,.25)`, `alt=""`).
- Amends Decision 1: the project name is set in its project colour
  (large text, ≥ 3:1 on the bar in the worst case), never underlined. A
  ↗ arrow (stroke SVG, 20 / 18 px, `aria-hidden`) appears beside it on
  hover/focus; always visible on `hover: none` devices.
- The whole capture zone opens the project page through a stretched
  pseudo-element on the name link (not a wrapping link). The buttons stay
  outside the zone.
- Motion (amends rule 9), only `transform`, `opacity`, shadows and
  colours: card lift 4 px and shadow `0 8px 24px rgba(26,26,26,.12)` in
  200 ms; desktop screenshot zoom 1.05 in 300 ms on capture-zone hover or
  name focus; buttons and links 150 ms; reveal on scroll (h2, cards
  staggered 80 ms, section text, contact) 400 ms once, only after the
  script loads. `prefers-reduced-motion: reduce` → no movement, only
  colour and shadow. Smooth scrolling only without reduced motion.
- Dark-mode values for this decision: Decision 12.

**Decision 7 (signed 27/10/2026): third-party marks and mobile.** Amends
Decision 6.
- Third-party logos (GitHub, LinkedIn) keep an official colour: black
  `#1A1A1A` on light backgrounds, white on dark (both allowed by their
  brand guidelines); never recoloured. Buttons that carry them use the
  neutral style: `#FFFFFF` background, 1 px `#D9D9D9` border, logo and
  text `#1A1A1A`; hover/focus border `#1A1A1A` and background `#F7F5F0`;
  focus ring as everywhere. This includes «Código» on the project cards.
- Contact: «Escríbeme» keeps its text and envelope icon (primary).
  LinkedIn and GitHub become logo-only square buttons, 44 × 44 px, 20 px
  logo, with the service name as visually hidden text.
- Project cards narrower than 480 px: capture zone 4:3 instead of 16:10;
  the phone keeps its top and bottom rule, so it grows.
- Mobile (container narrower than 600 px): the photo is centred; the text
  stays left-aligned.

**Decision 8 (signed 27/10/2026): navigation states.** Amends Decision 6
for the header navigation.
- At rest, «Proyectos», «Cómo trabajo», «Sobre mí» and «Contacto» are all
  plain text: `#1A1A1A`, 400, no underline, no box. «Contacto» is no
  longer a filled button; the call to action is «Escríbeme».
- Hover and keyboard focus: `#FBEDE8` box, text `#6B2410`, 150 ms. Focus
  ring as everywhere.
- Current section: `#A63D1E` box, white text, `aria-current="true"`,
  updated while scrolling. Nothing is marked while the presentation is in
  view; at the bottom of the page «Contacto» is marked.
- Every state: 44 px high, padding 0 12px, 8 px radius, weight 400, so
  nothing shifts between states. Same behaviour in the open mobile menu.
- Signature link, final navigation and footer links keep Decision 6.

**Decision 9 (signed 27/10/2026): mobile bottom bar.** Amends Decisions 4
and 8 on mobile (container narrower than 600 px); tablet and desktop keep
the top navigation.
- Mobile header: only the signature, centred, still sticky and
  translucent. No «Menú» button and no drop-down menu.
- Bottom bar, fixed at the bottom: `rgba(255,255,255,.9)` with 12 px
  blur, 1 px `#D9D9D9` top line, opaque `#FFFFFF` fallback; 64 px high
  plus the device safe area. Four equal cells, each a link with a 24 px
  stroke icon in a 56 × 32 px pill and its name below at 0.75 rem:
  «Proyectos» (grid), «Cómo trabajo» (list of steps), «Sobre mí»
  (person), «Contacto» (envelope).
- States: rest icon and name `#4A4A4A`; hover/focus pill `#FBEDE8`,
  icon and name `#6B2410`; current section pill `#A63D1E` with white
  icon, name `#A63D1E` 700, `aria-current="true"`. Same rules as
  Decision 8 for which section is current, refined for the header and
  the bar alike: «Contacto» is marked only when the end of the page is in
  view, and after a click the clicked link stays marked until the user
  scrolls again by themselves.
- The «Arriba» button sits 16 px above the bar; the footer gets enough
  bottom space so neither covers it.
- The model shows three frames: desktop, tablet and mobile.
- The home page no longer repeats the four links before the footer, in
  any size (amends Decision 4): the sticky header and the bottom bar
  already keep them in view.
- Photo (amends the motion list of Decision 6): it never moves on its
  own. When a mouse pointer enters it, it floats twice (up 6 px and back,
  2.4 s per cycle, 4.8 s in total) and stops, even if the pointer stays;
  leaving does not cut the movement short. Only on devices with hover;
  never with `prefers-reduced-motion: reduce`.

**Decision 10 (signed 27/10/2026): project page.** Applies Decisions 5 to
9 to /proyectos/* (desktop, tablet and mobile frames) and sets the page
structure. Supersedes the provisional «Project page sections».
- Same site frame as the home page: sticky translucent header with the
  signature (link to /), the top menu on tablet and desktop and the
  bottom bar on mobile, with «Proyectos» always marked
  (`aria-current="true"`) and no automatic marking; the «Arriba» button;
  no final navigation before the footer.
- Back: «← Volver a proyectos» at the top of the content on tablet and
  desktop; on mobile, a 44 × 44 px «←» link left of the centred signature
  in the header, named «Volver a proyectos». Both go to the projects
  section of the home page. Arriving at the home page through any link to
  one of its sections counts as a click on that section's link (Decision
  9): it stays marked until the user scrolls by themselves.
- Order: back · header (4 px stripe, 48 px icon, h1 name in the project
  colour, the project line, «En vivo» or «Demo en vivo» and «Código»
  buttons) · composition (desktop screenshot 16:10 with the phone frame,
  as on the cards, larger; tablet screenshot pending) · facts (Rol,
  Fecha, Estado, Tecnologías as chips) · «Qué es y por qué existe» ·
  «Decisiones» · «Cómo lo comprobé» · «Lo que no hace» · «Resultado» ·
  «Qué haría distinto» · «Más capturas» · previous and next project.
  Body copy `[texto pendiente]` until it is written from each README.
- Previous and next in a circular order: RadiografIA → Desplázame →
  ZetaBus → Linaje → RadiografIA.
- /modo-oscuro keeps the old project page, forced to dark and without the
  theme button, as a reference; dark mode itself is Decision 12.

**Decision 11 (signed 27/10/2026): project page redesign.** Amends Decisions
1, 5 and 10 on /proyectos/* only (desktop, tablet and mobile frames); the
home page keeps them as they were.
- Every band between the site header and the footer is `#FFFFFF`, with
  no alternating bands (header and footer as on the home page); blocks are
  separated by space only (32 px above and below on mobile, 48 px on
  tablet and desktop). Text sits in a reading column of 66 characters at
  most, centred in the frame; the composition, «Más capturas» and the
  previous and next boxes use the full content width, also centred.
- Order: back (tablet and desktop) · composition · entry · «Por qué
  existe» · «Decisiones» · «Cómo lo comprobé» · «Lo que no hace» ·
  «Resultado» · «Qué haría distinto» · «Más capturas» · previous and next
  project.
- Composition: the desktop screenshot inside a browser-window frame (36 px
  `#F7F5F0` bar with three `#D9D9D9` dots and the project domain as plain
  text in a pill at 14 px), with the phone frame on the right as on the
  cards.
- Entry: 4 px stripe · technology tags (neutral; never brand colours or
  logos) · 48 px icon and h1 · data line (date, status and version, each
  with an 18 px stroke icon and a visually hidden label) · lead text
  1.25 / 1.125 rem `#4A4A4A` · buttons. «Rol» is not shown on project
  pages: it is the same in all four and will be said once on the home
  page.
- Blocks: «Decisiones» is a numbered list with 36 px `#A63D1E` circles;
  «Cómo lo comprobé» opens with a figures box (value in the project colour,
  never broken across lines; label at 16 px). The figures, «Lo que no hace»
  and the gallery share one neutral box: `#F7F5F0`, 12 px radius, no border
  or shadow. «Resultado» is the only emphasis box: `#A63D1E` with white
  text. Each capture in «Más capturas» is a figure with a 16 px caption;
  its alt only says what the image is.
- Every content h2 has a 48 × 4 px rule above it in the project colour
  (white inside «Resultado»), drawn as a border so it survives forced
  colours.
- No text in main below 16 px, except the domain in the window bar (14 px).
- «Arriba» appears once the composition has scrolled above the viewport.
- Amends Decision 1: the project colour also marks the figures and the
  rules above the h2. As in Decision 6, the data-line icons are labels next
  to their text, not the decorative icons of rule 9.

**Decision 12 (signed 28/10/2026): design tokens, dark mode, theme
button and /identidad.** Extends Decision 2b to everything designed after
it; amends Decision 10, hard rule 9 and the deliverables.
- Tokens: every colour, shadow, spacing, radius, font size and duration
  is a CSS custom property written in one place: light in `:root` and
  `[data-tema='claro']`; dark in `[data-tema='oscuro']` and, when nothing
  forces the theme, in `prefers-color-scheme: dark` on
  `:root:not([data-tema])`. A token replaces only values of its own type.
  The old variables (`--claro-*`, `--oscuro-*`, `--fondo`, `--franja-*`…)
  are gone.
- Colours (light · dark): `--color-fondo` #F7F5F0 · #1C1A17;
  `--color-superficie` #FFFFFF · #26231F; `--color-caja` #F7F5F0 ·
  #312D28; `--color-texto` #1A1A1A · #EDEAE4; `--color-texto-secundario`
  #4A4A4A · #B8B2A8; `--color-linea` #D9D9D9 · #4A453E; `--color-titulo`
  #6B2410 · #F0A587; `--color-acento` #A63D1E · #E58B6B;
  `--color-acento-relleno` #A63D1E in both; `--color-acento-relleno-hover`
  #6B2410 in both; `--color-sobre-acento` #FFFFFF in both;
  `--color-resalte` #FBEDE8 · #3D2A23; `--color-resalte-texto` #6B2410 ·
  #F6CDBD; `--color-decoracion` #E58B6B in both; `--color-cabecera`
  rgba(255, 255, 255, 0.9) · rgba(38, 35, 31, 0.9); `--color-logo-terceros`
  #1A1A1A · #FFFFFF; `--color-marco-telefono` #1A1A1A · #3D3934;
  `--color-degradado-inicio` #A63D1E · #E58B6B; `--color-degradado-fin`
  #6B2410 · #F0A587; `--color-proyecto-radiografia` #332288 · #8E7FEF;
  `--color-proyecto-desplazame` #2563EB · #6B9BF5;
  `--color-proyecto-zetabus` #7048E8 · #B48CF7; `--color-proyecto-linaje`
  #0F857D · #3FBFB2; `--color-placa-icono` transparent · #EDEAE4;
  `--color-lienzo` #F2F2F2 (model canvas only, not part of the site).
- Other tokens: `--sombra-tarjeta`, `--sombra-tarjeta-hover`,
  `--sombra-telefono`, `--sombra-foto` (dark versions use black);
  `--espacio-1` to `--espacio-8` (4, 8, 12, 16, 24, 32, 48, 80 px);
  `--radio-raya`, `--radio-boton`, `--radio-caja`, `--radio-telefono`,
  `--radio-pildora`, `--radio-circulo`; `--duracion-rapida` 150 ms,
  `--duracion-media` 200 ms, `--duracion-zoom` 300 ms,
  `--duracion-aparicion` 400 ms, `--escalon-aparicion` 80 ms,
  `--duracion-flotar` 2.4 s; `--tamano-*` for font sizes; `--fuente`,
  `--fuente-firma`, `--fuente-codigo`; `--tactil` for touch targets.
- Dark mode exceptions: white text on `#A63D1E` stays in both themes
  (primary button, current menu section, «Decisiones» circles,
  «Resultado» and its rule). Project icons sit on a `#EDEAE4` plate in dark
  only (8 px radius, 6 px on 24 px icons, 4 px padding); in light there is
  no plate and nothing moves. The theme change is not animated.
- Theme button: one button, two states. The effective theme is the saved
  one, or the system one when nothing is saved. A click switches to the
  opposite of the effective theme; if that equals the system theme, the
  saved value is cleared and the site follows the system again; otherwise
  it is saved in localStorage under «tema» («claro» or «oscuro»), inside
  try/catch. With nothing saved, the site follows system changes live.
  44 × 44 px `<button>`, 20 px stroke icon showing the theme it switches
  to (moon in light, sun in dark); aria-label and title «Cambiar a tema
  oscuro» / «Cambiar a tema claro»; no aria-pressed; one visually hidden
  role="status" for the whole page says «Tema oscuro» / «Tema claro».
  Place: in the header 8 px right of «Contacto», outside the menu list,
  on tablet and desktop; in the right 44 px column of the header on
  mobile. The bottom bar does not change.
- Header fit: the signature is 2.25rem on desktop, 1.875rem on tablet
  and mobile, and 1.625rem when the container is under 360 px, never
  wrapped. Mobile header grid 44 px · 1fr · 44 px with an 8 px gap. The
  header is 69 px at every size, 320 px included.
- /identidad: internal style page, not linked from the menu, same site
  frame as the project pages. h1 «Identidad visual»; h2 «Colores»,
  «Tipografía», «Espacios», «Esquinas», «Sombras», «Movimiento»,
  «Piezas». «Colores» shows both swatches of every colour token, its
  values, its use and, for text colours, its WCAG contrast computed live
  on each background with the minimum it must meet. «Piezas» paints the
  real pieces with their real classes; samples go nowhere and the theme
  button sample is static (aria-hidden). Whether it is published is still
  open.
- Pending: whether the minimum text sizes move from px to rem.

**Decision 13 (signed 28/10/2026): home presentation, «Cómo trabajo» and
«Arriba».** Amends Decisions 3, 6, 9, 10 and hard rule 9 as stated here.
- Presentation: the copy is the one in «Owner». The h1 is at most 24ch
  (amends the 22ch of Decision 6), so on desktop it takes two lines.
  Code order on every size: h1 · photo · text · contact buttons (WCAG
  1.3.2, technique C27). Mobile shows that same order, 24 px between h1
  and photo and between photo and text; the photo stays centred and the
  text left-aligned. Tablet and desktop: the photo stays on the right,
  placed with grid areas (no CSS order) and centred vertically on the
  block from the top of the h1 to the bottom of the buttons.
- «Cómo trabajo»: h2 · intro · six step cards, copy as in «How I work».
  The intro spans the full content width (exception to the 66-character
  column of Decision 3: it is one sentence). The steps are an `ol` with
  `role="list"`, one `h3` per step. Grid: three columns on desktop
  (24 px gap), two on tablet and one on mobile (16 px gap); cards in a
  row share the same height. Each card is the neutral box of Decision 11
  (`--color-caja`, 12 px radius, no border or shadow; 32 px padding, 24 px
  on mobile) and is not clickable. Inside: a 48 px `--color-acento-relleno`
  square with a 24 px white stroke icon (`aria-hidden`), then the h3
  (`--tamano-nombre-caja`, 700, `--color-titulo`) at 16 px and the text at
  8 px; on mobile the square sits beside the h3 and the text goes 12 px
  below, full width. Icons: magnifier, screen and phone, code, checklist,
  package with check, shield with check. Signed exception to hard rule 9:
  each icon sits next to its written title.
- «Arriba» (every page that has it): at rest a round 44 × 44 px link with
  a 20 px arrow; the word «Arriba» stays inside as visually hidden text.
  On mouse hover (`hover: hover` and `pointer: fine`) and on keyboard
  focus it shows «Arriba» left of the arrow at its natural width, growing
  leftwards; the width changes without transition and the text fades in
  (`--duracion-rapida`; no fade with reduced motion). Position, colours,
  border, shadow and when it appears do not change.

**Decision 14 (signed 29/10/2026): «Sobre mí».** Amends hard rule 9 as
stated here. Copy as in «About me».
- Timeline: an `ol` with `role="list"` across the full content width, one
  `li` per stage with an `h3` label (years in `<time>`) and its paragraph.
  A 2 px vertical line and 12 px dots in `--color-decoracion`, drawn with
  borders on pseudo-elements; the line runs from the first dot to the
  last. Spacing: h2 to list 24 px, h3 to text 8 px, between stages 32 px.
- Figure cards after each stage's text: a `p` per figure with qualifier
  (may be empty but always keeps its line), value and label, read as one
  phrase («casi 25.000 socios digitalizados»). White (`--color-superficie`)
  body, 4 px `--color-acento-relleno` top stripe, 12 px radius, 16 px
  padding (12 px on mobile), soft shadow `--sombra-tarjeta`. Value
  `--tamano-cifra-ficha` (2rem; 1.5rem on mobile), 700, `--color-titulo`,
  never wrapped; qualifier and label 16 px `--color-texto-secundario`.
- Desktop: each stage is a two-column grid, text `minmax(0,1fr)` and
  figures 360 px with a 48 px gap; figures in two equal columns (16 px),
  top-aligned with the h3, joined to it by a 1 px `--color-decoracion`
  connector from 12 px after the h3 text to the first card. Tablet:
  figures under the text, two per row (16 px), no connector. Mobile: two
  per row (12 px gap), one per row under 360 px.
- Motion (Decision 6 rules): when a stage's cards enter the view, once,
  the stripe is already visible; after 200 ms the body unfolds from it
  (`scaleY` 0 to 1 from the top plus opacity, `--duracion-aparicion`,
  ease-out) and the shadow comes in; the second card starts 80 ms later.
  Card height never changes. Without the script or with reduced motion,
  final state at once.
- Closing card: centred, max 737 px (full width on tablet and mobile),
  `--color-acento-relleno` with `--color-sobre-acento` text, 12 px radius,
  32 px padding (24 on mobile). Inside, 24 px below the text and centred,
  the neutral button «Descargar CV (PDF)» with a download icon, linking to
  `/cv-antonio-blanquez.pdf` with `download` (file pending; its size will
  join the label). Focus ring inside the card in `--color-sobre-acento`.
- Signed exception to hard rule 9: the soft shadow on the figure cards.

**Decision 15 (signed 29/10/2026): «Contacto» as a business card.** Amends
hard rule 9 as stated here. Copy as in «Contact».
- Section: the h2 «Contacto» stays in the code, visually hidden
  (`sr-only`); the card is all that shows. The presentation keeps its own
  contact buttons.
- Card: centred, max 737 px (full width on tablet and mobile). 4 px
  `--color-acento-relleno` top stripe; body `--color-fondo` with a 1 px
  `--color-linea` border, `--sombra-tarjeta`, 12 px radius, 32 px padding
  (24 on mobile). Desktop and tablet: two columns (2fr and 3fr, 32 px gap,
  a 1 px `--color-linea` vertical line between them) of equal height; the
  right column stretches and shares the spare height among its rows.
  Mobile: one column, the two parts split by a horizontal line and 24 px.
- Left column, left-aligned, in this order: name (`--fuente-firma` 700,
  `--tamano-firma`, `--color-titulo`, one line); 16 px below, the 64 px
  photo circle with a 2 px `--color-decoracion` ring, centred in the
  column (placeholder «[foto]» with `aria-hidden` until the new photo,
  which takes `alt=""`); 16 px below, the role (`--tamano-cuerpo`,
  `--color-texto`); 16 px below, the place, and 16 px below, the response
  time (16 px, `--color-texto-secundario`). Role and response time use
  `text-wrap: balance`; a no-break space joins «24» and «horas».
- Right column: a `ul` with `role="list"`, three `li` split by 1 px
  `--color-linea` lines. Each row: a 20 px icon or logo (`aria-hidden`,
  third-party logos as in Decision 7), the channel name (16 px, 700,
  `--color-texto`) and the value below it (16 px,
  `--color-texto-secundario`).
- Email row: 12 px below, «Escríbeme» (primary, `mailto:`) and «Copiar»
  (neutral `button`), 44 px high, 8 px apart, wrapping if needed.
  «Copiar» copies the address; for 2 s its label reads «Copiado» and a
  `role="status"` region, present from load and visually hidden, says
  «Correo copiado»; on failure, «No se pudo copiar», and the address stays
  selectable.
- LinkedIn and GitHub rows: whole links, min 44 px, hover and focus with
  `--color-resalte` and `--radio-boton` like the menu; on the right a
  20 px arrow-up-right stroke icon in `--color-texto-secundario`
  (`aria-hidden`). Accessible names «LinkedIn:
  linkedin.com/in/antonioblanquez» and «GitHub: github.com/ablanquez».
  Addresses never break inside a word: the only break points are a
  `<wbr>` after «linkedin.com/in/» and after «github.com/».
- Motion (Decision 6 rules): the card unfolds like the «Sobre mí» figure
  cards (stripe visible; after 200 ms the body goes `scaleY` 0 to 1 plus
  opacity in `--duracion-aparicion`; height fixed; once). Without the
  script or with reduced motion, final state at once. Dark mode: tokens
  only.
- Signed exception to hard rule 9: the channel icons and logos, always
  next to their written names, and the soft shadow on the card.

**Decision 16 (signed 29/10/2026): maximum content width.** Up to 1280 px
nothing changes. Above 1280 px every band (header, sections, footer)
keeps its background across the full width, and its content stays at
1120 px (1280 − 2 × 80), centred: from 1024 px up, `--margen` is
`max(80px, calc((100cqi - 1120px) / 2))`, so only the side margin grows.
Header, sections, footer and «Volver» share that margin and stay aligned.

**Decision 17 (signed 29/10/2026): legal pages.** «Aviso legal»,
«Privacidad» and «Condiciones» use the site frame (header, footer, bottom
bar, theme), with no section marked and no «Volver». One white
(`--color-superficie`) band; a 66-character reading column, centred. h1 as
on project pages (`--tamano-h1-proyecto`, `--color-titulo`); no date line
(removed 29/10/2026: no law asks for it and git keeps every version); the
lead in `--tamano-entradilla`; the
summary in the neutral box (`--color-caja`, 12 px radius, 32 px padding,
24 on mobile); h2 with the 48 × 4 px rule in `--color-acento`; h3 in
`--tamano-nombre-caja`. Lists keep their bullets. On mobile the table turns
into cards, one per row, each cell with its column name. «Arriba» appears
once the h1 has scrolled above the view. The text is the one of the
previous pages, with the privacy changes approved on 29/10/2026 («Copiar»,
fonts, logos and captures served from the site's own domain, the `tema`
key). External links open in a new tab, with a hidden « (se abre en una
pestaña nueva)» for screen readers; the e-mail address is never written
in plain text in the HTML.

**Decision 18 (signed 29/10/2026): /identidad.** Published, indexable and
linked from the footer. Sections: Colores, Tipografía (families, weights,
the sizes on mobile, tablet and desktop, text styles), Espacios, Medidas y
cortes, Esquinas, Sombras, Movimiento (durations, curves, reduced motion),
Iconos (stroke icons in 48 px chips, third-party logos, project icons and
the site icon) and Piezas (including the four bottom-bar pills in both
states, the step icons, «Copiar», «Arriba» and the focus ring). On desktop
token names never wrap and every table row keeps its full bottom line.
«Arriba» as on the legal pages.

**Decision 19 (signed 29/10/2026): HTML and accessibility.** The «Proyecto
anterior / siguiente» block on project pages has a hidden h2 «Más proyectos»
that names its menu. «Saltar al contenido» shows above the fixed header when
it gets keyboard focus. The LinkedIn and GitHub rows in Contacto are named by
their visible text plus « (se abre en una pestaña nueva)». Links that show
the e-mail address get the real address as their name in the browser, so
screen readers read it without the anti-bot decoy. Lists without bullets
keep `role="list"` (VoiceOver drops list semantics otherwise).

**Decision 20 (signed 29/10/2026): addresses and search.** One address per
page, without «.html»; any «.html» address (also /index.html) redirects with
a 301 to it, and every indexable page carries its canonical. sitemap.xml
lists the nine indexable pages, without dates; robots.txt allows everything
and points to it. Own 404 page, with the legal-page design and a real 404
code: title «Página no encontrada | Antonio Blánquez», h1 «Esta página no
existe», text «Puede que la dirección esté mal escrita o que la página ya no
esté.», link «Ir a la portada». The home page declares a schema.org Person
(name, address, LinkedIn and GitHub), with no job title or description.

**Decision 21 (signed 29/10/2026): link previews.** Every page has Open Graph
tags with its own title and description. Project pages share their desktop
capture (1200 × 630, cropped from the top); every other page shares the
home image: the name in the signature font, the short phrase in the title
gradient, the domain, a 12 px accent band on top and a 96 × 6 rule in
`--color-decoracion`, on `--color-fondo` (`/og-portada.png`).

**Decision 22 (signed 29/10/2026): performance.** Captures and logos are
served as WebP (quality 90) in several widths (640, 1120 and 2240 px, never
above the original; logos 96 and 144 px) with srcset and sizes; this gives
up exact pixel parity with the model in the images only. Captures on the
home page load lazily. The server compresses text and caches CSS, JS and
fonts for a year, images for a month, and pages never long.

**Decision 23 (signed 29/10/2026): security.** HTTPS only (HSTS, one year,
this domain only). Content Security Policy: only this domain, the three
inline theme scripts by their SHA-256, and inline style attributes (the
model's per-project colours). Nobody can frame the site. nosniff,
strict-origin-when-cross-origin referrer, no camera, microphone or location,
and Cross-Origin-Opener-Policy same-origin.

### Footer
«© 2026 Antonio Blánquez» and links «Aviso legal» (/aviso-legal),
«Privacidad» (/privacidad), «Condiciones» (/condiciones),
«Identidad visual» (/identidad).

### Page titles and descriptions (verbatim, approved 29/10/2026)
- Home: «Antonio Blánquez | Convierto procesos manuales en aplicaciones web»
  — the first two sentences of the long statement.
- Projects: «<Name>: <what it is> | Antonio Blánquez», with «rasgos de
  estilo de los asistentes de IA», «cómo ir de un portal a otro en
  Zaragoza», «visor en vivo del autobús urbano de Zaragoza» and «árbol
  genealógico autoalojado» — description: the project line.
- «Identidad visual | Antonio Blánquez» — «Colores, tipografía, espacios,
  esquinas, sombras y movimiento de la web, con sus valores y contrastes.»
- «Aviso legal», «Política de privacidad», «Condiciones del servicio» +
  « | Antonio Blánquez» — their previous descriptions.
- Site icon (chosen 29/10/2026): the «A» of the signature (Dancing Script
  700) in white on a `--color-acento-relleno` rounded square.

## Provisional (later prompts will replace these; do not polish them)

- **Project page sections:** superseded by Decisions 10 and 11.

## Deliverables we want from you

- Screens as previews we can «Copy as design layers». Layer names semantic
  and in Spanish: `cabecera`, `presentacion`, `proyectos`,
  `tarjeta-proyecto`, `como-trabajo`, `sobre-mi`, `contacto`, `pie`,
  `datos-proyecto`.
- When asked, a `tokens.json` in the Design Tokens Community Group 2025.10
  format (colour as objects with colorSpace and components; dimensions
  with value and unit).
- No backend, no API calls, no analytics, no cookies. The only storage is
  the theme choice in localStorage (Decision 12).
