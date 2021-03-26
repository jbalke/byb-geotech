import * as d3 from 'd3-ease';
import React, { useEffect, useState } from 'react';
import ReactMapGL, { FlyToInterpolator, Marker, Popup } from 'react-map-gl';
import { MAP_CENTER } from '../constants';
import { Bore } from '../types/bore';
import BoreMarker from '../assets/water-marker.svg';
import styled from 'styled-components';

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

const Img = styled.img`
  width: 24px;
  height: 24px;
  filter: drop-shadow(3px 3px 2px rgb(0, 0, 0, 0.8));
`;

const StyledPopup = styled(Popup)`
  h2 {
    font-size: 1.2rem;
  }
`;

type Props = {
  camera: { center: [number, number]; zoom: number } | undefined;
  bores: Bore[];
};

const Map = ({ camera, bores }: Props) => {
  const [viewport, setViewport] = useState({
    longitude: MAP_CENTER[0], //149.1865,
    latitude: MAP_CENTER[1], //-21.142,
    zoom: 11,
    width: '100%',
    height: 600,
  });

  const [selectedBore, setSelectedBore] = useState<Bore | null>(null);

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

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/mapbox/streets-v10'
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      onViewportChange={(nextViewport: typeof viewport) =>
        setViewport(nextViewport)
      }
    >
      {bores.map((bore) => (
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
            <BoreMarker height={24} width={24} fill={'red'} />
          </Button>
        </Marker>
      ))}

      {selectedBore && (
        <StyledPopup
          longitude={selectedBore.location.coordinates[0]}
          latitude={selectedBore.location.coordinates[1]}
          onClose={() => setSelectedBore(null)}
        >
          <div>
            <h2>{selectedBore.name}</h2>
            <p>{selectedBore.description}</p>
          </div>
        </StyledPopup>
      )}
    </ReactMapGL>
  );
};

export default Map;
