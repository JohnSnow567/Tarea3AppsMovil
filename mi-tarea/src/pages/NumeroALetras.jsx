import React, { useState } from 'react'
import numeroALetra from '../utils/NumeroALetra'


export default function NumeroALetras() {
    const [num, setNum] = useState('')
    const [out, setOut] = useState('')


    function convertir() {
        const n = parseInt(num)
        if (!Number.isInteger(n) || n < 1 || n > 1000) {
            setOut('Ingresa un número entero entre 1 y 1000')
            return
        }
        setOut(numeroALetra(n))
    }


    return (
        <div className="page-card">
            <h1>Traductor de Número a Letras (1–1000)</h1>
            <div className="form-row">
                <input className="input" value={num} onChange={e => setNum(e.target.value)} placeholder="Ingrese un número" />
                <button className="btn" onClick={convertir}>Convertir</button>
            </div>
            <p className="result"><strong>{out}</strong></p>
        </div>
    )
}