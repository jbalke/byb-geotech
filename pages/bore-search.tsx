import SearchForm from 'components/SearchForm';
import { Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import { findNearbyBores } from 'model/bore';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Bore } from 'types/bore';
import { isValidCoordinates, parseCoordinates } from 'utils/geocoding';
import { obfuscateLocation } from 'utils/geospatial';
import Banner from '../components/Banner';
import { MAP_CENTER } from '../constants';
import { logSearch } from '../model/searchLog';
import { Theme } from '../styles/theme';

const MapSearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    grid-template-columns: 400px auto;
  }
`;

const ClientRenderedMap = dynamic(() => import('../components/Map/Map'), {
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
    <>
      <Banner title='Bore Search' />
      <Wrapper>
        <MapSearchContainer>
          <SearchForm bores={bores} query={query} />
          <ClientRenderedMap camera={camera} bores={bores} query={query} />
        </MapSearchContainer>
      </Wrapper>
    </>
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

      await logSearch({
        IPAddress: context.req.socket.localAddress,
        location: {
          type: 'Point',
          coordinates: [Number(lng as string), Number(lat as string)],
        },
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
