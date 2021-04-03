import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

const NavbarItemTitle = styled.button<{ link?: boolean }>`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  font-size: 18px;
  letter-spacing: 0.12em;
  padding: 2rem 1.5rem 1.2rem 1.5rem;
  color: ${Theme.color.white};
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: ${({ link }) => (link ? 'pointer' : 'default')};
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  /* position: relative; */
  z-index: 2;
`;

const NavbarItemEl = styled.li`
  position: relative;

  /* & + & {
    margin-left: 20px;
  } */
`;

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const TitleTextLineContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  overflow: hidden;
  bottom: -5px;
`;

const TitleTextLine = styled(motion.div)`
  position: absolute;
  background-color: ${Theme.color.white};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const TitleWrapper = styled.div`
  position: relative;
`;

type Props = {
  onMouseEnter: (i: number) => void;
  index: number;
  title: string;
  href?: string;
  children: ReactNode;
};

const labelVariants = {
  active: { x: 0, opacity: 1, transition: { type: 'spring', damping: 10 } },
  start: { x: -102, opacity: 0 },
  end: { x: [0, 102, -102], opacity: [1, 0, 0], transition: { duration: 0.7 } },
};

function NavbarItem({ onMouseEnter, index, title, href, children }: Props) {
  const router = useRouter();

  const handleMouseEnter = () => {
    onMouseEnter(index);
    setFocusState('active');
  };
  const handleMouseLeave = () => setFocusState('end');
  const [focusState, setFocusState] = useState<'start' | 'active' | 'end'>(
    'start'
  );
  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <NavbarItemEl
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      <NavbarItemTitle onClick={handleClick} link={!!href}>
        <TitleWrapper>
          <span>{title}</span>
          <TitleTextLineContainer>
            <TitleTextLine
              animate={focusState}
              variants={labelVariants}
            ></TitleTextLine>
          </TitleTextLineContainer>
        </TitleWrapper>
      </NavbarItemTitle>
      <DropdownSlot>{children}</DropdownSlot>
    </NavbarItemEl>
  );
}

export default NavbarItem;
