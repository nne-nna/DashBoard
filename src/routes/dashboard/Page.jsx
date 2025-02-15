import { useState, useEffect } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "../../hooks/use-theme";
import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users } from "lucide-react";
import { Footer } from "../../layouts/Footer";
import { useNotification } from "../../contexts/NotificationContext";
import axios from "axios";

const DashboardPage = () => {
    const { theme } = useTheme();
    const { addNotification } = useNotification();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalRevenue: 0,
        averagePrice: 0,
        totalStock: 0
    });
    
    // Calculate monthly sales data for the chart
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                const productsData = response.data.products;
                setProducts(productsData);

                // Calculate dashboard statistics
                const totalProducts = productsData.length;
                const totalRevenue = productsData.reduce((sum, product) => sum + (product.price * product.stock), 0);
                const averagePrice = totalRevenue / totalProducts;
                const totalStock = productsData.reduce((sum, product) => sum + product.stock, 0);

                setStats({
                    totalProducts,
                    totalRevenue,
                    averagePrice,
                    totalStock
                });

                // Generate mock monthly sales data based on products
                const monthlyData = Array.from({ length: 12 }, (_, i) => {
                    const month = new Date(2024, i).toLocaleString('default', { month: 'short' });
                    const total = Math.floor(totalRevenue * (0.5 + Math.random() * 0.5) / 12);
                    return { name: month, total };
                });

                setSalesData(monthlyData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Handle delete product
    const handleDeleteProduct = (productId, productName) => {
        // Filter out the deleted product
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
        
        // Update stats after deletion
        const totalProducts = updatedProducts.length;
        const totalRevenue = updatedProducts.reduce((sum, product) => sum + (product.price * product.stock), 0);
        const averagePrice = totalRevenue / totalProducts;
        const totalStock = updatedProducts.reduce((sum, product) => sum + product.stock, 0);
        
        setStats({
            totalProducts,
            totalRevenue,
            averagePrice,
            totalStock
        });
        
        // Add notification
        addNotification(`Product "${productName}" has been deleted successfully`);
    };

    if (loading) return <p className="text-center text-gray-500">Loading dashboard...</p>;

    // Get top rated products
    const topRatedProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .map((product, index) => ({
            number: index + 1,
            id: product.id,
            image: product.thumbnail,
            name: product.title,
            description: product.description,
            price: product.price,
            status: product.stock > 0 ? "In Stock" : "Out of Stock",
            rating: product.rating
        }));

    return ( 
        <div className="flex flex-col gap-y-4">
            <h1 className="title">Dashboard</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <Package size={26} />
                        </div>
                        <p className="card-title">Total Products</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                            {stats.totalProducts.toLocaleString()}
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <DollarSign size={26} />
                        </div>
                        <p className="card-title">Total Revenue</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                            ${stats.totalRevenue.toLocaleString()}
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <Users size={26} />
                        </div>
                        <p className="card-title">Average Price</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                            ${stats.averagePrice.toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <CreditCard size={26} />
                        </div>
                        <p className="card-title">Total Stock</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                            {stats.totalStock.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="card col-span-1 md:col-span-2 lg:col-span-4">
                    <div className="card-header">
                        <p className="card-title">Monthly Revenue Overview</p>
                    </div>
                    <div className="card-body p-0">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart 
                                data={salesData}
                                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                            >
                                <defs>
                                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Tooltip
                                    cursor={false}
                                    formatter={(value) => `$${value.toLocaleString()}`}
                                    active={true}
                                />
                                <XAxis
                                    dataKey="name"
                                    strokeWidth={0}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                    tickMargin={6}
                                />
                                <YAxis
                                    strokeWidth={0}
                                    stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                                    tickMargin={6}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="total"
                                    stroke="#2563eb"
                                    fillOpacity={1}
                                    fill="url(#colorTotal)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                    <div className="card-header">
                        <p className="card-title">Recent Products</p>
                    </div>
                    <div className="card-body h-[300px] overflow-auto p-0">
                        {products.slice(0, 5).map((product) => (
                            <div
                                key={product.id}
                                className="flex items-center justify-between gap-x-4 py-2 pr-2"
                            >
                                <div className="flex items-center gap-x-4">
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="size-10 flex-shrink-0 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium text-slate-900 dark:text-slate-50">
                                            {product.title}
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {product.category}
                                        </p>
                                    </div>
                                </div>
                                <p className="font-medium text-slate-900 dark:text-slate-50">
                                    ${product.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">Top Rated Products</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Product</th>
                                    <th className="table-head">Price</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Rating</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {topRatedProducts.map((product) => (
                                    <tr 
                                        key={product.number}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{product.number}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="size-14 rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p>{product.name}</p>
                                                    <p className="font-normal text-slate-600 dark:text-slate-400">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell">${product.price}</td>
                                        <td className="table-cell">{product.status}</td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-2">
                                                <Star
                                                    size={18}
                                                    className="fill-yellow-600 stroke-yellow-600"
                                                />
                                                {product.rating.toFixed(1)}
                                            </div>
                                        </td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button className="text-blue-500 dark:text-blue-600">
                                                    <PencilLine size={20} />
                                                </button>
                                                <button 
                                                    className="text-red-500"
                                                    onClick={() => handleDeleteProduct(product.id, product.name)}
                                                >
                                                    <Trash size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div> 
    );
}
 
export default DashboardPage;