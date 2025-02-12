import React from 'react';
import { Save, X, Upload } from 'lucide-react';

const NewCustomersPage = () => {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Customer</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-x-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            <Save size={18} />
            Save Customer
          </button>
          <button className="flex items-center gap-x-2 rounded-lg border bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700">
            <X size={18} />
            Cancel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Personal Information */}
        <div className="rounded-lg border bg-white p-6 dark:bg-slate-800">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h2>
          
          <div className="mb-6 flex flex-col items-center gap-4">
            <div className="relative">
              <div className="size-24 rounded-full bg-gray-200 dark:bg-slate-700"></div>
              <button className="absolute bottom-0 right-0 rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600">
                <Upload size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Upload customer photo</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border p-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border p-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border p-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
              <input
                type="tel"
                className="w-full rounded-lg border p-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="rounded-lg border bg-white p-6 dark:bg-slate-800">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Address Information</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Street Address</label>
              <input
                type="text"
                className="w-full rounded-lg border p-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">City</label>
                <input
                  type="text"
                  className="w-full rounded-lg border p-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">State</label>
                <input
                  type="text"
                  className="w-full rounded-lg border p-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Zip Code</label>
                <input
                  type="text"
                  className="w-full rounded-lg border p-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Country</label>
                <select className="w-full rounded-lg border p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:text-white">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomersPage;