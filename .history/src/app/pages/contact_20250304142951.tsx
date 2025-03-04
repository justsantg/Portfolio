import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Contacto</h2>
        
        <form className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border border-gray-300 p-2 rounded-lg" placeholder="Nombre" type="text" required />
            <input className="border border-gray-300 p-2 rounded-lg" placeholder="Email" type="email" required />
          </div>
          <textarea className="border border-gray-300 p-2 rounded-lg w-full mt-4" placeholder="Mensaje" required></textarea>
          <button className="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300" type="submit">Enviar</button>
        </form>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tarjeta para WhatsApp */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900">WhatsApp</h3>
            <p className="mt-2 text-gray-700">Envíame un mensaje directo.</p>
            <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300">Enviar Mensaje</a>
          </div>

          {/* Tarjeta para Correo Electrónico */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900">Correo Electrónico</h3>
            <p className="mt-2 text-gray-700">Contáctame a través de mi correo.</p>
            <a href="mailto:tu-email@example.com" className="mt-4 inline-block bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300">Enviar Correo</a>
          </div>

          {/* Tarjeta para Redes Sociales */}
          <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold text-gray-900">Redes Sociales</h3>
            <p className="mt-2 text-gray-700">Conéctate conmigo en mis redes.</p>
            <a href="https://github.com/justsantg" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-900 transition duration-300">GitHub</a>
            <a href="https://www.linkedin.com/in/santiago-reyes-8a90b1350/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition duration-300">LinkedIn</a>
            <a href="https://www.instagram.com/justsantg/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition duration-300">Instagram</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;