import React from 'react'
import { NavLink } from 'react-router-dom'

const IconHome = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10.5L12 4l9 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10.5V19a1 1 0 0 0 1 1h3v-6h6v6h3a1 1 0 0 0 1-1v-8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
const IconSum = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
const IconLetter = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7.5l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 19H3V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
const IconTable = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 4v16M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
const IconVideo = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M19 8l3-2v12l-3-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export default function Nav() {
    const links = [
        { to: '/', label: 'Inicio', icon: <IconHome /> },
        { to: '/sumadora', label: 'Sumadora', icon: <IconSum /> },
        { to: '/numero-a-letras', label: 'Número → Letras', icon: <IconLetter /> },
        { to: '/tabla-multiplicar', label: 'Tabla', icon: <IconTable /> },
        { to: '/experiencia', label: 'Experiencia', icon: <IconVideo /> },
    ]

    return (
        <nav>
            <div className="nav-inner">
                <ul>
                    {links.map(l => (
                        <li key={l.to}>
                            <NavLink to={l.to} className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                                {l.icon}
                                <span>{l.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}