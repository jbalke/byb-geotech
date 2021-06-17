import ContentPage from 'components/ContentPage';
import { StyledLink } from 'components/Link';
import StyledNextLink from 'components/Link/StyledNextLink';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import { StyledLinkButton } from '../../components/Button';
import { PHONE } from '../../constants';

const PageSection = styled.section``;

type Props = {};

function index(props: Props) {
  return (
    <ContentPage
      title='Water Bore Drilling'
      relatedPages={
        <ul>
          <li>
            <StyledNextLink href='/faq'>FAQ</StyledNextLink>
          </li>
          <li>
            <StyledNextLink href='/request-a-quote'>
              Request a Quote
            </StyledNextLink>
          </li>
          <li>
            <StyledNextLink href='/bore-search'>Bore Search</StyledNextLink>
          </li>
          <li>
            <StyledNextLink href='/bores/new-install'>
              New Bore & Pump Tips
            </StyledNextLink>
          </li>
        </ul>
      }
    >
      <PageSection>
        <h2>What to expect on drilling day</h2>
        <h3>How long does it take?</h3>
        <p>
          Drilling and casing can take 4-6 hours depending on the material being
          drilled and the depth.
          <br />
          It&apos;s a four step process:
          <ol>
            <li>Drilling</li>
            <li>Installing casing</li>
            <li>
              Cleaning out the inside of the casing to remove damaging sands,
              muds and clay
            </li>
            <li>Flow rate, salt, iron, PH, testing (if required).</li>
          </ol>
        </p>
        <h3>Will there be a lot of soil/clay/sand to dispose of?</h3>
        <p>
          Usually there are 3 - 5 wheelbarrow loads of material that you need to
          find a place for. If you have any holes in your yard or low points,
          now is a great time to fill them. We cannot take it with us.
        </p>
        <h3>What size casing is supplied?</h3>
        <p>
          100mm diameter casing with factory cut fine slots (0.4 - 0.5mm) is
          used in the majority of bores, some locations need 0.8mm. We can
          install 5”, 125mm casing or 80mm casing as required, surcharges may
          apply.
        </p>
        <h3>
          Do I need a driller to come over and look at the site and provide a
          quote?
        </h3>
        <p>
          No, unless the location you are thinking of is in a difficult place to
          access or needs fence sections removed or trees cut back. Please call
          us on{' '}
          <StyledLink href={`tel:${PHONE.MAIN.NUMBER}`}>
            {PHONE.MAIN.DISPLAY}
          </StyledLink>{' '}
          and discuss if you have any concerns.
        </p>
        <h3>Do I need to be home while drilling takes place?</h3>
        <p>
          No, but please indicate the location of the drilling site with a photo
          or stake. We will require access to working town water and an active
          power point to complete the process as well.
        </p>
        <h3>Can you supply and fit a pump for me?</h3>
        <p>
          We would be happy to provide a price for a supplied, installed and
          configured pump to suit your needs. We could even bring one on
          drilling day and you can be watering your lawn before we drive out the
          driveway.
        </p>
      </PageSection>
      <StyledLinkButton href='/bores/new-install' fullWidth margin='1rem auto'>
        Learn how to maintain a new bore and/or pump.
      </StyledLinkButton>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
