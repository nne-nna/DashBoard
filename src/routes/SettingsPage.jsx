import React, { useContext } from "react";
import { Settings, Bell, Lock, Palette, Globe } from "lucide-react";
import { ThemeProviderContext } from "../contexts/ThemeContext";

const SettingsPage = () => {
  const { theme, setTheme } = useContext(ThemeProviderContext);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
        Settings
      </h1>

      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-6">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
              <Settings size={26} />
            </div>
            <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              General Settings
            </p>
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Store Name
              </label>
              <input
                type="text"
                className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Enter store name"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Store Email
              </label>
              <input
                type="email"
                className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Enter store email"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Store Address
              </label>
              <textarea
                className="h-32 rounded-lg border border-slate-300 p-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Enter store address"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Currency
              </label>
              <select className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                id="notifications"
                className="h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500 dark:border-slate-700"
              />
              <label
                htmlFor="notifications"
                className="text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Enable email notifications
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-6">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
              <Bell size={26} />
            </div>
            <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Notification Preferences
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-800 dark:text-slate-100">
                  Order Updates
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Receive notifications about order status changes
                </p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500 dark:border-slate-700"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-800 dark:text-slate-100">
                  Inventory Alerts
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Get notified when products are low in stock
                </p>
              </div>
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500 dark:border-slate-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-6">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
              <Lock size={26} />
            </div>
            <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Security Settings
            </p>
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Current Password
              </label>
              <input
                type="password"
                className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Enter current password"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                New Password
              </label>
              <input
                type="password"
                className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Enter new password"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Confirm New Password
              </label>
              <input
                type="password"
                className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Confirm new password"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-6">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
              <Palette size={26} />
            </div>
            <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Appearance
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Theme
              </label>
              <select
                className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                value={theme}
                onChange={handleThemeChange}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-6">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
              <Globe size={26} />
            </div>
            <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              Language & Region
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Language
              </label>
              <select className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Time Zone
              </label>
              <select className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <option value="UTC">UTC</option>
                <option value="EST">EST (UTC-5)</option>
                <option value="PST">PST (UTC-8)</option>
                <option value="GMT">GMT</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;