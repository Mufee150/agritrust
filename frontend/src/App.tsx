import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Splash from './pages/Splash.tsx'
import RoleSelection from './pages/RoleSelection.tsx'
import AuthOTP from './pages/AuthOTP.tsx'
import FarmerProfile from './pages/farmer/FarmerProfile.tsx'
import FarmRegistration from './pages/farmer/FarmRegistration.tsx'
import FarmerDashboard from './pages/farmer/FarmerDashboard.tsx'
import SmartPlanner from './pages/farmer/SmartPlanner.tsx'
import ContractCreation from './pages/farmer/ContractCreation.tsx'
import GeotaggedUpload from './pages/farmer/GeotaggedUpload.tsx'
import CustomerDashboard from './pages/customer/CustomerDashboard.tsx'
import BrowseProduce from './pages/customer/BrowseProduce.tsx'
import Checkout from './pages/customer/Checkout.tsx'
import InvestorDashboard from './pages/investor/InvestorDashboard.tsx'
import BrowseFarms from './pages/investor/BrowseFarms.tsx'
import InvestmentDetail from './pages/investor/InvestmentDetail.tsx'
import Portfolio from './pages/investor/Portfolio.tsx'
import BuyerDashboard from './pages/buyer/BuyerDashboard.tsx'
import ContractOffers from './pages/buyer/ContractOffers.tsx'
import AdminLogin from './pages/admin/AdminLogin.tsx'
import AdminDashboard from './pages/admin/AdminDashboard.tsx'
import Reports from './pages/Reports'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/roles" element={<RoleSelection />} />
      <Route path="/auth/:role" element={<AuthOTP />} />

      {/* Farmer flows */}
      <Route path="/farmer/profile" element={<FarmerProfile />} />
      <Route path="/farmer/register" element={<FarmRegistration />} />
      <Route path="/farmer/planner" element={<SmartPlanner />} />
      <Route path="/farmer/contract" element={<ContractCreation />} />
      <Route path="/farmer/upload" element={<GeotaggedUpload />} />
      <Route path="/farmer/dashboard" element={<FarmerDashboard />} />

      {/* Other personas */}
      <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      <Route path="/customer/browse" element={<BrowseProduce />} />
      <Route path="/customer/checkout" element={<Checkout />} />
      <Route path="/investor/dashboard" element={<InvestorDashboard />} />
      <Route path="/investor/browse" element={<BrowseFarms />} />
      <Route path="/investor/detail/:id" element={<InvestmentDetail />} />
      <Route path="/investor/portfolio" element={<Portfolio />} />
      <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
      <Route path="/buyer/offers" element={<ContractOffers />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
  <Route path="/reports" element={<Reports />} />
    </Routes>
  )
}
