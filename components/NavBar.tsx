import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import subLinks from '../data/main-menu';
import { Theme } from '../styles/theme';
import Button from './Button';

const MainNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 5rem;
  z-index: 1;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }
`;

const NavCenter = styled.div`
  width: 90vw;
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: none;

  @media (min-width: 800px) {
    display: grid;
    justify-self: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const PrimaryMenuItem = styled.button`
  background: transparent;
  border-color: transparent;
  color: ${Theme.color.text};
  text-transform: capitalize;
  font-size: 1.1rem;
  letter-spacing: 0.2em;
  width: 10rem;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    /* background-color: transparent; */
    bottom: 0;
    left: 0;
    opacity: 0;
    transform: translateY(0.25em);
    transition: transform 150ms ease-out, opacity 150ms ease-out;
  }

  &:hover::after,
  &:active::after,
  &.active::after {
    transform: translateY(0);
    opacity: 1;
  }
`;

const DropdownBackground = styled.div`
  display: none;
`;

const Arrow = styled.span``;

const SubLink = styled.a`
  color: black;
  transition: color 250ms;
  text-decoration: none;

  :hover {
    color: ${Theme.color.primary};
  }

  :visited {
    color: unset;
  }
`;

const Dropdown = styled.ul`
  display: none;
  opacity: 0;
`;

const ToggleMenuButton = styled.button`
  @media (min-width: 800px) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <MainNav>
      <DropdownBackground>
        <Arrow></Arrow>
      </DropdownBackground>
      <NavCenter>
        <NavHeader>
          <span>LOGO</span>
          <Button noBorder>
            <FaBars />
          </Button>
        </NavHeader>
        <NavLinks>
          {subLinks.map((sub) => (
            <li key={sub.title}>
              <PrimaryMenuItem>{sub.title}</PrimaryMenuItem>
              <Dropdown>
                {sub.links.map((link, index) => (
                  <li key={index}>
                    <SubLink href={link.url}>{link.label}</SubLink>
                  </li>
                ))}
              </Dropdown>
            </li>
          ))}
        </NavLinks>
      </NavCenter>
    </MainNav>
  );
};

export default NavBar;
