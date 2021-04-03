// @ts-nocheck
import { motion, AnimatePresence } from 'framer-motion';
import React, { ReactNode } from 'react';
import { Caret, DropdownBackground } from './Components';

const getFirstDropdownSectionHeight = (el) => {
  if (
    !el ||
    !el.querySelector ||
    !el.querySelector('*[data-first-dropdown-section]')
  )
    return 0;
  return el.querySelector('*[data-first-dropdown-section]').offsetHeight;
};

const updateAltBackground = ({
  altBackground,
  prevDropdown,
  currentDropdown,
}) => {
  const prevHeight = getFirstDropdownSectionHeight(prevDropdown);
  const currentHeight = getFirstDropdownSectionHeight(currentDropdown);

  const immediateSetTranslateY = (el, translateY) => {
    el.style.transform = `translateY(${translateY}px)`;
    el.style.transition = 'transform 0s';
    requestAnimationFrame(() => (el.style.transitionDuration = ''));
  };

  if (prevHeight) {
    // transition the grey ("alt") background from its previous height to its current height
    immediateSetTranslateY(altBackground, prevHeight);
    requestAnimationFrame(() => {
      altBackground.style.transform = `translateY(${currentHeight}px)`;
    });
  } else {
    // just immediately set the background to the appropriate height
    // since we don't have a stored value
    immediateSetTranslateY(altBackground, currentHeight);
  }
};

const dropdownVariants = { open: { opacity: 1 }, closed: { opacity: 0 } };

type Props = {
  children: ReactNode;
  withCaret?: boolean;
  index: number;
  prevIndex?: number;
};

function DropdownContainer({ children, withCaret, index, prevIndex }: Props) {
  return (
    <motion.div
      layoutId='dropdown'
      // key={index}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      {withCaret && <Caret />}
      <DropdownBackground>{children}</DropdownBackground>
    </motion.div>
  );
}

export default DropdownContainer;
