/** Datos de /identidad, copiados del modelo de Make (Identidad.tsx). */
export type Color = {
  token: string
  claro: string
  oscuro: string
  uso: string
  fondos?: string[]
  minimo?: number
}
export const fondosBase = ["--color-fondo", "--color-superficie", "--color-caja"]
export const colores: Color[] = [
  {
    token: "--color-fondo",
    claro: "#F7F5F0",
    oscuro: "#1C1A17",
    uso: "Bandas crema de la portada, pie, fondo del menú y hover del botón neutro",
  },
  {
    token: "--color-superficie",
    claro: "#FFFFFF",
    oscuro: "#26231F",
    uso: "Bandas blancas, tarjetas, botón neutro, cajas de otros proyectos y píldora del dominio",
  },
  {
    token: "--color-caja",
    claro: "#F7F5F0",
    oscuro: "#312D28",
    uso: "Caja neutra (cifras, “Lo que no hace”, galería), barra de la ventana de navegador y etiquetas de tecnologías",
  },
  {
    token: "--color-texto",
    claro: "#1A1A1A",
    oscuro: "#EDEAE4",
    uso: "Texto principal, iconos en reposo y borde del botón neutro en hover",
    fondos: fondosBase,
    minimo: 4.5,
  },
  {
    token: "--color-texto-secundario",
    claro: "#4A4A4A",
    oscuro: "#B8B2A8",
    uso: "Entradilla, línea de datos, etiquetas, pies de foto y nombres de la barra inferior en reposo",
    fondos: fondosBase,
    minimo: 4.5,
  },
  {
    token: "--color-linea",
    claro: "#D9D9D9",
    oscuro: "#4A453E",
    uso: "Bordes y líneas",
  },
  {
    token: "--color-titulo",
    claro: "#6B2410",
    oscuro: "#F0A587",
    uso: "h1, h2 y firma, salvo donde va el color del proyecto",
    fondos: fondosBase,
    minimo: 3,
  },
  {
    token: "--color-acento",
    claro: "#A63D1E",
    oscuro: "#E58B6B",
    uso: "Enlaces, anillo de foco, bordes de acento y nombre de la sección actual en la barra inferior",
    fondos: fondosBase,
    minimo: 4.5,
  },
  {
    token: "--color-acento-relleno",
    claro: "#A63D1E",
    oscuro: "#A63D1E",
    uso: "Botón primario, sección actual del menú y de la barra, círculos de “Decisiones” y caja “Resultado”",
  },
  {
    token: "--color-acento-relleno-hover",
    claro: "#6B2410",
    oscuro: "#6B2410",
    uso: "Fondo del botón primario en hover",
  },
  {
    token: "--color-sobre-acento",
    claro: "#FFFFFF",
    oscuro: "#FFFFFF",
    uso: "Texto e iconos sobre el relleno de acento y raya de “Resultado”",
    fondos: ["--color-acento-relleno"],
    minimo: 4.5,
  },
  {
    token: "--color-resalte",
    claro: "#FBEDE8",
    oscuro: "#3D2A23",
    uso: "Fondo de hover y foco del menú, de la barra inferior, de “Volver” y del botón de tema",
  },
  {
    token: "--color-resalte-texto",
    claro: "#6B2410",
    oscuro: "#F6CDBD",
    uso: "Texto e icono sobre el resalte",
    fondos: ["--color-resalte"],
    minimo: 4.5,
  },
  {
    token: "--color-decoracion",
    claro: "#E58B6B",
    oscuro: "#E58B6B",
    uso: "Aro de la foto. Solo decoración, nunca texto",
  },
  {
    token: "--color-cabecera",
    claro: "rgba(255, 255, 255, 0.9)",
    oscuro: "rgba(38, 35, 31, 0.9)",
    uso: "Cabecera y barra inferior translúcidas",
  },
  {
    token: "--color-logo-terceros",
    claro: "#1A1A1A",
    oscuro: "#FFFFFF",
    uso: "Logos de GitHub y LinkedIn",
  },
  {
    token: "--color-marco-telefono",
    claro: "#1A1A1A",
    oscuro: "#3D3934",
    uso: "Marco del teléfono en tarjetas y composición",
  },
  {
    token: "--color-degradado-inicio",
    claro: "#A63D1E",
    oscuro: "#E58B6B",
    uso: "Inicio del degradado del h1 de la portada",
  },
  {
    token: "--color-degradado-fin",
    claro: "#6B2410",
    oscuro: "#F0A587",
    uso: "Fin del degradado del h1 de la portada",
  },
  {
    token: "--color-proyecto-radiografia",
    claro: "#332288",
    oscuro: "#8E7FEF",
    uso: "Franja, h1, cifras y rayas de RadiografIA",
    fondos: fondosBase,
    minimo: 3,
  },
  {
    token: "--color-proyecto-desplazame",
    claro: "#2563EB",
    oscuro: "#6B9BF5",
    uso: "Franja, h1, cifras y rayas de Desplázame",
    fondos: fondosBase,
    minimo: 3,
  },
  {
    token: "--color-proyecto-zetabus",
    claro: "#7048E8",
    oscuro: "#B48CF7",
    uso: "Franja, h1, cifras y rayas de ZetaBus",
    fondos: fondosBase,
    minimo: 3,
  },
  {
    token: "--color-proyecto-linaje",
    claro: "#0F857D",
    oscuro: "#3FBFB2",
    uso: "Franja, h1, cifras y rayas de Linaje",
    fondos: fondosBase,
    minimo: 3,
  },
  {
    token: "--color-placa-icono",
    claro: "transparent",
    oscuro: "#EDEAE4",
    uso: "Placa detrás de los iconos de proyecto, solo en oscuro",
  },
  {
    token: "--color-lienzo",
    claro: "#F2F2F2",
    oscuro: "#F2F2F2",
    uso: "Fondo gris del modelo, fuera de los marcos. No es de la web",
  },
]

