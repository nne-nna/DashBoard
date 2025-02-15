import { useState, useEffect, useRef } from "react";
import { Package, PencilLine, Search, Trash } from "lucide-react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useNotification } from "../contexts/NotificationContext";
import { useSearch } from "../contexts/SearchContext";

const ProductsPage = () => {
    const { addNotification } = useNotification();
    const { highlightedProductId, highlightProduct } = useSearch();
    const location = useLocation();
    const navigate = useNavigate();
    
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    
    //scrolling to highlighted product
    const highlightedRowRef = useRef(null);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                setProducts(response.data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Handle highlighting product from search
    useEffect(() => {
        // Check if we have a product ID in the search params
        const searchParams = new URLSearchParams(location.search);
        const productId = searchParams.get('highlight');
        
        if (productId) {

            const id = parseInt(productId);
            const timerId = highlightProduct(id);
            
            // Clean up the URL
            searchParams.delete('highlight');
            navigate({ search: searchParams.toString() }, { replace: true });
            
            return () => clearTimeout(timerId);
        }
    }, [location.search, highlightProduct, navigate]);

    // Scroll to highlighted product
    useEffect(() => {
        if (highlightedProductId && highlightedRowRef.current) {
            highlightedRowRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [highlightedProductId]);

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle delete product
    const handleDeleteProduct = (product) => {
        setProducts(prevProducts => 
            prevProducts.filter(p => p.id !== product.id)
        );
        
        // Add notification about deleted product
        addNotification(`Product "${product.title}" has been deleted`);
    };

    if (loading) return <p className="text-center text-gray-500">Loading products...</p>;

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title">Products</h1>

            <div className="card">
                <div className="card-header flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                            <Package size={26} />
                        </div>
                        <p className="card-title">All Products</p>
                    </div>
                    <div className="relative w-full sm:w-auto">
                        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-10 rounded-lg border border-slate-300 pl-8 pr-4 text-sm focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                        />
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="relative min-h-[300px] max-h-[500px] w-full overflow-auto [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Product</th>
                                    <th className="table-head">Price</th>
                                    <th className="table-head">Stock</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {filteredProducts.map((product, index) => (
                                    <tr 
                                        key={product.id} 
                                        className={`table-row ${highlightedProductId === product.id ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}
                                        ref={highlightedProductId === product.id ? highlightedRowRef : null}
                                    >
                                        <td className="table-cell">{index + 1}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <img
                                                    src={product.thumbnail}
                                                    alt={product.title}
                                                    className="size-14 rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p>{product.title}</p>
                                                    <p className="font-normal text-slate-600 dark:text-slate-400">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell">${product.price}</td>
                                        <td className="table-cell">
                                            {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
                                        </td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button className="text-blue-500 dark:text-blue-600">
                                                    <PencilLine size={20} />
                                                </button>
                                                <button 
                                                    className="text-red-500"
                                                    onClick={() => handleDeleteProduct(product)}
                                                >
                                                    <Trash size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredProducts.length === 0 && (
                            <p className="text-center text-gray-500 mt-4">No products found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;