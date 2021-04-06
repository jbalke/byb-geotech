import axios from 'axios';
import SiteLayout from 'layouts/SiteLayout';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import SearchForm from 'components/SearchForm';
import { BORE_SEARCH_RADIUS, MAP_CENTER } from '../constants';
import { Bore } from 'types/bore';
import { isValidCoordinates, parseCoordinates } from 'utils/geocoding';

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
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    grid-template-columns: 400px auto;
  }
`;

const ClientRenderedMap = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => <p>loading map...</p>,
});

type Props = { mapCenter: [number, number]; bores: Bore[] };

const BoreSearch = ({ mapCenter, bores }: Props) => {
  const camera = useMemo(
    () => ({ center: mapCenter, zoom: bores.length ? 14 : 11 }),
    [mapCenter[0], mapCenter[1], bores.length]
  );

  return (
    <MapSearchContainer>
      <SearchForm />
      <ClientRenderedMap camera={camera} bores={bores} />
    </MapSearchContainer>
  );
};

BoreSearch.layout = SiteLayout;
export default BoreSearch;
