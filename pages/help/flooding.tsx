import ContentPage, { RelatedPage } from 'components/ContentPage';
import { StyledLink } from 'components/Link';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import StyledNextLink from 'components/Link/StyledNextLink';
import { VideoContainer } from 'components/styled';
import { PHONE } from '../../constants';

const PageSection = styled.section``;

const relatedPages: RelatedPage[] = [
  { label: 'Bore Water Testing', href: '/help/water-testing' },
  { label: 'Bore Cleanout', href: '/help/bore-cleanout' },
  { label: 'Water Bore Drilling', href: '/bores' },
  { label: 'Drilling FAQ', href: '/help/faq' },
  { label: 'Request a Quote', href: '/request-a-quote' },
];

type Props = {};

function index(props: Props) {
  return (
    <ContentPage
      title="Flooding / cyclone advice"
      description="Cyclone / Flood advice for your Bore and Pump."
      relatedPages={relatedPages}
    >
      <PageSection>
        <h2>What to do BEFORE a Potential Flood Event</h2>
        <p>
          <b>Your Bore</b>
        </p>
        <p>
          If the area surrounding your bore is prone to water accumulation
          during heavy rain, it&apos;s best to act now.
        </p>
        <p>
          Inspect the top of the bore casing and make sure there is a good seal
          around the hole in the cap where the poly pipe(s) go into the bore
          casing. If there are large gaps (more than 3mm on each side), use a
          wet area sealant to fill in the gaps. If that is not available, do
          your best to stuff a rag into the gaps all the way around.
        </p>
        <p>
          If you don&apos;t have a bore cap at all, it&apos;s best to get duct
          tape and go nuts sealing that PVC casing off!
        </p>
        <p>
          Put a small hole in the duct tape so the changing water levels in the
          bore don&apos;t cause the tape to blow out (yes, we have seen it
          before). Afterwards, contact us to get a replacement bore cap and a
          free bore appraisal, so you are prepared for next time.
        </p>
      </PageSection>
      <PageSection>
        <p>
          <b>Your Pump</b>
        </p>
        <p>
          Look to see where your surface pump is; if it&apos;s likely to get
          covered (even partially) by flood waters, lift the pump up. The best
          way is to put a Besser block or bricks under the pump. All pumps
          directly above the bore casing will lift straight up; it may take two
          people to complete this task, but you could lose thousands if you
          don&apos;t act.
        </p>
        <PageSection>
          <h2>What to do DURING a Flood Event</h2>

          <p>
            If you can see or hear water leaking into your bore casing, or you
            can see the flood waters completely covering the bore, or there is
            no cap on the bore, or it has large gaps, and your pump is not
            underwater, the best thing is to turn the pump on and pump that
            dirty overland flood water out ASAP.
          </p>
          <p>
            Obviously, if you are experiencing a cyclone, don&apos;t go outside.
          </p>
          <p>
            If pumping water out of your bore will make the flooding situation
            worse for anyone, leave the pump and bore alone. Just remember, if
            your pump is/was underwater, don&apos;t turn it on!
          </p>
          <p>
            Run the pump and discharge the water into a functioning drain for as
            long as the water is covering the bore casing.
          </p>
          <p>
            If all the drains are backed up, don&apos;t run the pump; this will
            worsen the flood.
          </p>
          <p>
            As soon as the flood waters drop below the level of the casing, run
            the pump and pump the flood waters out of the bore. We need to
            protect our precious aquifers as best we can.
          </p>
        </PageSection>
        <PageSection>
          <h2>What to do AFTER a Flood Event, Cleanup</h2>

          <p>
            Bore water should not be used for drinking or food preparation if
            you suspect flood water entered the bore casing.
          </p>
          <p>
            If you suspect the bore was underwater, check out our{' '}
            <StyledNextLink href="/help/bore-cleanout">
              bore cleanout
            </StyledNextLink>{' '}
            page for more information about getting your bore cleaned.{' '}
          </p>

          <p>
            If you choose not to use our bore cleaning services, it&apos;s best
            to disinfect the water in the bore, DRDMW recommends the following
            disinfection procedure:
          </p>
          <ol>
            <li>
              Add 15 grams of dry pool chlorine per 100 litres of bore water. A
              4” bore casing has a volume of approx. 10L per metre; if your bore
              has 10m of water in it, add 15g of dry pool chlorine.
            </li>
            <li>
              Leave it in the bore for 4 hours, then turn the pump on but put
              the outlet hose back down into the casing, creating a loop.
            </li>
            <li>
              Pump the water back into the bore for 30 minutes. If the bore
              overflows, reduce the flow rate. If that still doesn&apos;t work,
              then skip to step 4.
            </li>
            <li>
              Take the outlet hose out and pump the bore water onto grass or
              down the drain for 2 hours.
            </li>
          </ol>

          <p>
            If there is any sign that the pump or pressure switch/controller
            went underwater (or the control box if you have a submersible),
            <b>DO NOT USE IT!</b> Call us ASAP on{' '}
            <StyledLink href={`tel:${PHONE.MAIN.NUMBER}`}>
              {PHONE.MAIN.DISPLAY}
            </StyledLink>{' '}
            to arrange for a free pump and bore inspection.
          </p>
          <p>
            If you know the bore went underwater, but your pump (or control box)
            did not, then at the very least, run the pump for 3-4 hours once the
            flood water has subsided to clean out the introduced flood waters.
          </p>
          <p>
            The bore water may be discoloured from flooding or just from the
            amount of rain entering the aquifer over the last few days.
          </p>
          <p>
            Check out our{' '}
            <StyledNextLink href="/help/water-testing">
              water testing
            </StyledNextLink>{' '}
            page for more information about our water quality testing services
            we offer (for <b>FREE!</b>) and other more comprehensive testing
            options available for a fee.
          </p>
        </PageSection>
        <p>
          <h3>Advice for Insurance Claims</h3>
        </p>
        <p>
          If your pump was flooded/submerged/inundated, we can inspect the pump
          and provide a document stating the pump was damaged in the flood,
          allowing you to claim this on your insurance.{' '}
        </p>
        <p>
          If you have Motor Burnout inclusions on your policy, this can also
          help the claim progress successfully.
        </p>
        <p>
          We can supply and install your new pump. Please call us on{' '}
          <StyledLink href={`tel:${PHONE.MAIN.NUMBER}`}>
            {PHONE.MAIN.DISPLAY}
          </StyledLink>{' '}
          for a full quote on your replacement pump.
        </p>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
