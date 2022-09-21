import Aside from 'components/Aside';
import ContentPage, { RelatedPage } from 'components/ContentPage';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import CallLink from 'components/CallLink';
import StyledNextLink from 'components/Link/StyledNextLink';

const PageSection = styled.section``;

const relatedPages: RelatedPage[] = [
  { label: 'Bore Cleanout', href: '/help/bore-cleanout' },
  { label: 'Water Testing', href: '/help/water-testing' },
  { label: 'Pump Troubleshooting', href: '/pumps/troubleshooting' },
  { label: 'Request a Quote', href: '/request-a-quote' },
  { label: 'Contact Us', href: '/contact' },
];

type Props = {};

function index(props: Props) {
  return (
    <ContentPage
      title="Pump Sales & Repairs"
      description="We sell and install bore pumps to suit your needs."
      relatedPages={relatedPages}
      aside={
        <Aside type="info" title="We also sell submersibles!">
          <p>
            We have been selling and servicing DAB surface, solar and
            submersibles for over 15 years. We also sell Grundfos and several
            other brand subs. Call us to discuss.
          </p>
        </Aside>
      }
    >
      <PageSection>
        <h2>Surface, submersible, solar, deep well injector</h2>
        <p>
          We have been selling and servicing DAB surface, solar and submersibles
          for over 15 years. We also sell Grundfos, Onga and Davey and several
          other brand pumps.
        </p>

        <p>
          We&apos;re happy to provide a price for a supplied, installed and
          configured pump to suit your needs.
        </p>
        <p>
          If the pump is for an existing bore/well, try and find out the
          following six things so we can recommend the most suitable pump for
          your needs:
        </p>
        <ol>
          <li>
            Casing inner diameter (usually 4&quot; 100mm or 5&quot; 125mm)
          </li>
          <li>Total depth to the bottom of the bore.</li>
          <li>Depth from ground level to water.</li>
          <li>
            Flow rate, as provided by the driller, or when the bore was blown
            out, or when the bore was pump flow-rate tested.
          </li>
          <li>
            What your water needs are? Soaker hose, round sprinkler, drippers,
            pop-ups? How many sprinklers do you want to run simultaneously?
          </li>
          <li>
            When was the bore was last equipped with a pump, or when was the
            bore last cleaned out?
          </li>
        </ol>
        <p>
          Our pumps are priced as fully installed, with{' '}
          <b>no extra hidden charges</b> for foot valves, poly pipe, poly
          fittings, thread tape, glue?, taps, hose connectors etc.
        </p>
        <p>
          If you are considering a pump for your <b>new bore</b>, we could bring
          one on drilling day, and you can water your lawn before we drive out
          the driveway.
        </p>
        <p>
          If the pump is for an <b>existing bore</b>, please check our{' '}
          <StyledNextLink href="/help/bore-cleanout">
            {' '}
            bore cleanout{' '}
          </StyledNextLink>
          page and{' '}
          <StyledNextLink href="/help/water-testing">
            {' '}
            water testing{' '}
          </StyledNextLink>{' '}
          page if the bore has not been used in a year or more or if you suspect
          it has not had a cap sealed on top the whole time.
        </p>
        <p>
          Please call us on <CallLink /> to see how we can help with a new or
          replacement pump.
        </p>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
