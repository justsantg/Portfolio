import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Mi Portafolio</h1>
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
        >
          {/* Icono de hamburguesa */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:static bg-white w-full md:w-auto md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/">Inicio</Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/about">Sobre mí</Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/portfolio">Proyectos</Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;