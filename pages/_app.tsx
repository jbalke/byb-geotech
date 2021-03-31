import { UIProvider } from 'context/ui-context';
import 'font/font.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BREAKPOINTS } from 'styles/style-constants';
import { DarkTheme, Theme } from 'styles/theme';
import { Page } from '../@types/page';
import 'styles/styles.css';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body.light {
    ${Theme.css.string}
  }
  
  body.dark {
    ${DarkTheme.css.string}
  }
  
  @media (prefers-color-scheme: dark) {
    :root {}
      ${DarkTheme.css.string}
    }
  
  *, *::before, *::after {
    box-sizing: inherit
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: ${Theme.color.black};
    background-image: url('/water.webp');
    background-repeat: repeat;
    background-attachment: fixed;
    background-size: cover;
    color: ${Theme.color.text};
    font-family: 'Public Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Rubik';
  }

  ul {
    list-style-type: none;
  }
`;

type Props = AppProps & { Component: Page };

function App({ Component, pageProps, router }: Props) {
  // adjust accordingly if you disabled a layout rendering option
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css'
        />
        <title>Backyard Bores</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider
        theme={{
          bp: BREAKPOINTS,
        }}
      >
        <UIProvider>
          <Layout>
            {getLayout(<Component {...pageProps} key={router.route} />)}
          </Layout>
        </UIProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

// https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
// https://stackoverflow.com/questions/62115518/persistent-layout-in-next-js-with-typescript-and-hoc
