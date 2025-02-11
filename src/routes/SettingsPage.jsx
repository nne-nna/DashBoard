import { Settings, Bell, Lock, Palette, Globe } from "lucide-react";

const SettingsPage = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title">Settings</h1>
            
            <div className="card">
                <div className="card-header">
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                            <Settings size={26} />
                        </div>
                        <p className="card-title">General Settings</p>
                    </div>
                </div>
                <div className="card-body">
                    <form className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Store Name</label>
                            <input
                                type="text"
                                className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
                                placeholder="Enter store name"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Store Email</label>
                            <input
                                type="email"
                                className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
                                placeholder="Enter store email"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Store Address</label>
                            <textarea
                                className="h-32 rounded-lg border border-slate-300 p-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
                                placeholder="Enter store address"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Currency</label>
                            <select className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900">
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
                            <label htmlFor="notifications" className="text-sm font-medium">
                                Enable email notifications
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                            <Bell size={26} />
                        </div>
                        <p className="card-title">Notification Preferences</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Order Updates</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Receive notifications about order status changes</p>
                            </div>
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500 dark:border-slate-700"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Inventory Alerts</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Get notified when products are low in stock</p>
                            </div>
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500 dark:border-slate-700"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                            <Lock size={26} />
                        </div>
                        <p className="card-title">Security Settings</p>
                    </div>
                </div>
                <div className="card-body">
                    <form className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Current Password</label>
                            <input
                                type="password"
                                className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
                                placeholder="Enter current password"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">New Password</label>
                            <input
                                type="password"
                                className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
                                placeholder="Enter new password"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Confirm New Password</label>
                            <input
                                type="password"
                                className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
                                placeholder="Confirm new password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600"
                        >
                            Update Password
                        </button>
                    </form>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                            <Palette size={26} />
                        </div>
                        <p className="card-title">Appearance</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Theme</label>
                            <select className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900">
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                                <option value="system">System</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                            <Globe size={26} />
                        </div>
                        <p className="card-title">Language & Region</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Language</label>
                            <select className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900">
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Time Zone</label>
                            <select className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900">
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