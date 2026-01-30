"use client";

import React, { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";

const products = [
    {
        id: 1,
        title: "Artisan Pendant Light",
        price: "₹24,900",
        emiStart: "2608",
        mainImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 2,
        title: "Ceramic Vase Collection",
        price: "₹8,500",
        originalPrice: "₹12,000",
        discount: "29%OFF",
        emiStart: "891",
        mainImage: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Modern Wall Mirror",
        price: "₹18,900",
        emiStart: "1980",
        mainImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 4,
        title: "Decorative Sculpture",
        price: "₹15,600",
        originalPrice: "₹19,500",
        discount: "20%OFF",
        emiStart: "1634",
        mainImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Table Lamp Set",
        price: "₹12,400",
        emiStart: "1299",
        mainImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 6,
        title: "Brass Candle Holders",
        price: "₹6,800",
        emiStart: "713",
        mainImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
    },
];

const sortOptions = [
    { name: "Price: Low to High", value: "price-asc" },
    { name: "Price: High to Low", value: "price-desc" },
    { name: "Newest First", value: "newest" },
    { name: "Popularity", value: "popularity" },
];

interface DecorGridProps {
    onFilterClick?: () => void;
}

export default function DecorGrid({ onFilterClick }: DecorGridProps) {
    const [sortBy, setSortBy] = useState("popularity");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const currentSort = sortOptions.find(opt => opt.value === sortBy)?.name || "Sort By";

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-4 border-b border-gray-100 relative">
                <span className="text-sm font-medium text-gray-500 mb-4 sm:mb-0">209 Results</span>

                <div className="flex items-center gap-4">
                    {/* Filter Toggle (Mobile) */}
                    <button
                        className="lg:hidden flex items-center gap-2 text-sm font-medium text-gray-800"
                        onClick={onFilterClick}
                    >
                        <SlidersHorizontal size={16} /> Filters
                    </button>
                    {/* Sort Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-black transition-colors"
                        >
                            <span className="text-gray-400">Sort By:</span> {currentSort}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {products.concat(products).concat(products.slice(0, 4)).map((product, index) => (
                    <ProductCardDetailed key={`${product.id}-${index}`} {...product} id={index + 1} />
                ))}
            </div>
        </div>
    );
}
