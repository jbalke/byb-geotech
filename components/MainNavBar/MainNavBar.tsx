import { toggleSidebar } from 'actions/ui-actions';
import DarkModeToggle from 'components/DarkModeToggle';
import StyledNextLink from 'components/StyledNextLink';
import { useUIDispatch } from 'context/ui-context';
import { navLinks } from 'data/main-navigation';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { FC, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import Button from '../Button';
import DropdownContainer from './DropdownContainer';
import CompanyDropdown from './DropdownContents/CompanyDropdown';
import DevelopersDropdown from './DropdownContents/DevelopersDropdown';
import ServicesDropdown from './DropdownContents/ServicesDropdown';
import NavBar from './NavBar';
import NavbarItem from './NavBar/NavbarItem';

const MainNav = styled.header`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2); // ${Theme.color.primary};
  backdrop-filter: blur(5px);
  color: ${Theme.color.darkGrey};
  display: flex;
  flex-flow: row nowrap;
  font-family: 'Open Sans', sans-serif;
  justify-content: space-between;
  padding: 0 10px;
  transition: ${Theme.color.transition};
  z-index: 99;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
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

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    display: none;
  }
`;

const navbarConfig = [
  { title: 'Services', dropdown: ServicesDropdown },
  { title: 'Developers', dropdown: DevelopersDropdown },
  { title: 'Company', dropdown: CompanyDropdown },
];

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

  let CurrentDropdown: FC;

  // if (activeSubmenu !== null) {
  //   CurrentDropdown = navbarConfig[activeSubmenu].dropdown;
  // }

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
                      <motion.div layout>
                        {navLinks[activeSubmenu].links?.map((link) => {
                          const { Icon } = link;
                          return (
                            <div key={link.label}>
                              <StyledNextLink href={link.url}>
                                <Icon />
                                <span>{link.label}</span>
                              </StyledNextLink>
                            </div>
                          );
                        })}
                      </motion.div>
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
