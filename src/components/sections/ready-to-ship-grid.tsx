"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";
import { ReadyToShipFilterState } from "./ready-to-ship-sidebar";

interface ProductData {
    id: number;
    title: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    emiStart: string;
    priceValue: number;
    productType: string;
    discountValue: number;
    isReadyToShip: boolean;
    mainImage: string;
    badges?: { text: string; color: "black" }[];
}

const products: ProductData[] = [
    {
        id: 1,
        title: "Rigo Solid Wood Coffee Table",
        price: "₹99,900",
        originalPrice: "₹111,000",
        discount: "10%OFF",
        emiStart: "10474",
        priceValue: 99900,
        productType: "Center Tables",
        discountValue: 10,
        isReadyToShip: true,
        mainImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" }],
    },
    {
        id: 2,
        title: "Ghera End Table",
        price: "₹29,250",
        originalPrice: "₹32,500",
        discount: "10%OFF",
        emiStart: "3067",
        priceValue: 29250,
        productType: "Side Table",
        discountValue: 10,
        isReadyToShip: true,
        mainImage: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "NEW", color: "black" }],
    },
    {
        id: 3,
        title: "Antara End Table",
        price: "₹32,850",
        originalPrice: "₹36,500",
        discount: "10%OFF",
        emiStart: "3444",
        priceValue: 32850,
        productType: "Side Table",
        discountValue: 10,
        isReadyToShip: true,
        mainImage: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "NEW", color: "black" }],
    },
    {
        id: 4,
        title: "Antarika End Table",
        price: "₹29,250",
        originalPrice: "₹32,500",
        discount: "10%OFF",
        emiStart: "3067",
        priceValue: 29250,
        productType: "Side Table",
        discountValue: 10,
        isReadyToShip: true,
        mainImage: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Shila End Table",
        price: "₹39,960",
        originalPrice: "₹44,400",
        discount: "10%OFF",
        emiStart: "4190",
        priceValue: 39960,
        productType: "Side Table",
        discountValue: 10,
        isReadyToShip: true,
        mainImage: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "Thalika Coffee Table & End Table - Set of 2",
        price: "₹143,920",
        originalPrice: "₹179,900",
        discount: "20%OFF",
        emiStart: "15088",
        priceValue: 143920,
        productType: "Center Tables",
        discountValue: 20,
        isReadyToShip: true,
        mainImage: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 7,
        title: "Table Lamp",
        price: "₹12,500",
        originalPrice: "₹15,000",
        discount: "17%OFF",
        emiStart: "1042",
        priceValue: 12500,
        productType: "Table Lamps",
        discountValue: 17,
        isReadyToShip: true,
        mainImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 8,
        title: "Floor Lamp",
        price: "₹22,000",
        emiStart: "1833",
        priceValue: 22000,
        productType: "Floor Lamps",
        discountValue: 0,
        isReadyToShip: true,
        mainImage: "https://images.unsplash.com/photo-1507473888900-52e1adad8dbf?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 9,
        title: "Pendant Light",
        price: "₹18,500",
        originalPrice: "₹22,000",
        discount: "16%OFF",
        emiStart: "1542",
        priceValue: 18500,
        productType: "Pendant Lights",
        discountValue: 16,
        isReadyToShip: true,
        mainImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
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
    filters: ReadyToShipFilterState;
}

export default function ReadyToShipGrid({ onFilterClick, filters }: ReadyToShipGridProps) {
    const [sortBy, setSortBy] = useState("featured");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const currentSort = sortOptions.find(opt => opt.value === sortBy)?.name || "Sort By";

    // Apply filters and sorting
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by product type
        if (filters.productTypes.length > 0) {
            result = result.filter(p => filters.productTypes.includes(p.productType));
        }

        // Filter by price range
        result = result.filter(p => p.priceValue >= filters.priceRange[0] && p.priceValue <= filters.priceRange[1]);

        // Filter by discount
        if (filters.discounts.length > 0) {
            const minDiscount = Math.min(...filters.discounts);
            result = result.filter(p => p.discountValue >= minDiscount);
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
                // Featured - keep original order
                break;
        }

        return result;
    }, [filters, sortBy]);

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-4 border-b border-gray-100 relative">
                <span className="text-sm font-medium text-gray-500 mb-4 sm:mb-0">
                    {filteredProducts.length} Results
                </span>

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
                            <span className="text-gray-400">Sort:</span> {currentSort}
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

            {/* Product Grid - 3 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
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
