export const propietario = {
  nombre: "Antonio Blánquez",
  fraseCorta: "Convierto procesos manuales en aplicaciones web.",
  fraseLarga:
    "Ayudo a empresas que pierden horas en procesos manuales. Llevo más de quince años dentro de esos procesos: banca, gestión documental, comercio electrónico. Ahora, además, construyo la herramienta: defino qué hace, la diseño y dirijo a la IA que escribe el código.",
  email: "ablanquez@gmail.com",
  linkedin: "https://www.linkedin.com/in/antonioblanquez/",
  github: "https://github.com/ablanquez",
}

export type Proyecto = {
  nombre: string
  icono: string
  slug: string
  captura: { src: string; alt: string }
  tecnologia: string
  texto: string
  etiquetaEnVivo: string
  enVivo: string
  codigo: string
}

export const proyectos: Proyecto[] = [
  {
    nombre: "RadiografIA",
    icono:
      "/imagenes/radiografia/icono-c.svg",
    slug: "radiografia",
    /** Solo en /con-vida. */
    captura: {
      src: "/imagenes/radiografia/analizador.png",
      alt: "Captura de RadiografIA: el analizador con un texto de ejemplo subrayado",
    },
    tecnologia: "[texto pendiente]",
    texto:
      "Pon tu texto a contraluz: señala los rasgos de estilo que los asistentes de IA dejan más que las personas. 50 reglas con sus fuentes, 6 géneros calibrados; nada sale del navegador.",
    etiquetaEnVivo: "En vivo",
    enVivo: "https://radiografia.antonioblanquez.es",
    codigo: "https://github.com/ablanquez/radiografia",
  },
  {
    nombre: "Desplázame",
    icono:
      "/imagenes/desplazame/logo.png",
    slug: "desplazame",
    /** Solo en /con-vida. */
    captura: {
      src: "/imagenes/desplazame/ruta-bus.png",
      alt: "Captura de Desplázame: una ruta en autobús sobre el mapa de Zaragoza",
    },
    tecnologia: "Angular · Node · TypeScript",
    texto:
      "Cómo ir de un portal a otro en Zaragoza: 8 modos de transporte con motor de rutas propio.",
    etiquetaEnVivo: "En vivo",
    enVivo: "https://desplazame.antonioblanquez.es",
    codigo: "https://github.com/ablanquez/desplazame",
  },
  {
    nombre: "ZetaBus",
    icono:
      "/imagenes/zetabus/logo.png",
    slug: "zetabus",
    /** Solo en /con-vida. */
    captura: {
      src: "/imagenes/zetabus/home-escritorio.png",
      alt: "Captura de ZetaBus: la búsqueda de parada y la lista de líneas diurnas",
    },
    tecnologia: "[texto pendiente]",
    texto:
      "Visor en vivo del autobús urbano de Zaragoza: llegadas por parada, flota en el mapa y desvíos detectados cruzando cuatro fuentes oficiales.",
    etiquetaEnVivo: "En vivo",
    enVivo: "https://zetabus.antonioblanquez.es",
    codigo: "https://github.com/ablanquez/zetabus",
  },
  {
    nombre: "Linaje",
    icono:
      "/imagenes/linaje/logo.png",
    slug: "linaje",
    /** Solo en /con-vida. */
    captura: {
      src: "/imagenes/linaje/arbol-claro.png",
      alt: "Captura de Linaje: un árbol genealógico de demostración con datos ficticios",
    },
    tecnologia: "[texto pendiente]",
    texto:
      "Tu árbol genealógico, autoalojado y bajo tu control: instalador guiado, parentesco automático, copias de seguridad y exportación completa.",
    etiquetaEnVivo: "Demo en vivo",
    enVivo: "https://linaje.antonioblanquez.es",
    codigo: "https://github.com/ablanquez/linaje",
  },
]

