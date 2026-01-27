"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OutdoorHero() {
    return (
        <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1544173104-e3505be1b8a5?q=80&w=1920&auto=format&fit=crop"
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
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                <span className="text-white/80 text-[10px] sm:text-xs tracking-[0.4em] font-light uppercase border-b border-white/20 pb-2">FEEL NEW</span>
            </div>
        </section>
    );
}
