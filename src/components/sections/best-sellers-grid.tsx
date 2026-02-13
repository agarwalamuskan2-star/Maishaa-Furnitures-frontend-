"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";
import { FilterState } from "./best-sellers-sidebar";

const products = [
    {
        id: 1,
        title: "Iconic Velvet Sofa",
        price: "₹1,24,900",
        originalPrice: "₹1,56,125",
        discount: "20%OFF",
        discountValue: 20,
        emiStart: "10500",
        priceValue: 124900,
        category: "Living Room",
        availability: "In Stock",
        mainImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 2,
        title: "Solid Oak Dining Table",
        price: "₹84,900",
        emiStart: "7100",
        priceValue: 84900,
        category: "Dining Room",
        availability: "Made to Order",
        mainImage: "https://images.unsplash.com/photo-1577145745727-427f3f1e721d?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 3,
        title: "Artisan Lounge Chair",
        price: "₹34,600",
        originalPrice: "₹43,250",
        discount: "20%OFF",
        discountValue: 20,
        emiStart: "2900",
        priceValue: 34600,
        category: "Living Room",
        availability: "In Stock",
        mainImage: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 4,
        title: "Minimalist Bed Frame",
        price: "₹72,400",
        emiStart: "6050",
        priceValue: 72400,
        category: "Bedroom",
        availability: "Made to Order",
        mainImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 5,
        title: "Glass Coffee Table",
        price: "₹18,900",
        originalPrice: "₹21,000",
        discount: "10%OFF",
        discountValue: 10,
        emiStart: "1580",
        priceValue: 18900,
        category: "Living Room",
        availability: "In Stock",
        mainImage: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 6,
        title: "Woven Pendant Light",
        price: "₹12,600",
        emiStart: "1050",
        priceValue: 12600,
        category: "Lighting",
        availability: "In Stock",
        mainImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 7,
        title: "Modern Floor Lamp",
        price: "₹22,400",
        originalPrice: "₹28,000",
        discount: "20%OFF",
        discountValue: 20,
        emiStart: "1870",
        priceValue: 22400,
        category: "Lighting",
        availability: "In Stock",
        mainImage: "https://images.unsplash.com/photo-1507473888900-52e1adad8dbf?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 8,
        title: "Velvet Cushion Set",
        price: "₹4,500",
        originalPrice: "₹6,000",
        discount: "25%OFF",
        discountValue: 25,
        emiStart: "375",
        priceValue: 4500,
        category: "Decor",
        availability: "In Stock",
        mainImage: "https://images.unsplash.com/photo-1616628198176-23a6f2860985?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 9,
        title: "Oak Nightstand",
        price: "₹14,900",
        emiStart: "1240",
        priceValue: 14900,
        category: "Bedroom",
        availability: "In Stock",
        mainImage: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800&auto=format&fit=crop",
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
    filters: FilterState;
}

export default function BestSellersGrid({ onFilterClick, filters }: BestSellersGridProps) {
    const [sortBy, setSortBy] = useState("popularity");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const currentSort = sortOptions.find(opt => opt.value === sortBy)?.name || "Sort By";

    // Apply filters and sorting
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by category
        if (filters.categories.length > 0) {
            result = result.filter(p => filters.categories.includes(p.category));
        }

        // Filter by price range
        result = result.filter(p => p.priceValue >= filters.priceRange[0] && p.priceValue <= filters.priceRange[1]);

        // Filter by availability
        if (filters.availability.length > 0) {
            result = result.filter(p => filters.availability.includes(p.availability));
        }

        // Sort
        switch (sortBy) {
            case "price-asc":
                result.sort((a, b) => a.priceValue - b.priceValue);
                break;
            case "price-desc":
                result.sort((a, b) => b.priceValue - a.priceValue);
                break;
            case "newest":
                result.sort((a, b) => b.id - a.id);
                break;
            default:
                // Popularity - keep original order
                break;
        }

        return result;
    }, [filters, sortBy]);

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 relative">
                <span className="text-sm font-medium text-gray-900 mb-4 sm:mb-0 uppercase tracking-widest">
                    {filteredProducts.length} Items Found
                </span>

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
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <ProductCardDetailed key={`${product.id}-${index}`} {...product} id={index + 1} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <p className="text-gray-500 text-lg">No products match your filters.</p>
                        <p className="text-gray-400 text-sm mt-2">Try adjusting your filters to see more results.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
