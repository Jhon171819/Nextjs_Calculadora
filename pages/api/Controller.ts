import * as Ops from './operations'
import * as Error from './ErrorTreatment'
import { type NextApiRequest, type NextApiResponse } from 'next'

interface RequestBody {
  valor1: number
  valor2: number
  Operation: string
}

export default function handler (req: NextApiRequest, res: NextApiResponse): void {
  if (req.method === 'POST') {
    const { valor1, valor2, Operation }: RequestBody = req.body
    if (typeof valor1 === 'number' && typeof valor2 === 'number') {
      switch (Operation) {
        case 'add':
          res.json(Ops.add(valor1, valor2))
          break
        case 'mult':
          res.json(Ops.mult(valor1, valor2))
          break
        case 'div':
          res.json(Ops.div(valor1, valor2))
          break
        case 'sub':
          res.json(Ops.sub(valor1, valor2))
          break
      }
    } else {
      Error.handlerNotANumber(res)
    }
  } else {
    Error.handlerInvReqMethod(res)
  }
}
