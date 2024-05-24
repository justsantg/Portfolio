import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        
        hi: 'Welcome',
        homePage: 'Home Page',
        aboutMe : 'About me',
        portfolio: 'Portfolio',
        skills: 'Skills',
        contactMe: 'Contact Me',

        title: 'Santiago Reyes Portfolio',
        description: 'I am a software engineering student, passionate about soccer, technology and news in the digital world, with experience in a variety of technologies and tools related to software.',
        welcomePort: 'Welcome to my portfolio',
        email: 'Email',

        aboutMe1:'Since I was little I knew that I was going to have a special connection with technology and I was able to develop very well throughout my life where I have learned a lot and it has taught me a lot continuing with that desire to expand into the world of cybersecurity and data management.',
        aboutMe2:'I also know the English language very well, being one of my strengths and a fundamental factor that has helped me a lot in terms of my study with software.',
        downCV: 'Download CV',

        seeMore:'See more',
        apiGranja: 'Barn API',
        description1: 'Barn about day a day products where it shows variety of food and its price.',
        apiParque:'Parking API',
        description2: 'Api that saves data about a parking service making a calculation of the price based in the hours',
        apiConver:'Conversion API',
        description3: 'API in charge of converting meters to inches for a dressmakers fabrics',
        ApiMoneda: 'Currency convert API',
        description4:'Api in charge of converting the currency from dollars to Colombian pesos'
      },
    },
    es: {
      translation: {
        
        hi: 'Bienvenido',
        homePage: 'Inicio',
        aboutMe: 'Sobre mi',
        portfolio: 'Portafolio',
        skills: 'Habilidades',
        contactMe: 'Contacto',

        title: 'Portafolio de Santiago Reyes',
        description: 'Soy estudiante de ingenieria de software, apasionado por el futbol, la tecnologia y las novedades en el mundo virtual, con experiencia en variedad de tecnologias y herramientas relacionadas con software',
        welcomePort: 'Bienvenido a mi portafolio',
        email: 'Correo electronico',

        aboutMe1:'Desde pequeño supe que iba a tener una conexion especial con la tecnologia y me pude desarrollar muy bien a lo largo de mi vida en donde eh aprendido mucho y esta me ha enseñado mucho continuando con ese deseo propio de expandirme al mundo de la ciberseguridad y el manejo de datos.',
        aboutMe2: 'También me manejo muy bien el idioma inglés siendo uno de mis fuertes y un factor fundamental que me ha ayudado mucho en cuanto a mi estudio con software refiere',
        downCV: 'Descargar CV',

        seeMore:'Ver mas',
        apiGranja: 'Api Granja',
        description1: 'Granja de productos en donde se muestra diferentes alimentos y su precio.',
        apiParque:'Api Parqueo',
        description2:'Api encargada de almacenar datos y calcular el precio del parqueo segun las horas de un vehiculo.',
        apiConver:'Api Conversion',
        description3: 'Api encargada de convertir metros a pulgadas para las telas de una modista',
        ApiMoneda: 'Api conversion de moneda',
        description4:'Api encargada de convertir la moneda de dólares a pesos colombianos'
      },
    },
  },
});

export default i18n;