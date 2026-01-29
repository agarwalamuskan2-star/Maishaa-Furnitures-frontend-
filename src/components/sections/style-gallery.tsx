"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const styles = [
    {
        id: 1,
        name: "COASTAL FARMHOUSE",
        subtitle: "Rustic & Nautical",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
        href: "/collections/coastal-farmhouse",
    },
    {
        id: 2,
        name: "MODERN MINIMALIST",
        subtitle: "Sleek & Clean",
        image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1200&auto=format&fit=crop",
        href: "/collections/modern-minimalist",
    },
    {
        id: 3,
        name: "INDUSTRIAL CHIC",
        subtitle: "Raw & Urban",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=1200&auto=format&fit=crop",
        href: "/collections/industrial-chic",
    },
    {
        id: 4,
        name: "SCANDINAVIAN",
        subtitle: "Light & Functional",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc2f51d92?q=80&w=1200&auto=format&fit=crop",
        href: "/collections/scandinavian",
    }
];

export default function StyleGallery() {
    return (
        <section className="pb-24 bg-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {styles.map((style) => (
                        <Link
                            key={style.id}
                            href={style.href}
                            className="group relative block aspect-[16/10] overflow-hidden bg-gray-100"
                        >
                            {/* Background Image */}
                            <Image
                                src={style.image}
                                alt={style.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-black/5 flex flex-col items-end justify-center p-8 sm:p-12 lg:p-16">
                                <div className="text-right max-w-[50%]">
                                    <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                                        {style.subtitle}
                                    </p>
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6">
                                        {style.name}
                                    </h3>
                                    <span className="inline-block text-[10px] sm:text-xs font-bold text-white bg-black/80 backdrop-blur-sm px-6 py-2 tracking-[0.2em] group-hover:bg-black transition-colors">
                                        EXPLORE NOW
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
