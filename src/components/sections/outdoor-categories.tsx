"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        name: "Outdoor Seating",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/seating",
    },
    {
        name: "Outdoor Dining",
        image: "https://images.unsplash.com/photo-1556911223-053450c768e1?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/dining",
    },
    {
        name: "Outdoor Accessories",
        image: "https://images.unsplash.com/photo-1621506821199-a99a74461933?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/accessories",
    },
    {
        name: "Loungers",
        image: "https://images.unsplash.com/photo-1596700422223-7467614d9b3d?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/loungers",
    },
    {
        name: "Garden Decor",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/garden-decor",
    },
];

export default function OutdoorCategories() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollProgress(progress);
        }
    };

    return (
        <section className="w-full mb-16 px-4 sm:px-0">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4 tracking-tight">Explore more</h2>
                <p className="text-sm sm:text-base text-gray-500 font-light">
                    Furniture to choose from our most promising range of artistries.
                </p>
            </div>

            {/* Categories Scroll Area */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="overflow-x-auto no-scrollbar scroll-smooth"
            >
                <div className="flex gap-4 sm:gap-6 min-w-max pb-8">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className="group flex items-center justify-between bg-white border border-gray-100 p-4 sm:p-5 w-[220px] sm:w-[280px] hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-900 uppercase tracking-[0.15em] transition-colors group-hover:text-black">
                                    {cat.name}
                                </span>
                            </div>
                            <div className="relative w-14 h-14 sm:w-20 sm:h-20 overflow-hidden bg-gray-50 flex-shrink-0 rounded-sm">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Custom Slider / Scrollbar (Image 1 style) */}
            <div className="relative w-full max-w-4xl mx-auto h-[2px] bg-gray-100 mt-4 rounded-full overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-gray-400 transition-all duration-150 ease-out"
                    style={{ width: '20%', left: `${scrollProgress * 0.8}%` }} // Simplified indicator
                />
                {/* The "Circle" toggle knob seen in the screenshot */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full border-2 border-white shadow-md transition-all duration-150 ease-out"
                    style={{ left: `${scrollProgress}%`, transform: `translate(-50%, -50%)` }}
                />
            </div>
        </section>
    );
}
