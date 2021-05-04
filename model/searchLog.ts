import { ObjectId } from 'bson';
import { connectDB } from 'middleware/mongodb';
import { Point } from 'types/geojson-types';

interface SearchMeta {
  IPAddress: string;
  location: Point;
  searchAddress?: string;
}

interface SearchMetaWithTimeStamp extends SearchMeta {
  _id?: ObjectId | undefined;
  createdAt: Date;
}

export async function logSearch(data: SearchMeta) {
  const { client, db } = await connectDB();

  const searchLog = db.collection<SearchMetaWithTimeStamp>('search_log');

  const document: SearchMetaWithTimeStamp = {
    ...data,
    createdAt: new Date(),
  };

  try {
    await searchLog.insertOne(document);
  } catch (error) {
    console.error(error);
  }
}
