import { closeSidebar } from 'actions/ui-actions';
import StyledNextLink from 'components/StyledNextLink';
import { useUIDispatch, useUIState } from 'context/ui-context';
import { navLinks } from 'data/main-navigation';
import { motion } from 'framer-motion';
import React from 'react';
import { FaHome, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import Button from '../Button';

const MenuCloseBtn = styled(Button)`
  align-self: flex-end;
`;

const MenuContainer = styled(motion.div)`
  background-color: ${Theme.color.textBackground};
  border-radius: 15px;
  color: ${Theme.color.text};
  display: flex;
  flex-flow: column nowrap;
  min-height: calc(100vh - 10px);
  margin: 0 auto;
  max-width: ${(props) => props.theme.bp.tablet};
  padding: 15px;
  overflow-x: hidden;
  overscroll-behavior: contain;
  width: 100%;
`;

const Wrapper = styled(motion.nav)`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  flex-flow: column nowrap;
  height: 100vh;
  left: 0;
  padding: 5px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;

  @supports (backdrop-filter: blur(10px) brightness(0.6)) {
    backdrop-filter: blur(10px) brightness(0.6);
    background-color: transparent;
  }
`;

const NavLinksContainer = styled.div`
  align-items: start;
  display: grid;
  flex: 1;
  gap: 1.5rem 1rem;
  grid-template-columns: 1fr 1fr;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  display: grid;
  gap: 0.75em 0.25em;
  grid-template-columns: 20px auto;
  justify-content: center;
  align-items: start;
  margin: 1em 0 0 0;
  padding: 0;

  a {
    color: inherit;
    text-transform: capitalize;
    text-decoration: none;

    :active,
    :visited {
      color: currentColor;
    }
  }
`;

const PageTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const HomeLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const mobileWrapperVariants = {
  open: { display: 'flex', transition: { when: 'beforeChildren' } },
  closed: {
    transition: { when: 'afterChildren' },
    transitionEnd: { display: 'none' },
  },
};
const mobileNavVariants = {
  open: { y: 0, transition: { type: 'spring', duration: 0.4 } },
  closed: {
    y: '-100vh',
    transition: { type: 'tween', duration: 0.2, ease: 'easeIn' },
  },
};

type MobileMainNavProps = {};

function MobileMainNav(props: MobileMainNavProps) {
  const dispatch = useUIDispatch();
  const { isSidebarOpen } = useUIState();

  const closeMobileNav = () => dispatch(closeSidebar());

  return (
    <Wrapper
      variants={mobileWrapperVariants}
      animate={isSidebarOpen ? 'open' : 'closed'}
    >
      <MenuContainer variants={mobileNavVariants}>
        <MenuCloseBtn onClick={closeMobileNav} variant='outline'>
          <FaTimes />
        </MenuCloseBtn>
        <HomeLinkWrapper>
          <StyledNextLink size='3rem' onClick={closeMobileNav} href='/'>
            <FaHome />
          </StyledNextLink>
        </HomeLinkWrapper>
        <NavLinksContainer>
          {navLinks.map((page) => (
            <PageWrapper key={page.title}>
              {page.url ? (
                <StyledNextLink href={page.url} onClick={closeMobileNav}>
                  <PageTitle>{page.title}</PageTitle>
                </StyledNextLink>
              ) : (
                <PageTitle>{page.title}</PageTitle>
              )}
              {page.links && (
                <LinksWrapper>
                  {page.links?.map((link) => {
                    const { Icon } = link;
                    return (
                      <React.Fragment key={link.url}>
                        <Icon />
                        <StyledNextLink
                          href={link.url}
                          onClick={closeMobileNav}
                        >
                          {link.label}
                        </StyledNextLink>
                      </React.Fragment>
                    );
                  })}
                </LinksWrapper>
              )}
            </PageWrapper>
          ))}
        </NavLinksContainer>
      </MenuContainer>
    </Wrapper>
  );
}

export default MobileMainNav;
