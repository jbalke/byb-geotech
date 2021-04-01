import { createTheme } from 'theme-in-css';
import { DARK_THEME, LIGHT_THEME, WIDTH, SPACING } from './style-constants';

export const Theme = createTheme({
  color: LIGHT_THEME,
  width: WIDTH,
  spacing: SPACING,
});
export const DarkTheme = createTheme({
  color: DARK_THEME,
  width: WIDTH,
  spacing: SPACING,
});
