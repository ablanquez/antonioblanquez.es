/**
 * Los tres scripts que van escritos dentro de la página (tienen que correr antes de pintar, para que
 * no se vea el tema equivocado ni un instante). astro.config.mjs calcula su huella SHA-256 a partir de
 * este mismo texto y la pone en la política de seguridad (CSP): si se cambia aquí, la huella cambia sola.
 */
import { svg } from "../componentes/iconos/svg"

/** Tema efectivo antes de pintar (Decisión 12): el guardado en localStorage («tema») o el del sistema. */
export const temaInicial = `(function(){var t;try{t=localStorage.getItem("tema")}catch(e){}if(t!=="claro"&&t!=="oscuro")t=window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"oscuro":"claro";window.__tema=t;window.__iconoSol=${JSON.stringify(svg.tema.sol)};window.__iconoLuna=${JSON.stringify(svg.tema.luna)};document.documentElement.setAttribute("data-tema",t)})()`

/** El marco toma el mismo tema (el CSS del modelo lo lee de .marco[data-tema]). */
export const temaMarco = `document.currentScript.parentNode.setAttribute("data-tema",window.__tema||"claro")`

/** El botón de tema muestra el sol y el texto correcto si se entra ya en oscuro. */
export const temaBoton = `(function(){var b=document.currentScript.previousElementSibling;if(window.__tema==="oscuro"&&b){b.setAttribute("aria-label","Cambiar a tema claro");b.setAttribute("title","Cambiar a tema claro");b.innerHTML=window.__iconoSol}})()`

export const scriptsEnLinea = [temaInicial, temaMarco, temaBoton]
