export const isServer = () => typeof window === 'undefined';

export function debug(error: any): void {
  if (process.env.NODE_ENV !== 'production') {
    console.error(error.message);
  }
}
