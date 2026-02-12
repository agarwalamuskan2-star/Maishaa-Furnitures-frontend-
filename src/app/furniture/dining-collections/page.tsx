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
            title: "The Artisan Dining Series",
            subtitle: "Exquisite Hand-Carved Masterpieces"
        },
        {
            src: "/images/outdoor/seating-cat.png",
            title: "Premium Seating Collection",
            subtitle: "Ergonomic Comfort in Every Silhouette"
        },
        {
            src: "/images/outdoor/hero.png",
            title: "Grand Furniture Masterpieces",
            subtitle: "Nature's Texture in Your Living Space"
        },
        {
            src: "/images/outdoor/accessories-cat.png",
            title: "Refined Accents & Decor",
            subtitle: "The Finishing Touch to Your Interiors"
        },
        {
            src: "/images/outdoor/wren-chair.png",
            title: "The Iconic Wren Chair",
            subtitle: "Sculptural Form Meets Functional Art"
        },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 pb-24">
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

                {/* Hero Images Section */}
                <div className="space-y-24 px-4 sm:px-8 md:px-16 lg:px-20">
                    {heroImages.map((hero, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative group w-full aspect-[21/9] overflow-hidden bg-gray-100 shadow-2xl"
                        >
                            <Image
                                src={hero.src}
                                alt={hero.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority={idx === 0}
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h2 className="text-3xl md:text-6xl font-serif mb-4 tracking-tight">
                                        {hero.title}
                                    </h2>
                                    <p className="text-[10px] md:text-sm font-bold tracking-[0.4em] uppercase text-gray-200">
                                        {hero.subtitle}
                                    </p>

                                    <div className="mt-8 flex items-center gap-6">
                                        <Link
                                            href={`/furniture/dining-collections/item-${idx}`}
                                            className="bg-white text-black px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-orange-600 hover:text-white transition-all duration-300"
                                        >
                                            View Collection
                                        </Link>
                                        <div className="hidden md:block h-px w-24 bg-white/30 group-hover:w-48 transition-all duration-700" />
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
