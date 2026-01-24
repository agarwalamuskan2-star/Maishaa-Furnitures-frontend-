"use client";

import React from "react";
import Image from "next/image";

/**
 * COLLECTIONS HERO SECTION
 * 
 * Features a cinematic background image and premium typography
 * as per the user's reference image for the Collections landing page.
 */

const CollectionsHero = () => {
    return (
        <section className="w-full bg-white pt-0 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="relative w-full max-w-[1920px] mx-auto h-[200px] sm:h-[280px] md:h-[350px] xl:h-[400px] overflow-hidden bg-black">
                {/* Background Image */}
                <Image
                    src="/images/collections-banner.png"
                    alt="Maishaa Modern Collections"
                    fill
                    priority
                    className="object-cover opacity-80"
                    sizes="100vw"
                />

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Text Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 md:pb-24 lg:pb-32 px-4 text-center">
                    <p className="text-white text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4 opacity-90 font-body">
                        DISCOVER EACH PIECE FROM OUR
                    </p>
                    <h1
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal text-white uppercase tracking-tight leading-none font-body"
                        style={{ letterSpacing: "-0.02em" }}
                    >
                        COLLECTIONS
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default CollectionsHero;
