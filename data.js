// ============================================================
// DATA.JS — editá este archivo para agregar posts y proyectos
// sin tocar index.html ni script.js
// ============================================================

// ——— POSTS DEL BLOG ———
// Para agregar un post nuevo: copiá un objeto, cambiá el contenido,
// y poné activo: true. Si activo es false, aparece como "próximamente".
// Los primeros 4 con activo:true se muestran en el inicio.
// Todos aparecen en blog.html (próximamente).

var POSTS = [
  {
    fecha_es: 'Mar 2026',
    fecha_en: 'Mar 2026',
    categoria: 'personal',
    titulo_es: 'Algo más que la felicidad — sobre El hombre en busca de sentido',
    titulo_en: 'More than happiness — on Man\'s Search for Meaning',
    subtitulo_es: 'Sobre <em>El hombre en busca de sentido</em> de Viktor Frankl',
    subtitulo_en: 'On Viktor Frankl\'s <em>Man\'s Search for Meaning</em>',
    tag: 'Personal',
    destacado: true,
    activo: true,
    contenido_es:
      '<p>Hay una escena cerca del final del libro que no me abandona. Los prisioneros acaban de ser liberados. Después de años de campos, de frío, de hambre, de ver morir a los que estaban al lado — de repente, campo abierto. Frankl describe cómo algunos empiezan a caminar entre las plantas y las flores, y simplemente las pisan. Sin malicia, sin conciencia. Como si la libertad recién recuperada no supiera todavía qué hacer consigo misma. Él se detiene en eso y dice algo que me pareció muy razonable: la libertad sin sentido puede volverse tan destructiva como la opresión.</p>'
      + '<p>Llegué a esa escena por un reel de Instagram, que tampoco es el origen más literario del mundo. Pero algo en esa imagen — creo que fue que había una pregunta enorme escondida en un gesto pequeño — me hizo sentir que ese libro tenía algo que yo andaba buscando sin saber bien cómo nombrarlo. Últimamente me doy vueltas con la pregunta del sentido. No solo como ejercicio filosófico sino como algo más personal. Frankl me mostró que no estoy sola en esa inquietud.</p>'
      + '<p>Lo que más me sorprendió no fue el testimonio de los campos, aunque eso también sacude y remueve. Fue descubrir que Frankl no trata la pregunta por el sentido como una de esas preguntas que se lanzan al aire para que suenen profundas. La trabaja. La exprime desde adentro, desde la experiencia más extrema que pueda existir, hasta que extrae algo concreto y útil.</p>'
      + '<p>La logoterapia parte de una idea simple y a la vez bastante radical: la motivación más profunda del ser humano no es el placer ni el poder, sino la búsqueda de sentido. Y el sentido, dice Frankl, no se inventa — se responde. La vida nos hace preguntas a través de las circunstancias, y nuestra tarea es contestarlas con acciones, con elecciones, con presencia.</p>'
      + '<p>Frankl propone tres caminos al sentido: crear o hacer algo, amar profundamente a alguien o algo, y — el más difícil — encontrar sentido incluso en el sufrimiento inevitable, eligiendo cómo pararse frente a lo que no se puede cambiar.</p>'
      + '<p>Quizás lo que más me quedó es la idea de que entre lo que nos pasa y lo que hacemos con eso siempre hay un espacio. Esa libertad interior, dice Frankl, es la última dignidad que nadie puede quitarle a nadie.</p>'
      + '<p>Me pregunto si en los libros que leyeron ustedes apareció algo parecido: no necesariamente la pregunta por el sentido, pero sí alguna idea que los haya obligado a mirarse. Eso es lo que más me interesa — no tanto de qué tratan los libros, sino qué les hicieron.</p>',
    contenido_en:
      '<p>There is a scene near the end of the book that stays with me. The prisoners have just been liberated. After years of camps, cold, hunger, of watching those beside them die — suddenly, open fields. Frankl describes how some of them start walking through the flowers and plants and simply trample them. Without malice, without awareness. As though freedom, so recently recovered, did not yet know what to do with itself. He pauses on this and says something I found deeply reasonable: freedom without meaning can become just as destructive as oppression.</p>'
      + '<p>I came to that scene through an Instagram reel, which is not the most literary of origins. But something in that image — I think it was a huge question hidden inside a tiny gesture — made me feel that this book held something I had been looking for without quite knowing how to name it. Lately I keep circling back to the question of meaning. Not just as a philosophical exercise, but as something more personal. Frankl showed me I am not alone in that unease.</p>'
      + '<p>What surprised me most was not the testimony of the camps, though that shakes and moves you too. It was discovering that Frankl does not treat the question of meaning as one of those questions you throw into the air to sound profound and leave floating there. He works it. He wrings it from the inside, from the most extreme experience imaginable, until he extracts something concrete and useful.</p>'
      + '<p>Logotherapy starts from a simple and yet quite radical idea: the deepest human motivation is not pleasure or power, but the search for meaning. And meaning, Frankl says, is not invented — it is answered. Life asks us questions through our circumstances, and our task is to answer them with actions, choices, presence.</p>'
      + '<p>Frankl proposes three paths to meaning: creating or doing something, loving someone or something deeply, and — the hardest — finding meaning even in unavoidable suffering, by choosing how to stand before what cannot be changed.</p>'
      + '<p>Perhaps what stayed with me most is the idea that between what happens to us and what we do with it, there is always a space. That inner freedom, says Frankl, is the last dignity no one can take from anyone.</p>'
      + '<p>I wonder whether in the books you have read something similar appeared — not necessarily the question of meaning, but some idea that forced you to look at yourself. That is what interests me most — not so much what books are about, but what they do to you.</p>'
  },
  {
    fecha_es: 'Próximamente',
    fecha_en: 'Coming soon',
    categoria: 'stem',
    titulo_es: 'Qué es la tomografía óptica difusa y por qué me importa',
    titulo_en: 'What is diffuse optical tomography and why it matters',
    tag: 'STEM',
    destacado: true,
    activo: false
  },
  {
    fecha_es: 'Próximamente',
    fecha_en: 'Coming soon',
    categoria: 'personal',
    titulo_es: 'Por qué fundé Women in STEM (y qué aprendí en el camino)',
    titulo_en: 'Why I founded Women in STEM (and what I learned)',
    tag: 'Personal',
    destacado: true,
    activo: false
  },
  {
    fecha_es: 'Próximamente',
    fecha_en: 'Coming soon',
    categoria: 'stem',
    titulo_es: 'Redes neuronales explicadas sin fórmulas (bueno, casi)',
    titulo_en: 'Neural networks explained without formulas (well, almost)',
    tag: 'STEM',
    destacado: true,
    activo: false
  }
];


