import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const nav = useNavigate()
  const [pw, setPw] = useState('')
  const [err, setErr] = useState('')

  const login = () => {
    if (pw === 'admin123') return nav('/admin/dashboard')
    setErr('Incorrect password')
  }

  return (
    <div className="screen container">
      <h2>Admin Login</h2>
      <label className="field">
        <div>Password</div>
        <input type="password" value={pw} onChange={e => setPw(e.target.value)} />
      </label>
      <div className="actions">
        <button onClick={login}>Login</button>
      </div>
      {err && <div className="error">{err}</div>}
    </div>
  )
}
