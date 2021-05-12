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
  grid-template-columns: auto auto;
  place-items: center;
  gap: 2rem;
`;

const Underline = styled.span``;

type GetQuoteSectionProps = {};

function GetQuoteSection(props: GetQuoteSectionProps) {
  return (
    <Container>
      <Wrapper>
        <Layout>
          <div>
            <h2>
              Request a <span>FREE Quote</span>!
            </h2>
            <p>
              If you are looking for water to keep the yard green, top up the
              pool, or reduce the high cost of town water, contact us today for
              an obligation-free quote!
            </p>
          </div>
          <div>
            <StyledLinkButton
              variant='outline'
              borderWidth='1px'
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
