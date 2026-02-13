"use client";

import React from "react";
import { X } from "lucide-react";

export interface WarehouseSaleFilterState {
    productTypes: string[];
    priceRange: [number, number];
    sizes: string[];
    shapes: string[];
    discounts: number[];
}

interface WarehouseSaleSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
    filters: WarehouseSaleFilterState;
    onFiltersChange: (filters: WarehouseSaleFilterState) => void;
}

const productTypes = [
    { name: "Table Lamps", count: 28 },
    { name: "Side Table", count: 16 },
    { name: "Accent | Lounge Chairs", count: 14 },
    { name: "Decor", count: 11 },
    { name: "Center Tables", count: 11 },
    { name: "Tables", count: 7 },
    { name: "Pendant Lights", count: 6 },
    { name: "Dining Chairs", count: 5 },
    { name: "3-Seater Sofas", count: 4 },
    { name: "Floor Lamps", count: 4 },
];

const sizeOptions = [
    { name: "L", count: 1 },
    { name: "M", count: 1 },
];

const shapeOptions = [
    { name: "Round", count: 1 },
];

const discountOptions = [10, 20, 30, 40];

export default function WarehouseSaleSidebar({ isOpen = false, onClose, filters, onFiltersChange }: WarehouseSaleSidebarProps) {
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

    const handleShapeChange = (shape: string) => {
        const newShapes = filters.shapes.includes(shape)
            ? filters.shapes.filter(s => s !== shape)
            : [...filters.shapes, shape];
        onFiltersChange({ ...filters, shapes: newShapes });
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
            priceRange: [0, 300000],
            sizes: [],
            shapes: [],
            discounts: [],
        });
    };

    const hasActiveFilters = filters.productTypes.length > 0 || filters.sizes.length > 0 || filters.shapes.length > 0 || filters.discounts.length > 0;

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
                        <h3 className="text-lg font-bold text-gray-900 mb-1 font-sans italic">Browse by</h3>
                        {hasActiveFilters && (
                            <button
                                onClick={clearAllFilters}
                                className="text-xs text-gray-500 hover:text-black underline"
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                    <p className="text-sm text-gray-500">148 Results</p>
                </div>

                {/* Product Type Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Product Type</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {productTypes.map((type) => (
                            <label key={type.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.productTypes.includes(type.name)}
                                    onChange={() => handleProductTypeChange(type.name)}
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className={`text-[13px] ${filters.productTypes.includes(type.name) ? 'font-bold text-black' : 'text-gray-700 group-hover:text-black'} transition-colors`}>
                                    {type.name} <span className="text-gray-400">({type.count})</span>
                                </span>
                            </label>
                        ))}
                        <button
                            onClick={clearAllFilters}
                            className="text-[13px] font-bold text-gray-900 mt-2"
                        >
                            More
                        </button>
                    </div>
                </div>

                {/* Price Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Price</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <select
                                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-black"
                                value={filters.priceRange[0]}
                                onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange[1])}
                            >
                                <option value={0}>Min</option>
                                <option value={5000}>₹ 5,000</option>
                                <option value={10000}>₹ 10,000</option>
                                <option value={25000}>₹ 25,000</option>
                            </select>
                            <span className="text-gray-500 text-sm">to</span>
                            <select
                                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-black"
                                value={filters.priceRange[1]}
                                onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
                            >
                                <option value={50000}>₹ 50,000</option>
                                <option value={100000}>₹ 100,000</option>
                                <option value={200000}>₹ 200,000</option>
                                <option value={300000}>₹ 300,000</option>
                            </select>
                        </div>
                        <button
                            onClick={clearAllFilters}
                            className="text-xs font-bold text-gray-900 underline uppercase tracking-wider"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* Size Filter */}
                <div className="mb-8 border-t border-gray-100 pt-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Size</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {sizeOptions.map((size) => (
                            <label key={size.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.sizes.includes(size.name)}
                                    onChange={() => handleSizeChange(size.name)}
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className={`text-[13px] ${filters.sizes.includes(size.name) ? 'font-bold text-black' : 'text-gray-700 group-hover:text-black'} transition-colors`}>
                                    {size.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Shapes Filter */}
                <div className="mb-8 border-t border-gray-100 pt-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Shapes</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {shapeOptions.map((shape) => (
                            <label key={shape.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.shapes.includes(shape.name)}
                                    onChange={() => handleShapeChange(shape.name)}
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className={`text-[13px] ${filters.shapes.includes(shape.name) ? 'font-bold text-black' : 'text-gray-700 group-hover:text-black'} transition-colors`}>
                                    {shape.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Discount Filter */}
                <div className="mb-8 border-t border-gray-100 pt-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Discount</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {discountOptions.map((discount) => (
                            <label key={discount} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={filters.discounts.includes(discount)}
                                    onChange={() => handleDiscountChange(discount)}
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className={`text-[13px] ${filters.discounts.includes(discount) ? 'font-bold text-black' : 'text-gray-700 group-hover:text-black'} transition-colors`}>
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
