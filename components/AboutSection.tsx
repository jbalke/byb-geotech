import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../styles/style-constants';
import { Theme } from '../styles/theme';
import { Wrapper } from './styled';

const Container = styled.section`
  background-color: ${Theme.color.textBackground};
  color: ${Theme.color.text};
  font-size: 12px;
  padding-block: min(10vh, 5rem);

  h2 {
    font-size: 3em;
    color: ${Theme.color.primaryDark};
    margin: 0 0 1em 0;
  }

  h2 span {
    color: ${Theme.color.text};
    font-weight: 400;
  }

  p {
    background-color: ${Theme.color.primaryLightest};
    color: ${Theme.color.primaryDark};
    font-family: 'Public Sans';
    font-weight: 300;
    font-size: 1.75em;
    line-height: 1.3em;
    padding: 1em;
    margin: 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    & {
      font-size: 16px;
    }
  }
`;

type AboutSectionProps = {};

function AboutSection(props: AboutSectionProps) {
  return (
    <Container>
      <Wrapper maxWidth="1400px">
        <h2>
          Water Bore <span>Drilling</span>
        </h2>
        <p>
          With our small drilling rig mounted on the back of a very manoeuvrable
          light truck, we can drill in your back yard (or front yard) to find
          water for any purpose. With our large drilling rig (operated by our
          sister company) we can drill your rock bore for stock, domestic, and
          irrigation use (up to 300mm diameter).
        </p>
      </Wrapper>
    </Container>
  );
}

export default AboutSection;
