import ContentPage, { RelatedPage } from 'components/ContentPage';

import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
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
  { label: 'Water Testing Services', href: '/help/water-testing' },
  { label: 'Flooding / Cyclone Advice', href: '/help/flooding' },
  { label: 'Request a Quote', href: '/request-a-quote' },
  { label: 'Bore Search', href: '/bore-search' },
];

type Props = {};

function index(props: Props) {
  return (
    <ContentPage
      title="Water Bore Cleaning Services"
      description="Water bore cleaning and blowing a bore clean"
      relatedPages={relatedPages}
    >
      {' '}
      <PageSection>
        <h2>Bore Cleanout Services</h2>
        <p>
          <b></b>
        </p>
        <p>
          We can arrange a bore cleaning using one of several methods depending
          on the bore location and the issue.
        </p>
        <p>Here are some reasons your bore would need a clean out:</p>
        <ul>
          <li>The water coming out of your bore has changed colour</li>
          <li>You are now pumping lots of sand</li>
          <li>The bore water has an new odour </li>
          <li>The bore has not be used / pumped in over 12 months</li>
          <li>The bore has not had a cap secured to it for a period of time</li>
          <li>
            The bore has been flooded or you suspect overland flooding has
            entered the bore casing
          </li>
        </ul>
      </PageSection>
      <PageSection>
        <h3>For Town Bores under 12m Deep</h3>

        <p>We can clean your bore using one of the following methods:</p>

        <ul>
          <li>
            High flow pumping - removes some organic matter and sands up to 3mm
            diameter
          </li>
          <li>
            Specially designed gernie/venturi - removes most organic matter and
            sand up to 10mm diameter
          </li>
          <li>
            Trailer mounted compressor - removes just about everything but not
            always the best option
          </li>
        </ul>

        <p>
          The cost to clean your town bore will depend on the method most
          recommended for your area, the issue, the bore casing material and the
          bore yield.
        </p>
        <p>Usually a bore can be cleaned for $150-$200.</p>
        <p>
          Call us on <CallLink /> to discuss your bore issues.
        </p>
      </PageSection>
      <PageSection>
        <h3>For Rural Area Bores over 12m Deep</h3>
        <p>
          We recommend you call one of the few rock-drillers in town who use a
          high-flow high-pressure air compressor as part of their drilling
          process. They will know how to best clean out a deeper bore
        </p>

        <p>
          Usually a bore can be blown clean for $700-$900 as long as you can
          remove the pump and poly pipes in the bore first.
        </p>
        <p>
          <b>NOTE</b>: It&apos;s not as simple as running some poly down a bore,
          hiring a big compressor and let it rip.
        </p>
        <p>
          We have seen bore casing shatter and bores collapse when they are
          blown out by people who don&apos;t understand the construction of a
          bore and what could go wrong. The only fix was to drill a new bore.
        </p>
        <p>
          Use a driller to blow your bore clean, someone who knows what they are
          doing.
        </p>
        <p>
          Call us on <CallLink /> and we can recommend another driller most
          suited to your area/location.
        </p>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
