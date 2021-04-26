import Link from 'next/link';
import React from 'react';
import { StyledLink } from './StyledLink';

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
