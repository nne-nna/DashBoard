import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import axios from "axios"; // If using Axios

const InventoryPage = () => {
    const [products, setProducts] = useState([]); // Store API products
    const [loading, setLoading] = useState(true);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                setProducts(response.data.products); // Store fetched products
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading inventory...</p>;

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title text-black dark:text-white">Inventory</h1>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <InventoryCard title="Total Items" count={products.length} color="blue" />
                <InventoryCard title="In Stock" count={products.filter(p => p.stock > 0).length} color="green" />
                <InventoryCard title="Out of Stock" count={products.filter(p => p.stock === 0).length} color="red" />
                <InventoryCard title="Low Stock" count={products.filter(p => p.stock > 0 && p.stock < 10).length} color="yellow" />
            </div>

            <div className="card">
                <div className="card-header">
                    <p className="card-title text-black dark:text-white">Inventory Status</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full overflow-auto [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head text-black dark:text-white">Product</th>
                                    <th className="table-head text-black dark:text-white">Status</th>
                                    <th className="table-head text-black dark:text-white">Stock Level</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {products.map((product) => (
                                    <tr key={product.id} className="table-row">
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <img
                                                    src={product.thumbnail}
                                                    alt={product.title}
                                                    className="size-14 rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="text-black dark:text-white">{product.title}</p>
                                                    <p className="font-normal text-slate-600 dark:text-slate-400">
                                                        ${product.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell text-black dark:text-white">
                                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                                        </td>
                                        <td className="table-cell">
                                            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                                                <div
                                                    className={`h-full rounded-full ${
                                                        product.stock > 0 ? "bg-green-500" : "bg-red-500"
                                                    }`}
                                                    style={{
                                                        width: `${Math.min(product.stock, 100)}%`
                                                    }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

//  Inventory Card Component
const InventoryCard = ({ title, count, color }) => (
    <div className="card">
        <div className="card-header">
            <div className={`rounded-lg bg-${color}-500/20 p-2 text-${color}-500`}>
                <ShoppingBag size={26} />
            </div>
            <p className="card-title text-black dark:text-white">{title}</p>
        </div>
        <div className="card-body">
            <p className="text-3xl font-bold text-black dark:text-white">{count}</p>
        </div>
    </div>
);

export default InventoryPage;
