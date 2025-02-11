import React from 'react';
import { 
  LineChart, Line, AreaChart, Area,
  ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid 
} from 'recharts';
import { Search, UserPlus, Filter, Download } from 'lucide-react';

const customerData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active", orders: 15, spent: "$1,200" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active", orders: 8, spent: "$750" },
  { id: 3, name: "Robert Johnson", email: "robert@example.com", status: "Inactive", orders: 3, spent: "$300" },
  { id: 4, name: "Emily Brown", email: "emily@example.com", status: "Active", orders: 12, spent: "$980" },
  { id: 5, name: "Michael Wilson", email: "michael@example.com", status: "Active", orders: 20, spent: "$1,500" },
];

const growthData = [
  { month: 'Jan', customers: 100 },
  { month: 'Feb', customers: 120 },
  { month: 'Mar', customers: 150 },
  { month: 'Apr', customers: 180 },
  { month: 'May', customers: 220 },
  { month: 'Jun', customers: 280 },
];

const CustomersPage = () => {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Customers</h1>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-x-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            <UserPlus size={18} />
            Add Customer
          </button>
          <button className="flex items-center gap-x-2 rounded-lg border bg-white px-4 py-2 hover:bg-gray-50 dark:bg-slate-800">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Customers</p>
          <p className="text-2xl font-bold">1,234</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Customers</p>
          <p className="text-2xl font-bold">1,048</p>
          <p className="text-sm text-green-600">85% of total</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Spent</p>
          <p className="text-2xl font-bold">$946</p>
          <p className="text-sm text-green-600">+5% from last month</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Churn Rate</p>
          <p className="text-2xl font-bold">2.4%</p>
          <p className="text-sm text-green-600">-0.8% from last month</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 rounded-lg border bg-white p-4 dark:bg-slate-800 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers..."
            className="w-full rounded-lg border px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900"
          />
        </div>
        <button className="flex items-center gap-x-2 rounded-lg border px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Customer Growth Chart */}
      <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
        <h2 className="mb-4 text-lg font-semibold">Customer Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="customers" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Customers Table */}
      <div className="rounded-lg border bg-white dark:bg-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50 dark:bg-slate-700">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Orders</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Total Spent</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {customerData.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 dark:hover:bg-slate-700">
                  <td className="px-6 py-4">{customer.name}</td>
                  <td className="px-6 py-4">{customer.email}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2 py-1 text-xs ${
                      customer.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{customer.orders}</td>
                  <td className="px-6 py-4">{customer.spent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;