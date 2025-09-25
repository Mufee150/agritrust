import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FarmerDashboard() {
  const nav = useNavigate()
  return (
    <div className="screen container">
      <h2>Farmer Dashboard</h2>
      <div className="grid">
        <button onClick={() => nav('/farmer/register')}>Farm Registration</button>
        <button onClick={() => nav('/farmer/planner')}>Smart Crop Planner</button>
        <button onClick={() => nav('/farmer/contract')}>Apply for Funding</button>
        <button onClick={() => nav('/farmer/upload')}>Geotagged Upload</button>
      </div>
      <div className="notifications">
        <h3>Notifications</h3>
        <div className="note">No new notifications</div>
      </div>
    </div>
  )
}
