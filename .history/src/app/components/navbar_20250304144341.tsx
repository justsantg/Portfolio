import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Mi Portafolio</h1>
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMenu}
          aria-expanded={isOpen} // Accessibility: indicate if the menu is open
          aria-controls="navbar-menu" // Accessibility: link button to the menu
        >
          {/* Icono de hamburguesa */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <nav 
          id="navbar-menu" 
          className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:static bg-white w-full md:w-auto md:bg-transparent`}
          role="navigation" // Accessibility: define the role of the navigation
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/" onClick={closeMenu}>Inicio</Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/about" onClick={closeMenu}>Sobre mí</Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/portfolio" onClick={closeMenu}>Proyectos</Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/contact" onClick={closeMenu}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Cerrar el menú al hacer clic fuera de él */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-10 bg-black opacity-50" 
          onClick={closeMenu} 
        ></div>
      )}
    </header>
  );
};

export default Navbar;