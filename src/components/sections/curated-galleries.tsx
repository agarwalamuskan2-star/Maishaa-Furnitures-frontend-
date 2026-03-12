"use client";

import React from "react";
import Image from "next/image";

const CuratedGalleries = () => {
    return (
        <section className="bg-white py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-[1920px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 font-body tracking-tight">
                        Curated Gallery
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-body">
                        Our store exudes an aura that&apos;s irresistible with great wood and fabric. Catching your eyes and captivating your mind, our art stands at every nook and corner looking at you. Visit and get consumed.
                    </p>
                </div>

                {/* Single Hero Gallery Image */}
                <div className="relative group cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-700">
                    {/* Image Container - Wide aspect ratio for hero feel */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] bg-gray-100 overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
                            alt="Maishaa Siliguri Flagship Store"
                            fill
                            className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-105"
                            sizes="100vw"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    </div>

                    {/* Store Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-2 md:mb-4">
                                Maishaa <span className="font-medium">SILIGURI</span>
                            </h3>
                            <div className="flex items-center gap-4 text-sm md:text-base text-gray-200">
                                <span className="uppercase tracking-widest">Explore our flagship gallery</span>
                                <span className="w-12 h-[1px] bg-white opacity-50"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CuratedGalleries;
