"use client";

import React from "react";
import Image from "next/image";

export default function OutdoorDesignerChoice() {
    return (
        <section className="w-full py-16 sm:py-24 bg-white overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="relative flex flex-col lg:flex-row items-center">
                    {/* Text Context (Light grey background as seen in Image 2) */}
                    <div className="w-full lg:w-1/2 bg-[#f8f8f8] p-8 sm:p-12 lg:p-20 z-10 lg:-mr-20">
                        <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-4 block">
                            DESIGNER'S CHOICE
                        </span>
                        <h3 className="text-4xl sm:text-5xl font-sans text-gray-900 mb-8 leading-tight">
                            Wren Lounge Chair
                        </h3>
                        <p className="text-base text-gray-600 mb-10 leading-relaxed max-w-md">
                            Find serenity in the Wren Lounge Chair. Crafted to mirror the agility of the wren,
                            this chair harmoniously fuses a streamlined design with functionality.
                        </p>
                        <button className="flex items-center gap-4 text-sm font-bold text-gray-900 uppercase tracking-widest hover:gap-6 transition-all group">
                            Explore <span className="text-gray-400 group-hover:text-black">+</span>
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-3/5 mt-8 lg:mt-0 relative h-[400px] sm:h-[500px] lg:h-[600px]">
                        <Image
                            src="/images/outdoor/wren-chair.png"
                            alt="Wren Lounge Chair"
                            fill
                            className="object-cover shadow-2xl"
                        />
                    </div>

                    {/* Pagination (Image 3) */}
                    <div className="absolute -bottom-10 right-0 flex items-center gap-6 z-20">
                        <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                            <button className="hover:text-black transition-colors">{"<"}</button>
                            <span className="text-black">1</span> / <span>2</span>
                            <button className="hover:text-black transition-colors">{">"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
