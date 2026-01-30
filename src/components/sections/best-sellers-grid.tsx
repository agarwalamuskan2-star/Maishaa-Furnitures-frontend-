"use client";

import React, { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";

const products = [
    {
        id: 1,
        title: "Iconic Velvet Sofa",
        price: "₹1,24,900",
        originalPrice: "₹1,56,125",
        discount: "20%OFF",
        emiStart: "10500",
        mainImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 2,
        title: "Solid Oak Dining Table",
        price: "₹84,900",
        emiStart: "7100",
        mainImage: "https://images.unsplash.com/photo-1577145745727-427f3f1e721d?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 3,
        title: "Artisan Lounge Chair",
        price: "₹34,600",
        originalPrice: "₹43,250",
        discount: "20%OFF",
        emiStart: "2900",
        mainImage: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 4,
        title: "Minimalist Bed Frame",
        price: "₹72,400",
        emiStart: "6050",
        mainImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 5,
        title: "Glass Coffee Table",
        price: "₹18,900",
        originalPrice: "₹21,000",
        discount: "10%OFF",
        emiStart: "1580",
        mainImage: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 6,
        title: "Woven Pendant Light",
        price: "₹12,600",
        emiStart: "1050",
        mainImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
];

const sortOptions = [
    { name: "Popularity", value: "popularity" },
    { name: "Price: Low to High", value: "price-asc" },
    { name: "Price: High to Low", value: "price-desc" },
    { name: "Newest First", value: "newest" },
];

interface BestSellersGridProps {
    onFilterClick?: () => void;
}

export default function BestSellersGrid({ onFilterClick }: BestSellersGridProps) {
    const [sortBy, setSortBy] = useState("popularity");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const currentSort = sortOptions.find(opt => opt.value === sortBy)?.name || "Sort By";

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 relative">
                <span className="text-sm font-medium text-gray-900 mb-4 sm:mb-0 uppercase tracking-widest">84 Items Found</span>

                <div className="flex items-center gap-6">
                    {/* Filter Toggle (Mobile) */}
                    <button
                        className="lg:hidden flex items-center gap-2 text-sm font-bold text-gray-900"
                        onClick={onFilterClick}
                    >
                        <SlidersHorizontal size={18} /> Filters
                    </button>

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors uppercase tracking-widest"
                        >
                            <span className="text-gray-400 font-normal">Sort By:</span> {currentSort}
                            <ChevronDown size={14} className={`transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isSortOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl z-30 py-2">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${sortBy === option.value ? 'font-bold text-black' : 'text-gray-600'
                                            }`}
                                        onClick={() => {
                                            setSortBy(option.value);
                                            setIsSortOpen(false);
                                        }}
                                    >
                                        {option.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {products.concat(products).concat(products.slice(0, 3)).map((product, index) => (
                    <ProductCardDetailed key={`${product.id}-${index}`} {...product} id={index + 1} />
                ))}
            </div>
        </div>
    );
}
