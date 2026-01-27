"use client";

import React, { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";

const products = [
    {
        id: 1,
        title: "Masse Rattan Display Unit",
        price: "₹99,920",
        originalPrice: "₹124,900",
        discount: "20%OFF",
        emiStart: "10476",
        mainImage: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 2,
        title: "Nawka Rattan Daybed",
        price: "₹88,400",
        emiStart: "9268",
        mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 3,
        title: "Alonzo Accent Chair - Charlotte 500",
        price: "₹80,910",
        originalPrice: "₹89,900",
        discount: "10%OFF",
        emiStart: "8483",
        mainImage: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 4,
        title: "Guilio Swivel Lounge Chair - Charlotte 500",
        price: "₹102,600",
        originalPrice: "₹114,000",
        discount: "10%OFF",
        emiStart: "10757",
        mainImage: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 5,
        title: "Sinag Upholstered Easy Chair- Golden Teak-Zanafi Mimosa",
        price: "₹77,920",
        originalPrice: "₹97,400",
        discount: "20%OFF",
        emiStart: "8169",
        mainImage: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 6,
        title: "Vivo Slatted Shoe Console",
        price: "₹99,920",
        originalPrice: "₹124,900",
        discount: "20%OFF",
        emiStart: "10476",
        mainImage: "https://images.unsplash.com/photo-1595428774223-ef52624120ec?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
];

const sortOptions = [
    { name: "Price: Low to High", value: "price-asc" },
    { name: "Price: High to Low", value: "price-desc" },
    { name: "Newest First", value: "newest" },
    { name: "Popularity", value: "popularity" },
];

interface FurnitureGridProps {
    onFilterClick?: () => void;
}

export default function FurnitureGrid({ onFilterClick }: FurnitureGridProps) {
    const [sortBy, setSortBy] = useState("popularity");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const currentSort = sortOptions.find(opt => opt.value === sortBy)?.name || "Sort By";

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-4 border-b border-gray-100 relative">
                <span className="text-sm font-medium text-gray-500 mb-4 sm:mb-0">760 Results</span>

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
                {products.map((product) => (
                    <ProductCardDetailed key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
