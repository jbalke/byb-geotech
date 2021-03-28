import { Action } from 'actions/ui-actions';
import navLinks, { SubmenuLinks } from 'data/main-navigation';

export const initialState = {
  isSidebarOpen: false,
  isSubmenuOpen: false,
  submenuCoordinates: { top: 0, left: 0 },
  submenuLinks: { title: '', links: [] } as SubmenuLinks,
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
    case 'OPEN_SUBMENU':
      const { page, coordinates } = action.payload;
      const submenuLinks = navLinks.find(
        (submenu) => submenu.title === page
      ) ?? { title: 'Undefined', links: [] };

      return {
        ...state,
        isSubmenuOpen: true,
        submenuCoordinates: coordinates,
        submenuLinks: submenuLinks,
      };
    case 'CLOSE_SUBMENU':
      return { ...state, isSubmenuOpen: false };
    default:
      return state;
  }
}
