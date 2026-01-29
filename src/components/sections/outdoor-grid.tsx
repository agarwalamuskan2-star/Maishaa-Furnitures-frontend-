"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";

const products = [
    {
        id: 1,
        title: "Davyn Outdoor Lounge Chair",
        price: "₹69,900",
        emiStart: "6211",
        mainImage: "https://images.unsplash.com/photo-1567016432779-094069958ad5?q=80&w=800&auto=format&fit=crop",
        isReadyToShip: true,
    },
    {
        id: 2,
        title: "Davyn Outdoor Loveseat",
        price: "₹122,900",
        emiStart: "10919",
        mainImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
        isReadyToShip: true,
    },
    {
        id: 3,
        title: "Davyn Outdoor Nesting Tables",
        price: "₹54,900",
        emiStart: "4878",
        mainImage: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800&auto=format&fit=crop",
        isReadyToShip: true,
    },
    {
        id: 4,
        title: "Wren Outdoor Lounge Chair",
        price: "₹41,760",
        discount: "10%OFF",
        originalPrice: "₹46,400",
        emiStart: "3711",
        mainImage: "/images/outdoor/wren-chair.png",
        isReadyToShip: true,
    },
    {
        id: 5,
        title: "Bali Teak Outdoor Sofa",
        price: "₹145,900",
        originalPrice: "₹182,375",
        discount: "20%OFF",
        emiStart: "15286",
        mainImage: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 6,
        title: "Santorini Outdoor Dining Set",
        price: "₹188,400",
        originalPrice: "₹209,333",
        discount: "10%OFF",
        emiStart: "19736",
        mainImage: "/images/outdoor/dining-cat.png",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 7,
        title: "Malibu Poolside Lounger",
        price: "₹45,910",
        emiStart: "4811",
        mainImage: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 8,
        title: "Capri Garden Armchair",
        price: "₹32,600",
        originalPrice: "₹46,571",
        discount: "30%OFF",
        emiStart: "3417",
        mainImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
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

export default function OutdoorGrid() {
    const [sortBy, setSortBy] = useState("popularity");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const currentSort = sortOptions.find(opt => opt.value === sortBy)?.name || "Sort By";

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-4 border-b border-gray-100 relative">
                <span className="text-sm font-medium text-gray-500 mb-4 sm:mb-0">16 Results</span>

                <div className="flex items-center gap-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                {products.concat(products).concat(products.slice(0, 4)).map((product, index) => (
                    <ProductCardDetailed key={`${product.id}-${index}`} {...product} id={index + 1} />
                ))}
            </div>
        </div>
    );
}
