"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";
import { NewPageFilterState } from "./new-page-sidebar";

interface ProductData {
    id: number;
    title: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    emiStart?: string;
    priceValue: number;
    productType: string;
    discountValue: number;
    size?: string;
    isMadeToOrder?: boolean;
    isReadyToShip?: boolean;
    mainImage: string;
    badges?: { text: string; color: "black" }[];
}

const products: ProductData[] = [
    {
        id: 1,
        title: "Miller Cane Three Seater Sofa",
        price: "₹216,000",
        priceValue: 216000,
        productType: "3-Seater Sofas",
        discountValue: 0,
        mainImage: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" }],
    },
    {
        id: 2,
        title: "Morgan Three Seater Sofa- Copeland Bark",
        price: "₹208,000",
        priceValue: 208000,
        productType: "3-Seater Sofas",
        discountValue: 0,
        mainImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 3,
        title: "Moris Lounge Chair",
        price: "₹45,000",
        priceValue: 45000,
        productType: "Accent | Lounge Chairs",
        discountValue: 0,
        mainImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 4,
        title: "Jake Modular Sectional Sofa",
        price: "₹352,800",
        originalPrice: "₹392,000",
        discount: "10% OFF",
        discountValue: 10,
        emiStart: "36987",
        priceValue: 352800,
        productType: "Corner Sofas",
        size: "8 feet",
        mainImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" }],
    },
    {
        id: 5,
        title: "Arcana Rattan Chair",
        price: "₹28,000",
        originalPrice: "₹40,000",
        discount: "30% OFF",
        discountValue: 30,
        emiStart: "2936",
        priceValue: 28000,
        productType: "Accent | Lounge Chairs",
        mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" }],
    },
    {
        id: 6,
        title: "Zenora Three-Seater Sofa",
        price: "₹156,000",
        originalPrice: "₹195,000",
        discount: "20% OFF",
        discountValue: 20,
        emiStart: "16355",
        priceValue: 156000,
        productType: "3-Seater Sofas",
        size: "7 feet",
        mainImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
        isReadyToShip: true,
        badges: [{ text: "BEST SELLER", color: "black" }],
    },
    {
        id: 7,
        title: "Eloise Three Seater Sofa",
        price: "₹187,400",
        emiStart: "19647",
        priceValue: 187400,
        productType: "3-Seater Sofas",
        discountValue: 0,
        mainImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
    },
    {
        id: 8,
        title: "Marcus Chesterfield 3 Seater Sofa",
        price: "₹224,000",
        originalPrice: "₹280,000",
        discount: "20% OFF",
        discountValue: 20,
        emiStart: "23484",
        priceValue: 224000,
        productType: "3-Seater Sofas",
        size: "8 feet",
        mainImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" }],
    },
    {
        id: 9,
        title: "Ahava Chiseled Console",
        price: "₹89,600",
        originalPrice: "₹112,000",
        discount: "20% OFF",
        discountValue: 20,
        emiStart: "9394",
        priceValue: 89600,
        productType: "Center Tables",
        mainImage: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" }],
    },
];

interface NewPageGridProps {
    onFilterClick?: () => void;
    filters: NewPageFilterState;
}

const NewPageGrid: React.FC<NewPageGridProps> = ({ onFilterClick, filters }) => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Featured");

    const sortOptions = [
        { name: "Price: Low to High", value: "price-asc" },
        { name: "Price: High to Low", value: "price-desc" },
        { name: "Featured", value: "featured" },
        { name: "Newest First", value: "newest" },
        { name: "Relevance", value: "relevance" },
    ];

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

        // Filter by discount
        if (filters.discounts.length > 0) {
            const minDiscount = Math.min(...filters.discounts);
            result = result.filter(p => p.discountValue >= minDiscount);
        }

        // Sort
        switch (selectedSort) {
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
                // Featured/Relevance - keep original order
                break;
        }

        return result;
    }, [filters, selectedSort]);

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
                        <div
                            className="flex items-center gap-2 cursor-pointer group"
                            onClick={() => setIsSortOpen(!isSortOpen)}
                        >
                            <span className="text-sm text-gray-500">Sort:</span>
                            <span className="text-sm font-medium text-gray-900 flex items-center gap-1">
                                {selectedSort} <ChevronDown size={14} className={`transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`} />
                            </span>
                        </div>

                        {/* Dropdown Menu */}
                        {isSortOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded-md py-2 z-30">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between ${selectedSort === option.name ? "text-amber-900 font-medium bg-amber-50" : "text-gray-600"
                                            }`}
                                        onClick={() => {
                                            setSelectedSort(option.name);
                                            setIsSortOpen(false);
                                        }}
                                    >
                                        {option.name}
                                        {selectedSort === option.name && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-900"></span>
                                        )}
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
                        <ProductCardDetailed key={product.id} {...product} />
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
};

export default NewPageGrid;
