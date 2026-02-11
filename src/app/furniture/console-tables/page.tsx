"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight } from "lucide-react";

const ConsoleTableCollection = () => {
    const products = [
        { name: "Capitol Complex Console", price: "52,000", originalPrice: "65,000", discount: "20% Off", emi: "4622", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000" },
        { name: "Vivo Slatted Shoe Console", price: "99,920", originalPrice: "124,900", discount: "20% Off", emi: "5444", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000" },
        { name: "Rio Rattan Shoe Console", price: "95,920", originalPrice: "119,900", discount: "20% Off", emi: "10056", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000" },
        { name: "Manhattan Console - Ash Wood", price: "48,400", originalPrice: "60,500", discount: "20% Off", emi: "4302", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000" },
        { name: "Urban Organic Console Table", price: "38,000", originalPrice: "47,500", discount: "20% Off", emi: "3377", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
        { name: "Jeanneret Media Unit", price: "58,000", originalPrice: "72,500", discount: "20% Off", emi: "5155", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000"
                        alt="Console Table Collection Hero"
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
                            Console Tables
                        </motion.h1>
                        <nav className="flex items-center gap-2 text-white/80 text-sm tracking-widest uppercase">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight size={14} />
                            <Link href="/furniture" className="hover:text-white transition-colors">Furniture</Link>
                            <ChevronRight size={14} />
                            <Link href="/furniture/entryway" className="hover:text-white transition-colors">Entryway</Link>
                            <ChevronRight size={14} />
                            <span className="text-white">Console Tables</span>
                        </nav>
                    </div>
                </section>

                {/* Narrow Narrative Section */}
                <section className="py-24 px-4 max-w-4xl mx-auto text-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Create a Welcoming Entry in Style: Check Out Maishaa's Chic Entryway Consoles
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-500 leading-relaxed text-lg font-light font-serif italic">
                            "A good first impression lasts a long time. When entering a home, building, or space, the entryway console is the first thing that comes into view and has a huge role to play."
                        </p>
                    </div>
                </section>

                {/* Product Grid */}
                <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-[#fafafa]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-serif text-gray-900">Premium Consoles</h2>
                            <p className="text-gray-400 font-light tracking-[0.2em] uppercase text-xs">
                                CURATED PIECES FOR YOUR ENTRYWAY
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
                                Create a Welcoming Entry in Style: Check Out Maishaa's Chic Entryway Consoles
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    A good first impression lasts a long time. When entering a home, building, or space, the entryway console is the first thing that comes into view and has a huge role to play. Entry consoles are beautiful, ornamental, or furnished tables that have a welcoming figure in all the entering ones. To capture the eyes of your guests, the entryway consoles should be aesthetically appealing and stylish to enhance the elegance of your home.
                                </p>
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    At Maishaa, we understand that your home is your sanctuary, and you want it to be the one that warms your heart and soul. To make your space beautiful, you have to make it adorable with the best and most stylish collection of interior pieces. Maishaa gives out such furnishings that will make changes to the space of your home. Buy the interior necessities from Maishaa to give it a look of elegance.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Change the Look of Your Entry with Entryway Consoles from Maishaa
                            </h3>
                            <div className="space-y-8">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    To make a grand impression about the home, the entryway console has to be at the top of its game to be a game-changer. It may appear as a functional piece of the globe, but it is actually the piece that sets the tone of the rest of the home. The key features of the entryway console are the following to add a touch of elegance and style to the entire space.
                                </p>

                                <div className="space-y-10 pt-4">
                                    <div className="space-y-3">
                                        <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                            <span className="font-bold">Size:</span> Entryway consoles are available in different sizes, and if you have a grand and large one, it will make a bold statement. A grand console can be the focal point of the room and can provide ample space for displaying decorative items like baskets, drawers, and so on.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                            <span className="font-bold">Shape:</span> The shape of your console can be a significant factor in creating a good-looking entryway. Curved and rounded shapes can add a touch of softness and organic flow to your space, while sharp, linear designs offer a structured modern edge.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                            <span className="font-bold">Material:</span> Choose from our range of premium woods including temperature-treated East European Ashwood and Teak. Durable finishes ensure that your console remains a centerpiece for decades to come.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ConsoleTableCollection;
