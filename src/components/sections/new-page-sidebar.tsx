"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Minus, Plus, X } from "lucide-react";

export interface NewPageFilterState {
    productTypes: string[];
    priceRange: [number, number];
    sizes: string[];
    discounts: number[];
}

interface NewPageSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    filters: NewPageFilterState;
    onFiltersChange: (filters: NewPageFilterState) => void;
}

const productTypes = [
    { name: "Accent | Lounge Chairs", count: 21 },
    { name: "Dining Chairs", count: 11 },
    { name: "Center Tables", count: 10 },
    { name: "Corner Sofas", count: 10 },
    { name: "Pendant Lights", count: 9 },
    { name: "Side Table", count: 8 },
    { name: "3-Seater Sofas", count: 8 },
    { name: "Floor Lamps", count: 8 },
];

const sizeOptions = [
    { name: "L", count: 2 },
    { name: "M", count: 2 },
    { name: "8 feet", count: 2 },
    { name: "7 feet", count: 2 },
    { name: "6 feet", count: 1 },
];

const discountOptions = [10, 20, 30];

const NewPageSidebar: React.FC<NewPageSidebarProps> = ({ isOpen, onClose, filters, onFiltersChange }) => {
    // State for collapsible sections
    const [openSections, setOpenSections] = useState({
        productType: true,
        price: true,
        size: true,
        discount: true,
    });

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

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
        onFiltersChange({ ...filters, priceRange: [min, max] });
    };

    const clearAllFilters = () => {
        onFiltersChange({
            productTypes: [],
            priceRange: [0, 400000],
            sizes: [],
            discounts: [],
        });
    };

    const hasActiveFilters = filters.productTypes.length > 0 || filters.sizes.length > 0 || filters.discounts.length > 0;

    const sidebarClasses = isOpen
        ? "fixed inset-0 z-50 bg-white w-full h-full overflow-y-auto p-6 md:p-8" // Mobile Open
        : "hidden lg:block lg:sticky lg:top-0 h-screen w-full lg:w-[280px] flex-shrink-0 pr-0 lg:pr-8 mb-8 lg:mb-0 overflow-y-auto"; // Desktop / Mobile Closed

    return (
        <>
            {/* Sidebar Container */}
            <aside className={sidebarClasses}>

                {/* Mobile Close Button Header */}
                <div className="flex lg:hidden items-center justify-between mb-6 border-b border-gray-100 pb-4">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-widest">Filters</h2>
                    <button onClick={onClose} className="p-2 -mr-2 text-gray-500 hover:text-black">
                        <X size={24} />
                    </button>
                </div>

                {/* Browse By Header (Desktop) */}
                <div className="hidden lg:block mb-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Browse by</h3>
                        {hasActiveFilters && (
                            <button
                                onClick={clearAllFilters}
                                className="text-xs text-gray-500 hover:text-black underline"
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                </div>

                {/* 1. Product Type Filter */}
                <div className="border-b border-gray-100 py-4">
                    <button
                        onClick={() => toggleSection("productType")}
                        className="w-full flex items-center justify-between group"
                    >
                        <span className="text-sm font-semibold text-gray-800">Product Type</span>
                        {openSections.productType ? <Minus size={14} /> : <Plus size={14} />}
                    </button>

                    {openSections.productType && (
                        <div className="mt-4 space-y-2">
                            {productTypes.map((item) => (
                                <label key={item.name} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.productTypes.includes(item.name)}
                                        onChange={() => handleProductTypeChange(item.name)}
                                        className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                                    />
                                    <span className={`text-sm ${filters.productTypes.includes(item.name) ? 'font-bold text-black' : 'text-gray-600 group-hover:text-black'} transition-colors`}>
                                        {item.name} <span className="text-gray-400">({item.count})</span>
                                    </span>
                                </label>
                            ))}
                            <button className="text-xs text-gray-400 font-medium hover:text-black mt-2">More</button>
                        </div>
                    )}
                </div>

                {/* 2. Price Filter */}
                <div className="border-b border-gray-100 py-4">
                    <div className="flex items-center justify-between mb-4">
                        <button
                            onClick={() => toggleSection("price")}
                            className="flex-1 flex items-center justify-between text-left"
                        >
                            <span className="text-sm font-semibold text-gray-800">Price</span>
                            {openSections.price ? <Minus size={14} /> : <Plus size={14} />}
                        </button>
                        <button
                            onClick={clearAllFilters}
                            className="text-xs text-gray-400 font-medium underline hover:text-black ml-2"
                        >
                            Clear
                        </button>
                    </div>

                    {openSections.price && (
                        <div className="mt-2 space-y-4">
                            {/* Simple Range Visual */}
                            <div className="w-full h-1 bg-gray-200 rounded-full relative">
                                <div className="absolute left-0 right-0 h-full bg-black rounded-full"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-black rounded-full"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-black rounded-full"></div>
                            </div>

                            {/* Inputs */}
                            <div className="flex items-center gap-2">
                                <select
                                    className="flex-1 bg-white border border-gray-200 px-3 py-2 rounded-sm flex items-center gap-1"
                                    value={filters.priceRange[0]}
                                    onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
                                >
                                    <option value={0}>Min</option>
                                    <option value={10000}>₹ 10,000</option>
                                    <option value={25000}>₹ 25,000</option>
                                    <option value={50000}>₹ 50,000</option>
                                </select>
                                <span className="text-gray-400 text-xs">to</span>
                                <select
                                    className="flex-1 bg-white border border-gray-200 px-3 py-2 rounded-sm flex items-center gap-1"
                                    value={filters.priceRange[1]}
                                    onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
                                >
                                    <option value={100000}>₹ 100,000</option>
                                    <option value={200000}>₹ 200,000</option>
                                    <option value={300000}>₹ 300,000</option>
                                    <option value={400000}>₹ 400,000</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* 3. Size Filter */}
                <div className="border-b border-gray-100 py-4">
                    <button
                        onClick={() => toggleSection("size")}
                        className="w-full flex items-center justify-between group"
                    >
                        <span className="text-sm font-semibold text-gray-800">Size</span>
                        {openSections.size ? <Minus size={14} /> : <Plus size={14} />}
                    </button>

                    {openSections.size && (
                        <div className="mt-4 space-y-2">
                            {sizeOptions.map((item) => (
                                <label key={item.name} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.sizes.includes(item.name)}
                                        onChange={() => handleSizeChange(item.name)}
                                        className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                                    />
                                    <span className={`text-sm ${filters.sizes.includes(item.name) ? 'font-bold text-black' : 'text-gray-600 group-hover:text-black'} transition-colors`}>
                                        {item.name} <span className="text-gray-400">({item.count})</span>
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* 4. Discount Filter */}
                <div className="border-b border-gray-100 py-4 border-none">
                    <button
                        onClick={() => toggleSection("discount")}
                        className="w-full flex items-center justify-between group"
                    >
                        <span className="text-sm font-semibold text-gray-800">Discount</span>
                        {openSections.discount ? <Minus size={14} /> : <Plus size={14} />}
                    </button>

                    {openSections.discount && (
                        <div className="mt-4 space-y-2">
                            {discountOptions.map((label) => (
                                <label key={label} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.discounts.includes(label)}
                                        onChange={() => handleDiscountChange(label)}
                                        className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                                    />
                                    <span className={`text-sm ${filters.discounts.includes(label) ? 'font-bold text-black' : 'text-gray-600 group-hover:text-black'} transition-colors`}>
                                        {label}% and above
                                    </span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile Bottom Action Bar */}
                {isOpen && (
                    <div className="lg:hidden mt-8 pt-4 border-t border-gray-100 sticky bottom-0 bg-white">
                        <button onClick={onClose} className="w-full bg-black text-white py-3 font-medium uppercase tracking-wider text-sm rounded-sm">
                            Apply Filters
                        </button>
                    </div>
                )}
            </aside>

            {/* Overlay Backdrop for Mobile */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
            )}
        </>
    );
};

export default NewPageSidebar;
