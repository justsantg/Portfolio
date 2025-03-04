import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Bienvenido a mi Portafolio</h2>
        <p className="mt-4 text-gray-700 text-lg">Soy un estudiante de ingenieria de software, actualmente en 7mo semestre, me apasiona mucho la tecnologia y las novedades, bienvenido a mi portafolio.</p>
        

        <div className="mt-8 flex justify-center space-x-4">
          <a href="https://github.com/justsantg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-gray-700 text-2xl hover:text-gray-900" />
          </a>
          <a href="https://www.linkedin.com/in/santiago-reyes-8a90b1350/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-700 text-2xl hover:text-gray-900" />
          </a>
          <a href="https://www.instagram.com/justsantg/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-gray-700 text-2xl hover:text-gray-900" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;