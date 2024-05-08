import iconLogo from './../../assets/icons/logo.svg';
import {
  FaChartLine,
  FaCommentDots,
  FaCalendarAlt,
  FaSwatchbook,
} from 'react-icons/fa';
import { FaChalkboardUser } from 'react-icons/fa6';
import { MdWidgets } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
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
    title: 'xenon',
    icon: iconLogo,
  },
  nav: [
    {
      id: 1,
      title: 'Home',
      icon: (
        <BsAmazon
          className={navItem === 1 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/',
    },
    {
      id: 2,
      title: 'Analytics',
      icon: (
        <FaChartLine
          className={navItem === 2 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/analytics',
    },
    {
      id: 3,
      title: 'Chat',
      icon: (
        <FaCommentDots
          className={navItem === 3 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/chat',
    },
    {
      id: 4,
      title: 'Calendar',
      icon: (
        <FaCalendarAlt
          className={navItem === 4 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/calendar',
    },
    {
      id: 5,
      title: 'Project',
      icon: (
        <FaSwatchbook
          className={navItem === 5 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/project',
    },
    {
      id: 6,
      title: 'Widgets',
      icon: (
        <MdWidgets
          className={navItem === 6 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/widgets',
    },
    {
      id: 7,
      title: 'Meetings',
      icon: (
        <FaChalkboardUser
          className={navItem === 7 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/meetings',
    },
    {
      id: 8,
      title: 'Logout',
      icon: (
        <BiLogOut
          className={navItem === 8 ? 'text-app-primary' : 'text-app-shade-5'}
        />
      ),
      to: '/logout',
    },
  ],
});
export const languageData = (): LanguageType[] => [
  { label: 'Español', code: 'es' },
  { label: 'Ingles', code: 'en' },
];