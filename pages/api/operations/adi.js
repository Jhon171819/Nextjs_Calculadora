export default function handler(req, res) {
    if (req.method == 'POST') {
        const { valor1, valor2} = req.body
        const resultado = valor1 + valor2
        res.json(resultado)
    } else {
        res.status(500).json({"message" :"Erro de metodo de requisição"})
    }
    
}