"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Minus, Plus, X } from "lucide-react";

interface NewPageSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const NewPageSidebar: React.FC<NewPageSidebarProps> = ({ isOpen, onClose }) => {
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
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Browse by</h3>
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
                            {[
                                { name: "Accent | Lounge Chairs", count: 21 },
                                { name: "Dining Chairs", count: 11 },
                                { name: "Center Tables", count: 10 },
                                { name: "Corner Sofas", count: 10 },
                                { name: "Pendant Lights", count: 9 },
                                { name: "Side Table", count: 8 },
                                { name: "3-Seater Sofas", count: 8 },
                                { name: "Floor Lamps", count: 8 },
                            ].map((item, idx) => (
                                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                                    <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
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
                        <button className="text-xs text-gray-400 font-medium underline hover:text-black ml-2">Clear</button>
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
                                <div className="flex-1 bg-white border border-gray-200 px-3 py-2 rounded-sm flex items-center gap-1">
                                    <span className="text-xs text-gray-400">Min</span>
                                </div>
                                <span className="text-gray-400 text-xs">to</span>
                                <div className="flex-1 bg-white border border-gray-200 px-3 py-2 rounded-sm flex items-center gap-1">
                                    <span className="text-xs text-gray-900 font-medium">₹ 400000</span>
                                </div>
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
                            {[
                                { name: "L", count: 2 },
                                { name: "M", count: 2 },
                                { name: "8 feet", count: 2 },
                                { name: "7 feet", count: 2 },
                                { name: "6 feet", count: 1 },
                            ].map((item, idx) => (
                                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                                    <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
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
                            {[
                                "10% and above",
                                "20% and above",
                                "30% and above",
                            ].map((label, idx) => (
                                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                                    <span className="text-sm text-gray-600 group-hover:text-black transition-colors">
                                        {label}
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
