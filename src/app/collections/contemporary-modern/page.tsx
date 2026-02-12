"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

/**
 * CONTEMPORARY MODERN COLLECTION PAGE
 * 
 * Implements the aesthetic from the user-provided screenshots.
 * Features a full-width hero, narrative section, pro-tip section, and product grid.
 */

const ContemporaryModernCollection = () => {
    useEffect(() => {
        document.title = "Contemporary Modern Collection | Maishaa";
    }, []);

    const products = [
        {
            name: "Caleigh Buffet Console-Burnt",
            price: "85,600",
            emi: "7211",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "/images/outdoor/hero.png"
        },
        {
            name: "Luam Dining Table",
            price: "1,42,000",
            emi: "11608",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "Moscow Upholstered Bed",
            price: "1,25,000",
            emi: "9603",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "/images/outdoor/seating-cat.png"
        },
        {
            name: "Amour Treo Pebble Console",
            price: "68,430",
            emi: "5771",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "/images/outdoor/accessories-cat.png"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                {/* Hero Section - Full Width */}
                <section className="w-full mb-20 relative h-[75vh] overflow-hidden group">
                    <Image
                        src="/images/outdoor/seating-cat.png"
                        alt="Contemporary Modern Collection"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10" />

                    {/* Text Overlay - Replicating "Trending & Chic" style */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white space-y-2"
                        >
                            <p className="text-[14px] md:text-[18px] font-light tracking-[0.2em] italic">
                                Trending & Chic
                            </p>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold leading-[0.9] uppercase tracking-tight">
                                CONTEMPORARY<br />MODERN
                            </h1>
                        </motion.div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center border-b border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-widest uppercase text-gray-900">
                            CONTEMPORARY MODERN
                        </h2>
                        <p className="text-gray-600 text-[17px] md:text-[20px] leading-relaxed font-light max-w-4xl mx-auto">
                            Defined by its simplicity, Contemporary Modern style features prominent use of clean lines and
                            open spaces with a focus on the form of the piece. The furniture in a Contemporary design usually
                            lacks ornamentation and uses rounded edges to add a soft touch.
                        </p>
                    </motion.div>
                </section>

                {/* Pro Tip Section - Side by Side with Offset */}
                <section className="py-24 overflow-hidden bg-white">
                    <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="z-10 bg-white p-8 md:p-16 lg:-mr-32"
                            >
                                <span className="text-[12px] font-bold text-gray-400 tracking-[0.3em] uppercase block mb-4">Pro Tip 1</span>
                                <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-8 uppercase tracking-tight">Bold Visible Lines</h2>
                                <p className="text-gray-600 text-[17px] leading-relaxed font-light mb-10 italic">
                                    Strong lines, be it horizontal, vertical or curved, are a prominent feature in any
                                    contemporary space. Anchor the room with a bold yet simplistic piece, and use
                                    its form to build the rest of the space.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[4/3] w-full"
                            >
                                <Image
                                    src="/images/outdoor/dining-cat.png"
                                    alt="Contemporary Style Dining"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Product Grid Section */}
                <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-20 bg-[#fafafa]">
                    <div className="max-w-[1920px] mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 uppercase tracking-tighter">Explore more</h2>
                            <p className="text-gray-500 text-[15px] font-light tracking-wide italic">
                                Pick your furniture style from our artful curations to build your dream home.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                                >
                                    <div className="relative aspect-square overflow-hidden bg-[#f3f3f3]">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white hover:text-red-500 transition-all duration-300 z-10">
                                            <Heart size={20} strokeWidth={1.5} />
                                        </button>

                                        <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                                            BEST SELLER
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4 flex flex-col items-center text-center">
                                        <div className="bg-gray-100 px-3 py-1 text-[10px] font-bold tracking-widest text-gray-500 uppercase rounded-full">
                                            {product.tag}
                                        </div>
                                        <h4 className="text-[14px] font-bold text-gray-900 uppercase tracking-wide h-10 line-clamp-2">
                                            {product.name}
                                        </h4>
                                        <div className="flex flex-col gap-1 items-center">
                                            <span className="text-[18px] font-bold text-gray-900">₹{product.price}</span>
                                            <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">
                                                EMI starts from ₹ {product.emi}
                                            </p>
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

export default ContemporaryModernCollection;
