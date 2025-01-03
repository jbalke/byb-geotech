import ContentPage, { RelatedPage } from 'components/ContentPage';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'components/Link';
import CallLink from 'components/CallLink';

const PageSection = styled.section`
  h2:not(:first-child) {
    margin-top: 1.5em;
  }

  h3 {
    margin-top: 2em;
  }
`;

const relatedPages: RelatedPage[] = [
  { label: 'Bore Cleanout', href: '/help/bore-cleanout' },
  { label: 'Geotech Drilling', href: '/geotech' },
  { label: 'PFAS/PFOA Contamination Advice', href: '/help/pfas-pfoa' },
  { label: 'Request a Quote', href: '/request-a-quote' },
];

type Props = {};

function index(props: Props) {
  return (
    <ContentPage
      title="Water Quality & Quantity Testing"
      description="Flow rate and water quality testing services for your bore water"
      relatedPages={relatedPages}
    >
      <PageSection>
        <h2>Bore Water Flow rate / Yield Testing Services</h2>
        <h3>Professional Water Monitoring and Testing Services</h3>
        <p>
          We can provide the following testing services for the short and long
          term.
          <ul>
            <li>
              Flow rate testing of existing bores/wells from 0.2 litres per
              second up to 35L/s, constant rate, stepped test or combination
            </li>
            <li>
              Automated measuring and recording of flow rates from 10 minutes
              duration to 72 hours
            </li>
            <li>
              Providing analysis and producing reports from the flow rate data
              with trends
            </li>

            <li>
              Automated measuring and recording of water depth and salinity / pH
              for short term (up to 72 hours) and long term (up to 4 years)
            </li>
            <li>
              Alerting and alarms if adjustable limits have been reached (Min
              and Max: salinity, flow rate, water levels)
            </li>
            <li>
              Centralised data logging from multiple sites with near real-time
              data transfer
            </li>
          </ul>
        </p>
        <p>
          <b>For Property Developers</b>
        </p>
        <p>
          We can provide you with certified flow rate testing results with
          graphs and trends to assist your development application to the
          council.
        </p>
        <p>
          MRC Planning Scheme Policies, Section 1.8.1, Water Reticulation, Bore
          Supplies,{' '}
        </p>
        <p>
          Bore supplies shall generally satisfy the following requirements:-
        </p>
        <p>
          <ul>
            <li>
              Bore capacity is to be assessed on a minimum six (6) hour pump
              test and based on drawdown and recovery readings
            </li>
            <li>
              Bore capacity shall be assessed at 0.3 litres/second per dwelling
              unit
            </li>
            <li>
              Bores servicing individual lots shall be located on the lot being
              serviced unless otherwise approved by Council under a development
              approval.
            </li>
            <li>
              Bores shall be fully constructed as part of development works but
              do not need to be equipped.
            </li>
            <li>
              Water Quality is to be in accordance with Section 3 of the DNR
              (QWRC) Guidelines for Planning and Design of Urban Water Supply
              Schemes (as amended).
            </li>
          </ul>
        </p>
        <p>
          Backyard Bores and Geotech Drilling can bring all the equipment
          necessary to complete the job. We can come to your bore location and
          bring:
          <ul>
            <li>
              one of several styles and models of pumps with variable flow rates
              from 0.1 L/s to 35L/s
            </li>
            <li>water level logging equipment</li>
            <li>water flow rate logging equipment</li>
            <li>a laptop to view logged data in realtime</li>
            <li>
              hoses/poly pipes, connectors and fittings to complete the task
            </li>
            <li>
              water quality testing apparatus for free onsite water quality
              testing.
            </li>
          </ul>
        </p>
        <p>
          After we collect the data and complete the onsite test, including bore
          recharge (as per Australian Standard AS2368–1990), we can analyse the
          data to produce our certified flow rate test report with trends to
          assist your submission to the council.{' '}
        </p>
        <p>
          Call us on <CallLink /> to discuss your needs.
        </p>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
