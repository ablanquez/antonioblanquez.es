/**
 * Tema claro / oscuro (Decisión 12), portado de Tema.tsx del modelo de Make.
 * El tema efectivo es el guardado («tema» en localStorage) o, si no hay, el del sistema.
 * Al pulsar se pasa al contrario; si coincide con el del sistema, se borra lo guardado.
 * El tema inicial ya lo fija el script en línea de <head> (Base.astro) antes de pintar.
 */
type Tema = "claro" | "oscuro"
declare global {
  interface Window {
    __tema?: Tema
    __iconoSol?: string
    __iconoLuna?: string
  }
}

const consulta = window.matchMedia?.("(prefers-color-scheme: dark)")
const sistema = (): Tema => (consulta?.matches ? "oscuro" : "claro")

function leerGuardado(): Tema | undefined {
  try {
    const v = window.localStorage.getItem("tema")
    return v === "claro" || v === "oscuro" ? v : undefined
  } catch {
    return undefined
  }
}

let guardado = leerGuardado()
let tema: Tema = guardado ?? sistema()

/** El cambio de tema no anima colores: el marco pierde las transiciones hasta el siguiente frame. */
function sinTransiciones() {
  const marcos = document.querySelectorAll(".marco")
  marcos.forEach((m) => m.classList.add("sin-transicion"))
  requestAnimationFrame(() => requestAnimationFrame(() => marcos.forEach((m) => m.classList.remove("sin-transicion"))))
}

function aplicar() {
  document.documentElement.setAttribute("data-tema", tema)
  document.querySelectorAll(".marco").forEach((m) => m.setAttribute("data-tema", tema))
  const icono = tema === "oscuro" ? window.__iconoSol : window.__iconoLuna
  const etiqueta = tema === "oscuro" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
  document.querySelectorAll<HTMLElement>(".boton-tema").forEach((b) => {
    if (icono) b.innerHTML = icono
    // La muestra de /identidad (span aria-hidden) solo cambia de icono.
    if (b.tagName === "BUTTON") {
      b.setAttribute("aria-label", etiqueta)
      b.setAttribute("title", etiqueta)
    }
  })
}

function alternarTema() {
  const nuevo: Tema = tema === "oscuro" ? "claro" : "oscuro"
  try {
    if (nuevo === sistema()) window.localStorage.removeItem("tema")
    else window.localStorage.setItem("tema", nuevo)
  } catch {
    /* sin almacenamiento: el cambio dura hasta recargar */
  }
  guardado = nuevo === sistema() ? undefined : nuevo
  sinTransiciones()
  tema = nuevo
  const aviso = document.getElementById("aviso-tema")
  if (aviso) aviso.textContent = nuevo === "oscuro" ? "Tema oscuro" : "Tema claro"
  aplicar()
}

export function iniciarTema() {
  aplicar()
  // Sin tema guardado, el tema sigue al sistema.
  consulta?.addEventListener("change", () => {
    if (guardado) return
    sinTransiciones()
    tema = sistema()
    aplicar()
  })
  document.querySelectorAll<HTMLButtonElement>("button.boton-tema").forEach((b) => b.addEventListener("click", alternarTema))
}
