import React, { useState } from 'react'


export default function TablaMultiplicar() {
    const [n, setN] = useState('')
    const [tabla, setTabla] = useState([])
    function generar() {
        const x = parseInt(n)
        if (!Number.isInteger(x)) { setTabla([]); return }
        const t = []
        for (let i = 1; i <= 13; i++) t.push(`${x} x ${i} = ${x * i}`)
        setTabla(t)
    }
    return (
        <div className="page-card">
            <h1>Tabla de Multiplicar (hasta 13)</h1>
            <div className="form-row">
                <input className="input" value={n} onChange={e => setN(e.target.value)} placeholder="Número" />
                <button className="btn" onClick={generar}>Generar</button>
            </div>
            <ul style={{ marginTop: 14 }}>
                {tabla.map((r, i) => (<li key={i}>{r}</li>))}
            </ul>
        </div>
    )
}