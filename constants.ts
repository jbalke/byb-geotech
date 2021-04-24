export const GEOCODING_URL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places';

export const MAP_CENTER = [149.1865, -21.142] as [number, number];

//[minLon,minLat,maxLon,maxLat]
export const MAP_BOUNDING_BOX = [0, 0, 0, 0]; //TODO: Define bounding box for geocoding search

export const BORE_SEARCH_RADIUS = 1000;

export const EMAIL_DOMAIN = 'backyardbores.com';
export const EMAIL = {
  SALES: `sales@${EMAIL_DOMAIN}`,
  INFO: `info@${EMAIL_DOMAIN}`,
  MANAGER: `matthew@vonsnarski.com`,
};
export const PHONE = {
  MAIN: '1800193194',
  MOBILE: '0418193194',
};
