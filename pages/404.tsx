import React from 'react';
import Banner from '../components/Banner';
import StyledNextLink from '../components/Link/StyledNextLink';
import { Wrapper } from '../components/styled';
import SiteLayout from '../layouts/SiteLayout';
import Image from 'next/image';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { BREAKPOINTS } from 'styles/style-constants';
import OopsBgImage from '../public/images/Dry Hole MMR.jpg';

const Oops = styled.section`
  align-items: center;
  color: ${Theme.color.white};
  display: flex;
  height: 60vh;
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

  @media (min-width: ${BREAKPOINTS.tablet}) {
    h1 {
      font-size: 4rem;
    }
  }
`;
const OopsSubText = styled.p`
  display: none;
  font-family: sans-serif;
  font-style: italic;
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  margin: 0.5rem 0 0 0;
  text-align: justify;
  text-shadow: inherit;
  width: 65%;
  min-width: 700px;

  @supports (font-variation-settings: normal) {
    font-family: 'Public Sans';
    font-style: italic;
    font-weight: 600;
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    display: block;
  }
`;

const OopsContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: centre;
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

  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin: 0;
  }
`;
function FourOhFour() {
  return (
    <>
      <Banner title="Looks like a dry hole" />
      <Oops>
        <Image
          alt="Looks like a dry hole"
          src={OopsBgImage}
          layout="intrinsic"
          objectFit="cover"
          placeholder="blur"
        />
        <OopsContentWrapper>
          <OopsSubText>
            The page you were linked to does not exist. Take a trip back to the
            home page or navigate through the menus to locate the page you were
            after.
          </OopsSubText>
        </OopsContentWrapper>
      </Oops>

      <Wrapper main padding={'xl'}>
        <div>
          <p>
            <StyledNextLink href="/">Go back home</StyledNextLink> and try
            again.
          </p>
          <p>
            <StyledNextLink href="/bores">Water Bore Drilling</StyledNextLink>{' '}
            Page
          </p>
          <p>
            <StyledNextLink href="/geotech">
              Geotechnical Drilling
            </StyledNextLink>{' '}
            Page
          </p>
          <p>
            <StyledNextLink href="/pumps/sales-and-repairs">
              Pump Sales and Repairs
            </StyledNextLink>{' '}
            Page
          </p>
        </div>
      </Wrapper>
    </>
  );
}

FourOhFour.layout = SiteLayout;
export default FourOhFour;
