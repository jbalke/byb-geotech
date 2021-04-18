import { toggleSidebar } from 'actions/ui-actions';
import DarkModeToggle from 'components/DarkModeToggle';
import StyledNextLink from 'components/StyledNextLink';
import { useUIDispatch } from 'context/ui-context';
import { navLinks } from 'data/main-navigation';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { Theme } from 'styles/theme';
import Button from '../Button';
import DropdownContainer from './DropdownContainer';
// import CompanyDropdown from './DropdownContents/CompanyDropdown';
// import DevelopersDropdown from './DropdownContents/DevelopersDropdown';
// import ServicesDropdown from './DropdownContents/ServicesDropdown';
import NavBar from './NavBar';
import NavbarItem from './NavBar/NavbarItem';

const DropdownContents = styled(motion.div)<{ itemCount?: number }>`
  align-content: start;
  color: ${Theme.color.text};
  display: grid;
  gap: 1em;
  grid-template-columns: ${({ itemCount }) =>
    itemCount ? `repeat(${Math.ceil(itemCount / 4)}, 1fr)` : '1fr'};
  padding: 1rem;
  transition: ${Theme.color.transition};
`;

const IconLinkWrapper = styled.div`
  align-items: flex-start;
  color: ${Theme.color.primaryDark};
  display: flex;
  flex-flow: row nowrap;

  a {
    margin-left: 0.5em;
  }

  a,
  a:active,
  a:visited {
    color: ${Theme.color.link};
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    color: ${Theme.color.linkHover};
    transition: ${Theme.color.transition};
  }
`;

const MainNav = styled.header`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  color: ${Theme.color.darkGrey};
  display: flex;
  flex-flow: row nowrap;
  font-family: 'Open Sans', sans-serif;
  height: 50px;
  justify-content: space-between;
  padding: 0 10px;
  transition: ${Theme.color.transition};
  white-space: nowrap;
  z-index: 99;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    height: 75px;
    justify-content: space-between;
    padding: 0 30px;
  }
`;

const NavLogoLink = styled(StyledNextLink)`
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

const MobileControls = styled.div`
  align-items: center;
  display: flex;
`;

const MobileMenuToggle = styled(Button)`
  display: flex;
  margin-left: 15px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: none;
  }
`;

const MainNavBar = () => {
  const dispatch = useUIDispatch();
  const toggleMobileNav = () => dispatch(toggleSidebar());

  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const onMouseEnter = (i: number) => {
    setActiveSubmenu(i);
  };

  const onMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <MainNav>
      <NavLogoLink href='/'>
        <img src='https://dummyimage.com/90x30.png?text=LOGO' alt='' />
      </NavLogoLink>
      <AnimateSharedLayout type='crossfade'>
        <NavBar onMouseLeave={onMouseLeave}>
          {navLinks.map((item, index) => (
            <NavbarItem
              key={item.title}
              title={item.title}
              index={index}
              href={item.url}
              onMouseEnter={onMouseEnter}
            >
              <AnimatePresence>
                {activeSubmenu === index &&
                  navLinks[activeSubmenu].links?.length && (
                    <DropdownContainer>
                      <DropdownContents
                        layout
                        itemCount={navLinks[activeSubmenu].links?.length}
                      >
                        {navLinks[activeSubmenu].links?.map((link) => {
                          const { Icon } = link;
                          return (
                            <IconLinkWrapper key={link.label}>
                              <Icon />
                              <StyledNextLink href={link.url}>
                                <span>{link.label}</span>
                              </StyledNextLink>
                            </IconLinkWrapper>
                          );
                        })}
                      </DropdownContents>
                    </DropdownContainer>
                  )}
              </AnimatePresence>
            </NavbarItem>
          ))}
        </NavBar>
      </AnimateSharedLayout>
      <MobileControls>
        <DarkModeToggle />
        <MobileMenuToggle onClick={toggleMobileNav}>
          <FaBars />
        </MobileMenuToggle>
      </MobileControls>
    </MainNav>
  );
};

export default MainNavBar;
