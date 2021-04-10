import { connectDB } from 'middleware/mongodb';

type Query = {
  radius: string;
  lat: string;
  lng: string;
};

export const findNearbyBores = async ({ radius = '500', lat, lng }: Query) => {
  const _radius = Number(radius);
  const _lat = Number(lat);
  const _lng = Number(lng);

  const { client, db } = await connectDB();
  const bores = db.collection('bores');

  const nearbyBores = await bores
    .find({
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
