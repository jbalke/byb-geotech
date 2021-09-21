import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { BREAKPOINTS } from 'styles/style-constants';
import { StyledLinkButton } from './Button';
import { Wrapper } from './styled';

const Container = styled.section<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${Theme.color.white};
  font-size: 24px;
  padding-block: min(10vh, 5rem);

  p {
    font-weight: 200;
    line-height: 1.5;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto;
  place-items: center;
  gap: 1rem;

  h2 {
    color: ${Theme.color.white};
    text-align: center;
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    & {
      grid-template-columns: auto auto;
      gap: 2rem;

      h2 {
        text-align: unset;
      }
    }
  }
`;

type Props = {
  children: React.ReactNode;
  href: string;
  label: string;
  bgColor: string;
};

function PromotionSection({ children, href, label, bgColor }: Props) {
  return (
    <Container bgColor={bgColor}>
      <Wrapper>
        <Layout>
          {children}
          <StyledLinkButton
            size="lg"
            variant="outline-inverse"
            bgColor={bgColor}
            $borderWidth="2px"
            href={href}
          >
            {label}
          </StyledLinkButton>
        </Layout>
      </Wrapper>
    </Container>
  );
}

export default PromotionSection;
