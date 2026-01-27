"use client";

import React, { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";

const products = [
    {
        id: 1,
        title: "Bali Teak Outdoor Sofa",
        price: "₹145,900",
        originalPrice: "₹182,375",
        discount: "20%OFF",
        emiStart: "15286",
        mainImage: "https://images.unsplash.com/photo-1590059346654-e9102ca633b4?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 2,
        title: "Santorini Outdoor Dining Set",
        price: "₹188,400",
        originalPrice: "₹209,333",
        discount: "10%OFF",
        emiStart: "19736",
        mainImage: "https://images.unsplash.com/photo-1596700422223-7467614d9b3d?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 3,
        title: "Malibu Poolside Lounger",
        price: "₹45,910",
        emiStart: "4811",
        mainImage: "https://images.unsplash.com/photo-1544161515-4ae6ce6ca8b8?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 4,
        title: "Capri Garden Armchair",
        price: "₹32,600",
        originalPrice: "₹46,571",
        discount: "30%OFF",
        emiStart: "3417",
        mainImage: "https://images.unsplash.com/photo-1621506821199-a99a74461933?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 5,
        title: "Ibiza Hanging Swing Chair",
        price: "₹77,920",
        originalPrice: "₹97,400",
        discount: "20%OFF",
        emiStart: "8169",
        mainImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 6,
        title: "Java Coffee Table",
        price: "₹18,920",
        emiStart: "1983",
        mainImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
];

const sortOptions = [
    { name: "Price: Low to High", value: "price-asc" },
    { name: "Price: High to Low", value: "price-desc" },
    { name: "Newest First", value: "newest" },
    { name: "Popularity", value: "popularity" },
];

interface OutdoorGridProps {
    onFilterClick?: () => void;
}

export default function OutdoorGrid({ onFilterClick }: OutdoorGridProps) {
    const [sortBy, setSortBy] = useState("popularity");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const currentSort = sortOptions.find(opt => opt.value === sortBy)?.name || "Sort By";

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-4 border-b border-gray-100 relative">
                <span className="text-sm font-medium text-gray-500 mb-4 sm:mb-0">142 Results</span>

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
