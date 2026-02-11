"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight } from "lucide-react";

const BenchesCollection = () => {
    const products = [
        { name: "Moon Rattan Two-Seater Bench", price: "53,000", originalPrice: "66,250", discount: "20% Off", emi: "5,557", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1000" },
        { name: "Moon Rattan Three-Seater Bench", price: "72,900", originalPrice: "91,125", discount: "20% Off", emi: "7,643", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1567016432779-094069958ad5?q=80&w=1000" },
        { name: "Moon Rattan Four-Seater Bench", price: "98,900", originalPrice: "123,625", discount: "20% Off", emi: "10,369", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000" },
        { name: "Nakashi Hand Chiseled Bench", price: "83,160", originalPrice: "92,400", discount: "10% Off", emi: "6,930", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000" },
        { name: "Nakashi Dining Bench", price: "55,000", originalPrice: "68,750", discount: "20% Off", emi: "4,583", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=1000" },
        { name: "Calypso Bolster Diwan", price: "1,15,000", originalPrice: "1,43,750", discount: "20% Off", emi: "9,583", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1550586678-f7225f03c44b?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000"
                        alt="Benches Collection Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-serif text-white mb-6"
                        >
                            Benches
                        </motion.h1>
                        <nav className="flex items-center gap-2 text-white/80 text-sm tracking-widest uppercase">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight size={14} />
                            <Link href="/furniture" className="hover:text-white transition-colors">Furniture</Link>
                            <ChevronRight size={14} />
                            <Link href="/furniture/entryway" className="hover:text-white transition-colors">Entryway</Link>
                            <ChevronRight size={14} />
                            <span className="text-white">Benches</span>
                        </nav>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-4xl mx-auto text-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Elevate Your Entryway with Designer Benches
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-500 leading-relaxed text-lg font-light font-serif italic">
                            "More than just a place to sit, a premium bench is a statement of style and functionality. It bridges the gap between decor and utility, offering a welcoming touch to any space."
                        </p>
                    </div>
                </section>

                {/* Product Grid */}
                <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-[#fafafa]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-serif text-gray-900">The Collection</h2>
                            <p className="text-gray-400 font-light tracking-[0.2em] uppercase text-xs">
                                16 RESULTS FOUND
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer flex flex-col bg-white border border-gray-100"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:text-red-500 transition-colors z-10">
                                        <Heart size={18} strokeWidth={1.5} />
                                    </button>

                                    {product.bestSeller && (
                                        <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase z-10">
                                            BEST SELLER
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <span className="inline-block bg-[#f5f5f5] text-[#888] px-3 py-1 text-[9px] font-bold tracking-widest uppercase mb-3">
                                            {product.tag}
                                        </span>
                                        <h4 className="text-[15px] font-medium text-gray-900 group-hover:text-orange-600 transition-colors leading-snug">
                                            {product.name}
                                        </h4>
                                    </div>

                                    <div className="mt-auto space-y-2">
                                        <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>

                                        <div className="flex items-center gap-2">
                                            <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                            <span className="text-[13px] text-orange-500 font-bold">{product.discount}</span>
                                        </div>

                                        <p className="text-[11px] text-orange-500 font-medium tracking-wide">
                                            EMI starts from ₹ {product.emi}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* BOTTOM CONTENT SECTION - STYLED PER REQUESTED SCREENSHOT */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Discover the Art of Seating: Premium Benches for Every Space
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    A premium bench is an incredibly versatile piece of furniture that can transform the functionality and aesthetic of any room. Whether placed in an entryway to provide a convenient spot for putting on shoes, at the foot of a bed for an extra layer of luxury, or along a dining table for a more communal feel, a well-crafted bench is both practical and beautiful.
                                </p>
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    At Maishaa, we've curated a collection of benches that celebrate exceptional craftsmanship and timeless design. From the delicate weave of natural rattan to the robust elegance of hand-chiseled solid wood, each piece is designed to be a focal point in your home, reflecting your personal style while offering enduring value.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Choosing the Perfect Bench: A Guide to Style and Utility
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Entryway Elegance:</span> For foyers and mudrooms, look for benches that offer a slim profile to fit comfortably without obstructing movement. Consider designs with built-in storage or a lower shelf to keep the area organized.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Dining & Living:</span> Benches can replace traditional chairs to create a modern, open feel in dining areas. In the living room, a statement bench like our Nakashi series can serve as extra seating or even a low-profile coffee table alternative.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Material & Finish:</span> Our use of premium materials like East European Ashwood and natural rattan ensures each bench is a masterpiece of texture and durability. Choose from deep finishes like Carbon Black or the warmth of Burnt Amber to suit your existing decor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Why Choose Maishaa's Benches?
                            </h3>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    We believe that furniture should be more than just functional; it should be an expression of art. Our benches are handcrafted by skilled artisans who pay meticulous attention to every joint and finish. By choosing Maishaa, you are investing in a piece that combines the best of heritage craftsmanship with contemporary modern aesthetics.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BenchesCollection;
