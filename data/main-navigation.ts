import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

const navLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Drilling', icon: FaCreditCard, url: '/payment' },
      { label: 'Prices', icon: FaCreditCard, url: '/connect' },
    ],
  },
  {
    title: 'Bores',
    links: [
      { label: 'information', icon: FaBook, url: '/plugins' },
      { label: 'regulations', icon: FaBook, url: '/libraries' },
      { label: 'search', icon: FaBook, url: '/bore-search' },
      { label: 'FAQ', icon: FaBook, url: '/faq' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'contact', icon: FaBriefcase, url: '/contact' },
      { label: 'our story', icon: FaBriefcase, url: '/our-story' },
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
