import { IconType } from 'react-icons';
import {
  FaCommentDollar,
  FaInfoCircle,
  FaPeopleArrows,
  FaQuestionCircle,
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
    title: 'Help & Advice',
    sections: [
      {
        pages: [
          { title: 'Drilling FAQ', Icon: FaQuestionCircle, href: '/help/faq' },
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
          { title: 'ForSale', Icon: FaInfoCircle, href: '/about/for-sale' },
        ],
      },
    ],
  },
];
