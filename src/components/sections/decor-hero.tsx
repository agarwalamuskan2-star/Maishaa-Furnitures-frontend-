import React from "react";
import Image from "next/image";

export default function DecorHero() {
    return (
        <section className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-10">
            <div className="relative w-full h-[calc(100dvh-70px)] lg:h-[calc(100vh-120px)] overflow-hidden bg-black">
                {/* Background Image */}
                <Image
                    src="/images/decor/hero.png"
                    alt="Decor & Accents"
                    fill
                    priority
                    className="object-cover opacity-90"
                />

                {/* Centered Text */}
                <div className="absolute inset-0 flex items-center justify-center text-center z-10">
                    <div>
                        <p className="text-xs sm:text-sm text-white/80 font-light uppercase tracking-[0.3em] mb-4">
                            DISCOVER EACH PIECE FROM OUR
                        </p>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans text-white tracking-wider">
                            ACCENTS
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