// ——— PROYECTOS ———
// Para agregar un proyecto: copiá un objeto y completá los campos.
// link: '#' si no tiene link todavía.

var PROYECTOS = [
  {
    num: '01',
    titulo_es: 'Problema inverso en tomografía óptica difusa',
    titulo_en: 'Inverse problem in diffuse optical tomography',
    desc_es: 'Tesis de grado. Reconstrucción de propiedades ópticas de tejido vivo mediante diferentes arquitecturas de redes neuronales artificiales.',
    desc_en: 'Undergraduate thesis. Reconstruction of optical properties of living tissue using different artificial neural network architectures.',
    techs: 'Python · PyTorch · NumPy',
    link: '#'
  },
  {
    num: '02',
    titulo_es: 'Predicción de riesgo cardiovascular con IA',
    titulo_en: 'Cardiovascular risk prediction with AI',
    desc_es: 'Investigación en el Instituto PLADEMA. Modelos matemáticos e IA para predecir enfermedad coronaria a partir de geometría arterial.',
    desc_en: 'Research at PLADEMA Institute. Mathematical and AI models to predict coronary artery disease from arterial geometry.',
    techs: 'Python · scikit-learn · SciPy',
    link: '#'
  },
  {
    num: '03',
    titulo_es: 'Women in STEM UNCPBA',
    titulo_en: 'Women in STEM UNCPBA',
    desc_es: 'Fundadora del club para promover la participación femenina en STEM. Organización del Ada Lovelace Day 2024, con talleres para niñas de 10–12 años.',
    desc_en: 'Founder of the club to promote female participation in STEM. Organised Ada Lovelace Day 2024 with workshops for girls aged 10–12.',
    techs_es: 'Divulgación · Comunidad',
    techs_en: 'Outreach · Community',
    link: '#'
  }
];
