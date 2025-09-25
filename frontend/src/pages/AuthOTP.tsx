import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function sendMockOTP(phone: string) {
  // save to localStorage for demo
  const code = '1234'
  localStorage.setItem('mock_otp', code)
  localStorage.setItem('mock_phone', phone)
  return Promise.resolve(true)
}

export default function AuthOTP() {
  const { role } = useParams()
  const nav = useNavigate()
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [sent, setSent] = useState(false)
  const [err, setErr] = useState('')

  const request = async () => {
    if (!/^\d{10}$/.test(phone)) return setErr('Enter a valid 10-digit phone')
    setErr('')
    await sendMockOTP(phone)
    setSent(true)
  }

  const verify = () => {
    const stored = localStorage.getItem('mock_otp')
    if (otp === stored) {
      localStorage.setItem('ag_role', role || 'customer')
      localStorage.setItem('ag_phone', phone || localStorage.getItem('mock_phone') || '')
      // route based on role
      switch (role) {
        case 'farmer':
          return nav('/farmer/profile')
        case 'customer':
          return nav('/customer/dashboard')
        case 'investor':
          return nav('/investor/dashboard')
        case 'buyer':
          return nav('/buyer/dashboard')
        default:
          return nav('/')
      }
    }
    setErr('Invalid OTP')
  }

  return (
    <div className="screen container">
      <h2>{role?.toUpperCase() || 'Auth'} Login</h2>
      <label className="field">
        <div>Phone number</div>
        <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="10-digit mobile" />
      </label>
      <div className="actions">
        <button onClick={request}>Send OTP</button>
      </div>

      {sent && (
        <div className="otp-area">
          <label className="field">
            <div>Enter OTP</div>
            <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="1234" />
          </label>
          <div className="actions">
            <button onClick={verify}>Verify</button>
            <button onClick={() => { setSent(false); setOtp('') }}>Cancel</button>
          </div>
        </div>
      )}

      {err && <div className="error">{err}</div>}
    </div>
  )
}