export const tamanos = [
  "--tamano-cuerpo",
  "--tamano-pie",
  "--tamano-secundario",
  "--tamano-dominio",
  "--tamano-ficha-valor",
  "--tamano-barra-inferior",
  "--tamano-entradilla",
  "--tamano-nombre-caja",
  "--tamano-nombre-tarjeta",
  "--tamano-h2",
  "--tamano-h1-proyecto",
  "--tamano-h1-portada",
  "--tamano-firma",
  "--tamano-cifra",
  "--tamano-cifra-ficha",
]
export const espacios = [
  "--espacio-1",
  "--espacio-2",
  "--espacio-3",
  "--espacio-4",
  "--espacio-5",
  "--espacio-6",
  "--espacio-7",
  "--espacio-8",
]
export const radios = [
  "--radio-raya",
  "--radio-boton",
  "--radio-caja",
  "--radio-telefono",
  "--radio-pildora",
  "--radio-circulo",
]
export const sombras = [
  "--sombra-tarjeta",
  "--sombra-tarjeta-hover",
  "--sombra-telefono",
  "--sombra-foto",
  "--sombra-boton-flotante",
]
export const movimientos: [string, string][] = [
  ["--duracion-rapida", "Hover y foco de enlaces y botones"],
  ["--duracion-media", "Tarjetas y botón Arriba"],
  ["--duracion-zoom", "Zoom de las capturas"],
  ["--duracion-aparicion", "Aparición al hacer scroll"],
  ["--escalon-aparicion", "Retraso entre tarjetas"],
  ["--duracion-flotar", "Foto que flota"],
]


/* ── Auditoría de /identidad (29/10/2026): lo que faltaba frente a los tipos del formato de tokens
   del W3C Design Tokens Community Group (fontFamily, fontWeight, dimension, duration, cubicBezier,
   typography…). Los valores salen de src/estilos/index.css y produccion.css; si cambian allí, cambian aquí. */

