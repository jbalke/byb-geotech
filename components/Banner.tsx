import React from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/theme';

const StyledBanner = styled.div<{ imageSrc: string }>`
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3)
    ),
    url(${({ imageSrc }) => imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${Theme.color.white};
  display: flex;
  height: 20vh;
  justify-content: center;
  line-height: 1;
  min-height: 150px;
  width: 100%;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    text-align: center;
    text-transform: capitalize;
    transition: font-size 300ms;
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    & {
      height: 20vh;
      min-height: 250px;
      background-position: 50% 50%;
    }

    h1 {
      font-size: 4rem;
    }
  }
`;

type BannerProps = {
  title: string;
  image?: string;
};

function Banner({
  title,
  image = '/images/banner-infinity.webp',
}: BannerProps) {
  return (
    <StyledBanner imageSrc={image}>
      <h1>{title}</h1>
    </StyledBanner>
  );
}

export default Banner;
