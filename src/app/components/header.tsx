import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { languageData } from '../data/data';
import { t } from 'i18next';
import { useState } from 'react';

const Header = () => {
  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  const [showMenu, setShowMenu] = useState(false); 

  const handleMenuClick = () => {
    setShowMenu(!showMenu); 
  };

  return (
    <header className="p-2" style={{ background: '#C7A77D' }}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-xl font-bold ml-2">{t('appName')}</span>
        </Link>

        <button id="menuButton" className="md:hidden flex items-center px-4 py-2 focus:outline-none" onClick={handleMenuClick}>
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="4" x2="20" y2="4" stroke="#000" stroke-width="2" />
            <line x1="2" y1="10" x2="20" y2="10" stroke="#000" stroke-width="2" />
            <line x1="2" y1="16" x2="20" y2="16" stroke="#000" stroke-width="2" />
          </svg>
        </button>

        <ul className={`hidden md:flex ${showMenu ? 'flex' : 'hidden'}`}> {/* Conditionally render menu items */}
          <li>
            <NavLink to="/" className="text-black hover:text-white p-4">
              {t('homePage')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutMe" className="text-black hover:text-white p-4">
              {t('aboutMe')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="text-black hover:text-white p-4">
              {t('portfolio')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/habilidades" className="text-black hover:text-white p-4">
              {t('skills')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="text-black hover:text-white p-4">
              {t('contactMe')}
            </NavLink>
          </li>
        </ul>

        <select
          defaultValue={i18n.language}
          onChange={onChangeLang}
          className="text-gray-300 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          {languageData().map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;