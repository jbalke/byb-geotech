import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

const navLinks = [
  {
    title: 'products',
    links: [
      { label: 'payment', icon: FaCreditCard, url: '/products' },
      { label: 'terminal', icon: FaCreditCard, url: '/products' },
      { label: 'connect', icon: FaCreditCard, url: '/products' },
    ],
  },
  {
    title: 'developers',
    links: [
      { label: 'plugins', icon: FaBook, url: '/products' },
      { label: 'libraries', icon: FaBook, url: '/products' },
      { label: 'help', icon: FaBook, url: '/products' },
      { label: 'billing', icon: FaBook, url: '/products' },
    ],
  },
  {
    title: 'company',
    links: [
      { label: 'about', icon: FaBriefcase, url: '/products' },
      { label: 'customers', icon: FaBriefcase, url: '/products' },
    ],
  },
];

export type SubmenuLinks = typeof navLinks[0];

export default navLinks;
