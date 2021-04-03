import { toggleSidebar } from 'actions/ui-actions';
import DarkModeToggle from 'components/DarkModeToggle';
import StyledNextLink from 'components/StyledNextLink';
import { useUIDispatch } from 'context/ui-context';
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
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const DURATION = 300;

const MainNav = styled.header`
  align-items: center;
  background-color: transparent; // ${Theme.color.primary};
  color: ${Theme.color.darkGrey};
  display: flex;
  font-family: 'Open Sans', sans-serif;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0 10px;
  z-index: 99;
  transition: ${Theme.color.transition};

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
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

const navbarConfig = [
  { title: 'Services', dropdown: ServicesDropdown },
  { title: 'Developers', dropdown: DevelopersDropdown },
  { title: 'Company', dropdown: CompanyDropdown },
];

const MainNavBar = () => {
  const dispatch = useUIDispatch();
  const toggleMobileNav = () => dispatch(toggleSidebar());

  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const onMouseEnter = (i: number) => {
    if (activeIndices[activeIndices.length - 1] === i) return;

    setActiveIndices((old) => [...old, i]);
  };

  const onMouseLeave = () => {
    setActiveIndices([]);
  };

  let CurrentDropdown: FC;
  // let PrevDropdown: FC | null;

  const currentIndex =
    activeIndices.length > 0
      ? activeIndices[activeIndices.length - 1]
      : undefined;
  const prevIndex =
    activeIndices.length > 1
      ? activeIndices[activeIndices.length - 2]
      : undefined;

  if (typeof currentIndex === 'number') {
    CurrentDropdown = navbarConfig[currentIndex].dropdown;
  }

  console.log({ currentIndex, prevIndex });

  return (
    <MainNav>
      <NavLogoLink href='/'>
        <img src='https://dummyimage.com/90x30.png?text=LOGO' alt='' />
      </NavLogoLink>
      <AnimateSharedLayout>
        <NavBar onMouseLeave={onMouseLeave}>
          {navbarConfig.map((item, index) => (
            <NavbarItem
              key={item.title}
              title={item.title}
              index={index}
              onMouseEnter={onMouseEnter}
            >
              {/* <AnimatePresence> */}
              {currentIndex === index && (
                <DropdownContainer index={index} prevIndex={prevIndex}>
                  {CurrentDropdown && (
                    <motion.div layout>
                      <CurrentDropdown />
                    </motion.div>
                  )}
                </DropdownContainer>
              )}
              {/* </AnimatePresence> */}
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
