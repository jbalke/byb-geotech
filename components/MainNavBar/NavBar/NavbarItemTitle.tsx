import Link from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

const ItemTitle = styled.button<{ link?: boolean }>`
  appearance: none;
  background: transparent;
  border: 0;
  color: ${Theme.color.white};
  cursor: ${({ link }) => (link ? 'pointer' : 'default')};
  display: flex;
  font-weight: bold;
  font-family: inherit;
  font-size: 18px;
  justify-content: center;
  letter-spacing: 0.12em;
  padding: 2rem 1.5rem 1.2rem 1.5rem;
  text-decoration: none;
  transition: opacity 250ms;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  /* position: relative; */
  z-index: 2;

  &&:hover,
  &&:focus,
  &&:active,
  &&:visited {
    color: ${Theme.color.white};
  }
`;

type NavbarItemTitleProps = {
  href?: string;
  children: ReactNode;
};

export const NavbarItemTitle = ({ href, children }: NavbarItemTitleProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <ItemTitle as='a' link>
          {children}
        </ItemTitle>
      </Link>
    );
  }

  return <ItemTitle>{children}</ItemTitle>;
};
