import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Theme } from '../styles/theme';

const Container = styled.section`
  display: flex;
  flex-flow: row-reverse nowrap;
  position: relative;
  height: 40vh;
  min-height: 300px;

  @media screen and (min-width: ${(props) => props.theme.bp.tablet}) {
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

  @media screen and (min-width: ${(props) => props.theme.bp.tablet}) {
    width: 40%;
  }
`;

type WhyUsProps = {};

function WhyUsSection(props: WhyUsProps) {
  return (
    <Container>
      <Image
        alt='Drilling'
        src='/images/why-us.jpg'
        layout='fill'
        objectFit='cover'
        quality={50}
      />
      {/* <Content>
        <h2>Why Choose Us</h2>
      </Content> */}
    </Container>
  );
}

export default WhyUsSection;
