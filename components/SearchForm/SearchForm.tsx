import { DevTool } from '@hookform/devtools';
import axios from 'axios';
import Button from 'components/Button';
import InputWarning from 'components/InputWarning';
import debounce from 'lodash/debounce';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { Controller, useForm, NestedValue } from 'react-hook-form';
import { ActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { FeatureCollection } from 'types/geojson-types';
import { geocodeAPI } from 'utils/geocoding';
import isEmail from 'validator/lib/isEmail';

const SubmitButton = styled(Button).attrs({ type: 'submit' })`
  :active {
    transform: translateY(1px);
    filter: saturate(150%);
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
}

type SearchFormProps = {};

function SearchForm(props: SearchFormProps) {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<IFormData>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: { value: [0, 0], label: '' },
    },
  });

  const getLocationOptions = useCallback(
    debounce((query: string, callback: any) => {
      axios
        .get<FeatureCollection>(geocodeAPI(query))
        .then((response) => {
          const data = response.data.features.map((feature) => ({
            value: feature.center,
            label: feature.place_name,
          }));

          callback(data);
        })
        .catch((error) => console.error(error));
    }, 750),
    []
  );

  const handleChange = (value: Option | null, action: ActionMeta<Option>) => {
    setValue('address', value ?? { value: [0, 0], label: '' }, {
      shouldValidate: true,
      shouldDirty: true,
    });

    if (value?.value) {
      router.push(`?lng=${value.value[0]}&lat=${value.value[1]}`, undefined, {
        scroll: false,
      });
    } else {
      router.push(``, undefined, { scroll: false });
    }
  };

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h1>Bore Search</h1>
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
            validate: (value) => isEmail(value) || 'Not a valid emaill address',
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
          Provide your phone number if you'd like us to call you to discuss your
          needs.
        </InputSubtext>
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
        <SubmitButton fullWidth margin='1rem 0 0 0' disabled={!isValid}>
          Submit
        </SubmitButton>
        {isSubmitSuccessful && <div>DEBUG: Submit Successful</div>}
      </StyledForm>
      <DevTool control={control} />
    </>
  );
}

export default SearchForm;
