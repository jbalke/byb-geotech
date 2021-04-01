import { toggleSidebar } from 'actions/ui-actions';
import DarkModeToggle from 'components/DarkModeToggle';
import StyledNextLink from 'components/StyledNextLink';
import { useUIDispatch } from 'context/ui-context';
import React, { ReactElement, useState, FC } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import Button from '../Button';
import ServicesDropdown from './DropdownContents/ServicesDropdown';
import CompanyDropdown from './DropdownContents/CompanyDropdown';
import NavBar from './NavBar';
import DropdownContainer from './DropdownContainer';
import NavbarItem from './NavBar/NavbarItem';

const MainNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  background-color: ${Theme.color.primaryDark};
  padding: 0 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  z-index: 99;

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

// const NavBar = styled.nav`
//   display: none;

//   @media (min-width: ${(props) => props.theme.bp.desktop}) {
//     display: flex;
//     flex-flow: row nowrap;
//     height: 100%;
//   }
// `;

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
  // { title: 'Developers', dropdown: DevelopersDropdown },
  { title: 'Company', dropdown: CompanyDropdown },
];

const MainNavBar = () => {
  const dispatch = useUIDispatch();
  const toggleMobileNav = () => dispatch(toggleSidebar());

  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const onMouseEnter = (i: number) => {
    if (activeIndices[activeIndices.length - 1] === i) return;

    setActiveIndices((old) => old.concat(i));
  };

  const onMouseLeave = () => {
    setActiveIndices([]);
  };

  let CurrentDropdown: FC;

  const currentIndex = activeIndices[activeIndices.length - 1];

  if (typeof currentIndex === 'number') {
    CurrentDropdown = navbarConfig[currentIndex].dropdown!;
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
              <DropdownContainer>
                {CurrentDropdown && <CurrentDropdown />}
              </DropdownContainer>
            )}
          </NavbarItem>
        ))}
      </NavBar>
      <MobileControls>
        <DarkModeToggle />
        <MobileMenuToggle variant='outline' onClick={toggleMobileNav}>
          <FaBars />
        </MobileMenuToggle>
      </MobileControls>
    </MainNav>
  );
};

export default MainNavBar;
