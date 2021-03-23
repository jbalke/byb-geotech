import { GEOCODING_URL, MAP_CENTER } from '../constants';

export const geocodeAPI = (search: string) =>
  `${GEOCODING_URL}/${search.trim()}.json?proximity=${encodeURIComponent(
    MAP_CENTER.join(',')
  )}&types=${encodeURIComponent(`address,poi`)}&access_token=${
    process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  }`;
