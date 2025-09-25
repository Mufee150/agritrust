import React, { useState } from 'react'
import Header from '../ui/Header'

export default function Reports() {
  const [tab, setTab] = useState<'complaints' | 'feedback' | 'exports'>('complaints')

  return (
    <div className="screen w-full">
      <Header />

      <div className="w-full">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold">Write Report</h2>
          <p className="text-sm text-gray-500">Manage complaints, feedback and exports.</p>
        </div>

        <div className="tabs w-full mb-4 justify-center">
          <a className={`tab tab-lg ${tab === 'complaints' ? 'tab-active' : ''}`} onClick={() => setTab('complaints')}>Complaints</a>
          <a className={`tab tab-lg ${tab === 'feedback' ? 'tab-active' : ''}`} onClick={() => setTab('feedback')}>Feedback</a>
          <a className={`tab tab-lg ${tab === 'exports' ? 'tab-active' : ''}`} onClick={() => setTab('exports')}>Exports</a>
        </div>

        <div className="card p-4 w-full">
          {tab === 'complaints' && (
            <div>
              <h3 className="text-lg font-semibold">Manage Complaints</h3>
              <p className="text-sm text-gray-500 mt-1">View and resolve user complaints submitted through the platform.</p>
              <div className="mt-4">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>farmer_john</td>
                      <td>Listing dispute</td>
                      <td><span className="badge">Open</span></td>
                      <td><button className="btn btn-xs btn-primary">View</button></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>buyer_inc</td>
                      <td>Delivery delay</td>
                      <td><span className="badge badge-success">Resolved</span></td>
                      <td><button className="btn btn-xs">View</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'feedback' && (
            <div>
              <h3 className="text-lg font-semibold">Feedback</h3>
              <p className="text-sm text-gray-500 mt-1">User feedback and comments about the platform.</p>
              <div className="mt-4 space-y-3">
                <div className="p-3 border rounded">
                  <div className="font-semibold">Great app!</div>
                  <div className="text-sm text-gray-500">I found local buyers easily.</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="font-semibold">Feature request</div>
                  <div className="text-sm text-gray-500">Please add bulk upload for produce listings.</div>
                </div>
              </div>
            </div>
          )}

          {tab === 'exports' && (
            <div>
              <h3 className="text-lg font-semibold">Exports</h3>
              <p className="text-sm text-gray-500 mt-1">Generate CSV exports for admin reporting.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="btn">Export Complaints CSV</button>
                <button className="btn">Export Feedback CSV</button>
                <button className="btn">Export Transactions CSV</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
