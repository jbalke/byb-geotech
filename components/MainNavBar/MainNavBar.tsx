import { toggleSidebar } from 'actions/ui-actions';
import LogoImg from 'assets/logo.webp';
import Button, { StyledLinkButton } from 'components/Button';
import CallLink from 'components/CallLink';
import DarkModeToggle from 'components/DarkModeToggle';
import { StyledLink } from 'components/Link';
import StyledNextLink from 'components/Link/StyledNextLink';
import { useUIDispatch } from 'context/ui-context';
import { navLinks } from 'data/main-navigation';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import DropdownContainer from './DropdownContainer';
import NavBar from './NavBar';
import NavbarItem from './NavBar/NavbarItem';

const MainNav = styled.header`
  position: relative;
  font-family: 'Open Sans', sans-serif;
  background-color: ${Theme.color.textBackground}; //rgba(0, 0, 0, 0.2);
  color: ${Theme.color.darkGrey};
  backdrop-filter: blur(5px);
  transition: ${Theme.color.transition};
  isolation: isolate;
  z-index: 99;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 0 auto;
  width: 100%;
  max-width: ${Theme.width.max};
  z-index: 10;
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
        color: ${Theme.color.linkHover};
      }
    }
  }
`;

const NavLogoLink = styled(StyledNextLink)`
  box-shadow: none;

  :hover {
    box-shadow: none;
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

  @media (min-width: ${props => props.theme.bp.desktop}) {
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

const PhoneQuote = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75em 1em;
  background-color: ${Theme.color.primaryDark};
  color: ${Theme.color.white};
  padding: 0.75em;

  ${StyledLink} {
    --link-color: ${Theme.color.white};
    font-weight: 400;
  }

  ${StyledLinkButton} {
    text-shadow: none;
  }

  @media (min-width: 710px) {
    & {
      position: absolute;
      padding: 0;
      width: max-content;
      top: 11px;
      left: 50%;
      transform: translateX(-50%);
      background-color: transparent;
      color: ${Theme.color.primary};
      z-index: 20;
    }

    ${StyledLink} {
      --link-color: ${Theme.color.primary};
      font-weight: 400;
    }

    ${StyledLinkButton} {
      --fg: ${Theme.color.primary};
      --focus-fg: ${Theme.color.white};
    }
  }

  @media (min-width: 1000px) {
    & {
      position: static;
      padding: 0.75em;
      transform: none;
      width: auto;
      color: ${Theme.color.white};
      background-color: ${Theme.color.primaryDark};
    }

    ${StyledLink} {
      --link-color: ${Theme.color.white};
      font-weight: 400;
    }

    ${StyledLinkButton} {
      --fg: ${Theme.color.white};
      --focus-fg: ${Theme.color.primary};
    }
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
      <Container>
        <NavLogoLink href="/" aria-label="backyard bores home page">
          <Image src={LogoImg} alt="logo" height="50px" width="116px" />
        </NavLogoLink>
        <AnimateSharedLayout type="crossfade">
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
                      <DropdownContents
                        layout
                        itemCount={
                          sections.filter(s => Boolean(s.title)).length
                        }
                      >
                        {sections.map((section, index) => {
                          return (
                            <SectionContainer key={index}>
                              {section.title && <h2>{section.title}</h2>}
                              <SectionPageContainer>
                                {section.pages.map(page => {
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
          <MobileMenuToggle size="lg" onClick={toggleMobileNav}>
            <FaBars />
          </MobileMenuToggle>
        </MobileControls>
      </Container>
      <PhoneQuote>
        <StyledLinkButton
          href="/request-a-quote"
          variant="outline-inverse"
          size="sm"
        >
          Request a Free Quote
        </StyledLinkButton>
        <div
          css={`
            font-size: 1.5rem;
          `}
        >
          <strong>Call</strong> <CallLink />
        </div>
      </PhoneQuote>
    </MainNav>
  );
};

export default MainNavBar;
