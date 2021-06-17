import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import Head from 'next/head';
import Image from 'next/image';
import defaultBgImage from '../public/images/banner-infinity.webp';

const StyledBanner = styled.div`
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${Theme.color.white};
  display: flex;
  height: 20vh;
  justify-content: center;
  line-height: 1;
  position: relative;
  min-height: 150px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    & {
      height: 20vh;
      min-height: 250px;
      background-position: 50% 50%;
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    h1 {
      font-size: 4rem;
    }
  }
`;
type BannerProps = {
  title: string;
  image?: StaticImageData;
};

function Banner({ title, image }: BannerProps) {
  const imageSrc = image ?? defaultBgImage;
  return (
    <>
      <Head>
        <title>{title} | Backyard Bores</title>
      </Head>
      <StyledBanner>
        <Image
          alt='Banner'
          src={imageSrc}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
        <BannerContent>
          <h1>{title}</h1>
        </BannerContent>
      </StyledBanner>
    </>
  );
}

export default Banner;
