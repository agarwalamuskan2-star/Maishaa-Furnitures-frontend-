"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

/**
 * CLASSIC MODERN COLLECTION PAGE
 * 
 * Features a timeless, sophisticated aesthetic with architectural details and rich textures.
 */

const ClassicModernCollection = () => {
    useEffect(() => {
        document.title = "Classic Modern Collection | Maishaa";
    }, []);

    const products = [
        {
            name: "Augustus Wingback Chair",
            price: "56,000",
            emi: "4811",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "/images/outdoor/seating-cat.png"
        },
        {
            name: "Palladian Marble Table",
            price: "2,15,400",
            emi: "18971",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "Legacy Wall Sconce",
            price: "14,900",
            emi: "1250",
            tag: "READY TO SHIP",
            bestSeller: false,
            image: "/images/outdoor/accessories-cat.png"
        },
        {
            name: "Versailles Oak Chest",
            price: "1,32,000",
            emi: "11611",
            tag: "MADE TO ORDER",
            bestSeller: false,
            image: "/images/outdoor/hero.png"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                {/* Hero Section - Grand & Timeless */}
                <section className="w-full mb-20 relative h-[80vh] overflow-hidden group">
                    <Image
                        src="/images/outdoor/dining-cat.png"
                        alt="Classic Modern Collection"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Text Overlay - Replicating "Timeless & Architectural" style */}
                    <div className="absolute inset-0 flex flex-col justify-end items-start px-8 md:px-16 lg:px-40 pb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-12 md:p-16 max-w-2xl border-l-[12px] border-black shadow-2xl"
                        >
                            <p className="text-[12px] md:text-[14px] font-bold tracking-[0.6em] text-gray-400 uppercase mb-4">
                                Heritage & Symmetry
                            </p>
                            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[0.9] uppercase tracking-tighter">
                                Classic<br />Modern
                            </h1>
                            <div className="pt-12">
                                <button className="border-b-2 border-black pb-2 text-[11px] font-black tracking-[0.4em] uppercase hover:text-gray-500 hover:border-gray-500 transition-all">
                                    THE HERITAGE COLLECTION
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 bg-[#f9f9f9]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center space-y-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 uppercase tracking-widest">Timeless Elegance</h2>
                        <div className="w-24 h-0.5 bg-black mx-auto"></div>
                        <p className="text-gray-700 text-[18px] md:text-[21px] leading-[1.8] font-light max-w-3xl mx-auto italic">
                            Classic Modern is a dialogue between the grandeur of the past and the precision of the present.
                            It celebrates architectural symmetry, rich hardwoods, and heirloom craftsmanship,
                            refined through a minimalist lens for the contemporary connoisseur.
                        </p>
                    </motion.div>
                </section>

                {/* Pro Tip Section - Symmetrical Balance */}
                <section className="py-32 overflow-hidden bg-white">
                    <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[4/5] w-full order-2 lg:order-1"
                            >
                                <Image
                                    src="/images/outdoor/hero.png"
                                    alt="Classic Style Library"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="space-y-10 order-1 lg:order-2"
                            >
                                <div className="space-y-4">
                                    <span className="text-[12px] font-black text-gray-400 tracking-[0.4em] uppercase">Pro Tip 1</span>
                                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight uppercase">Symmetrical Balance</h2>
                                </div>
                                <p className="text-gray-600 text-[18px] leading-relaxed font-light">
                                    In Classic Modern design, symmetry creates a sense of order and serenity.
                                    Anchor your room with a central focal point—like a grand fireplace or a statement console—and
                                    pair elements on either side to reflect a mirror-like harmony.
                                </p>
                                <div className="pt-8 flex gap-8">
                                    <button className="bg-black text-white px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gray-800 transition-all">
                                        Explore Projects
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Product Grid Section */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-[#111] text-white">
                    <div className="max-w-[1920px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-white/10 pb-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-serif">The Curation</h2>
                                <p className="text-gray-400 text-[14px] font-light tracking-[0.3em] uppercase">
                                    Investment pieces for generations.
                                </p>
                            </div>
                            <button className="text-[11px] font-bold tracking-[0.4em] uppercase border-b border-white pb-2 hover:text-gray-400 hover:border-gray-400 transition-all">
                                VIEW ALL CLASSICS
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer flex flex-col"
                                >
                                    <div className="relative aspect-[10/13] overflow-hidden bg-white/5 mb-8">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                                        />

                                        {product.bestSeller && (
                                            <div className="absolute top-0 right-0 bg-white text-black px-4 py-2 text-[9px] font-black tracking-[0.2em] uppercase z-10">
                                                ICONIC
                                            </div>
                                        )}

                                        <button className="absolute bottom-8 right-8 p-4 bg-white text-black rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-black hover:text-white">
                                            <Heart size={20} strokeWidth={1} />
                                        </button>
                                    </div>

                                    <div className="space-y-4 px-2">
                                        <p className="text-[10px] text-gray-500 font-bold tracking-[0.4em] uppercase">{product.tag}</p>
                                        <h4 className="text-[18px] font-serif text-white leading-snug tracking-wide">
                                            {product.name}
                                        </h4>
                                        <div className="flex items-center justify-between pt-2">
                                            <span className="text-[18px] font-light tracking-tighter">₹{product.price}</span>
                                            <div className="w-8 h-[1px] bg-white/20"></div>
                                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                                EMI {product.emi}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ClassicModernCollection;
