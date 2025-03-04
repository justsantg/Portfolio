import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg shadow-gray-300 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">Mi Portafolio</h1>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 focus:outline-none hover:text-blue-600 transition-colors duration-200"
        >
          <svg
            className="w-8 h-8"
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

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
            onClick={toggleMenu}
          />
        )}

        <nav
          className={`lg:block fixed inset-0 right-0 top-0 bg-white w-64 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <ul className="flex flex-col items-center space-y-4 py-12">
            <li>
              <Link
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                to="/"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faHome} /> <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                to="/about"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faUser} /> <span>Sobre mí</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                to="/portfolio"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faBriefcase} /> <span>Proyectos</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                to="/contact"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faEnvelope} /> <span>Contacto</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
