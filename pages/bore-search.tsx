import axios from 'axios';
import debounce from 'lodash/debounce';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import { MAP_CENTER } from '../constants';
import Layout from '../layouts/Main';
import { Bore } from '../types/bore';
import { FeatureCollection } from '../types/geojson-types';
import {
  geocodeAPI,
  isValidCoordinates,
  parseCoordinates,
} from '../utils/geocoding';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { lng, lat },
  } = context;

  if (lng && lat && isValidCoordinates(lng as string, lat as string)) {
    try {
      const { data } = await axios.get<Bore[]>(
        `http://localhost:5000/api/v1/bores/search?lng=${lng}&lat=${lat}&radius=1000`
      );

      console.log({ data });

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
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
  const [address, setAddress] = useState<Option | null>(null);
  const { handleSubmit, control, register, setValue } = useForm<FormData>();

  const camera = useMemo(
    () => ({ center: mapCenter, zoom: bores.length ? 14 : 11 }),
    [mapCenter[0], mapCenter[1], bores.length]
  );
  console.log({ bores });

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
    console.log({ value, action });

    setAddress(value);
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
    <Layout title='Bore Search'>
      <MapSearchContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name='name' type='text' placeholder='Name' ref={register} />
          <input name='email' type='email' placeholder='Email' ref={register} />
          <input name='phone' type='text' placeholder='Phone' ref={register} />
          <AsyncSelect
            value={address}
            loadOptions={getLocationOptions}
            onChange={handleChange}
            placeholder='Enter address or POI'
            isClearable
          />
          {/* <Controller
            name='address'
            as={AsyncSelect}
            control={control}
            loadOptions={getLocationOptions}
            onChange={handleChange}
            isClearable
            placeholder='Enter address or POI'
            defaultValue=''
          /> */}

          <input type='submit' value='' />
        </form>

        <ClientRenderedMap camera={camera} bores={bores} />
      </MapSearchContainer>
    </Layout>
  );
};

export default BoreSearch;
