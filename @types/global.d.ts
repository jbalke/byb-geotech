export declare global {
  namespace NodeJS {
    interface Global {
      mongo: { conn: any; promise: any };
    }
  }
  interface Window {
    __theme: string;
    __onThemeChange: () => void;
    __setPreferredTheme: (theme: string) => void;
  }
}
