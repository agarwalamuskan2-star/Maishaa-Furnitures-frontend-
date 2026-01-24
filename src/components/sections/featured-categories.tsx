"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedCategories = () => {
    const categories = [
        {
            id: 1,
            title: "Seating",
            image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000&auto=format&fit=crop",
            alt: "Modern wooden chair",
        },
        {
            id: 2,
            title: "Tables",
            image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1000&auto=format&fit=crop",
            alt: "Elegant dining table",
        },
        {
            id: 3,
            title: "Sofas",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop",
            alt: "Luxury sofa",
        },
    ];

    return (
        <section className="w-full bg-transparent pt-2 md:pt-4 pb-8 md:pb-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 outline-none border-none">
            <div className="max-w-[1920px] mx-auto outline-none border-none">

                {/* Navigation / Header Row */}
                <div className="flex justify-between items-center mb-8">
                    {/* Left/Right arrows can be added here if this was a slider, for now just the grid */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 outline-none border-none">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-md group cursor-pointer outline-none border-none"
                            style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
                        >
                            <Image
                                src={category.image}
                                alt={category.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 outline-none border-none"
                                style={{ outline: 'none', border: 'none' }}
                            />

                            {/* Overlay / Content (if needed) - Keeping it clean like reference */}
                            <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-300" />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows (Outside) - Mimicking the side arrows in the reference image */}
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
