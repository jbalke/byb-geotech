import React from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/theme';
import { StyledLinkButton } from './Button';
import { Wrapper } from './styled';

const Container = styled.section`
  background-color: ${Theme.color.primaryDark};
  color: ${Theme.color.white};
  font-size: 24px;

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
    text-align: center;
  }

  @media screen and (min-width: ${(props) => props.theme.bp.tablet}) {
    & {
      grid-template-columns: auto auto;
      gap: 2rem;

      h2 {
        text-align: unset;
      }
    }
  }
`;

type GetQuoteSectionProps = {};

function GetQuoteSection(props: GetQuoteSectionProps) {
  return (
    <Container>
      <Wrapper padding='xxl'>
        <Layout>
          <div>
            <h2>
              Request a <span>FREE Quote</span>!
            </h2>
            <p>
              We can help you with all your drilling needs. We also supply and
              repair pumps. Contact us today for an obligation-free quote!
            </p>
          </div>
          <div>
            <StyledLinkButton
              size='lg'
              variant='outline-inverse'
              borderWidth='2px'
              href='/request-a-quote'
            >
              Request A Quote
            </StyledLinkButton>
          </div>
        </Layout>
      </Wrapper>
    </Container>
  );
}

export default GetQuoteSection;
