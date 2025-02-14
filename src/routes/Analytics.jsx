import React, { useState, useEffect } from 'react';
import { 
    BarChart, Bar, Area, AreaChart, LineChart, Line,
    ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid 
} from 'recharts';
import { ArrowUpRight, Users, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react';
import axios from 'axios';

const Analytics = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [analytics, setAnalytics] = useState({
        totalRevenue: 0,
        activeUsers: 0,
        totalOrders: 0,
        growthRate: 0,
        monthlyData: [],
        customerSegments: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                const productsData = response.data.products;
                setProducts(productsData);

                // Calculate analytics from product data
                const totalRevenue = productsData.reduce((sum, product) => 
                    sum + (product.price * product.stock), 0);
                
                // Generate monthly data based on products
                const monthlyData = generateMonthlyData(productsData);
                
                // Calculate customer segments based on product categories
                const customerSegments = calculateCustomerSegments(productsData);

                setAnalytics({
                    totalRevenue,
                    activeUsers: Math.floor(totalRevenue / 100), // Simulated active users
                    totalOrders: Math.floor(totalRevenue / 200), // Simulated total orders
                    growthRate: 23,
                    monthlyData,
                    customerSegments
                });

                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper function to generate monthly data
    const generateMonthlyData = (products) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        return months.map(month => {
            const totalRevenue = products.reduce((sum, product) => 
                sum + (product.price * product.stock), 0);
            
            return {
                name: month,
                sales: Math.floor(totalRevenue * (0.5 + Math.random() * 0.5) / 12),
                customers: Math.floor(totalRevenue * (0.3 + Math.random() * 0.3) / 12),
                orders: Math.floor(totalRevenue * (0.2 + Math.random() * 0.2) / 12)
            };
        });
    };

    // Helper function to calculate customer segments
    const calculateCustomerSegments = (products) => {
        const categories = {};
        products.forEach(product => {
            categories[product.category] = (categories[product.category] || 0) + product.stock;
        });

        return Object.entries(categories).map(([name, value]) => ({
            name,
            value
        }));
    };

    if (loading) return <p className="text-center text-gray-500">Loading analytics...</p>;

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
                    <p className="text-2xl font-bold text-black dark:text-white">
                        ${analytics.totalRevenue.toLocaleString()}
                    </p>
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
                    <p className="text-2xl font-bold text-black dark:text-white">
                        {analytics.activeUsers.toLocaleString()}
                    </p>
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
                    <p className="text-2xl font-bold text-black dark:text-white">
                        {analytics.totalOrders.toLocaleString()}
                    </p>
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
                    <p className="text-2xl font-bold text-black dark:text-white">
                        {analytics.growthRate}%
                    </p>
                </div>
            </div>
        
            {/* Charts */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {/* Sales Trend */}
                <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
                    <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">Sales Trend</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={analytics.monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area 
                                type="monotone" 
                                dataKey="sales" 
                                stroke="#3b82f6" 
                                fill="#3b82f6" 
                                fillOpacity={0.2} 
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
        
                {/* Customer Growth */}
                <div className="rounded-lg border bg-white p-4 dark:bg-slate-800">
                    <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">Customer Growth</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={analytics.monthlyData}>
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
                    <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">Product Categories</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={analytics.customerSegments}>
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
                        <LineChart data={analytics.monthlyData}>
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