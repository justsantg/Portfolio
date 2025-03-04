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
        <div className="flex flex-col md:flex-row items-center">
          <img
            alt="Foto de perfil del desarrollador"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg mx-auto" // Centrar imagen
            height="200"
            src="https://storage.googleapis.com/a1aa/image/ssCDsEsP6QKOPp_d30P-jQ6K2g9cYfealB_5QU9V7k0.jpg"
            width="200"
          />
          <div className="md:ml-8 mt-4 md:mt-0 max-w-md text-center"> {/* Centrar texto */}
            <h2 className="text-3xl font-bold text-gray-900">Sobre mí</h2>
            <div className={`transition-opacity duration-500 ${showStory ? 'opacity-0' : 'opacity-100'}`}>
              <p className="mt-4 text-gray-700 text-lg">
                Desde pequeño me han llamado la atención las novedades digitales y disfruto aprendiendo creando cosas relacionadas para este medio. Mis gustos incluyen videojuegos, música y deportes. Soy ingeniero de software, con habilidades en JavaScript, Python, Flutter y Java, y frameworks como ReactJS, Node.js, Express y Django. Disfruto el trabajo en equipo y el aprendizaje continuo en el desarrollo de software.
              </p>
            </div>
            <div className={`transition-opacity duration-500 ${showStory ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-gray-900">Mi Historia</h2>
              <p className="mt-4 text-gray-700 text-lg">
                Aquí puedes contar tu historia personal, cómo llegaste a ser ingeniero de software, tus experiencias y aprendizajes a lo largo del camino. Puedes incluir detalles sobre tus proyectos, desafíos y lo que te motiva a seguir aprendiendo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <button 
        onClick={toggleSection} 
        className="mt-4 flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        {showStory ? 'Ver Sobre mí' : 'Ver Mi Historia'}
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </button>
    </main>
  );
};

export default About;