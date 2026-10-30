# antonioblanquez.es — secuencia de prompts para Figma Make

Pasos en Figma (mismo método que RadiografIA; ayuda de Figma sobre Make):

1. Figma → Borradores → **Make** (fichero nuevo). Nombre: «antonioblanquez.es».
2. Modelo: **Claude Opus 5.5** para los prompts de construcción.
   **Gemini 3.8 Flash** solo para retoques pequeños. No mezclar dentro de
   una misma pantalla.
3. Modo **Planificar** y prompt 0. Antonio pega el plan en la conversación
   de estrategia; se contrasta con `guidelines.md` antes de aceptarlo.
4. En cuanto exista el explorador de ficheros: crear `guidelines.md` y
   pegar el contenido de `docs/figma/guidelines.md`.
5. Un prompt cada vez, en este orden. Tras cada uno: mirar la vista
   previa; si algo está mal, primero la herramienta de edición, y solo
   después un prompt corto.
6. Si tras muchos prompts se desvía: «Clear chat context» y repetir el
   último prompt.
7. Al terminar cada pantalla: **Copy as design layers** a un fichero de
   Figma Design «antonioblanquez.es — modelo», frames `escritorio/…`,
   `tableta/…` y `movil/…`. Ahí lee Claude por el conector.
8. Prompts 3 a 6: una decisión cada uno. Cada uno se completa en la
   conversación de estrategia cuando la anterior está firmada.
9. Prompt 7: `tokens.json`.

Las cadenas entre «comillas» van tal cual. Cada pantalla se pide en
escritorio 1280 px, tableta 820 px y móvil 390 px.

---

## Prompt 0 (Planificar)

(Lanzado el 26/10/2026 con Claude Opus 5.5, esfuerzo «Bajo».)

Vamos a construir el modelo visual de la web personal de Antonio Blánquez (antonioblanquez.es): una portada y una página por cada uno de sus cuatro proyectos, las cuatro con la misma plantilla. Cada pantalla en escritorio (1280 px), tableta (820 px) y móvil (390 px). Es solo un modelo visual con datos estáticos: sin backend, sin API, sin almacenamiento.

Antes del primer prompt de construcción te daré un fichero guidelines.md con:
- el contenido literal (textos, proyectos, enlaces), que no se reescribe ni se completa: donde falte texto irá [texto pendiente];
- las reglas duras: contraste WCAG 2.2 AA, foco visible, enlace «Saltar al contenido», enlaces y botones de 44 px en tableta y móvil, sin scroll horizontal a 320 px, contacto sin formulario y una lista de efectos prohibidos;
- una base provisional de colores, tipografía y orden de secciones que cambiaremos después con prompts cortos.

No añadas nada que no se pida.

Terminado significa: pantallas que se puedan copiar como capas de diseño, con nombres de capa semánticos en español.

Planifica, sin escribir código todavía:
1. qué componentes reutilizarás entre la portada y la página de proyecto;
2. cómo cambia cada pantalla entre los tres tamaños;
3. en qué orden construirás.

Responde en español.

## Prompt 1 — Portada

Tarea: la portada de antonioblanquez.es en los tres tamaños.
Restricciones: guidelines.md (contenido literal, reglas duras y base
provisional).

Escritorio, de arriba abajo:
- Cabecera: «Antonio Blánquez» a la izquierda; a la derecha, navegación
  visible con «Proyectos», «Cómo trabajo», «Sobre mí» y «Contacto».
- Presentación: el nombre como h1, debajo la frase corta y, en tamaño de
  cuerpo, la frase larga. Debajo, los enlaces al email, LinkedIn y GitHub.
  El bloque de proyectos debe asomar en la primera pantalla.
- Proyectos: título «Proyectos» y una tarjeta por proyecto, en el orden de
  guidelines.md, con el nombre, su texto, y los enlaces «En vivo» (o «Demo
  en vivo») y «Código». Rejilla de dos columnas.
