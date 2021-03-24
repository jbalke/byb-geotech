import { Point } from './geojson-types';

export interface Bore {
  _id?: string;
  name: string;
  description?: string;
  depth: number;
  location: Point;
}
