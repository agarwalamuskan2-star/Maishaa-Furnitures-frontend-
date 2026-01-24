"use client";

import React from "react";
import Image from "next/image";

const DesignMasters = () => {
    const designers = [
        {
            name: "Emma Richardson",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        },
        {
            name: "Michael Chen",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
        },
        {
            name: "Sarah Williams",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
        },
        {
            name: "David Anderson",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
        },
    ];

    return (
        <section className="bg-transparent py-8 md:py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-[1920px] mx-auto">
                {/* Section Header */}
                <div className="mb-8 md:mb-10 text-left">
                    <h3 className="text-xl sm:text-2xl md:text-[32px] font-normal text-foreground capitalize tracking-wide font-body">
                        Meet our Design Masters
                    </h3>
                </div>

                {/* Grid Container - 4 Columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {designers.map((designer, index) => (
                        <div key={index} className="relative group">
                            {/* Image Container */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden bg-transparent">
                                <Image
                                    src={designer.image}
                                    alt={designer.name}
                                    fill
                                    className="object-cover grayscale"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />

                                {/* Name Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                                    <h3 className="text-white text-base md:text-lg font-medium font-body">
                                        {designer.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-8 md:mt-12">
                    <button className="px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300">
                        View All +
                    </button>
                </div>

                {/* Featured In Section */}
                <div className="mt-16 md:mt-20">
                    <h3 className="text-center text-xl md:text-2xl font-medium text-gray-900 mb-8 md:mb-12 font-body">
                        Featured in
                    </h3>

                    {/* Magazine Logos Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-4xl mx-auto">
                        {/* AD Logo */}
                        <div className="text-4xl md:text-5xl font-bold text-gray-900">
                            AD
                        </div>

                        {/* Elle Decor Logo */}
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl tracking-wider text-gray-900">ELLE</div>
                            <div className="text-xs md:text-sm tracking-widest text-gray-600">DECOR</div>
                        </div>

                        {/* Livingetc Logo */}
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">
                            Livingetc
                        </div>

                        {/* Interiors Logo */}
                        <div className="text-center">
                            <div className="text-xs md:text-sm text-gray-500">WORLD OF</div>
                            <div className="text-2xl md:text-3xl font-bold text-gray-900">interiors</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignMasters;
