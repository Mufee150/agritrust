import React from 'react'
import Card from '../../ui/Card'

export default function BuyerDashboard() {
  return (
    <div className="screen container">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Buyer Dashboard</h2>
        <div className="text-sm text-gray-500">Buy produce in bulk and manage orders</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="font-semibold">Bulk Listings</div>
          <div className="text-sm text-gray-500 mt-2">Find large-volume lots from suppliers</div>
        </Card>
        <Card>
          <div className="font-semibold">Orders</div>
          <div className="text-sm text-gray-500 mt-2">Manage your procurement</div>
        </Card>
        <Card>
          <div className="font-semibold">Suppliers</div>
          <div className="text-sm text-gray-500 mt-2">Trusted suppliers and ratings</div>
        </Card>
      </div>
    </div>
  )
}
