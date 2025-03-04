import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Contacto</h2>


        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tarjeta para WhatsApp */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900">WhatsApp</h3>
            <p className="mt-2 text-gray-700">Envíame un mensaje directo.</p>
            <a href="https://wa.me/+573003719503" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-green-500">
              <FontAwesomeIcon icon={faComments} size="2x" />
            </a>
          </div>

          {/* Tarjeta para Correo Electrónico */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900">Correo Electrónico</h3>
            <p className="mt-2 text-gray-700">Contáctame a través de mi correo.</p>
            <a href="mailto:santiago.reyess1809@gmail.com" className="mt-4 inline-block text-blue-500">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>

          {/* Tarjeta para Redes Sociales */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900">Redes Sociales</h3>
            <p className="mt-2 text-gray-700">Conéctate conmigo en mis redes.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://github.com/justsantg" target="_blank" rel="noopener noreferrer" className="text-gray-800">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/santiago-reyes-8a90b1350/" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.instagram.com/justsantg/" target="_blank" rel="noopener noreferrer" className="text-pink-500">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;