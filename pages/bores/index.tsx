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

const Subtext = styled.p`
  font-family: 'Public Sans';
  font-style: italic;
  font-size: 0.8em;
  line-height: 1.3;
  letter-spacing: 0.04em;
`;

const relatedPages: RelatedPage[] = [
  { label: 'Drilling FAQ', href: '/help/faq' },
  { label: 'New Bore Checklist', href: '/bores/checklist' },
  { label: 'Request a Quote', href: '/request-a-quote' },
  { label: 'Bore Search', href: '/bore-search' },
  { label: 'New Bore & Pump Tips', href: '/help/new-install-tips' },
];

type Props = {};
function index(props: Props) {
  return (
    <ContentPage
      title="Water Bore Drilling"
      description="A bore can save you lots of money on your water bills, and they are not expensive!"
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
        <h2>Why get a bore?</h2>
        <p>
          You can save lots of money on your water bills! A single bore can save
          you thousands of dollars over its life.
        </p>
        <p>
          We can drill a new bore and supply and install your new pump within a
          morning or afternoon, and you can be watering your lawn before we
          drive away. You don&apos;t even have to be home at the time!
        </p>
        <p>
          There are a few things we need your help with to ensure we can get the
          job done as quickly and smoothly as possible; refer to our handy{' '}
          <StyledNextLink href="/bores/checklist">checklist</StyledNextLink>.
        </p>
        <h2>But, aren&apos;t bores expensive?</h2>
        <p>They are not expensive at all! </p>
        <p>
          We have perfected a local modification using the latest, international
          best practice methods, standards and equipment for a completed and
          cased PVC bore.
        </p>
        <p>
          Most areas can have a bore drilled, <b>and</b> a pump supplied and
          installed for <em>less than $3300!</em> inc GST
        </p>
        <p>We also offer a Seniors and Carers discount!</p>
        <p>
          <b>15%</b> discount off the original price of water bore drilling and
          installation.{' '}
        </p>
        <p>
          <b>10%</b> discount off the original price to supply and install the
          pump.
        </p>
        <Subtext>
          Not valid with any other offer. No other offers are allowed; discount
          applies to standard drilling rates only and not already discounted
          rates. We need to see your Seniors or Carers card for the discount to
          be applied.
        </Subtext>
        <h2>
          OK, what else do I need to consider before having a bore drilled?
        </h2>
        <p>
          While we try our best to make the whole process as simple and
          hassle-free as possible, here are a few things you should consider
          before deciding to have a bore drilled.
        </p>
        <h3>Where to put the bore</h3>
        <p>
          Our drilling rig is mounted on a light truck which will need access to
          the location you&apos;d like the bore drilled. See the{' '}
          <StyledNextLink href="/help/faq">FAQ</StyledNextLink> for truck
          dimensions and more.
        </p>
        <p>
          Is there power nearby for the pump and, if not, how costly it might be
          to install? While the pump does not need to be directly on the bore
          (it can be under the house, in a shed, through a fence, etc.), please
          consider how easy it will be to distribute the water from the pump
          outlet to where you will need it.
        </p>
        <p>
          If you think your preferred location might be difficult to access or
          needs fence sections removed or trees cut back, call us on{' '}
          <StyledLink href={`tel:${PHONE.MAIN.NUMBER}`}>
            {PHONE.MAIN.DISPLAY}
          </StyledLink>{' '}
          to discuss your options.
        </p>
        <h3>Location of utilities</h3>
        <p>
          Please try to locate the underground services on your property,
          especially the pipe to the sewer mains.
        </p>
        <p>
          If you&apos;re unsure where any services are on your property, we can
          contact the council for this information (for an additional $100 fee).
          See the <StyledNextLink href="/help/faq">FAQ</StyledNextLink> for more
          details.
        </p>
        <h3>Disposal of soil</h3>
        <p>
          Usually, there are 3 - 5 wheelbarrow loads of material you need to
          find a place for as we cannot take this with us. If you have any holes
          or low points in your yard, this will be a great time to fill them.
        </p>
        <h2>I&apos;ve decided I want a bore; what&apos;s next?</h2>
        <p>
          You can call us on <CallLink /> for a free quote, but why not try our{' '}
          <StyledNextLink href="/request-a-quote">
            online quote form
          </StyledNextLink>
          ? It&apos;s quick and easy, and we&apos;ll typically contact you with
          a response in less than an hour (during regular business hours)!
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
