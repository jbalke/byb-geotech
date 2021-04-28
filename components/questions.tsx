// tslint:disable react-a11y-anchors

import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import CallLink from './CallLink';
import { ExternalLink, StyledLink } from './Link';

export type Question = {
  uuid: string;
  heading: string;
  id?: string;
  panel: JSX.Element;
};

const Subtext = styled.p`
  font-family: 'Public Sans Italic';
  font-size: 0.8em;
  margin-top: 2rem;
  line-height: 130%;
  letter-spacing: 0.04em;
`;

const questions: Question[] = [
  {
    uuid: v4(),
    heading: 'Why should I use a licensed driller?',
    panel: (
      <>
        <p>
          Backyard Bores and Geotech Drilling have several licensed drillers and
          we work to relevant government requirements.
        </p>
        <p>
          If you are getting a quote from any driller, ask for their licence
          number and to see their current Queensland Driller's Licence. You can
          search for their name here on the{' '}
          <strong>Qld Registered Drillers List</strong>{' '}
          <ExternalLink
            href='https://www.dnrm.qld.gov.au/__data/assets/pdf_file/0004/99760/drillers-register.pdf'
            target='_blank'
            label='here'
          />{' '}
          before you engage them to drill. If they are{' '}
          <strong>not listed</strong>, they are <strong>not licensed</strong>.
          Chances are, if they don't have a Driller's Licence, they won’t
          construct the bore to ensure the best long-term performance as per
          industry international best practices. They probably won't have{' '}
          <strong>public liability insurance</strong> either. If they damage
          anything at your property, YOU will have to foot the bill.
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
    heading: 'Do I need council approval to get a bore?',
    panel: (
      <>
        <p>
          <strong>NO!</strong> Local councils{' '}
          <strong>are not and should not</strong> be involved in the process of
          drilling for water on your private property. The resource you are
          tapping into is a federal reserve owned by the people of Australia.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'How much does it cost? I thought bores were expensive!',
    panel: (
      <>
        <p>
          They are not expensive at all! We are offering a great price using the
          latest, international best practice standards and equipment for a
          completed and cased PVC bore.
        </p>
        <p>
          <strong>Seniors and Carers discount available!*</strong>
        </p>
        <p>
          Call us now on <CallLink /> for an obligation free quote!
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
    heading: 'Does Backyard Bores do divining (dowsing) for water?',
    panel: (
      <>
        <p>
          No. It doesn't work for us but{' '}
          <StyledLink href='/contact'>contact us</StyledLink> and we can give
          you the numbers of several local diviners. We do have a good knowledge
          of the areas around Mackay that have water and what depth a usable
          bore will be.
        </p>
        <p>
          When considering a location in your yard for a bore , please take the
          following into account:
        </p>
        <ol>
          <li>
            How easy will it be to get the drilling rig to that location? Please
            see{' '}
            <StyledLink href='#drilling-rig'>
              Will the drilling rig fit in my yard?
            </StyledLink>{' '}
            below for rig dimensions.
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
        </ol>
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
          It’s <strong>VERY IMPORTANT</strong> for you to locate these services
          as it is your responsibility as the landowner or their authorised
          representative. Call us on <CallLink /> if you have concerns, we can
          apply for the plans from council for a $58 fee.
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
    heading: 'What do I need to do to prepare the drilling site?',
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
          If we need to come in through a fence panel, please make sure it's
          removed by the time we arrive. If we need to trim trees or remove
          fence panel we will have to add an hourly surcharge.
        </p>
        <p>
          Please call us on <CallLink /> and we can come inspect and do some
          measurements.
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
            href='https://backyardbores.youcanbook.me/'
            label='here'
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
          <strong>YES!</strong> We accept Visa and Mastercard payments or direct
          bank transfer.
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
          <strong>YES!</strong> you can.
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
          <strong>YES!</strong> We can drill all around central Queensland and
          have drilled from Bowen to Marlborough and west to Moranbah.
        </p>
        <p>
          Mobilisation fees may apply, please call us on <CallLink /> to
          enquire.
        </p>
      </>
    ),
  },
];

export default questions;