export const navegacion = [
  { texto: "Proyectos", ancla: "proyectos" },
  { texto: "Cómo trabajo", ancla: "como-trabajo" },
  { texto: "Sobre mí", ancla: "sobre-mi" },
  { texto: "Contacto", ancla: "contacto" },
]

export const pie = {
  copyright: "© 2026 Antonio Blánquez",
  enlaces: [
    { texto: "Aviso legal", href: "/aviso-legal" },
    { texto: "Privacidad", href: "/privacidad" },
    { texto: "Condiciones", href: "/condiciones" },
    { texto: "Identidad visual", href: "/identidad" },
  ],
}

export type PaginaProyectoDatos = {
  rol: string
  fecha: string
  estado: string
  tecnologias: string[]
  cifras: { valor: string; etiqueta: string }[]
  bloques: {
    queEs: string[]
    decisiones: string[]
    comprobe: string[]
    noHace: string[]
    resultado: string[]
    distinto: string[]
  }
  masCapturas: { src: string; alt: string; pie: string }[]
}

export const paginasProyecto: Record<string, PaginaProyectoDatos> = {
  radiografia: {
    rol: "Idea, diseño y verificación · código con IA · en solitario",
    fecha: "Octubre de 2026",
    estado: "En producción",
    tecnologias: ["Astro", "TypeScript", "JSON Schema", "pdfmake"],
    cifras: [
      {
        valor: "1.217",
        etiqueta: "tests en la suite",
      },
      {
        valor: "1.703",
        etiqueta: "textos de personas apartados para validar",
      },
      {
        valor: "97,9\u00a0%",
        etiqueta: "de textos de personas sin falsa alarma",
      },
      {
        valor: "308",
        etiqueta: "tests de la web, todos pasados en producción",
      },
    ],
    bloques: {
      queEs: [
        "RadiografIA analiza un texto en español y marca los rasgos de estilo que, según sus fuentes, los asistentes de chat dejan más que las personas. Lo compara con textos escritos por personas, del mismo género y la misma longitud, y dice a qué suena. Nunca quién lo escribió.",
        "Nació de mi propio trabajo con IA. Tengo un sistema de reglas para que los textos que escribo con ella suenen a persona, y con el tiempo me sirvió también para notar cuándo alguien me contesta con un texto que ha dejado entero en manos de la IA. RadiografIA convierte esa experiencia en una herramienta.",
        "Por dentro, el motor no sabe nada de IA: aplica paquetes de reglas en JSON. RadiografIA es uno de ellos, y cualquiera puede cargar el suyo, por ejemplo con la guía de estilo de su empresa, sin que el fichero salga del navegador.",
      ],
      decisiones: [
        "Todo corre en el navegador. No hay backend ni cuentas ni cookies, y el texto no sale del ordenador de quien lo pega. El informe en PDF también se genera allí, en un trozo de código que solo se descarga al pulsar «Descargar informe».",
        "Cada regla cita sus fuentes y lleva su nivel de evidencia, y ese nivel limita lo que pesa: lo medido en textos en español pesa hasta 3; lo que solo cuentan guías y observaciones, hasta 1. Las reglas estadísticas no usan umbrales fijos. Comparan el texto con los percentiles de textos de personas de su género y su longitud.",
        "El único etiquetador gramatical para español escrito en JavaScript se midió contra un corpus anotado y se quedó por debajo del 85\u00a0% que se le pedía. Las reglas que dependían de él se quedaron fuera.",
      ],
      comprobe: [
        "La suite tiene 1.217 tests: 909 del motor y 308 de la web. Los de la web abren la página en Chrome y miden lo que se ve: el contraste, el orden del foco, el tamaño de lo que se pulsa y los 320\u00a0px sin scroll horizontal.",
        "Para validar la calibración se apartó el 20\u00a0% de cada corpus antes de medir nada. En esos textos de personas, dos o más reglas estadísticas saltan en el 2,1\u00a0% (35 de 1.703). Ya publicada, la parte de la web volvió a pasar contra producción: 308 de 308.",
      ],
      noHace: [
        "No dice quién escribió un texto. Una persona puede tener esos rasgos y un asistente puede no tenerlos, y por eso la frase dice «suena a». El texto de ejemplo que generó Claude Opus 5.5 sin instrucciones de estilo sale con muy pocos rasgos de asistente.",
        "Tampoco da cifras de acierto: haría falta un corpus de textos de asistente medido con el mismo cuidado. Con menos de 100 palabras no analiza, y las columnas y los blogs de hoy, la narrativa contemporánea, el lenguaje corporativo y el español de América no están calibrados, porque no tienen corpus abierto con licencia.",
      ],
      resultado: [
        "En producción desde el 6 de octubre de 2026: 50 reglas en dos paquetes, 6 géneros calibrados y 54 páginas, con un catálogo donde cada regla tiene su ficha con sus fuentes.",
      ],
      distinto: [
        "El siguiente paso es hacerla más modular. Hoy se puede cargar un paquete de reglas propio, pero entero y solo mientras dura la visita: al recargar la página, desaparece. La idea es una intranet donde activar o desactivar cada regla con un clic y que la elección se quede guardada.",
        "Así servirá para algo más que la IA: por ejemplo, para que una empresa revise sus textos con su propio lenguaje corporativo.",
      ],
    },
    masCapturas: [
      {
        src: "/imagenes/radiografia/ficha.png",
        alt: "Captura de la ficha de una regla en el catálogo de RadiografIA",
        pie: "Cada regla tiene su página: su frase en claro, qué hacer, la explicación con sus fuentes, las excepciones y los ejemplos.",
      },
      {
        src: "/imagenes/radiografia/informe.png",
        alt: "Captura de la página 2 del informe en PDF",
        pie: "La página 2 del PDF: el texto con sus subrayados y, detrás de cada uno, la sigla de su familia, para leerlo sin color.",
      },
    ],
  },
  desplazame: {
    rol: "Idea, diseño y verificación · código con IA · en solitario",
    fecha: "Septiembre de 2026",
    estado: "En producción",
    tecnologias: ["Angular", "TypeScript", "Node", "Leaflet", "OpenStreetMap"],
    cifras: [
      {
        valor: "+1.400",
        etiqueta: "pruebas de unidad",
      },
      {
        valor: "+1.700",
        etiqueta: "veredictos de pantalla en Chrome",
      },
      {
        valor: "46.150",
        etiqueta: "portales del callejero municipal",
      },
      {
        valor: "40",
        etiqueta: "conjuntos de datos, cada uno con su ficha",
      },
    ],
    bloques: {
      queEs: [
        "Desplázame dice cómo ir de un portal a otro de Zaragoza. Se escribe el origen y el destino, se elige el modo, y sale la ruta en el mapa con las indicaciones paso a paso. Los modos son ocho: andando, bus y tranvía, bici propia, BiZi, patinete, coche, moto propia y moto de YeGo.",
        "En Zaragoza cada modo tenía su app o su web, y ninguna hablaba con las demás. Google Maps lleva en autobús con el horario de papel, porque aquí no hay GTFS en tiempo real. Desplázame usa el dato del momento donde existe y, donde no existe, lo dice. ZetaBus sigue al autobús; Desplázame calcula el viaje entero, y el autobús es uno de sus modos.",
      ],
      decisiones: [
        "Sin base de datos: el grafo de 68.649 nodos se carga al arrancar y vive en memoria entre peticiones. El motor y la interfaz comparten un paquete de tipos, y si el motor cambia la forma de la respuesta, la interfaz no compila. Es a propósito.",
        "Las fuentes que caducan, como las bicis libres de BiZi o el poste del autobús, se consultan en el momento. Las demás entran en el repositorio como semilla fechada, con su huella sha256, y un clon limpio levanta el bus y el tranvía sin pedir ninguna clave.",
        "El minuto real del poste se pide solo para el primer autobús. «Próximo en 3 min» en un poste al que se llega dentro de cuarenta minutos es un número cierto sobre un autobús que no se va a coger.",
      ],
      comprobe: [
        "Más de 1.400 pruebas de unidad entre motor e interfaz, y diez suites de pantalla que conducen un Chrome de verdad y suman más de 1.700 veredictos. Miden el píxel pintado y el foco con el teclado, no la clase de CSS que debería haberlo hecho.",
        "El cierre fue una revisión completa en seis frentes. Ya publicada, pasó Lighthouse, axe-core, SSL Labs y el validador del W3C.",
      ],
      noHace: [
        "No adivina. Si un dato no está, lo dice, y «no hay» y «no lo sé» son frases distintas en pantalla. Tampoco pide cuentas ni pone cookies propias.",
        "Desde el 6 de octubre de 2026, el GTFS oficial no trae servicio de autobús, así que ahora mismo no salen rutas en bus. Volverán cuando el operador publique uno nuevo.",
      ],
      resultado: [
        "En producción desde el 8 de septiembre de 2026. Trabaja sobre los 46.150 portales del callejero municipal y cruza OpenStreetMap, la red de bus y tranvía, BiZi, YeGo y la ZBE. Cada uno de sus 40 conjuntos de datos tiene una ficha con su licencia, su fecha y lo que trae de roto.",
      ],
      distinto: [
        "Hoy empiezo por hacer la lista de todos los modos, comprobar de dónde sale el dato de cada uno y construir el núcleo del motor antes que nada.",
        "El siguiente paso es una prueba automática que compare cientos de rutas con las de Google Maps o un GPS, para asegurar que lo que enseña la pantalla coincide con la realidad.",
      ],
    },
    masCapturas: [
      {
        src: "/imagenes/desplazame/ruta-bizi.png",
        alt: "Captura de una ruta en BiZi en Desplázame",
        pie: "«7 bicis disponibles a las 16:57»: con la hora del dato, no un número sin fecha. El botón vuelve a preguntar cuando se pulsa; nada se guarda.",
      },
      {
        src: "/imagenes/desplazame/identidad.png",
        alt: "Captura de la página /identidad de Desplázame",
        pie: "/identidad: cada par de colores con su contraste calculado, no elegido a ojo.",
      },
    ],
  },
  zetabus: {
    rol: "Idea, diseño y verificación · código con IA · en solitario",
    fecha: "Julio de 2026",
    estado: "En producción",
    tecnologias: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Leaflet",
      "OpenStreetMap",
    ],
    cifras: [
      {
        valor: "+470",
        etiqueta: "pruebas de motor",
      },
      {
        valor: "+800",
        etiqueta: "pruebas de navegador",
      },
      {
        valor: "13",
        etiqueta: "informes de auditoría de fuentes",
      },
      {
        valor: "403",
        etiqueta: "vehículos reconocidos",
      },
    ],
    bloques: {
      queEs: [
        "ZetaBus dice cuánto falta para que llegue tu autobús en Zaragoza y dónde está ahora en el mapa. También dice qué vehículo es: articulado de 18 metros o sencillo de 12, eléctrico, híbrido o diésel. Desplázame calcula viajes; ZetaBus solo sigue al autobús.",
        "Existe porque las fuentes oficiales se contradicen y nadie lo dice. Con obras, el GTFS de la ciudad sigue mandando el autobús por calles cortadas. ZetaBus compara ese recorrido con el que el operador publica para hoy, deduce el desvío y tacha las paradas por las que no pasa. El día que restauran la ruta, el aviso se apaga solo.",
      ],
      decisiones: [
        "Primero se auditaron las fuentes y después se escribió el código: siete fases de investigación y trece informes.",
        "En Zaragoza no hay GTFS en tiempo real, así que ZetaBus consulta endpoints no documentados del operador, y lo dice. Pide con caché compartida y un techo de peticiones por segundo, y cada petición lleva el nombre del proyecto y la URL de su repositorio. Cuando nadie está mirando, no pide nada.",
        "Sin base de datos: todo lo que enseña se deriva de sus fuentes, y lo derivable no se guarda.",
      ],
      comprobe: [
        "Más de 470 pruebas de motor con Vitest y más de 800 de navegador con Playwright. Las visuales miden el píxel pintado, porque verificar el JSON con curl no es haber mirado la pantalla.",
        "El 1 de agosto de 2026, ya desplegada, pasó PageSpeed, el validador del W3C, securityheaders y Rich Results, sin que bajara ninguna nota.",
      ],
      noHace: [
        "No adjudica. Si el operador declara una parada suprimida y su sistema sigue anunciando autobuses en ella, ZetaBus enseña los dos hechos y quién dice cada uno, y pide confirmarlo en la marquesina.",
        "Tampoco ve todas las paradas suprimidas: cuando el autobús pasa sin parar, no lo refleja ninguna fuente. El tranvía y los avisos de parada suprimida en la vista de parada están previstos.",
      ],
      resultado: [
        "En producción desde el 26 de julio de 2026, con 44 líneas, 934 paradas y 403 vehículos reconocidos. Cada ficha de vehículo dice de qué fuente sale cada campo, y el pliego municipal destapó que el fichero de flota heredado fallaba en el 20\u00a0% de las longitudes.",
      ],
      distinto: [
        "El siguiente paso es un sistema de datos propio y enriquecido. Las fuentes que usa no coinciden entre sí, ni siquiera las del propio operador, y hoy hay que reconstruir el dato cada día para evitar errores.",
        "La empresa ni siquiera publica qué autobús es cada uno. El modelo, la longitud y el combustible salieron del pliego municipal y, para los 43 vehículos que no aparecían en él, de una web de aficionados que cataloga las flotas.",
      ],
    },
    masCapturas: [
      {
        src: "/imagenes/zetabus/desvio-abierto.png",
        alt: "Captura de la línea 35 con el aviso de desvío abierto",
        pie: "Las paradas tachadas no las publica ninguna fuente como suprimidas: salen de comparar el recorrido oficial con el que Avanza publica para ese día.",
      },
      {
        src: "/imagenes/zetabus/parada-escritorio.png",
        alt: "Captura de una parada con los autobuses en el mapa y la lista de llegadas",
        pie: "Once autobuses en vivo, con su coordenada GPS real. De cada uno, el modelo, la longitud y el combustible; la lista y el mapa van sincronizados.",
      },
    ],
  },
  linaje: {
    rol: "Idea, diseño y verificación · código con IA · en solitario",
    fecha: "Julio de 2026",
    estado: "Demo en vivo",
    tecnologias: [
      "PHP",
      "MySQL / MariaDB",
      "JavaScript",
      "D3.js",
      "family-chart",
    ],
    cifras: [
      {
        valor: "463",
        etiqueta: "pruebas en el backtest final",
      },
      {
        valor: "3",
        etiqueta: "revisiones completas antes de publicarla",
      },
      {
        valor: "0",
        etiqueta: "frameworks: PHP y JavaScript, para que funcione en cualquier hosting compartido",
      },
    ],
    bloques: {
      queEs: [
        "Linaje es una aplicación web para crear y mantener un árbol genealógico. Se instala en tu propio servidor, como un WordPress, y los datos y las fotos de la familia se quedan donde tú decides. Calcula el parentesco de cada persona respecto a la principal, segundas nupcias incluidas.",
        "Mi padre llevaba años reuniendo los datos de nuestro árbol en papeles y archivos sueltos que un día podían perderse. Linaje nació para digitalizar ese legado y dejarlo al alcance de toda la familia, hoy y dentro de muchos años.",
      ],
      decisiones: [
        "Autoalojado, porque los datos son de la familia y no de una plataforma que puede cerrar mañana. Por eso hay copias de seguridad completas, con datos y fotos, y exportación a JSON.",
        "PHP y JavaScript sin frameworks, para que se pueda mantener en cualquier hosting compartido. Solo la carpeta public/ queda al alcance de la web; todo lo demás, fotos incluidas, vive fuera.",
        "El servidor es la única autoridad. Rechaza árboles imposibles, como un ciclo o un tercer progenitor, aunque el navegador los deje pasar.",
      ],
      comprobe: [
        "Antes de publicarla pasó una auditoría de seguridad, una re-auditoría que la dio por lista y un backtest final de 463 pruebas que pedí aunque nos llevara un día entero. Ese backtest encontró problemas que las auditorías habían pasado por alto.",
      ],
      noHace: [
        "Todavía no tiene cuentas por persona, ni varios árboles en una instalación, ni actualización asistida. Están en la hoja de ruta.",
      ],
      resultado: [
        "En producción desde julio de 2026, con demo pública en linaje.antonioblanquez.es: el árbol de una familia ficticia, con caras generadas por IA, que se puede leer sin registro y editar con la clave de demo. Se restablece sola cada hora.",
      ],
      distinto: [
        "Nació como un árbol genealógico sencillo y fue creciendo con el uso. De él salieron las reglas de trabajo que hoy aplico en todos los proyectos.",
        "Hoy fijo desde el primer día esas reglas, la tecnología y el resto de piezas.",
      ],
    },
    masCapturas: [
      {
        src: "/imagenes/linaje/ficha.png",
        alt: "Captura de la ficha de una persona en Linaje",
        pie: "Ficha de lectura, con el parentesco calculado.",
      },
      {
        src: "/imagenes/linaje/admin-datos.png",
        alt: "Captura del panel de administración de Linaje, en la sección de datos",
        pie: "Copias de seguridad, papelera y exportación, desde el panel de administración.",
      },
    ],
  },
}

