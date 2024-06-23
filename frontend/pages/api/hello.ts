import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: String
}

export const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' });
}

export default handler;