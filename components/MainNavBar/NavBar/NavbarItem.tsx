import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { ReactNode, useState } from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { NavbarItemTitle } from './NavbarItemTitle';

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-right: 0.25em;
`;

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const NavbarItemEl = styled.li`
  position: relative;
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
  Icon?: IconType;
  children: ReactNode;
};

const labelVariants = {
  active: { x: 0, opacity: 1, transition: { type: 'spring', damping: 10 } },
  start: { x: -102, opacity: 0 },
  end: { x: [0, 102, -102], opacity: [1, 0, 0], transition: { duration: 0.7 } },
};

function NavbarItem({
  onMouseEnter,
  index,
  title,
  href,
  Icon,
  children,
}: Props) {
  const handleMouseEnter = () => {
    onMouseEnter(index);
    setFocusState('active');
  };
  const handleMouseLeave = () => setFocusState('end');
  const [focusState, setFocusState] = useState<'start' | 'active' | 'end'>(
    'start'
  );

  return (
    <NavbarItemEl
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      <NavbarItemTitle href={href}>
        {Icon && (
          <IconWrapper>
            <Icon />
          </IconWrapper>
        )}
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
      {children && <DropdownSlot>{children}</DropdownSlot>}
    </NavbarItemEl>
  );
}

export default NavbarItem;
