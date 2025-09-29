import React, { useState } from 'react'


export default function Sumadora() {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [res, setRes] = useState(null)
    function sumar() {
        const na = parseFloat(a)
        const nb = parseFloat(b)
        if (Number.isFinite(na) && Number.isFinite(nb)) setRes(na + nb)
        else setRes('Entrada inválida')
    }
    return (
        <div className="page-card">
            <h1>Sumadora</h1>
            <div className="form-row">
                <input className="input" value={a} onChange={e => setA(e.target.value)} placeholder="Número A" />
                <input className="input" value={b} onChange={e => setB(e.target.value)} placeholder="Número B" />
                <button className="btn" onClick={sumar}>Sumar</button>
            </div>
            <div className="result">Resultado: <span>{res !== null ? String(res) : '-'}</span></div>
        </div>
    )
}