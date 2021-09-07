import { Action } from 'actions/ui-actions';
import { useRef, RefObject } from 'react';

export type ColorTheme = 'light' | 'dark';

export const initialState = {
  isSidebarOpen: false,
  theme: 'light' as ColorTheme,
  hamburgerRef: null as RefObject<HTMLButtonElement> | null,
};

export type State = typeof initialState;
export function UIReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return { ...state, isSidebarOpen: true };
    case 'CLOSE_SIDEBAR':
      return { ...state, isSidebarOpen: false };
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case 'SET_COLOR_THEME':
      return { ...state, theme: action.payload as ColorTheme };
    case 'SET_HAMBURGER_REF':
      return { ...state, hamburgerRef: action.payload };
    default:
      return state;
  }
}
