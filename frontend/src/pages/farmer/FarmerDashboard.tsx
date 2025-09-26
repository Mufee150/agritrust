import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../layouts/DashboardLayout'
import Card from '../../ui/Card'

const QUICK_ACTIONS = [
  { 
    title: 'Register Farm',
    icon: '🏡',
    desc: 'Add your farm details and location',
    path: '/farmer/register',
    color: 'from-blue-500 to-blue-400'
  },
  {
    title: 'Smart Planner',
    icon: '🌱',
    desc: 'Get AI-powered crop suggestions',
    path: '/farmer/planner',
    color: 'from-green-500 to-green-400'
  },
  {
    title: 'Get Funding',
    icon: '💰',
    desc: 'Apply for farm development loans',
    path: '/farmer/contract',
    color: 'from-amber-500 to-amber-400'
  },
  {
    title: 'Upload Photos',
    icon: '📸',
    desc: 'Add geotagged farm photos',
    path: '/farmer/upload',
    color: 'from-purple-500 to-purple-400'
  }
]

export default function FarmerDashboard() {
  const nav = useNavigate()
  
  return (
    <DashboardLayout title="Farmer Dashboard" role="farmer">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-2xl">
            🌾
          </div>
          <div>
            <div className="text-sm text-gray-500">Active Crops</div>
            <div className="text-2xl font-bold">3</div>
          </div>
        </Card>

        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-2xl">
            💧
          </div>
          <div>
            <div className="text-sm text-gray-500">Water Usage</div>
            <div className="text-2xl font-bold">Normal</div>
          </div>
        </Card>

        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-2xl">
            💸
          </div>
          <div>
            <div className="text-sm text-gray-500">Funding Status</div>
            <div className="text-2xl font-bold">₹50K</div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {QUICK_ACTIONS.map(action => (
          <Card 
            key={action.title}
            className="group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
            onClick={() => nav(action.path)}
          >
            <div className={`h-24 bg-gradient-to-r ${action.color} rounded-t-xl p-4`}>
              <span className="text-4xl filter drop-shadow">{action.icon}</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                {action.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{action.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Recent Activity</h3>
          <button className="text-sm text-green-600 hover:text-green-700">View All</button>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 text-sm">
            <span className="text-xl">🌱</span>
            <div>
              <p className="text-gray-900">Added new crop: Tomatoes</p>
              <p className="text-gray-500 text-xs">2 days ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <span className="text-xl">📸</span>
            <div>
              <p className="text-gray-900">Uploaded 3 new farm photos</p>
              <p className="text-gray-500 text-xs">5 days ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <span className="text-xl">💰</span>
            <div>
              <p className="text-gray-900">Received funding: ₹50,000</p>
              <p className="text-gray-500 text-xs">1 week ago</p>
            </div>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  )
}
