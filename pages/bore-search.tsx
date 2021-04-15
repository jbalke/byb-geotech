import SearchForm from 'components/SearchForm';
import { findNearbyBores } from 'controllers/boreController';
import SiteLayout from 'layouts/SiteLayout';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Bore } from 'types/bore';
import { isValidCoordinates, parseCoordinates } from 'utils/geocoding';
import { obfuscateLocation } from 'utils/geospatial';
import { MAP_CENTER } from '../constants';

//TODO: Use map to confirm provided address, not to show bores (report number of bores found within 1Km of address). Inform user that an email will be sent with bore information.

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

type Props = { mapCenter: [number, number]; bores: Bore[]; query?: boolean };

const BoreSearch = ({ mapCenter, bores, query = false }: Props) => {
  const camera = useMemo(() => ({ center: mapCenter, zoom: query ? 14 : 11 }), [
    mapCenter[0],
    mapCenter[1],
    bores.length,
  ]);

  return (
    <MapSearchContainer>
      <SearchForm bores={bores} query={query} />
      <ClientRenderedMap camera={camera} bores={bores} query={query} />
    </MapSearchContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { lng, lat, radius = '1000' },
  } = context;

  if (lng && lat && isValidCoordinates(lng as string, lat as string)) {
    try {
      const bores = await findNearbyBores({
        radius: radius as string,
        lat: lat as string,
        lng: lng as string,
      });

      const obfuscatedBores = bores.map((b) => ({
        ...b,
        location: obfuscateLocation(b.location),
      }));
      return {
        props: {
          mapCenter: parseCoordinates(lng as string, lat as string)!,
          bores: JSON.parse(JSON.stringify(obfuscatedBores)), //https://github.com/vercel/next.js/issues/11993
          query: true,
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
      query: false,
    },
  };
};

BoreSearch.layout = SiteLayout;
export default BoreSearch;
