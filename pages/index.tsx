import StyledNextLink from 'components/Link/StyledNextLink';
import { Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import CallLink from 'components/CallLink';
import ServicesSection from 'components/ServicesSection';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import GetQuoteSection from 'components/GetQuoteSection';

const Hero = styled.section`
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3)
    ),
    url('/images/banner-infinity.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  color: ${Theme.color.white};
  display: flex;
  height: 80vh;
  justify-content: center;
  line-height: 1;
  width: 100%;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    text-align: center;
    transition: font-size 300ms;
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

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin: 4rem 0 0 0;
    font-size: 4rem;
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
  width: 65%;
  min-width: 700px;

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

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin: 0;
  }
`;
function Home() {
  return (
    <>
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
      <ServicesSection />
      <Wrapper maxWidth='70ch'>
        <section>
          <ul>
            <li>
              <strong>Water bore drilling</strong> to industry best practice
              standards
            </li>
            <li>
              <strong>Environmental, Geotech & soil sampling drilling</strong>{' '}
              (NDD, SPT, DCP, Monitoring wells, Geoprobe and push tubes, split
              spoon, etc) - For a full list of our Geotech drilling products
              available, please visit our{' '}
              <StyledNextLink href='#'>
                Geotech & Environmental Drilling
              </StyledNextLink>{' '}
              page
            </li>
            <li>
              <strong>Bore repair / cleanout, sand pumping</strong>, air lifting
              (blowing clean)
            </li>
            <li>
              <strong>Bore test pumping</strong>, water level logging, flow rate
              data logging
            </li>
            <li>
              Simple <strong>water testing</strong> (Salinity-TDS, Iron-TDI & PH
              levels)
            </li>
            <li>
              Drilling using Solid Stem (Continuous Flight) Augers (CFA) and
              Hollow Stem Augers (HSA)
            </li>
            <li>Drilling using rock hammer (DTH or rotary air)</li>
            <li>
              Borehole <strong>camera inspections</strong> and reports
            </li>
            <li>
              <strong>Production bore</strong> drilling/cleaning and large
              diameter well cleanouts
            </li>
            <li>
              Installation of <strong>spears</strong>
            </li>
            <li>
              <strong>Pump supply</strong> and installation
            </li>
            <li>
              Comprehensive <strong>drinking</strong>
              <strong> water testing </strong>available on request
            </li>
            <li>Licensed drillers for hire</li>
          </ul>
          <p>
            If you are looking for water to keep the yard green, top up the
            pool, or reduce the high cost of town water, give us a call on{' '}
            <CallLink /> and we can come and drill for water in your backyard
            (or front yard) saving you money. You can water any day of the week
            without restrictions. We use the latest techniques and equipment
            with the best quality products in our bores with factory cut fine
            slot casing (0.4mm) eliminating 98% of the fine sand compared to
            hand cut slots.
          </p>
          <p>
            We also offer test pumping of bores to{' '}
            <strong>
              Australian Standard AS2368–1990 Test Pumping of Water Wells
            </strong>{' '}
            from 2 hours to 28 days in duration.
          </p>
        </section>
      </Wrapper>
      <GetQuoteSection />
    </>
  );
}

Home.layout = SiteLayout;
export default Home;
