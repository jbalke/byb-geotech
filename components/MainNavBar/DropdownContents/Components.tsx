import styled from 'styled-components';
import { Theme } from 'styles/theme';

export const Heading = styled.h3<{ noMarginBottom?: boolean; color?: string }>`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: ${({ noMarginBottom }) => (noMarginBottom ? 0 : '1rem')};
  color: ${({ color }) =>
    color
      ? `var(--color-${color})`
      : Theme.color
          .blue}; //https://dev.to/mapleleaf/indexing-objects-in-typescript-1cgi
`;

export const LinkList = styled.ul<{ marginLeft?: string }>`
  li {
    margin-bottom: 1rem;
  }

  li:last-of-type {
    margin-bottom: 0;
  }

  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
`;

export const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 13px;
  background-color: var(--blue);
  opacity: 0.8;
  display: inline-block;
`;

export const DropdownSection = styled.div`
  padding: var(--spacing-spacer);
  position: relative;
  z-index: 1;
`;
