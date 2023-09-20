import { useState } from "react"
import styles from "./Styles/FrontPage.module.css"
export default function FrontPage() {
      async function post(Operation) {
        try {
          const option2 = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ valor1, valor2 }),
          };
          const response = await fetch(`api/operations/${Operation}`, option2);
          
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setResultado(data);
          } else {
            
            console.error('Erro na solicitação POST:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Erro:', error);
        }
      }

    const [resultado, setResultado] = useState()
    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)
    return (
        <div className={styles.Container} >

            <div className={styles.resultado}>
                <p>{resultado}</p>
            </div>
            <div className={styles.label}>
                <input type="number" onChange={(e) => setValor1(Number(e.target.value))} ></input>

                <input type="number" onChange={(e) => setValor2(Number(e.target.value))}></input>

                <div className={styles.button_container}>
                    <button onClick={() => (post('adi'))}>Somar</button>
                    <button onClick={() => (post('sub'))}>Subtrair</button>
                    <button onClick={() => (post('mult'))}>Multiplicar</button>
                    <button onClick={() => (post('div'))}>Dividir</button>
                </div>
            </div>
        </div>
    )
}