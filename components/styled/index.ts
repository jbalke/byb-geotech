// Misc styled components
import styled, { keyframes, css } from 'styled-components';
import { Theme } from 'styles/theme';

// KEYFRAMES
export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const FadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

// WRAPPERS
export const Wrapper = styled.div<{ maxWidth?: string; main?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth ?? Theme.width.max};
  width: 100%;

  ${({ main }) =>
    main &&
    css`
      min-height: 100vh;
    `}
`;

export const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  :visited,
  :active {
    color: inherit;
  }
`;
