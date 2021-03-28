import navLinks, { extraLinks } from 'data/main-navigation';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { toggleSidebar } from '../../actions/ui-actions';
import { useUIDispatch, useUIState } from '../../context/ui-context';
import Button from '../Button';
import MainNavBoxes from './MainNavBoxes';
import MainNavBoxExtras from './MainNavBoxExtras';
import MainNavItem, { Wrapper } from './MainNavItem';

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  background-color: ${Theme.color.primaryDark};
  height: 56px;
  padding: 0 10px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    justify-content: flex-start;
    padding: 0 30px;
  }
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

const MainNavBoxesExtras = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MainNavContainer = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;

    ${Wrapper} + ${Wrapper} {
      margin-left: 20px;
    }
  }
`;

const MobileMenuToggle = styled(Button)`
  display: flex;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: none;
  }
`;

const MainNavBar = () => {
  const dispatch = useUIDispatch();
  const toggleMobileNav = () => dispatch(toggleSidebar());

  return (
    <MainNav>
      <NavLogoLink>
        <img src='http://unsplash.it/90/30?gravity=center' alt='Logo' />
      </NavLogoLink>
      <MobileMenuToggle noBorder onClick={toggleMobileNav}>
        <FaBars />
      </MobileMenuToggle>
      <MainNavContainer>
        {navLinks?.map((page) => (
          <MainNavItem
            key={page.title}
            label={page.title}
            dropdownContent={
              <MainNavBoxesExtras>
                <MainNavBoxes subLinks={page.links} />
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
