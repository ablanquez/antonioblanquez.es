/**
 * Protección del correo frente a los robots que recogen direcciones (Spencer Mortensen,
 * «Email obfuscation: What works in 2025?»: la conversión con JavaScript y el texto con un trozo en
 * display: none bloquean al 100 % de los robots probados, y se recomienda combinar técnicas).
 * - En el HTML no aparece nunca la dirección entera: el texto visible lleva un señuelo oculto con
 *   display: none (no se ve, no se copia y el lector de pantalla no lo lee).
 * - Los enlaces mailto: y el botón «Copiar» se montan en el navegador a partir de la dirección cifrada.
 */
const DESPLAZAMIENTO = 7

/** Cifra la dirección: al revés, cada carácter desplazado y en hexadecimal. Se descifra en scripts/sitio.ts. */
export function cifrarCorreo(correo: string): string {
  return [...correo]
    .reverse()
    .map((c) => (c.charCodeAt(0) + DESPLAZAMIENTO).toString(16).padStart(2, "0"))
    .join("")
}

/** Partes del texto visible: usuario y dominio, para poner el señuelo entre medias. */
export function partesCorreo(correo: string): [string, string] {
  const i = correo.indexOf("@")
  return [correo.slice(0, i), correo.slice(i)]
}

export const DESPLAZAMIENTO_CORREO = DESPLAZAMIENTO
