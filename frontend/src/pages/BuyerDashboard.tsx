import { useState, useEffect } from 'react'
import { Card } from '../components/ui/Card'

interface Contract {
  id: string
  farmer: string
  product: string
  quantity: number
  unit: string
  pricePerUnit: number
  startDate: string
  endDate: string
  status: 'active' | 'completed' | 'pending'
}

interface Supplier {
  id: string
  name: string
  location: string
  rating: number
  products: string[]
}

export default function BuyerDashboard() {
  const [contracts, setContracts] = useState<Contract[]>([])
  const [suppliers, setSuppliers] = useState<Supplier[]>([])

  // Simulated data - replace with actual API calls
  useEffect(() => {
    // Fetch contracts
    setContracts([
      {
        id: 'CON001',
        farmer: 'Green Farms',
        product: 'Tomatoes',
        quantity: 1000,
        unit: 'kg',
        pricePerUnit: 35,
        startDate: '2025-09-01',
        endDate: '2025-12-31',
        status: 'active'
      },
      {
        id: 'CON002',
        farmer: 'Nature\'s Best',
        product: 'Potatoes',
        quantity: 2000,
        unit: 'kg',
        pricePerUnit: 25,
        startDate: '2025-10-01',
        endDate: '2025-12-31',
        status: 'pending'
      }
    ])

    // Fetch suppliers
    setSuppliers([
      {
        id: 'SUP001',
        name: 'Green Farms',
        location: 'Kerala',
        rating: 4.5,
        products: ['Tomatoes', 'Onions', 'Carrots']
      },
      {
        id: 'SUP002',
        name: 'Nature\'s Best',
        location: 'Tamil Nadu',
        rating: 4.8,
        products: ['Potatoes', 'Cauliflower', 'Cabbage']
      }
    ])
  }, [])

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Bulk Purchasing Dashboard</h1>
        <p className="text-gray-600">Manage your contracts and find reliable suppliers</p>
      </div>

      {/* Active Contracts */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Active Contracts</h2>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            New Contract
          </button>
        </div>
        <div className="space-y-4">
          {contracts.map(contract => (
            <Card key={contract.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Contract with {contract.farmer}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(contract.startDate).toLocaleDateString()} - {new Date(contract.endDate).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  contract.status === 'active' ? 'bg-green-100 text-green-800' :
                  contract.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Product</p>
                  <p className="font-medium">{contract.product}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quantity</p>
                  <p className="font-medium">{contract.quantity} {contract.unit}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Price per Unit</p>
                  <p className="font-medium">₹{contract.pricePerUnit}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Value</p>
                  <p className="font-medium">₹{(contract.quantity * contract.pricePerUnit).toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded">
                  View Details
                </button>
                <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
                  Download Invoice
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Supplier Directory */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Supplier Directory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {suppliers.map(supplier => (
            <Card key={supplier.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{supplier.name}</h3>
                  <p className="text-sm text-gray-600">{supplier.location}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <span>⭐</span>
                  <span className="text-sm text-gray-600">{supplier.rating}</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Available Products:</p>
                <div className="flex flex-wrap gap-2">
                  {supplier.products.map(product => (
                    <span 
                      key={product}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Contact Supplier
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}