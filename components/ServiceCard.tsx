import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { BREAKPOINTS } from 'styles/style-constants';
import { StyledLinkButton } from './Button';

const Card = styled.div<{ imageSrc?: string }>`
  display: flex;
  background-color: ${Theme.color.primaryDark};
  flex-flow: column nowrap;
  position: relative;
  padding: 2rem 1rem;
  min-height: 25vh;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 3rem 2rem;
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  color: ${Theme.color.white};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  padding: 1.5rem;

  p {
    position: relative;
    text-shadow: 1px 1px 1px ${Theme.color.black};
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.7);
    transition: ${Theme.color.transition};
  }

  :focus-within::before,
  :hover::before {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    & {
      font-size: 1.2rem;
    }
  }
`;

const CardTitle = styled.h3`
  align-self: flex-start;
  color: ${Theme.color.white};
  display: inline;
  font-size: 1.2rem;
  line-height: 1.2;
  position: relative;
  text-shadow: 1px 1px 1px ${Theme.color.black};
  background: no-repeat 0 100%;
  background-image: linear-gradient(
    ${Theme.color.primary},
    ${Theme.color.primary}
  );
  background-size: 100% 3px;
  transition: background-size 300ms ease;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    font-size: 1.5rem;
  }

  @media (hover: hover) {
    & {
      background-size: 0% 3px;
    }

    ${Card}:focus-within &,
    ${Card}:hover & {
      background-size: 100% 3px;
    }
  }
`;

const LearnMoreButton = styled(StyledLinkButton)`
  align-self: flex-start;
  margin-top: 1rem;
`;

type ServiceCardProps = {
  title: string;
  children: React.ReactNode;
  href: string;
  imageSrc: StaticImageData;
  placeholder?: 'blur' | 'empty';
};

function ServiceCard({
  title,
  children,
  href,
  imageSrc,
  placeholder = 'empty',
}: ServiceCardProps) {
  return (
    <Card>
      <Image
        alt={title}
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        quality={50}
        placeholder={placeholder}
      />
      <CardContent>
        <div>
          <CardTitle>{title}</CardTitle>
          {children}
        </div>
        <LearnMoreButton href={href}>Learn more</LearnMoreButton>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
