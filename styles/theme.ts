import { createTheme } from 'theme-in-css';
import {
  DARK_THEME,
  LIGHT_THEME,
  WIDTH,
  SPACING,
  BREAKPOINTS,
} from './style-constants';

export const Theme = createTheme({
  color: LIGHT_THEME,
  width: WIDTH,
  spacing: SPACING,
  bp: BREAKPOINTS,
});
export const DarkTheme = createTheme({
  color: DARK_THEME,
  width: WIDTH,
  spacing: SPACING,
  bp: BREAKPOINTS,
});
