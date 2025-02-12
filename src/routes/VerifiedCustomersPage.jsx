import React from 'react';
import { Search, Filter, Download, CheckCircle, Clock, Mail } from 'lucide-react';

const verifiedCustomers = [
  {
    id: 1,
    name: "Tobias Renshaw", 
    email: "tobias.renshaw@mailnest.com",
    verifiedDate: "2024-01-15",
    lastPurchase: "2024-02-01",
    totalSpent: "$2,450",
    verificationMethod: "Email"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@mailnest.com",
    verifiedDate: "2024-01-20",
    lastPurchase: "2024-02-05",
    totalSpent: "$1,890",
    verificationMethod: "Phone"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@mailnest.com",
    verifiedDate: "2024-01-25",
    lastPurchase: "2024-02-10",
    totalSpent: "$3,200",
    verificationMethod: "ID"
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma@mailnest.com",
    verifiedDate: "2024-02-01",
    lastPurchase: "2024-02-15",
    totalSpent: "$1,750",
    verificationMethod: "Email"
  },
  {
    id: 5,
    name: "David Patel",
    email: "david@mailnest.com",
    verifiedDate: "2024-02-05",
    lastPurchase: "2024-02-20",
    totalSpent: "$2,100",
    verificationMethod: "Phone"
  }
];

const VerifiedCustomersPage = () => {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Verified Customers</h1>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-x-2 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600">
            <Mail size={18} />
            Send Verification
          </button>
          <button className="flex items-center gap-x-2 rounded-lg border bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700">
            <Download size={18} />
            Export List
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Verified</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">856</p>
          <p className="text-sm text-green-600 dark:text-green-400">92% of customers</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Pending Verification</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">74</p>
          <p className="text-sm text-yellow-600 dark:text-yellow-400">8% of customers</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Verified Today</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
          <p className="text-sm text-green-600 dark:text-green-400">+3 from yesterday</p>
        </div>
        <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Failed Verifications</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">5</p>
          <p className="text-sm text-red-600 dark:text-red-400">-2 from yesterday</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 rounded-lg border bg-white p-4 dark:bg-slate-800 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search verified customers..."
            className="w-full rounded-lg border px-10 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
          />
        </div>
        <button className="flex items-center gap-x-2 rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-slate-700">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Verified Customers Table */}
      <div className="rounded-lg border bg-white dark:bg-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50 dark:bg-slate-700">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Verification Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Method</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Last Purchase</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Total Spent</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {verifiedCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 dark:hover:bg-slate-700">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900 dark:text-white">{customer.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{customer.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{customer.verifiedDate}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{customer.verificationMethod}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{customer.lastPurchase}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{customer.totalSpent}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-x-2 text-green-600 dark:text-green-400">
                      <CheckCircle size={18} />
                      Verified
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerifiedCustomersPage;