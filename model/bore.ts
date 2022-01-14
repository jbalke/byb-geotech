import { connectDB } from 'middleware/mongodb';
import { Bore } from 'types/bore';
import { parseCoordinates } from 'utils/geocoding';

type Query = {
  radius: string | number;
  lat: string | number;
  lng: string | number;
};

export const findNearbyBores = async ({
  radius = '500',
  lat,
  lng,
}: Query): Promise<Bore[]> => {
  const _radius = Number(radius);
  const _lat = Number(lat);
  const _lng = Number(lng);

  const { client, db } = await connectDB();
  const bores = db.collection<Bore>('bores');

  const nearbyBores = await bores
    .find<Bore>({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [_lng, _lat] },
          $maxDistance: _radius,
        },
      },
    })
    .toArray();

  return nearbyBores;
};

type BoreDetail = Bore & {
  distance: number;
  distanceBand?: string;
};

export const reportNearbyBores = async ({
  radius = '500',
  lat,
  lng,
}: Query): Promise<BoreDetail[]> => {
  const _radius = Number(radius);
  const coords = parseCoordinates(lng, lat);
  if (!coords) {
    return [];
  }

  const [_lng, _lat] = coords;

  const { client, db } = await connectDB();
  const bores = db.collection('bores');

  const nearbyBores = await bores
    .aggregate<BoreDetail>([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: [_lng, _lat] },
          distanceField: 'distance',
          maxDistance: _radius,
          spherical: false,
          query: { depth: { $exists: true } },
        },
      },
    ])
    .toArray();

  return nearbyBores;
};
