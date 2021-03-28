import styled, { css } from 'styled-components';
import { Theme } from 'styles/theme';

const Button = styled.button<{
  size?: 'sm' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'full' | 'pill';
  variant?: 'outline';
  margin?: string;
  shadow?: boolean;
  block?: boolean;
  borderWidth?: string;
}>`
  appearance: none;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  letter-spacing: 0.08em;
  color: ${Theme.color.white};
  background-color: ${Theme.color.primary};
  border: ${({ borderWidth }) =>
    borderWidth ? '0' : `${borderWidth ?? '1px'} solid ${Theme.color.white}`};
  margin: ${({ margin }) => margin || '0'};
  transition: background-color 0.25s, color 0.25s;
  cursor: pointer;

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  ${({ block }) =>
    block
      ? css`
          display: flex;
          width: 100%;
        `
      : css`
          display: inline-flex;
        `}

  ${({ variant }) => {
    if (variant === 'outline') {
      return css`
        background-color: transparent;
        color: ${Theme.color.primary};
        border-color: ${Theme.color.primary};
      `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          font-size: 0.75rem;
        `;
      case 'lg':
        return css`
          font-size: 1.5rem;
        `;
    }

    return css`
      font-size: 1.2rem;
    `;
  }}

  ${({ rounded }) => {
    switch (rounded) {
      case 'sm':
        return css`
          border-radius: 5px;
        `;
      case 'md':
        return css`
          border-radius: 10px;
        `;
      case 'lg':
        return css`
          border-radius: 15px;
        `;
      case 'full':
        return css`
          border-radius: 50%;
        `;
      case 'pill':
        return css`
          border-radius: 999px;
        `;
    }
  }}

  :hover {
    background-color: ${Theme.color.white};
    color: ${Theme.color.primary};
  }
`;

export default Button;
