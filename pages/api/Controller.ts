import { add, mult, sub, div } from './op'
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
          res.json(add(valor1, valor2))
          break
        case 'mult':
          res.json(mult(valor1, valor2))
          break
        case 'div':
          res.json(div(valor1, valor2))
          break
        case 'sub':
          res.json(sub(valor1, valor2))
          break
      }
    } else {
      res.status(400).json({ message: 'Dados não são numeros' })
    }
  } else {
    res.status(500).json({ message: 'Erro de método de requisição' })
  }
}
