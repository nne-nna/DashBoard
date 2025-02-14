import React, { useState, useEffect } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Download, Filter, Printer, Share2 } from 'lucide-react';
import axios from 'axios';

const ReportsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Original static sales data
  const salesData = [
    { month: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
    { month: 'Feb', revenue: 3500, expenses: 2100, profit: 1400 },
    { month: 'Mar', revenue: 5000, expenses: 2800, profit: 2200 },
    { month: 'Apr', revenue: 4500, expenses: 2600, profit: 1900 },
    { month: 'May', revenue: 4800, expenses: 2750, profit: 2050 },
    { month: 'Jun', revenue: 5200, expenses: 3000, profit: 2200 },
    { month: 'Jul', revenue: 5500, expenses: 3200, profit: 2300 },
    { month: 'Aug', revenue: 5300, expenses: 3100, profit: 2200 },
    { month: 'Sep', revenue: 4900, expenses: 2900, profit: 2000 },
    { month: 'Oct', revenue: 5100, expenses: 3000, profit: 2100 },
    { month: 'Nov', revenue: 5400, expenses: 3150, profit: 2250 },
    { month: 'Dec', revenue: 6000, expenses: 3500, profit: 2500 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Calculate totals from sales data
  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalExpenses = salesData.reduce((sum, item) => sum + item.expenses, 0);
  const totalProfit = salesData.reduce((sum, item) => sum + item.profit, 0);
  const profitMargin = ((totalProfit / totalRevenue) * 100).toFixed(0);

  // Calculate category data from products API
  const categoryData = !loading ? products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = (acc[category] || 0) + product.price * product.stock;
    return acc;
  }, {}) : {};

  const categoryChartData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value: Math.round(value)
  }));

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Financial Reports</h1>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-x-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            <Download size={18} />
            Export
          </button>
          <button className="flex items-center gap-x-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            <Printer size={18} />
            Print
          </button>
          <button className="flex items-center gap-x-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            <Share2 size={18} />
            Share
          </button>
          <button className="flex items-center gap-x-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Revenue</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">${totalRevenue.toLocaleString()}</p>
          <p className="text-sm text-green-600 dark:text-green-400">+12% from last month</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Total Expenses</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">${totalExpenses.toLocaleString()}</p>
          <p className="text-sm text-red-600 dark:text-red-400">+8% from last month</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Net Profit</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">${totalProfit.toLocaleString()}</p>
          <p className="text-sm text-green-600 dark:text-green-400">+15% from last month</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">Profit Margin</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{profitMargin}%</p>
          <p className="text-sm text-green-600 dark:text-green-400">+3% from last month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Financial Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <XAxis dataKey="month" stroke="currentColor" />
              <YAxis stroke="currentColor" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgb(30 41 59)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Legend />
              <Bar dataKey="revenue" fill="#0088FE" name="Revenue" />
              <Bar dataKey="expenses" fill="#FF8042" name="Expenses" />
              <Bar dataKey="profit" fill="#00C49F" name="Profit" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Sales by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {categoryChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgb(30 41 59)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;