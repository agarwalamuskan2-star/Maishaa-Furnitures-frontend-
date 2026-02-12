"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

/**
 * TROPICAL MODERN COLLECTION PAGE
 * 
 * Features a lush, airy aesthetic with natural materials and modern silhouettes.
 */

const TropicalModernCollection = () => {
    useEffect(() => {
        document.title = "Tropical Modern Collection | Maishaa";
    }, []);

    const products = [
        {
            name: "Rattan Wave Lounge Chair",
            price: "42,600",
            emi: "3608",
            tag: "READY TO SHIP",
            bestSeller: true,
            image: "/images/outdoor/seating-cat.png"
        },
        {
            name: "Bamboo Haven Dining Table",
            price: "1,18,000",
            emi: "9871",
            tag: "MADE TO ORDER",
            bestSeller: false,
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "Jungle Leaf Mirror",
            price: "18,430",
            emi: "1550",
            tag: "READY TO SHIP",
            bestSeller: false,
            image: "/images/outdoor/accessories-cat.png"
        },
        {
            name: "Island Teak Sideboard",
            price: "78,900",
            emi: "6611",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "/images/outdoor/hero.png"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                {/* Hero Section - Lush & Airy */}
                <section className="w-full mb-20 relative h-[75vh] overflow-hidden group">
                    <Image
                        src="/images/outdoor/hero.png"
                        alt="Tropical Modern Collection"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/5" />

                    {/* Text Overlay - Replicating "Nature & Sophistication" style */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/80 backdrop-blur-md p-12 md:p-20 space-y-4 max-w-2xl border border-white/40 shadow-2xl"
                        >
                            <p className="text-[12px] md:text-[14px] font-medium tracking-[0.5em] text-green-800 uppercase">
                                Exotic & Refined
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight uppercase tracking-normal font-light">
                                Tropical<br />Modern
                            </h1>
                            <div className="pt-10">
                                <button className="bg-green-900 text-white px-12 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-green-800 transition-all rounded-full">
                                    BRING NATURE HOME
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-green-900 italic">Tropical Modern</h2>
                        <p className="text-gray-600 text-[18px] md:text-[22px] leading-relaxed font-light italic max-w-4xl mx-auto">
                            Tropical Modern is the art of balancing exotic raw materials with sleek, contemporary architecture.
                            It's about open-air living, where the boundary between interior and jungle disappears, replaced by
                            natural textures like cane, teak, and linen under the soft canopy of modern luxury.
                        </p>
                    </motion.div>
                </section>

                {/* Pro Tip Section */}
                <section className="py-32 overflow-hidden bg-[#f4f7f4]">
                    <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="lg:col-span-5 space-y-10"
                            >
                                <div className="space-y-4">
                                    <span className="text-[12px] font-bold text-green-700 tracking-[0.4em] uppercase">Pro Tip 1</span>
                                    <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">Organic Flow</h2>
                                </div>
                                <p className="text-gray-700 text-[18px] leading-relaxed font-light">
                                    Let nature dictate the layout. Use large-scale greenery as architectural elements
                                    and pair them with low-profile furniture to maintain an unobstructed view of
                                    the horizon. Natural light is your best accessory.
                                </p>
                                <div className="pt-6">
                                    <button className="border-b-2 border-green-900 pb-2 text-[12px] font-black tracking-[0.3em] uppercase hover:text-green-700 hover:border-green-700 transition-all text-green-900">
                                        View Styling Guide
                                    </button>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2 }}
                                viewport={{ once: true }}
                                className="lg:col-span-7 relative aspect-[16/10] w-full"
                            >
                                <Image
                                    src="/images/outdoor/seating-cat.png"
                                    alt="Tropical Modern Space"
                                    fill
                                    className="object-cover shadow-2xl rounded-sm"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Product Grid Section */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto">
                        <div className="text-center mb-24 space-y-6">
                            <h2 className="text-4xl md:text-6xl font-serif text-gray-900">Exotic Curation</h2>
                            <p className="text-gray-400 text-[16px] font-light tracking-widest italic uppercase">
                                Handcrafted pieces for an eternal summer.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer flex flex-col"
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/10 transition-all duration-500" />

                                        {product.bestSeller && (
                                            <div className="absolute top-4 left-4 bg-green-900 text-white px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase z-10">
                                                MOST LOVED
                                            </div>
                                        )}

                                        <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:text-red-500 transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                            <Heart size={20} strokeWidth={1} />
                                        </button>

                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-sm py-4 text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <span className="text-[11px] font-black tracking-[0.4em] text-gray-800 uppercase">
                                                QUICK VIEW
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 px-2">
                                        <p className="text-[10px] text-green-700 font-bold tracking-[0.3em] uppercase">{product.tag}</p>
                                        <h4 className="text-[16px] font-serif text-gray-900 leading-snug group-hover:text-green-800 transition-colors uppercase">
                                            {product.name}
                                        </h4>
                                        <div className="flex items-baseline gap-4 pt-2">
                                            <span className="text-[20px] font-light text-gray-950 tracking-tighter">₹{product.price}</span>
                                            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest bg-gray-50 px-2 py-0.5">
                                                EMI ₹{product.emi}
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

export default TropicalModernCollection;
