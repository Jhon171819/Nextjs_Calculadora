import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
        const { valor1, valor2} = req.body
        const resultado: number = valor1 - valor2
        res.json(resultado)
    } else {
        res.status(500).json({message: "Erro de metodo de requisição"})
    }
    
}