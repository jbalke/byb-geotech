import { IconType } from 'react-icons';
import {
  FaCommentDollar,
  FaFaucet,
  FaInfoCircle,
  FaPeopleArrows,
  FaQuestionCircle,
  FaSearch,
  FaWater,
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
            title: 'Pump Sales & Repairs',
            Icon: FaFaucet,
            href: '/pumps/sales-and-repairs',
          },
        ],
      },
      {
        title: 'Geotechnical',
        pages: [
          {
            title: 'Details & Projects',
            Icon: FaPeopleArrows,
            href: '/geotech',
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
          { title: 'Drilling FAQ', Icon: FaQuestionCircle, href: '/help/faq' },
          {
            title: 'New Bore & Pump Tips',
            Icon: FaQuestionCircle,
            href: '/help/new-install-tips',
          },
          {
            title: 'Pump Troubleshooting',
            Icon: FaQuestionCircle,
            href: '/pumps/troubleshooting',
          },
          {
            title: 'Bore Cleanout',
            Icon: FaQuestionCircle,
            href: '/help/bore-cleanout',
          },
          {
            title: 'Water Testing Services',
            Icon: FaQuestionCircle,
            href: '/help/water-testing',
          },
          {
            title: 'Groundwater Protection',
            Icon: FaQuestionCircle,
            href: '/help/groundwater-protection',
          },
          {
            title: 'Flooding/Cyclones',
            Icon: FaQuestionCircle,
            href: '/help/flooding',
          },
          {
            title: 'PFAS/PFOA',
            Icon: FaQuestionCircle,
            href: '/help/pfas-pfoa',
          },
        ],
      },
    ],
  },
  {
    title: 'About',
    sections: [
      {
        pages: [
          { title: 'Our Story', Icon: FaInfoCircle, href: '/about/our-story' },
          { title: 'Contact Us', Icon: FaInfoCircle, href: '/contact' },
          { title: 'Careers', Icon: FaInfoCircle, href: '/about/careers' },
        ],
      },
    ],
  },
];
