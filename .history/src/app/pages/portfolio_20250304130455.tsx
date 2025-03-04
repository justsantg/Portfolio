import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Proyecto 1',
    image: 'https://storage.googleapis.com/a1aa/image/IGnCVYfVrSogK9MrUVyNJvczSAmhSFYQpHp9UiqY4Gs.jpg', // Reemplaza con la URL de la imagen del proyecto
    githubLink: 'https://github.com/tu-usuario/proyecto1', // Reemplaza con el enlace a tu repositorio
  },
  {
    id: 2,
    title: 'Proyecto 2',
    image: 'https://storage.googleapis.com/a1aa/image/-D-i_-UcFt4WmcC5dKZ0RUkV8mwbTZecZAmnFECB22c.jpg', // Reemplaza con la URL de la imagen del proyecto
    githubLink: 'https://github.com/tu-usuario/proyecto2', // Reemplaza con el enlace a tu repositorio
  },
  {
    id: 3,
    title: 'Proyecto 3',
    image: 'https://storage.googleapis.com/a1aa/image/ZjUeKWqHbpiiL6iy9JNOfdo8mz0Fa1G2wO_XZW658D0.jpg', // Reemplaza con la URL de la imagen del proyecto
    githubLink: 'https://github.com/tu-usuario/proyecto3', // Reemplaza con el enlace a tu repositorio
  },
  // Agrega más proyectos según sea necesario
];

const Portfolio: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <img alt={`Captura de pantalla del ${project.title}`} className="w-full h-40 object-cover rounded-lg" src={project.image} />
                <h3 className="text-xl font-bold text-gray-900 mt-4 text-center">{project.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;