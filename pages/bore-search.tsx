import Banner from 'components/Banner';
import SearchForm from 'components/SearchForm';
import { Disclaimer, Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import { findNearbyBores } from 'model/bore';
import { logSearch } from 'model/searchLog';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Bore } from 'types/bore';
import { isValidCoordinates, parseCoordinates } from 'utils/geocoding';
import { obfuscateLocation } from 'utils/geospatial';
import { MAP_CENTER } from '../constants';
import { BREAKPOINTS } from 'styles/style-constants';
import { debug } from '../utils';

const MapSearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  min-height: 700px;
  width: 100%;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: 400px auto;
  }
`;

const StyledDisclaimer = styled(Disclaimer)`
  margin-top: 1rem;
`;

const ClientRenderedMap = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: function Loading() {
    return <p>loading map...</p>;
  },
});

type Coords = [number, number];

type Props = {
  mapCenter: Coords;
  bores: Bore[];
  knownBoresCount: number;
  query?: boolean;
};

const BoreSearch = ({
  mapCenter: [mapX, mapY],
  bores,
  knownBoresCount,
  query = false,
}: Props) => {
  const camera = useMemo(
    () => ({ center: [mapX, mapY] as Coords, zoom: query ? 14 : 11 }),
    [mapX, mapY, query],
  );

  return (
    <>
      <Banner title="Bore Search" />
      <Wrapper padding="xl">
        <MapSearchContainer>
          <SearchForm
            bores={bores}
            knownBoresCount={knownBoresCount}
            query={query}
          />
          <ClientRenderedMap camera={camera} bores={bores} query={query} />
        </MapSearchContainer>
        <StyledDisclaimer>
          <h2>Please Note</h2>
          <p>
            <strong>Backyard Bores & Drilling respects your privacy</strong> in
            accordance with the Privacy Act 1998. As such, we have chosen to add
            a random error to bore locations so that our data can not be used to
            identify an individual address with a bore.
          </p>
          <p>
            <strong>
              Search results are based on or contains data provided by the State
              of Queensland (2021)
            </strong>
            . In consideration of the State permitting the use of this data you
            acknowledge and agree that the State gives no warranty in relation
            to the data (including accuracy, reliability, completeness,
            currency, or suitability) and accepts no liability (including
            without limitation, liability in negligence) for any loss, damage or
            costs (including consequential damage) relating to any use of the
            data. Data must not be used for direct marketing or be used in
            breach of privacy laws.
          </p>
        </StyledDisclaimer>
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
        IPAddress: context.req.headers['x-forwarded-for'] as string,
        location: {
          type: 'Point',
          coordinates: [Number(lng as string), Number(lat as string)],
        },
      });

      const obfuscatedBores = bores.map((b) => ({
        ...b,
        location: obfuscateLocation(b.location),
      }));

      const knownBoresCount = bores.filter((b) => {
        return Boolean(b.depth);
      }).length;

      return {
        props: {
          mapCenter: parseCoordinates(lng as string, lat as string)!,
          bores: JSON.parse(JSON.stringify(obfuscatedBores)), //https://github.com/vercel/next.js/issues/11993
          knownBoresCount,
          query: true,
        },
      };
    } catch (error) {
      debug(error);
    }
  }

  return {
    props: {
      mapCenter: MAP_CENTER,
      bores: [],
      knownBoresCount: 0,
      query: false,
    },
  };
};

BoreSearch.layout = SiteLayout;
export default BoreSearch;
