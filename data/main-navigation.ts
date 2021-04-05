import { FaBook, FaBriefcase, FaCreditCard } from 'react-icons/fa';

export const navLinks = [
  {
    title: 'Services',
    url: '/services',
    links: [
      {
        label: 'Geotech Drilling',
        Icon: FaCreditCard,
        url: '/services/geotech-drilling',
      },
      {
        label: 'Groundwater Protection',
        Icon: FaCreditCard,
        url: '/services/groundwater-protection',
      },
      { label: 'Bore Search', Icon: FaCreditCard, url: '/bore-search' },
      {
        label: 'Geotech Drilling',
        Icon: FaCreditCard,
        url: '/services/geotech-drilling',
      },
      {
        label: 'Groundwater Protection',
        Icon: FaCreditCard,
        url: '/services/groundwater-protection',
      },
      { label: 'Bore Search', Icon: FaCreditCard, url: '/bore-search' },
    ],
  },
  {
    title: 'Help & Advice',
    url: '/help',
    links: [
      { label: 'PFAS Advice', Icon: FaBook, url: '/help' },
      { label: 'Flooding Advice', Icon: FaBook, url: '/libraries' },
      { label: 'FAQ', Icon: FaBook, url: '/faq' },
    ],
  },
  {
    title: 'Bore Search',
    url: '/bore-search',
  },
  {
    title: 'FAQ',
    url: '/faq',
  },
  {
    title: 'About',
    url: '/our-story',
    links: [
      { label: 'Contact', Icon: FaBriefcase, url: '/contact' },
      { label: 'Our Story', Icon: FaBriefcase, url: '/our-story' },
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
