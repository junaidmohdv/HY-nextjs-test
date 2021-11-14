import type { NextApiRequest, NextApiResponse } from 'next'

import  Comments  from '../../lib/comments'

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json(Comments)
      break

    case  'POST':
      const comment = req.body.comment
      const newComment = {
        id: Date.now(),
        comment: comment
      }
      Comments.push(newComment)
      res.status(201).json(Comments)
      break

    default:
      res.status(405).end()
      break
  }
  
}