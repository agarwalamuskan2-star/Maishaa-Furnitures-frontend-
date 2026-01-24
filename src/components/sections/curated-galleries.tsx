"use client";

import React from "react";
import Image from "next/image";

const CuratedGalleries = () => {
    const galleries = [
        {
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
            alt: "Dtale Modern Store Front 1",
            location: "BENGALURU",
            subtitle: "Explore this curated gallery",
        },
        {
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
            alt: "Dtale Modern Store Front 2",
            location: "KOCHI",
            subtitle: "Explore this curated gallery",
        },
        {
            image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop",
            alt: "Dtale Modern Store Front 3",
            location: "THRISSUR",
            subtitle: "Explore this curated gallery",
        },
    ];

    return (
        <section className="bg-white py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-[1920px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4 md:mb-6 font-body">
                        Curated Galleries
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        Our stores exude an aura that&apos;s irresistible with great wood and fabric. Catching your eyes and captivating your mind, our art stands at every nook and corner looking at you. Visit and get consumed.
                    </p>
                </div>

                {/* Gallery Grid - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {galleries.map((gallery, index) => (
                        <div key={index} className="relative group">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200">
                                <Image
                                    src={gallery.image}
                                    alt={gallery.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                {/* Store Name Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6 md:p-8">
                                    <div className="text-white">
                                        <div className="text-xl md:text-2xl font-bold tracking-wider mb-1">
                                            DTALE <span className="font-normal">{gallery.location}</span>
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-300">
                                            {gallery.subtitle}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CuratedGalleries;