/** fontFamily */
export const familias: [string, string][] = [
  ["--fuente", "Todo el texto"],
  ["--fuente-firma", "Firma de la cabecera y nombre de la tarjeta de contacto"],
  ["--fuente-codigo", "Nombres de token en esta página"],
]

/** fontWeight */
export const pesos: [string, string][] = [
  ["--peso-normal", "Texto, menú y pie"],
  ["--peso-negrita", "Títulos, botones, cifras y sección actual"],
]

/** Tamaños de letra por corte (móvil < 600 px · tableta 600-1023 · escritorio ≥ 1024). */
export const tamanosPorCorte: { token: string; movil: string; tableta: string; escritorio: string; nota?: string }[] = [
  { token: "--tamano-cuerpo", movil: "1.125rem", tableta: "1.125rem", escritorio: "1.125rem" },
  { token: "--tamano-pie", movil: "1rem", tableta: "1rem", escritorio: "1rem" },
  { token: "--tamano-secundario", movil: "16px", tableta: "16px", escritorio: "16px" },
  { token: "--tamano-dominio", movil: "14px", tableta: "14px", escritorio: "14px" },
  { token: "--tamano-ficha-valor", movil: "18px", tableta: "18px", escritorio: "18px" },
  { token: "--tamano-barra-inferior", movil: "0.75rem", tableta: "0.75rem", escritorio: "0.75rem", nota: "La barra solo se ve en móvil; 0.6875rem por debajo de 340 px" },
  { token: "--tamano-entradilla", movil: "1.125rem", tableta: "1.25rem", escritorio: "1.25rem" },
  { token: "--tamano-nombre-caja", movil: "1.25rem", tableta: "1.25rem", escritorio: "1.25rem" },
  { token: "--tamano-nombre-tarjeta", movil: "1.25rem", tableta: "1.5rem", escritorio: "1.5rem" },
  { token: "--tamano-h2", movil: "1.75rem", tableta: "2.25rem", escritorio: "2.25rem" },
  { token: "--tamano-h1-proyecto", movil: "2.25rem", tableta: "2.75rem", escritorio: "3rem" },
  { token: "--tamano-h1-portada", movil: "1.875rem", tableta: "2.5rem", escritorio: "3rem" },
  { token: "--tamano-firma", movil: "1.875rem", tableta: "1.875rem", escritorio: "2.25rem", nota: "1.625rem por debajo de 360 px" },
  { token: "--tamano-cifra", movil: "2rem", tableta: "2.25rem", escritorio: "2.25rem" },
  { token: "--tamano-cifra-ficha", movil: "1.5rem", tableta: "2rem", escritorio: "2rem" },
]

