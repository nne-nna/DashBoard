import { PackagePlus } from "lucide-react";

const NewProductPage = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title">New Product</h1>
            
            <div className="card">
                <div className="card-header">
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                            <PackagePlus size={26} />
                        </div>
                        <p className="card-title">Add New Product</p>
                    </div>
                </div>
                <div className="card-body">
                    <form className="flex flex-col gap-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex flex-col gap-y-2">
                                <label className="text-sm font-medium">Product Name</label>
                                <input
                                    type="text"
                                    className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
                                    placeholder="Enter product name"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label className="text-sm font-medium">Price</label>
                                <input
                                    type="number"
                                    className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
                                    placeholder="Enter price"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Description</label>
                            <textarea
                                className="h-32 rounded-lg border border-slate-300 p-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
                                placeholder="Enter product description"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium">Product Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="h-10 rounded-lg border border-slate-300 px-4 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewProductPage;