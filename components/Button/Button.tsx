import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from 'styles/theme';
import Spinner from './three-dots.svg';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 1em;
  line-height: 1em;
`;

type FormButton = {
  type?: 'submit' | 'reset';
  onClick?: never;
};

type NonFormButton = {
  type?: 'button';
  onClick: () => void;
};

type ButtonProps = {
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
} & (FormButton | NonFormButton);

function BaseButton({
  className,
  isLoading = false,
  isDisabled = false,
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={className}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      type={type}
    >
      <Wrapper>{isLoading ? <Spinner height='100%' /> : children}</Wrapper>
    </button>
  );
}

const Button = styled(BaseButton)<{
  size?: 'sm' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'full' | 'pill';
  variant?: 'outline';
  margin?: string;
  shadow?: boolean;
  fullWidth?: boolean;
  borderWidth?: string;
}>`
  appearance: none;
  background-color: ${Theme.color.primary};
  border: ${({ borderWidth }) =>
    borderWidth ? `${borderWidth ?? '1px'} solid ${Theme.color.white}` : '0'};
  color: ${Theme.color.white};
  cursor: pointer;
  letter-spacing: 0.08em;
  margin: ${({ margin }) => margin || '0'};
  padding: 0.5em 1em;
  transition: background-color 0.25s, color 0.25s;

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          display: block;
          width: 100%;
        `
      : css`
          display: inline-block;
        `}

  ${({ variant }) => {
    if (variant === 'outline') {
      return css`
        background-color: transparent;
        color: ${Theme.color.primaryLight};
        border-color: ${Theme.color.primaryLight};
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
    background-color: ${Theme.color.primaryDark};
  }

  :disabled {
    filter: grayscale(70%);
    cursor: not-allowed;
  }
`;

export default Button;
