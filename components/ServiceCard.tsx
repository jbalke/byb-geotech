import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { StyledLinkButton } from './Button';

const Card = styled.article<{ imageSrc: string }>`
  background-image: url(${({ imageSrc }) => imageSrc});
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-flow: column nowrap;
  position: relative;
  padding: 2rem 1rem;
  min-height: 25vh;

  & > * {
    z-index: 1;
  }

  :focus-within::before,
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.6);
    transition: ${Theme.color.transition};
  }

  :focus-within::before,
  :hover::before {
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    padding: 5rem 2rem;
  }
`;

const CardTitle = styled.h3`
  align-self: flex-start;
  font-size: 1.2rem;
  line-height: 1.2;
  position: relative;
  width: max-content;

  &::after {
    background-color: ${Theme.color.primary};
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    top: 100%;
    left: 0;
  }

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    font-size: 1.5rem;
  }

  @media (hover: hover) {
    &::after {
      transform: scaleX(0);
      transition: transform 300ms;
      transform-origin: left;
    }

    ${Card}:focus-within &::after,
    ${Card}:hover &::after {
      transform: scaleX(1);
    }
  }
`;

const CardContent = styled.div`
  --padding: 1.5rem;
  color: ${Theme.color.white};
  font-weight: 600;
  letter-spacing: 0.07em;
  padding: var(--padding);
`;

type ServiceCardProps = {
  title: string;
  children: React.ReactNode;
  href: string;
  imageSrc: string;
};

function ServiceCard({ title, children, href, imageSrc }: ServiceCardProps) {
  return (
    <Card imageSrc={imageSrc}>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {children}
        <StyledLinkButton href={href}>Learn More</StyledLinkButton>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
