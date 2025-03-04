import React, { useState } from 'react';
import '../assets/styles/about.css'; // Ajusta la ruta según la ubicación de About.tsx



const About: React.FC = () => {
  const [showStory, setShowStory] = useState(false);

  const toggleSection = () => {
    setShowStory(!showStory);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8">
        <div className="flex flex-col md:flex-row items-center">
          <img alt="Foto de perfil del desarrollador" className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg" height="200" src="https://storage.googleapis.com/a1aa/image/ssCDsEsP6QKOPp_d30P-jQ6K2g9cYfealB_5QU9V7k0.jpg" width="200"/>
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-900">Sobre mí</h2>
            <p className={`mt-4 text-gray-700 text-lg transition-opacity duration-500 ${showStory ? 'opacity-0' : 'opacity-100'}`}>
              Desde pequeño me han llamado la atención las novedades digitales y disfruto aprendiendo creando cosas relacionadas para este medio, entre mis gustos están los videojuegos, la música y los deportes. Soy ingeniero de software, mis principales Skills están en los lenguajes de: JavaScript, Python, Flutter y Java, con los frameworks de ReactJS, Node.js, Express, Django. También disfruto el trabajo en equipo y el aprendizaje continuo de nuevas tecnologías en el desarrollo de software y me considero una persona dispuesta para trabajos grupales y en solitario sin dejar atrás que me encanta seguir progresando en cuanto al desarrollo de software refiere.
            </p>
          </div>
        </div>
      </section>

      <button onClick={toggleSection} className="mt-4 text-blue-500 hover:underline">
        {showStory ? 'Ver Sobre mí' : 'Ver Mi Historia'}
      </button>

      <section className={`my-8 transition-opacity duration-500 ${showStory ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold text-gray-900">Mi Historia</h2>
        <p className="mt-4 text-gray-700 text-lg">
          Aquí puedes contar tu historia personal, cómo llegaste a ser ingeniero de software, tus experiencias y aprendizajes a lo largo del camino. Puedes incluir detalles sobre tus proyectos, desafíos y lo que te motiva a seguir aprendiendo.
        </p>
      </section>
    </main>
  );
};

export default About;