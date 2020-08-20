import { NextApiRequest, NextApiResponse } from 'next';

export default function getVehicleById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ id: req.query.id, message: 'getVehicleById' });
}
