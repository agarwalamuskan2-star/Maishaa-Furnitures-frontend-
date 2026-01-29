"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OutdoorHero() {
    return (
        <section className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-10">
            <div className="relative w-full h-[calc(100dvh-70px)] lg:h-[calc(100vh-120px)] overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/images/outdoor/hero.png"
                    alt="Outdoor Collections"
                    fill
                    priority
                    className="object-cover"
                />

                {/* "FEEL NEW" text at the bottom */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                    <span className="text-white/90 text-[10px] sm:text-xs tracking-[0.4em] font-medium uppercase border-b border-white/40 pb-2 drop-shadow-sm">FEEL NEW</span>
                </div>
            </div>
        </section>
    );
}
