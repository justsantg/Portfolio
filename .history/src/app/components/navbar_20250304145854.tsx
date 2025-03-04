import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className="bg-white shadow-lg shadow-gray-300 w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">Mi Portafolio</h1>

        <nav className="">
          <ul className="flex space-x-8">
            <li>
              <Link
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                to="/"
              >
                <FontAwesomeIcon icon={faHome} /> <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                to="/about"
              >
                <FontAwesomeIcon icon={faUser} /> <span>Sobre mí</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                to="/portfolio"
              >
                <FontAwesomeIcon icon={faBriefcase} /> <span>Proyectos</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                to="/contact"
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
