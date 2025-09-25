import React, { useState } from 'react'

export default function GeotaggedUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [done, setDone] = useState(false)

  const upload = () => {
    if (!file) return
    // attach mock geotag
    const payload = { name: file.name, geotag: { lat: 0, lng: 0 }, time: new Date().toISOString() }
    localStorage.setItem('last_upload', JSON.stringify(payload))
    setDone(true)
  }

  return (
    <div className="screen container">
      <h2>Monthly Crop Upload</h2>
      <div className="muted">GPS & timestamp will be added automatically</div>
      <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      <div className="actions">
        <button onClick={upload}>Upload</button>
      </div>
      {done && <div className="success">Uploaded ✓</div>}
    </div>
  )
}
