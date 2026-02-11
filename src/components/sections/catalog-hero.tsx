"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CatalogHero = () => {
    return (
        <section className="relative w-full overflow-hidden flex flex-col items-center">
            {/* Background Image Container */}
            <div className="relative w-full h-[50vh] min-h-[400px]">
                <Image
                    src="/images/outdoor/hero.png"
                    alt="Maishaa Catalog Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Intro Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-black tracking-[0.05em] mb-12 uppercase font-light">
                        Discover Our Catalogs
                    </h1>

                    <div className="relative inline-block mb-12">
                        {/* Optional Logo/Icon like in screenshot if I had it */}
                    </div>

                    <p className="text-[#4a4a4a] text-[17px] md:text-[19px] font-light leading-relaxed max-w-4xl mx-auto tracking-wide">
                        Maishaa's catalogs do more than just showcase our latest collections, materials, and designs.
                        They are essential tools for creating luxurious spaces, igniting your imagination,
                        unleashing your artistic spirit, and unlocking infinite possibilities for connecting you with
                        nature and elegance. Download the PDF to further explore the captivating world that Maishaa unveils.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CatalogHero;
