/**
 * Comportamiento de la web, portado tal cual de los hooks del modelo de Make (versión 56):
 * App.tsx (useDetalles, useSeccionActual, useAnclaInicial, useFotoFlota), Tema.tsx,
 * Comunes.tsx (botón «Menú»), Portada.tsx (TarjetaVisita: «Copiar») e Identidad.tsx (valores vivos).
 * La web real tiene un solo marco: la página entera.
 */
import { iniciarTema } from "./tema"
import { DESPLAZAMIENTO_CORREO } from "../utiles/correo"

const marco = document.querySelector<HTMLElement>(".marco")

iniciarTema()
montarCorreos()
if (marco) {
  detalles(marco)
  menu(marco)
  if (marco.classList.contains("inicio")) {
    seccionActual(marco)
    fotoFlota()
    anclaInicial()
    copiarCorreo(marco)
  }
  if (marco.classList.contains("identidad")) identidad(marco)
}

/** App.tsx · useDetalles: alto de la cabecera, «Arriba» y aparición al hacer scroll. */
function detalles(marco: HTMLElement) {
  const raiz = document.documentElement
  // El marco guarda --alto-cabecera con el alto real de su cabecera.
  if ("ResizeObserver" in window) {
    const medidor = new ResizeObserver((entradas) => {
      for (const e of entradas) {
        const cabecera = e.target as HTMLElement
        cabecera
          .closest<HTMLElement>(".marco")
          ?.style.setProperty("--alto-cabecera", `${cabecera.getBoundingClientRect().height}px`)
      }
    })
    marco.querySelectorAll<HTMLElement>(".cabecera").forEach((c) => medidor.observe(c))
  }
  if ("IntersectionObserver" in window) {
    // Portada: el botón «Arriba» aparece cuando la presentación sale de la vista.
    const vigia = new IntersectionObserver((entradas) => {
      for (const e of entradas) e.target.closest(".marco")?.classList.toggle("arriba-visible", !e.isIntersecting)
    })
    document.querySelectorAll(".inicio .presentacion").forEach((s) => vigia.observe(s))
    // Proyecto: «Arriba» solo cuando la composición ha quedado entera por encima de la vista.
    const vigiaProyecto = new IntersectionObserver((entradas) => {
      for (const e of entradas)
        e.target
          .closest(".marco")
          ?.classList.toggle("arriba-visible", !e.isIntersecting && e.boundingClientRect.bottom <= 0)
    })
    document.querySelectorAll(".proyecto [data-name='composicion']").forEach((s) => vigiaProyecto.observe(s))
    // /identidad y páginas legales (añadido; en el modelo no aparecía nunca): «Arriba» cuando el h1 ha quedado por encima de la vista.
    document.querySelectorAll(":is(.identidad, .legal) main h1").forEach((s) => vigiaProyecto.observe(s))
  }
  const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (reducido || !("IntersectionObserver" in window)) return

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue
        e.target.classList.add("revelado")
        observador.unobserve(e.target)
        // Al terminar la aparición se quita su transición para que el hover vaya a 200 ms.
        const el = e.target as HTMLElement
        const fin = (ev: TransitionEvent) => {
          if (ev.target !== el || ev.propertyName !== "opacity") return
          el.removeEventListener("transitionend", fin)
          el.classList.remove("revelar", "revelado")
        }
        el.addEventListener("transitionend", fin)
      }
    },
    { threshold: 0.15 },
  )
  const selector = [
    ".portada main section:not(.presentacion) h2:not(.tarjeta-bloque h2)",
    ".tarjeta",
    "[data-name='como-trabajo'] > p",
    "[data-name='como-trabajo'] > .pasos",
    "[data-name='sobre-mi'] > p",
    "[data-name='sobre-mi'] > .linea-tiempo",
    "[data-name='sobre-mi'] > .tarjeta-cierre",
    "[data-name='contacto'] .enlaces-fila",
    "[data-name='contacto'] .botones-contacto",
    ".proyecto .aparece",
    ".proyecto [data-name='otros-proyectos'] .caja-proyecto",
  ].join(", ")
  document.querySelectorAll(".detalles").forEach((m) => {
    m.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      el.classList.add("revelar")
      observador.observe(el)
    })
    // «Sobre mí»: las fichas de cada etapa se despliegan con la misma condición que revelar.
    // «Contacto»: la tarjeta de visita usa el mismo despliegue que las fichas.
    m.querySelectorAll<HTMLElement>(".cifras, [data-name='contacto'] .tarjeta-visita").forEach((el) => {
      el.classList.add("revelar-fichas")
      observador.observe(el)
    })
    m.querySelectorAll<HTMLElement>(".tarjeta").forEach((t, i) => {
      t.style.setProperty("--retraso", `calc(var(--escalon-aparicion) * ${i})`)
    })
  })
  // El estado oculto solo se aplica cuando el script ya ha cargado.
  raiz.classList.add("js-revelar")
}

