"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ChevronRight } from "lucide-react";

const DiningCollections = () => {
    const heroImages = [
        {
            src: "/images/outdoor/dining-cat.png",
            title: "X-ATURA",
            description: "Live edge wood brings a natural beauty that looks raw yet very refined.\n\nAl mid-century style time traveled and placed in your home with a touch of modernism, an uncomplicated elegance.",
        },
        {
            src: "/images/outdoor/wren-chair.png",
            title: "WREN",
            description: "Sculptural form meets functional art. The Wren chair is a testament to the beauty of minimalist curves and artisanal craftsmanship, designed to elevate every dining experience.",
        },
        {
            src: "/images/outdoor/seating-cat.png",
            title: "ARTISAN",
            description: "Exquisite hand-carved masterpieces. Each piece tells a story of heritage and surgical precision in every joint, blending traditional soul with contemporary lines.",
        },
        {
            src: "/images/outdoor/hero.png",
            title: "HERITAGE",
            description: "Nature's texture redefined. Grand furniture masterpieces that serve as anchors for your most cherished living spaces, crafted from the finest sustainably sourced hardwoods.",
        },
        {
            src: "/images/outdoor/accessories-cat.png",
            title: "REFINED",
            description: "The finishing touch. Our curated accessories and decor accents are designed to complement the sophisticated soul of your home, adding layers of personality and warmth.",
        },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 pb-24">
                {/* Breadcrumbs - Tightened and aligned like reference */}
                <div className="pt-4 pb-8 px-4 sm:px-8 md:px-12 lg:px-16">
                    <nav className="flex items-center gap-1.5 text-gray-400 text-[10px] tracking-widest uppercase">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={10} />
                        <Link href="/furniture" className="hover:text-black transition-colors">Furniture</Link>
                        <ChevronRight size={10} />
                        <span className="text-black font-semibold">Dining Room Collection</span>
                    </nav>
                </div>

                {/* Hero Sections Grid - Adjusted ratio for image-heavy layout */}
                <div className="space-y-16 md:space-y-24 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
                    {heroImages.map((hero, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-white"
                        >
                            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-[1.6fr_1fr] items-center gap-0">
                                {/* Left: Larger Image Column */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-[16/10] overflow-hidden bg-[#fafafa]"
                                >
                                    <Image
                                        src={hero.src}
                                        alt={hero.title}
                                        fill
                                        className="object-cover transition-transform duration-1000"
                                        priority={idx === 0}
                                    />
                                </motion.div>

                                {/* Right: Written Content - More compact and correctly spaced */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center md:items-start text-center md:text-left px-8 md:px-16 lg:px-24 py-12"
                                >
                                    <h2 className="text-5xl md:text-6xl lg:text-[80px] font-extralight tracking-[0.1em] text-[#333] leading-tight uppercase font-serif mb-12">
                                        {hero.title}
                                    </h2>

                                    <div className="space-y-6 max-w-md">
                                        {hero.description.split('\n\n').map((para, i) => (
                                            <p key={i} className="text-gray-500 font-light leading-relaxed text-sm md:text-base tracking-[0.02em]">
                                                {para}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="pt-12">
                                        <Link
                                            href={`/furniture/dining-collections/item-${idx}`}
                                            className="inline-block border border-gray-300 text-gray-700 px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-500"
                                        >
                                            SHOP THE COLLECTION
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.section>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DiningCollections;
