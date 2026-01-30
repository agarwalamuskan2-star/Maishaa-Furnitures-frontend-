"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * FEATURED CATEGORIES SECTION
 * 
 * Clones the category cards with text labels ("New Arrivals", etc.)
 * and "SHOP NOW" links as seen in the reference image.
 */

const FeaturedCategories = () => {
    const categories = [
        {
            id: 1,
            title: "New Arrivals",
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000&auto=format&fit=crop",
            alt: "New Arrivals category",
        },
        {
            id: 2,
            title: "Ready to Ship",
            image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1000&auto=format&fit=crop",
            alt: "Ready to Ship category",
        },
        {
            id: 3,
            title: "Trending Now",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop",
            alt: "Trending Now category",
        },
    ];

    return (
        <section className="w-full bg-transparent pt-2 md:pt-4 pb-8 md:pb-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 outline-none border-none">
            <div className="max-w-[1920px] mx-auto outline-none border-none">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 outline-none border-none">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col space-y-4 group cursor-pointer outline-none border-none"
                        >
                            {/* Image Container */}
                            <div
                                className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm outline-none border-none"
                            >
                                <Image
                                    src={category.image}
                                    alt={category.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 outline-none border-none"
                                />
                                {/* Subtle Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-1 text-left px-1">
                                <h3 className="text-xl md:text-2xl font-normal text-[#1a1a1a] font-body tracking-tight">
                                    {category.title}
                                </h3>
                                <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-widest flex items-center gap-1 group-hover:text-black transition-colors">
                                    SHOP NOW <span className="text-lg">+</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows (Optional visual flair) */}
                <div className="hidden 2xl:block absolute top-[180vh] left-12 transform -translate-y-1/2 p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
                    <ChevronLeft size={40} className="text-gray-400" />
                </div>
                <div className="hidden 2xl:block absolute top-[180vh] right-12 transform -translate-y-1/2 p-2 cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
                    <ChevronRight size={40} className="text-gray-400" />
                </div>

            </div>
        </section>
    );
};

export default FeaturedCategories;
