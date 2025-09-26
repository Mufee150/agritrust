import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../layouts/DashboardLayout'
import Card from '../../ui/Card'

// Mock data for demonstration
const PORTFOLIO_ITEMS = [
  { id: 1, farm: 'Green Valley Farm', invested: 50000, returns: 8500, crop: 'Tomatoes', duration: '6 months', status: 'Active' },
  { id: 2, farm: 'Hillside Gardens', invested: 75000, returns: 12000, crop: 'Mixed Vegetables', duration: '8 months', status: 'Active' }
]

const OPPORTUNITIES = [
  { 
    id: 1, 
    farm: 'Sunrise Fields', 
    location: 'Kerala',
    seeking: 100000,
    duration: '12 months',
    crop: 'Organic Vegetables',
    rating: 4.8,
    return: '15-18%',
    image: '🌾'
  },
  { 
    id: 2, 
    farm: 'Valley View Farm',
    location: 'Tamil Nadu', 
    seeking: 80000,
    duration: '8 months',
    crop: 'Premium Fruits',
    rating: 4.7,
    return: '12-15%',
    image: '🌾'
  },
  { 
    id: 3, 
    farm: 'Mountain Top Farm',
    location: 'Karnataka', 
    seeking: 120000,
    duration: '10 months',
    crop: 'Exotic Vegetables',
    rating: 4.9,
    return: '16-20%',
    image: '🌾'
  }
]

export default function InvestorDashboard() {
  const nav = useNavigate()
  
  return (
    <DashboardLayout title="Investment Portfolio" role="investor">
      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-2xl">
              💰
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Invested</div>
              <div className="text-2xl font-bold">₹1.25L</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-2xl">
              📈
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Returns</div>
              <div className="text-2xl font-bold">₹20.5K</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-2xl">
              🌾
            </div>
            <div>
              <div className="text-sm text-gray-500">Active Farms</div>
              <div className="text-2xl font-bold">2</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-2xl">
              ⭐
            </div>
            <div>
              <div className="text-sm text-gray-500">Avg ROI</div>
              <div className="text-2xl font-bold">16.4%</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Active Investments */}
      <Card className="p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-gray-900">Active Investments</h3>
          <button className="text-sm text-green-600 hover:text-green-700">View All</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="pb-3 font-medium">Farm</th>
                <th className="pb-3 font-medium">Invested</th>
                <th className="pb-3 font-medium">Returns</th>
                <th className="pb-3 font-medium">Duration</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {PORTFOLIO_ITEMS.map(item => (
                <tr key={item.id} className="border-b last:border-0">
                  <td className="py-4">
                    <div className="font-medium text-gray-900">{item.farm}</div>
                    <div className="text-gray-500">{item.crop}</div>
                  </td>
                  <td className="py-4">
                    <div className="font-medium">₹{item.invested.toLocaleString()}</div>
                  </td>
                  <td className="py-4">
                    <div className="font-medium text-green-600">+₹{item.returns.toLocaleString()}</div>
                  </td>
                  <td className="py-4">{item.duration}</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Investment Opportunities */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">New Opportunities</h3>
          <div className="flex gap-2">
            <select className="px-3 py-1.5 rounded border text-sm bg-white">
              <option>All Locations</option>
              <option>Kerala</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
            </select>
            <select className="px-3 py-1.5 rounded border text-sm bg-white">
              <option>Sort by ROI</option>
              <option>Sort by Duration</option>
              <option>Sort by Rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPPORTUNITIES.map(opp => (
            <Card 
              key={opp.id}
              className="group cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all"
              onClick={() => nav('/investor/opportunity/' + opp.id)}
            >
              <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center">
                <span className="text-6xl filter drop-shadow">{opp.image}</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {opp.farm}
                    </h3>
                    <p className="text-sm text-gray-500">{opp.location}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-amber-400">⭐</span>
                    <span>{opp.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Seeking</span>
                    <span className="font-medium">₹{opp.seeking.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium">{opp.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Returns</span>
                    <span className="font-medium text-green-600">{opp.return}</span>
                  </div>
                </div>

                <div className="text-xs text-gray-500">{opp.crop}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
