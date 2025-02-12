import React from 'react'
import { 
    BarChart, Bar, Area, AreaChart, LineChart, Line,
    ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid 
} from 'recharts';
import { ArrowUpRight, Users, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react';

const monthlyData = [
    { name: 'Jan', sales: 4000, customers: 2400, orders: 1800 },
    { name: 'Feb', sales: 3000, customers: 1398, orders: 2800 },
    { name: 'Mar', sales: 2000, customers: 9800, orders: 3200 },
    { name: 'Apr', sales: 2780, customers: 3908, orders: 2000 },
    { name: 'May', sales: 1890, customers: 4800, orders: 2181 },
    { name: 'Jun', sales: 2390, customers: 3800, orders: 2500 },
    { name: 'Jul', sales: 3490, customers: 4100, orders: 2800 },
    { name: 'Aug', sales: 4100, customers: 4300, orders: 3100 },
    { name: 'Sep', sales: 3800, customers: 4600, orders: 2900 },
    { name: 'Oct', sales: 4200, customers: 4800, orders: 3300 },
    { name: 'Nov', sales: 4500, customers: 5100, orders: 3600 },
    { name: 'Dec', sales: 5000, customers: 5500, orders: 4000 }
];
  
const customerSegments = [
    { name: 'New', value: 2400 },
    { name: 'Returning', value: 4567 },
    { name: 'Inactive', value: 1398 },
    { name: 'Loyal', value: 3908 },
];

const Analytics = () => {
    // Rest of the component remains the same
    return (
        <div className="flex flex-col gap-y-4 p-4">
          <h1 className="text-2xl font-bold text-black dark:text-white">Analytics Overview</h1>
          
          {/* KPI Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900">
                  <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="flex items-center text-green-600 dark:text-green-400">
                  <ArrowUpRight className="h-4 w-4" />
                  12%
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
              <p className="text-2xl font-bold text-black dark:text-white">$54,235</p>
            </div>
            
            <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-purple-100 p-2 dark:bg-purple-900">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="flex items-center text-green-600 dark:text-green-400">
                  <ArrowUpRight className="h-4 w-4" />
                  8%
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Active Users</p>
              <p className="text-2xl font-bold text-black dark:text-white">2,435</p>
            </div>
    
            <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900">
                  <ShoppingBag className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <span className="flex items-center text-green-600 dark:text-green-400">
                  <ArrowUpRight className="h-4 w-4" />
                  15%
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Total Orders</p>
              <p className="text-2xl font-bold text-black dark:text-white">1,753</p>
            </div>
    
            <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-orange-100 p-2 dark:bg-orange-900">
                  <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="flex items-center text-green-600 dark:text-green-400">
                  <ArrowUpRight className="h-4 w-4" />
                  23%
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Growth Rate</p>
              <p className="text-2xl font-bold text-black dark:text-white">23%</p>
            </div>
          </div>
    
          {/* Charts */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Sales Trend */}
            <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
              <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">Sales Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="sales" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
    
            {/* Customer Growth */}
            <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
              <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">Customer Growth</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="customers" stroke="#8b5cf6" />
                </LineChart>
              </ResponsiveContainer>
            </div>
    
            {/* Customer Segments */}
            <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
              <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">Customer Segments</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={customerSegments}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
    
            {/* Order Analytics */}
            <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
              <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">Order Analytics</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="orders" stroke="#f59e0b" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      );
    };

export default Analytics;