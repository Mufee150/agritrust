import React from 'react'
import Card from '../../ui/Card'

export default function AdminDashboard() {
  return (
    <div className="screen container">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <div className="text-sm text-gray-500">User verification, approvals and analytics</div>
      </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <div className="font-semibold">Verifications</div>
          <div className="text-sm text-gray-500 mt-2">Review KYC & documents</div>
        </Card>
        <Card>
          <div className="font-semibold">Contracts</div>
          <div className="text-sm text-gray-500 mt-2">Approve or reject contracts</div>
        </Card>
        <Card>
          <div className="font-semibold">Reports</div>
          <div className="text-sm text-gray-500 mt-2">Generate reports and exports</div>
          <div className="mt-3">
            <a className="btn btn-sm btn-ghost" href="/reports">Open Reports</a>
          </div>
        </Card>
        <Card>
          <div className="font-semibold">Analytics</div>
          <div className="text-sm text-gray-500 mt-2">Platform usage and KPIs</div>
        </Card>
      </div>
    </div>
  )
}
