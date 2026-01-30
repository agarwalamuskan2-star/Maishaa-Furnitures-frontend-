"use client";

import React from "react";

export default function StyleHero() {
    return (
        <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-28">
            <div className="relative w-full pt-20 pb-32 bg-[#f5f5f5] flex flex-col items-center justify-center text-center">
                {/* Top Tagline */}
                <p className="text-[10px] sm:text-[12px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-4">
                    A MAISHAA STUDIO EDITION
                </p>

                {/* Hero Title with Script Font Fallback */}
                <div className="relative inline-block">
                    <h1
                        className="text-6xl sm:text-8xl md:text-[100px] lg:text-[120px] font-normal text-gray-800 leading-tight"
                        style={{
                            fontFamily: "'Alex Brush', 'Dancing Script', 'Cursive', serif",
                            fontWeight: 400
                        }}
                    >
                        Shop By Style
                    </h1>
                </div>
            </div>

            {/* Optional: Add the fonts to the head if they don't exist */}
            <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
        </section>
    );
}
