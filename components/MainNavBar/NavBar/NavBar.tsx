import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from 'styles/style-constants';
import { Theme } from 'styles/theme';

const NavbarEl = styled.nav`
  display: none;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    color: ${Theme.color.primary};
    display: block;
    height: 100%;

    a:hover,
    a:focus {
      color: ${Theme.color.linkHover};
    }
  }
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
`;

type Props = {
  children: ReactNode;
  onMouseLeave: () => void;
};

function Navbar({ children, onMouseLeave }: Props) {
  return (
    <NavbarEl onMouseLeave={onMouseLeave} aria-label="primary menu">
      <NavbarList>{children}</NavbarList>
    </NavbarEl>
  );
}

export default Navbar;
