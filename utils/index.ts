export const isServer = () => typeof window === 'undefined';

export function debug(message: any): void {
  if (process.env.NODE_ENV !== 'production') {
    console.error(message);
  }
}
