import React from 'react';
import styled from 'styled-components';

const WarningContainer = styled.div`
  display: flex;
  align-items: center;
  color: red;
  font-size: 1rem;
  margin-top: 5px;
`;
const StyledMessage = styled.span`
  font-weight: 600;
  margin-left: 5px;
`;

type Props = { message: string };

const InputWarning = ({ message }: Props) => {
  return (
    <WarningContainer>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.5em'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        />
      </svg>
      <StyledMessage>{message}</StyledMessage>
    </WarningContainer>
  );
};

export default InputWarning;
