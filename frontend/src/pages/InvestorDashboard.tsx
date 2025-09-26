import { useState, useEffect } from 'react'
import { Card } from '../components/ui/Card'

interface Investment {
  id: string
  farmer: string
  amount: number
  date: string
  returnRate: number
  status: 'active' | 'completed' | 'pending'
}

interface Opportunity {
  id: string
  farmer: string
  requiredAmount: number
  returnRate: number
  duration: number
  description: string
}

export default function InvestorDashboard() {
  const [investments, setInvestments] = useState<Investment[]>([])
  const [opportunities, setOpportunities] = useState<Opportunity[]>([])
  const [totalInvested, setTotalInvested] = useState(0)
  const [totalReturns, setTotalReturns] = useState(0)

  // Simulated data - replace with actual API calls
  useEffect(() => {
    // Fetch investments
    setInvestments([
      {
        id: 'INV001',
        farmer: 'Green Farms',
        amount: 50000,
        date: '2025-06-15',
        returnRate: 12,
        status: 'active'
      },
      {
        id: 'INV002',
        farmer: 'Nature\'s Best',
        amount: 75000,
        date: '2025-07-20',
        returnRate: 15,
        status: 'active'
      }
    ])

    // Fetch investment opportunities
    setOpportunities([
      {
        id: 'OPP001',
        farmer: 'Organic Valley',
        requiredAmount: 100000,
        returnRate: 14,
        duration: 6,
        description: 'Expansion of organic vegetable farm'
      },
      {
        id: 'OPP002',
        farmer: 'Fresh Fields',
        requiredAmount: 80000,
        returnRate: 13,
        duration: 12,
        description: 'Purchase of new farming equipment'
      }
    ])

    // Calculate totals
    setTotalInvested(125000)
    setTotalReturns(15000)
  }, [])

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Investment Portfolio</h1>
        <p className="text-gray-600">Track your agricultural investments and explore new opportunities</p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-600">Total Invested</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">₹{totalInvested.toLocaleString()}</p>
          <div className="mt-2 text-sm text-gray-500">{investments.length} active investments</div>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-600">Total Returns</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">₹{totalReturns.toLocaleString()}</p>
          <div className="mt-2 text-sm text-gray-500">+12% average return rate</div>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-gray-600">Available Balance</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">₹25,000</p>
          <button className="mt-4 text-sm text-green-600 hover:text-green-700">Add Funds</button>
        </Card>
      </div>

      {/* Active Investments */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Active Investments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {investments.map(investment => (
            <Card key={investment.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{investment.farmer}</h3>
                  <p className="text-sm text-gray-600">Invested on {new Date(investment.date).toLocaleDateString()}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  investment.status === 'active' ? 'bg-green-100 text-green-800' :
                  investment.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {investment.status.charAt(0).toUpperCase() + investment.status.slice(1)}
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Amount Invested</p>
                  <p className="font-medium">₹{investment.amount.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Return Rate</p>
                  <p className="font-medium text-green-600">{investment.returnRate}% p.a.</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Investment Opportunities */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map(opportunity => (
            <Card key={opportunity.id} className="p-6">
              <h3 className="font-medium">{opportunity.farmer}</h3>
              <p className="text-sm text-gray-600 mt-1">{opportunity.description}</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-medium">₹{opportunity.requiredAmount.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Returns</p>
                  <p className="font-medium text-green-600">{opportunity.returnRate}% p.a.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-medium">{opportunity.duration} months</p>
                </div>
              </div>
              <button 
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Invest Now
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}