import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/about.css';

const About: React.FC = () => {
  const [showStory, setShowStory] = useState(false);

  const toggleSection = () => {
    setShowStory(!showStory);
  };

  return (
    <main className="container mx-auto px-4 py-8 flex flex-col items-center">
      <section className="my-8 w-full max-w-2xl"> {/* Limitar el ancho y centrar */}
        <div className="flex flex-col items-center"> {/* Centrar contenido */}
          <img
            alt="Foto de perfil del desarrollador"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg mx-auto" // Centrar imagen
            height="200"
            src="https://imgur.com/a/ffuuygtyio-XwfOfNi"
            width="200"
          />
          <div className="mt-4 max-w-md text-center"> {/* Centrar texto */}
            <h2 className="text-3xl font-bold text-gray-900">{showStory ? 'Mi Historia' : 'Sobre mí'}</h2>
            <button 
              onClick={toggleSection} 
              className="mt-4 flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mx-auto" // Centrar botón
            >
              {showStory ? 'Ver Sobre mí' : 'Ver Mi Historia'}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
            {/* Sección "Sobre mí" */}
            {!showStory && (
              <div className={`transition-opacity duration-500 opacity-100`}>
                <p className="mt-4 text-gray-700 text-lg">
                  Desde pequeño me han llamado la atención las novedades digitales y disfruto aprendiendo creando cosas relacionadas para este medio. Mis gustos incluyen videojuegos, música y deportes. Soy ingeniero de software, con habilidades en JavaScript, Python, Flutter y Java, y frameworks como ReactJS, Node.js, Express y Django. Disfruto el trabajo en equipo y el aprendizaje continuo en el desarrollo de software.
                </p>
              </div>
            )}
            {/* Sección "Mi Historia" */}
            {showStory && (
              <div className={`transition-opacity duration-500 opacity-100`}>
                <p className="mt-4 text-gray-700 text-lg">
                  Aquí puedes contar tu historia personal, cómo llegaste a ser ingeniero de software, tus experiencias y aprendizajes a lo largo del camino. Puedes incluir detalles sobre tus proyectos, desafíos y lo que te motiva a seguir aprendiendo.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;