/** «Cómo trabajo» (textos literales aprobados por Antonio; lote 6, 31/10/2026: sin entrada y sin el paso «Comprobar»).
 *  `icono` es la posición del dibujo en svg.pasos (se quitó el 4.º, «Lista con marcas», junto con su paso). */
export const comoTrabajo = {
  pasos: [
    {
      titulo: "Entender el problema",
      icono: 0,
      texto:
        "Primero, qué hace falta y para quién. Si los datos vienen de fuera, compruebo qué dice cada fuente antes de escribir una línea de código. Si algo de lo que me pides choca con una norma, con la accesibilidad o con los datos disponibles, te lo digo con el porqué y te propongo cómo hacerlo.",
    },
    {
      titulo: "Diseñar en tres tamaños",
      icono: 1,
      texto:
        "Ordenador, tableta y móvil desde el principio, con las pautas de accesibilidad WCAG 2.2 en nivel AA. Cada decisión de diseño la veo aplicada antes de darla por buena, y los colores llevan su contraste calculado.",
    },
    {
      titulo: "Construir por tandas",
      icono: 2,
      texto:
        "La IA escribe el código a partir de encargos escritos, y reviso cada tanda antes de pasar a la siguiente. Primero va lo que no puede fallar; la pantalla, después.",
    },
    {
      titulo: "Cerrar",
      icono: 4,
      texto:
        "Cada proyecto se cierra con una revisión completa en seis frentes: código, pruebas, interfaz, servidor, experiencia de uso y documentación.",
    },
    {
      titulo: "Mantener",
      icono: 5,
      texto:
        "Después de la entrega sigo ahí. Si algo falla o llega un aviso de seguridad, lo reviso, lo arreglo y lo compruebo en la web publicada.",
    },
  ],
}

