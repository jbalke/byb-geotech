import styled from 'styled-components';
import { Theme } from 'styles/theme';

export const Caret = styled.div`
  border-color: transparent transparent ${Theme.color.textBackground};
  border-style: solid;
  border-width: 10px;
  display: block;
  height: 0;
  left: calc(50% - 10px);
  position: absolute;
  top: -20px;
  width: 0;
  z-index: 1;
`;

export const DropdownBackground = styled.div`
  background-color: ${Theme.color.textBackground};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: ${Theme.color.navDropdownBoxShadow};
  padding: 1rem;
  white-space: nowrap;
`;
