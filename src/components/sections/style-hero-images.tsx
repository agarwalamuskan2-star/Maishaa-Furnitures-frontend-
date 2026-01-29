"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const styleItems = [
    {
        id: "coastal",
        name: "COASTAL FARMHOUSE",
        subtitle: "Rustic & Nautical",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1600&auto=format&fit=crop",
        href: "/collections/coastal-farmhouse",
    },
    {
        id: "modern",
        name: "MODERN MINIMALIST",
        subtitle: "Sleek & Clean",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
        href: "/collections/modern-minimalist",
    },
    {
        id: "industrial",
        name: "INDUSTRIAL CHIC",
        subtitle: "Raw & Urban",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1600&auto=format&fit=crop",
        href: "/collections/industrial-chic",
    },
    {
        id: "scandinavian",
        name: "SCANDINAVIAN",
        subtitle: "Light & Functional",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
        href: "/collections/scandinavian",
    },
    {
        id: "art-deco",
        name: "ART DECO",
        subtitle: "Bold & Glamorous",
        image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1600&auto=format&fit=crop",
        href: "/collections/art-deco",
    }
];

export default function StyleHeroImages() {
    return (
        <section className="w-full pb-20 overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-6 pb-8 snap-x snap-mandatory">
                    {styleItems.map((style) => (
                        <Link
                            key={style.id}
                            href={style.href}
                            className="group relative flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-100 snap-center rounded-sm"
                        >
                            {/* Background Image */}
                            <Image
                                src={style.image}
                                alt={style.name}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 70vw, 60vw"
                            />

                            {/* Refined Overlays */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                            {/* Content Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                                <p className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-[0.4em] mb-3 drop-shadow-sm">
                                    {style.subtitle}
                                </p>
                                <h3 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 tracking-wider drop-shadow-lg">
                                    {style.name}
                                </h3>
                                <span className="inline-block text-xs font-bold text-white border border-white/50 bg-white/10 backdrop-blur-md px-10 py-4 tracking-[0.3em] group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    EXPLORE NOW
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Scroll Indicator Hint */}
                <div className="flex justify-center gap-2 mt-4">
                    {styleItems.map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                    ))}
                </div>
            </div>
        </section>
    );
}
