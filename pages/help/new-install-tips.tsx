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
      title="New Bore & Pump Tips"
      description="How do you keep your new bore and pump running smoothly? Here we'll go into detail about everything you need to know to maintain your bore pump and maximise it's life."
      relatedPages={relatedPages}
    >
      <PageSection>
        <h2>New Bore Only</h2>
        <p>
          <strong>
            In the first 2 months of your new bore being drilled, please do the
            following:
          </strong>
        </p>
        <ol>
          <li>
            Always keep the cap on the bore when not equipped with a pump.
          </li>
          <li>
            Drill hole(s) in the cap just the right size for the poly pipe you
            use; leave no gaps.
          </li>
          <li>
            Equip the bore with a pump <strong>ASAP</strong>.
          </li>
          <li>Run the pump every other day for a minimum of 10-30 mins.</li>
          <li>
            Always cover your pump and pump electrical boxes from direct sun and
            rain.
          </li>
        </ol>
      </PageSection>
      <PageSection>
        <h2>Supplying and fitting your own pump</h2>
        <p>
          If you are sourcing your own pump, take a copy of the details of the
          bore to your favourite pump supplier and tell them precisely what you
          plan to use the water for, and how (pop-ups, round sprinklers,
          travelling irrigators, wobblers, drippers, irrigation etc.)
        </p>
        <p>
          When installing your pump, ensure the lowest part of the foot valve
          assembly is 600mm from the bottom of the bore. An easy way is to
          assemble the strainer, foot valve, poly fitting, and poly pipe and
          lower that into the bore until it hits the bottom. Then lift up an
          arms-length and use your poly cutters to cut the poly there. Slip your
          PVC cap over the poly, then secure the poly fitting.
        </p>
        <p>
          NOTE: The faster you take water out of the bore, the more fine sand
          will be sucked up and through the system.
        </p>
        <p>
          <h2>In the first 2 months after your pump installation:</h2>
        </p>
        <ol>
          <li>
            Run your pump often for at least 20 mins (every second day at
            least).
          </li>
          <li>
            Do not trust the automatic pressure switch initially. At night, turn
            the pump off at the power point. If you are going away for a weekend
            or for a day, turn the pump off at the power point.
          </li>
          <li>
            Fill a bucket with bore water once a week and carefully tip out the
            water to see how much sand is left in the bucket. 1-2 teaspoons in a
            20L bucket is within the pump&apos;s operating range. Check that the
            sand is fine (&lt;0.5mm) and not coarse grains. If you see 2mm
            grains, please call us.
          </li>
          <li>
            You may see discoloured water when the pump is first turned on. This
            is normal if it goes away after 10L has passed through the pump. If
            after 2 minutes of running the water is still dirty, call us.
          </li>
          <li>
            Do not put the hose outlet through anything with a fine nozzle like
            hand triggers with mist, soaker hoses, or pop up sprinklers. These
            will block up initially. Wait a few weeks.
          </li>
        </ol>
        <p>
          <h2>General Pump Tips</h2>
        </p>
        <ul>
          <li>
            If the pump starts making new noises, check our website for details,
            then call us on{' '}
            <StyledLink href={`tel:${PHONE.MAIN.NUMBER}`}>
              {PHONE.MAIN.DISPLAY}
            </StyledLink>
            .
          </li>
          <li>
            If the pump motor runs and no water comes out an of open ended hose
            outlet with no sprinklers or attachments, check out our website on
            how to prime a pump.
          </li>
          <li>
            Cover the pump from direct sun and rain. Some pumps have lasted 14
            years when out of the weather.
          </li>
          <li>
            If the pump only hums when turned on,{' '}
            <strong>TURN IT OFF IMMEDIATELY!</strong> Then call us.
          </li>
          <li>
            Test the water for sand every month. After flood events or extended
            drought, some fine sand may be noticed.
          </li>
          <li>
            For hose distances longer than 10m, we recommend using a 19mm
            (3/4&quot;) hose to maximise your flow. This can then be split into
            2 smaller, short hoses and sprinklers.
          </li>
        </ul>
        <p>
          <strong>To easily prime a pump, watch our video.</strong>
        </p>
        <VideoContainer>
          <iframe
            src="https://www.youtube-nocookie.com/embed/DWHvp_fWmXM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoContainer>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
