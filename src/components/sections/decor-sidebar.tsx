"use client";

import React from "react";
import { X } from "lucide-react";

export interface DecorFilterState {
    productTypes: string[];
    priceRange: [number, number];
    sizes: string[];
    discounts: number[];
}

interface DecorSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
    filters: DecorFilterState;
    onFiltersChange: (filters: DecorFilterState) => void;
}

const productTypes = [
    { name: "Table Lamps", count: 48 },
    { name: "Floor Lamps", count: 22 },
    { name: "Decor", count: 21 },
    { name: "Pendant Lights", count: 17 },
    { name: "Pot", count: 16 },
    { name: "Lighting", count: 6 },
    { name: "Vases", count: 6 },
    { name: "Cushion", count: 5 },
    { name: "Mirrors", count: 4 },
];

const sizeOptions = ["L", "M", "S"];

const discountOptions = [10, 20, 30, 40];

export default function DecorSidebar({ isOpen = false, onClose, filters, onFiltersChange }: DecorSidebarProps) {
    const handleProductTypeChange = (typeName: string) => {
        const newTypes = filters.productTypes.includes(typeName)
            ? filters.productTypes.filter(t => t !== typeName)
            : [...filters.productTypes, typeName];
        onFiltersChange({ ...filters, productTypes: newTypes });
    };

    const handleSizeChange = (size: string) => {
        const newSizes = filters.sizes.includes(size)
            ? filters.sizes.filter(s => s !== size)
            : [...filters.sizes, size];
        onFiltersChange({ ...filters, sizes: newSizes });
    };

    const handleDiscountChange = (discount: number) => {
        const newDiscounts = filters.discounts.includes(discount)
            ? filters.discounts.filter(d => d !== discount)
            : [...filters.discounts, discount];
        onFiltersChange({ ...filters, discounts: newDiscounts });
    };

    const handlePriceChange = (min: number, max: number) => {
        console.log('Price change triggered:', min, max);
        onFiltersChange({ ...filters, priceRange: [min, max] });
    };

    const clearAllFilters = () => {
        onFiltersChange({
            productTypes: [],
            priceRange: [0, 200000],
            sizes: [],
            discounts: [],
        });
    };

    const hasActiveFilters = filters.productTypes.length > 0 || filters.sizes.length > 0 || filters.discounts.length > 0;

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed lg:sticky top-0 left-0 h-screen
                    w-72 lg:w-64 xl:w-72
                    bg-white z-50 lg:z-0
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    overflow-y-auto
                    border-r border-gray-100
                    p-6
                `}
            >
                {/* Mobile Close Button */}
                <button
                    onClick={onClose}
                    className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Browse By Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Browse by</h3>
                        {hasActiveFilters && (
                            <button
                                onClick={clearAllFilters}
                                className="text-xs text-gray-500 hover:text-black underline"
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                    <p className="text-sm text-gray-500">209 Results</p>
                </div>

                {/* Product Type Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900">Product Type</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {productTypes.map((type) => (
                            <label key={type.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.productTypes.includes(type.name)}
                                    onChange={() => handleProductTypeChange(type.name)}
                                    className="w-4 h-4 border-2 border-gray-300 rounded focus:ring-2 focus:ring-black accent-black"
                                />
                                <span className={`text-sm ${filters.productTypes.includes(type.name) ? 'font-bold text-black' : 'text-gray-700 group-hover:text-black'} transition-colors`}>
                                    {type.name} <span className="text-gray-400">({type.count})</span>
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900">Price</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-4">
                        {/* Min/Max Price Inputs */}
                        <div className="flex items-center gap-3">
                            <select
                                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
                                value={filters.priceRange[0]}
                                onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
                            >
                                <option value={0}>Min</option>
                                <option value={5000}>₹ 5,000</option>
                                <option value={10000}>₹ 10,000</option>
                                <option value={20000}>₹ 20,000</option>
                                <option value={50000}>₹ 50,000</option>
                            </select>
                            <span className="text-gray-500 text-sm">to</span>
                            <select
                                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black"
                                value={filters.priceRange[1]}
                                onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
                            >
                                <option value={50000}>₹ 50,000</option>
                                <option value={100000}>₹ 100,000</option>
                                <option value={150000}>₹ 150,000</option>
                                <option value={200000}>₹ 200,000</option>
                            </select>
                        </div>
                        <button
                            onClick={clearAllFilters}
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* Size Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900">Size</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {sizeOptions.map((size) => (
                            <label key={size} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.sizes.includes(size)}
                                    onChange={() => handleSizeChange(size)}
                                    className="w-4 h-4 border-2 border-gray-300 rounded focus:ring-2 focus:ring-black accent-black"
                                />
                                <span className={`text-sm ${filters.sizes.includes(size) ? 'font-bold text-black' : 'text-gray-700 group-hover:text-black'} transition-colors`}>
                                    {size}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Discount Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900">Discount</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {discountOptions.map((discount) => (
                            <label key={discount} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.discounts.includes(discount)}
                                    onChange={() => handleDiscountChange(discount)}
                                    className="w-4 h-4 border-2 border-gray-300 rounded focus:ring-2 focus:ring-black accent-black"
                                />
                                <span className={`text-sm ${filters.discounts.includes(discount) ? 'font-bold text-black' : 'text-gray-700 group-hover:text-black'} transition-colors`}>
                                    {discount}% and above
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}
