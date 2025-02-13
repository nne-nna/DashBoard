import { PackagePlus, UploadCloud } from "lucide-react";

const NewProductPage = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">New Product</h1>
            
            <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
                <div className="mb-6">
                    <div className="flex items-center gap-x-3">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500">
                            <PackagePlus size={26} />
                        </div>
                        <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">Add New Product</p>
                    </div>
                </div>
                <div>
                    <form className="flex flex-col gap-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex flex-col gap-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Product Name</label>
                                <input
                                    type="text"
                                    className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                                    placeholder="Enter product name"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Price</label>
                                <input
                                    type="number"
                                    className="h-10 rounded-lg border border-slate-300 px-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                                    placeholder="Enter price"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Description</label>
                            <textarea
                                className="h-32 rounded-lg border border-slate-300 p-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                                placeholder="Enter product description"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">Product Image</label>
                            <div className="flex items-center justify-center w-full h-32 rounded-lg border border-dashed border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-900 cursor-pointer hover:border-blue-500 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:bg-blue-900/20">
                                <input type="file" accept="image/*" className="hidden" id="product-image" />
                                <label htmlFor="product-image" className="flex flex-col items-center gap-y-2 cursor-pointer text-slate-500 dark:text-slate-400">
                                    <UploadCloud size={24} />
                                    <span className="text-sm">Click to upload or drag and drop</span>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
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
