import { DevTool } from '@hookform/devtools';
import Button from 'components/Button/Button';
import InputWarning from 'components/InputWarning';
import { Message } from 'components/styled';
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

const SubmitButton = styled(Button).attrs({ type: 'submit' })`
  :active {
    transform: translateY(1px);
    filter: saturate(150%);
  }

  &&:disabled {
    filter: none;
  }
`;

const InputSubtext = styled.span`
  display: inline-block;
  font-family: 'Public Sans Italic';
  font-size: 0.75em;
  font-weight: 600;
  color: ${Theme.color.grey};
`;

const Select = styled(AsyncSelect)`
  .select__menu {
    color: ${Theme.color.dropDownMenuText};
  }

  .select__control-is-focused {
    border-color: ${Theme.color.primary};
  }
`;

const StyledForm = styled.form`
  font-size: 1rem;

  label:not(:first-of-type) {
    margin-top: 1rem;
  }

  label {
    display: block;
    font-family: 'Rubik';
  }

  input {
    display: block;
    font-family: 'Public Sans';
    font-size: inherit;
    width: 100%;
    padding: 0.5em;
    border: solid 1px rgb(204, 204, 204);
    border-radius: 4px;
    transition: border-color 0.1s;
  }

  input:focus {
    border: solid 1px ${Theme.color.primary};
    box-shadow: 0 0 0 1px ${Theme.color.primary};
    transition: border-color 0.3s;
    outline: none;
  }

  input + label {
    margin-top: 1rem;
  }
`;

type Option = {
  value: [number, number];
  label: string;
};

interface IFormData {
  name: string;
  email: string;
  address: NestedValue<Option>;
  phone: string;
  contactMe: boolean;
}

type SearchFormProps = { bores?: Bore[]; query?: boolean };

function SearchForm({ bores, query = false }: SearchFormProps) {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'pending' | 'success' | 'fail'
  >('idle');

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
  } = useForm<IFormData>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      contactMe: false,
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

  const handleChange = (option: Option | null, action: ActionMeta<Option>) => {
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

  const onSubmit: SubmitHandler<IFormData> = async (data: IFormData) => {
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
        type: 'search',
      });
      setFormStatus('success');
    } catch (error) {
      console.error(error.message);

      setFormStatus('fail');
    }
  };

  const onError: SubmitErrorHandler<IFormData> = (errors, e) =>
    console.error(errors, e);

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
        <h1>Bore Search</h1>
        <label id='addressLabel'>Address</label>
        <Controller
          name='address'
          control={control}
          rules={{
            validate: (value: Option | null) => {
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
          <>
            <Message type='info'>
              Would you like additional information on the{' '}
              <strong>{bores.length} bores</strong> in your area? Provide your
              contact details below and we'll email you a report!
            </Message>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              placeholder='Your name'
              {...register('name', { required: 'Required', maxLength: 25 })}
            />
            {errors.name && <InputWarning message={errors.name.message!} />}
            <label htmlFor='email' aria-describedby='emailDescribe'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Your email address'
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
            <label htmlFor='phone' aria-describedby='phoneDescribe'>
              Phone (optional)
            </label>
            <input
              id='phone'
              type='text'
              placeholder='Your phone number'
              {...register('phone')}
            />
            <InputSubtext id='phoneDescribe'>
              Provide your phone number if you'd like us to call you to discuss
              your drilling needs.
            </InputSubtext>
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
          </>
        ) : formStatus === 'success' ? (
          <Message type='success'>
            Bore report has been sent to <strong>{getValues('email')}</strong>!
          </Message>
        ) : query ? (
          <Message type='warning'>No bores found.</Message>
        ) : null}
        <ReCAPTCHA
          ref={recaptchaRef}
          size='invisible'
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          badge={'bottomleft'}
          theme={theme}
        />
      </StyledForm>
      <DevTool control={control} />
    </>
  );
}

export default SearchForm;
