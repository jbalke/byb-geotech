import MainNavBar from 'components/MainNavBar';
import SkipToMain from 'components/SkipToMain';
import { Wrapper } from 'components/styled';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/theme';

const Hero = styled.section`
  background-image: url('/banner-infinity.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 50vh;
  margin-top: -72.19px;
  min-height: 375px;
  position: relative;
  width: 100%;

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3)
    );
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const StyledMain = styled.main`
  background-color: ${Theme.color.textBackground};
  color: ${Theme.color.text};
  flex: 1;
  padding: ${Theme.spacing.l};
  transition: ${Theme.color.transition};

  /* border-top-left-radius: 15px;
  border-top-right-radius: 15px; */
`;

const StyledFooter = styled.footer`
  color: ${Theme.color.darkGrey};
  background-color: ${Theme.color.black};
  transition: ${Theme.color.transition};
  padding: 5px 2px 2px 2px;
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
      <Hero />
      <StyledMain id='main-content'>{children}</StyledMain>
      <StyledFooter style={{}}>
        Copyright &copy; 2021 Backyard Bores
      </StyledFooter>
    </Wrapper>
  );
};

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
export default SiteLayout;
