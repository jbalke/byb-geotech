import AboutSection from 'components/AboutSection';
import BoreSearchSection from 'components/BoreSearchSection';
import GetQuoteSection from 'components/GetQuoteSection';
import ServicesSection from 'components/ServicesSection';
import WhyUsSection from 'components/WhyUsSection';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import Image from 'next/image';
import heroBgImage from '../public/images/banner-infinity.webp';

const Hero = styled.section`
  align-items: center;
  color: ${Theme.color.white};
  display: flex;
  height: 80vh;
  min-height: 350px;
  justify-content: center;
  line-height: 1;
  position: relative;
  width: 100%;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);

  h1 {
    color: ${Theme.color.white};
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    text-align: center;
    transition: font-size 300ms;
    text-shadow: inherit;
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    h1 {
      font-size: 4rem;
    }
  }
`;

const HeroPhoneText = styled.p`
  font-size: 2rem;
  font-weight: 900;
  margin: 2rem 0 0 0;
  transition: font-size 300ms;
  text-shadow: inherit;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin: 3rem 0 0 0;
    font-size: 4rem;
  }
`;

const HeroSubText = styled.p`
  display: none;
  font-family: sans-serif;
  font-style: italic;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  margin: 0.5rem 0 0 0;
  text-align: center;
  text-shadow: inherit;
  width: 65%;
  min-width: 700px;

  @supports (font-variation-settings: normal) {
    font-family: 'Public Sans';
    font-style: italic;
    font-weight: 600;
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    display: block;
  }
`;

const HeroContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 10px;

  & > * {
    position: relative;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin: 0;
  }
`;
function Home() {
  return (
    <>
      <Hero>
        <Image
          alt='Backyard Bores & Geotech Drilling'
          src={heroBgImage}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
        <HeroContentWrapper>
          <h1>Backyard Bores & Geotech Drilling</h1>
          <HeroSubText>
            Your water bore and geotech drilling specialists since 2002.
            Covering Mackay from Bowen to Rockhampton and west to Clermont.
          </HeroSubText>
          <HeroPhoneText>1800 193 194</HeroPhoneText>
        </HeroContentWrapper>
      </Hero>
      <AboutSection />
      <ServicesSection />
      <GetQuoteSection />
      <WhyUsSection />
      <BoreSearchSection />
    </>
  );
}

Home.layout = SiteLayout;
export default Home;
