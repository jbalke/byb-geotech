import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { closeSidebar } from '../../actions/ui-actions';
import { useUIDispatch, useUIState } from '../../context/ui-context';
import { Theme } from '../../styles/theme';
import Button from '../Button';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 5vmin;
  background-color: transparent;
  backdrop-filter: blur(10px) brightness(0.6);
  opacity: 0;
  transform: translateY(-100vh);
  transition: transform 0ms 150ms ease-in, opacity 150ms ease-in;
  will-change: transform, opacity;
  z-index: 999;

  &.show {
    opacity: 1;
    transition: opacity 200ms ease-out;
    transform: translateY(0);
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  padding: 15px;
  max-width: ${Theme.width.mobileMenuMax};
  margin: 0 auto;
  overflow: hidden;
  background-color: ${Theme.color.textBackground};
  color: ${Theme.color.text};
`;

type MobileMainNavProps = {};

function MobileMainNav(props: MobileMainNavProps) {
  const dispatch = useUIDispatch();
  const { isSidebarOpen } = useUIState();

  const closeMobileNav = () => dispatch(closeSidebar());

  return (
    <Wrapper className={`${isSidebarOpen ? 'show' : ''}`}>
      <MenuContainer>
        <Button onClick={closeMobileNav} variant='outline'>
          <FaTimes />
        </Button>
        <h1>MobileMainNav</h1>
      </MenuContainer>
    </Wrapper>
  );
}

export default MobileMainNav;
