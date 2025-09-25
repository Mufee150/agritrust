import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FilePreview({ file }: { file?: File | null }) {
  if (!file) return null
  const url = URL.createObjectURL(file)
  return (
    <div className="file-preview">
      {file.type.startsWith('image/') ? <img src={url} alt="preview" /> : <div className="pdf">{file.name}</div>}
    </div>
  )
}

export default function FarmRegistration() {
  const nav = useNavigate()
  const [acreage, setAcreage] = useState('')
  const [owner, setOwner] = useState(localStorage.getItem('farmer_name') || '')
  const [file, setFile] = useState<File | null>(null)
  const [err, setErr] = useState('')

  const submit = () => {
    if (!acreage) return setErr('Enter land size')
    if (!owner) return setErr('Owner name required')
    if (!file) return setErr('Ownership proof required')
    // store
    localStorage.setItem('farm_acreage', acreage)
    localStorage.setItem('farm_owner', owner)
    nav('/farmer/dashboard')
  }

  return (
    <div className="screen container">
      <h2>Farm Registration</h2>
      <label className="field">
        <div>Land size (acres)</div>
        <input value={acreage} onChange={e => setAcreage(e.target.value)} placeholder="e.g. 2.5" />
      </label>

      <label className="field">
        <div>Owner's name</div>
        <input value={owner} onChange={e => setOwner(e.target.value)} />
      </label>

      <div className="field">
        <div>Draw farm polygon on map</div>
        <div className="map-placeholder">[Map polygon drawing placeholder]</div>
      </div>

      <div className="field">
        <div>Upload proof of ownership (image/pdf)</div>
        <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
        <FilePreview file={file} />
      </div>

      <div className="actions">
        <button onClick={submit}>Submit for Verification</button>
      </div>
      {err && <div className="error">{err}</div>}
    </div>
  )
}
