"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OutdoorHero() {
    return (
        <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1511874570319-3549298533b6?q=80&w=1920&auto=format&fit=crop"
                alt="Outdoor Collections"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay for Breadcrumb / Header depth */}
            <div className="absolute inset-0 bg-black/5 opacity-10" />

            {/* Content Container */}
            <div className="absolute top-0 left-0 w-full pt-6">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-gray-400" />
                        <Link href="/collections" className="hover:text-black transition-colors">Collections</Link>
                        <ChevronRight size={14} className="text-gray-400" />
                        <span className="text-black">Outdoor Collections</span>
                    </nav>
                </div>
            </div>

            {/* "FEEL NEW" text if needed - optional based on image 0 bottom center */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <span className="text-white/80 text-xs tracking-[0.2em] font-light uppercase">FEEL NEW</span>
            </div>
        </section>
    );
}
