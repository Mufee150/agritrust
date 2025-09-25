import React from 'react'
import { useNavigate } from 'react-router-dom'

const ROLES = [
  { key: 'farmer', label: 'Farmer', desc: 'Growers who list produce and request funding', icon: '👨‍🌾' },
  { key: 'customer', label: 'Customer', desc: 'Buy fresh produce for home', icon: '🧑‍🍳' },
  { key: 'investor', label: 'Micro-Investor', desc: 'Fund farms and earn returns', icon: '💰' },
  { key: 'buyer', label: 'Agribusiness Buyer', desc: 'Buy in bulk for processing/retail', icon: '🏭' },
  { key: 'admin', label: 'Admin', desc: 'Platform admin (login protected)', icon: '🔐' }
]

export default function RoleSelection() {
  const nav = useNavigate()
  const go = (role: string) => {
    if (role === 'admin') return nav('/admin/login')
    nav(`/auth/${role}`)
  }

  return (
    <div className="screen container">
      <h2>Select your role</h2>
      <div className="role-grid">
        {ROLES.map(r => (
          <button key={r.key} className="role-card" onClick={() => go(r.key)}>
            <div className="role-icon">{r.icon}</div>
            <div className="role-body">
              <div className="role-title">{r.label}</div>
              <div className="role-desc">{r.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
