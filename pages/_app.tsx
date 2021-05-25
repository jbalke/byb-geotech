import MobileMainNav from 'components/MobileMainNav';
import { UIProvider } from 'context/ui-context';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BREAKPOINTS } from 'styles/style-constants';
import 'styles/styles.css';
import { DarkTheme, Theme } from 'styles/theme';
import { Page } from '../@types/page';
import '/styles/font.css';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
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
    font-family: sans-serif;
    line-height: 150%;
  }

   @supports (font-variation-settings: normal) {
    body {
      font-family: 'Public Sans', sans-serif;
    }
  }

  h1, h2, h3 {
    color: ${Theme.color.primary};
    font-family: 'Poppins';
    line-height: 1;
    margin-bottom: .5em;
  }

  @supports (font-variation-settings: normal) {
    h1, h2, h3  {
      font-family: 'Rubik';
    }
  }

  h1, h2, h3:first-child {
    margin-top: 0;
  }

  strong {
    font-weight: 600;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li::marker {
    color: ${Theme.color.primary};
    font-weight: 600;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      transition-delay: 0ms !important;
      scroll-behavior: auto !important;
    }
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
          rel='preload'
          href='/fonts/Rubik-VariableFont_wght.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/PublicSans-VariableFont_wght.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/PublicSans-Italic-VariableFont_wght.ttf'
          as='font'
          crossOrigin=''
        />
        <link rel='preload' as='image' href='/images/banner-infinity.webp' />
        <link
          rel='stylesheet'
          href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='57x57'
          href='apple-touch-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='114x114'
          href='apple-touch-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='72x72'
          href='apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='144x144'
          href='apple-touch-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='60x60'
          href='apple-touch-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='120x120'
          href='apple-touch-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='76x76'
          href='apple-touch-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='152x152'
          href='apple-touch-icon-152x152.png'
        />
        <link
          rel='icon'
          type='image/png'
          href='favicon-196x196.png'
          sizes='196x196'
        />
        <link
          rel='icon'
          type='image/png'
          href='favicon-96x96.png'
          sizes='96x96'
        />
        <link
          rel='icon'
          type='image/png'
          href='favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='favicon-16x16.png'
          sizes='16x16'
        />
        <link
          rel='icon'
          type='image/png'
          href='favicon-128.png'
          sizes='128x128'
        />
        <meta name='application-name' content='Backyard Bores' />
        <meta name='msapplication-TileColor' content='#FFFFFF' />
        <meta name='msapplication-TileImage' content='mstile-144x144.png' />
        <meta name='msapplication-square70x70logo' content='mstile-70x70.png' />
        <meta
          name='msapplication-square150x150logo'
          content='mstile-150x150.png'
        />
        <meta
          name='msapplication-wide310x150logo'
          content='mstile-310x150.png'
        />
        <meta
          name='msapplication-square310x310logo'
          content='mstile-310x310.png'
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
          <MobileMainNav />
        </UIProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

// https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
// https://stackoverflow.com/questions/62115518/persistent-layout-in-next-js-with-typescript-and-hoc
