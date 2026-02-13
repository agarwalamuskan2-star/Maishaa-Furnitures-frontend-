"use client";

import React from "react";
import Image from "next/image";

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
        <section className="w-full bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col group cursor-pointer relative overflow-hidden"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden">
                                <Image
                                    src={category.image}
                                    alt={category.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>

                            {/* Text Content - Positioned at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/50 to-transparent">
                                <h3 className="text-white text-xl md:text-2xl font-light font-body">
                                    {category.title}
                                </h3>
                                <p className="text-white/80 text-xs md:text-sm mt-2 uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Shop Now <span className="text-lg">+</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
