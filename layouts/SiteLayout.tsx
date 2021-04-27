import MainNavBar from 'components/MainNavBar';
import SkipToMain from 'components/SkipToMain';
import { Wrapper } from 'components/styled';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

const Hero = styled.section`
  align-items: center;
  background-image: url('/banner-infinity.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 70%;
  color: ${Theme.color.white};
  display: flex;
  height: 30vh;
  justify-content: center;
  line-height: 1;
  margin-top: -75px;
  min-height: 200px;
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

  & > * {
    z-index: 1;
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    text-align: center;
    transition: font-size 300ms;
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    & {
      height: 40vh;
      min-height: 400px;
      background-position: 50% 50%;
    }

    h1 {
      font-size: 3rem;
    }
  }
`;

const HeroPhoneText = styled.p`
  font-size: 2rem;
  font-weight: 900;
  margin: 1rem 0 0 0;
  transition: font-size 300ms;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    margin: 2rem 0 0 0;
    font-size: 3rem;
  }
`;

const HeroSubText = styled.p`
  display: none;
  font-family: sans-serif;
  font-style: italic;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  margin: 0.5rem 0 0 0;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  width: 70%;

  @supports (font-variation-settings: normal) {
    font-family: 'Public Sans Italic';
    font-weight: 600;
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    display: block;
  }
`;

const HeroContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin: 0;
  }
`;

const StyledMain = styled.main`
  background-color: ${Theme.color.textBackground};
  color: ${Theme.color.text};
  flex: 1;
  padding: ${Theme.spacing.l};
  transition: ${Theme.color.transition};
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
        <title>Backyard Bores</title>
      </Head>
      <SkipToMain href='#main-content' />
      <MainNavBar />
      <Hero>
        <HeroContentWrapper>
          <h1>Backyard Bores & Geotech Drilling</h1>
          <HeroSubText>
            Your water bore and geotech drilling specialists since 2002.
            Covering Mackay from Bowen to Rockhampton and west to Clermont.
          </HeroSubText>
          <HeroPhoneText>1800 193 194</HeroPhoneText>
        </HeroContentWrapper>
      </Hero>
      <StyledMain id='main-content'>{children}</StyledMain>
      <StyledFooter style={{}}>
        Copyright &copy; 2021 Backyard Bores Pty Ltd
      </StyledFooter>
    </Wrapper>
  );
};

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
export default SiteLayout;
