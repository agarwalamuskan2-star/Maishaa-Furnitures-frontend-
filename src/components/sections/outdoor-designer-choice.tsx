"use client";

import React from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OutdoorDesignerChoice() {
    return (
        <section className="w-full py-16 sm:py-24 bg-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="relative flex flex-col lg:flex-row items-stretch min-h-[500px] lg:h-[600px]">
                    {/* Text Section (Designers Choice) */}
                    <div className="w-full lg:w-[45%] bg-[#f7f7f7] p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
                        <div className="max-w-md">
                            <span className="text-[11px] font-bold text-black uppercase tracking-[0.35em] mb-10 block font-sans">
                                DESIGNER'S CHOICE
                            </span>
                            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-sans text-gray-900 mb-8 leading-[1.1]">
                                Wren Lounge Chair
                            </h3>
                            <p className="text-[15px] sm:text-[16px] text-gray-600 mb-12 leading-relaxed font-light font-sans text-balance">
                                Find serenity in the Wren Lounge Chair. Crafted to mirror the agility of the wren,
                                this chair harmoniously fuses a streamlined design with functionality.
                            </p>

                            <a href="#" className="inline-flex items-center gap-3 text-[12px] font-bold text-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:border-gray-400 transition-all duration-300 w-fit font-sans">
                                Explore <span className="text-[18px] leading-none">+</span>
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-[55%] relative h-[400px] lg:h-full overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
                            alt="Wren Lounge Chair"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Pagination (Bottom Right of Image) */}
                        <div className="absolute bottom-10 right-10 flex items-center gap-10 z-20 bg-white/10 backdrop-blur-sm p-4 rounded-sm lg:bg-transparent">
                            <div className="flex items-center gap-8 text-[14px]">
                                <button className="text-gray-400 hover:text-black transition-colors">
                                    <ChevronLeft size={20} strokeWidth={1} />
                                </button>
                                <div className="flex items-center gap-2 font-medium tracking-widest font-sans">
                                    <span className="text-black">1</span>
                                    <span className="text-gray-300">/</span>
                                    <span className="text-gray-400">2</span>
                                </div>
                                <button className="text-black hover:text-gray-600 transition-colors">
                                    <ChevronRight size={20} strokeWidth={1} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
