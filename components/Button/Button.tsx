import Link from 'next/link';
import React, { RefObject } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from 'styles/theme';
import Spinner from './Spinner';

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

type ButtonStyleProps = {
  size?: 'sm' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'full' | 'pill';
  variant?: 'outline' | 'outline-inverse';
  bgColor?: string;
  margin?: string;
  shadow?: boolean;
  fullWidth?: boolean;
  borderWidth?: string;
};

type ButtonProps = {
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
} & ButtonStyleProps &
  (FormButton | NonFormButton) &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

// eslint-disable-next-line react/display-name
const BaseButton = React.forwardRef(
  (
    {
      className,
      isLoading = false,
      isDisabled = false,
      children,
      onClick,
      type = 'button',
      fullWidth,
      borderWidth,
      margin,
      ...buttonProps
    }: ButtonProps,
    ref,
  ) => (
    <button
      ref={ref as RefObject<HTMLButtonElement>}
      className={className}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      type={type}
      {...buttonProps}
    >
      <Wrapper>
        {isLoading ? <Spinner height="100%" fill="#fff" /> : children}
      </Wrapper>
    </button>
  ),
);

const shared = css<ButtonStyleProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin || '0'};
  letter-spacing: 0.08em;
  text-decoration: none;
  border-style: solid;
  transition: background-color 0.25s, color 0.25s;
  cursor: pointer;

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

  ${({ variant, borderWidth, bgColor }) => {
    switch (variant) {
      case 'outline-inverse':
        return css`
          background-color: transparent;
          color: var(--fg, ${Theme.color.white});
          border-color: var(--fg, ${Theme.color.white});
          border-width: ${borderWidth ? borderWidth : '1px'};
          text-shadow: 1px 1px 2px rgb(0 0 0 / 50%);

          &:focus,
          &:hover {
            background-color: var(--fg, ${Theme.color.white});
            color: var(--focus-fg, ${bgColor ? bgColor : Theme.color.primary});
            border-color: var(--fg, ${Theme.color.white});
            text-shadow: none;
          }
        `;

      case 'outline':
        return css`
          background-color: transparent;
          color: var(--fg, ${Theme.color.primary});
          border-color: var(--fg, ${Theme.color.primary});
          border-width: ${borderWidth ? borderWidth : '1px'};

          &:focus,
          &:hover {
            background-color: var(--fg, ${Theme.color.primary});
            color: ${Theme.color.white};
          }
        `;

      default:
        return css`
          background-color: ${Theme.color.primary};
          color: ${Theme.color.white};
          border-color: ${Theme.color.primary};
          border-width: ${borderWidth ? borderWidth : '0'};
          text-shadow: 1px 1px 2px rgb(0 0 0 / 50%);

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
          padding: 0.5em 1em;
          font-size: 1rem;
          font-weight: 600;
        `;
      case 'lg':
        return css`
          padding: 1em 1.25em;
          font-size: 1.5rem;
          font-weight: 600;
        `;
      default:
        return css`
          padding: 1em 1.25em;
          font-size: 1.2rem;
          font-weight: 600;
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
