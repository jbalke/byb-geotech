import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

const navLinks = [
  {
    title: 'products',
    links: [
      { label: 'payment', icon: FaCreditCard, url: '/payment' },
      { label: 'terminal', icon: FaCreditCard, url: '/terminal' },
      { label: 'connect', icon: FaCreditCard, url: '/connect' },
    ],
  },
  {
    title: 'developers',
    links: [
      { label: 'plugins', icon: FaBook, url: '/plugins' },
      { label: 'libraries', icon: FaBook, url: '/libraries' },
      { label: 'help', icon: FaBook, url: '/help' },
      { label: 'billing', icon: FaBook, url: '/billing' },
    ],
  },
  {
    title: 'company',
    links: [
      { label: 'about', icon: FaBriefcase, url: '/about' },
      { label: 'customers', icon: FaBriefcase, url: '/customers' },
    ],
  },
];

export const extraLinks = [
  {
    label: 'Marketing Link',
    to: '#',
  },
  {
    label: 'Marketing Link',
    to: '#',
  },
  ,
  {
    label: 'Marketing Link',
    to: '#',
  },
  null,
  {
    label: 'Marketing Link',
    to: '#',
  },
  {
    label: 'Marketing Link',
    to: '#',
  },
];

export type SubmenuLinks = typeof navLinks[0];
export type SubLinks = SubmenuLinks['links'];
export type ExtraLink = typeof extraLinks[0];
export default navLinks;
