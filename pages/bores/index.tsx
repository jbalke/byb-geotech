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
  { label: 'FAQ', href: '/faq' },
  { label: 'New Bore Checklist', href: '/bores/checklist' },
  { label: 'Request a Quote', href: '/request-a-quote' },
  { label: 'Bore Search', href: '/bore-search' },
  { label: 'New Bore & Pump Tips', href: '/bores/new-install' },
];

type Props = {};
function index(props: Props) {
  return (
    <ContentPage
      title="Water Bore Drilling"
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
        <h2>Why get a bore?</h2>
        <p>
          You can save lots of money on your water bills! A single bore can save
          you thousands of dollars over its life.
        </p>
        <p>
          We can have a new bore drilled (with pump) within a morning or
          afternoon and you can be watering your lawn before we drive away. You
          don&apos;t even have to be home at the time!
        </p>
        <p>
          There are a few things we need your help with to ensure we can get the
          job done as quickly and smoothly as possible, refer to our handy{' '}
          <StyledNextLink href="/bores/checklist">checklist</StyledNextLink>.
        </p>
        <h2>But, aren&apos;t bores expensive?</h2>
        <p>
          They are not expensive at all! We are offering a great price using the
          latest, international best practice standards and equipment for a
          completed and cased PVC bore.
        </p>
        <p>
          Most areas can have a bore drilled and a pump equipped for{' '}
          <em>less than $2900!</em>
        </p>
        <p>We also offer a Seniors and Carers discount!</p>
        <h2>
          OK, so what else do I need to consider before having a bore drilled?
        </h2>
        <p>
          While we try our best to make the whole process as simple and
          hassle-free as possible, here&apos;s a few things you should consider
          before deciding to have a bore drilled.
        </p>
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
        <h3>Location of utilities</h3>
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
