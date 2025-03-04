import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8">
        <h2 className="text-3xl font-bold text-gray-900">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img alt="Captura de pantalla del Proyecto 1" className="w-full h-40 object-cover rounded-lg" height="400" src="https://storage.googleapis.com/a1aa/image/IGnCVYfVrSogK9MrUVyNJvczSAmhSFYQpHp9UiqY4Gs.jpg" width="600"/>
            <h3 className="text-xl font-bold text-gray-900 mt-4">Proyecto 1</h3>
            <p className="mt-2 text-gray-700">Descripción del proyecto 1...</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img alt="Captura de pantalla del Proyecto 2" className="w-full h-40 object-cover rounded-lg" height="400" src="https://storage.googleapis.com/a1aa/image/-D-i_-UcFt4WmcC5dKZ0RUkV8mwbTZecZAmnFECB22c.jpg" width="600"/>
            <h3 className="text-xl font-bold text-gray-900 mt-4">Proyecto 2</h3>
            <p className="mt-2 text-gray-700">Descripción del proyecto 2...</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img alt="Captura de pantalla del Proyecto 3" className="w-full h-40 object-cover rounded-lg" height="400" src="https://storage.googleapis.com/a1aa/image/ZjUeKWqHbpiiL6iy9JNOfdo8mz0Fa1G2wO_XZW658D0.jpg" width="600"/>
            <h3 className="text-xl font-bold text-gray-900 mt-4">Proyecto 3</h3>
            <p className="mt-2 text-gray-700">Descripción del proyecto 3...</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;