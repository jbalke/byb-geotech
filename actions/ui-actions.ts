type MenuCoords = { top: number; left: number };

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

export function openSubmenu(page: string, coordinates: MenuCoords) {
  return {
    type: 'OPEN_SUBMENU',
    payload: { page, coordinates },
  } as const;
}

export function closeSubmenu() {
  return {
    type: 'CLOSE_SUBMENU',
  } as const;
}

export type Action = ReturnType<
  | typeof openSidebar
  | typeof closeSidebar
  | typeof toggleSidebar
  | typeof openSubmenu
  | typeof closeSubmenu
>;
