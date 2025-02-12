import React, { useState, useMemo } from 'react';
import { 
  LineChart, Line, AreaChart, Area,
  ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid 
} from 'recharts';
import { Search, UserPlus, Filter, Download, ChevronUp, ChevronDown } from 'lucide-react';

const customerData = [
  { id: 1, name: "Tobias Renshaw", email: "tobias.renshaw@mailnest.com", status: "Active", orders: 15, spent: 1200 },
  { id: 2, name: "Amara Obiano", email: "amara.obiano@netpost.io", status: "Active", orders: 8, spent: 750 },
  { id: 3, name: "Elliot Grayson", email: " elliot.g@inboxnow.com", status: "Inactive", orders: 3, spent: 300 },
  { id: 4, name: "Emily Brown", email: "emily@mailnest.com", status: "Active", orders: 12, spent: 980 },
  { id: 5, name: "Sienna Patel", email: "sienna.patel@fastmailer.com", status: "Active", orders: 20, spent: 1500 },
];

const growthData = [
  { month: 'Jan', customers: 100 },
  { month: 'Feb', customers: 120 },
  { month: 'Mar', customers: 150 },
  { month: 'Apr', customers: 180 },
  { month: 'May', customers: 220 },
  { month: 'Jun', customers: 280 },
  { month: 'Jul', customers: 350 },
  { month: 'Aug', customers: 200 },
  { month: 'Sep', customers: 450 },
  { month: 'Oct', customers: 500 },
  { month: 'Nov', customers: 580 },
  { month: 'Dec', customers: 650 }
];

const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  
  const handleSort = (key) => {
    setSortConfig((current) => {
      if (current.key === key) {
        return {
          ...current,
          direction: current.direction === 'ascending' ? 'descending' : 'ascending'
        };
      }
      return { key, direction: 'ascending' };
    });
  };

  const filteredCustomers = useMemo(() => {
    let filtered = [...customerData];
    
    if (searchTerm) {
      filtered = filtered.filter(customer => 
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(customer => 
        customer.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }
    
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return filtered;
  }, [searchTerm, statusFilter, sortConfig]);

  const summaryStats = useMemo(() => {
    const total = customerData.length;
    const active = customerData.filter(c => c.status === 'Active').length;
    const avgSpent = customerData.reduce((acc, curr) => acc + curr.spent, 0) / total;
    
    return {
      total,
      active,
      activePercentage: ((active / total) * 100).toFixed(0),
      avgSpent: avgSpent.toFixed(2)
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Customers</h1>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-x-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            <UserPlus size={18} />
            Add Customer
          </button>
          <button className="flex items-center gap-x-2 rounded-lg border bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Customers</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{summaryStats.total}</p>
          <p className="text-sm text-green-600 dark:text-green-400">Updated just now</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Customers</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{summaryStats.active}</p>
          <p className="text-sm text-green-600 dark:text-green-400">{summaryStats.activePercentage}% of total</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Spent</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">${summaryStats.avgSpent}</p>
          <p className="text-sm text-green-600 dark:text-green-400">Per customer</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Churn Rate</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">2.4%</p>
          <p className="text-sm text-green-600 dark:text-green-400">Last 30 days</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-lg border bg-white p-4 dark:bg-slate-800 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border px-10 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border px-4 py-2 text-gray-900 dark:bg-slate-900 dark:text-white"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Customer Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              stroke="#6B7280"
              tick={{ fontSize: 12 }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis 
              stroke="#6B7280"
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#fff' }}
              formatter={(value) => [`${value} customers`]}
            />
            <Area 
              type="monotone" 
              dataKey="customers" 
              stroke="#8884d8" 
              fill="#8884d8" 
              fillOpacity={0.3} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-lg border bg-white dark:bg-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50 dark:bg-slate-700">
                <th 
                  className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-2">
                    Name
                    {sortConfig.key === 'name' && (
                      sortConfig.direction === 'ascending' ? 
                        <ChevronUp size={16} /> : 
                        <ChevronDown size={16} />
                    )}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Email</th>
                <th 
                  className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300"
                  onClick={() => handleSort('status')}
                >
                  <div className="flex items-center gap-2">
                    Status
                    {sortConfig.key === 'status' && (
                      sortConfig.direction === 'ascending' ? 
                        <ChevronUp size={16} /> : 
                        <ChevronDown size={16} />
                    )}
                  </div>
                </th>
                <th 
                  className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300"
                  onClick={() => handleSort('orders')}
                >
                  <div className="flex items-center gap-2">
                    Orders
                    {sortConfig.key === 'orders' && (
                      sortConfig.direction === 'ascending' ? 
                        <ChevronUp size={16} /> : 
                        <ChevronDown size={16} />
                    )}
                  </div>
                </th>
                <th 
                  className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300"
                  onClick={() => handleSort('spent')}
                >
                  <div className="flex items-center gap-2">
                    Total Spent
                    {sortConfig.key === 'spent' && (
                      sortConfig.direction === 'ascending' ? 
                        <ChevronUp size={16} /> : 
                        <ChevronDown size={16} />
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 dark:hover:bg-slate-700">
                  <td className="px-6 py-4 text-gray-900 dark:text-gray-200">{customer.name}</td>
                  <td className="px-6 py-4 text-gray-900 dark:text-gray-200">{customer.email}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2 py-1 text-xs ${
                      customer.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-gray-200">{customer.orders}</td>
                  <td className="px-6 py-4 text-gray-900 dark:text-gray-200">${customer.spent}</td>
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