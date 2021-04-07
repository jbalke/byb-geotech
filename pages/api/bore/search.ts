import { VercelRequest, VercelResponse } from '@vercel/node';
import { query } from 'models/bore';

export default async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    let { radius = '1000', lat, lng } = req.query;

    if (!radius || !lat || !lng) {
      return res.status(400).json({ message: 'bad query' });
    }

    try {
      const bores = await query.findNearbyBores({
        radius: radius as string,
        lat: lat as string,
        lng: lng as string,
      });

      res.json(bores);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(405).json({ message: 'method not supported' });
  }
};
