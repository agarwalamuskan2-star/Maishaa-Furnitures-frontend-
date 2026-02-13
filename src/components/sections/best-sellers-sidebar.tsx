"use client";

import React from "react";
import { X } from "lucide-react";

export interface FilterState {
    categories: string[];
    priceRange: [number, number];
    availability: string[];
}

interface BestSellersSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
    filters: FilterState;
    onFiltersChange: (filters: FilterState) => void;
}

const categories = [
    { name: "Living Room", count: 32 },
    { name: "Bedroom", count: 18 },
    { name: "Dining Room", count: 14 },
    { name: "Decor", count: 12 },
    { name: "Lighting", count: 8 },
];

const availabilityOptions = ["In Stock", "Made to Order"];

export default function BestSellersSidebar({ isOpen = false, onClose, filters, onFiltersChange }: BestSellersSidebarProps) {
    const handleCategoryChange = (categoryName: string) => {
        const newCategories = filters.categories.includes(categoryName)
            ? filters.categories.filter(c => c !== categoryName)
            : [...filters.categories, categoryName];
        onFiltersChange({ ...filters, categories: newCategories });
    };

    const handleAvailabilityChange = (option: string) => {
        const newAvailability = filters.availability.includes(option)
            ? filters.availability.filter(a => a !== option)
            : [...filters.availability, option];
        onFiltersChange({ ...filters, availability: newAvailability });
    };

    const clearAllFilters = () => {
        onFiltersChange({
            categories: [],
            priceRange: [0, 300000],
            availability: [],
        });
    };

    const hasActiveFilters = filters.categories.length > 0 || filters.availability.length > 0;

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
                        <h3 className="text-lg font-bold text-gray-900 mb-1 font-sans italic">Filter by</h3>
                        {hasActiveFilters && (
                            <button
                                onClick={clearAllFilters}
                                className="text-xs text-gray-500 hover:text-black underline"
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                    <p className="text-sm text-gray-500">84 Best Sellers</p>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Category</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {categories.map((cat) => (
                            <label key={cat.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.categories.includes(cat.name)}
                                    onChange={() => handleCategoryChange(cat.name)}
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className={`text-[13px] ${filters.categories.includes(cat.name) ? 'font-bold text-black' : 'text-gray-700 group-hover:text-black'} transition-colors`}>
                                    {cat.name} <span className="text-gray-400">({cat.count})</span>
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Filter */}
                <div className="mb-8 border-t border-gray-100 pt-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Price</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-4">
                        <div className="px-2">
                            <div className="h-[2px] bg-gray-200 relative">
                                <div className="absolute left-0 right-0 h-full bg-black"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full shadow-sm cursor-pointer"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full shadow-sm cursor-pointer"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-600">₹{filters.priceRange[0].toLocaleString()}</span>
                            <span className="text-gray-400">to</span>
                            <span className="text-gray-600">₹{filters.priceRange[1].toLocaleString()}</span>
                        </div>
                        <button
                            onClick={clearAllFilters}
                            className="text-xs font-bold text-gray-900 underline uppercase tracking-wider"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* Availability Filter */}
                <div className="mb-8 border-t border-gray-100 pt-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Availability</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {availabilityOptions.map((status) => (
                            <label key={status} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.availability.includes(status)}
                                    onChange={() => handleAvailabilityChange(status)}
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className={`text-[13px] ${filters.availability.includes(status) ? 'font-bold text-black' : 'text-gray-700 group-hover:text-black'} transition-colors`}>
                                    {status}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}
