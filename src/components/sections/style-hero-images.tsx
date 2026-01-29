"use client";

import React from "react";
import Image from "next/image";

const styleImages = [
    {
        id: "minimal",
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
        alt: "Minimalist Style"
    },
    {
        id: "modern",
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop",
        alt: "Modern Luxury"
    },
    {
        id: "classic",
        url: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=800&auto=format&fit=crop",
        alt: "Classic Elegance"
    },
    {
        id: "boho",
        url: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&auto=format&fit=crop",
        alt: "Bohemian Interior"
    },
    {
        id: "rustic",
        url: "https://images.unsplash.com/photo-1544457070-4cd77a714300?q=80&w=800&auto=format&fit=crop",
        alt: "Rustic Charm"
    }
];

export default function StyleHeroImages() {
    return (
        <section className="w-full pb-16">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {styleImages.map((image) => (
                        <div
                            key={image.id}
                            className="relative aspect-[3/4] overflow-hidden rounded-sm group bg-gray-100"
                        >
                            <Image
                                src={image.url}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
