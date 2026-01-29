"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
    {
        name: "Entryway",
        image: "https://images.unsplash.com/photo-1544642899-7069ed429644?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/entryway",
    },
    {
        name: "Living",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/living",
    },
    {
        name: "Dining",
        image: "https://images.unsplash.com/photo-1617806118233-12a14ef0ed2b?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/dining",
    },
    {
        name: "Bedroom",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=400&auto=format&fit=crop",
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
        <section className="w-full mb-12 relative group h-[160px]">
            {/* Left Gradient/Button Overlay */}
            <div className="absolute left-0 top-0 bottom-0 z-10 w-12 flex items-center justify-start pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={() => scroll("left")}
                    className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md pointer-events-auto ml-1 border border-gray-100"
                >
                    <ChevronLeft size={20} />
                </button>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto no-scrollbar border-t border-b border-gray-100 bg-white"
            >
                {categories.map((cat, idx) => (
                    <Link
                        key={cat.name}
                        href={cat.href}
                        className={`
                            flex-shrink-0 flex items-center justify-between p-8 sm:p-10 
                            w-[280px] sm:w-[320px] lg:w-[360px] h-[160px]
                            group/card transition-all
                            ${idx !== categories.length - 1 ? 'border-r border-gray-100' : ''}
                        `}
                    >
                        <div className="flex flex-col pr-4">
                            <span className="text-sm sm:text-base font-bold text-gray-900 uppercase tracking-widest leading-tight group-hover/card:text-black">
                                {cat.name}
                            </span>
                        </div>
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 overflow-hidden flex-shrink-0">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-contain group-hover/card:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {/* Right Gradient/Button Overlay */}
            <div className="absolute right-0 top-0 bottom-0 z-10 w-12 flex items-center justify-end pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={() => scroll("right")}
                    className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md pointer-events-auto mr-1 border border-gray-100"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
}
