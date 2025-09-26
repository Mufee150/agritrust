import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  role?: 'farmer' | 'customer' | 'investor' | 'buyer'
}

const ROLE_ICONS = {
  farmer: '👨‍🌾',
  customer: '🧑‍🍳',
  investor: '💰',
  buyer: '🏭'
}

export default function DashboardLayout({ children, title, role }: DashboardLayoutProps) {
  const nav = useNavigate()
  const location = useLocation()
  
  const logout = () => {
    localStorage.removeItem('ag_role')
    localStorage.removeItem('ag_phone')
    nav('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🌾</span>
              <span className="font-bold text-green-700">AgriTrust</span>
            </Link>

            {/* Profile Menu */}
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-gray-700">
                <span className="text-xl">🔔</span>
              </button>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                  {role && ROLE_ICONS[role]}
                </span>
                <div className="hidden sm:block">
                  <div className="font-medium text-gray-900">{role}</div>
                  <div className="text-gray-500 text-xs">{localStorage.getItem('ag_phone')}</div>
                </div>
              </div>
              <button 
                onClick={logout}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mt-1 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{title}</span>
            </nav>
          </div>

          {/* Page Content */}
          <div className="animate-fadeIn">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}