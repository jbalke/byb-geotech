import axios from 'axios';
import debounce from 'lodash/debounce';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import styled from 'styled-components';
import isEmail from 'validator/lib/isEmail';
import InputWarning from '../components/InputWarning';
import { BORE_SEARCH_RADIUS, MAP_CENTER } from '../constants';
import { Bore } from '../types/bore';
import { FeatureCollection } from '../types/geojson-types';
import {
  geocodeAPI,
  isValidCoordinates,
  parseCoordinates,
} from '../utils/geocoding';

//TODO: Use map to confirm provided address, not to show bores (report number of bores found within 1Km of address). Inform user that an email will be sent with bore information.

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { lng, lat },
  } = context;

  if (lng && lat && isValidCoordinates(lng as string, lat as string)) {
    try {
      const { data } = await axios.get<Bore[]>(
        `${process.env.BORE_API_URL}/bores/search?lng=${lng}&lat=${lat}&radius=${BORE_SEARCH_RADIUS}`
      );

      return {
        props: {
          mapCenter: parseCoordinates(lng as string, lat as string)!,
          bores: data,
        },
      };
    } catch (error) {
      console.error(error);
    }
  }

  return {
    props: {
      mapCenter: MAP_CENTER,
      bores: [],
    },
  };
};

const MapSearchContainer = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  gap: 1rem;
`;

const StyledForm = styled.form`
  label {
    display: block;
    margin-top: 1rem;
  }

  label input {
    display: block;
    width: 100%;
    padding: 0.5em;
  }
`;

type Option = {
  value: [number, number];
  label: string;
};

const ClientRenderedMap = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => <p>loading map...</p>,
});

type FormData = {
  name: string;
  email: string;
  address: Option;
  phone: string;
};

type Props = { mapCenter: [number, number]; bores: Bore[] };

const BoreSearch = ({ mapCenter, bores }: Props) => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    register,
    setValue,
    getValues,
    errors,
    formState: { isValid },
  } = useForm<FormData>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const camera = useMemo(
    () => ({ center: mapCenter, zoom: bores.length ? 14 : 11 }),
    [mapCenter[0], mapCenter[1], bores.length]
  );

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
    // console.log({ value, action });

    setValue('address', value);
    if (value) {
      router.push(`?lng=${value.value[0]}&lat=${value.value[1]}`);
    } else {
      router.push(``);
    }
  };

  const onSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <MapSearchContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name
          <input
            name='name'
            type='text'
            placeholder='Name'
            ref={register({ required: 'Required', maxLength: 25 })}
          />
        </label>
        {errors.name && <InputWarning message={errors.name.message!} />}
        <label>
          Email
          <input
            name='email'
            type='email'
            placeholder='Email'
            ref={register({
              required: 'Required',
              validate: (value) =>
                isEmail(value) || 'Not a valid emaill address',
            })}
          />
        </label>
        {errors.email && <InputWarning message={errors.email.message!} />}
        <label>
          Phone (optional)
          <input name='phone' type='text' placeholder='Phone' ref={register} />
        </label>
        <label>
          Address
          <Controller
            name='address'
            defaultValue=''
            render={({ value }) => (
              <AsyncSelect
                value={value}
                loadOptions={getLocationOptions}
                onChange={handleChange}
                placeholder='Enter address or POI'
                isClearable
              />
            )}
            control={control}
          />
        </label>
        <input type='submit' disabled={!isValid} />

        <pre style={{ whiteSpace: 'break-spaces' }}>
          {JSON.stringify(getValues())}
        </pre>
      </StyledForm>

      <ClientRenderedMap camera={camera} bores={bores} />
    </MapSearchContainer>
  );
};

export default BoreSearch;
