import InputWarning from 'components/InputWarning';
import {
  InputSubtext,
  Message,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  SubmitButton
} from 'components/styled';
import { useUIState } from 'context/ui-context';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Controller, NestedValue, useForm } from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';
import { Option } from 'types/form';
import { client } from 'utils/client';
import isEmail from 'validator/lib/isEmail';
import { ContactCategories } from '../data/contact-form';
import { Theme } from '../styles/theme';
import { debug } from '../utils';

const StyledForm = styled.form`
  font-size: 1rem;

  label {
    font-family: 'Rubik';
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const StyledSelect = styled(Select)`
  .select__menu {
    color: ${Theme.color.dropDownMenuText};
  }
`;

const RecaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-self: center;
`;

interface FormData {
  name: string;
  email: string;
  phone: string;
  category: NestedValue<Option>;
  message: string;
}

type ContactFormsProps = {};

function ContactForm(props: ContactFormsProps) {
  const [formStatus, setFormStatus] =
    useState<'idle' | 'pending' | 'success' | 'fail'>('idle');

  const { theme } = useUIState();
  const recaptchaRef = useRef<ReCAPTCHA>(null!);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      category: ContactCategories[0],
      message: '',
    },
  });

  const onSubmit = async ({ category: { label }, ...rest }: FormData) => {
    setFormStatus('pending');
    const token = await recaptchaRef.current.executeAsync();

    if (!token) {
      setFormStatus('fail');
      return;
    }

    try {
      await client('/api/contact', {
        ...rest,
        category: label,
        token,
      });
      setFormStatus('success');
    } catch (error) {
      debug(error.message);

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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        placeholder='Your email address'
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
        placeholder='The best number to call you on'
        {...register('phone', {
          required: 'Required',
          // validate: (value) =>
          //   isMobilePhone(value, 'en-AU') ||
          //   'Please provide a valid mobile phone number',
        })}
      />
      {errors.phone && <InputWarning message={errors.phone.message!} />}

      <StyledLabel htmlFor='category'>Reason for Contact</StyledLabel>
      <Controller
        name='category'
        control={control}
        rules={{
          required: 'Required',
        }}
        render={({ field }) => (
          <StyledSelect
            {...field}
            options={ContactCategories}
            classNamePrefix='select'
          />
        )}
      />
      {errors.category && <InputWarning message={errors.category.message!} />}

      <StyledLabel htmlFor='message' aria-describedby='messageDescribe'>
        Message
      </StyledLabel>
      <StyledTextarea
        id='message'
        placeholder='Your message'
        rows={5}
        {...register('message', {
          required: 'Required',
          minLength: {
            value: 25,
            message:
             
              'Please tell us more about your reason for contacting us today',
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
    </StyledForm>
  );
}

export default ContactForm;
