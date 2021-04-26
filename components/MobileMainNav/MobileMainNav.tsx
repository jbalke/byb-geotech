import { closeSidebar } from 'actions/ui-actions';
import StyledNextLink from 'components/Link/StyledNextLink';
import { useUIDispatch, useUIState } from 'context/ui-context';
import { navLinks } from 'data/main-navigation';
import { motion } from 'framer-motion';
import React from 'react';
import { FaHome, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import Button from '../Button';

const HomeLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const MenuCloseBtn = styled(Button)`
  padding: 0.5rem;
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
  padding: 15px 15px 15vh 15px;
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
  gap: 5vh 0;
  grid-template-columns: 1fr;
`;

const NavSection = styled.div``;

const PageTitle = styled.h2`
  place-content: center;
  display: grid;
  font-size: clamp(1.3rem, 3.8vw, 1.9rem);
  gap: 0.25em;
  grid-template-columns: auto auto;
  margin: 0;
`;

const NavSectionContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  width: 100%;

  ${NavSection} + ${NavSection} {
    position: relative;

    ::before {
      content: '';
      position: absolute;
      top: 25%;
      left: -7.5px;
      width: 1px;
      height: 50%;
      background-color: rgb(204, 204, 204);
    }
  }

  ${PageTitle} + & {
    margin-top: 1.5vh;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const LinksWrapper = styled.div`
  align-items: start;
  color: ${Theme.color.link};
  display: grid;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  gap: 0.85em 0.25em;
  grid-template-columns: 20px auto;
  justify-content: center;
  margin: 0;
  margin-top: 0.7em;
  padding: 0;
`;

const SectionTitle = styled.h3`
  && {
    font-size: clamp(1.1rem, 3.5vw, 1.4rem);
    margin: 0;
    text-align: center;
  }
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
        <MenuCloseBtn size='lg' onClick={closeMobileNav} variant='outline'>
          <FaTimes />
        </MenuCloseBtn>
        <HomeLinkWrapper>
          <StyledNextLink size='3rem' onClick={closeMobileNav} href='/'>
            <FaHome />
          </StyledNextLink>
        </HomeLinkWrapper>
        <NavLinksContainer>
          {navLinks.map(({ title, href, sections, Icon }) => {
            return (
              <PageWrapper key={title}>
                {href && Icon ? (
                  <StyledNextLink href={href} onClick={closeMobileNav}>
                    <PageTitle>
                      <Icon /> {title}
                    </PageTitle>
                  </StyledNextLink>
                ) : (
                  <PageTitle>{title}</PageTitle>
                )}
                {sections && (
                  <NavSectionContainer>
                    {sections.map((section, index) => (
                      <NavSection key={index}>
                        {section.title && (
                          <SectionTitle>{section.title}</SectionTitle>
                        )}
                        <LinksWrapper>
                          {section.pages.map((page) => {
                            const { Icon } = page;
                            return (
                              <React.Fragment key={page.href}>
                                <Icon />
                                <StyledNextLink
                                  href={page.href}
                                  onClick={closeMobileNav}
                                >
                                  {page.title}
                                </StyledNextLink>
                              </React.Fragment>
                            );
                          })}
                        </LinksWrapper>
                      </NavSection>
                    ))}
                  </NavSectionContainer>
                )}
              </PageWrapper>
            );
          })}
        </NavLinksContainer>
      </MenuContainer>
    </Wrapper>
  );
}

export default MobileMainNav;
