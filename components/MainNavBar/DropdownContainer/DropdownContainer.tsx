import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { Caret, DropdownBackground } from './Components';

const dropdownVariants = {
  initial: { opacity: 0, transition: { duration: 0.2 } },
  active: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

type Props = {
  children: ReactNode;
  withCaret?: boolean;
};

function DropdownContainer({ children, withCaret }: Props) {
  return (
    <motion.div
      layoutId='dropdown'
      initial={dropdownVariants.initial}
      animate={dropdownVariants.active}
      exit={dropdownVariants.exit}
      style={{
        position: 'relative',
        backgroundColor: 'transparent',
        paddingTop: '15px',
      }}
    >
      {withCaret && <Caret />}
      <DropdownBackground>{children}</DropdownBackground>
    </motion.div>
  );
}

export default DropdownContainer;
