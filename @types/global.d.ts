export declare global {
  namespace NodeJS {
    interface Global {
      mongoose: { conn: any };
    }
  }
  interface Window {
    __theme: string;
    __onThemeChange: () => void;
    __setPreferredTheme: (theme: string) => void;
  }
}
