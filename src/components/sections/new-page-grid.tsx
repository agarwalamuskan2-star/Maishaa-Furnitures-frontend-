"use client";

import React from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";

const products = [
    {
        id: 1,
        title: "Miller Cane Three Seater Sofa",
        price: "₹216,000",
        mainImage: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 2,
        title: "Morgan Three Seater Sofa- Copeland Bark",
        price: "₹208,000",
        mainImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 3,
        title: "Moris Lounge Chair",
        price: "₹45,000",
        mainImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 4,
        title: "Jake Modular Sectional Sofa",
        price: "₹352,800",
        originalPrice: "₹392,000",
        discount: "10% OFF",
        emiStart: "36987",
        mainImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 5,
        title: "Arcana Rattan Chair",
        price: "₹28,000",
        originalPrice: "₹40,000",
        discount: "30% OFF",
        emiStart: "2936",
        mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 6,
        title: "Zenora Three-Seater Sofa",
        price: "₹156,000",
        originalPrice: "₹195,000",
        discount: "20% OFF",
        emiStart: "16355",
        mainImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
        isReadyToShip: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 7,
        title: "Eloise Three Seater Sofa",
        price: "₹187,400",
        emiStart: "19647",
        mainImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 8,
        title: "Marcus Chesterfield 3 Seater Sofa",
        price: "₹224,000",
        originalPrice: "₹280,000",
        discount: "20% OFF",
        emiStart: "23484",
        mainImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 9,
        title: "Ahava Chiseled Console",
        price: "₹89,600",
        originalPrice: "₹112,000",
        discount: "20% OFF",
        emiStart: "9394",
        mainImage: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
];

const NewPageGrid = () => {
    const [isSortOpen, setIsSortOpen] = React.useState(false);
    const [selectedSort, setSelectedSort] = React.useState("Featured");

    const sortOptions = [
        "Price: Low to High",
        "Price: High to Low",
        "Featured",
        "Newest First",
        "Relevance"
    ];

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-4 border-b border-gray-100 relative">
                <span className="text-sm font-medium text-gray-500 mb-4 sm:mb-0">228 Results</span>

                <div className="flex items-center gap-4">
                    {/* Filter Toggle (Mobile) */}
                    <button className="lg:hidden flex items-center gap-2 text-sm font-medium text-gray-800">
                        <SlidersHorizontal size={16} /> Filters
                    </button>

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <div
                            className="flex items-center gap-2 cursor-pointer group"
                            onClick={() => setIsSortOpen(!isSortOpen)}
                        >
                            <span className="text-sm text-gray-500">Sort:</span>
                            <span className="text-sm font-medium text-gray-900 flex items-center gap-1">
                                {selectedSort} <ChevronDown size={14} className={`transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`} />
                            </span>
                        </div>

                        {/* Dropdown Menu */}
                        {isSortOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded-md py-2 z-30">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between ${selectedSort === option ? "text-amber-900 font-medium bg-amber-50" : "text-gray-600"
                                            }`}
                                        onClick={() => {
                                            setSelectedSort(option);
                                            setIsSortOpen(false);
                                        }}
                                    >
                                        {option}
                                        {selectedSort === option && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-900"></span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {products.map((product) => (
                    <ProductCardDetailed key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default NewPageGrid;
