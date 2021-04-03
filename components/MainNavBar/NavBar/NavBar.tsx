import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

const NavbarEl = styled.nav`
  display: none;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    color: ${Theme.color.primary};
    display: flex;
    flex-flow: row nowrap;
    height: 100%;

    a:hover,
    a:focus {
      color: ${Theme.color.linkHover};
    }
  }
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

type Props = {
  children: ReactNode;
  onMouseLeave: () => void;
};

function Navbar({ children, onMouseLeave }: Props) {
  return (
    <NavbarEl onMouseLeave={onMouseLeave}>
      <NavbarList>{children}</NavbarList>
    </NavbarEl>
  );
}

export default Navbar;
