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
            description: "Live edge wood brings a natural beauty that looks raw yet very refined. A mid-century style time traveled and placed in your home with a touch of modernism, an uncomplicated elegance.",
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

            <main className="flex-1 pb-32">
                {/* Breadcrumbs */}
                <div className="pt-6 pb-12 px-4 sm:px-8 md:px-16 lg:px-20">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide uppercase font-bold">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture" className="hover:text-black transition-colors">Furniture</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-extrabold">Dining Collections</span>
                    </nav>
                </div>

                {/* Hero Sections Grid */}
                <div className="space-y-32 md:space-y-48 px-4 sm:px-8 md:px-16 lg:px-20 overflow-hidden">
                    {heroImages.map((hero, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-white"
                        >
                            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                                {/* Left: Image Column */}
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-square overflow-hidden bg-[#fafafa] group"
                                >
                                    <Image
                                        src={hero.src}
                                        alt={hero.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        priority={idx === 0}
                                    />
                                </motion.div>

                                {/* Right: Content Column */}
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-start space-y-10 md:pr-12 lg:pr-24"
                                >
                                    <h2 className="text-6xl md:text-7xl lg:text-[100px] font-extralight tracking-[0.15em] text-[#1a1a1a] leading-none uppercase font-serif">
                                        {hero.title}
                                    </h2>

                                    <div className="space-y-8 max-w-lg">
                                        <p className="text-gray-500 font-light leading-relaxed text-sm md:text-[17px] tracking-wide">
                                            {hero.description}
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <Link
                                            href={`/furniture/dining-collections/item-${idx}`}
                                            className="inline-block border border-[#1a1a1a] text-[#1a1a1a] px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all duration-500 rounded-sm"
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
