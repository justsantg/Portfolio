import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-8">
        <h2 className="text-3xl font-bold text-gray-900">Contacto</h2>
        <form className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border border-gray-300 p-2 rounded-lg" placeholder="Nombre" type="text"/>
            <input className="border border-gray-300 p-2 rounded-lg" placeholder="Email" type="email"/>
          </div>
          <textarea className="border border-gray-300 p-2 rounded-lg w-full mt-4" placeholder="Mensaje"></textarea>
          <button className="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300" type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;