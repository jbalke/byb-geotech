import ContentPage from 'components/ContentPage';
import { StyledLink } from 'components/Link';
import StyledNextLink from 'components/Link/StyledNextLink';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import { VideoContainer } from 'components/styled';
import { PHONE } from '../../constants';

const PageSection = styled.section``;

type Props = {};

function index(props: Props) {
  return (
    <ContentPage
      title='New Bore & Pump Tips'
      relatedPages={
        <ul>
          <li>
            <StyledNextLink href='/bores'>Water Bore Drilling</StyledNextLink>
          </li>
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
        </ul>
      }
    >
      <PageSection>
        <h2>New Bore Only</h2>
        <p>
          <strong>
            In the first 2 months of your new bore being drilled, please do the
            following:
          </strong>
          <ol>
            <li>
              Equip the bore with a pump <strong>ASAP</strong>.
            </li>
            <li>Run the pump every other day for a minimum of 10-30 mins.</li>
            <li>
              Keep the cap on the bore at all times when not equipped with a
              pump.
            </li>
          </ol>
        </p>
      </PageSection>
      <PageSection>
        <h2>New Pump Only</h2>
        <p>
          When installing your pump, make sure the lowest part of the foot valve
          assembly is 600mm from the bottom of the bore. An easy way is to
          assemble the strainer, foot valve, poly fitting, and poly pipe and
          lower that into the bore until it hits the bottom. Then lift up an
          arms-length and use your poly cutters to cut the poly there. Slip your
          PVC cap over the poly then secure the poly fitting.
        </p>
        <p>
          <strong>In the first 2 months after your pump installation:</strong>
          <ol>
            <li>
              Run your pump often for at least 20 mins (every second day at
              least).
            </li>
            <li>
              DO NOT trust the automatic pressure switch. At night, turn the
              pump off at the powerpoint. If you are going away for a weekend or
              for more than 4 hours, turn the pump off at the powerpoint.
            </li>
            <li>
              Test fill a bucket with bore water once a week and carefully tip
              out to see how much sand is in the bucket. 1-2 teaspoons in a 20L
              bucket is within the operating range of the pump. Check that the
              sand is fine (&lt;0.5mm) and not coarse granules. If you see 2mm
              granules please call us.
            </li>
            <li>
              You may see some discoloured water when the pump is first turned
              on. This is normal if it goes away after 10L has passed through
              the pump. If after 2 minutes of running the water is still "dirty,
              call us.{' '}
            </li>
            <li>
              Do not put the hose outlet through anything with a fine nozzle
              like: hand triggers; soaker hoses; or pop up sprinklers. These
              will block up initially.
            </li>
          </ol>
        </p>
        <p>
          <strong>For the rest of the pump's life:</strong>
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
            If the pump motor runs and no water comes out an open ended hose
            outlet with no sprinklers or attachments, check out our website on
            how to prime a pump.
          </li>
          <li>
            Cover the pump from direct sun and rain. Some pumps have lasted 14
            years when out of the weather.
          </li>
          <li>
            If the pump just hums when turned on,{' '}
            <strong>TURN IT OFF IMMEDIATELY!</strong> Then call us.
          </li>
          <li>
            Test the water for sand every month. After flood events or extended
            drought, some fine sand may be noticed.
          </li>
          <li>
            For hose distances longer than 10m, we recommend using a 19mm (3/4")
            hose to maximise your flow. This can then be split into 2 smaller,
            short hoses and sprinklers.
          </li>
        </ul>
        <p>
          <strong>To easily prime a pump, watch our video.</strong>
        </p>
        <VideoContainer>
          <iframe
            src='https://www.youtube-nocookie.com/embed/DWHvp_fWmXM'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </VideoContainer>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
