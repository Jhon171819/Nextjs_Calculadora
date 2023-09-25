import { type NextApiRequest, type NextApiResponse } from 'next'

interface RequestBody {
  valor1: number
  valor2: number
}

export default function handler (req: NextApiRequest, res: NextApiResponse): void {
  if (req.method === 'POST') {
    const { valor1, valor2 }: RequestBody = req.body

    if (typeof valor1 === 'number' && typeof valor2 === 'number') {
      const resultado: number = valor1 * valor2
      res.json(resultado)
    } else {
      res.status(400).json({ message: 'Dados não são numeros' })
    }
  } else {
    res.status(500).json({ message: 'Erro de método de requisição' })
  }
}
