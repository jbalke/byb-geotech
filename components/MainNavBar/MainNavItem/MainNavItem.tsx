import React, { ReactElement, ReactNode, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

const MainNavLink = styled.a.attrs({
  href: '#',
  onClick: (e) => e.preventDefault(),
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 3px 5px;
  color: ${Theme.color.primaryLight};
  text-decoration: none;
  text-transform: capitalize;
`;

const MainNavLinkText = styled.span`
  line-height: 1;
`;

const MainNavLinkChevronDown = styled(BsChevronDown)`
  margin-left: 0.25em;
`;

const MainNavLinkDropdown = styled.div`
  background-color: ${Theme.color.primaryDark};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: none;
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 100%;
  transform: scaleY(0);
  transform-origin: top center;
  will-change: transform;
  transition: transform 100ms 50ms ease-in;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);

  & > * {
    opacity: 0;
    will-change: opacity;
    transition: opacity 50ms ease-in;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  :hover ${MainNavLink} {
    color: ${Theme.color.white};
  }

  :hover
    ${MainNavLinkDropdown},
    &.focus
    ${MainNavLinkDropdown},
    :focus-within
    ${MainNavLinkDropdown} {
    display: block;
    transition: transform 200ms ease-out;
    transform: scaleY(1);
  }

  :hover ${MainNavLinkDropdown} > *,
  &.focus ${MainNavLinkDropdown} > *,
  :focus-within ${MainNavLinkDropdown} > * {
    opacity: 1;
    transition: opacity 50ms 200ms ease-out;
  }
`;

type NavigationItemProps = {
  label: string;
  dropdownContent: ReactNode;
};

function MainNavItem({
  label,
  dropdownContent,
}: NavigationItemProps): ReactElement {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Wrapper className={`${isFocused ? 'focus' : ''}`}>
      <MainNavLink onFocus={handleFocus} onBlur={handleBlur}>
        <MainNavLinkText>{label}</MainNavLinkText>
        <MainNavLinkChevronDown />
      </MainNavLink>
      <MainNavLinkDropdown>{dropdownContent}</MainNavLinkDropdown>
    </Wrapper>
  );
}

export default MainNavItem;
