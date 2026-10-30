/**
 * Imágenes en varios anchos (WebP), para que el navegador descargue solo la que necesita.
 * Las variantes salen de los PNG originales de cada repositorio: «nombre-ANCHO.webp» en public/imagenes.
 * Los datos guardan la ruta del original («.png»); aquí se traduce a src + srcset.
 */
const anchos: Record<string, number[]> = {
  "/imagenes/desplazame/identidad": [640, 1120, 1440],
  "/imagenes/desplazame/logo": [96, 110],
  "/imagenes/desplazame/ruta-bizi": [640, 1120, 1440],
  "/imagenes/desplazame/ruta-bus": [640, 1120, 1440],
  "/imagenes/linaje/admin-datos": [640, 1120, 2240],
  "/imagenes/linaje/arbol-claro": [640, 1120, 2240],
  "/imagenes/linaje/ficha": [640, 1120, 2240],
  "/imagenes/linaje/logo": [96, 144],
  "/imagenes/radiografia/analizador": [640, 1120, 1280],
  "/imagenes/radiografia/ficha": [640, 1120, 1280],
  "/imagenes/radiografia/informe": [640, 745],
  "/imagenes/zetabus/desvio-abierto": [640, 1120, 2240],
  "/imagenes/zetabus/home-escritorio": [640, 1120, 2240],
  "/imagenes/zetabus/logo": [96, 144],
  "/imagenes/zetabus/parada-escritorio": [640, 1120, 1440],
  "/imagenes/movil-desplazame": [280, 390],
  "/imagenes/movil-linaje": [280, 544],
  "/imagenes/movil-radiografia": [280, 560],
  "/imagenes/movil-zetabus": [280, 382],
}

/** Tamaño que ocupa cada imagen en pantalla, medido en los cortes de 600 y 1024 px (atributo sizes). */
export const tamanos = {
  capturaPortada: "(min-width: 1024px) min(546px, calc(50vw - 94px)), (min-width: 600px) calc(100vw - 82px), calc(100vw - 42px)",
  capturaProyecto: "(min-width: 1024px) min(1118px, calc(100vw - 162px)), (min-width: 600px) calc(100vw - 82px), calc(100vw - 42px)",
  galeria: "(min-width: 1024px) min(518px, calc(50vw - 122px)), (min-width: 600px) calc(50vw - 82px), calc(100vw - 90px)",
  movilPortada: "(min-width: 1024px) 121px, 215px",
  movilProyecto: "(min-width: 1024px) 267px, 223px",
}

/** src (la variante de hasta 1120 px), srcset y sizes; las que no tienen variantes (SVG) quedan igual. */
export function imagen(ruta: string, sizes: string): { src: string; srcset?: string; sizes?: string } {
  const base = ruta.replace(/\.png$/, "")
  const lista = anchos[base]
  if (!lista) return { src: ruta }
  const defecto = [...lista].reverse().find((w) => w <= 1120) ?? lista[0]
  return { src: `${base}-${defecto}.webp`, srcset: lista.map((w) => `${base}-${w}.webp ${w}w`).join(", "), sizes }
}
