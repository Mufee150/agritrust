import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../layouts/DashboardLayout'
import Card from '../../ui/Card'

// Mock data for demonstration
const PRODUCE_ITEMS = [
  { id: 1, name: 'Fresh Tomatoes', farmer: 'Green Valley Farm', price: 40, unit: 'kg', image: '🍅', rating: 4.8 },
  { id: 2, name: 'Organic Potatoes', farmer: 'Hillside Gardens', price: 30, unit: 'kg', image: '🥔', rating: 4.5 },
  { id: 3, name: 'Green Peppers', farmer: 'Sunrise Fields', price: 60, unit: 'kg', image: '🫑', rating: 4.7 },
  { id: 4, name: 'Fresh Carrots', farmer: 'Valley View Farm', price: 35, unit: 'kg', image: '🥕', rating: 4.6 },
  { id: 5, name: 'Onions', farmer: 'Green Valley Farm', price: 25, unit: 'kg', image: '🧅', rating: 4.4 },
  { id: 6, name: 'Sweet Corn', farmer: 'Hillside Gardens', price: 20, unit: 'piece', image: '🌽', rating: 4.9 }
]

const RECENT_ORDERS = [
  { id: 1, items: 'Tomatoes, Onions', status: 'Delivered', date: '2 days ago', amount: 280 },
  { id: 2, items: 'Potatoes', status: 'In Transit', date: '1 day ago', amount: 150 }
]

export default function CustomerDashboard() {
  const nav = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredProduce = PRODUCE_ITEMS.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.farmer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <DashboardLayout title="Browse Fresh Produce" role="customer">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-2xl">
            🛒
          </div>
          <div>
            <div className="text-sm text-gray-500">Total Orders</div>
            <div className="text-2xl font-bold">12</div>
          </div>
        </Card>

        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-2xl">
            ⭐
          </div>
          <div>
            <div className="text-sm text-gray-500">Avg Rating</div>
            <div className="text-2xl font-bold">4.8</div>
          </div>
        </Card>

        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-2xl">
            💝
          </div>
          <div>
            <div className="text-sm text-gray-500">Saved Items</div>
            <div className="text-2xl font-bold">5</div>
          </div>
        </Card>
      </div>

      {/* Search & Filters */}
      <Card className="p-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                placeholder="Search produce or farmer..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm">
              <option>All Categories</option>
              <option>Vegetables</option>
              <option>Fruits</option>
              <option>Grains</option>
            </select>
            <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm">
              <option>Sort by: Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredProduce.map(item => (
          <Card 
            key={item.id}
            className="group cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all"
            onClick={() => nav('/customer/product/' + item.id)}
          >
            <div className="aspect-video bg-gray-50 flex items-center justify-center text-6xl">
              {item.image}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.farmer}</p>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  🤍
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-bold text-green-600">₹{item.price}/{item.unit}</div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-amber-400">⭐</span>
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Recent Orders</h3>
          <button className="text-sm text-green-600 hover:text-green-700">View All Orders</button>
        </div>

        <div className="space-y-4">
          {RECENT_ORDERS.map(order => (
            <div key={order.id} className="flex items-start gap-3 text-sm border-b pb-4">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-xl">
                📦
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-900 font-medium">Order #{order.id}</p>
                    <p className="text-gray-500 mt-1">{order.items}</p>
                  </div>
                  <p className="font-medium text-green-600">₹{order.amount}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {order.status}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{order.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  )
}
