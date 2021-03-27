import React, { useState } from 'react';
import styled from 'styled-components';
import MainNavItem, { Wrapper } from './MainNavItem';
import { Theme } from 'styles/theme';
import navLinks, { SubmenuLinks } from 'data/main-navigation';

const MainNav = styled.nav`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  background-color: ${Theme.color.primaryDark};
  -webkit-font-smoothing: antialiased;
  height: 56px;
  padding: 0 30px;

  /* @media (min-width: ${(props) => props.theme.bp.tablet}) {
    display: grid;
    grid-template-columns: auto 1fr auto;
  } */
`;

const NavLogoLink = styled.a.attrs({
  href: '#',
  onClick: (e) => {
    e.preventDefault();
  },
})`
  display: flex;
  margin-right: 20px;
  transition: opacity 0.2s ease;

  > img {
    margin: auto;
    cursor: pointer;
  }

  > img:hover {
    opacity: 0.6;
  }
`;

const MainNavBoxes = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MainNavContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 500px;
  height: 100%;

  ${Wrapper} + ${Wrapper} {
    margin-left: 20px;
  }
`;

const MainNavBar = () => {
  return (
    <MainNav>
      <NavLogoLink>
        <img src='http://unsplash.it/90/30?gravity=center' alt='Logo' />
      </NavLogoLink>
      <MainNavContainer>
        {navLinks?.map((page) => (
          <MainNavItem
            key={page.title}
            label={page.title}
            dropdownContent={
              <>
                <MainNavBoxes>
                  {page.links?.map((link) => (
                    <a href={link.url} key={link.label}>
                      <h1>{link.label}</h1>
                    </a>
                  ))}
                </MainNavBoxes>
              </>
            }
          />
        ))}
      </MainNavContainer>
    </MainNav>
  );
};

export default MainNavBar;
