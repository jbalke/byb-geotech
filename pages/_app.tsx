import { UIProvider } from 'context/ui-context';
import 'font/font.css';
import Layout from 'layouts/Main';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BREAKPOINTS } from 'styles/style-constants';
import { DarkTheme, Theme } from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

    ${Theme.css.string}
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      ${DarkTheme.css.string}
    }
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

  a {
    text-decoration: none;
  }
`;

function App({ Component, pageProps, router }: AppProps) {
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
            <Component {...pageProps} key={router.route} />
          </Layout>
        </UIProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
