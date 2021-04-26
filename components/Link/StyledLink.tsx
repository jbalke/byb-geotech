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
  cursor: pointer;
  /* display: inline-flex; */
  font-size: ${({ size }) => size || '1em'};
  flex-flow: row nowrap;
  font-family: inherit;
  line-height: 1;

  &,
  &:active,
  &:visited {
    color: ${Theme.color.link};
    font-weight: 600;
    text-decoration: none;
  }

  &:hover {
    color: ${Theme.color.linkHover};
    transition: ${Theme.color.transition};
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
