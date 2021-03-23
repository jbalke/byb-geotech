import axios, { CancelTokenSource } from 'axios';
import dynamic from 'next/dynamic';
import React, { useState, useCallback } from 'react';
import { ActionMeta, InputActionMeta } from 'react-select';
import AsyncSelect from 'react-select/async';
import Layout from '../layouts/Main';
import { geocodeAPI } from '../utils/geocoding';
import debounce from 'lodash/debounce';

enum PlaceTypes {
  Address = 'address',
  POI = 'poi',
}

type Point = {
  type: 'Point';
  coordinates: [number, number];
};

interface Feature {
  id: string;
  type: 'Feature';
  place_type: PlaceTypes[];
  relevance: number;
  center: [number, number];
  place_name: string;
  geometry: Point;
}
interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
}

type Option = {
  value: [number, number];
  label: string;
};

const ClientRenderedMap = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => <p>loading map...</p>,
});

const BoreSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

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

    if (value) {
      setSelectedValue(value);
    } else {
      setSelectedValue(null);
    }
  };

  const handleInputChange = (newValue: string, actionMeta: InputActionMeta) => {
    console.log({ newValue, actionMeta });

    if (actionMeta.action === 'input-change') {
      setInputValue(newValue);
    }
  };

  return (
    <Layout title='Bore Search'>
      <div>
        <h1>Bore Search</h1>
        <AsyncSelect
          // inputValue={inputValue}
          isClearable={true}
          placeholder='enter address'
          loadOptions={getLocationOptions}
          onChange={handleChange}
          // onInputChange={handleInputChange}
          cacheOptions
        />
        <ClientRenderedMap />
      </div>
    </Layout>
  );
};

export default BoreSearch;
