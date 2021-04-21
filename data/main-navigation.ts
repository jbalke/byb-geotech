import { IconType } from 'react-icons';
import { FaBook, FaBriefcase, FaCreditCard, FaSearch } from 'react-icons/fa';

type PageLink = {
  title: string;
  Icon: IconType;
  href: string;
};
type MenuSection = { title?: string; pages: PageLink[] };
type MenuLink = {
  title: string;
  Icon: IconType;
  href: string;
  sections?: never;
};
type MenuDropdown = {
  title: string;
  Icon?: never;
  href?: never;
  sections: MenuSection[];
};

type MenuItem = MenuLink | MenuDropdown;

export const navLinks: MenuItem[] = [
  {
    title: 'Services',
    sections: [
      {
        title: 'Home Owners',
        pages: [
          {
            title: 'Prior to drilling a bore',
            Icon: FaCreditCard,
            href: '/home-owners/before-drilling',
          },
          {
            title: 'What to expect on drillig day',
            Icon: FaCreditCard,
            href: '/home-owners/drilling-day',
          },
          {
            title: 'Bore maintenance',
            Icon: FaCreditCard,
            href: '/home-owners/bore-maintenance',
          },
          {
            title: 'Pump troubleshooting',
            Icon: FaCreditCard,
            href: '/home-owners/pump-troubleshooting',
          },
          {
            title: 'Flow rate testing for council / DA',
            Icon: FaCreditCard,
            href: '/home-owners/flow-rate-testing',
          },
        ],
      },
      {
        title: 'Geotechnical',
        pages: [
          {
            title: 'Projects',
            Icon: FaCreditCard,
            href: '/geotech/projects',
          },
        ],
      },
    ],
  },
  {
    title: 'Bore Search',
    Icon: FaSearch,
    href: '/bore-search',
  },
  {
    title: 'Help & Advice',
    sections: [
      {
        pages: [
          {
            title: 'Groundwater Protection',
            Icon: FaBook,
            href: '/help/groundwater-protection',
          },
          {
            title: 'Flooding / Cyclones',
            Icon: FaBook,
            href: '/help/flooding',
          },
          { title: 'PFAS / PFOA', Icon: FaBook, href: '/help/pfas-pfoa' },
          { title: 'FAQ', Icon: FaBook, href: '/help/faq' },
        ],
      },
    ],
  },
  {
    title: 'About',
    sections: [
      {
        pages: [
          { title: 'Contact', Icon: FaBriefcase, href: '/contact' },
          { title: 'Our Story', Icon: FaBriefcase, href: '/our-story' },
        ],
      },
    ],
  },
];
