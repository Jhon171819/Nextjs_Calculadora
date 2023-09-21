import { useState } from "react";
import styles from "./Styles/FrontPage.module.css";
import React from "react";

export default function FrontPage() {
  async function post(Operation: string) {
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
        const data: number = await response.json();
        setResultado(data);
      } else {
        console.error('Erro na solicitação POST:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  const [resultado, setResultado] = useState<number>(0); 
  const [valor1, setValor1] = useState<number>(0);
  const [valor2, setValor2] = useState<number>(0);

  return (
    <div className={styles.Container} >
      <div className={styles.resultado}>
        <p>{resultado}</p>
      </div>
      <div className={styles.label}>
        <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValor1(Number(e.target.value))}></input>
        <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValor2(Number(e.target.value))}></input>

        <div className={styles.button_container}>
          <button onClick={() => (post('adi'))}>Somar</button>
          <button onClick={() => (post('sub'))}>Subtrair</button>
          <button onClick={() => (post('mult'))}>Multiplicar</button>
          <button onClick={() => (post('div'))}>Dividir</button>
        </div>
      </div>
    </div>
  );
}
