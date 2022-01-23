import Aside from 'components/Aside';
import CallLink from 'components/CallLink';
import ContentPage, { RelatedPage } from 'components/ContentPage';
import { StyledLink } from 'components/Link';
import StyledNextLink from 'components/Link/StyledNextLink';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import { PHONE } from '../../constants';

const PageSection = styled.section``;

const relatedPages: RelatedPage[] = [
  { label: 'Drilling FAQ', href: '/faq' },
  { label: 'New Bore Checklist', href: '/bores/checklist' },
  { label: 'Request a Quote', href: '/request-a-quote' },
  { label: 'Bore Search', href: '/bore-search' },
  { label: 'New Bore & Pump Tips', href: '/bores/new-install-tips' },
];

type Props = {};
function index(props: Props) {
  return (
    <ContentPage
      title="Environmental & Geotech Drilling"
      description="Backyard Bores & Geotech Drilling Pty Ltd are your Mackay region Geotechnical & Environmental Drilling specialists"
      relatedPages={relatedPages}
      aside={
        <Aside type="question" title="Got more questions?">
          <p>
            You might find the answer over at our{' '}
            <StyledNextLink href="/faq">FAQ</StyledNextLink>!
          </p>
        </Aside>
      }
    >
      <PageSection>
      <p> Backyard Bores & Geotech Drilling Pty Ltd are your North Queensland Geotechnical & Environmental Drilling specialists.
        </p>        
        <h2>We offer the following environmental drilling and geotechnical products</h2>
        <ul>
          <li><em>Contaminated soil</em>/sand sampling (including asbestos) with equipment decon (Environmental Management Register and Contaminated Land Register listed sites)
          </li>
          <li>Drilling and installing piezometer <em>monitoring wells</em> up to 60m depth</li>
          <li>NDD, SPT (Standard Penetration Testing), DCP (Dynamic Cone Penetrometer), Geoprobe and push tubes, split spoon and auger sampling (AS1289, AS1726-2017, ASTM D3441 - ASTM D1586 - 08a)</li>
          <li>Specialist <em>PFAS</em> / PFOA (fire fighting foam) contaminated soil sampling and environmental drilling</li>
          <li><em>Test pumping</em> of bores to <strong>Australian Standard AS2368–1990 Test Pumping of Water Wells</strong> from 2 hours to 28 days in duration.  Includes creation of official documents for council requirements of subdivisions (<em>Develompent Approval</em> for 0.3L/s over 6 hour period with recovery)</li>
          <li><em>Flow rate logging</em> and data analysis from 0.1L/s to 100L/s</li>
          <li><em>Water level logging</em> from hours to years with data capture, transmission and analysis</li>
          <li><em>Water quality testing</em> for salt (TDS & conductivity), iron (TDI), pH, free chlorine, total hardness & alkalinity</li>
          <li>Comprehensive <em>drinking water testing</em> can be arranged (pesticides, heavy metals, trace elements, PFAS, PFOA etc)</li>
          <li><em>Well development</em> using a combination of over pumping, surging or air lifting to protect the natural water sample</li>
          <li>Production well (steel and PVC) investigation and cleaning</li>
          <li><em>Downhole camera</em> inspections and video reports</li>
          <li><em>Decommissioning</em> bores & wells</li>
          <li><em>Deep earthing</em>, drilling for installation of earthing rods at substations</li>
          <li><em>Cathodic protection</em> of fuel oil pipelines</li>
        </ul>

        <p> </p>
        <p> </p>
        <h2>1 Quote, 1 Invoice</h2>
        <p>
          Let Backyard Bores and Geotech Drilling <strong>reduce your paperwork and 
          administrative overhead</strong> by providing you with 1 quote to cover NDD, 
          underground utility locating, concrete cutting and coring, drilling, providing
          samples and installing monitoring wells.
        </p>
        <p>  
          We have a long-term working relationship with Mackay's best:
        </p>
        <ul>
        <li>NDD (vacuum truck) company </li>
        <li>Underground utility locators with GPR (ground penetrating radar)</li>
        <li>Concrete cutter and corer (up to 300mm thick)</li>
        </ul>
        <p> </p>
    
        <h2>
          We have completed more environmental drilling than anyone else
        </h2>
        <p>
        We have drilled and installed <em>3 times*</em> the number of monitoring 
        wells around Mackay compared to any other drilling company.  Why?  
        Because our team uses the right equipment with the right processes and 
        the right methods for the right reason by utilising wisdom, judgment 
        and discretion in the pursuit of your project’s goals.  </p>
        <p>(*Jan 2022 Queensland Spatial Data extract)        </p>
        <h3>Where to put the bore</h3>
        <p>
          Our drilling rig is mounted on a light truck which will need access to
          the location you&apos;d like the bore drilled. See the{' '}
          <StyledNextLink href="/faq">FAQ</StyledNextLink> for truck dimensions
          and more.
        </p>
        <p>
          Is there power nearby for the pump and, if not, how costly it might be
          to install? While the pump does not need to be directly on the bore
          (under the house, in a shed, etc), please consider how easy it will be
          to distribute the water from the pump outlet to where you will need
          it.
        </p>
        <p>
          If you think your preferred location might be difficult to access or
          needs fence sections removed or trees cut back, call us on{' '}
          <StyledLink href={`tel:${PHONE.MAIN.NUMBER}`}>
            {PHONE.MAIN.DISPLAY}
          </StyledLink>{' '}
          to discuss your options.
        </p>
        <h3>Workplace Healthj & Risk</h3>
        <p>
          Please try to locate the underground services on your property,
          especially the pipe to the sewer mains.
        </p>
        <p>
          If you&apos;re not sure where any services are on your property, we
          can contact the council for this information but for an additional
          fee. See the <StyledNextLink href="/faq">FAQ</StyledNextLink> for more
          information.
        </p>
        <h3>Disposal of soil</h3>
        <p>
          Usually there are 3 - 5 wheelbarrow loads of material that you need to
          find a place for as we cannot take this with us. If you have any holes
          or low points in your yard, this will be a great time to fill them.
        </p>
        <h2>I&apos;ve decided I want a bore, what next?</h2>
        <p>
          You can call us on <CallLink /> for a free quote but why not try our{' '}
          <StyledNextLink href="/request-a-quote">
            online quote form
          </StyledNextLink>
          ? It&apos;s quick and easy and we&apos;ll typically contact you with a
          quote in less than an hour (during normal business hours)!
        </p>
      </PageSection>

      {/* <StyledLinkButton href="/bores/new-install" fullWidth margin="1rem auto">
        Learn how to maintain a new bore and/or pump.
      </StyledLinkButton> */}
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
