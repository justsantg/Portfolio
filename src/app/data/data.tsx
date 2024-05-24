import iconLogo from './../../assets/icons/logo.svg';
import {
  FaChartLine,
  FaCommentDots,
  FaCalendarAlt,
  FaSwatchbook,
} from 'react-icons/fa';
import { BsAmazon } from 'react-icons/bs';

type NavItemType = {
  id: number;
  title: string;
  icon: JSX.Element;
  to: string;
};

type NavbarType = {
  logo: {
    title: string;
    icon: string;
  };
  nav: NavItemType[];
};

type LanguageType = {
  label: string;
  code: string;
};

export const dataNavbar = (navItem: number): NavbarType => ({
  logo: {
    title: '',
    icon: iconLogo,
  },
  nav: [
    {
      id: 1,
      title: 'homePage',
      icon: (
        <BsAmazon
          className={navItem === 1 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/',
    },
    {
      id: 2,
      title: 'aboutMe',
      icon: (
        <FaChartLine
          className={navItem === 2 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/aboutMe',
    },
    {
      id: 3,
      title: 'portfolio',
      icon: (
        <FaCommentDots
          className={navItem === 3 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/portfolio',
    },
    {
      id: 4,
      title: 'skills',
      icon: (
        <FaCalendarAlt
          className={navItem === 4 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/skills',
    },
    {
      id: 5,
      title: 'contactMe',
      icon: (
        <FaSwatchbook
          className={navItem === 5 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/contactMe',
    },
    
  ],
});
export const languageData = (): LanguageType[] => [
  { label: 'Español', code: 'es' },
  { label: 'Ingles', code: 'en' },
];