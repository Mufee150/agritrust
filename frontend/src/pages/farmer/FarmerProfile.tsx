import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FarmerProfile() {
  const nav = useNavigate()
  const phone = localStorage.getItem('ag_phone') || ''
  const [name, setName] = useState('')
  const [bank, setBank] = useState('')
  const [err, setErr] = useState('')

  const submit = () => {
    if (!name) return setErr('Name required')
    if (!bank) return setErr('Bank/UPI required')
    localStorage.setItem('farmer_name', name)
    localStorage.setItem('farmer_bank', bank)
    nav('/farmer/register')
  }

  return (
    <div className="screen container">
      <h2>Farmer Profile</h2>
      <div className="muted">Contact (from OTP): {phone}</div>
      <label className="field">
        <div>Full name</div>
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>

      <label className="field">
        <div>Bank / UPI</div>
        <input value={bank} onChange={e => setBank(e.target.value)} placeholder="Account or UPI ID" />
      </label>

      <div className="actions">
        <button onClick={submit}>Save & Continue</button>
      </div>
      {err && <div className="error">{err}</div>}
    </div>
  )
}
