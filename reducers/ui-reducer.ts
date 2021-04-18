import { Action } from 'actions/ui-actions';

export type ColorTheme = 'light' | 'dark';

export const initialState = {
  isSidebarOpen: false,
  theme: 'light' as ColorTheme,
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
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