/** Portada: «Sobre mí» (literal, guidelines.md «About me»). */
export const sobreMi = {
  etapas: [
    {
      rotulo: "2007-2012 · Fundación DFA",
      texto:
        "En la Fundación DFA (Disminuidos Físicos de Aragón) digitalizamos el archivo de casi 25.000 socios para que las trabajadoras sociales y el equipo de empleo lo tuvieran a un clic. Después fui mando intermedio de un departamento de casi 100 personas, con proyectos como el archivo de personal de la DGA y la digitalización del SEPE en más de 20 provincias, junto a Accenture y ECI.",
      cifras: [
        { matiz: "casi", valor: "25.000", etiqueta: "socios digitalizados" },
        { matiz: "casi", valor: "100", etiqueta: "personas a cargo" },
      ],
    },
    {
      rotulo: "2012-2017 · Amazon",
      texto:
        "Vendí como autónomo casi 1.000 referencias de ferretería y accesorios de móvil, con más de 10.000 ventas gestionadas de principio a fin. Los precios, las comisiones y los portes los calculaba en Excel y los subía por CSV.",
      cifras: [
        { matiz: "más de", valor: "10.000", etiqueta: "ventas" },
        { matiz: "casi", valor: "1.000", etiqueta: "referencias" },
      ],
    },
    {
      rotulo: "2017-2025 · Iberalbion",
      texto:
        "En Iberalbion, filial de WiZink, un banco sin oficinas, actualizaba cerca de 15.000 expedientes de KYC al mes (algunos meses, más), revisaba con backtesting procesos automáticos como el bloqueo de tarjetas o los cargos, y conciliaba las operaciones que el sistema no aceptaba. Al buscarles otra vía de entrada, a veces encontraba fallos que después se corregían.",
      cifras: [
        { matiz: "cerca de", valor: "15.000", etiqueta: "expedientes de KYC al mes" },
        { matiz: "durante", valor: "8", etiqueta: "años en banca digital" },
      ],
    },
    {
      rotulo: "2025-2026 · Formación",
      texto:
        "Dos másteres, uno de IA y otro de Frontend 360º: la base para pasar de usar las herramientas a construirlas.",
      cifras: [
        { matiz: "en un año", valor: "2", etiqueta: "másteres cursados" },
      ],
    },
    {
      rotulo: "Desde 2026 · Aplicaciones propias",
      texto:
        "Desde junio de 2026 desarrollo aplicaciones web: las cuatro de esta página y este portafolio. Las construyo en solitario: la IA escribe el código en el lenguaje que haga falta; desmontar el problema en piezas y volver a montarlo bien lo pongo yo, después de más de quince años haciéndolo.",
      cifras: [
        { matiz: "en solitario", valor: "4", etiqueta: "aplicaciones creadas" },
      ],
    },
  ],
  cierre: [
    "Cada etapa de mi carrera siguió un salto de la tecnología: el escáner, el comercio en línea, la banca digital. El siguiente es que cada empresa tenga procesos y aplicaciones a su medida, para que el trabajo repetitivo lo haga un proceso automático y la gente se dedique a lo que no se puede automatizar. Si tu empresa está en ese punto, o buscas a alguien que lo haga desde dentro, hablemos: estoy abierto a proyectos como autónomo y a incorporarme a un equipo.",
  ],
}

/** Portada: «Contacto» como tarjeta de visita (literal, guidelines.md «Contact»). */
export const contacto = {
  entrada: "Respondo en menos de 24 horas laborables.",
  nombre: "Antonio Blánquez",
  rol: "Idea, diseño y verificación · código con IA · en solitario",
  lugar: "Zaragoza · en remoto o presencial",
  correo: {
    canal: "Correo",
    dato: "ablanquez@gmail.com",
    escribir: "Escríbeme",
    copiar: "Copiar",
    copiado: "Copiado",
    anuncioCopiado: "Correo copiado",
    fallo: "No se pudo copiar",
  },
  linkedin: { canal: "LinkedIn", dato: "linkedin.com/in/antonioblanquez" },
  github: { canal: "GitHub", dato: "github.com/ablanquez" },
}
