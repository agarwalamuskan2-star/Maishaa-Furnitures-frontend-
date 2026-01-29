"use client";

import React from "react";
import { X } from "lucide-react";

interface DecorSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function DecorSidebar({ isOpen = false, onClose }: DecorSidebarProps) {
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
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Browse by</h3>
                    <p className="text-sm text-gray-500">209 Results</p>
                </div>

                {/* Product Type Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900">Product Type</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        {[
                            { name: "Table Lamps", count: 48 },
                            { name: "Floor Lamps", count: 22 },
                            { name: "Decor", count: 21 },
                            { name: "Pendant Lights", count: 17 },
                            { name: "Pot", count: 16 },
                            { name: "Lighting", count: 6 },
                            { name: "Vases", count: 6 },
                            { name: "Cushion", count: 5 },
                            { name: "Mirrors", count: 4 },
                        ].map((type) => (
                            <label key={type.name} className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 border-2 border-gray-300 rounded focus:ring-2 focus:ring-black"
                                />
                                <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
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
                            <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black">
                                <option>Min</option>
                                <option>₹ 0</option>
                                <option>₹ 5,000</option>
                                <option>₹ 10,000</option>
                                <option>₹ 20,000</option>
                            </select>
                            <span className="text-gray-500 text-sm">to</span>
                            <select className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black">
                                <option>₹ 200000</option>
                                <option>₹ 50,000</option>
                                <option>₹ 100,000</option>
                                <option>₹ 150,000</option>
                            </select>
                        </div>
                        <button className="text-sm text-blue-600 hover:underline">Clear</button>
                    </div>
                </div>

                {/* Size Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900">Size</h4>
                        <span className="text-gray-400">−</span>
                    </button>

                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                className="w-4 h-4 border-2 border-gray-300 rounded focus:ring-2 focus:ring-black"
                            />
                            <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                                L <span className="text-gray-400">(1)</span>
                            </span>
                        </label>
                    </div>
                </div>

                {/* Discount Filter */}
                <div className="mb-8">
                    <button className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-sm font-bold text-gray-900">Discount</h4>
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
                                    className="w-4 h-4 border-2 border-gray-300 rounded focus:ring-2 focus:ring-black"
                                />
                                <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
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