/** Comunes.tsx: botón «Menú» (solo visible fuera del marco común; se conserva como en el modelo). */
function menu(marco: HTMLElement) {
  const boton = marco.querySelector<HTMLButtonElement>(".boton-menu")
  const contenedor = marco.querySelector<HTMLElement>(".cabecera .menu")
  if (!boton || !contenedor) return
  boton.addEventListener("click", () => {
    const abierto = boton.getAttribute("aria-expanded") !== "true"
    boton.setAttribute("aria-expanded", String(abierto))
    contenedor.className = abierto ? "menu menu-abierto" : "menu"
  })
}

/** App.tsx · useSeccionActual (Decisiones 8 y 9): marca la sección actual en la cabecera y en la barra inferior. */
function seccionActual(marco: HTMLElement) {
  if (!("IntersectionObserver" in window)) return
  const anclas = ["proyectos", "como-trabajo", "sobre-mi", "contacto"]
  const cabecera = marco.querySelector<HTMLElement>(".cabecera")
  const presentacion = marco.querySelector<HTMLElement>(".presentacion")
  const enlaces = [...marco.querySelectorAll<HTMLAnchorElement>(".cabecera .menu a, .barra-inferior a")]
  const secciones = anclas
    .map((a) => marco.querySelector<HTMLElement>(`section[id='${a}']`))
    .filter((s): s is HTMLElement => !!s)
  if (!cabecera || !presentacion) return
  const enFranja = new Set<Element>()
  // Tras un clic, el enlace pulsado manda hasta que el usuario vuelva a desplazarse ('' = ninguno).
  let fijo: string | undefined
  const aplicar = (actual: string | undefined) =>
    enlaces.forEach((a) => {
      if (actual && a.hash === `#${actual}`) a.setAttribute("aria-current", "true")
      else a.removeAttribute("aria-current")
    })
  const marcar = () => {
    if (fijo !== undefined) return aplicar(fijo)
    let actual: string | undefined
    // «Contacto» solo cuando el final del marco ha llegado a la pantalla.
    if (marco.getBoundingClientRect().bottom <= window.innerHeight + 1) actual = secciones[secciones.length - 1]?.id
    else if (!enFranja.has(presentacion)) actual = secciones.find((s) => enFranja.has(s))?.id
    aplicar(actual)
  }
  // Franja: del borde inferior de la cabecera fija al 40 % superior de la pantalla.
  let franja: IntersectionObserver | undefined
  let alto = -1
  const crearFranja = () => {
    const nuevo = Math.round(cabecera.getBoundingClientRect().height)
    if (nuevo === alto) return
    alto = nuevo
    franja?.disconnect()
    enFranja.clear()
    franja = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) enFranja.add(e.target)
          else enFranja.delete(e.target)
        }
        marcar()
      },
      { rootMargin: `-${alto}px 0px -60% 0px` },
    )
    ;[presentacion, ...secciones].forEach((s) => franja!.observe(s))
  }
  crearFranja()
  if ("ResizeObserver" in window) new ResizeObserver(crearFranja).observe(cabecera)
  marco.addEventListener("click", (ev) => {
    const a = (ev.target as Element).closest<HTMLAnchorElement>("a")
    if (!a || !marco.contains(a)) return
    if (enlaces.includes(a)) fijo = a.hash.slice(1)
    else if (a.matches("a.nombre, .arriba a")) fijo = ""
    else return
    marcar()
  })
  // Llegar con el hash de una sección cuenta como un clic en su enlace (Decisión 10).
  const deLlegada = enlaces.find((a) => a.hash && a.hash === window.location.hash)
  if (deLlegada) {
    fijo = deLlegada.hash.slice(1)
    marcar()
  }
  window.addEventListener("scroll", marcar, { passive: true })
  // Desplazamiento del usuario: rueda, gesto táctil o teclas que desplazan o mueven el foco.
  const teclas = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End", " ", "Tab"]
  const desbloquear = () => {
    if (fijo === undefined) return
    fijo = undefined
    marcar()
  }
  window.addEventListener("wheel", desbloquear, { passive: true })
  window.addEventListener("touchmove", desbloquear, { passive: true })
  window.addEventListener("keydown", (ev) => {
    if (teclas.includes(ev.key)) desbloquear()
  })
}

/** App.tsx · useAnclaInicial: al llegar a /#<sección> desde otra página, baja al ancla con la cabecera ya medida. */
function anclaInicial() {
  const id = decodeURIComponent(window.location.hash.slice(1))
  if (!id) return
  window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 100)
}

