import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const nav = useNavigate()
  return (
    <header className="w-full py-3 px-4 bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-green-700 flex items-center gap-2">
          <span className="text-2xl">🌾</span>
          <span className="hidden sm:inline">AgriTrust</span>
        </Link>
        
        <button 
          onClick={() => nav('/admin/login')}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          title="Admin Access"
        >
          Admin
        </button>
      </div>
    </header>
  )
}
