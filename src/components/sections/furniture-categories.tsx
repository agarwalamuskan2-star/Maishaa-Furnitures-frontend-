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
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop",
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
            {/* Force Borders Style */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .furniture-ribbon-container {
                    border-top: 1px solid #e5e7eb !important;
                    border-bottom: 1px solid #e5e7eb !important;
                    border-left: 1px solid #e5e7eb !important;
                    box-sizing: border-box;
                }
                .furniture-ribbon-item {
                    border-right: 1px solid #e5e7eb !important;
                    box-sizing: border-box;
                }
            `}} />

            {/* Left Button */}
            <button
                onClick={() => scroll("left")}
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-gray-500 hover:text-black transition-colors bg-white rounded-full shadow-md border border-gray-200"
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} strokeWidth={1} />
            </button>

            {/* Scroll Container with Connected Boxes (Minimalist Ribbon) */}
            <div className="w-full bg-white furniture-ribbon-container overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto no-scrollbar scroll-smooth"
                >
                    {categories.map((cat, idx) => (
                        <Link
                            key={cat.name}
                            href={cat.href}
                            className="
                                flex-shrink-0 flex items-center justify-between px-6 sm:px-10
                                w-[220px] sm:w-[260px] md:w-[300px] h-[110px]
                                group/card transition-all hover:bg-gray-50
                                furniture-ribbon-item
                            "
                        >
                            <div className="flex flex-col pr-4">
                                <span className="text-[14px] sm:text-[15px] font-bold text-black leading-tight uppercase tracking-widest">
                                    {cat.name}
                                </span>
                            </div>
                            <div className="relative w-16 h-12 sm:w-20 sm:h-16 overflow-hidden flex-shrink-0">
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
            </div>

            {/* Right Button */}
            <button
                onClick={() => scroll("right")}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-gray-500 hover:text-black transition-colors bg-white rounded-full shadow-md border border-gray-200"
                aria-label="Scroll right"
            >
                <ChevronRight size={24} strokeWidth={1} />
            </button>
        </section>
    );
}
