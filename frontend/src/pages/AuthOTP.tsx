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
    <div className="min-h-screen w-full bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
            <span className="text-2xl">📱</span>
            Quick Login
          </h1>
          <p className="text-gray-600 mt-2">Secure access with phone verification</p>
        </div>
        
        <Card className="p-6 animate-fadeIn">
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{
                  role === 'farmer' ? '👨‍🌾' :
                  role === 'customer' ? '🧑‍🍳' :
                  role === 'investor' ? '💰' :
                  role === 'buyer' ? '🏭' : '👤'
                }</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">{role ? `Welcome ${role}!` : 'Welcome!'}</h2>
              <p className="text-sm text-gray-500 mt-1">Please verify your phone number to continue</p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <div className="flex items-center mb-2">
                  <div className="text-sm font-medium text-gray-700">Phone Number</div>
                  {!sent && <div className="ml-auto text-xs text-gray-400">Step 1 of 2</div>}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🇮🇳 +91</span>
                  <input 
                    type="tel"
                    className="pl-16 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                    value={phone}
                    onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter mobile number"
                    maxLength={10}
                  />
                </div>
              </div>

              {!sent ? (
                <div className="flex gap-3">
                  <button 
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2.5 px-4 rounded-lg font-medium hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
                    onClick={request}
                  >
                    Get OTP
                  </button>
                  <button 
                    className="px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => nav(-1)}
                  >
                    Back
                  </button>
                </div>
              ) : (
                <div className="animate-fadeIn space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="text-sm font-medium text-gray-700">Verify OTP</div>
                      <div className="ml-auto text-xs text-gray-400">Step 2 of 2</div>
                    </div>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all text-center text-xl tracking-widest"
                      value={otp}
                      onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="● ● ● ●"
                      maxLength={4}
                    />
                    <div className="text-center mt-2">
                      <button 
                        className="text-sm text-green-600 hover:text-green-700"
                        onClick={() => { setSent(false); setOtp('') }}
                      >
                        Change Phone Number
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2.5 px-4 rounded-lg font-medium hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
                      onClick={verify}
                    >
                      Verify & Continue
                    </button>
                  </div>
                </div>
              )}

              {err && (
                <div className="mt-4 animate-fadeIn">
                  <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="text-xl">⚠️</span>
                    <span className="text-sm font-medium">{err}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
