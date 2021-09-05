import Aside from 'components/Aside';
import { StyledLink } from 'components/Link';
import StyledNextLink from 'components/Link/StyledNextLink';
import { Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import ContactForm from 'components/ContactForm';
import PrivacyDisclaimer from 'components/PrivacyDisclaimer';
import { EMAIL, PHONE } from '../constants';
import CallLink from 'components/CallLink';
import Banner from 'components/Banner';

const StyledPrivacyDisclaimer = styled(PrivacyDisclaimer)`
  margin-top: 0;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    margin-top: 2rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    grid-template-columns: 1fr 400px;
  }
`;

const StyledAside = styled(Aside)`
  margin: 3rem auto;
  width: 80%;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
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

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    font-size: 1rem;
  }
`;

type Props = {};

function Contact(props: Props) {
  return (
    <>
      <Banner title="Contact Us" />
      <Wrapper>
        <Container>
          <div>
            <h2>Send Us A Message</h2>
            <ContactForm />
          </div>
          <div>
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
            <StyledAside type="question">
              <strong>Looking for bores near you?</strong>
              <p>
                Try our new{' '}
                <StyledNextLink href="/bore-search">Bore Search</StyledNextLink>
                ! Just enter your address to see how many bores are nearby.{' '}
                <strong>It&apos;s free!</strong>
              </p>
            </StyledAside>
          </div>
        </Container>
        <StyledPrivacyDisclaimer />
      </Wrapper>
    </>
  );
}

Contact.layout = SiteLayout;
export default Contact;
