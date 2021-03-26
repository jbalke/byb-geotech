// Misc styled components
import styled, { keyframes } from 'styled-components';
import { Theme } from '../../styles/theme';

// KEYFRAMES
export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

// WRAPPERS
export const Wrapper = styled.div<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ?? Theme.width.max};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
