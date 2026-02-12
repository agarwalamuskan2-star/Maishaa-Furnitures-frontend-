"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface ProductFilterSidebarProps {
    availableTypes: { label: string; count: number; value: string }[];
    selectedTypes: string[];
    setSelectedTypes: (types: string[]) => void;

    priceRange: number[];
    setPriceRange: (range: number[]) => void;
    minPrice?: number;
    maxPrice?: number;

    availableSizes?: { label: string; count: number; value: string }[];
    selectedSizes?: string[];
    setSelectedSizes?: (sizes: string[]) => void;

    selectedDiscounts: number[];
    setSelectedDiscounts: (discounts: number[]) => void;
}

const ProductFilterSidebar: React.FC<ProductFilterSidebarProps> = ({
    availableTypes,
    selectedTypes,
    setSelectedTypes,
    priceRange,
    setPriceRange,
    minPrice = 0,
    maxPrice = 300000,
    availableSizes = [],
    selectedSizes = [],
    setSelectedSizes,
    selectedDiscounts,
    setSelectedDiscounts,
}) => {
    const handleTypeChange = (typeValue: string) => {
        if (selectedTypes.includes(typeValue)) {
            setSelectedTypes(selectedTypes.filter((t) => t !== typeValue));
        } else {
            setSelectedTypes([...selectedTypes, typeValue]);
        }
    };

    const handleSizeChange = (sizeValue: string) => {
        if (setSelectedSizes) {
            if (selectedSizes.includes(sizeValue)) {
                setSelectedSizes(selectedSizes.filter((s) => s !== sizeValue));
            } else {
                setSelectedSizes([...selectedSizes, sizeValue]);
            }
        }
    };

    const handleDiscountChange = (discountValue: number) => {
        if (selectedDiscounts.includes(discountValue)) {
            setSelectedDiscounts(selectedDiscounts.filter(d => d !== discountValue));
        } else {
            setSelectedDiscounts([...selectedDiscounts, discountValue]);
        }
    }

    return (
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
            <div>
                <h3 className="text-xl font-serif text-gray-900 mb-8 border-b border-gray-100 pb-4">Browse by</h3>

                <div className="space-y-10">
                    {/* Product Type */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Product Type</span>
                            <span className="text-gray-400 text-lg">−</span>
                        </div>
                        <ul className="space-y-3">
                            {availableTypes.map((type) => (
                                <li
                                    key={type.value}
                                    className="flex items-center gap-3 cursor-pointer"
                                    onClick={() => handleTypeChange(type.value)}
                                >
                                    <div className={`w-4 h-4 border ${selectedTypes.includes(type.value) ? "border-black bg-black" : "border-gray-300"} rounded-sm flex items-center justify-center`}>
                                        {selectedTypes.includes(type.value) && <div className="w-2 h-2 bg-white"></div>}
                                    </div>
                                    <span className={`text-[14px] ${selectedTypes.includes(type.value) ? "font-bold text-black" : "font-medium text-gray-500 hover:text-black"}`}>
                                        {type.label} ({type.count})
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Price</span>
                            <button
                                onClick={() => setPriceRange([minPrice, maxPrice])}
                                className="text-[10px] text-gray-400 font-bold hover:text-black hover:underline transition-all"
                            >
                                Clear
                            </button>
                        </div>
                        <div className="px-1 pt-2">
                            <div className="mb-6">
                                <Slider
                                    defaultValue={[minPrice, maxPrice]}
                                    value={priceRange}
                                    min={minPrice}
                                    max={maxPrice}
                                    step={100}
                                    onValueChange={setPriceRange}
                                    className="my-4"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-500">
                                    <span>₹ {priceRange[0]}</span>
                                </div>
                                <span className="text-gray-400 uppercase text-[10px] font-bold">to</span>
                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-900">
                                    <span>₹ {priceRange[1]}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Size - Only show if available sizes exist */}
                    {availableSizes.length > 0 && setSelectedSizes && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Size</span>
                                <span className="text-gray-400 text-lg">−</span>
                            </div>
                            <ul className="space-y-3">
                                {availableSizes.map((size) => (
                                    <li
                                        key={size.value}
                                        className="flex items-center gap-3 cursor-pointer group"
                                        onClick={() => handleSizeChange(size.value)}
                                    >
                                        <div className={`w-4 h-4 border ${selectedSizes.includes(size.value) ? "border-black bg-black" : "border-gray-300"} rounded-sm flex items-center justify-center`}>
                                            {selectedSizes.includes(size.value) && <div className="w-2 h-2 bg-white"></div>}
                                        </div>
                                        <span className={`text-[14px] ${selectedSizes.includes(size.value) ? "font-bold text-black" : "font-light text-gray-500 group-hover:text-black"}`}>
                                            {size.label} ({size.count})
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Discount */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Discount</span>
                            <span className="text-gray-400 text-lg">−</span>
                        </div>
                        <ul className="space-y-3">
                            {[10, 20, 30, 40].map((disc) => (
                                <li
                                    key={disc}
                                    className="flex items-center gap-3 cursor-pointer group"
                                    onClick={() => handleDiscountChange(disc)}
                                >
                                    <div className={`w-4 h-4 border ${selectedDiscounts.includes(disc) ? "border-black bg-black" : "border-gray-300"} rounded-sm flex items-center justify-center`}>
                                        {selectedDiscounts.includes(disc) && <div className="w-2 h-2 bg-white"></div>}
                                    </div>
                                    <span className={`text-[14px] ${selectedDiscounts.includes(disc) ? "font-bold text-black" : "font-light text-gray-500 group-hover:text-black"}`}>
                                        {disc}% and above
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ProductFilterSidebar;
