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
            src: "https://images.unsplash.com/photo-1617806118233-f8e1074010b6?q=80&w=2000",
            title: "The Artisan Series",
            subtitle: "Where Tradition Meets Modernity"
        },
        {
            src: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=2000",
            title: "Minimalist Elegance",
            subtitle: "Curated for the Contemporary Home"
        },
        {
            src: "https://images.unsplash.com/photo-1530018607912-eff2df114fbe?q=80&w=2000",
            title: "Heritage Oak Collection",
            subtitle: "Timeless Durability for Generations"
        },
        {
            src: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2000",
            title: "Urban Loft Dining",
            subtitle: "Sophisticated Industrial Aesthetics"
        },
        {
            src: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=2000",
            title: "Sculptural Forms",
            subtitle: "Functional Art for Your Dining Space"
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

                {/* Narrative Section */}
                <section className="mt-32 py-24 px-4 max-w-5xl mx-auto text-center border-t border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Dining with <br />
                            <span className="italic">Maishaa Soul</span>
                        </h2>
                        <p className="text-gray-500 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-lg">
                            The dining room is the heart of the home, where conversations flow and memories are forged. Our collections are designed to celebrate these moments, bringing together exquisite craftsmanship and modern comfort.
                        </p>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DiningCollections;
