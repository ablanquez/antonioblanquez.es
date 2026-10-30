/** sitemap.xml (Ronda 3): las páginas indexables, con su dirección sin «.html» y sin fechas. */
import type { APIRoute } from "astro"
import { proyectos } from "../datos/contenido"

export const GET: APIRoute = ({ site }) => {
  const rutas = ["/", ...proyectos.map((p) => `/proyectos/${p.slug}`), "/identidad", "/aviso-legal", "/privacidad", "/condiciones"]
  const urls = rutas.map((r) => `  <url><loc>${new URL(r, site).href}</loc></url>`).join("\n")
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } })
}
