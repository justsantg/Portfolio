import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">Nombre Apellido</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/aboutMe" className="text-lg font-medium text-gray-700 hover:text-gray-900">Sobre Mí</Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-lg font-medium text-gray-700 hover:text-gray-900">Habilidades</Link>
          </li>
          <li>
            <Link to="/skills" className="text-lg font-medium text-gray-700 hover:text-gray-900">Habilidades</Link>
          </li>
          <li>
            <Link to="/contacto" className="text-lg font-medium text-gray-700 hover:text-gray-900">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
