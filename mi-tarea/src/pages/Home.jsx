import React from 'react'


export default function Home() {
    return (
        <div className="page-card">
            <h1>Ficha personal</h1>
            <div className="profile-row">
                <img src="./mi_foto.jpg" alt="2x2" />
                <div>
                    <p><strong>Nombre:</strong> Jonathan de Jesus</p>
                    <p><strong>Apellido:</strong> Martinez Sanchez</p>
                    <p><strong>Correo:</strong> 20231417@itla.edu.do</p>
                </div>
            </div>
        </div>
    )
}