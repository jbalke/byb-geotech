import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  font-size: 18px;
  padding: 2rem 1.5rem 1.2rem 1.5rem;
  color: ${Theme.color.white};
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;

  &:hover,
  &:focus {
    opacity: 0.7;
    outline: none;
  }
`;

const NavbarItemEl = styled.li`
  position: relative;
`;

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
`;

type Props = {
  onMouseEnter: (i: number) => void;
  index: number;
  title: string;
  children: ReactNode;
};

function NavbarItem({ onMouseEnter, index, title, children }: Props) {
  const handleMouseEnter = () => onMouseEnter(index);

  return (
    <NavbarItemEl onMouseEnter={handleMouseEnter} onFocus={handleMouseEnter}>
      <NavbarItemTitle>{title}</NavbarItemTitle>
      <DropdownSlot>{children}</DropdownSlot>
    </NavbarItemEl>
  );
}

export default NavbarItem;
