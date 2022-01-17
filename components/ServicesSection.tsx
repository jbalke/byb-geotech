import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import drillingImg from '../public/images/backyard-bore.webp';
import geotechImg from '../public/images/geotech.webp';
import pumpImg from '../public/images/pump.webp';
import helpImg from '../public/images/question-mark.png';
import { BREAKPOINTS } from 'styles/style-constants';
import ServiceCard from './ServiceCard';

const Container = styled.section``;

const SectionBanner = styled.div`
  background-color: ${Theme.color.primaryDark};
  color: ${Theme.color.white};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: ${Theme.spacing.xl};
`;

const SectionTitleContainer = styled.div`
  margin: 0;
  position: relative;
`;

const SectionTitle = styled.h2`
  color: ${Theme.color.white};
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin: 0;
  text-transform: uppercase;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 2.5rem;
  }
`;

const SectionSubText = styled.p`
  padding: 1em;
  border: 1px solid ${Theme.color.white};
  color: ${Theme.color.white};
  font-size: 0.9rem;
`;

const TitleUnderline = styled.div`
  background-color: ${Theme.color.white};
  height: 2px;
  width: 50%;
  margin: ${Theme.spacing.m} auto 0;
`;

const ServiceCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  background-color: ${Theme.color.primaryDark};
  background-image: url('/images/chevron.svg');
  background-position: 100% 100%;
  background-size: 43%;
  background-repeat: no-repeat;

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
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
          title="Bore Drilling & Cleaning"
          href="/bores"
          imageSrc={drillingImg}
        >
          <p>
            If you are looking for water to keep the yard green, top up the
            pool, or reduce the high cost of town water, we can come and drill
            for water in your backyard (or front yard), saving you money.
          </p>
          <p>
            What do you need to prepare before a bore can be drilled or cleaned?
          </p>
        </ServiceCard>
        <ServiceCard
          title="Pump Sales & Repairs"
          href="/pumps"
          imageSrc={pumpImg}
        >
          <p>
            Do you require a new pump (surface, pressure, jet, submersible,
            solar)?
          </p>
          <p>Do you need a new pressure tank or pressure switch?</p>
          <p>Is your pump in need of repairs?</p>
          <p>We can help.</p>
        </ServiceCard>
        <ServiceCard
          title="Geotechnical Drilling"
          href="/services/drilling"
          imageSrc={geotechImg}
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
        <ServiceCard title="Help & Advice" href="/help" imageSrc={helpImg}>
          <p>
            How to troubleshoot bore and/or pump issues. Are you pumping a lot
            of fine sand?
          </p>
          <p>What is PFAS/PFOA?</p>
          <p>Flooded pump/bore?</p>
          <p>Is the council putting meters on your bores? </p>
          <p>We can help.</p>
        </ServiceCard>
      </ServiceCards>
    </Container>
  );
}

export default ServicesSection;
