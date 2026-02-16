"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import ProductCardDetailed from "@/components/ui/product-card-detailed";
import { WarehouseSaleFilterState } from "./warehouse-sale-sidebar";

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
    size?: string;
    shape?: string;
    readyToShip?: boolean;
    soldOut?: boolean;
    mainImage: string;
}

const products: ProductData[] = [
    {
        id: 1,
        title: "Easton Table Lamp",
        price: "₹26,040",
        originalPrice: "₹43,400",
        discount: "40%OFF",
        discountValue: 40,
        emiStart: "2730",
        priceValue: 26040,
        productType: "Table Lamps",
        size: "M",
        mainImage: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 2,
        title: "Kipas Wall Lamp",
        price: "₹25,740",
        originalPrice: "₹42,900",
        discount: "40%OFF",
        discountValue: 40,
        emiStart: "2699",
        priceValue: 25740,
        productType: "Table Lamps",
        size: "M",
        mainImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
        soldOut: true,
    },
    {
        id: 3,
        title: "Panjang Pendant Light",
        price: "₹12,540",
        originalPrice: "₹20,900",
        discount: "40%OFF",
        discountValue: 40,
        emiStart: "1315",
        priceValue: 12540,
        productType: "Pendant Lights",
        size: "L",
        mainImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 4,
        title: "Aira Candle Stand (Set of 2)",
        price: "₹5,880",
        originalPrice: "₹8,400",
        discount: "30%OFF",
        discountValue: 30,
        emiStart: "617",
        priceValue: 5880,
        productType: "Decor",
        size: "S",
        mainImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 5,
        title: "Iva Metal Vase (Set of 2)",
        price: "₹7,980",
        originalPrice: "₹11,400",
        discount: "30%OFF",
        discountValue: 30,
        emiStart: "837",
        priceValue: 7980,
        productType: "Decor",
        size: "M",
        mainImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 6,
        title: "Ersa Metal Vase (Set of 2)",
        price: "₹6,930",
        originalPrice: "₹9,900",
        discount: "30%OFF",
        discountValue: 30,
        emiStart: "727",
        priceValue: 6930,
        productType: "Decor",
        size: "M",
        shape: "Round",
        mainImage: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 7,
        title: "Side Table",
        price: "₹15,000",
        originalPrice: "₹20,000",
        discount: "25%OFF",
        discountValue: 25,
        emiStart: "1250",
        priceValue: 15000,
        productType: "Side Table",
        size: "M",
        mainImage: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=800&auto=format&fit=crop",
        readyToShip: true,
    },
    {
        id: 8,
        title: "Floor Lamp",
        price: "₹18,000",
        originalPrice: "₹24,000",
        discount: "25%OFF",
        discountValue: 25,
        emiStart: "1500",
        priceValue: 18000,
        productType: "Floor Lamps",
        size: "L",
        mainImage: "https://images.unsplash.com/photo-1507473888900-52e1adad8dbf?q=80&w=800&auto=format&fit=crop",
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
    filters: WarehouseSaleFilterState;
}

export default function WarehouseSaleGrid({ onFilterClick, filters }: WarehouseSaleGridProps) {
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

        // Filter by size
        if (filters.sizes.length > 0) {
            result = result.filter(p => p.size && filters.sizes.includes(p.size));
        }

        // Filter by shape
        if (filters.shapes.length > 0) {
            result = result.filter(p => p.shape && filters.shapes.includes(p.shape));
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
                // Featured - keep original order
                break;
        }

        return result;
    }, [filters, sortBy]);

    return (
        <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 relative">
                <span className="text-sm font-medium text-gray-900 mb-4 sm:mb-0 uppercase tracking-widest">
                    {filteredProducts.length} Results
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
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div key={`${product.id}-${index}`} className="group cursor-pointer">
                            <div className="relative aspect-square overflow-hidden mb-4 bg-gray-50">
                                {/* Custom Status Badge directly on image */}
                                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                                    {product.readyToShip && !product.soldOut && (
                                        <span className="bg-gray-100 text-[10px] font-bold text-gray-500 px-3 py-1 uppercase tracking-wider">READY TO SHIP</span>
                                    )}
                                    {product.soldOut && (
                                        <span className="bg-gray-100/90 text-[10px] font-bold text-gray-500 px-3 py-1 uppercase tracking-wider">SOLD OUT</span>
                                    )}
                                </div>

                                <ProductCardDetailed {...product} id={product.id} badges={[]} />
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
