"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        name: "Outdoor Seating",
        image: "/images/outdoor/seating-cat.png",
        href: "/outdoor/seating",
        startingPrice: "₹ 69,900"
    },
    {
        name: "Outdoor Dining",
        image: "/images/outdoor/dining-cat.png",
        href: "/outdoor/dining",
        startingPrice: "₹ 84,500"
    },
    {
        name: "Outdoor Accessories",
        image: "/images/outdoor/accessories-cat.png",
        href: "/outdoor/accessories",
        startingPrice: "₹ 12,900"
    },
    {
        name: "Loungers",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/loungers",
        startingPrice: "₹ 41,760"
    },
    {
        name: "Garden Decor",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/garden-decor",
        startingPrice: "₹ 8,500"
    },
];

export default function OutdoorCategories() {
    return (
        <section className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 mb-4 tracking-tight leading-tight">Explore more</h2>
                <p className="text-sm sm:text-base text-gray-500 font-light">
                    Furniture to choose from our most promising range of artistries.
                </p>
            </div>

            {/* Categories Grid - Matching the visual style of product cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.slice(0, 4).map((cat) => (
                    <Link
                        key={cat.name}
                        href={cat.href}
                        className="group flex flex-col w-full bg-white relative"
                    >
                        {/* Image Container - Square to match ProductCardDetailed */}
                        <div className="relative w-full aspect-square bg-[#f5f5f5] overflow-hidden">
                            {/* "BEST SELLER" Badge */}
                            <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                                <span className="px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-black text-white">
                                    BEST SELLER
                                </span>
                            </div>

                            {/* Heart Icon */}
                            <button className="absolute top-3 right-3 z-20 bg-white rounded-full p-2 shadow-sm hover:scale-110 transition-transform">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-gray-900"
                                >
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                            </button>

                            {/* Image */}
                            <Image
                                src={cat.name === "Loungers" ? "/images/outdoor/wren-chair.png" : cat.image}
                                alt={cat.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Details - Below image, matching ProductCardDetailed */}
                        <div className="border border-gray-200 p-5 mt-0 border-t-0 bg-white transition-shadow duration-300 group-hover:shadow-sm">
                            {/* Mock Tag to match height */}
                            <div className="mb-3">
                                <span className="bg-[#f3f0eb] text-[#8c6b5d] text-[10px] px-2 py-1 uppercase tracking-widest font-semibold">
                                    COLLECTION
                                </span>
                            </div>

                            <h3 className="text-[15px] sm:text-[16px] text-gray-900 font-normal mb-1.5 font-sans leading-snug tracking-wide uppercase">
                                {cat.name}
                            </h3>

                            <div className="flex items-baseline gap-2 mb-1.5">
                                <span className="text-[16px] sm:text-[17px] font-bold text-gray-900">{cat.startingPrice}</span>
                            </div>

                            <p className="text-[10px] text-gray-400 mb-2.5 font-light tracking-wide">
                                Explore full range | Customization Available
                            </p>

                            <p className="text-[11px] sm:text-xs text-[#d97706] font-medium tracking-wide">
                                EMI options available
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
