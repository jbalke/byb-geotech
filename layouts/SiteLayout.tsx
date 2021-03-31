import Head from 'next/head';
import { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';
import MainNavBar from 'components/MainNavBar';
import { Wrapper } from 'components/styled';
import SkipToMain from 'components/SkipToMain';
import MobileMainNav from 'components/MobileMainNav';
import { Theme } from '../styles/theme';

const StyledWrapper = styled(Wrapper)`
  color: ${Theme.color.text};
  background-color: ${Theme.color.textBackground};
`;
const StyledMain = styled.main`
  flex: 1;
`;

type PageProps = { children: ReactNode };

const SiteLayout = ({ children }: PageProps) => {
  return (
    <StyledWrapper main>
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
    </StyledWrapper>
  );
};

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
export default SiteLayout;
