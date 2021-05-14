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
import SiteLayout from 'layouts/SiteLayout';
import React, { useEffect, useState } from 'react';
import {
  Controller,
  NestedValue,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';
import isEmail from 'validator/lib/isEmail';
import isPostalCode from 'validator/lib/isPostalCode';
import { Theme } from 'styles/theme';
import { DevTool } from '@hookform/devtools';

type Option = {
  label: string;
  value: string;
};

const suburbs = [
  { label: 'Bowen', value: 'bowen' },
  { label: 'Proserpine', value: 'proserpine' },
  { label: 'Seaforth', value: 'seaforth' },
  { label: 'Shoal Point', value: 'shoal point' },
  { label: 'Bucasia', value: 'bucasia' },
  { label: 'Blacks Beach', value: 'blacks beach' },
  { label: 'Slade Point', value: 'Slade Point' },
  { label: 'Mackay Harbour', value: 'mackay harbour' },
  { label: 'East Point', value: 'east point' },
  { label: 'Andergrove', value: 'andergrove' },
  { label: 'East Mackay', value: 'east mackay' },
  { label: 'West Mackay', value: 'west mackay' },
  { label: 'South Mackay', value: 'south mackay' },
  { label: 'Illawong Beach', value: 'illawong beach' },
  { label: 'Paget', value: 'paget' },
  { label: 'Racecourse', value: 'racecourse' },
  { label: 'Alexandra', value: 'alexandra' },
  { label: 'Te Kowai', value: 'te kowai' },
  { label: 'Walkerston', value: 'walkerston' },
  { label: 'Bakers Creek', value: 'bakers creek' },
  { label: 'Mcewens Beach', value: 'mcewens beach' },
  { label: 'Hay Point', value: 'hay point' },
  { label: 'Half Tide', value: 'half tide' },
  { label: 'Solonika Beach', value: 'solonika beach' },
  { label: 'Grasstree Beach', value: 'grasstree beach' },
  { label: 'Campwin Beach', value: 'campwin beach' },
  { label: 'Sarina Beach', value: 'sarina beach' },
  { label: 'Armstrong Beach', value: 'armstrong beach' },
];

const jobTypes = [
  { label: 'Drilling a new bore', value: 'newbore' },
  { label: 'Cleaning an existing bore', value: 'cleanbore' },
  { label: 'Pump Supply/Repair', value: 'pump' },
  { label: 'Geotechnical/Environmental Drilling', value: 'geotech' },
];

const StyledForm = styled.form`
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

const StyledSelect = styled(Select)`
  .select__menu {
    color: ${Theme.color.dropDownMenuText};
  }
`;

interface FormData {
  name: string;
  email: string;
  phone: string;
  street: string;
  otherSuburb: string;
  suburb: NestedValue<Option>;
  service: NestedValue<Option>;
  comments: string;
}

type Props = {};

function RequestQuote(props: Props) {
  const [formStatus, setFormStatus] =
    useState<'idle' | 'pending' | 'success' | 'fail'>('idle');

  const {
    register,
    unregister,
    getValues,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      otherSuburb: '',
      comments: '',
    },
  });
  const watchSuburb = watch('suburb');
  const watchService = watch('service');

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  const sortedSuburbs = [
    { label: 'Other', value: 'other' },
    ...suburbs.sort((a, b) =>
      a.label < b.label ? -1 : a.label > b.label ? 1 : 0
    ),
  ];
  // const otherSuburb = getValues('otherSuburb');

  useEffect(() => {
    if (watchSuburb?.value !== 'other') {
      unregister('otherSuburb');
    }
  }, [watchSuburb]);

  return (
    <>
      <Banner title='Request a Quote' />
      <Wrapper maxWidth='70ch'>
        <h2>
          Please complete the form below so we can provide an accurate quote.
        </h2>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel htmlFor='name'>Name</StyledLabel>
          <StyledInput
            type='text'
            id='name'
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
            type='email'
            id='email'
            {...register('email', {
              required: 'Required',
              validate: (value) =>
                isEmail(value) || 'Not a valid emaill address',
            })}
          />
          <InputSubtext id='emailDescribe'>
            We'll never spam you or share your email address with anyone else.
          </InputSubtext>
          {errors.email && <InputWarning message={errors.email.message!} />}

          <StyledLabel htmlFor='phone'>Phone</StyledLabel>
          <StyledInput type='text' id='phone' {...register('phone')} />
          {errors.phone && <InputWarning message={errors.phone.message!} />}

          <StyledLabel htmlFor='street'>Street</StyledLabel>
          <StyledInput
            type='text'
            id='street'
            placeholder='The address the service is to be supplied'
            {...register('street', { required: 'Required' })}
          />
          {errors.street && <InputWarning message={errors.street.message!} />}

          <StyledLabel htmlFor='suburb'>Suburb</StyledLabel>
          <Controller
            name='suburb'
            control={control}
            rules={{
              required: 'please select your suburb',
            }}
            render={({ field }) => (
              <StyledSelect
                {...field}
                options={sortedSuburbs}
                classNamePrefix='select'
              />
            )}
          />
          {errors.suburb && <InputWarning message={errors.suburb.message!} />}

          {watchSuburb?.value === 'other' && (
            <>
              <OtherSuburbInput
                type='text'
                id='otherSuburb'
                placeholder='Please enter your suburb'
                aria-label='Other Suburb'
                {...register('otherSuburb', { required: 'Required' })}
              />
              {errors.otherSuburb && (
                <InputWarning message={errors.otherSuburb.message!} />
              )}
            </>
          )}

          {/* <StyledLabel htmlFor='postCode'>Post Code</StyledLabel>
          <StyledInput
            type='text'
            id='postCode'
            {...register('postCode', {
              required: 'Required',
              validate: (value) =>
                isPostalCode(value, 'AU') || 'Not a valid post code',
            })}
          />
          {errors.postCode && (
            <InputWarning message={errors.postCode.message!} />
          )} */}

          {/* <StyledLabel htmlFor='state'>State</StyledLabel>
          <StyledInput
            type='text'
            id='state'
            disabled
            {...register('state', { required: 'Required' })}
          />
          {errors.state && <InputWarning message={errors.state.message!} />} */}

          <StyledLabel htmlFor='service'>Service</StyledLabel>
          <Controller
            name='service'
            control={control}
            rules={{ required: 'please select the service' }}
            render={({ field }) => (
              <StyledSelect
                {...field}
                options={jobTypes}
                classNamePrefix='select'
              />
            )}
          />
          {errors.service && <InputWarning message={errors.service.message!} />}
          {watchSuburb?.value === 'other' &&
            watchService?.value == 'newbore' && (
              <Message type='warning'>
                We may not be able to service your area, please submit your
                request and we will investigate and recommend the most suitable
                local driller for you.
              </Message>
            )}

          <StyledLabel htmlFor='comments' aria-describedby='commentDescribe'>
            Comments
          </StyledLabel>
          <StyledTextarea
            id='comments'
            placeholder='Any additional information you want us to know'
            rows={8}
            {...register('comments')}
          />
          <InputSubtext id='commentDescribe'>
            Additional information may be specific timeframe requirements or
            ease of access to the site.
          </InputSubtext>

          <SubmitButton
            isLoading={formStatus === 'pending'}
            fullWidth
            margin='1rem 0 0 0'
            size='lg'
            type='submit'
          >
            Submit
          </SubmitButton>
        </StyledForm>
      </Wrapper>
      <DevTool control={control} />
    </>
  );
}

RequestQuote.layout = SiteLayout;
export default RequestQuote;
