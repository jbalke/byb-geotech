import InputWarning from 'components/InputWarning';
import {
  InputSubtext,
  Message,
  StyledInput,
  StyledLabel,
  SubmitButton,
} from 'components/styled';
import { useUIState } from 'context/ui-context';
import debounce from 'lodash/debounce';
import { useRouter } from 'next/router';
import React, { useCallback, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Controller,
  NestedValue,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { ActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { Bore } from 'types/bore';
import { FeatureCollection } from 'types/geojson-types';
import { client } from 'utils/client';
import { geocodeAPI } from 'utils/geocoding';
import isEmail from 'validator/lib/isEmail';
import { Option } from '../../types/form';
import { debug } from '../../utils';

const FormContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const RecaptchaContainer = styled.div`
  margin-top: 1rem;
  align-self: center;
`;

const Select = styled(AsyncSelect)`
  .select__menu {
    color: ${Theme.color.dropDownMenuText};
  }
`;

const StyledForm = styled.form`
  font-size: 1rem;

  label {
    font-family: 'Rubik';
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

type LocationOption = Option<[number, number]>;

interface FormData {
  name: string;
  email: string;
  address: NestedValue<LocationOption>;
  phone: string;
}

type SearchFormProps = {
  bores?: Bore[];
  knownBoresCount: number;
  query?: boolean;
};

function SearchForm({
  bores,
  knownBoresCount,
  query = false,
}: SearchFormProps) {
  const [formStatus, setFormStatus] =
    useState<'idle' | 'pending' | 'success' | 'fail'>('idle');

  const { theme } = useUIState();
  const recaptchaRef = useRef<ReCAPTCHA>(null!);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    register,
    setValue,
    getValues,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const getLocationOptions = useCallback(
    debounce((query: string, callback: any) => {
      client<FeatureCollection>(geocodeAPI(query)).then((data) => {
        const _data = data.features.map((feature) => ({
          value: feature.center,
          label: feature.place_name,
        }));
        callback(_data);
      });
    }, 750),
    []
  );

  const handleChange = (
    option: LocationOption | null,
    action: ActionMeta<LocationOption>
  ) => {
    setFormStatus('idle');

    setValue('address', option ?? { value: [0, 0], label: '' }, {
      shouldValidate: true,
      shouldDirty: true,
    });

    if (option?.value) {
      router.push(`?lng=${option.value[0]}&lat=${option.value[1]}`, undefined, {
        scroll: false,
      });
    } else {
      router.push(``, undefined, { scroll: false });
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setFormStatus('pending');
    const token = await recaptchaRef.current.executeAsync();

    if (!token) {
      setFormStatus('fail');
      return;
    }

    try {
      await client('/api/bores/send-report', {
        ...data,
        token,
      });
      setFormStatus('success');
    } catch (error) {
      debug(error.message);

      setFormStatus('fail');
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label id='addressLabel'>Address</label>
        <Controller
          name='address'
          control={control}
          rules={{
            validate: (value: LocationOption | null) => {
              return (value && value.label.length > 0) || 'Required';
            },
          }}
          render={({ field }) => (
            <Select
              {...field}
              aria-labelledby='addressLabel'
              aria-describedby='addressDescribe'
              loadOptions={getLocationOptions}
              onChange={handleChange}
              placeholder='Enter address or POI'
              classNamePrefix='select'
              isClearable
            />
          )}
        />
        <InputSubtext id='addressDescribe'>
          Search for known bores nearby this address.
        </InputSubtext>
        {errors.address && <InputWarning message={errors.address.message!} />}

        {formStatus !== 'success' && bores?.length ? (
          <FormContainer>
            <div>
              <Message type='info'>
                Would you like additional information on the{' '}
                <strong>{knownBoresCount} bores</strong> in your area? Provide
                your contact details below and we'll email you a report!
              </Message>
              <StyledLabel htmlFor='name'>Name</StyledLabel>
              <StyledInput
                id='name'
                type='text'
                placeholder='Your name'
                {...register('name', { required: 'Required', maxLength: 25 })}
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
                  validate: (value) =>
                    isEmail(value) || 'Not a valid email address',
                })}
              />
              <InputSubtext id='emailDescribe'>
                We'll never spam you or share your email address with anyone
                else.
              </InputSubtext>
              {errors.email && <InputWarning message={errors.email.message!} />}
              <StyledLabel htmlFor='phone' aria-describedby='phoneDescribe'>
                Phone (optional)
              </StyledLabel>
              <StyledInput
                id='phone'
                type='text'
                placeholder='Your phone number'
                {...register('phone')}
              />
              <InputSubtext id='phoneDescribe'>
                Provide your phone number if you'd like us to call you to
                discuss your drilling needs.
              </InputSubtext>
              {errors.phone && <InputWarning message={errors.phone.message!} />}
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
                  Report could not be sent, please try again later.
                </Message>
              )}
            </div>
            <RecaptchaContainer>
              <ReCAPTCHA
                ref={recaptchaRef}
                size='invisible'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                badge={'inline'}
                theme={theme}
              />
            </RecaptchaContainer>
          </FormContainer>
        ) : formStatus === 'success' ? (
          <Message type='success'>
            Bore report has been sent to <strong>{getValues('email')}</strong>!
          </Message>
        ) : query ? (
          <Message type='warning'>No bores found.</Message>
        ) : null}
      </StyledForm>
      {/* <DevTool control={control} /> */}
    </>
  );
}

export default SearchForm;
