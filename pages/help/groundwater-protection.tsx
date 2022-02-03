import ContentPage, { RelatedPage } from 'components/ContentPage';
import { StyledLink } from 'components/Link';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import { VideoContainer } from 'components/styled';
import { PHONE } from '../../constants';

const PageSection = styled.section``;

const relatedPages: RelatedPage[] = [
  { label: 'Water Bore Drilling', href: '/bores' },
  { label: 'Drilling FAQ', href: '/help/faq' },
  { label: 'Request a Quote', href: '/request-a-quote' },
  { label: 'Bore Search', href: '/bore-search' },
];

type Props = {};

function index(props: Props) {
  return (
    <ContentPage
      title="Groundwater Protection"
      description="Groundwater monitoring & groundwater protection, we all need to do our part to protect this vital resource."
      relatedPages={relatedPages}
    >
      <PageSection>
        <h2>Groundwater monitoring / groundwater protection</h2>
        <p>
          <strong>
            We all need to do our part to protect this vital resource.
          </strong>
        </p>
      </PageSection>
      <PageSection>
        <p>
          <b>
            95% Of all the freshwater in the world is groundwater (excluding
            polar ice caps). Surface freshwater (lakes, rivers and dams) only
            make up 3%. (ngwa.org)
          </b>
        </p>
        <p>
          The <b>Bravus (Adani) Carmichael Mine</b> has been great publicity to
          bring into the fore the health and sustainability of our limited
          groundwater reserves.
        </p>
        <p>
          If you are worried about the health and productivity of your bores /
          production wells, we can assist. If you have land leased to
          others/companies/miners and they are using or interacting with the
          groundwater, we can assist with initial baseline quality and flow
          testing and short or long term depth and salinity monitoring.
        </p>
        <p>
          {' '}
          Only by conducting <b>accurate testing and monitoring</b> can we
          develop a reliable picture of the health and viability of our
          groundwater aquifers.{' '}
        </p>
        <p>
          <h3>Services offered by Backyard Bores & Geotech Drilling</h3>
        </p>
        <ul>
          <li>
            Flow rate testing of existing bores/wells from 0.2 litres per second
            up to 35L/s, constant rate or stepped test
          </li>
          <li>
            Automated measuring and recording of flow rates in L/s from 10
            minutes duration to 72 hours
          </li>
          <li>
            Providing analysis and producing reports from the flow rate data
            with trends
          </li>
          <li>
            Drilling new monitoring wells in accordance with international
            industry best practice standards and conforming to Qld government
            requirements
          </li>
          <li>
            Automated measuring and recording of water depth and salinity / pH
            for short term (up to 72 hours) and long term (up to 4 years)
          </li>
          <li>
            Alerting and alarms if adjustable limits have been reached, (Min and
            Max: salinity, flow rate, water levels)
          </li>
          <li>
            Centralised data logging from multiple sites with near real-time
            data transfer
          </li>
        </ul>
        <p>
          We come from the land, we only have bore water to drink and live off,
          so we understand your needs and concerns. Trust the locals to put you
          first. It's your land, you have the choice of who conducts the
          monitoring / sampling / drilling of water and recording of data from
          your bores.
        </p>
        <p>
          <b>Choose Backyard Bores and Geotech Drilling.</b>
        </p>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
