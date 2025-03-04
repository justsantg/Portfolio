import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Mi Portafolio</h1>
        
        {/* Botón de hamburguesa */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menú de navegación */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
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
