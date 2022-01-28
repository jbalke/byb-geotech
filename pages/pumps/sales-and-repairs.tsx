import Aside from 'components/Aside';
import ContentPage, { RelatedPage } from 'components/ContentPage';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';

const PageSection = styled.section``;

const relatedPages: RelatedPage[] = [
  { label: 'Pump Troubleshooting', href: '/pumps/troubleshooting' },
  { label: 'Water Bore Drilling', href: '/bores' },
  { label: 'Drilling FAQ', href: '/faq' },
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
            submersibles for over 15 years. Call us to discuss.
          </p>
        </Aside>
      }
    >
      <PageSection>
        <p>
          We&apos;re happy to provide a price for a supplied, installed and
          configured pump to suit your needs.
        </p>
        <p>
          If the pump is for an existing bore/well, try and find out the
          following 5 things so we can recommend the most suitable pump for your
          needs:
        </p>
        <ol>
          <li>
            Casing inner diameter (usually 4&quot; 100mm or 5&quot; 125mm)
          </li>
          <li>Total depth to bottom of bore.</li>
          <li>Depth from ground level to water.</li>
          <li>
            Flow rate as provided by the driller or when the bore was blown out
            or pump flow rate tested.
          </li>
          <li>
            What your water needs are? Soaker hose, round sprinkler, drippers,
            pop-ups? How many sprinklers do you want to run simultaneously?
          </li>
        </ol>
        <p>
          Our pumps are priced as fully installed, no extra hidden charges for
          foot vales, poly pipe, poly fittings, thread tape, glue, taps, hose
          connectors etc.
        </p>
        <p>
          If you are considering a pump for your new bore, we could bring one on
          drilling day and you can be watering your lawn before we drive out the
          driveway.
        </p>
        <p>
          Please call us on <CallLink /> to see how we can help with a new or replacement pump.</p>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
