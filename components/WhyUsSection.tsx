import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../public/images/why-us.webp';
import { BREAKPOINTS } from 'styles/style-constants';
import { Theme } from 'styles/theme';

const Container = styled.section`
  background-color: ${Theme.color.black};
  display: flex;
  flex-flow: row-reverse nowrap;
  position: relative;
  height: 40vh;
  min-height: 300px;

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    height: 40vh;
    min-height: 500px;
  }
`;

const Content = styled.div`
  color: ${Theme.color.white};
  background-color: rgba(0, 0, 0, 0.75);
  position: relative;
  height: 100%;
  width: 100%;
  padding: 5rem 2rem;

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    width: 40%;
  }
`;

type WhyUsProps = {};

function WhyUsSection(props: WhyUsProps) {
  return (
    <Container>
      <Image
        alt="Drilling"
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />
      {/* <Content>
        <h2>Why Choose Us</h2>
      </Content> */}
    </Container>
  );
}

export default WhyUsSection;
