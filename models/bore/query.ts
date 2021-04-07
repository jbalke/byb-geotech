import connectDB from '../../middleware/mongodb';
import { boreSchema } from './bore';

type Query = {
  radius: string;
  lat: string;
  lng: string;
};

export const findNearbyBores = async ({ radius = '500', lat, lng }: Query) => {
  const _radius = Number(radius);
  const _lat = Number(lat);
  const _lng = Number(lng);

  const conn = await connectDB();
  if (!conn.models.Bore) {
    conn.model('Bore', boreSchema);
  }

  const bores = await conn
    .model('Bore')
    .find({
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [_lng, _lat] },
          $maxDistance: _radius,
        },
      },
    })
    .lean()
    .exec();

  return bores;
};
