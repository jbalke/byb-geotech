// tslint:disable react-a11y-anchors

import StyledNextLink from 'components/StyledNextLink';
import * as React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { v4 } from 'uuid';

const StyledLink = styled(StyledNextLink)`
  &,
  &:active,
  &:visited {
    color: ${Theme.color.link};
    font-weight: 600;
    text-decoration: none;
  }

  &:hover {
    color: ${Theme.color.linkHover};
    transition: ${Theme.color.transition};
  }
`;

export type Question = {
  uuid: string;
  heading: string;
  panel: JSX.Element;
};

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
          number and to see their current Queensland Driller's Licence. You can{' '}
          <a
            href='https://www.dnrm.qld.gov.au/__data/assets/pdf_file/0004/99760/drillers-register.pdf'
            target='_blank'
            rel='noreferrer noopener'
          >
            search for their name here on the Qld Registered Drillers List
          </a>{' '}
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
          completed and cased PVC bore,{' '}
          <StyledLink href='/contact'>contact us</StyledLink> us today for a
          quote.
        </p>
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
            <StyledLink href='#drilling-in-my-yard'>
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
          representative. <StyledLink href='/contact'>Call us</StyledLink> if
          you have concerns, we can apply for the plans from council for a $58
          fee.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Will the drilling rig fit in my yard?',
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
          If you have any concerns, please{' '}
          <StyledLink href='/contact'>call us</StyledLink> and we can come
          inspect and do some measurements.
        </p>
      </>
    ),
  },
];

export default questions;
