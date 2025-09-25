import React from 'react'
import Card from '../../ui/Card'

export default function CustomerDashboard() {
  return (
    <div className="screen container">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Customer Dashboard</h2>
        <div className="text-sm text-gray-500">Welcome — browse produce and make purchases</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="font-semibold">Available Produce</div>
          <div className="text-sm text-gray-500 mt-2">Explore listings from local farmers</div>
        </Card>
        <Card>
          <div className="font-semibold">Orders</div>
          <div className="text-sm text-gray-500 mt-2">Track your recent orders</div>
        </Card>
        <Card>
          <div className="font-semibold">Favorites</div>
          <div className="text-sm text-gray-500 mt-2">Saved producers and items</div>
        </Card>
      </div>
    </div>
  )
}
