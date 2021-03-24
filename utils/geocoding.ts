import { GEOCODING_URL, MAP_CENTER } from '../constants';

export function geocodeAPI(search: string) {
  return `${GEOCODING_URL}/${search.trim()}.json?proximity=${encodeURIComponent(
    MAP_CENTER.join(',')
  )}&types=${encodeURIComponent(`address,poi`)}&access_token=${
    process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  }`;
}

export function parseCoordinates(
  lng: string | number,
  lat: string | number
): [number, number] | null {
  if (isNaN(+lng) || isNaN(+lat)) return null;

  return [Number(lng), Number(lat)];
}

export function isValidCoordinates(
  _lng: string | number,
  _lat: string | number
) {
  const [lng, lat] = parseCoordinates(_lng, _lat) ?? [999, 999];

  return Math.abs(lng) <= 180 && Math.abs(lat) <= 90;
}
