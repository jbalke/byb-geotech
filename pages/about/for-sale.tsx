import { Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import Banner from 'components/Banner';
import styled from 'styled-components';
import ContentPage from 'components/ContentPage';
import StyledNextLink from '../../components/Link/StyledNextLink';
import { StyledLink } from '../../components/Link';

const PageSection = styled.section``;

type Props = {};

function ForSale(props: Props) {
  return (
    <ContentPage
      title="Business For Sale"
      description="Interested in a new business opportunity?"
      relatedPages={[
        { label: 'Contact Us', href: '/contact' },
        { label: 'Our Story', href: '/about/our-story' },
      ]}
    >
      <PageSection>
        <h2>Thinking about buying a drilling company?</h2>
        <p>
          Please get in touch with us if you are keen to get into or further
          your involvement in the drilling industry because, like every
          privately owned business, we are for sale for the right price.
        </p>
        <p>
          If you want the flexibility to be your own boss, decide when you want
          to work, and decide how hard you work, then this is an unmissable
          opportunity.
        </p>
        <p>
          Unlike most businesses, if you choose to work harder in this drilling
          business, <b>you will earn more</b>. Does grossing $1000+ per hour
          sound good between you and an offsider?
        </p>
        <p>
          It takes a certain mindset to be capable and effective as a driller
          and a drilling company executive, and not everyone is suited. When you
          buy this business, you get access to experienced drillers and
          offsiders who currently contract with us.
        </p>
        <p>
          You will probably need assistance in the first 6-12 months, and we
          will have experts and very experienced members of our team there to
          help. We can help guide you through the intricacies of the Mackay
          drilling environment.
        </p>
        <p>
          Our technology maturity level is very high, and we have been paperless
          with invoicing, quotes and appointment scheduling for 7 years. All of
          our bore reports and inspections, pump assessments and repair or
          replacements have an electronic checklist with photos and signatures.
          We have detailed electronic bore maps of Mackay with discovered bores
          and their details as well as thousands of test hole details.
        </p>
        <p>
          Backyard Bores are the preferred supplier to many local and national
          companies, and we foster and boost that relationship yearly.
        </p>
        <p>
          We have an excellent working relationship with many complementary
          services like vacuum NDD, concrete cutting and coring and underground
          service locators.
        </p>
        <p>
          Our detailed demand schedule and dashboard will give you priceless
          intellectual property and trends based on 21 years of invoices and
          weather patterns.
        </p>
        <p>
          The equipment you will be purchasing is in very good condition. The
          drilling rig was built and has been serviced in Mackay engineering
          workshops by experienced engineers and tradespeople for 21 years.
        </p>
        <p>
          The drilling rig is exceptionally reliable and low risk, with controls
          and shut offs that exceed current standards.
        </p>
        <p>
          Low risk work is the most important thing about our business and is
          our main goal.
        </p>
        <p>
          The drilling rig is mounted on a very reliable 2010 model MR truck
          with several must-have mods and some serious electronic upgrades.
        </p>
        <p>
          Our main drill stems are less than 4 years old and our current stock
          of casing, pumps and spares depend on the season.
        </p>
        <h2>Interested?</h2>
        <p>
          Send us an email to{' '}
          <StyledLink href="mailto:forsale@backyardbores.com">
            forsale@backyardbores.com
          </StyledLink>
          . We will contact you to discuss the business and answer any questions
          after you sign an NDA and some other paperwork.
        </p>
        <p>
          We have very agreeable terms and conditions for the right buyer,
          including an option of vendor financing, so if you are interested,
          please get in touch with us.
        </p>
        <p></p>
      </PageSection>
    </ContentPage>
  );
}

ForSale.layout = SiteLayout;
export default ForSale;
