import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

export const StyledLink = styled.a<{ size?: string }>`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ size }) => size || '1em'};
  flex-flow: row nowrap;
  font-family: inherit;
  line-height: 1;

  &,
  &:active,
  &:visited {
    color: ${Theme.color.link};
    font-weight: 600;
    text-decoration: none;
  }

  &:hover {
    color: ${Theme.color.linkHover};
    transition: ${Theme.color.transition};
  }

  &[href^='http']::after {
    content: '';
    background: url('/external-link.svg') center no-repeat;
    height: 0.8em;
    width: 0.8em;
    align-self: flex-start;
  }
`;

type NextLinkButtonProps = {
  tag?: 'a' | 'button';
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: string;
  [x: string]: any; // typing rest/spread
};

function StyledNextLink({
  tag = 'a',
  href,
  children,
  className,
  size,
  ...props
}: NextLinkButtonProps) {
  return (
    <Link href={href} passHref>
      <StyledLink as={tag} className={className} size={size} {...props}>
        {children}
      </StyledLink>
    </Link>
  );
}

export default StyledNextLink;
