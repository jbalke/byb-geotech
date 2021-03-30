import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { closeSidebar } from '../../actions/ui-actions';
import { useUIDispatch, useUIState } from '../../context/ui-context';
import { Theme } from '../../styles/theme';
import Button from '../Button';

const MenuCloseBtn = styled(Button)`
  align-self: flex-end;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${Theme.color.textBackground};
  color: ${Theme.color.text};
  transform: translateY(-100vh);
  transition: transform 300ms ease-in;
  will-change: transform, opacity;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  transform: translateY(-10000px);
  transition: transform 0ms 300ms;
  z-index: 999;

  @supports (backdrop-filter: blur(10px) brightness(0.6)) {
    background-color: transparent;
    backdrop-filter: blur(10px) brightness(0.6);
  }

  &.show {
    transform: translateY(0);
  }

  &.show ${MenuContainer} {
    transform: translateY(0);
    transition: transform 600ms ease-out;
  }
`;

type MobileMainNavProps = {};

function MobileMainNav(props: MobileMainNavProps) {
  const dispatch = useUIDispatch();
  const { isSidebarOpen } = useUIState();

  const closeMobileNav = () => dispatch(closeSidebar());

  return (
    <Wrapper className={`${isSidebarOpen ? 'show' : ''}`}>
      <MenuContainer>
        <MenuCloseBtn onClick={closeMobileNav} variant='outline'>
          <FaTimes />
        </MenuCloseBtn>
        <h1>MobileMainNav</h1>
      </MenuContainer>
    </Wrapper>
  );
}

export default MobileMainNav;
