export declare global {
  interface Window {
    __theme: string;
    __onThemeChange: () => void;
    __setPreferredTheme: (theme: string) => void;
  }
}
