import React from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/theme';
import { StyledLinkButton } from './Button';
import { Wrapper } from './styled';

const Container = styled.section`
  background-color: ${Theme.color.darkGrey};
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

type Props = {};

function BoreSearchSection(props: Props) {
  return (
    <Container>
      <Wrapper padding='xxl'>
        <Layout>
          <div>
            <h2>
              Search for <span>Bores Near You!</span>
            </h2>
            <p>
              Want your own bore but have no idea whether you'll strike water?
              Try our FREE Bore Search to locate bores near you!
            </p>
          </div>
          <div>
            <StyledLinkButton
              size='lg'
              variant='outline-inverse'
              bgColor={Theme.color.darkGrey}
              borderWidth='2px'
              href='/bore-search'
            >
              Bore Search
            </StyledLinkButton>
          </div>
        </Layout>
      </Wrapper>
    </Container>
  );
}

export default BoreSearchSection;
