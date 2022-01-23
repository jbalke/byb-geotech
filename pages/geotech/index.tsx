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
          <li><em>Cathodic protection</em> and pre-cannistered anode/cable installation for fuel oil pipelines</li>
        </ul>
        <p>
          You can call us on <CallLink /> to see how we can help your project achieve success.</p>
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
        <h3>Experience, skills & local knowledge</h3>
        <p>
        Backyard Bores & Geotech Drilling Pty Ltd have drilled thousands of soil sampling and 
        groundwater test holes and installed hundreds of ground water monitoring wells 
        between Bowen and Rockhampton over the last 20 years.
        </p>
        <p>
        We have drilled and installed <em>3 times*</em> the number of monitoring 
        wells around Mackay compared to any other drilling company.  Why?  
        Because our team uses the right equipment with the right processes and 
        the right methods for the right reason by utilising wisdom, judgment 
        and discretion in the pursuit of your project’s goals.  </p>
        <p>(*Jan 2022 Queensland Spatial Data extract)        </p>
        <p> </p>
        <h3>Workplace Health & Risk</h3>
        <p>
         We care about our team's health and risk levels at work and have
         WH&R Policies and Procedures, WH&R Plans, SWMS, and JRAs that put the crew first.
         As at January 2022 we have a <em>zero lost time injury</em> rate. 
        </p>
        <p> </p>
        <h3>PFAS  PFOS Firefighting Foam</h3>
        <p>
        We have have drilled hundreds of soil sampling and groundwater test holes and installed dozens of ground water monitoring wells in suspected PFAS / PFOA areas.
        Our very strict PFAS drilling quality control process allows for the most accurate samples possible.  Please contact us for more information.
        </p>
        <p> </p>
        <h3>Past Project Partners</h3>
        <p>Backyard Bores & Geotech Drilling Pty Ltd have successfully completed works for the following:

        <ul>
        <li>Mackay Regional Council</li>
        <li>Isaac Regional Council</li>
        <li>Kleinfelder Environmental Consultants</li>
        <li>CatCon Engineering & Construction</li>
        <li>OWAD Environment</li>
        <li>Cardno Geotechnic Services</li>
        <li>Environmental Management and Remediation Pty Ltd</li>
        <li>Ogilvie Civil & Mining</li>
        <li>Environmental Earth Sciences</li>
        <li>Coffey Geotechnics</li>
        <li>Douglas Partners</li>
        <li>GHD</li>
        <li>CQG</li>
        <li>EPIC Environmental</li>
        <li>North Queensland Airports Group (Mackay Airport)</li>
        <li>North Queensland Bulk Ports</li>
        <li>Caltex, Mobil, Puma, Origin Gas, Ergon </li>
        <li>Onesteel</li>
        <li>Aurizon</li>
        <li>Sibelco Australia</li>
        <li>Prensa</li>
        <li>Urbex</li>
        <li>AESTEC </li>
        <li>ATOM - Australian Terminal Operations Management</li>
        <li>Auscor</li>
        <li>CMW Geosciences</li>
        <li>Wilmar</li>
        <li>BP Australia</li>
        <li>AECOM</li>
        <li>Rock n Road Bitumen</li>
        <li>UGM</li>
        <li>Abbot Point Operations</li>
        <li>East Point Developments</li>
        </ul>
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
