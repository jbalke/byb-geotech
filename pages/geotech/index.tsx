import Aside from 'components/Aside';
import CallLink from 'components/CallLink';
import ContentPage, { RelatedPage } from 'components/ContentPage';
import StyledNextLink from 'components/Link/StyledNextLink';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';

const PageSection = styled.section`
  h2:not(:first-child) {
    margin-top: 1.5em;
  }

  h3 {
    margin-top: 2em;
  }
`;

const relatedPages: RelatedPage[] = [
  { label: 'Request a Quote', href: '/request-a-quote' },
  { label: 'Bore Search', href: '/bore-search' },
  { label: 'Drilling FAQ', href: '/help/faq' },
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
            <StyledNextLink href="/help/faq">FAQ</StyledNextLink>!
          </p>
        </Aside>
      }
    >
      <PageSection>
        <p>
          Backyard Bores & Geotech Drilling Pty Ltd are your Geotechnical &
          Environmental Drilling specialists in the Mackay region.
        </p>

        <h2>
          We offer the following environmental drilling and geotechnical
          products and capabilities:
        </h2>
        <ul>
          <li>
            <b>Contaminated soil</b>/sand sampling (including asbestos) with
            equipment decon (Environmental Management Register and Contaminated
            Land Register listed sites)
          </li>
          <li>
            Drilling and installing piezometer <b>monitoring wells</b> up to 200m
            depth
          </li>
          <li>
            NDD, SPT (Standard Penetration Testing), DCP (Dynamic Cone
            Penetrometer), Geoprobe and push tubes, split spoon and auger
            sampling (AS1289, AS1726-2017, ASTM D3441 - ASTM D1586 - 08a)
          </li>
          <li>
            Auger drilling from 80mm to 250mm dia, continuous flight and hollow
            stem up to 24m deep
          </li>
          <li>Rotary air (rock) drilling from 100mm to 450mm dia and up to 1000m deep</li>
          <li>
            Specialist <b>PFAS</b> / PFOA (fire fighting foam) contaminated soil
            sampling and environmental drilling
          </li>
          <li>
            <b>Test pumping</b> of bores to{' '}
            <strong>
              Australian Standard AS2368–1990 Test Pumping of Water Wells
            </strong>{' '}
            from 2 hours to 28 days in duration. Includes creation of official
            documents for government requirements.
          </li>
          <li>
            <b>Flow rate logging</b> and data analysis from 0.1L/s to 100L/s
          </li>
          <li>
            <b>Water level depth logging</b> from hours during a pump test to years in
            situ with data capture, transmission and analysis
          </li>
          <li>
            <b>Water quality testing</b> for salt (TDS & conductivity), iron
            (TDI), pH, free chlorine, total hardness & alkalinity
          </li>
          <li>
            Comprehensive <b>drinking water testing</b> can be arranged
            (pesticides, heavy metals, trace elements, PFAS, PFOA etc.)
          </li>
          <li>
            <b>Well development</b> using a combination of over pumping, surging
            or air lifting to protect the natural water table
          </li>
          <li>
            <b>Polymer removal</b> and cleanup of mud (polymer) drilled holes using physical brushing, air lifting, sodium hypochlorite injection, and capture of the toxic polymer wastewater for approved disposal
          </li>
          <li>Production well (steel and PVC) investigation and cleaning</li>
          <li>
            <b>Downhole camera</b> inspections and video reports
          </li>
          <li>
            <b>Decommissioning</b> bores & wells
          </li>
          <li>
            <b>Deep earthing</b>, drilling for installation of earthing rods at
            substations
          </li>
          <li>
            <b>Cathodic protection</b> and pre-cannistered anode/cable
            installation for fuel oil pipelines
          </li>
        </ul>
        <p>
          Please call us on <CallLink /> to see how we can help your project
          reach successful completion.
        </p>

        <h2>1 Quote, 1 Invoice</h2>
        <p>
          Let Backyard Bores and Geotech Drilling{' '}
          <strong>reduce your paperwork and administrative overhead</strong> by
          providing you with one quote to cover NDD, underground utility
          locating, concrete cutting and coring, drilling, providing samples and
          installing monitoring wells.
        </p>
        <p>We have a long-term working relationship with Mackay&apos;s best:</p>
        <ul>
          <li>NDD (vacuum truck) company </li>
          <li>
            Underground utility locators with GPR (ground penetrating radar)
          </li>
          <li>Concrete cutter and corer (up to 300mm thick)</li>
        </ul>

        <h3>Experience, skills & local knowledge</h3>
        <p>
          Backyard Bores & Geotech Drilling Pty Ltd have drilled thousands of
          soil sampling and groundwater test holes and installed hundreds of
          groundwater monitoring wells between Bowen and Rockhampton over the
          last 20 years.
        </p>
        <p>
          We have drilled and installed <b>4 times*</b> the number of monitoring
          wells around Mackay compared to any other drilling company. Why?
          Because our team uses the right equipment with the right processes and
          the methods for the right reason by utilising wisdom, judgment and
          discretion in the pursuit of your project&apos;s goals.
        </p>
        <p>(*Jul 2023 Queensland Spatial Data extract) </p>

        <h3>Licensed drillers - Every monitoring well logged</h3>
        <p>
          Backyard Bores & Geotech Drilling Pty Ltd have Queensland licensed
          drillers, and we log every monitoring well we drill <b>as required</b>{' '}
          by the obligation of our licenses. Ask the other drilling companies
          quoting on jobs if they are using a licensed driller and if that
          driller logs EVERY monitoring well. Consequences for all involved in
          not logging monitoring wells are harsh.
        </p>
        <p>
          Every monitoring well deeper than 6m <strong>MUST</strong> be drilled
          by a licensed driller, and a log submitted.
        </p>

        <h3>Workplace Health & Risk</h3>
        <p>
          We care about our team&apos;s health and risk levels at work and have
          WH&R Policies and Procedures, WH&R Plans, SWMS, and JRAs that put the
          crew first. As of January 2024, we have a{' '}
          <b>zero lost time injury rate since 2012</b>.
        </p>
        <h3>PFAS PFOS Firefighting Foam</h3>
        <p>
          We have drilled hundreds of soil sampling and groundwater test holes
          and installed dozens of groundwater monitoring wells in
          suspected/confirmed PFAS / PFOA areas. Our rigorous PFAS drilling
          quality control process allows for the most accurate samples possible.{' '}
        </p>
        <p>
          Call us on <CallLink /> for more information.
        </p>

        <h3>Past Project Partners</h3>
        <p>
          Backyard Bores & Geotech Drilling Pty Ltd have successfully completed
          works for the following:
        </p>
        <ul>
          <li>Mackay Regional Council</li>
          <li>Isaac Regional Council</li>
          <li>Whitsunday Regional Council</li>
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

        <h3>Standard Details We Require to Provide a Quote</h3>

        <ul>
          <li>Number of holes to drill</li>
          <li>Number of monitoring wells to install</li>
          <li>Physical address or GPS of the drilling sites</li>
          <li>Is concrete cutting or coring required</li>
          <li>Is vacuum NDD required or hand auger to 1m or 1.5m</li>
          <li>Protruding monument or flush mount Gatic cover</li>
          <li>Bollards required</li>
          <li>
            What type of sampling is required (from auger at depth, push tube,
            split spoon)
          </li>
          <li>What depths and frequencies are these samples required</li>
          <li>
            Is stem/equipment decon required between holes, and what type of
            decon is preferred
          </li>
          <li>Estimated completion dates of work</li>
          <li>What paperwork (SWMS, JRA, WH&R) is required</li>
          <li>
            What off/on site inductions are our crew required to undertake
          </li>
          <li>Are there any site specific PPE requirements</li>
          <li>Are there any drilling rig limitations</li>
        </ul>
      </PageSection>

      {/* <StyledLinkButton href="/help/new-install-tips" fullWidth margin="1rem auto">
        Learn how to maintain a new bore and/or pump.
      </StyledLinkButton> */}
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