/** typography: estilos de texto compuestos. */
export const estilosTexto: { estilo: string; familia: string; tamano: string; peso: string; interlineado: string; color: string; donde: string; muestra: string }[] = [
  { estilo: "h1 de la portada", familia: "--fuente", tamano: "--tamano-h1-portada", peso: "700", interlineado: "1.15", color: "degradado --color-degradado-inicio → --color-degradado-fin", donde: "Frase corta de la presentación", muestra: "Convierto procesos" },
  { estilo: "h1 de proyecto", familia: "--fuente", tamano: "--tamano-h1-proyecto", peso: "700", interlineado: "1.1", color: "color del proyecto", donde: "Nombre en la página de proyecto", muestra: "ZetaBus" },
  { estilo: "h1 interior", familia: "--fuente", tamano: "--tamano-h1-proyecto", peso: "700", interlineado: "1.1", color: "--color-titulo", donde: "/identidad y páginas legales", muestra: "Identidad visual" },
  { estilo: "h2", familia: "--fuente", tamano: "--tamano-h2", peso: "700", interlineado: "1.2", color: "--color-titulo", donde: "Títulos de sección", muestra: "Cómo trabajo" },
  { estilo: "Nombre de tarjeta", familia: "--fuente", tamano: "--tamano-nombre-tarjeta", peso: "700", interlineado: "1.3", color: "color del proyecto", donde: "h3 de las tarjetas de proyecto", muestra: "Desplázame" },
  { estilo: "Título de caja", familia: "--fuente", tamano: "--tamano-nombre-caja", peso: "700", interlineado: "1.3", color: "--color-titulo", donde: "Pasos, etapas y h3 de las páginas legales", muestra: "Entender el problema" },
  { estilo: "Cuerpo", familia: "--fuente", tamano: "--tamano-cuerpo", peso: "400", interlineado: "1.5", color: "--color-texto", donde: "Párrafos", muestra: "Ayudo a empresas" },
  { estilo: "Entradilla", familia: "--fuente", tamano: "--tamano-entradilla", peso: "400", interlineado: "1.5", color: "--color-texto-secundario", donde: "Entrada de sección y de página", muestra: "Cada proyecto deja reglas" },
  { estilo: "Secundario", familia: "--fuente", tamano: "--tamano-secundario", peso: "400", interlineado: "1.4-1.5", color: "--color-texto-secundario", donde: "Etiquetas, pies de foto y datos", muestra: "Zaragoza · en remoto o presencial" },
  { estilo: "Cifra", familia: "--fuente", tamano: "--tamano-cifra-ficha", peso: "700", interlineado: "1.2", color: "--color-titulo", donde: "Fichas de «Sobre mí»", muestra: "25.000" },
  { estilo: "Firma", familia: "--fuente-firma", tamano: "--tamano-firma", peso: "700", interlineado: "1", color: "--color-titulo", donde: "Cabecera y tarjeta de contacto", muestra: "Antonio Blánquez" },
  { estilo: "Barra inferior", familia: "--fuente", tamano: "--tamano-barra-inferior", peso: "400 (700 en la sección actual)", interlineado: "1.2", color: "--color-texto-secundario", donde: "Nombres de la barra inferior en móvil", muestra: "Cómo trabajo" },
]

/** dimension: medidas que no son espacios ni esquinas. */
export const medidas: [string, string][] = [
  ["--tactil", "Alto y ancho mínimos de todo lo que se pulsa"],
  ["--foco-ancho", "Grosor del anillo de foco"],
  ["--foco-separacion", "Separación del anillo de foco"],
  ["--alto-barra-inferior", "Alto de la barra inferior en móvil"],
]

/** Cortes del contenedor «marco» (la página entera). */
export const cortes: { corte: string; cambia: string }[] = [
  { corte: "< 340 px", cambia: "Nombres de la barra inferior a 0.6875rem" },
  { corte: "< 360 px", cambia: "Firma a 1.625rem; fichas de «Sobre mí» en una columna" },
  { corte: "< 600 px · móvil", cambia: "Barra inferior en lugar del menú; una columna; margen lateral de 20 px" },
  { corte: "600-1023 px · tableta", cambia: "Menú en la cabecera; dos columnas de pasos; margen lateral de 40 px" },
  { corte: "≥ 1024 px · escritorio", cambia: "Dos columnas de proyectos; tres de pasos; fichas junto al texto; margen lateral de 80 px" },
  { corte: "> 1280 px", cambia: "Contenido limitado a 1120 px y centrado; bandas a todo lo ancho (Decisión 16)" },
]

/** cubicBezier: curvas de movimiento que se usan (CSS con nombre). */
export const curvas: [string, string][] = [
  ["ease-out", "Aparición al hacer scroll, despliegue de fichas, elevación de tarjetas y zoom de capturas"],
  ["ease-in-out", "Foto que flota"],
  ["ease (por defecto)", "Cambios de color de enlaces y botones"],
]
