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
  padding: ${Theme.spacing.l};
`;

const StyledFooter = styled.footer`
  min-height: 200px;
`;

type PageProps = { children: ReactNode };

const SiteLayout = ({ children }: PageProps) => {
  return (
    <Wrapper main>
      <Head>
        <title>Backyard Bores</title>
      </Head>
      <SkipToMain href='#main-content' />
      <MainNavBar />
      <StyledMain
        id='main-content'
        style={{
          color: Theme.color.text,
          backgroundColor: Theme.color.textBackground,
          transition: Theme.color.transition,
        }}
      >
        {children}
      </StyledMain>
      <StyledFooter
        style={{
          backgroundColor: Theme.color.black,
          color: Theme.color.white,
          transition: Theme.color.transition,
        }}
      >
        footer
      </StyledFooter>
      <MobileMainNav />
    </Wrapper>
  );
};

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
export default SiteLayout;