- «Cómo trabajo»: título y un párrafo [texto pendiente].
- «Sobre mí»: título y un párrafo [texto pendiente].
- Contacto: título «Contacto», el email como enlace mailto y los enlaces a
  LinkedIn y GitHub.
- Pie: el de guidelines.md.

Tableta: una columna; las tarjetas de proyecto en una columna; la
navegación sigue visible.

Móvil: una columna. La navegación pasa a un botón «Menú» (44 px) que
despliega los cuatro enlaces; al final de la página, antes del pie, se
repiten los cuatro enlaces de navegación. Tarjetas a todo el ancho; los
enlaces de cada tarjeta, de 44 px de alto.

## Prompt 2 — Página de proyecto

Tarea: la página de un proyecto, con Desplázame como ejemplo; las otras
tres usarán la misma plantilla. Restricciones: guidelines.md.

Columna única, texto a 66 caracteres como máximo:
- La misma cabecera que la portada.
- h1 «Desplázame» y su texto de guidelines.md.
- Ficha: «Rol» [texto pendiente] · «Tecnología» «Angular · Node ·
  TypeScript» · «Versión» «v1.0.0» · «Fecha» [texto pendiente] · enlaces
  «En vivo» y «Código».
- Un hueco para una captura de la aplicación, con la etiqueta [captura
  pendiente]; sin imagen inventada.
- Bloques con h2, cada uno con un párrafo [texto pendiente]: «El
  problema», «La solución», «Decisiones», «Cómo lo comprobé»,
  «Resultado», «Qué haría distinto».
- El mismo pie que la portada.

Tableta y móvil: igual, apilado; la ficha pasa a lista vertical.

## Prompt 3 — Decisión 1: relación con los proyectos

Tarea: tres variantes, sin cambiar nada más, de la portada (escritorio y
móvil) y de la página de Desplázame (escritorio y móvil), una al lado de
otra con su letra como título del frame:
- A. Respaldo: la web sigue neutra; cada tarjeta y la página de cada
  proyecto muestran el color de ese proyecto (de guidelines.md) junto a su
  nombre; la página del proyecto dice «Un proyecto de Antonio Blánquez».
- B. Una sola marca: la web y los cuatro proyectos usan como único color
  común el del texto, #1A1A1A; ningún proyecto muestra su color propio.
- C. Sin vínculo: portada como en A; la página del proyecto no menciona a
  Antonio Blánquez.
Contraste según guidelines.md en las tres.

## Prompt 4 — Decisión 2: paleta y modo claro u oscuro

(Se completa tras firmar la decisión 1.) Variantes, sobre la variante
firmada en el prompt 3:
- Sin acento cromático: enlaces y botones en el color del texto, enlaces
  subrayados.
- Con un acento propio que no sea azul, violeta, índigo ni teal:
  [candidatos y sus contrastes, por definir en la conversación de
  estrategia].
Y, para la que se firme: modo claro por defecto con modo oscuro según el
sistema, o solo claro [por decidir].

## Prompt 5 — Decisión 3: tipografía

(Se completa tras firmar la decisión 2.) La portada y la página de
proyecto en dos variantes: Inter, y la pila de fuentes del sistema.
Cuerpo 18 px, interlineado 1,5. [Escala por decidir: tamaños fijos o
fluidos.]

## Prompt 6 — Decisión 4: orden de la portada y navegación

(Se completa tras firmar la decisión 3.) La portada en dos variantes:
- Prueba primero: presentación → proyectos → «Cómo trabajo» → «Sobre mí»
  → contacto.
- Portada corta: presentación → proyectos → «Sobre mí» → contacto, y
  «Cómo trabajo» en página propia enlazada desde la navegación.
[Navegación: si al ver el prompt 1 se quiere cambiar, la variante se
añade aquí.]

## Prompt 7 — Tokens

Genera `tokens.json` en el formato Design Tokens Community Group 2025.10
con todos los tokens firmados: colores (como objeto con colorSpace "srgb"
y components), tipografía (fontFamily y tamaños como dimension con value y
unit), espaciado y radios. Añade $description con el ratio de contraste de
cada color de texto sobre su fondo.
