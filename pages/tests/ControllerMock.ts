/* eslint-disable @typescript-eslint/no-var-requires */
import { NextApiRequest, NextApiResponse } from 'next'
const Error = require('../api/ErrorTreatment')
const Ops = require('../api/Operations')

function handler (req: NextApiRequest, res: NextApiResponse): void {
  if (req.method === 'POST') {
    const { value1, value2, operation } = req.body
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
    } else {
      Error.handlerNotANumber(res)
    }
  } else {
    Error.handlerInvReqMethod(res)
  }
}

module.exports = handler
