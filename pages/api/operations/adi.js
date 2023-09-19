export default function handler(req, res) {
    if (req.method == 'POST') {
        const { valor1, valor2} = req.body
        const resultado = valor1 + valor2
        res.json(resultado)
    } else if (req.method == 'GET') {
        res.send("batata")
    }
    
}