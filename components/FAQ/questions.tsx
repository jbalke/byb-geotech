// tslint:disable react-a11y-anchors

import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import CallLink from '../CallLink';
import { ExternalLink, StyledLink } from '../Link';
import StyledNextLink from '../Link/StyledNextLink';

export type Question = {
  uuid: string;
  heading: string;
  id?: string;
  panel: JSX.Element;
};

const Subtext = styled.p`
  font-family: 'Public Sans';
  font-style: italic;
  font-size: 0.8em;
  line-height: 1.3;
  letter-spacing: 0.04em;
`;

const questions: Question[] = [
  {
    uuid: v4(),
    heading: 'What is a bore?',
    panel: (
      <>
        <p>
          A bore is a means to take water from the underground aquifer and this
          water brought to the surface by an electric or solar pump or by a
          mechanical windmill.
        </p>
        <p>
          The most common type of modern bore is made from PVC and is 100mm –
          150mm diameter with an electric pump attached.
        </p>
        <p>
          There are other types of bores and they all differ slightly in their
          construction and appearance.
        </p>
        <p>
          A steel or PVC pipe 25 – 50mm diameter coming out of the ground is
          likely to be a spear.
        </p>
        <p>
          A water well approx. 900mm to 1800mm diameter is also a means to
          extract ground water using a pump or windmill.
        </p>
        <p>
          Water bores can be made from steel or PVC and can vary from 75mm to
          350mm diameter.
        </p>
        <p>Flow rates can vary from 5L/min to 50 L/s.</p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'How much does drilling a bore typically cost?',
    panel: (
      <>
        <p>
          Cheaper than you might think! We are offering a great price using the
          latest, international best practice standards and equipment for a
          completed and cased PVC bore.
        </p>
        <p>
          Most areas can have a bore drilled and a pump equipped for less than
          $2900.
        </p>
        <p>
          <em>Seniors and Carers discount available!*</em>
        </p>
        <p>
          Call us now on <CallLink /> or use our{' '}
          <StyledNextLink href="/request-a-quote">
            online quote form
          </StyledNextLink>{' '}
          for an obligation free quote!
        </p>
        <Subtext>
          *Not valid with any other offer. No other offers allowed, discount
          applies to standard drilling rates not to already discounted rates.
        </Subtext>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Do I need a permit / licence / permission before drilling?',
    panel: (
      <>
        <p>
          <em>No</em>. If you are a homeowner and intend to use the water for
          non-commercial purposes (yards, pool, gardens, lawns) there is{' '}
          <em>no restriction</em> drilling for water.
        </p>
        <p>
          There are some small areas south of the river that are sensitive and
          it’s best to contact us so we can discuss the limited requirements in
          these small areas.
        </p>
        <p>
          If you are a commercial enterprise or intend to use the water for a
          commercial purpose,{' '}
          <StyledLink href="/contact">contact us</StyledLink> and we can advise
          the best contact at DRDMW for your Development Permit application.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Why should I use a licensed driller?',
    panel: (
      <>
        <p>
          <strong>Backyard Bores and Geotech Drilling</strong> have several
          licensed drillers and we work to relevant government requirements.
        </p>
        <p>
          If you are getting a quote from any driller, ask for their licence
          number and to see their current Queensland Driller&apos;s Licence. You
          can search for their name on the{' '}
          <strong>Qld Registered Drillers List</strong>{' '}
          <ExternalLink
            href="https://www.dnrm.qld.gov.au/__data/assets/pdf_file/0004/99760/drillers-register.pdf"
            target="_blank"
            label="here"
          />{' '}
          before you engage them to drill. If they are{' '}
          <strong>not listed</strong>, they are <strong>not licensed</strong>.
          Chances are, if they don&apos;t have a Driller&apos;s Licence, they
          won’t construct the bore to ensure the best long-term performance as
          per industry international best practices. They probably won&apos;t
          have <strong>public liability insurance</strong> either. If they
          damage anything at your property, YOU will have to foot the bill.
        </p>
        <p>
          Use a licensed driller who has all relevant insurances, why risk it to
          save a couple of hundred dollars?
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'How long does it typically take to drill a bore?',
    panel: (
      <>
        <p>
          Drilling and casing can take 4-6 hours depending on the material being
          drilled and the depth.
          <br />
          It&apos;s a four step process:
        </p>
        <ol>
          <li>Drilling</li>
          <li>Installing casing</li>
          <li>
            Cleaning out the inside of the casing to remove damaging sands, muds
            and clay
          </li>
          <li>Flow rate, salt, iron, PH, testing (if required).</li>
        </ol>
      </>
    ),
  },
  {
    uuid: v4(),
    heading:
      'Do I need a driller to come over and look at the site and provide a quote?',
    panel: (
      <>
        <p>
          No, unless the location you are thinking of is in a difficult place to
          access or needs fence sections removed or trees cut back. Please call
          us on <CallLink /> and discuss if you have any concerns.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'What size casing is supplied?',
    panel: (
      <>
        <p>
          100mm diameter casing with factory cut fine slots (0.4 - 0.5mm) is
          used in the majority of bores, some locations need 0.8mm. We can
          install 5”, 125mm casing or 80mm casing as required, surcharges may
          apply.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Where can I put a bore in my yard?',
    panel: (
      <>
        <p>
          When considering a location in your yard for a bore, please take the
          following into account:
        </p>
        <ul>
          <li>
            How easy will it be to get the drilling rig to that location? Please
            see below for rig dimensions.
          </li>
          <li>
            How easy (and costly) will it be to get power to the pump? Please
            keep in mind that the pump does not need to be directly on top of
            the bore, it can be inside a fence, under your house, in a shed,
            etc.
          </li>
          <li>
            How easy will it be to distribute the water from the pump outlet? Do
            you want the pump outlet near the fence so you can run poly around
            your fence line to have taps every 10m or so?
          </li>
        </ul>
      </>
    ),
  },
  {
    uuid: v4(),
    heading:
      'What utilities do I need to search for in preparation for drilling?',
    panel: (
      <>
        <p>
          Please try to locate the underground services on your property, the
          hardest one to find is the pipe from your house to the sewer mains.
        </p>
        <p>
          If you have your house drainage plans (house connection plans), that
          would be fantastic. Also look for town water, power, storm water, down
          pipes, phone etc.
        </p>
        <p>
          We will contact 1100 (Dial Before you Dig) but they only provide
          locations of power, major sewer and telephone at the street, not on
          your property.
        </p>
        <p>
          It’s <em>VERY IMPORTANT</em> for you to locate these services as it is
          your responsibility as the landowner or their authorised
          representative.
        </p>
        <p>
          Call us on <CallLink /> if you have concerns, we can apply for the
          plans from council for a $85 fee.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'What does the homeowner need to do to prepare the drilling site?',
    panel: (
      <>
        <p>
          Please clear up the area surrounding the proposed drilling site. We
          need about a 2m radius of cleared area.
        </p>
        <p>
          If there are trees or stumps, branches or shrubs in the immediate area
          please trim or remove them.
        </p>
        <p>
          If we need to come in through a fence panel, please make sure
          it&apos;s removed by the time we arrive. If we need to trim trees or
          remove fence panels we will have to add an hourly surcharge.
        </p>
        <p>
          Please call us on <CallLink /> and notify our staff if you have a
          fence that needs removing or the area needs trees and/or branches cut
          down.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Will the drilling rig fit in my yard?',
    id: 'drilling-rig',
    panel: (
      <>
        <p>
          Our rig is mounted on a light truck and is 2.35m wide (at the
          mirrors), 5.7m long and 2.7m high.
        </p>
        <p>
          We need to reverse the truck over the top of the desired drilling
          location.
        </p>
        <p>
          If you have any concerns, please call us on <CallLink /> and we can
          come inspect and do some measurements.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'How can I see what days/times you are available to drill?',
    panel: (
      <>
        <p>
          Click{' '}
          <ExternalLink
            href="https://backyardbores.youcanbook.me/"
            label="here"
          />{' '}
          to access our online calendar but we operate 7 days a week.
        </p>
        <p>
          Some weeks we can be fully booked with local or out-of-town projects.
          It’s best to check the calendar to see when we have a free block.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Do you accept credit cards and direct bank transfer?',
    panel: (
      <>
        <p>
          <em>YES!</em> We accept Visa and Mastercard payments or direct bank
          transfer.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading:
      'Can you drill in South Mackay, East Mackay, Ooralea, Bakers Creek, Walkerston, etc?',
    panel: (
      <>
        <p>
          Please call us on <CallLink /> to discuss your options but often times{' '}
          <em>YES</em> you can.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Do you drill outside of Mackay area?',
    panel: (
      <>
        <p>
          <em>YES!</em> We can drill all around central Queensland and have
          drilled from Bowen to Marlborough and west to Moranbah.
        </p>
        <p>
          Mobilisation fees may apply, please call us on <CallLink /> to
          enquire.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Does backyard bores do divining, witching or dowsing for water?',
    panel: (
      <>
        <p>
          No. It doesn&apos;t work for us but{' '}
          <StyledLink href="/contact">contact us</StyledLink> and we can give
          you the numbers of several local diviners.
        </p>
        <p>
          We do have a good knowledge of the areas around Mackay that have water
          and what depth a usable bore will be.
        </p>
      </>
    ),
  },
];

export default questions;
