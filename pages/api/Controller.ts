import { type NextApiRequest, type NextApiResponse } from 'next'
import * as Error from './ErrorTreatment'
import * as Ops from './Operations'

interface RequestBody {
  value1: number
  value2: number
  operation: string
}

export default function handler (req: NextApiRequest, res: NextApiResponse): void {
  if (req.method === 'POST') {
    const { value1, value2, operation }: RequestBody = req.body
    if (typeof value1 === 'number' && typeof value2 === 'number') {
      switch (operation) {
        case 'add':
          res.json(Ops.add(value1, value2))
          break
        case 'mult':
          res.json(Ops.mult(value1, value2))
          break
        case 'div':
          res.json(Ops.div(value1, value2))
          break
        case 'sub':
          res.json(Ops.sub(value1, value2))
          break
      }
    } else if ((value1 | value2) < 0 && (value1 | value2) > -1) {
      Error.handlerNotANumber(res)
    }
  } else {
    Error.handlerInvReqMethod(res)
  }
}
