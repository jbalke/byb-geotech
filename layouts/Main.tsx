import Head from 'next/head';
import { ReactNode } from 'react';

type PageProps = { children: ReactNode; title: string };

const Main = ({ children, title = 'Page Title' }: PageProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>Nav</header>

      <main>{children}</main>

      <footer>footer</footer>
    </div>
  );
};

export default Main;
