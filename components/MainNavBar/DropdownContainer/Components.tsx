import styled, { keyframes } from 'styled-components';
import { promoteLayer } from './utils';

type KeyFrameProps = {
  animatingOut?: string;
  direction?: string;
};
const getDropdownRootKeyFrame = ({
  animatingOut,
  direction,
}: KeyFrameProps) => {
  if (!animatingOut && direction) return null;
  return keyframes`
  from {
    transform: ${animatingOut ? 'rotateX(0)' : 'rotateX(-15deg)'};
    opacity: ${animatingOut ? 1 : 0};
  }
  to {
    transform: ${animatingOut ? 'rotateX(-15deg)' : 'rotateX(0)'};
    opacity: ${animatingOut ? 0 : 1};
  }
`;
};

// export const DropdownRoot = styled.div<{ duration: number }>`
//   transform-origin: 0 0;
//   ${promoteLayer}
//   animation-name: ${getDropdownRootKeyFrame()};
//   animation-duration: ${(props) => props.duration}ms;
//   /* use 'forwards' to prevent flicker on leave animation */
//   animation-fill-mode: forwards;
//   /* flex styles will center the caret child component */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   top: -20px;
// `;

export const Caret = styled.div`
  border-color: transparent transparent var(--color-white);
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
  transform-origin: 0 0;
  background-color: var(--color-white);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  ${promoteLayer}
`;

export const AltBackground = styled.div<{ duration: number }>`
  background-color: var(--grey);
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  transform-origin: 0 0;
  z-index: 0;
  transition: transform ${(props) => props.duration}ms;
`;

export const InvertedDiv = styled.div<{ absolute?: boolean }>`
  ${promoteLayer}
  position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
  &:first-of-type {
    z-index: 1;
  }
  &:not(:first-of-type) {
    z-index: -1;
  }
`;
