import type { NextApiRequest, NextApiResponse } from 'next'
import { questions } from '_constants'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(questions)
}
