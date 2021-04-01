import MainNavBar from 'components/MainNavBar';
import MobileMainNav from 'components/MobileMainNav';
import SkipToMain from 'components/SkipToMain';
import { Wrapper } from 'components/styled';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/theme';

const StyledMain = styled.main`
  flex: 1;
`;

type PageProps = { children: ReactNode };

const SiteLayout = ({ children }: PageProps) => {
  return (
    <Wrapper
      main
      style={{
        color: Theme.color.text,
        backgroundColor: Theme.color.textBackground,
        transition: 'color 300ms ease-out, background 300ms ease-out',
      }}
    >
      <Head>
        <title>Backyard Bores</title>
      </Head>
      <SkipToMain href='#main-content' />
      <MainNavBar />
      <StyledMain id='main-content'>{children}</StyledMain>
      <footer
        style={{
          backgroundColor: 'black',
          minHeight: '200px',
        }}
      >
        footer
      </footer>
      <MobileMainNav />
    </Wrapper>
  );
};

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
export default SiteLayout;
