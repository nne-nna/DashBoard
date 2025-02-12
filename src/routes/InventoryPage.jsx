import { ShoppingBag } from "lucide-react";
import { topProducts } from "../constants";

const InventoryPage = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title text-black dark:text-white">Inventory</h1>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                            <ShoppingBag size={26} />
                        </div>
                        <p className="card-title text-black dark:text-white">Total Items</p>
                    </div>
                    <div className="card-body">
                        <p className="text-3xl font-bold text-black dark:text-white">{topProducts.length}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-green-500/20 p-2 text-green-500">
                            <ShoppingBag size={26} />
                        </div>
                        <p className="card-title text-black dark:text-white">In Stock</p>
                    </div>
                    <div className="card-body">
                        <p className="text-3xl font-bold text-black dark:text-white">
                            {topProducts.filter(p => p.status === "In Stock").length}
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-red-500/20 p-2 text-red-500">
                            <ShoppingBag size={26} />
                        </div>
                        <p className="card-title text-black dark:text-white">Out of Stock</p>
                    </div>
                    <div className="card-body">
                        <p className="text-3xl font-bold text-black dark:text-white">
                            {topProducts.filter(p => p.status === "Out of Stock").length}
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-yellow-500/20 p-2 text-yellow-500">
                            <ShoppingBag size={26} />
                        </div>
                        <p className="card-title text-black dark:text-white">Low Stock</p>
                    </div>
                    <div className="card-body">
                        <p className="text-3xl font-bold text-black dark:text-white">0</p>
                    </div>
                </div>
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
                                {topProducts.map((product) => (
                                    <tr key={product.number} className="table-row">
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="size-14 rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="text-black dark:text-white">{product.name}</p>
                                                    <p className="font-normal text-slate-600 dark:text-slate-400">
                                                        ${product.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell text-black dark:text-white">{product.status}</td>
                                        <td className="table-cell">
                                            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                                                <div
                                                    className={`h-full rounded-full ${
                                                        product.status === "In Stock"
                                                            ? "bg-green-500"
                                                            : "bg-red-500"
                                                    }`}
                                                    style={{
                                                        width: product.status === "In Stock" ? "75%" : "0%"
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

export default InventoryPage;
