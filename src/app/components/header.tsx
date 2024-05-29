import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { languageData } from '../data/data';
import { useState } from 'react';

const Header = () => {
  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  // Removed showMenu state and handleMenuClick function as they're not needed

  return (
    <header className="p-2" style={{ background: '#C7A77D' }}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center logo2">
          <span className="text-xl font-bold mr-2 logo-text">Bienvenido</span>
        </Link>

        <ul className="md:flex md:items-center">
          <li>
            <NavLink to="/" className="text-black hover:text-white p-4 block md:inline-block">
              {t('homePage')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutMe" className="text-black hover:text-white p-4 block md:inline-block">
              {t('aboutMe')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="text-black hover:text-white p-4 block md:inline-block">
              {t('portfolio')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/habilidades" className="text-black hover:text-white p-4 block md:inline-block">
              {t('skills')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="text-black hover:text-white p-4 block md:inline-block">
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





