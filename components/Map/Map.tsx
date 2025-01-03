import { useWindowWidth } from '@react-hook/window-size/throttled';
import * as d3 from 'd3-ease';
import React, { useEffect, useState } from 'react';
import ReactMapGL, {
  FlyToInterpolator,
  Marker,
  Popup,
  ScaleControl,
} from 'react-map-gl';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { Bore } from 'types/bore';
import LocationImg from './LocationMarker';
import QuestionImg from './QuestionMarker';
import BoreImg from './BoreMarker';
import { getBoreColor, MAP_CENTER } from '../../constants';
import DepthScale from './DepthScale';

const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 2px;
  cursor: pointer;

  &:focus {
    outline-color: blue;
  }
`;

const Container = styled.div`
  position: relative;
`;

const LocationMarker = styled(LocationImg)`
  width: 40px;
  height: 40px;
  filter: drop-shadow(3px 3px 2px rgb(0, 0, 0, 0.8));
`;

const BoreMarker = styled(BoreImg)`
  width: 24px;
  height: 24px;
  filter: drop-shadow(3px 3px 2px rgb(0, 0, 0, 0.8));
`;

const QuestionMarker = styled(QuestionImg)`
  width: 24px;
  height: 24px;
  filter: drop-shadow(3px 3px 2px rgb(0, 0, 0, 0.8));
`;

const PopupContent = styled.div`
  color: ${Theme.color.black};
  background-color: ${Theme.color.white};
  font-size: 1rem;
`;

const BoreDepth = styled.p``;

type Props = {
  camera: { center: [number, number]; zoom: number } | undefined;
  bores: Bore[];
  query?: boolean;
};

const Map = ({ camera, bores, query = false }: Props) => {
  const [viewport, setViewport] = useState({
    longitude: MAP_CENTER[0], //149.1865,
    latitude: MAP_CENTER[1], //-21.142,
    zoom: 11,
  });

  const [selectedBore, setSelectedBore] = useState<Bore | null>(null);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (camera) {
      setViewport((old) => ({
        ...old,
        longitude: camera.center[0],
        latitude: camera.center[1],
        zoom: camera.zoom,
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: d3.easeCubic,
      }));
    }
  }, [camera]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedBore(null);
      }
    };

    window.addEventListener('keydown', listener);

    return () => window.removeEventListener('keydown', listener);
  }, []);

  const scaleControlStyle = {
    left: 20,
    bottom: 50,
  };

  const geolocateControlStyle = {
    right: 10,
    top: 10,
  };

  return (
    <Container>
      <ReactMapGL
        {...viewport}
        mapStyle='mapbox://styles/mapbox/streets-v10'
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onViewportChange={(nextViewport: typeof viewport) =>
          setViewport(nextViewport)
        }
        dragPan={windowWidth > 800}
        touchAction={windowWidth <= 800 ? 'pan-y' : 'none'}
        width='100%'
        height='620px'
      >
        <ScaleControl maxWidth={100} unit='metric' style={scaleControlStyle} />
        {/* <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      /> */}

        {bores.map((bore) => {
          const { depth, flowRate, waterLevel } = bore;
          let Icon, iconColor;

          if (
            [depth, flowRate, waterLevel].every(
              (value) => typeof value === 'undefined'
            )
          ) {
            Icon = QuestionMarker;
            iconColor = 'yellow';
          } else {
            Icon = BoreMarker;
            iconColor = getBoreColor(depth);
          }

          return (
            <Marker
              key={bore._id}
              longitude={bore.location.coordinates[0]}
              latitude={bore.location.coordinates[1]}
            >
              <Button
                onClick={(e) => {
                  e.preventDefault(), setSelectedBore(bore);
                }}
              >
                <Icon fill={iconColor} />
              </Button>
            </Marker>
          );
        })}

        {query && camera?.center && (
          <Marker longitude={camera.center[0]} latitude={camera.center[1]}>
            <LocationMarker fill='red' />
          </Marker>
        )}

        {selectedBore && (
          <Popup
            longitude={selectedBore.location.coordinates[0]}
            latitude={selectedBore.location.coordinates[1]}
            onClose={() => setSelectedBore(null)}
          >
            <PopupContent>
              <BoreDepth>
                <strong>Depth:</strong>{' '}
                {selectedBore.depth ? `${selectedBore.depth}m` : 'unknown'}
              </BoreDepth>
            </PopupContent>
          </Popup>
        )}
      </ReactMapGL>
      <DepthScale show={bores.length > 0} />
    </Container>
  );
};

export default Map;
