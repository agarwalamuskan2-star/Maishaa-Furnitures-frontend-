"use client";

import React from "react";
import { X } from "lucide-react";

interface BestSellersSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function BestSellersSidebar({ isOpen = false, onClose }: BestSellersSidebarProps) {
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
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-serif italic">Filter by</h3>
                    <p className="text-sm text-gray-500">84 Best Sellers</p>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Category</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {[
                            { name: "Living Room", count: 32 },
                            { name: "Bedroom", count: 18 },
                            { name: "Dining Room", count: 14 },
                            { name: "Decor", count: 12 },
                            { name: "Lighting", count: 8 },
                        ].map((cat) => (
                            <label key={cat.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className="text-[13px] text-gray-700 group-hover:text-black transition-colors">
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
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full shadow-sm"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full shadow-sm"></div>
                            </div>
                        </div>
                        <button className="text-xs font-bold text-gray-900 underline uppercase tracking-wider">Clear</button>
                    </div>
                </div>

                {/* Availability Filter */}
                <div className="mb-8 border-t border-gray-100 pt-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Availability</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {["In Stock", "Made to Order"].map((status) => (
                            <label key={status} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded focus:ring-1 focus:ring-black accent-black"
                                />
                                <span className="text-[13px] text-gray-700 group-hover:text-black transition-colors">
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
