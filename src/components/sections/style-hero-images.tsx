"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const styleItems = [
    {
        id: "coastal",
        name: "COASTAL FARMHOUSE",
        subtitle: "Rustic & Nautical",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
        href: "/collections/coastal-farmhouse",
    },
    {
        id: "modern",
        name: "MODERN MINIMALIST",
        subtitle: "Sleek & Clean",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
        href: "/collections/modern-minimalist",
    },
    {
        id: "industrial",
        name: "INDUSTRIAL CHIC",
        subtitle: "Raw & Urban",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop",
        href: "/collections/industrial-chic",
    },
    {
        id: "scandinavian",
        name: "SCANDINAVIAN",
        subtitle: "Light & Functional",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
        href: "/collections/scandinavian",
    },
    {
        id: "art-deco",
        name: "ART DECO",
        subtitle: "Bold & Glamorous",
        image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1200&auto=format&fit=crop",
        href: "/collections/art-deco",
    }
];

export default function StyleHeroImages() {
    return (
        <section className="w-full pb-16 overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible">
                    {styleItems.map((style) => (
                        <Link
                            key={style.id}
                            href={style.href}
                            className="group relative flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-[40vw] lg:w-full aspect-[4/5] overflow-hidden bg-gray-100 snap-center"
                        >
                            {/* Background Image */}
                            <Image
                                src={style.image}
                                alt={style.name}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                sizes="(max-width: 1024px) 80vw, 20vw"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

                            {/* Content Overlay - Styled like the screenshot */}
                            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                                <p className="text-[10px] font-bold text-white/90 uppercase tracking-[0.3em] mb-2 drop-shadow-sm">
                                    {style.subtitle}
                                </p>
                                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-4 tracking-wider drop-shadow-md">
                                    {style.name}
                                </h3>
                                <span className="inline-block text-[10px] font-bold text-white border border-white/40 bg-black/20 backdrop-blur-sm px-6 py-2.5 tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    EXPLORE NOW
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
