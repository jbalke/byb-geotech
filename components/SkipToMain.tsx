import styled from 'styled-components';
import { Theme } from 'styles/theme';

const SkipToMainLink = styled.a`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  appearance: none;

  :visited,
  :active {
    color: initial;
  }

  :focus {
    color: ${Theme.color.text};
    background-color: ${Theme.color.textBackground};
    position: relative;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
  }
`;

type Props = {
  href: string;
};

function SkipToMain({ href }: Props) {
  return <SkipToMainLink href={href}>Skip to main content</SkipToMainLink>;
}

export default SkipToMain;
