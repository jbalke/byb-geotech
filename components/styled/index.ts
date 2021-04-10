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
  position: relative;
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

export const Message = styled.div<{
  type?: 'success' | 'danger' | 'info' | 'warning';
}>`
  ${({ type }) => {
    switch (type) {
      case 'success':
        return css`
          color: ${Theme.color.successText};
          background-color: ${Theme.color.success};
        `;
      case 'danger':
        return css`
          color: ${Theme.color.dangerText};
          background-color: ${Theme.color.danger};
        `;
      case 'info':
        return css`
          color: ${Theme.color.infoText};
          background-color: ${Theme.color.info};
        `;
      case 'warning':
        return css`
          color: ${Theme.color.warningText};
          background-color: ${Theme.color.warning};
        `;
      default:
        return css`
          color: ${Theme.color.infoText};
          background-color: ${Theme.color.info};
        `;
    }
  }}

  margin: ${Theme.spacing.m} 0;
  padding: 1em;
`;
