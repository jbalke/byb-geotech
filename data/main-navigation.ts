import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';

const navLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Drilling', Icon: FaCreditCard, url: '/payment' },
      { label: 'Prices', Icon: FaCreditCard, url: '/connect' },
    ],
  },
  {
    title: 'Bores',
    links: [
      { label: 'information', Icon: FaBook, url: '/plugins' },
      { label: 'regulations', Icon: FaBook, url: '/libraries' },
      { label: 'search', Icon: FaBook, url: '/bore-search' },
      { label: 'FAQ', Icon: FaBook, url: '/faq' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'contact', Icon: FaBriefcase, url: '/contact' },
      { label: 'our story', Icon: FaBriefcase, url: '/our-story' },
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
