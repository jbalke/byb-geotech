import Aside from 'components/Aside';
import Banner from 'components/Banner';
import CallLink from 'components/CallLink';
import ContactForm from 'components/ContactForm';
import { StyledLink } from 'components/Link';
import StyledNextLink from 'components/Link/StyledNextLink';
import PrivacyDisclaimer from 'components/PrivacyDisclaimer';
import { Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from 'styles/style-constants';
import { EMAIL, PHONE } from '../constants';

const StyledPrivacyDisclaimer = styled(PrivacyDisclaimer)`
  margin-top: 3rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  width: 100%;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: auto 300px;
  }
`;

const StyledAside = styled(Aside)`
  margin: 0 auto;
  width: 80%;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin: 3rem 0;
    width: 100%;
  }
`;

const ContactDetails = styled.address`
  font-size: 1rem;

  p {
    margin: 0.5em 0;
  }

  h2 {
    font-size: 1.5em;
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 1rem;
  }
`;

type Props = {};

function Contact(props: Props) {
  return (
    <>
      <Banner
        title="Contact Us"
        description="You can contact us TOLL FREE on 1800 193 194, email or our easy-to-use contact form."
      />
      <Wrapper padding="xl">
        <Container>
          <div>
            <h2>Send Us A Message</h2>
            <ContactForm />
          </div>
          <div
            css={`
              display: flex;
              flex-flow: column nowrap;
              gap: 2rem;
            `}
          >
            <ContactDetails>
              <h2>Direct Contact</h2>
              <p>
                <strong>Toll Free:</strong> <CallLink />
              </p>
              <p>
                <strong>Office:</strong>{' '}
                <StyledLink href={`tel:${PHONE.MOBILE.NUMBER}`}>
                  {PHONE.MOBILE.DISPLAY}
                </StyledLink>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <StyledLink href={`mailto:${EMAIL.INFO}`}>
                  {EMAIL.INFO}
                </StyledLink>
              </p>
            </ContactDetails>
            {/* <StyledAside type="question" title="Looking for bores near you?">
              <p>
                Try our new{' '}
                <StyledNextLink href="/bore-search">Bore Search</StyledNextLink>
                ! Just enter your address to see how many bores are nearby.{' '}
                <strong>It&apos;s free!</strong>
              </p>
            </StyledAside> */}
          </div>
        </Container>
        <StyledPrivacyDisclaimer />
      </Wrapper>
    </>
  );
}

Contact.layout = SiteLayout;
export default Contact;
