// Fecha del último commit que tocó unos archivos (Decisión 27), para el lastmod del sitemap.
// En JavaScript y no en TypeScript para no añadir los tipos de Node solo por esto.
// Si el repositorio está incompleto (clon superficial) devuelve "": una fecha falsa es peor que ninguna.
import { execFileSync } from "node:child_process"

const git = (...args) => {
  try {
    return execFileSync("git", args, { encoding: "utf8" }).trim()
  } catch {
    return ""
  }
}

const historiaCompleta = git("rev-parse", "--is-shallow-repository") === "false"

/** @param {string[]} archivos @returns {string} AAAA-MM-DD o "" */
export const fechaUltimoCambio = (archivos) => (historiaCompleta ? git("log", "-1", "--format=%cs", "--", ...archivos) : "")
