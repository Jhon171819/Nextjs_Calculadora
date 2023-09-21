import { NextApiRequest, NextApiResponse } from "next"

interface RequestBody {
  valor1: number;
  valor2: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { valor1, valor2 }: RequestBody = req.body;
    const resultado: number = valor1 / valor2;
    res.json(resultado);
  } else {
    res.status(500).json({ message: "Erro de método de requisição" });
  }
}
