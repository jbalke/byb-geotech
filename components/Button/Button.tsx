import Link from 'next/link';
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

const shared = css<{
  size?: 'sm' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'full' | 'pill';
  variant?: 'outline';
  margin?: string;
  shadow?: boolean;
  fullWidth?: boolean;
  borderWidth?: string;
}>`
  align-items: center;
  appearance: none;
  background-color: ${Theme.color.primary};
  border: ${({ borderWidth }) =>
    borderWidth ? `${borderWidth ?? '1px'} solid ${Theme.color.white}` : '0'};
  color: ${Theme.color.white};
  cursor: pointer;
  justify-content: center;
  letter-spacing: 0.08em;
  margin: ${({ margin }) => margin || '0'};
  padding: 0.5em 1em;
  text-decoration: none;
  transition: background-color 0.25s, color 0.25s;

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  ${({ fullWidth }) =>
    fullWidth
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
    background-color: ${({ variant }) =>
      variant === 'outline' ? Theme.color.primary : Theme.color.primaryDark};
    color: ${Theme.color.white};
  }

  :disabled {
    filter: grayscale(70%);
    cursor: not-allowed;
  }
`;

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const StyledLink = styled.a`
  ${shared}
`;

export const NextLinkButton = ({ href, children }: LinkProps) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

const Button = styled(BaseButton)`
  ${shared}
`;

export default Button;
