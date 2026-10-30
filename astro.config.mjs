// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import { scriptsEnLinea } from "./src/scripts/enLinea.ts"

// Huella SHA-256 de cada script escrito dentro de la página, para la política de seguridad (CSP).
/** @param {string} texto @returns {Promise<`sha256-${string}`>} */
async function huella(texto) {
  const resumen = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto))
  return `sha256-${btoa(String.fromCharCode(...new Uint8Array(resumen)))}`
}
const huellas = await Promise.all(scriptsEnLinea.map(huella))

// Sitio estático (Decisión del documento: «production will be a static Astro site»).
// build.format "file": /proyectos/desplazame.html; el .htaccess lo sirve como /proyectos/desplazame.
export default defineConfig({
  site: "https://antonioblanquez.es",
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  // Ronda 5: solo se ejecuta lo que sale de este dominio y los tres scripts del tema (por su huella).
  // Los atributos style del modelo (colores de cada proyecto) se permiten: afecta a estilos, nunca a código.
  security: {
    csp: {
      directives: ["default-src 'self'", "img-src 'self' data:", "font-src 'self'", "connect-src 'self'", "object-src 'none'", "base-uri 'self'", "form-action 'none'"],
      scriptDirective: { resources: ["'self'"], hashes: huellas },
      styleDirective: { resources: ["'self'", { resource: "'unsafe-inline'", kind: "attribute" }] },
    },
  },
  vite: { plugins: [tailwindcss()] },
})
