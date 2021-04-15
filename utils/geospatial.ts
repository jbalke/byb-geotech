import random from 'lodash/random';
import { Point } from 'types/geojson-types';

export const obfuscateLocation = (location: Point): Point => {
  const [lng, lat] = location.coordinates;

  const lngError = random(0.0005, 0.003);
  const latError = random(0.0005, 0.003);
  const lngMultiplier = random() === 0 ? -1 : 1;
  const latMultiplier = random() === 0 ? -1 : 1;

  const _coordinates = [
    lng + lngMultiplier * lngError,
    lat + latMultiplier * latError,
  ] as [number, number];

  return { type: 'Point', coordinates: _coordinates };
};
