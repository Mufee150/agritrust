import React from 'react'
import Card from '../../ui/Card'

export default function InvestorDashboard() {
  return (
    <div className="screen container">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Investor Dashboard</h2>
        <div className="text-sm text-gray-500">Track portfolios and discover farms to invest in</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="font-semibold">Portfolio</div>
          <div className="text-sm text-gray-500 mt-2">Your active investments</div>
        </Card>
        <Card>
          <div className="font-semibold">Opportunities</div>
          <div className="text-sm text-gray-500 mt-2">Browse farms seeking funding</div>
        </Card>
        <Card>
          <div className="font-semibold">Reports</div>
          <div className="text-sm text-gray-500 mt-2">Performance and returns</div>
        </Card>
      </div>
    </div>
  )
}
