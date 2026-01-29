"use client";

import React, { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";

const products = [
    {
        id: 1,
        title: "Rigo Solid Wood Coffee Table",
        price: "₹99,900",
        originalPrice: "₹111,000",
        discount: "10%OFF",
        emiStart: "10474",
        mainImage: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
        readyToShip: true,
    },
    {
        id: 2,
        title: "Ghera End Table",
        price: "₹29,250",
        originalPrice: "₹32,500",
        discount: "10%OFF",
        emiStart: "3067",
        mainImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "NEW", color: "black" as const }],
        readyToShip: true,
    },
    {
        id: 3,
        title: "Antara End Table",
        price: "₹32,850",
        originalPrice: "₹36,500",
        discount: "10%OFF",
        emiStart: "3444",
        mainImage: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "NEW", color: "black" as const }],
        readyToShip: true,
    },
    {
        id: 4,
        title: "Shila End Table",
        price: "₹39,960",
        originalPrice: "₹44,400",
        discount: "10%OFF",
        emiStart: "4190",
        mainImage: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "NEW", color: "black" as const }],
        readyToShip: true,
    },
    {
        id: 5,
        title: "Thalika Coffee Table & End Table - Set of 2",
        price: "₹143,920",
        originalPrice: "₹179,900",
        discount: "20%OFF",
        emiStart: "15088",
        mainImage: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 6,
        title: "Rigo Solid Wood Coffee Table - Large",
        price: "₹115,000",
        emiStart: "12056",
        mainImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
        readyToShip: true,
    },
];

const sortOptions = [
    { name: "Featured", value: "featured" },
    { name: "Price: Low to High", value: "price-asc" },
    { name: "Price: High to Low", value: "price-desc" },
    { name: "Newest First", value: "newest" },
];

interface ReadyToShipGridProps {
    onFilterClick?: () => void;
}

export default function ReadyToShipGrid({ onFilterClick }: ReadyToShipGridProps) {
    const [sortBy, setSortBy] = useState("featured");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const currentSort = sortOptions.find(opt => opt.value === sortBy)?.name || "Sort By";

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 relative">
                <span className="text-sm font-medium text-gray-900 mb-4 sm:mb-0">199 Results</span>

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
                            className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors"
                        >
                            <span className="text-gray-400 font-normal">Sort:</span> {currentSort}
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
                    <div key={`${product.id}-${index}`} className="group cursor-pointer">
                        <ProductCardDetailed {...product} id={index + 1} />
                        <div className="mt-4 flex flex-col items-start">
                            <span className="inline-block bg-gray-100 text-[10px] font-bold text-gray-600 px-2 py-1 rounded mb-2 uppercase tracking-wider">Ready to Ship</span>
                            <h3 className="text-sm font-medium text-gray-900 mb-1 group-hover:underline">{product.title}</h3>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-bold text-black">{product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                                )}
                                {product.discount && (
                                    <span className="text-xs font-bold text-orange-500">{product.discount}</span>
                                )}
                            </div>
                            <p className="text-[10px] text-gray-500 mb-1">Price inclusive of all taxes | Pan India Shipping</p>
                            <p className="text-[11px] font-medium text-orange-500">EMI starts from ₹ {product.emiStart}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
