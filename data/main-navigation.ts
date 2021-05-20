import { IconType } from 'react-icons';
import {
  FaInfoCircle,
  FaWater,
  FaSearch,
  FaQuestionCircle,
  FaCommentDollar,
} from 'react-icons/fa';

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
            title: 'Water Bore Drilling',
            Icon: FaWater,
            href: '/bores',
          },
          {
            title: 'Pump troubleshooting',
            Icon: FaWater,
            href: '/home-owners/pump-troubleshooting',
          },
          {
            title: 'Flow rate testing for council / DA',
            Icon: FaWater,
            href: '/home-owners/flow-rate-testing',
          },
        ],
      },
      {
        title: 'Geotechnical',
        pages: [
          {
            title: 'Details & Projects',
            Icon: FaWater,
            href: '/geotech/projects',
          },
        ],
      },
      {
        pages: [
          {
            title: 'Request a Quote',
            Icon: FaCommentDollar,
            href: '/request-a-quote',
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
            Icon: FaQuestionCircle,
            href: '/help/groundwater-protection',
          },
          {
            title: 'Flooding / Cyclones',
            Icon: FaQuestionCircle,
            href: '/help/flooding',
          },
          {
            title: 'PFAS / PFOA',
            Icon: FaQuestionCircle,
            href: '/help/pfas-pfoa',
          },
          { title: 'FAQ', Icon: FaQuestionCircle, href: '/faq' },
        ],
      },
    ],
  },
  {
    title: 'About',
    sections: [
      {
        pages: [
          { title: 'Contact Us', Icon: FaInfoCircle, href: '/contact' },
          { title: 'Our Story', Icon: FaInfoCircle, href: '/about/our-story' },
        ],
      },
    ],
  },
];
