import Link from 'next/link';
import React from 'react';
import { StyledLink } from './StyledLink';

type NextLinkButtonProps = {
  tag?: 'a' | 'button';
  href: string;
  children: React.ReactNode;
  size?: string;
} & Omit<
  React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >, 'href' | 'ref'>;

function StyledNextLink({
  tag = 'a',
  href,
  children,
  size,
  ...props
}: NextLinkButtonProps) {
  return (
    <Link href={href} passHref>
      <StyledLink as={tag} size={size} {...props} >
        {children}
      </StyledLink>
    </Link>
  );
}

export default StyledNextLink;
