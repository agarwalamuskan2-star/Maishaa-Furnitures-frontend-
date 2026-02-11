"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectsHero = () => {
    return (
        <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/outdoor/hero.png"
                    alt="Maishaa Projects Hero"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/45"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-12 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="text-white/80 text-sm md:text-base tracking-[0.4em] uppercase mb-4 font-light">
                        Global Excellence
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-[0.15em] uppercase mb-8 drop-shadow-2xl font-light">
                        Our Projects
                    </h1>
                    <div className="w-24 h-[1px] bg-white/60 mb-8"></div>
                    <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                        A showcase of our premium furniture installations in the world's most prestigious resorts, hotels, and private residences.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Scroll indicator - Moved outside for better positioning */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/80 to-transparent"></div>
            </motion.div>

            {/* Subtle Texture/Gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-[5]"></div>
        </section>
    );
};

export default ProjectsHero;
