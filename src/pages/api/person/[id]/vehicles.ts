import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllVehiclesByPersonId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ id: req.query.id, message: 'getAllVehiclesByPersonId' });
}
