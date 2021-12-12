import Banner from 'components/Banner';
import InputWarning from 'components/InputWarning';
import {
  InputSubtext,
  Message,
  StyledInput,
  StyledLabel,
  StyledTextarea,
  SubmitButton,
  Wrapper,
} from 'components/styled';
import { useUIState } from 'context/ui-context';
import { jobTypes, suburbs } from 'data/quote-form';
import SiteLayout from 'layouts/SiteLayout';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Controller,
  NestedValue,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { Option } from 'types/form';
import { client } from 'utils/client';
import isEmail from 'validator/lib/isEmail';
import { debug } from '../utils';

const StyledForm = styled.form`
  margin-top: 2rem;
  font-size: 1rem;

  label {
    font-family: 'Rubik';
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const OtherSuburbInput = styled(StyledInput)`
  margin-top: 5px;
`;

const RecaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-self: center;
`;

const StyledSelect = styled(Select)`
  .select__menu {
    color: ${Theme.color.dropDownMenuText};
  }
`;

type StringOption = Option<string>;
interface FormValues {
  name: string;
  email: string;
  phone: string;
  street: string;
  otherSuburb?: string;
  suburb: NestedValue<StringOption>;
  service: NestedValue<StringOption>;
  comments: string;
}

type Props = {};

function RequestQuote(props: Props) {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'pending' | 'success' | 'fail'
  >('idle');

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      otherSuburb: '',
      comments: '',
    },
    shouldUnregister: true,
  });
  const watchSuburb = watch('suburb');
  const watchService = watch('service');
  const { theme } = useUIState();
  const recaptchaRef = useRef<ReCAPTCHA>(null!);

  const onSubmit: SubmitHandler<FormValues> = async ({
    suburb,
    service,
    ...rest
  }) => {
    setFormStatus('pending');
    const token = await recaptchaRef.current.executeAsync();

    if (!token) {
      setFormStatus('fail');
      return;
    }

    try {
      await client('/api/request-quote', {
        suburb: suburb.label,
        service: service.label,
        ...rest,
        token,
      });
      setFormStatus('success');
    } catch (error: any) {
      debug(error);

      setFormStatus('fail');
    }
  };

  const sortedSuburbs = [
    { label: 'Other', value: 'other' },
    ...suburbs.sort((a, b) =>
      a.label < b.label ? -1 : a.label > b.label ? 1 : 0,
    ),
  ];

  return (
    <>
      <Banner
        title="Request a Quote"
        description="Request a quote quickly and easily online! We'll do our best to contact you with a quote as quickly as possible."
      />
      <Wrapper maxWidth="70ch" padding="xl">
        {formStatus === 'success' ? (
          <Message type="success">
            We&apos;ve received your request and will be in touch soon! Thank
            you.
          </Message>
        ) : (
          <>
            <h2>
              Please complete the form below so we can provide an accurate
              quote.
            </h2>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput
                type="text"
                id="name"
                placeholder="Your name"
                {...register('name', {
                  required: 'Required',
                  minLength: { value: 3, message: 'Too short' },
                  maxLength: { value: 25, message: '25 character limit' },
                })}
              />
              {errors.name && <InputWarning message={errors.name.message!} />}

              <StyledLabel htmlFor="email" aria-describedby="emailDescribe">
                Email
              </StyledLabel>
              <StyledInput
                type="email"
                id="email"
                inputMode="email"
                placeholder="Your email address"
                {...register('email', {
                  required: 'Required',
                  validate: value =>
                    isEmail(value) || 'Not a valid emaill address',
                })}
              />
              <InputSubtext id="emailDescribe">
                We&apos;ll never spam you or share your email address with
                anyone else.
              </InputSubtext>
              {errors.email && <InputWarning message={errors.email.message!} />}

              <StyledLabel htmlFor="phone">Phone</StyledLabel>
              <StyledInput
                type="tel"
                id="phone"
                placeholder="The best number to call you on"
                {...register('phone', {
                  required: 'Required',
                  maxLength: { value: 25, message: '25 character limit' },
                })}
              />
              {errors.phone && <InputWarning message={errors.phone.message!} />}

              <StyledLabel htmlFor="street">Street</StyledLabel>
              <StyledInput
                type="text"
                id="street"
                placeholder="The address the service is to be supplied"
                {...register('street', {
                  required: 'Required',
                  maxLength: { value: 100, message: '100 character limit' },
                })}
              />
              {errors.street && (
                <InputWarning message={errors.street.message!} />
              )}

              <StyledLabel htmlFor="suburb">Suburb</StyledLabel>
              <Controller
                name="suburb"
                control={control}
                rules={{
                  required: 'please select your suburb',
                }}
                render={({ field }) => (
                  <StyledSelect
                    {...field}
                    options={sortedSuburbs}
                    classNamePrefix="select"
                  />
                )}
              />
              {errors.suburb && (
                <InputWarning message={errors.suburb.message!} />
              )}

              {watchSuburb?.value === 'other' && (
                <>
                  <OtherSuburbInput
                    type="text"
                    id="otherSuburb"
                    placeholder="Please enter your suburb"
                    aria-label="Other Suburb"
                    {...register('otherSuburb', {
                      required: 'Required',
                      maxLength: { value: 50, message: '50 character limit' },
                    })}
                  />
                  {errors.otherSuburb && (
                    <InputWarning message={errors.otherSuburb.message!} />
                  )}
                </>
              )}

              <StyledLabel htmlFor="service">Service</StyledLabel>
              <Controller
                name="service"
                control={control}
                rules={{ required: 'please select the service' }}
                render={({ field }) => (
                  <StyledSelect
                    {...field}
                    options={jobTypes}
                    classNamePrefix="select"
                  />
                )}
              />
              {errors.service && (
                <InputWarning message={errors.service.message!} />
              )}
              {watchSuburb?.value === 'other' &&
                watchService?.value == 'newbore' && (
                  <Message type="warning">
                    We may not be able to service your area, please submit your
                    request and we will investigate and recommend the most
                    suitable local driller for you.
                  </Message>
                )}

              <StyledLabel
                htmlFor="comments"
                aria-describedby="commentDescribe"
              >
                Comments
              </StyledLabel>
              <StyledTextarea
                id="comments"
                placeholder="Any additional information you want us to know"
                rows={8}
                {...register('comments', {
                  maxLength: { value: 500, message: '500 character limit' },
                })}
              />
              <InputSubtext id="commentDescribe">
                Additional information may be specific timeframe requirements or
                ease of access to the site.
              </InputSubtext>

              <SubmitButton
                isLoading={formStatus === 'pending'}
                $fullWidth
                $margin="1rem 0 0 0"
                size="lg"
              >
                Submit
              </SubmitButton>
              {formStatus === 'fail' && (
                <Message type="danger">
                  Request could not be sent, please try again later.
                </Message>
              )}
              <RecaptchaContainer>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  badge={'inline'}
                  theme={theme}
                />
              </RecaptchaContainer>
            </StyledForm>
          </>
        )}
      </Wrapper>
    </>
  );
}

RequestQuote.layout = SiteLayout;
export default RequestQuote;
