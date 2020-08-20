import { NextApiRequest, NextApiResponse } from 'next';

export default function getPersonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ id: req.query.id, message: 'getPersonById' });
}
