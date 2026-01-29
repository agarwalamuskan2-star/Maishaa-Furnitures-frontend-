"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        name: "Lighting",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
        href: "/decor/lighting",
    },
    {
        name: "Wall Decor",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop",
        href: "/decor/wall-decor",
    },
    {
        name: "Vases & Planters",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop",
        href: "/decor/vases",
    },
    {
        name: "Decorative Objects",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
        href: "/decor/objects",
    },
];

export default function DecorCategories() {
    return (
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-sans text-gray-900 mb-4 tracking-tight">Explore more</h2>
                <p className="text-sm sm:text-base text-gray-500 font-light">
                    Discover our curated selection of premium home accents.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.slice(0, 3).map((cat) => (
                    <Link
                        key={cat.name}
                        href={cat.href}
                        className="group flex flex-col w-full bg-white relative"
                    >
                        {/* Image Container - Square */}
                        <div className="relative w-full aspect-square bg-[#f5f5f5] overflow-hidden mb-4">
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
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Details - Below image */}
                        <div className="text-left">
                            <h3 className="text-base text-gray-900 font-normal mb-1 font-body uppercase tracking-wide">
                                {cat.name}
                            </h3>
                            <p className="text-xs text-gray-500 font-medium">EXPLORE COLLECTION</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
