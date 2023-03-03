import type { NextApiRequest, NextApiResponse } from 'next'
import carsData from '../../public/api/cars.json';

export interface Car {
  id: string
  modelName: string
  bodyType: string
  modelType: string
  imageUrl: string
}

type ResponseData = {
  data: Car[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: carsData });
}
