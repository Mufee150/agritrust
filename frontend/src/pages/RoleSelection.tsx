import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../ui/Card'
import Header from '../ui/Header'

const ROLES = [
  { 
    key: 'farmer',
    label: 'Farmer',
    desc: 'List your farm produce and get funding',
    icon: '👨‍🌾',
    features: ['📱 Easy produce listing', '📍 Simple geo-tagging', '💸 Get farm funding']
  },
  { 
    key: 'customer',
    label: 'Customer',
    desc: 'Buy fresh produce directly from farms',
    icon: '🧑‍🍳',
    features: ['🥬 Fresh farm produce', '🚚 Home delivery', '💯 Quality assured']
  },
  { 
    key: 'investor',
    label: 'Investor',
    desc: 'Support local farms and earn returns',
    icon: '💰',
    features: ['🌾 Fund farm growth', '📊 Track investments', '💸 Earn returns']
  },
  { 
    key: 'buyer',
    label: 'Business',
    desc: 'Buy quality produce in bulk',
    icon: '🏭',
    features: ['📦 Bulk purchases', '✍️ Smart contracts', '🤝 Direct from farms']
  }
]

export default function RoleSelection() {
  const nav = useNavigate()
  const go = (role: string) => {
    if (role === 'admin') return nav('/admin/login')
    nav(`/auth/${role}`)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-green-50 to-white">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">AgriTrust</h1>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">Your trusted platform connecting farmers, buyers, and investors for sustainable agriculture</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-700">
            <span className="text-lg">⚡</span>
            <a href="/reports" className="text-sm font-medium hover:text-green-800">Report an Issue</a>
          </div>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
          {ROLES.map(r => (
            <Card key={r.key} className="p-6 transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="text-4xl w-16 h-16 icon-tilt flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-emerald-300 text-white shadow-sm">{r.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{r.label}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed break-words">{r.desc}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {r.features.map(feature => (
                    <div key={feature} className="flex items-start text-sm text-gray-600">
                      <div className="w-6 flex-shrink-0">{feature.split(' ')[0]}</div>
                      <div className="flex-1">{feature.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => go(r.key)}
                    className="btn btn-primary btn-block bg-gradient-to-r from-green-500 to-emerald-400 border-0 text-white gap-2 shadow-sm hover:shadow-md"
                  >
                    Continue as {r.label} <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </section>

        <section className="bg-gradient-to-b from-white to-green-50 p-8 rounded-2xl shadow-sm mb-8 animate-fadeIn">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How AgriTrust Works</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="font-semibold text-gray-900">Easy to Use</h3>
                <p className="text-sm text-gray-600">Simple screens with clear pictures and steps to guide you</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl mb-2">🤝</div>
                <h3 className="font-semibold text-gray-900">Direct Connection</h3>
                <p className="text-sm text-gray-600">Connect directly with farmers, buyers, and investors</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-semibold text-gray-900">Quality Assured</h3>
                <p className="text-sm text-gray-600">All produce is verified with location tagging</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center space-y-4 mt-12 pb-6 text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="/help" className="hover:text-gray-900">Help Center</a>
            <button className="hover:text-gray-900">Contact Support</button>
          </div>
          
          <p className="text-gray-400">© 2025 AgriTrust. Making agriculture transparent and accessible for everyone.</p>
        </footer>
      </main>
    </div>
  )
}
