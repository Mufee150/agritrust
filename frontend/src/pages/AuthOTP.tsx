import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../ui/Card'

function sendMockOTP(phone: string) {
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
    <div className="screen container flex items-center justify-center">
      <Card>
        <div className="w-full max-w-md">
          <h2 className="text-xl font-bold mb-2">{role?.toUpperCase() || 'Auth'} Login</h2>
          <p className="text-sm text-gray-500 mb-4">Enter your phone number to receive a one-time code.</p>

          <label className="block mb-3">
            <div className="text-sm mb-1">Phone number</div>
            <input className="input input-bordered w-full" value={phone} onChange={e => setPhone(e.target.value)} placeholder="10-digit mobile" />
          </label>

          <div className="flex gap-3 mb-3">
            <button className="btn btn-primary" onClick={request}>Send OTP</button>
            <button className="btn btn-ghost" onClick={() => nav(-1)}>Back</button>
          </div>

          {sent && (
            <div className="mt-3">
              <label className="block mb-2">
                <div className="text-sm mb-1">Enter OTP</div>
                <input className="input input-bordered w-full" value={otp} onChange={e => setOtp(e.target.value)} placeholder="1234" />
              </label>
              <div className="flex gap-3">
                <button className="btn btn-success" onClick={verify}>Verify</button>
                <button className="btn btn-outline" onClick={() => { setSent(false); setOtp('') }}>Cancel</button>
              </div>
            </div>
          )}

          {err && <div className="text-error mt-3">{err}</div>}
        </div>
      </Card>
    </div>
  )
}
