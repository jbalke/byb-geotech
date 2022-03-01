import ContentPage, { RelatedPage } from 'components/ContentPage';
import { ExternalLink } from 'components/Link';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';

const PageSection = styled.section``;

const relatedPages: RelatedPage[] = [
  { label: 'Water Testing', href: '/help/water-testing' },
  { label: 'Geotech Services', href: '/geotech/index' },
  { label: 'Bore Cleanout', href: '/help/bore-cleanout' },
  { label: 'Groundwater Protection', href: '/help/groundwater-protection' },
  { label: 'Bore Search', href: '/bore-search' },
];

type Props = {};

function index(props: Props) {
  return (
    <ContentPage
      title="PFAS / PFOA advice"
      description="PFAS / PFOA advice for your health and bore water usage"
      relatedPages={relatedPages}
    >
      <PageSection>
        <h2>What are PFOA / PFAS (fire fighting foam)?</h2>
        <p>
          As per Environmental Health Standing Committee (enHealth) of the
          Australian Health Protection Principal Committee:
        </p>
        <p>
          <i>
            {' '}
            &quot;Per- and poly-fluoroalkyl substances, or &quot;PFAS&quot;, are
            a class of manufactured chemicals that have been used since the
            1950s to make products that resist heat, stains, grease and water.
            Until recently, this group of chemicals was known as
            &quot;perfluorinated chemicals&quot;, or &quot;PFCs&quot;. The name
            change has come about to avoid confusion with another group of
            chemicals that are relevant to climate change, which are also known
            as &quot;PFCs&quot;.
          </i>
        </p>
        <p>
          Products that may contain PFAS include furniture and carpets treated
          for stain resistance, foams used for firefighting, fast food or
          packaged food containers, make up and personal care products and
          cleaning products. Other chemicals used in these applications may be
          precursors to PFAS, and the PFAS are formed when these chemicals are
          released into the environment.
        </p>
        <p>
          PFAS are of concern around the world because they are not readily
          broken down in the environment and so can persist for a long time.
          Their widespread use and persistence means that many types of PFAS are
          ubiquitous global contaminants.
        </p>
        <p>
          The PFAS of most concern are perfluorooctane sulfonate (PFOS) and
          perfluorooctanoic acid (PFOA). Many countries have phased out, or are
          in the process of phasing out the use of PFOS and PFOA due to concerns
          about their persistence, bioaccumulation and toxicity. Perfluorohexane
          sulfonate (PFHxS) is another chemical of the PFAS group and is present
          in some fire-fighting foams. PFHxS have also been used as raw
          materials or precursors to produce PFAS-based products.
        </p>
        <p>
          Because of their widespread use, people in Australia commonly have
          some PFOS, PFOA and PFHxS in their body. PFOS and PFOA are readily
          absorbed through the gut, and once these chemicals are in a
          person&apos;s body it takes about two to nine years, depending on the
          study, before those levels go down by half, even if no more is taken
          in.&quot;
        </p>
      </PageSection>
      <PageSection>
        <h2>Local advice from your local drillers</h2>
        <p>
          Backyard Bores & Geotech Drilling Pty Ltd have drilled hundreds of
          soil sampling and groundwater test holes and installed dozens of
          ground water monitoring wells in suspected PFAS / PFOA areas between
          Bowen and Rockhampton over the last few years.
        </p>
        <p>
          We have a very strict PFAS drilling quality control process that we
          adhere to. This allows for the most accurate samples possible. Please
          contact us for more information.
        </p>
        <p>
          The two main areas around Mackay that have suspected (or confirmed)
          samples of PFAS are around the Mackay Airport and the NQBP Mackay Port
          (and possibly around Hay Point Coal Terminal). North Queensland Bulk
          Ports Corporation (NQBP) Acting CEO Brendan Webb said &quot;while
          testing had shown the presence of PFAS, based on the information
          available, it represented a low risk to human health.&quot;
        </p>
        <p>
          Check the images at the bottom of the page and if you are in the
          shaded regions and have a water bore, please read this advice given in
          person to me by the Queensland Health Chief Medical Officer of Health
          Protection Branch.
          <ol>
            <li>Don&apos;t drink the bore water.</li>
            <li>
              Don&apos;t water leafy green vegetables or root vegetables with
              bore water and then consume them.
            </li>
            <li>
              Do continue to use the bore water for watering the yard, grass,
              trees.
            </li>
            <li>
              Do continue the use the bore water for watering fruit trees.
            </li>
            <li>
              PFAS cannot enter the body through contact with the skin, it can
              only be ingested.{' '}
            </li>
          </ol>
        </p>
        <p>
          If you live in the shaded areas, drilling a new bore is still a great
          way to cut down on council water rates, we just need to be wise with
          our use of the water. 92% of the people who have a domestic bore use
          it for keeping gardens lush and grass green and healthy.
        </p>
        <p>
          If you have concerns, please read the links below or call us and we
          can discuss your options. Your bore water can be tested for a fee to
          look for traces of PFAS.
        </p>
        <p>
          For more information on PFAS / PFOA, please see the links to recently
          published documents from relevant authorities.
        </p>

        <ul>
          <li>
            <em>Queensland Health</em> have published a
            <ExternalLink
              href="https://backyardbores.com/resources/QHealth_pfas-fact-sheet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              label=" fact sheet here"
            />{' '}
          </li>
        </ul>

        <ul>
          <li>
            <em>Air Services Australia</em> have published an information sheet
            relating to the contamination in the
            <ExternalLink
              href="http://www.airservicesaustralia.com/wp-content/uploads/Mackay-Airport_information-sheet-010819.pdf"
              target="_blank"
              rel="noopener noreferrer"
              label=" Mackay Airport here"
            />{' '}
          </li>
        </ul>

        <ul>
          <li>
            <em>Environmental Health Standing Committee</em> (enHealth) of the
            Australian Health Protection Principal Committee have an
            <ExternalLink
              href="https://www1.health.gov.au/internet/main/publishing.nsf/content/A12B57E41EC9F326CA257BF0001F9E7D/$File/PFAS-guide-stat-enHealth-2019.pdf"
              target="_blank"
              rel="noopener noreferrer"
              label=" information sheet here"
            />{' '}
          </li>
        </ul>
        <ul>
          <li>
            The Australian Federal <em>Department of Health</em> have a page for
            <ExternalLink
              href="https://www1.health.gov.au/internet/main/publishing.nsf/Content/ohp-pfas-hbgv.htm"
              target="_blank"
              rel="noopener noreferrer"
              label=" Health Based Guidance Values here"
            />{' '}
          </li>
        </ul>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
