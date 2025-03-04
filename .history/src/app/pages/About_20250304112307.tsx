import React from 'react';

const About: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8">
        <div className="flex flex-col md:flex-row items-center">
          <img alt="Foto de perfil del desarrollador" className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg" height="200" src="https://storage.googleapis.com/a1aa/image/ssCDsEsP6QKOPp_d30P-jQ6K2g9cYfealB_5QU9V7k0.jpg" width="200"/>
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-900">Sobre mí</h2>
            <p className="mt-4 text-gray-700 text-lg">Soy un desarrollador web con experiencia en React y Tailwind CSS. Me apasiona crear aplicaciones web modernas y eficientes.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;