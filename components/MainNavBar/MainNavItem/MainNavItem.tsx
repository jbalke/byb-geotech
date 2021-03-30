import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactElement, ReactNode, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

const MainNavLink = styled.a`
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

const MainNavLinkDropdown = styled(motion.div)`
  background-color: ${Theme.color.primaryDark};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;

  :hover ${MainNavLink} {
    color: ${Theme.color.white};
  }
`;

const dropdownVariants = {
  open: {
    display: 'block',
    scaleY: 1,
    originY: 0,
    transition: {
      type: 'spring',
      duration: 0.25,
      when: 'beforeChildren',
    },
  },
  closed: {
    scaleY: 0,
    transition: { duration: 0.1, when: 'afterChildren' },
    transitionEnd: { display: 'none' },
  },
};

type NavigationItemProps = {
  label: string;
  href?: string;
  dropdownContent?: ReactNode;
};

function MainNavItem({
  label,
  href = '#',
  dropdownContent,
}: NavigationItemProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <Wrapper onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <Link href={href} passHref>
        <MainNavLink>
          <MainNavLinkText>{label}</MainNavLinkText>
          {dropdownContent && <MainNavLinkChevronDown />}
        </MainNavLink>
      </Link>
      {dropdownContent && (
        <MainNavLinkDropdown
          variants={dropdownVariants}
          animate={isOpen ? 'open' : 'closed'}
        >
          {dropdownContent}
        </MainNavLinkDropdown>
      )}
    </Wrapper>
  );
}

export default MainNavItem;
