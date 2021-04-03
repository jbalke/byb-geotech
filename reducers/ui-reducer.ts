import { Action } from 'actions/ui-actions';

export const initialState = {
  isSidebarOpen: false,
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
    default:
      return state;
  }
}
