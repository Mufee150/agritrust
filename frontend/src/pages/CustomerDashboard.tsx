import { useState, useEffect } from 'react'
import { Card } from '../components/ui/Card'

interface Product {
  id: string
  name: string
  farmer: string
  price: number
  quantity: number
  unit: string
  image: string
}

interface Order {
  id: string
  date: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  items: {
    product: Product
    quantity: number
  }[]
  total: number
}

export default function CustomerDashboard() {
  const [products, setProducts] = useState<Product[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  // Simulated data - replace with actual API calls
  useEffect(() => {
    // Fetch products
    setProducts([
      {
        id: '1',
        name: 'Fresh Tomatoes',
        farmer: 'Green Farms',
        price: 40,
        quantity: 100,
        unit: 'kg',
        image: '🍅'
      },
      {
        id: '2',
        name: 'Organic Potatoes',
        farmer: 'Nature\'s Best',
        price: 30,
        quantity: 150,
        unit: 'kg',
        image: '🥔'
      }
    ])

    // Fetch orders
    setOrders([
      {
        id: 'ORD001',
        date: '2025-09-25',
        status: 'processing',
        items: [
          {
            product: {
              id: '1',
              name: 'Fresh Tomatoes',
              farmer: 'Green Farms',
              price: 40,
              quantity: 100,
              unit: 'kg',
              image: '🍅'
            },
            quantity: 5
          }
        ],
        total: 200
      }
    ])
  }, [])

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === 'all' || product.quantity > 0)
  )

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to AgriTrust Market</h1>
        <p className="text-gray-600">Browse and order fresh produce directly from farmers</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select 
          className="px-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="all">All Products</option>
          <option value="inStock">In Stock</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredProducts.map(product => (
          <Card key={product.id} className="p-4">
            <div className="text-center mb-4">
              <span className="text-4xl">{product.image}</span>
            </div>
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-600">By {product.farmer}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-green-600 font-medium">₹{product.price}/{product.unit}</span>
              <span className="text-sm text-gray-500">{product.quantity} {product.unit} available</span>
            </div>
            <button 
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Add to Cart
            </button>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
        <div className="space-y-4">
          {orders.map(order => (
            <Card key={order.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Order #{order.id}</h3>
                  <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                  order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                  order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              <div className="mt-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{item.product.image}</span>
                    <span>{item.quantity}x {item.product.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <span className="font-medium">Total: ₹{order.total}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}