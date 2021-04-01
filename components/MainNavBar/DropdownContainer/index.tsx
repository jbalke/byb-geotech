import React, { ReactNode } from 'react';
import { Caret, DropdownBackground } from './Components';

type Props = { children: ReactNode };

function DropdownContainer({ children }: Props) {
  return (
    <div>
      <Caret />
      <DropdownBackground>{children}</DropdownBackground>
    </div>
  );
}

export default DropdownContainer;
