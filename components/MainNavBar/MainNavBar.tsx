import { toggleSidebar } from 'actions/ui-actions';
import DarkModeToggle from 'components/DarkModeToggle';
import { StyledLink } from 'components/Link';
import StyledNextLink from 'components/Link/StyledNextLink';
import { useUIDispatch } from 'context/ui-context';
import { navLinks } from 'data/main-navigation';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import Button from '../Button';
import DropdownContainer from './DropdownContainer';
import NavBar from './NavBar';
import NavbarItem from './NavBar/NavbarItem';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${Theme.width.max};
  width: 100%;
`;

const DropdownContents = styled(motion.div)<{ itemCount?: number }>`
  align-content: start;
  color: ${Theme.color.text};
  display: grid;
  gap: 1.5rem;
  grid-template-columns: ${({ itemCount }) =>
    itemCount ? `repeat(${itemCount}, 1fr)` : '1fr'};
  padding: 1rem;
  transition: ${Theme.color.transition};
`;

const IconLinkWrapper = styled.div`
  align-items: flex-start;
  color: ${Theme.color.link};
  display: flex;
  flex-flow: row nowrap;

  ${StyledLink} {
    margin-left: 0.5em;
    transition: ${Theme.color.transition};

    @media (hover: hover) {
      & {
        box-shadow: none;
      }

      &:hover {
        all: inital;
        color: ${Theme.color.linkHover};
      }
    }
  }
`;

const MainNav = styled.header`
  align-items: center;
  background-color: ${Theme.color.textBackground}; //rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  color: ${Theme.color.darkGrey};
  display: flex;
  font-family: 'Open Sans', sans-serif;
  height: 60px;
  padding: 0 10px;
  transition: ${Theme.color.transition};
  z-index: 99;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    height: 75px;
    padding: 0 30px;
  }

  ${StyledLink} {
    box-shadow: none;

    @media (hover: hover) {
      & {
        box-shadow: none;
      }

      &:hover {
        all: inital;
      }
    }
  }
`;

const NavLogoLink = styled(StyledNextLink)`
  > img {
    margin: auto;
    cursor: pointer;
  }
`;

const MobileControls = styled.div`
  align-items: center;
  display: flex;
`;

const MobileMenuToggle = styled(Button)`
  display: flex;
  margin-left: 15px;
  padding: 0.5rem;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    display: none;
  }
`;

const SectionContainer = styled.div`
  h2 {
    color: ${Theme.color.primaryLight};
    margin: 0 0 0.7rem 0;
    text-align: center;
  }
`;

const SectionPageContainer = styled.div`
  display: grid;
  gap: 0.7rem;
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
      <Container>
        <NavLogoLink href='/'>
          <img src='/logo.png' alt='logo' height='50px' width='115.36px' />
        </NavLogoLink>
        <AnimateSharedLayout type='crossfade'>
          <NavBar onMouseLeave={onMouseLeave}>
            {navLinks.map(({ Icon, title, href, sections }, index) => (
              <NavbarItem
                key={title}
                title={title}
                index={index}
                Icon={Icon}
                href={href}
                onMouseEnter={onMouseEnter}
              >
                <AnimatePresence>
                  {activeSubmenu === index && sections && (
                    <DropdownContainer withCaret>
                      <DropdownContents layout itemCount={sections.length}>
                        {sections.map((section, index) => {
                          return (
                            <SectionContainer key={index}>
                              {section.title && <h2>{section.title}</h2>}
                              <SectionPageContainer>
                                {section.pages.map((page) => {
                                  const { Icon, title, href } = page;
                                  return (
                                    <IconLinkWrapper key={href}>
                                      <Icon />
                                      <StyledNextLink href={href}>
                                        <span>{title}</span>
                                      </StyledNextLink>
                                    </IconLinkWrapper>
                                  );
                                })}
                              </SectionPageContainer>
                            </SectionContainer>
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
          <MobileMenuToggle size='lg' onClick={toggleMobileNav}>
            <FaBars />
          </MobileMenuToggle>
        </MobileControls>
      </Container>
    </MainNav>
  );
};

export default MainNavBar;
