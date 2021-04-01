import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

const NavbarEl = styled.nav`
  display: none;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
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
