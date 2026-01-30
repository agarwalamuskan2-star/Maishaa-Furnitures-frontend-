"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
    {
        name: "Entryway",
        image: "https://images.unsplash.com/photo-1574739782594-db4ead022697?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/entryway",
    },
    {
        name: "Living",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/living",
    },
    {
        name: "Dining",
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/dining",
    },
    {
        name: "Bedroom",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/bedroom",
    },
    {
        name: "Office Home",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop",
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
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-black transition-colors"
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} strokeWidth={1} />
            </button>

            {/* Scroll Container with Stronger Border */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto no-scrollbar border border-gray-200 bg-white scroll-smooth"
            >
                {categories.map((cat, idx) => (
                    <Link
                        key={cat.name}
                        href={cat.href}
                        className={`
                            flex-shrink-0 flex items-center justify-between px-6 sm:px-8 
                            w-[240px] sm:w-[280px] lg:w-[300px] h-[100px]
                            group/card transition-all
                            ${idx !== categories.length - 1 ? 'border-r border-gray-200' : ''}
                        `}
                    >
                        <div className="flex flex-col pr-4">
                            <span className="text-[13px] font-medium text-gray-900 leading-tight">
                                {cat.name}
                            </span>
                        </div>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden flex-shrink-0">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-contain group-hover/card:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 64px, 80px"
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {/* Right Button */}
            <button
                onClick={() => scroll("right")}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-black transition-colors"
                aria-label="Scroll right"
            >
                <ChevronRight size={24} strokeWidth={1} />
            </button>
        </section>
    );
}
