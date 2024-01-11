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
  { label: 'Contact Us', href: '/contact' },
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
          you thousands of dollars a year. See our analysis and calculations at
          the bottom of this page.
        </p>
        <p>
          Let us help you along your journey to becoming self sufficient with
          your garden and yard watering needs. We can drill a new bore and
          supply and install your new pump within a morning or afternoon, and
          you can be watering your lawn before we drive away. You don&apos;t
          even have to be home at the time!
        </p>
        <p>
          Bores and pumps might be very new to you so we are here to answer your
          questions, and if we cannot assist you directly, we will provide you
          with contacts of those who can help you better. Check out our{' '}
          <StyledNextLink href="/help/faq">FAQ</StyledNextLink> on jargon for
          some more plain english explanation of terms.
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
          Most of our suitable drilling areas can have a bore drilled,{' '}
          <b>and</b> a pump supplied and installed for <em>less than $4000!</em>{' '}
          inc GST
        </p>
        <p>We also offer a Seniors and Carers discount!</p>
        <p>
          <b>15%</b> discount off the original price of water bore drilling and
          casing installation.{' '}
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
        <h2>$$$ Bore & Pump vs Town Water Supply - a price comparison</h2>
        <p>
          Why should you consider a bore and pump (around $3300) when you can
          buy a lot of town water for that price? Let&apos;s discuss it below.
        </p>
        <h3>Assumptions used below</h3>
        <p>
          {' '}
          <p>
            Mackay Regional Council issue water notices every six months in May
            and November. Water consumption charges for the 2021/2022 financial
            year are:{' '}
          </p>{' '}
          <p>Tariff 1 - (0-150 kilolitres) per half year $1.86/kL</p>
          <p> Tariff 2 - Over 150 kilolitres per half year $2.76/kL</p>
          <p></p>
          <ul>
            <li>
              Flow and pressure from the bore pump is the same as town supply
            </li>
            <li>
              Dry season = May – November usage: 2 hours per day, 14 hours per
              week. 8 months
            </li>
            <li>Wet season = Dec – April usage: 8 hours per week. 4 Months</li>
            <li>
              Big Pump = DAB 132M or similar Onga JJ600 or Davey with 1.3kW
              motor and up to 75L/min delivery
            </li>
            <li>
              Small Pump = DAB 62M or similar Onga JJ400 or Davey with 750W
              motor and up to 45L/min delivery
            </li>
            <li>
              Solar panels are not considered and power usage is at the highest
              Ergon tariff (Tariff 11) at 24.34c/kWh
            </li>
            <li>
              Original bore cost of $2000 pro rated over 10 years (expected
              lifespan of a bore is 20-50+ years)
            </li>
            <li>
              Original big pump cost of $1600 pro rated over 5 years (expected
              lifespan of a protected, maintained and serviced DAB is 6-12+
              years)
            </li>
            <li>
              Original small pump cost of $1100 pro rated over 5 years (expected
              lifespan of a protected, maintained and serviced DAB is 6-12+
              years)
            </li>
          </ul>
          <p>
            <h3>Calculations:</h3>
            Dry season. 8 months x 4.33 weeks per month = 34.6 weeks{' '}
          </p>
          <p>Wet season. 4 months = 52-34.6 = 17.4 weeks </p>
          <p>Flow rates per year: </p>
          <p>34.6 weeks x 14 hours usage per week = 484.4 hrs </p>
          <p>17.4 weeks x 8 hours per week = 139.2 hrs </p>Total hourly usage
          per year: 484.4+139.2 = 623.6 hours{' '}
          <p>Big pump = 3.6kL / hour x 623 hours = 2242kL per year </p>{' '}
          <p>Small pump = 2.4kL/ hour x 623 hours = 1495kL per year</p>
          <p>Power usage yearly costs: </p>
          <p>
            Big pump = 623 hours x 1.3kW = 810kWh x $0.2434 (Tariff 11) =
            $197.54
          </p>
          <p>
            Small pump = 623 hours x 0.75kW = 467kWh x $0.2434 (Tariff 11) =
            $113.66
          </p>
          <p>Big pump overall yearly costs: </p>
          <p>Bore cost pro rated over 10 years = $200/year</p>
          <p>Big pump cost pro rated over 5 years = $320/year</p>
          <p>Big pump power costs for 1 year = $197</p>
          <p>Total Bore + Big pump cost = $200+$320+$197 = $717</p>
          <p>
            Big pump cost per kL for comparison to MRC: $717/2242 ={' '}
            <b>32c per kL</b>
          </p>
          <p>Small pump overall yearly costs: </p>
          <p>Small pump cost pro rated over 5 years = $220/year</p>
          <p>Small pump power costs for 1 year = $113</p>
          <p>Total Bore + small pump cost = $200+$220+$113 = $533</p>
          <p>
            Small pump cost per kL for comparison to MRC: $533/1495 =
            <b>36c per kL</b>
          </p>
        </p>
        <h3>Town water - the easy calculation</h3>
        <p>First 150kL @ $1.86/kL = $279</p>
        <p>
          Compare to big pump delivery: 2242kL - 150kL = 2092kL@$2.76/kL =
          $5,773
        </p>
        <p>
          Total town water costs per year comparing to big pump (excluding
          network charges): $279 + $5773 = <b>$6052</b>
        </p>
        <p>
          Compare to small pump delivery: 1495kL - 150kL = 1345kL@$2.76/kL =
          $3,712
        </p>
        <p>
          Total town water costs per year comparing to small pump (excluding
          network charges): $279 + $3712 = <b>$3991</b>
        </p>
        <h3>Wrap up and summary</h3>
        <p>
          Using town water, and comparing water usage to the big pump, your
          yearly costs would be <b>$6052</b> in water and excess water charges
          to put 2,242kL of water on your yard/pool/garden.
        </p>
        <p>
          But, a new bore and pump only cost $3300 and the pro rated yearly
          costs for the same volume are <b>$717</b>
        </p>
        <p>
          Using town water, and comparing water usage to the small pump, your
          yearly costs would be <b>$3991</b> in water and excess water charges
          to put 1,495kL of water on your yard/pool/garden.
        </p>
        <p>
          But, a new bore and pump only cost $3300 and the pro rated yearly
          costs for the same volume are <b>$533</b>
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
