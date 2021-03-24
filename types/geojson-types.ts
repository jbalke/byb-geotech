enum PlaceTypes {
  Address = 'address',
  POI = 'poi',
}

export type Point = {
  type: 'Point';
  coordinates: [number, number];
};

export interface Feature {
  id: string;
  type: 'Feature';
  place_type: PlaceTypes[];
  relevance: number;
  center: [number, number];
  place_name: string;
  geometry: Point;
}

export interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
}
