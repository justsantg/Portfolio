import React from 'react';

const About: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8">
        <div className="flex flex-col md:flex-row items-center">
          <img alt="Foto de perfil del desarrollador" className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg" height="200" src="https://storage.googleapis.com/a1aa/image/ssCDsEsP6QKOPp_d30P-jQ6K2g9cYfealB_5QU9V7k0.jpg" width="200"/>
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-900">Sobre mí</h2>
            <p className="mt-4 text-gray-700 text-lg">Desde pequeño me han llamado la atención las novedades digitales y disfruto aprendiendo creando cosas relacionadas para este medio, entre mis gustos estan los videojuegos, la musica y los deportes. Soy ingeniero de software mis principales Skills están en los lenguajes de: JavaScript, Python, Flutter y Java, con los frameworks de ReactJS, Node.js, Express, Django. También disfruto el trabajo en equipo y el aprendizaje continuo de nuevas tecnologías en el desarrollo de software y me considero una persona dispuesta para trabajos grupales y en solitario sin dejar atras que me encanta siguir .</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;