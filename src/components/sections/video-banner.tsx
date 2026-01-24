"use client";

import React, { useState } from "react";

const VideoBanner = () => {
    const [hasError, setHasError] = useState(false);

    return (
        <div className="w-full py-6 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden bg-transparent">
                {/* Background Video */}
                {!hasError ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        onError={() => setHasError(true)}
                        className="absolute inset-0 w-full h-full object-cover"
                        poster="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&auto=format&fit=crop"
                    >
                        <source
                            src="https://www.maishaafurnitures.com/maishaa_hero_website_video_compressed_v2.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&auto=format&fit=crop')" }}
                    />
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text Content */}
                <div className="relative z-10 flex items-center h-full px-8 sm:px-12 md:px-16 lg:px-20">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white text-left tracking-wide max-w-3xl"
                    >
                        "Maishaa is Home Culture."
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default VideoBanner;
