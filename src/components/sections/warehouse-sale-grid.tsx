"use client";

import React, { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";

const products = [
    {
        id: 1,
        title: "Easton Table Lamp",
        price: "₹26,040",
        originalPrice: "₹43,400",
        discount: "40%OFF",
        emiStart: "2730",
        mainImage: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 2,
        title: "Kipas Wall Lamp",
        price: "₹25,740",
        originalPrice: "₹42,900",
        discount: "40%OFF",
        emiStart: "2699",
        mainImage: "https://images.unsplash.com/photo-1543198126-a41c226ce97a?q=80&w=800&auto=format&fit=crop",
        soldOut: true,
    },
    {
        id: 3,
        title: "Panjang Pendant Light",
        price: "₹12,540",
        originalPrice: "₹20,900",
        discount: "40%OFF",
        emiStart: "1315",
        mainImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 4,
        title: "Aira Candle Stand (Set of 2)",
        price: "₹5,880",
        originalPrice: "₹8,400",
        discount: "30%OFF",
        emiStart: "617",
        mainImage: "https://images.unsplash.com/photo-1602164181262-32e9d6d7abc0?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 5,
        title: "Iva Metal Vase (Set of 2)",
        price: "₹7,980",
        originalPrice: "₹11,400",
        discount: "30%OFF",
        emiStart: "837",
        mainImage: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 6,
        title: "Ersa Metal Vase (Set of 2)",
        price: "₹6,930",
        originalPrice: "₹9,900",
        discount: "30%OFF",
        emiStart: "727",
        mainImage: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
];

const sortOptions = [
    { name: "Featured", value: "featured" },
    { name: "Price: Low to High", value: "price-asc" },
    { name: "Price: High to Low", value: "price-desc" },
    { name: "Newest First", value: "newest" },
];

interface WarehouseSaleGridProps {
    onFilterClick?: () => void;
}

export default function WarehouseSaleGrid({ onFilterClick }: WarehouseSaleGridProps) {
    const [sortBy, setSortBy] = useState("featured");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const currentSort = sortOptions.find(opt => opt.value === sortBy)?.name || "Sort By";

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 relative">
                <span className="text-sm font-medium text-gray-900 mb-4 sm:mb-0">148 Results</span>

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
                {products.concat(products).map((product, index) => (
                    <div key={`${product.id}-${index}`} className="group cursor-pointer">
                        <div className="relative aspect-square overflow-hidden mb-4 bg-gray-50">
                            {/* Custom Status Badge directly on image for match with reference */}
                            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                                {product.readyToShip && (
                                    <span className="bg-gray-100 text-[10px] font-bold text-gray-500 px-3 py-1 uppercase tracking-wider">READY TO SHIP</span>
                                )}
                                {product.soldOut && (
                                    <span className="bg-gray-100/90 text-[10px] font-bold text-gray-500 px-3 py-1 uppercase tracking-wider">SOLD OUT</span>
                                )}
                            </div>

                            <ProductCardDetailed {...product} id={index + 1} badges={[]} />
                        </div>

                        <div className="flex flex-col items-start px-1">
                            {product.readyToShip && !product.soldOut && (
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Ready to Ship</span>
                            )}
                            {product.soldOut && (
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Sold Out</span>
                            )}

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
