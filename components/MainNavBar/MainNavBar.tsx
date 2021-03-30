import { toggleSidebar } from 'actions/ui-actions';
import { useUIDispatch } from 'context/ui-context';
import navLinks, { extraLinks } from 'data/main-navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import Button from '../Button';
import MainNavBoxes from './MainNavBoxes';
import MainNavBoxExtras from './MainNavBoxExtras';
import MainNavItem, { Wrapper } from './MainNavItem';

//TODO: Need ot use next/link for all navigation
const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  background-color: ${Theme.color.primaryDark};
  height: 56px;
  padding: 0 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  z-index: 999;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    justify-content: flex-start;
    padding: 0 30px;
  }
`;

const NavLogoLink = styled.a`
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

const MainNavBoxesExtras = styled(motion.div)`
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

const dropdownItemsVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  closed: { opacity: 0, y: -10, transition: { duration: 0.1 } },
};

const MainNavBar = () => {
  const dispatch = useUIDispatch();
  const toggleMobileNav = () => dispatch(toggleSidebar());

  return (
    <MainNav>
      <Link href='/' passHref>
        <NavLogoLink>
          <img src='https://dummyimage.com/90x30.png?text=LOGO' alt='' />
        </NavLogoLink>
      </Link>
      <MobileMenuToggle variant='outline' onClick={toggleMobileNav}>
        <FaBars />
      </MobileMenuToggle>
      <MainNavContainer>
        <>
          <MainNavItem label='Home' href='/' />
          {navLinks?.map((page) => (
            <MainNavItem
              key={page.title}
              label={page.title}
              href={page?.url}
              dropdownContent={
                page.links && (
                  <MainNavBoxesExtras variants={dropdownItemsVariants}>
                    <MainNavBoxes subLinks={page.links} />
                    <MainNavBoxExtras links={extraLinks} />
                  </MainNavBoxesExtras>
                )
              }
            />
          ))}
        </>
      </MainNavContainer>
    </MainNav>
  );
};

export default MainNavBar;
