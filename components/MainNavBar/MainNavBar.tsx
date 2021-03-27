import navLinks, { extraLinks } from 'data/main-navigation';
import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import MainNavBoxExtras from '../MainNavBoxExtras';
import MainNavBox from './MainNavBox';
import MainNavItem, { Wrapper } from './MainNavItem';

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
  padding: 0 20px 0 13px;
`;

const MainNavBoxesExtras = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MainNavContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
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
              <MainNavBoxesExtras>
                <MainNavBoxes>
                  {page.links?.map((link) => (
                    <MainNavBox
                      key={link.label}
                      description='TBD'
                      imageSrc='http://placekitten.com/300'
                      title={link.label}
                      url={link.url}
                    />
                  ))}
                </MainNavBoxes>
                <MainNavBoxExtras links={extraLinks} />
              </MainNavBoxesExtras>
            }
          />
        ))}
      </MainNavContainer>
    </MainNav>
  );
};

export default MainNavBar;
