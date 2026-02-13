"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";
import { DecorFilterState } from "./decor-sidebar";

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
    size: string;
    mainImage: string;
    badges?: { text: string; color: "black" }[];
}

const products: ProductData[] = [
    {
        id: 1,
        title: "Artisan Pendant Light",
        price: "₹24,900",
        emiStart: "2608",
        priceValue: 24900,
        productType: "Pendant Lights",
        discountValue: 0,
        size: "M",
        mainImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" }],
    },
    {
        id: 2,
        title: "Ceramic Vase Collection",
        price: "₹8,500",
        originalPrice: "₹12,000",
        discount: "29%OFF",
        emiStart: "891",
        priceValue: 8500,
        productType: "Vases",
        discountValue: 29,
        size: "M",
        mainImage: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Modern Wall Mirror",
        price: "₹18,900",
        emiStart: "1980",
        priceValue: 18900,
        productType: "Mirrors",
        discountValue: 0,
        size: "L",
        mainImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" }],
    },
    {
        id: 4,
        title: "Decorative Sculpture",
        price: "₹15,600",
        originalPrice: "₹19,500",
        discount: "20%OFF",
        emiStart: "1634",
        priceValue: 15600,
        productType: "Decor",
        discountValue: 20,
        size: "M",
        mainImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Table Lamp Set",
        price: "₹12,400",
        emiStart: "1299",
        priceValue: 12400,
        productType: "Table Lamps",
        discountValue: 0,
        size: "S",
        mainImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
        badges: [{ text: "BEST SELLER", color: "black" }],
    },
    {
        id: 6,
        title: "Brass Candle Holders",
        price: "₹6,800",
        emiStart: "713",
        priceValue: 6800,
        productType: "Decor",
        discount: "15%OFF",
        discountValue: 15,
        size: "S",
        mainImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 7,
        title: "Floor Lamp",
        price: "₹18,500",
        emiStart: "1540",
        priceValue: 18500,
        productType: "Floor Lamps",
        discount: "10%OFF",
        discountValue: 10,
        size: "L",
        mainImage: "https://images.unsplash.com/photo-1507473888900-52e1adad8dbf?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 8,
        title: "Decorative Pot",
        price: "₹4,500",
        emiStart: "375",
        priceValue: 4500,
        productType: "Pot",
        discountValue: 0,
        size: "M",
        mainImage: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 9,
        title: "Cushion Set",
        price: "₹3,200",
        emiStart: "267",
        priceValue: 3200,
        productType: "Cushion",
        discount: "20%OFF",
        discountValue: 20,
        size: "S",
        mainImage: "https://images.unsplash.com/photo-1616628198176-23a6f2860985?q=80&w=800&auto=format&fit=crop",
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
    filters: DecorFilterState;
}

export default function DecorGrid({ onFilterClick, filters }: DecorGridProps) {
    const [sortBy, setSortBy] = useState("popularity");
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
        console.log('Price filter applied:', filters.priceRange);
        result = result.filter(p => {
            const inRange = p.priceValue >= filters.priceRange[0] && p.priceValue <= filters.priceRange[1];
            console.log(`Product ${p.title}: priceValue=${p.priceValue}, inRange=${inRange}`);
            return inRange;
        });

        // Filter by size
        if (filters.sizes.length > 0) {
            result = result.filter(p => filters.sizes.includes(p.size));
        }

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
                // Popularity - keep original order
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
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCardDetailed key={product.id} {...product} id={product.id} />
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
