import React, { useState } from 'react'

export default function Experiencia() {
    const [youtubeUrl, setYoutubeUrl] = useState('https://www.youtube.com/embed/bvbriHCL4Ak')
    return (
        <div className="page-card">
            <h1>Experiencia Personal</h1>
            <div className="form-row">
                <input className="input" value={youtubeUrl} onChange={e => setYoutubeUrl(e.target.value)} style={{ flex: 1 }} />
                <button className="btn ghost" onClick={() => navigator.clipboard?.writeText(youtubeUrl)}>Copiar</button>
            </div>
            <div style={{ marginTop: 12 }}>
                <div className="video-wrapper">
                    <iframe
                        title="mi-experiencia"
                        src={youtubeUrl}
                        width="720"
                        height="405"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}