import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a<{ size?: string }>`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ size }) => size || '1em'};
  flex-flow: row nowrap;
  font-family: inherit;
  line-height: 1;
  text-decoration: none;
  text-transform: capitalize;
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
