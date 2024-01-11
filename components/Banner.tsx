import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from 'styles/style-constants';
import { Theme } from 'styles/theme';
import defaultBgImage from '../public/images/banner-infinity.webp';
import { NextSeo } from 'next-seo';

const StyledBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  min-height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${Theme.color.white};
  line-height: 1;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    & {
      height: 20vh;
      min-height: 250px;
      background-position: 50% 50%;
    }
  }

  @media print {
    & {
      height: auto;
      min-height: unset;
    }
  }
`;

const BannerContent = styled.div`
  & > * {
    position: relative;
  }

  h1 {
    color: ${Theme.color.white};
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    text-align: center;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
    text-transform: capitalize;
    transition: font-size 300ms;
  }

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    h1 {
      font-size: 4rem;
    }
  }
`;
type BannerProps = {
  title: string;
  description?: string;
  image?: StaticImageData;
};

function Banner({ title, description, image }: BannerProps) {
  const imageSrc = image ?? defaultBgImage;
  return (
    <>
      <NextSeo title={`${title} | Backyard Bores`} description={description} />
      <StyledBanner>
        <Image
          alt="Banner"
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
        <BannerContent>
          <h1>{title}</h1>
        </BannerContent>
      </StyledBanner>
    </>
  );
}

export default Banner;
