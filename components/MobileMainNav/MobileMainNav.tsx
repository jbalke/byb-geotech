import { closeSidebar } from 'actions/ui-actions';
import { useUIDispatch, useUIState } from 'context/ui-context';
import navLinks from 'data/main-navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaTimes, FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import Button from '../Button';
import { UnstyledLink } from '../styled';

const MenuCloseBtn = styled(Button)`
  align-self: flex-end;
`;

const MenuContainer = styled(motion.div)`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: ${(props) => props.theme.bp.tablet};
  margin: 0 auto;
  min-height: calc(100vh - 10px);
  padding: 10px;
  border-radius: 15px;
  overflow-x: hidden;
  background-color: ${Theme.color.textBackground};
  color: ${Theme.color.text};
  overscroll-behavior: contain;
`;

const Wrapper = styled(motion.div)`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  flex-flow: column nowrap;
  height: 100vh;
  position: fixed;
  padding: 5px;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 999;

  @supports (backdrop-filter: blur(10px) brightness(0.6)) {
    background-color: transparent;
    backdrop-filter: blur(10px) brightness(0.6);
  }
`;

const NavLinksContainer = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr 1fr;
  align-items: start;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  h2 {
    text-align: center;
  }
`;

const LinksWrapper = styled.ul`
  display: grid;
  gap: 0.5em 0.25em;
  grid-template-columns: 20px auto;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  a {
    padding: 0.2em;
    color: inherit;
    text-transform: capitalize;
    text-decoration: none;

    :active,
    :visited {
      color: currentColor;
    }
  }
`;

const HomeLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const HomeLink = styled(UnstyledLink)`
  font-size: 2rem;
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
          <Link href='/' passHref>
            <HomeLink onClick={closeMobileNav}>
              <FaHome />
            </HomeLink>
          </Link>
        </HomeLinkWrapper>
        <NavLinksContainer>
          {navLinks.map((page) => (
            <PageWrapper key={page.title}>
              <h2>{page.title}</h2>
              <LinksWrapper>
                {page.links?.map((link) => {
                  const { Icon } = link;
                  return (
                    <React.Fragment key={link.url}>
                      <Icon />
                      <Link href={link.url}>
                        <a onClick={closeMobileNav}>{link.label}</a>
                      </Link>
                    </React.Fragment>
                  );
                })}
              </LinksWrapper>
            </PageWrapper>
          ))}
        </NavLinksContainer>
      </MenuContainer>
    </Wrapper>
  );
}

export default MobileMainNav;
