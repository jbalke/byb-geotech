import { UIProvider } from 'context/ui-context';
import 'font/font.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BREAKPOINTS } from 'styles/style-constants';
import { DarkTheme, Theme } from 'styles/theme';
import { Page } from '../@types/page';
import MobileMainNav from 'components/MobileMainNav';
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
  
  *, *::before, *::after {
    box-sizing: inherit
  }
  
  body {
    margin: 0;
    padding: 0;
    background: #0052D4;  /* fallback for old browsers */
    background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* background-image: url('/water.webp'); */
    /* background-repeat: repeat;
    background-attachment: fixed;
    background-size: cover; */
    font-family: 'Public Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Rubik';
  }

  h1, h2, h3:first-child {
    margin-top: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
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
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
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
          <MobileMainNav />
        </UIProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

// https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
// https://stackoverflow.com/questions/62115518/persistent-layout-in-next-js-with-typescript-and-hoc
