export const BREAKPOINTS = {
  tablet: '800px',
  desktop: '1000px',
  desktopWide: '1400px',
} as const;

export const LIGHT_THEME = {
  white: '#fff',
  black: '#000',
  text: '#222',
  textBackground: '#fff',
  primary: '#006EE5',
  primaryLight: '#7EAFDD',
  primaryDark: '#00458a',
  highlight: '#E133EA',
  link: '#006EE5',
  linkHover: '#00458a',
  danger: '#E21616',
  info: '#33EAE7',
  warning: '#EFE334',
  success: '#22B712',
  boxShadow:
    '0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
  navDropdownBoxShadow:
    '0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
  grey: '#4a4a4a',
  darkGrey: '#6b7c93',
  green: '#24b47e',
  teal: '#4F96CE',
  blue: '#6772e5',
  darkBlue: '#4F3EF5',
  transition: 'color 300ms ease-out, background-color 300ms ease-out',
} as const;

export const DARK_THEME = {
  white: '#fff',
  black: '#000',
  text: '#eee',
  textBackground: '#222',
  primary: '#006EE5',
  primaryLight: '#7EAFDD',
  primaryDark: '#00458a',
  highlight: '#E133EA',
  link: '#006EE5',
  linkHover: '#7EAFDD',
  danger: '#E21616',
  info: '#33EAE7',
  warning: '#EFE334',
  success: '#22B712',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
  navDropdownBoxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
  grey: '#f1f4f8b0',
  darkGrey: '#6b7c93',
  green: '#24b47e',
  teal: '#4F96CE',
  blue: '#6772e5',
  darkBlue: '#4F3EF5',
  transition: 'color 300ms ease-out, background-color 300ms ease-out',
} as const;

export const SPACING = {
  xs: 2,
  s: 4,
  m: 8,
  l: 16,
  xl: 32,
  spacer: 28,
} as const;

export const WIDTH = { max: '1200px', mobileMenuMax: '620px' } as const;
