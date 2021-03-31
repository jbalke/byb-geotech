import styled from 'styled-components';
import { Theme } from 'styles/theme';

const SkipToMainLink = styled.a`
  position: absolute;
  top: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;

  :visited,
  :active {
    color: inherit;
  }

  :focus {
    color: ${Theme.color.text};
    background-color: ${Theme.color.textBackground};
    position: relative;
    top: 0;
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
