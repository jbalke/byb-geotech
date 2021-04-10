import { Point } from './geojson-types';

export interface Bore {
  _id?: string;
  depth?: number;
  flowRate?: number;
  waterLevel?: number;
  salinity?: number;
  location: Point;
}
