# antonioblanquez.es

Web personal de Antonio Blánquez: portada, una página por proyecto, /identidad (guía de estilo) y las páginas legales.
Sitio estático hecho con [Astro](https://astro.build), clonado píxel a píxel del modelo de Figma Make
(versión 56, `docs/figma/export/antonioblanquez.es.zip`). La especificación es `docs/figma/guidelines.md`.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `pnpm install` | Instala las dependencias |
| `pnpm dev` | Servidor de desarrollo en `http://localhost:4321` |
| `pnpm build` | Genera la web en `dist/` |
| `pnpm preview` | Sirve `dist/` para revisarla |

Para publicar, se sube el contenido de `dist/` (también `.htaccess`, que empieza por punto) a `public_html`
en Hostinger. El `.htaccess` sirve las páginas sin «.html» (`/proyectos/desplazame`), redirige con 301 las
direcciones antiguas con «.html», da la página 404 propia, comprime, pone la caché y las cabeceras de seguridad.

## Estructura

- `src/estilos/index.css`: el CSS del modelo de Make, **sin tocar** (tokens, temas y estilos de cada pieza).
- `src/estilos/produccion.css`: lo único que cambia al pasar del modelo a la web real (el marco sin borde,
  el fondo del documento y un margen que en el modelo venía del lienzo). Cada regla dice por qué.
- `src/estilos/fuentes.css` y `public/fuentes/`: IBM Plex Sans y Dancing Script alojadas en el dominio;
  los mismos archivos, byte a byte, que servía Google Fonts al modelo.
- `public/imagenes/`: capturas y logotipos de los proyectos alojados en el dominio, en WebP y en varios anchos
  (`nombre-ANCHO.webp`), sacados de los PNG de cada repositorio de GitHub; `compartir.jpg` es la imagen de cada
  proyecto al compartir el enlace. `src/utiles/imagenes.ts` sabe qué anchos hay y monta `srcset` y `sizes`.
- `public/og-portada.png`: la imagen al compartir la portada y las demás páginas.
- `src/utiles/correo.ts`: el correo va cifrado en el HTML y se monta en el navegador, para que no lo lean los robots.
- `src/datos/contenido.ts`: todos los textos de la web (copiados del modelo; los literales firmados están
  también en `guidelines.md`).
- `src/componentes/Pagina.astro`: marco común (cabecera, pie, «Arriba» y barra inferior).
- `src/pages/`: portada, `proyectos/[slug]` e `identidad`.
- `src/scripts/`: el comportamiento (tema, aparición al hacer scroll, sección marcada, «Copiar», foto que flota),
  portado de los hooks de React del modelo.
- `src/pages/aviso-legal.astro`, `privacidad.astro`, `condiciones.astro`: las páginas legales, con el texto de
  las anteriores en el marco de la web (se publican como `/aviso-legal`, etc.).
- `src/pages/identidad.astro` y `src/datos/identidad.ts`: la guía de estilo (/identidad), enlazada desde el pie.
- `src/pages/404.astro`, `src/pages/sitemap.xml.ts` y `public/robots.txt`: la página de error, el mapa del sitio
  y las indicaciones para los buscadores.
- `src/scripts/enLinea.ts`: los tres scripts que van dentro de la página (el tema). `astro.config.mjs` calcula su
  huella para la política de seguridad (CSP); si se cambian ahí, la huella se actualiza sola al construir.
