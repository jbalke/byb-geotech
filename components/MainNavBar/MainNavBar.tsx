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
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [animatingOutTimeout, setAnimatingOutTimeout] = useState<number | null>(
    null
  );

  const resetDropdownState = (i: number) => {
    setActiveIndices([i]);
    setIsAnimatingOut(false);
    setAnimatingOutTimeout(null);
  };

  const onMouseEnter = (i: number) => {
    if (animatingOutTimeout) {
      clearTimeout(animatingOutTimeout);
      resetDropdownState(i);
      return;
    }
    if (activeIndices[activeIndices.length - 1] === i) return;

    setActiveIndices((old) => [...old, i]);
    setIsAnimatingOut(false);
  };

  const onMouseLeave = () => {
    setIsAnimatingOut(true);
    // const timeout = setTimeout(resetDropdownState, DURATION);
    // setAnimatingOutTimeout(timeout);
    setActiveIndices([]);
  };

  let CurrentDropdown: FC;
  let PrevDropdown: FC;
  let direction: 'left' | 'right';

  const currentIndex = activeIndices[activeIndices.length - 1];
  const prevIndex =
    activeIndices.length > 1 && activeIndices[activeIndices.length - 2];

  if (typeof currentIndex === 'number') {
    CurrentDropdown = navbarConfig[currentIndex].dropdown;
  }

  if (typeof prevIndex === 'number') {
    PrevDropdown = navbarConfig[prevIndex].dropdown;
    direction = currentIndex > prevIndex ? 'right' : 'left';
  }

  return (
    <MainNav>
      <NavLogoLink href='/'>
        <img src='https://dummyimage.com/90x30.png?text=LOGO' alt='' />
      </NavLogoLink>
      <NavBar onMouseLeave={onMouseLeave}>
        {navbarConfig.map((item, index) => (
          <NavbarItem
            key={item.title}
            title={item.title}
            index={index}
            onMouseEnter={onMouseEnter}
          >
            {currentIndex === index && (
              <DropdownContainer
                direction={direction}
                animatingOut={isAnimatingOut}
                duration={DURATION}
              >
                {CurrentDropdown && <CurrentDropdown />}
                {/* {PrevDropdown && <PrevDropdown />} */}
              </DropdownContainer>
            )}
          </NavbarItem>
        ))}
      </NavBar>
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
