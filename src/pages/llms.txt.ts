/**
 * llms.txt (Decisión 27): resumen de la web en Markdown para asistentes de IA, con el formato de
 * llmstxt.org. Se genera en cada build con los mismos textos de la web, sin textos propios.
 */
import type { APIRoute } from "astro"
import { propietario, proyectos, comoTrabajo, sobreMi, contacto, pie } from "../datos/contenido"

export const GET: APIRoute = ({ site }) => {
  const url = (ruta: string) => new URL(ruta, site).href
  const lineas = [
    `# ${propietario.nombre}`,
    "",
    `> ${propietario.fraseCorta} ${propietario.fraseLarga}`,
    "",
    `${contacto.rol}. ${contacto.lugar}.`,
    "",
    ...sobreMi.cierre,
    "",
    "## Proyectos",
    "",
    ...proyectos.map((p) => `- [${p.nombre}](${url(`/proyectos/${p.slug}`)}): ${p.texto} ${p.etiquetaEnVivo}: ${p.enVivo} · Código: ${p.codigo}`),
    "",
    "## Cómo trabajo",
    "",
    ...comoTrabajo.pasos.map((p) => `- **${p.titulo}**: ${p.texto}`),
    "",
    "## Sobre mí",
    "",
    ...sobreMi.etapas.map((e) => `- **${e.rotulo}**: ${e.texto}`),
    "",
    "## Contacto",
    "",
    `- [${contacto.linkedin.canal}](${propietario.linkedin})`,
    `- [${contacto.github.canal}](${propietario.github})`,
    `- [${contacto.correo.canal}](${url("/#contacto")})`,
    "",
    "## Optional",
    "",
    ...pie.enlaces.map((e) => `- [${e.texto}](${url(e.href)})`),
    "",
  ]
  return new Response(lineas.join("\n"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } })
}
