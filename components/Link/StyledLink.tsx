import styled from 'styled-components';
import { Theme } from 'styles/theme';
import ExternalLinkSVG from './external-link.svg';

const ExternalLinkImg = styled(ExternalLinkSVG)`
  height: 0.8em;
  width: 0.8em;
  margin-left: 0.1em;
`;

export const StyledLink = styled.a<{ size?: string }>`
  /* align-items: center; */
  appearance: none;
  background-color: transparent;
  border: 0;
  box-shadow: 0px 2px 0px ${Theme.color.link};
  cursor: pointer;
  /* display: inline-flex; */
  font-size: ${({ size }) => size || '1em'};
  flex-flow: row nowrap;
  font-family: inherit;
  letter-spacing: 0.05rem;
  line-height: 1;
  position: relative;
  white-space: nowrap;

  &,
  &:active,
  &:visited {
    color: ${Theme.color.link};
    font-weight: 600;
    text-decoration: none;
  }

  @media (hover: hover) {
    & {
      box-shadow: 0px 0px 0px ${Theme.color.link};
      transition: box-shadow 300ms;
    }

    &:hover {
      box-shadow: 0px 2px 0px ${Theme.color.link};
      transition: box-shadow 100ms;
    }
  }
`;

const LinkLabel = styled.span``;

type ExternalLinkProps = {
  label: string;
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function ExternalLink({
  label,
  ref,
  rel = 'noreferrer noopener',
  ...props
}: ExternalLinkProps) {
  return (
    <StyledLink {...props}>
      <LinkLabel>
        {label}
        <ExternalLinkImg />
      </LinkLabel>
    </StyledLink>
  );
}