/** App.tsx · useFotoFlota (Decisión 9): la foto flota dos veces al entrar el ratón y se para. */
function fotoFlota() {
  document.querySelectorAll<HTMLElement>(".inicio .foto").forEach((f) => {
    f.addEventListener("pointerenter", (ev) => {
      const foto = ev.currentTarget as HTMLElement
      if (ev.pointerType !== "mouse" || foto.classList.contains("flotando")) return
      if (!window.matchMedia("(hover: hover)").matches) return
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      foto.classList.add("flotando")
    })
    f.addEventListener("animationend", (ev) => (ev.currentTarget as HTMLElement).classList.remove("flotando"))
  })
}

/** Portada.tsx · TarjetaVisita: «Copiar» copia el correo, cambia a «Copiado» 2 s y lo anuncia. */
function copiarCorreo(marco: HTMLElement) {
  const boton = marco.querySelector<HTMLButtonElement>(".boton-copiar")
  const estado = boton?.closest(".canal")?.querySelector<HTMLElement>("[role='status']")
  if (!boton || !estado) return
  const d = boton.dataset
  let temporizador: number | undefined
  boton.addEventListener("click", async () => {
    window.clearTimeout(temporizador)
    try {
      if (!navigator.clipboard) throw new Error("sin portapapeles")
      await navigator.clipboard.writeText(descifrarCorreo(d.correoCopiar ?? ""))
      boton.textContent = d.copiado ?? ""
      estado.textContent = d.anuncio ?? ""
    } catch {
      boton.textContent = d.fallo ?? ""
      estado.textContent = d.fallo ?? ""
    }
    temporizador = window.setTimeout(() => {
      boton.textContent = d.copiar ?? ""
      estado.textContent = ""
    }, 2000)
  })
}

/** Identidad.tsx: valores vivos de los tokens y contrastes calculados en cada tema. */
function identidad(marco: HTMLElement) {
  // Las muestras de /identidad no llevan a ninguna parte.
  marco.querySelectorAll<HTMLAnchorElement>(".lista-piezas a[href='#']").forEach((a) =>
    a.addEventListener("click", (e) => e.preventDefault()),
  )
  marco.querySelectorAll<HTMLElement>("section").forEach((seccion) => {
    seccion.querySelectorAll<HTMLElement>(".valor[data-token], code[data-token]").forEach((el) => {
      const tema = el.dataset.enTema
      const origen = tema ? seccion.querySelector<HTMLElement>(`[data-tema='${tema}']`) : seccion
      if (!origen) return
      el.textContent = getComputedStyle(origen).getPropertyValue(el.dataset.token!).trim()
    })
  })
  const rgb = (s: string) => (s.match(/[\d.]+/g) ?? []).map(Number)
  const lum = (s: string) => {
    const [r, g, b] = rgb(s).map((c) => {
      const x = c / 255
      return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  const ratio = (a: string, b: string) => {
    const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m)
    return (x + 0.05) / (y + 0.05)
  }
  const nombreFondo: Record<string, string> = {
    "--color-fondo": "fondo",
    "--color-superficie": "superficie",
    "--color-caja": "caja",
    "--color-resalte": "resalte",
    "--color-acento-relleno": "relleno",
  }
  const coma = (n: number) => n.toFixed(1).replace(".", ",")
  marco.querySelectorAll<HTMLElement>(".contraste").forEach((raiz) => {
    const fondos = (raiz.dataset.fondos ?? "").split(" ")
    const minimo = Number(raiz.dataset.minimo)
    const primero = raiz.querySelector<HTMLElement>("i")
    const cifras = raiz.querySelector<HTMLElement>(".contraste-cifras")
    if (!primero || !cifras) return
    const color = getComputedStyle(primero).color
    let llega = true
    const partes = fondos.map((f, i) => {
      const fondo = getComputedStyle(raiz.querySelectorAll<HTMLElement>("b")[i]).backgroundColor
      const r = ratio(color, fondo)
      if (r < minimo) llega = false
      return `${nombreFondo[f]} ${coma(r)}:1`
    })
    const marca = !llega ? "No llega" : minimo === 3 ? "mínimo 3, texto grande" : "mínimo 4,5"
    cifras.textContent = `${partes.join(" · ")} · ${marca}`
  })
}

/** Descifra la dirección guardada por utiles/correo.ts (hexadecimal, desplazada y al revés). */
function descifrarCorreo(cifrado: string): string {
  const letras = cifrado.match(/../g) ?? []
  return letras
    .map((h) => String.fromCharCode(parseInt(h, 16) - DESPLAZAMIENTO_CORREO))
    .reverse()
    .join("")
}

/** Enlaces de correo: en el HTML apuntan a #contacto; aquí pasan a mailto: con la dirección descifrada. */
function montarCorreos() {
  document.querySelectorAll<HTMLAnchorElement>("a[data-correo]").forEach((a) => {
    const correo = descifrarCorreo(a.dataset.correo ?? "")
    a.href = `mailto:${correo}`
    // Si el enlace muestra la dirección (con el señuelo dentro), el lector de pantalla la oye entera y sin pausa.
    if (a.querySelector(".senuelo")) a.setAttribute("aria-label", correo)
  })
}
