import { ColorTheme } from 'reducers/ui-reducer';

export function openSidebar() {
  return {
    type: 'OPEN_SIDEBAR',
  } as const;
}

export function closeSidebar() {
  return {
    type: 'CLOSE_SIDEBAR',
  } as const;
}

export function toggleSidebar() {
  return {
    type: 'TOGGLE_SIDEBAR',
  } as const;
}

export function setActiveIndex(index: number) {
  return {
    type: 'SET_ACTIVE_INDEX',
    payload: index,
  } as const;
}

export function clearActiveIndex() {
  return {
    type: 'CLEAR_ACTIVE_INDEX',
  } as const;
}

export function setColorTheme(colorTheme: ColorTheme) {
  return {
    type: 'SET_COLOR_THEME',
    payload: colorTheme,
  } as const;
}

export type Action = ReturnType<
  | typeof openSidebar
  | typeof closeSidebar
  | typeof toggleSidebar
  | typeof setActiveIndex
  | typeof clearActiveIndex
  | typeof setColorTheme
>;
