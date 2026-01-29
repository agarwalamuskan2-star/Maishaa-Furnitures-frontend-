"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
    {
        name: "Entryway",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/entryway",
    },
    {
        name: "Living",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/living",
    },
    {
        name: "Dining",
        image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/dining",
    },
    {
        name: "Bedroom",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/bedroom",
    },
    {
        name: "Office Home",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/office",
    },
];

export default function FurnitureCategories() {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left"
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="w-full mb-12 relative group">
            {/* Left Button */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-black transition-colors"
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} strokeWidth={1} />
            </button>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto no-scrollbar border-t border-b border-gray-100 bg-white scroll-smooth"
            >
                {categories.map((cat, idx) => (
                    <Link
                        key={cat.name}
                        href={cat.href}
                        className={`
                            flex-shrink-0 flex items-center justify-between px-8 sm:px-12 
                            w-[280px] sm:w-[320px] lg:w-[340px] h-[140px]
                            group/card transition-all
                            ${idx !== categories.length - 1 ? 'border-r border-gray-100' : ''}
                        `}
                    >
                        <div className="flex flex-col pr-4">
                            <span className="text-sm font-bold text-gray-900 uppercase tracking-widest leading-tight">
                                {cat.name}
                            </span>
                        </div>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden flex-shrink-0">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-contain group-hover/card:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {/* Right Button */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-black transition-colors"
                aria-label="Scroll right"
            >
                <ChevronRight size={24} strokeWidth={1} />
            </button>
        </section>
    );
}
