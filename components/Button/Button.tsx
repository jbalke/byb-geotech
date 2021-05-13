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
  variant?: 'outline' | 'outline-inverse';
  margin?: string;
  shadow?: boolean;
  fullWidth?: boolean;
  borderWidth?: string;
}>`
  align-items: center;
  appearance: none;
  border-style: solid;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 0.08em;
  margin: ${({ margin }) => margin || '0'};
  padding: 0.5em 1em;
  position: relative;
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

  ${({ variant, borderWidth }) => {
    switch (variant) {
      case 'outline-inverse':
        return css`
          background-color: transparent;
          color: ${Theme.color.white};
          border-color: ${Theme.color.white};
          border-width: ${borderWidth ? borderWidth : '1px'};

          &:focus,
          &:hover {
            background-color: ${Theme.color.white};
            color: ${Theme.color.primary};
            border-color: ${Theme.color.primary};

          `;

      case 'outline':
        return css`
          background-color: transparent;
          color: ${Theme.color.primary};
          border-color: ${Theme.color.primary};
          border-width: ${borderWidth ? borderWidth : '1px'};

          &:focus,
          &:hover {
            background-color: ${Theme.color.white};
            color: ${Theme.color.primary};
          }
        `;

      default:
        return css`
          background-color: ${Theme.color.primary};
          color: ${Theme.color.white};
          border-color: ${Theme.color.primary};
          border-width: ${borderWidth ? borderWidth : '0'};

          &:focus,
          &:hover {
            background-color: ${Theme.color.primaryDark};
            color: ${Theme.color.white};
          }
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
      default:
        return css`
          font-size: 1.2rem;
        `;
    }
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

  &:disabled {
    filter: grayscale(70%);
    cursor: not-allowed;
  }
`;

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const LinkButton = ({ href, children, className }: LinkProps) => {
  return (
    <Link href={href} passHref>
      <a className={className}>{children}</a>
    </Link>
  );
};

const StyledLinkButton = styled(LinkButton)`
  ${shared}
`;

const Button = styled(BaseButton)`
  ${shared}
`;

export { Button as default, StyledLinkButton };
