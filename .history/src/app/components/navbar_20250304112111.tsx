import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Mi Portafolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/">Inicio</Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/about">Sobre mí</Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-gray-900" to="/projects">Proyectos</Link>
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
