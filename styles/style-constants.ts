export const BREAKPOINTS = {
  tablet: '800px',
  desktop: '1200px',
  desktopWide: '1400px',
} as const;

export const LIGHT_THEME = {
  white: '#fff',
  black: '#000',
  text: '#222',
  textBackground: '#fff',
  primary: '#006EE5',
  primaryLight: '#7EAFDD',
  primaryDark: '#003366',
  highlight: '#E133EA',
  link: '#003F7F',
  danger: '#E21616',
  info: '#33EAE7',
  warning: '#EFE334',
  success: '#22B712',
} as const;

export const DARK_THEME = {
  white: '#fff',
  black: '#000',
  text: '#fff',
  textBackground: '#222',
  primary: '#006EE5',
  primaryLight: '#7EAFDD',
  primaryDark: '#003366',
  highlight: '#E133EA',
  link: '#003F7F',
  danger: '#E21616',
  info: '#33EAE7',
  warning: '#EFE334',
  success: '#22B712',
} as const;

export const SPACING = {
  xs: 2,
  s: 4,
  m: 8,
  l: 16,
  xl: 32,
} as const;

export const WIDTH = { max: '1200px' } as const;
