"use client";

import React from "react";
import { X } from "lucide-react";

interface WarehouseSaleSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function WarehouseSaleSidebar({ isOpen = false, onClose }: WarehouseSaleSidebarProps) {
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
                    fixed lg:sticky top-0 left-0 h-screen lg:h-auto
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
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-serif italic">Browse by</h3>
                    <p className="text-sm text-gray-500">148 Results</p>
                </div>

                {/* Product Type Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Product Type</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {[
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
                        ].map((type) => (
                            <label key={type.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className="text-[13px] text-gray-700 group-hover:text-black transition-colors">
                                    {type.name} <span className="text-gray-400">({type.count})</span>
                                </span>
                            </label>
                        ))}
                        <button className="text-[13px] font-bold text-gray-900 mt-2">More</button>
                    </div>
                </div>

                {/* Price Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Price</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-4">
                        <div className="px-2">
                            <div className="h-[2px] bg-gray-200 relative">
                                <div className="absolute left-0 right-0 h-full bg-black"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full shadow-sm"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full shadow-sm"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative flex-1">
                                <select className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-black bg-white">
                                    <option>Min</option>
                                    <option>₹ 0</option>
                                </select>
                            </div>
                            <span className="text-gray-500 text-sm">to</span>
                            <div className="relative flex-1">
                                <select className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-black bg-white">
                                    <option>₹ 300000</option>
                                </select>
                            </div>
                        </div>
                        <button className="text-xs font-bold text-gray-900 underline uppercase tracking-wider">Clear</button>
                    </div>
                </div>

                {/* Size Filter */}
                <div className="mb-8 border-t border-gray-100 pt-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Size</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {[{ name: "L", count: 1 }, { name: "M", count: 1 }].map((size) => (
                            <label key={size.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className="text-[13px] text-gray-700 group-hover:text-black transition-colors">
                                    {size.name} <span className="text-gray-400">({size.count})</span>
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
                        {[{ name: "Round", count: 1 }].map((shape) => (
                            <label key={shape.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className="text-[13px] text-gray-700 group-hover:text-black transition-colors">
                                    {shape.name} <span className="text-gray-400">({shape.count})</span>
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
                        {[
                            { name: "10% and above" },
                            { name: "20% and above" },
                            { name: "30% and above" },
                            { name: "40% and above" },
                        ].map((discount) => (
                            <label key={discount.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className="text-[13px] text-gray-700 group-hover:text-black transition-colors">
                                    {discount.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}
