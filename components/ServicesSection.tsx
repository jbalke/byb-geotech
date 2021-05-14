import React from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/theme';
import ServiceCard from './ServiceCard';

const Container = styled.section``;

const SectionBanner = styled.div`
  background-color: ${Theme.color.primaryDark};
  color: ${Theme.color.white};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: ${Theme.spacing.l};
`;

const SectionTitleContainer = styled.div`
  margin: 0;
  position: relative;

  /* @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin: 0;
  } */
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

const SectionSubText = styled.p`
  padding: 1em;
  border: 1px solid ${Theme.color.white};
  color: ${Theme.color.white};
  font-size: 0.8rem;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  background-color: ${Theme.color.primaryDark};
  background-image: url('/images/chevron.svg');
  background-position: 100% 100%;
  background-size: 43%;
  background-repeat: no-repeat;
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
        <SectionSubText>
          We understand that you may not have a lot of experience with water
          bores or with troubleshooting pumps and that's why we created the
          individual Learn More pages below and our Help and Advice pages with
          lots of information, pictures, a video, and answers to your common
          questions. Included on those pages is what is required from you and us
          prior to, on the day and after drilling or cleaning, click appropriate
          Learn More below or go straight to our Help & Advice page.
        </SectionSubText>
      </SectionBanner>
      <ServiceCards>
        <ServiceCard
          title='Bore Drilling & Cleaning'
          href='/services/drilling'
          imageSrc='/images/backyard-bore.webp'
        >
          <p>
            If you are looking for water to keep the yard green, top up the
            pool, or reduce the high cost of town water, we can come and drill
            for water in your backyard (or front yard), saving you money.
          </p>
        </ServiceCard>
        <ServiceCard
          title='Pump Supply & Repairs'
          href='/services/drilling'
          imageSrc='/images/pump.webp'
        >
          <p>
            Do you require a new pump (surface, pressure, jet, submersible,
            solar)? Has your existing pump lost water pressure, is running but
            no water is coming out, or it's pumping a lot of sand? We can help.
          </p>
          <p>
            Learn More for some tips and instructions for troubleshooting your
            pump.
          </p>
        </ServiceCard>
        <ServiceCard
          title='Geotechnical Drilling'
          href='/services/drilling'
          imageSrc='/images/geotech.webp'
        >
          <p>
            Environmental, Geotech & soil sampling drilling (NDD, SPT, DCP,
            Monitoring wells, Geoprobe and push tubes, split spoon, etc).
          </p>
          <p>
            Learn More for a full list of our Geotech drilling products
            available.
          </p>
        </ServiceCard>
      </ServiceCards>
    </Container>
  );
}

export default ServicesSection;
