import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import  ProductImage from "@/assets/product-image1.jpg";
import  ProductImage1 from "@/assets/product-image2.jpg";
import  ProductImage2 from "@/assets/product-image3.jpg";
import  ProductImage3 from "@/assets/product-image4.jpg";
import  ProductImage4 from "@/assets/product-image5.jpg";
import  ProductImage5 from "@/assets/product-image6.jpg";
import  ProductImage6 from "@/assets/product-image7.png";
import  ProductImage7 from "@/assets/product-image8.png";
import  ProductImage8 from "@/assets/product-image9.png";
import  ProductImage9 from "@/assets/product-image10.png";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
            {
                label: "Reports",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "Customers",
                icon: Users,
                path: "/customers",
            },
            {
                label: "New customer",
                icon: UserPlus,
                path: "/new-customer",
            },
            {
                label: "Verified customers",
                icon: UserCheck,
                path: "/verified-customers",
            },
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Products",
                icon: Package,
                path: "/products",
            },
            {
                label: "New product",
                icon: PackagePlus,
                path: "/new-product",
            },
            {
                label: "Inventory",
                icon: ShoppingBag,
                path: "/inventory",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        image: ProfileImage,
        total: 1500,
    },
    {
        id: 2,
        name: "James Smith",
        email: "james.smith@email.com",
        image: ProfileImage,
        total: 2000,
    },
    {
        id: 3,
        name: "Sophia Brown",
        email: "sophia.brown@email.com",
        image: ProfileImage,
        total: 4000,
    },
    {
        id: 4,
        name: "Noah Wilson",
        email: "noah.wilson@email.com",
        image: ProfileImage,
        total: 3000,
    },
    {
        id: 5,
        name: "Emma Jones",
        email: "emma.jones@email.com",
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 6,
        name: "William Taylor",
        email: "william.taylor@email.com",
        image: ProfileImage,
        total: 4500,
    },
    {
        id: 7,
        name: "Isabella Johnson",
        email: "isabella.johnson@email.com",
        image: ProfileImage,
        total: 5300,
    },
];

export const topProducts = [
    {
        number: 1,
        name: "Brown Sweatshirt",
        image: ProductImage,
        description: "Cozy and stylish brown sweatshirt for all-day comfort.",
        price: 99.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 2,
        name: "Gray Blazer Jacket",
        image: ProductImage1,
        description: "Elegant gray blazer jacket for a polished look.",
        price: 799.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 3,
        name: "White Sweatshirt",
        image: ProductImage2,
        description: "Soft and versatile white sweatshirt for casual wear.",
        price: 1299.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 4,
        name: "Bread Toaster",
        image: ProductImage3,
        description: "Efficient bread toaster for perfectly crispy slices.",
        price: 199.99,
        status: "Out of Stock",
        rating: 4.4,
    },
    {
        number: 5,
        name: "Blender",
        image: ProductImage4,
        description: "Powerful blender for smoothies, soups, and more.",
        price: 59.99,
        status: "In Stock",
        rating: 4.3,
    },
    {
        number: 6,
        name: "Non-Stick Pan",
        image: ProductImage5,
        description: "Durable non-stick pan for easy cooking and cleaning.",
        price: 399.99,
        status: "In Stock",
        rating: 4.6,
    },
    {
        number: 7,
        name: "Black Thick Cover Book",
        image: ProductImage6,
        description: "Sturdy black thick cover book for notes and journaling.",
        price: 89.99,
        status: "In Stock",
        rating: 4.7,
    },
    {
        number: 8,
        name: "Blue Notebook",
        image: ProductImage7,
        description: "Classic blue notebook for writing and organizing thoughts.",
        price: 49.99,
        status: "In Stock",
        rating: 4.5,
    },
    {
        number: 9,
        name: "Spoon Set",
        image: ProductImage8,
        description: "Essential cooking utensils for stirring and serving.",
        price: 249.99,
        status: "In Stock",
        rating: 4.8,
    },
    {
        number: 10,
        name: "Whisk",
        image: ProductImage9,
        description: "Lightweight whisk for smooth batter and sauces.",
        price: 79.99,
        status: "Out of Stock",
        rating: 4.5,
    },
];