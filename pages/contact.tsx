import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import InputWarning from 'components/InputWarning';
import {
  Message,
  SubmitButton,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  InputSubtext,
  Wrapper,
} from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import ReCAPTCHA from 'react-google-recaptcha';
import { client } from '../utils/client';
import { useUIState } from '../context/ui-context';
import styled from 'styled-components';
import { ExternalLink, StyledLink } from 'components/Link';
import Aside from 'components/Aside';
import StyledNextLink from 'components/Link/StyledNextLink';
import { PHONE } from '../constants';
import { Theme } from '../styles/theme';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    grid-template-columns: 400px auto;
  }
`;

const div = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const RecaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-self: center;
`;

const StyledAside = styled(Aside)`
  margin: 2rem 0;
`;

const PrivacyDisclaimer = styled.section`
  border: 1px solid ${Theme.color.primary};
  font-size: 0.8rem;
  margin-top: 2rem;
  padding: 1em;
`;

const ContactDetails = styled.section`
  display: grid;
  gap: 0.5em;
  grid-template-columns: 1fr;
  font-size: 1.2rem;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    font-size: 1.5rem;
  }
`;

const ContactStatic = styled.div``;

interface IFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type Props = {};

function Contact(props: Props) {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'pending' | 'success' | 'fail'
  >('idle');

  const { theme } = useUIState();
  const recaptchaRef = useRef<ReCAPTCHA>(null!);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: IFormData) => {
    setFormStatus('pending');
    const token = await recaptchaRef.current.executeAsync();

    if (!token) {
      setFormStatus('fail');
      return;
    }

    try {
      await client('/api/contact', {
        ...data,
        token,
      });
      setFormStatus('success');
    } catch (error) {
      console.error(error.message);

      setFormStatus('fail');
    }
  };

  return (
    <Wrapper maxWidth='80ch'>
      <Container>
        <div>
          <ContactDetails>
            <div>
              <strong>Toll-free number:</strong>{' '}
              <StyledLink href={`tel:${PHONE.MAIN}`}>{PHONE.MAIN}</StyledLink>
            </div>
            <div>
              <strong>Mobile:</strong>{' '}
              <StyledLink href={`tel:${PHONE.MOBILE}`}>
                {PHONE.MOBILE}
              </StyledLink>
            </div>
          </ContactDetails>
          <StyledAside>
            <strong>Looking for bores near you?</strong>
            <p>
              Try our new{' '}
              <StyledNextLink href='/bore-search'>Bore Search</StyledNextLink>!
              Just enter your address to see how many bores are nearby.{' '}
              <strong>It's free!</strong>
            </p>
          </StyledAside>
        </div>
        <div>
          <h1>Contact Us</h1>
          {formStatus === 'success' ? (
            <Message type='success'>
              Thank you for your message, we'll be in touch as soon as possible!
            </Message>
          ) : (
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <StyledLabel htmlFor='name'>Name</StyledLabel>
                <StyledInput
                  id='name'
                  type='text'
                  placeholder='Your name'
                  {...register('name', {
                    required: 'Required',
                    minLength: { value: 3, message: 'Too short' },
                    maxLength: { value: 25, message: '25 character limit' },
                  })}
                />
                {errors.name && <InputWarning message={errors.name.message!} />}

                <StyledLabel htmlFor='email' aria-describedby='emailDescribe'>
                  Email
                </StyledLabel>
                <StyledInput
                  id='email'
                  type='email'
                  placeholder='Your email'
                  {...register('email', {
                    required: 'Required',
                    validate: (value) =>
                      isEmail(value) || 'Not a valid emaill address',
                  })}
                />
                <InputSubtext id='emailDescribe'>
                  We'll never spam you or share your email address with anyone
                  else.
                </InputSubtext>
                {errors.email && (
                  <InputWarning message={errors.email.message!} />
                )}

                <StyledLabel htmlFor='phone'>Phone</StyledLabel>
                <StyledInput
                  id='phone'
                  type='text'
                  placeholder='Your phone number'
                  {...register('phone', {
                    required: 'Required',
                    validate: (value) =>
                      isMobilePhone(value, 'en-AU') ||
                      'Please provide a valid mobile phone number',
                  })}
                />
                {errors.phone && (
                  <InputWarning message={errors.phone.message!} />
                )}

                <StyledLabel
                  htmlFor='message'
                  aria-describedby='messageDescribe'
                >
                  Message
                </StyledLabel>
                <StyledTextarea
                  id='message'
                  placeholder='Message'
                  rows={5}
                  {...register('message', {
                    required: 'Required',
                    minLength: {
                      value: 25,
                      message: 'Please tell us more about your requirements',
                    },
                    maxLength: { value: 500, message: 'Too long' },
                  })}
                />
                <InputSubtext id='messageDescribe'>
                  Please include your street and suburb if your enquiry is about
                  any of our services.
                </InputSubtext>
                {errors.message && (
                  <InputWarning message={errors.message.message!} />
                )}
                <SubmitButton
                  isDisabled={!isValid}
                  isLoading={formStatus === 'pending'}
                  fullWidth
                  margin='1rem 0 0 0'
                  size='lg'
                  type='submit'
                >
                  Submit
                </SubmitButton>
                {formStatus === 'fail' && (
                  <Message type='danger'>
                    Message could not be sent, please try again later.
                  </Message>
                )}
                <RecaptchaContainer>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size='invisible'
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    badge={'inline'}
                    theme={theme}
                  />
                </RecaptchaContainer>
              </form>
              <PrivacyDisclaimer>
                <h2>Privacy Act 1998</h2>
                <p>
                  Backyard Bores has registered as an opt in small business for
                  the Privacy Act 1998 and we have committed to uphold relevant
                  sections of the act and how we deal with your information.
                </p>
                <p>
                  For more information please see the{' '}
                  <ExternalLink
                    href='https://www.oaic.gov.au/privacy/the-privacy-act/'
                    label='Office of the Australian Information Commissioner'
                    target='_blank'
                  />
                  .
                </p>
                <p>
                  You can read our Privacy Policy{' '}
                  <ExternalLink
                    label='here'
                    href='/BBD-ENV_POL_&_PROC.pdf'
                    target='_blank'
                  />
                  .
                </p>
              </PrivacyDisclaimer>
            </div>
          )}
        </div>
      </Container>
    </Wrapper>
  );
}

Contact.layout = SiteLayout;
export default Contact;
