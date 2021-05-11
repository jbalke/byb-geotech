import React from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/theme';
import ServiceCard from './ServiceCard';

const Container = styled.section``;

const SectionBanner = styled.div`
  background-color: ${Theme.color.primaryDark};
  color: ${Theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionTitleContainer = styled.div`
  margin: ${Theme.spacing.m} 0;
  position: relative;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin: ${Theme.spacing.l} 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin: 0;
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    font-size: 2.5rem;
  }
`;

const TitleUnderline = styled.div`
  background-color: ${Theme.color.white};
  height: 2px;
  width: 50%;
  margin: ${Theme.spacing.m} auto 0;
  top: 100%;
  left: 50%;
`;

const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
`;

type ServicesSectionProps = {};

function ServicesSection(props: ServicesSectionProps) {
  return (
    <Container>
      <SectionBanner>
        <SectionTitleContainer>
          <SectionTitle>Services</SectionTitle>
          <TitleUnderline />
        </SectionTitleContainer>
      </SectionBanner>
      <ServiceCards>
        <ServiceCard
          title='Bore Drilling & Cleaning'
          href='/services/drilling'
          imageSrc='/images/backyard-bore.webp'
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            excepturi ducimus expedita nam nisi sit, numquam deleniti maiores
            eveniet. Totam.
          </p>
        </ServiceCard>
        <ServiceCard
          title='Pump Supply & Repairs'
          href='/services/drilling'
          imageSrc='/images/pump.webp'
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            excepturi ducimus expedita nam nisi sit, numquam deleniti maiores
            eveniet. Totam.
          </p>
        </ServiceCard>
        <ServiceCard
          title='Geotechnical Drilling'
          href='/services/drilling'
          imageSrc='/images/geotech.webp'
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            excepturi ducimus expedita nam nisi sit, numquam deleniti maiores
            eveniet. Totam.
          </p>
        </ServiceCard>
      </ServiceCards>
    </Container>
  );
}

export default ServicesSection;
