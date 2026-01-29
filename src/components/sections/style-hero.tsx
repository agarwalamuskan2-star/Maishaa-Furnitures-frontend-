"use client";

import React from "react";

export default function StyleHero() {
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-4 text-center">
                {/* Top Tagline */}
                <p className="text-[10px] sm:text-[12px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-4">
                    A DTALE STUDIO EDITION
                </p>

                {/* Hero Title with Script Font Fallback */}
                <div className="relative inline-block">
                    <h1
                        className="text-6xl sm:text-8xl md:text-[120px] lg:text-[150px] font-normal text-gray-800 leading-tight"
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
