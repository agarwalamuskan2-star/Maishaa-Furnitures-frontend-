"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface FilterSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, isOpen, onToggle, children }) => (
    <div className="border-b border-gray-100 py-4 sm:py-6">
        <button
            onClick={onToggle}
            className="flex w-full items-center justify-between text-left"
        >
            <span className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-widest">{title}</span>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {isOpen && <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">{children}</div>}
    </div>
);

interface FurnitureSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FurnitureSidebar({ isOpen, onClose }: FurnitureSidebarProps) {
    const [openSections, setOpenSections] = useState<string[]>(["size", "shapes", "discount"]);

    const toggleSection = (section: string) => {
        setOpenSections((prev) =>
            prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
        );
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

                {/* Filter Sections */}
                <FilterSection
                    title="Choose Size"
                    isOpen={openSections.includes("size")}
                    onToggle={() => toggleSection("size")}
                >
                    <div className="space-y-3 sm:space-y-4">
                        {["King (21)", "Queen (21)"].map((item) => (
                            <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black" />
                                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-black transition-colors">
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>
                </FilterSection>

                <FilterSection
                    title="Shapes"
                    isOpen={openSections.includes("shapes")}
                    onToggle={() => toggleSection("shapes")}
                >
                    <div className="space-y-3 sm:space-y-4">
                        {["Rectangle (7)", "Round (3)", "Set of 2 (1)", "Oval (1)"].map((item) => (
                            <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black" />
                                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-black transition-colors">
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>
                </FilterSection>

                <FilterSection
                    title="Discount"
                    isOpen={openSections.includes("discount")}
                    onToggle={() => toggleSection("discount")}
                >
                    <div className="space-y-3 sm:space-y-4">
                        {["10% and above", "20% and above", "30% and above", "40% and above"].map((item) => (
                            <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black" />
                                <span className="text-xs sm:text-sm text-gray-600 group-hover:text-black transition-colors">
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>
                </FilterSection>
            </aside>

            {/* Overlay Backdrop for Mobile */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
            )}
        </>
    );
}
