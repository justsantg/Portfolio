import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Bienvenido a mi Portafolio</h2>
        <p className="mt-4 text-gray-700 text-lg">Soy un estudiante de ingenieria de software, actualmente en 7mo semestre, me apasiona mucho la tecnologia y las novedades.</p>
        <img alt="Imagen de bienvenida" className="mt-8 mx-auto rounded-lg shadow-lg" height="400" src="https://storage.googleapis.com/a1aa/image/ssCDsEsP6QKOPp_d30P-jQ6K2g9cYfealB_5QU9V7k0.jpg" width="600"/>
      </section>
    </main>
  );
};

export default Home;