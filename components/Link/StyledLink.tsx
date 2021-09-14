import styled from 'styled-components';
import { Theme } from 'styles/theme';
import ExternalLinkIcon from './ExternalLinkIcon';

const ExternalLinkImg = styled(ExternalLinkIcon)`
  height: 0.8em;
  width: 0.8em;
  margin-left: 0.1em;
  stroke: currentColor;
`;

export const StyledLink = styled.a<{ size?: string }>`
  position: relative;
  background-color: transparent;
  color: var(--link-color, ${Theme.color.link});
  border: 0;
  box-shadow: 0px 2px 0px var(--link-color, ${Theme.color.link});
  font-size: ${({ size }) => size || '1em'};
  font-weight: 600;
  letter-spacing: 0.05rem;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;

  @media (hover: hover) {
    & {
      box-shadow: 0px 0px 0px var(--link-color, ${Theme.color.link});
      transition: box-shadow 300ms;
    }

    &:hover {
      box-shadow: 0px 2px 0px var(--link-color, ${Theme.color.link});
      transition: box-shadow 100ms;
    }
  }
`;

const LinkLabel = styled.span``;

type ExternalLinkProps = {
  label: string;
} & Omit<
  React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >, 'ref'>;

export function ExternalLink({
  label,
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
