// Misc styled components
import styled, { css } from 'styled-components';
import { Theme } from 'styles/theme';
import Button from '../Button';

// WRAPPERS
export const Wrapper = styled.div<{
  row?: boolean;
  maxWidth?: string;
  main?: boolean;
  gap?: string;
  padding?: 'xl' | 'xxl';
}>`
  display: flex;
  flex-flow: ${({ row }) => (row ? 'row wrap' : 'column')};
  gap: ${({ gap }) => gap ?? '0'};
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth ?? Theme.width.max};
  position: relative;
  width: 100%;

  ${({ padding }) => {
    switch (padding) {
      case 'xl':
        return css`
          padding: ${Theme.spacing.xl} ${Theme.spacing.l}
            calc(${Theme.spacing.xl} * 2) ${Theme.spacing.l};
        `;
      case 'xxl':
        return css`
          padding: ${Theme.spacing.xxl} ${Theme.spacing.l}
            calc(${Theme.spacing.xxl} * 2) ${Theme.spacing.l};
        `;
      default:
        return css`
          padding: ${Theme.spacing.l} ${Theme.spacing.l};
        `;
    }
  }}
  ${({ main }) =>
    main &&
    css`
      min-height: 50vh;
    `}
`;

export const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  :visited,
  :active {
    color: inherit;
  }
`;

export const Message = styled.div.attrs((props) => ({ role: 'alert' }))<{
  type?: 'success' | 'danger' | 'info' | 'warning';
}>`
  ${({ type }) => {
    switch (type) {
      case 'success':
        return css`
          color: ${Theme.color.successText};
          background-color: ${Theme.color.success};
        `;
      case 'danger':
        return css`
          color: ${Theme.color.dangerText};
          background-color: ${Theme.color.danger};
        `;
      case 'info':
        return css`
          color: ${Theme.color.infoText};
          background-color: ${Theme.color.info};
        `;
      case 'warning':
        return css`
          color: ${Theme.color.warningText};
          background-color: ${Theme.color.warning};
        `;
      default:
        return css`
          color: ${Theme.color.infoText};
          background-color: ${Theme.color.info};
        `;
    }
  }}

  margin: ${Theme.spacing.m} 0;
  padding: 1em;
`;

export const StyledLabel = styled.label`
  display: block;
  font-family: 'Rubik';

  &:not(:first-of-type) {
    margin-top: 1rem;
  }
`;

export const StyledInput = styled.input`
  display: block;
  font-family: 'Public Sans';
  font-size: inherit;
  width: 100%;
  padding: 0.5em;
  border: solid 1px rgb(204, 204, 204);
  border-radius: 4px;
  transition: border-color 0.1s;

  &:focus {
    border: solid 1px ${Theme.color.primary};
    box-shadow: 0 0 0 1px ${Theme.color.primary};
    transition: border-color 0.3s;
    outline: none;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const StyledTextarea = styled.textarea`
  display: block;
  font-family: 'Public Sans';
  font-size: inherit;
  width: 100%;
  padding: 0.5em;
  border: solid 1px rgb(204, 204, 204);
  border-radius: 4px;
  transition: border-color 0.1s;

  &:focus {
    border: solid 1px ${Theme.color.primary};
    box-shadow: 0 0 0 1px ${Theme.color.primary};
    transition: border-color 0.3s;
    outline: none;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const SubmitButton = styled(Button).attrs({ type: 'submit' })`
  :active {
    transform: translateY(1px);
    filter: saturate(150%);
  }

  &&:disabled {
    filter: none;
  }
`;

export const InputSubtext = styled.span`
  display: inline-block;
  font-family: 'Public Sans';
  font-style: italic;
  font-size: 0.75em;
  font-weight: 600;
  color: ${Theme.color.grey};
  line-height: 130%;
  letter-spacing: 0.05em;
`;

export const Disclaimer = styled.section`
  border: 1px solid ${Theme.color.primary};
  color: ${Theme.color.textAside};
  font-size: 0.8rem;
  line-height: 1.2em;
  padding: 1em;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;