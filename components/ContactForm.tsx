import InputWarning from 'components/InputWarning';
import {
  InputSubtext,
  Message,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  SubmitButton,
} from 'components/styled';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { useUIState } from 'context/ui-context';
import { Theme } from 'styles/theme';
import { client } from 'utils/client';

const RecaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-self: center;
`;

interface IFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type ContactFormsProps = {};

function ContactForm(props: ContactFormsProps) {
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

  if (formStatus === 'success') {
    return (
      <Message type='success'>
        Thank you for your message, we'll be in touch as soon as possible!
      </Message>
    );
  }

  return (
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
          validate: (value) => isEmail(value) || 'Not a valid emaill address',
        })}
      />
      <InputSubtext id='emailDescribe'>
        We'll never spam you or share your email address with anyone else.
      </InputSubtext>
      {errors.email && <InputWarning message={errors.email.message!} />}

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
      {errors.phone && <InputWarning message={errors.phone.message!} />}

      <StyledLabel htmlFor='message' aria-describedby='messageDescribe'>
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
        Please include your street and suburb if your enquiry is about any of
        our services.
      </InputSubtext>
      {errors.message && <InputWarning message={errors.message.message!} />}
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
  );
}

export default ContactForm;
