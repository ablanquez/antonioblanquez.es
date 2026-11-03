/**
 * sitemap.xml (Ronda 3 y Decisión 27): las páginas indexables, con su dirección sin «.html».
 * lastmod = fecha del último commit que tocó el contenido de cada página (Google solo usa lastmod
 * si es exacto). Si el repositorio está incompleto (clon superficial), no se ponen fechas: serían falsas.
 */
import type { APIRoute } from "astro"
import { proyectos } from "../datos/contenido"
import { fechaUltimoCambio as fecha } from "../datos/fechas.mjs"

const contenido = "src/datos/contenido.ts"
const paginas: [string, string[]][] = [
  ["/", ["src/pages/index.astro", contenido]],
  ...proyectos.map((p): [string, string[]] => [`/proyectos/${p.slug}`, ["src/pages/proyectos/[slug].astro", contenido]]),
  ["/identidad", ["src/pages/identidad.astro", "src/datos/identidad.ts"]],
  ["/aviso-legal", ["src/pages/aviso-legal.astro"]],
  ["/privacidad", ["src/pages/privacidad.astro"]],
  ["/condiciones", ["src/pages/condiciones.astro"]],
]

export const GET: APIRoute = ({ site }) => {
  const urls = paginas
    .map(([ruta, archivos]) => {
      const f = fecha(archivos)
      return `  <url><loc>${new URL(ruta, site).href}</loc>${f ? `<lastmod>${f}</lastmod>` : ""}</url>`
    })
    .join("\n")
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } })
}
