"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Locale = "es" | "en";

const translations = {
  // Navigation
  "nav.logo": { es: "Portafolio", en: "Portfolio" },
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.about": { es: "Sobre Mi", en: "About" },
  "nav.experience": { es: "Experiencia", en: "Experience" },
  "nav.portfolio": { es: "Portafolio", en: "Portfolio" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.openMenu": { es: "Abrir menu", en: "Open menu" },
  "nav.closeMenu": { es: "Cerrar menu", en: "Close menu" },

  // Hero
  "hero.subtitle": {
    es: "Ingeniero de Software",
    en: "Software Engineer",
  },
  "hero.name": { es: "Santiago Reyes Sanchez", en: "Santiago Reyes Sanchez" },
  "hero.tagline": {
    es: "Construyendo aplicaciones web, aplicaciones mobiles y desarrollo full stack moderno, escalable y elegante.",
    en: "Building modern, scalable, and elegant web applications, mobile applications and full stack development.",
  },
  "hero.location": { es: "Pasto, Nariño, Colombia", en: "Pasto, Nariño, Colombia" },
  "hero.available": {
    es: "Disponible para Trabajar",
    en: "Available for Work",
  },

  // About
  "about.number": { es: "01 ---", en: "01 ---" },
  "about.title": { es: "Sobre Mi", en: "About" },
  "about.bio1": {
    es: "Me considero una persona simple con gustos algo exoticos, desde pequeño supe que algo me unia a la tecnologia y a las novedades desde que descubri un hobbie tan grande como el de los videojuegos, paso el tiempo y me empezo a nacer una necesidad de saber que habia mas alla de lo que yo podia ver y controlar y es donde supe lo grande que era el mundo de la programacion, entre otras cosas me considero fanatico del futbol especialmente mis dos equipos del corazon Deportivo Pasto y Real Madrid C.F y del idioma inglés.",
    en: "I consider myself a simple person with somewhat exotic tastes. From a young age, I knew that something connected me to technology and new things, ever since I discovered a hobby as great as video games. As time passed, a need arose in me to know what lay beyond what I could see and control, and that's when I learned how vast the world of programming was. Among other things, I consider myself a fan of football specially my two heart teams Deportivo Pasto and Real Madrid C.F and the English language.",
  },
  "about.bio2": {
    es: "Creo que todos hemos pasado por etapas de desconocimiento o de dudas sobre lo que vamos a ser en nuestro futuro y yo no soy la excepcion, siento que la ingenieria de software me abrio una puerta desconocida para mi y que me enganchó aun mas a aprender sobre tecnologias y tematicas con un mundo infinito de posibilidades.",
    en: "I think we've all gone through stages of uncertainty or doubt about what we're going to be in our future, and I'm no exception. I feel that software engineering opened a door that was unknown to me and hooked me even more on learning about technologies and topics with an infinite world of possibilities.",
  },
  "about.bio3": {
    es: "A traves de mi paso por la carrera de ingenieria de software he podido ver un rubro en el cual siento que yo me puedo desarrollar y crecer como profesional, siento que a pesar de que me falta mucho para ser un ingeniero del tipo senior o experto, si tengo el suficiente tiempo y las ganas de aprender que me caracterizan siento que podre llegar a ser un gran ingeniero de software, si hay algo que me caracteriza es que me gusta ser muy detallista y mis proyectos personales lo respaldan por lo cual ideas nuevas, innovadoras y creativas son algo que me gusta para cualquier proyecto en el que me involucre.",
    en: "Through my journey in the Software Engineering program, I have been able to see a field in which I feel I can develop and grow professionally. I feel that, despite having a lot to learn before becoming a senior or expert engineer, if I have enough time and the desire to learn that characterizes me, I can become a great software engineer. If there is something that characterizes me is that I like to be very detailed, and my personal projects support this, so new, innovative and creative ideas are something I enjoy for any project in which I get involved.",
  },
  "about.storyTitle": { es: "Mi Historia", en: "My Story" },
  "about.storyText": {
    es: "Contar mi historia siento que es complicado para mi ya que siento que soy una persona simple la cual no le pasan cosas impresionantes, pastuso desde la cuna me crie en una familia afectiva y que me ha apoyado desde que era muy pequeño, los valores, gustos y aficiones de mi padre siempre han estado presentes en mi, mi madre que es un pilar para lo que soy ahora a traves de sus enseñanzas y acompañamiento, y finalmente mi hermana, mi compañera de vida en donde que nos hayamos criado juntos con edades parecidas nos hizo mas cercanos a traves de gustos y vivencias, por otro lado, recientemente tuve uno de los momentos mas dificiles de mi vida, me rompi mi tendon patelar derecho mientras jugaba el deporte que mas amo el futbol, siento que mi familia y mi fuerza de voluntad me ayudaron a recuperarme de esto y no solo esto si no que a perder mas de 40 kilos de peso en este proceso de recuperacion, ayudandome a sentirme mejor conmigo mismo.  Pasando un poco a mis gustos, me crie con bastantes caricaturas, animes y videojuegos, gustos los cuales mantengo hasta la actualidad, el futbol que es mi acompañante preferido para cualquier deporte y musica que entre mis artistas favoritos puedo mencionar a Travis Scott, Kendrick Lamar o Tyler the creator, siendo el hip hop, rap, trap y R&B mis generos predilectos pero disfruto a mas no poder de la salsa con el Gran Combo de Puerto Rico como mis favoritos, el reggaeton con Bad Bunny y Jhayco como mis favoritos y cualquier tipo de musica que me haga sentir bien y disfrutar el momento.",
    en: "Telling my story feels complicated because I feel like a simple person who doesn't experience anything particularly remarkable. Born in Pasto, I grew up in a loving family that has supported me since I was very young. My father's values, tastes, and hobbies have always been present in me. My mother is a pillar of who I am today through her teachings and support. And finally, my sister, my life partner, and the fact that we grew up together at similar ages made us even closer through shared interests and experiences. On the other hand, I recently had one of the most difficult moments of my life: I ruptured my right patellar tendon while playing the sport I love most, soccer. I feel that my family and my willpower helped me recover from this, and not only that, but I also lost over 40 kilos during this recovery process, helping me feel better about myself. Moving on to my tastes, I grew up with a lot of cartoons, anime, and video games, tastes which I still maintain today. Soccer is my favorite companion for any sport, and as for music, among my favorite artists I can mention Travis Scott, Kendrick Lamar, or Tyler, the Creator. Hip hop, rap, trap, and R&B are my preferred genres, but I absolutely love salsa, with El Gran Combo de Puerto Rico as my favorites, reggaeton with Bad Bunny and Jhayco as my favorites, and any kind of music that makes me feel good and enjoy the moment.",
  },
  "about.imgCaption1": {
    es: "Mi foto personal",
    en: "My personal photo",
  },
  "about.imgCaption2": {
    es: "De donde vine",
    en: "Where I come from",
  },
  "about.imgCaption3": {
    es: "Mi espacio de trabajo",
    en: "My workspace",
  },
  "about.details": { es: "Detalles", en: "Details" },
  "about.labelName": { es: "Nombre", en: "Name" },
  "about.labelLocation": { es: "Ubicacion", en: "Location" },
  "about.labelEmail": { es: "Correo", en: "Email" },
  "about.labelEducation": { es: "Educacion", en: "Education" },
  "about.valueName": { es: "Santiago Reyes Sanchez", en: "Santiago Reyes Sanchez" },
  "about.valueLocation": { es: "Pasto, Nariño, Colombia", en: "Pasto, Nariño, Colombia" },
  "about.valueEmail": { es: "santiago.reyess1809@gmail.com", en: "santiago.reyess1809@gmail.com" },
  "about.valueEducation": {
    es: "Ing. en Software",
    en: "Software Engineering",
  },
  "about.skills": { es: "Habilidades", en: "Skills" },

  // Experience
  "experience.number": { es: "02 ---", en: "02 ---" },
  "experience.title": { es: "Trayectoria", en: "Journey" },
  "experience.subtitle": {
    es: "Como lo mencione anteriormente, mi camino en la ingenieria de software ha sido una experiencia de aprendizaje constante, desde mis primeros pasos en el aula hasta mis practicas profesionales, cada etapa me ha acercado mas a convertirme en un desarrollador completo.",
    en: "As I mentioned before, my journey in software engineering has been a constant learning experience, from my first steps in the classroom to my professional internships, each stage has brought me closer to becoming a complete developer.",
  },

  // Education
  "experience.education.tag": { es: "Formacion", en: "Education" },
  "experience.education.period": {
    es: "2022 --- 2026",
    en: "2022 --- 2026",
  },
  "experience.education.role": {
    es: "Ingenieria de Software",
    en: "Software Engineering",
  },
  "experience.education.company": {
    es: "Universidad Cooperativa de Colombia - Sede Pasto",
    en: "Cooperative University of Colombia - Pasto Campus",
  },
  "experience.education.description": {
    es: "A traves de mi formacion puede encoentrar todo lo necesario para un desarrollo completo tanto de mi perosna como mis conocimientos, sin dejar a un lado que pude conocer a amigos que me acompañaron y que aprendimos mutuamente de esta carrera.",
    en: "Through my formation I was able to find everything necessary for a complete development of both myself and my knowledge, not to mention that I was able to meet friends who accompanied me and with whom I learned from each other in this career.",
  },
  "experience.education.achievement1": {
    es: "Desarrollo completo y satisfactorio de mi proyecto de grado enfocado a la facturacion y ventas de PyMEs de la ciudad de Pasto junto a mi compañero Deivid Julian Cardenas",
    en: "Complete and satisfactory development of my graduation project focused on billing and sales of SMEs in the city of Pasto together with my colleague Deivid Julian Cardenas",
  },
  "experience.education.achievement2": {
    es: "Viaje empresarial a la ciudad de Medellin en donde tuve la oportunidad de asistir al evento de tecnologia y transformacion Bintec en el año 2023, por otro lado visité empresas como Pragma y C&T en donde pude conocer mas sobre el contexto del mundo laboral enfocado al desarrollo de software y la ingenieria de software en general.",
    en: "Business trip to the city of Medellin where I had the opportunity to attend the Bintec technology and transformation event in 2023, and also visited companies like Pragma and C&T where I could learn more about the context of the labor world focused on software development and software engineering in general.",
  },

  // Internship
  "experience.internship.tag": { es: "Practicas", en: "Internship" },
  "experience.internship.period": {
    es: "8 de Abril del 2025 --- 20 de Noviembre del 2025",
    en: "April 8, 2025 --- November 20, 2025",
  },
  "experience.internship.role": {
    es: "Practicante de Desarrollo Web",
    en: "Web Development Intern",
  },
  "experience.internship.company": {
    es: "Parquesoft Nariño",
    en: "Parquesoft Nariño",
  },
  "experience.internship.description": {
    es: "Durante mi estadia en Parquesoft Nariño, tuve la oportunidad de envolverme en todo el ciclo de desarrollo de software, desde su planificacion, pasando por el diseño y la codificacion a traves de metricas establecidad para un buen proceso de desarrollo, ademas de esto pude conocer mas sobre el mundo laboral y la importancia de la comunicacion y el trabajo en equipo para el exito de cualquier proyecto.",
    en: "During my time at Parquesoft Nariño, I had the opportunity to be involved in the entire software development cycle, from planning, through design and coding, using established metrics for a good development process. In addition, I was able to learn more about the working world and the importance of communication and teamwork for the success of any project.",
  },
  "experience.internship.achievement1": {
    es: "Participacion constante en el desarrollo de una plataforma para el manejo de emprendimientos de la ciudad de Pasto, en donde pude aportar mediante desarrollo de diseños y conexiones con backend de forma completa.",
    en: "Constant participation in the development of a platform for managing enterprises in the city of Pasto, where I contributed through design development and backend connections.",
  },
  "experience.internship.achievement2": {
    es: "Aprendizaje constante de frameworks y plantillas desconocidas para mi, como Boilerplate, PHP Voyager, sakai o mejorar mis habilidades con Angular, Laravel, MySQL y manejo de Bases de Datos",
    en: "Constant learning of unknown frameworks and templates for me such as Boilerplate, PHP Voyager, sakai or improving my skills with Angular, Laravel, MySQL and database management",
  },

  // Personal Projects
  "experience.projects.tag": { es: "Proyectos", en: "Projects" },
  "experience.projects.period": {
    es: "Continuo",
    en: "Ongoing",
  },
  "experience.projects.role": {
    es: "Proyectos Personales",
    en: "Personal Projects",
  },
  "experience.projects.company": {
    es: "Desarrollo Independiente",
    en: "Independent Development",
  },
  "experience.projects.description": {
    es: "Como lo he mencionado me gusta pensar en nuevas formas de desarrollo, a veces siento que me bloqueo al realizar cualquiera de mis proyectos pero siempre logro encontrar la inspiracion en cosas cotidianas que necesitan de una solucion digital eficaz y amigable con el usuario.",
    en: "As I mentioned, I like to think about new ways of developing. Sometimes I feel like I get blocked when carrying out any of my projects, but I always manage to find inspiration in everyday things that need an effective and user-friendly digital solution.",
  },
  "experience.projects.achievement1": {
    es: "Actualmente estoy trabajando en un proyecto personal enfocado en una aplicacion mobile para todo tipo de ayuda a las personas con su vehiculo, en donde las personas pueden preguntar, guardar, compartir y encontrar soluciones a problemas relacionados con sus vehiculos, desde mantenimiento, reparaciones, recomendaciones de productos, hasta consejos para el cuidado del vehiculo.",
    en: "Currently working on a personal project focused on a mobile application to help people with their vehicles, where people can ask questions, save, share and find solutions to problems related to their vehicles, from maintenance, repairs, product recommendations, to tips for vehicle care.",
  },
  "experience.projects.achievement2": {
    es: "Mi repositorio esta lleno de mis proyectos personales desde que inicie mi camino en la ingenieria de software en donde puedes encontrar desde proyectos sencillos realizados para consolas hasta proyectos mas complejos con interfaces graficas, aplicaciones web y aplicaciones mobiles, cada proyecto es un paso mas en mi camino para convertirme en un gran ingeniero de software.",
    en: "My repository is full of my personal projects since I started my journey in software engineering, where you can find simple projects made for consoles to more complex projects with graphical interfaces, web applications and mobile applications. Each project is a step forward in my path to becoming a great software engineer.",
  },

  // Portfolio
  "portfolio.number": { es: "03 ---", en: "03 ---" },
  "portfolio.title": { es: "Portafolio", en: "Portfolio" },
  "portfolio.screenshot": {
    es: "Captura del Proyecto",
    en: "Project Screenshot",
  },
  "portfolio.liveDemo": { es: "Demo en Vivo", en: "Live Demo" },
  "portfolio.source": { es: "Codigo", en: "Source" },
  "portfolio.1.title": {
    es: "Nombre del Proyecto Uno",
    en: "Project Name One",
  },
  "portfolio.1.description": {
    es: "Describe tu proyecto aqui. Que problema resuelve? Que tecnologias usaste?",
    en: "Describe your project here. What problem does it solve? What technologies did you use?",
  },
  "portfolio.2.title": {
    es: "Nombre del Proyecto Dos",
    en: "Project Name Two",
  },
  "portfolio.2.description": {
    es: "Describe tu segundo proyecto aqui. Cual fue el objetivo? Cual fue tu rol?",
    en: "Describe your second project here. What was the goal? What was your role?",
  },
  "portfolio.3.title": {
    es: "Nombre del Proyecto Tres",
    en: "Project Name Three",
  },
  "portfolio.3.description": {
    es: "Agrega otra descripcion de proyecto. Destaca el impacto y los desafios tecnicos que superaste.",
    en: "Add another project description. Highlight the impact and the technical challenges you overcame.",
  },
  "portfolio.4.title": {
    es: "Nombre del Proyecto Cuatro",
    en: "Project Name Four",
  },
  "portfolio.4.description": {
    es: "Describe un proyecto mas. Muestra la diversidad de tus habilidades y los tipos de aplicaciones que construyes.",
    en: "Describe one more project. Showcase diversity in your skills and the types of applications you build.",
  },

  // Contact
  "contact.number": { es: "04 ---", en: "04 ---" },
  "contact.title": { es: "Contacto", en: "Contact" },
  "contact.cta": {
    es: "Interesado en trabajar juntos o tienes un proyecto en mente? No dudes en contactarme. Siempre estoy abierto a nuevas oportunidades y colaboraciones.",
    en: "Interested in working together or have a project in mind? Feel free to reach out. I am always open to new opportunities and collaborations.",
  },
  "contact.email": { es: "santiago.reyess1809@gmail.com", en: "santiago.reyess1809@gmail.com" },
  "contact.labelName": { es: "Nombre", en: "Name" },
  "contact.labelEmail": { es: "Correo", en: "Email" },
  "contact.labelMessage": { es: "Mensaje", en: "Message" },
  "contact.placeholderName": { es: "Tu nombre", en: "Your name" },
  "contact.placeholderEmail": { es: "tu@correo.com", en: "your@email.com" },
  "contact.placeholderMessage": {
    es: "Cuentame sobre tu proyecto...",
    en: "Tell me about your project...",
  },
  "contact.send": { es: "Enviar Mensaje", en: "Send Message" },
  "contact.available": {
    es: "Disponible para nuevos proyectos",
    en: "Available for new projects",
  },
  "contact.viewDemo": {
    es: "Ver demo de",
    en: "View demo of",
  },
  "contact.viewCode": {
    es: "Ver codigo de",
    en: "View code of",
  },

  // Footer
  "footer.name": { es: "Santiago Reyes Sanchez", en: "Santiago Reyes Sanchez" },
  "footer.rights": {
    es: "\u00A9 2026 --- Todos los Derechos Reservados",
    en: "\u00A9 2026 --- All Rights Reserved",
  },
  "footer.built": {
    es: "Construido con React, TypeScript & Next.js",
    en: "Built with React, TypeScript & Next.js",
  },
} as const;

type TranslationKey = keyof typeof translations;

interface I18nContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[locale];
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
