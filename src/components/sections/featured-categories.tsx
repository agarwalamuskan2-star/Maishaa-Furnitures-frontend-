"use client";

import React from "react";
import Image from "next/image";

const FeaturedCategories = () => {
    const categories = [
        {
            id: 1,
            title: "Premium Beds",
            image: "/images/new-arrivals/arrival-1.jpg",
            alt: "Premium Beds",
        },
        {
            id: 2,
            title: "Comfort Collection",
            image: "/images/new-arrivals/arrival-2.png",
            alt: "Comfort Collection",
        },
        {
            id: 3,
            title: "Luxury Bedrooms",
            image: "/images/new-arrivals/arrival-3.jpg",
            alt: "Luxury Bedrooms",
        },
        {
            id: 4,
            title: "Modern Storage",
            image: "/images/new-arrivals/arrival-4.jpg",
            alt: "Modern Storage",
        },
        {
            id: 5,
            title: "Elegant Dining",
            image: "/images/new-arrivals/arrival-5.jpg",
            alt: "Elegant Dining",
        },
        {
            id: 6,
            title: "Signature Series",
            image: "/images/new-arrivals/arrival-6.jpg",
            alt: "Signature Series",
        },
        {
            id: 7,
            title: "Living Spaces",
            image: "/images/new-arrivals/arrival-7.png",
            alt: "Living Spaces",
        },
        {
            id: 8,
            title: "Contemporary Sideboards",
            image: "/images/new-arrivals/arrival-8.png",
            alt: "Contemporary Sideboards",
        },
        {
            id: 9,
            title: "Minimalist Cabinets",
            image: "/images/new-arrivals/arrival-9.png",
            alt: "Minimalist Cabinets",
        },
        {
            id: 10,
            title: "Modern Sofas",
            image: "/images/new-arrivals/arrival-10.png",
            alt: "Modern Sofas",
        },
    ];

    return (
        <section className="w-full bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-[1800px] mx-auto">
                {/* A uniform 3-column grid to match the "In The Spotlight" section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col group cursor-pointer relative overflow-hidden rounded-md shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Fixed height container guarantees images never collapse and always align properly */}
                            <div className="relative w-full h-[320px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden bg-gray-100">
                                <Image
                                    src={category.image}
                                    alt={category.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                            </div>

                            {/* Text Content - Positioned at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-light font-body tracking-wide">
                                    {category.title}
                                </h3>
                                <p className="text-white/90 text-xs md:text-sm mt-2 uppercase tracking-widest flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
