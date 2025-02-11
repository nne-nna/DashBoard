import React from 'react';
import { 
  BarChart, Bar, PieChart, Pie, Cell,
  ResponsiveContainer, XAxis, YAxis, Tooltip, Legend 
} from 'recharts';
import { Download, Filter, Printer, Share2 } from 'lucide-react';

const salesData = [
  { month: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { month: 'Feb', revenue: 3500, expenses: 2100, profit: 1400 },
  { month: 'Mar', revenue: 5000, expenses: 2800, profit: 2200 },
  { month: 'Apr', revenue: 4500, expenses: 2600, profit: 1900 },
  { month: 'May', revenue: 4800, expenses: 2750, profit: 2050 },
  { month: 'Jun', revenue: 5200, expenses: 3000, profit: 2200 },
];

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Food', value: 200 },
  { name: 'Books', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ReportsPage = () => {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Financial Reports</h1>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-x-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            <Download size={18} />
            Export
          </button>
          <button className="flex items-center gap-x-2 rounded-lg border bg-white px-4 py-2 hover:bg-gray-50 dark:bg-slate-800">
            <Printer size={18} />
            Print
          </button>
          <button className="flex items-center gap-x-2 rounded-lg border bg-white px-4 py-2 hover:bg-gray-50 dark:bg-slate-800">
            <Share2 size={18} />
            Share
          </button>
          <button className="flex items-center gap-x-2 rounded-lg border bg-white px-4 py-2 hover:bg-gray-50 dark:bg-slate-800">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
          <p className="text-2xl font-bold">$27,000</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Expenses</p>
          <p className="text-2xl font-bold">$15,650</p>
          <p className="text-sm text-red-600">+8% from last month</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Net Profit</p>
          <p className="text-2xl font-bold">$11,350</p>
          <p className="text-sm text-green-600">+15% from last month</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Profit Margin</p>
          <p className="text-2xl font-bold">42%</p>
          <p className="text-sm text-green-600">+3% from last month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <h2 className="mb-4 text-lg font-semibold">Financial Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#0088FE" name="Revenue" />
              <Bar dataKey="expenses" fill="#FF8042" name="Expenses" />
              <Bar dataKey="profit" fill="#00C49F" name="Profit" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <h2 className="mb-4 text-lg font-semibold">Sales by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;