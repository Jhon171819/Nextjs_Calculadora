import React, { useState } from 'react'
import styles from './Styles/FrontPage.module.css'

export default function FrontPage (): React.JSX.Element {
  async function post (operation: string): Promise<void> {
    try {
      const option2 = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value1, value2, operation })
      }
      const response = await fetch('api/Controller', option2)

      if (response.ok) {
        const data: number = await response.json()
        setResult(data)
      } else {
        console.error('Erro na solicitação POST:', response.status, response.statusText)
      }
    } catch (error) {
      console.error('Erro:', error)
    }
  }

  const [result, setResult] = useState<number>(0)
  const [value1, setValue1] = useState<number>()
  const [value2, setValue2] = useState<number>()
  return (
    <div className={styles.Container} >
      <div className={styles.result}>
        <p>{result}</p>
      </div>
      <div className={styles.label}>
        <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setValue1(Number(e.target.value)) }}></input>
        <input type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setValue2(Number(e.target.value)) }}></input>
        <div className={styles.button_container}>
          <button onClick={() => { void post('add') }}>Somar</button>
          <button onClick={() => { void post('sub') }}>Subtrair</button>
          <button onClick={() => { void post('mult') }}>Multiplicar</button>
          <button onClick={() => { void post('div') }}>Dividir</button>
        </div>
      </div>
    </div>
  )
}
