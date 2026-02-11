"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const KobblerCollection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const featuredProducts = [
        {
            name: "Kobbler Stitch Ottoman",
            description: "The Kobbler Stitch Ottoman celebrates the art of artisanal leatherwork. Featuring visible, handcrafted stitching and premium top-grain leather, it's a piece that gains character with age, embodying the rugged elegance of traditional cobbling.",
            image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2000"
        },
        {
            name: "Kobbler Leather Lounge",
            description: "Designed for ultimate relaxation, the Kobbler Leather Lounge features a deep-seated form wrapped in supple, hand-finished leather. Its warm tones and textured feel bring a sense of grounded luxury to any study or living space.",
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000"
        }
    ];

    const toggleSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    };

    const products = [
        { name: "Kobbler Low Ottoman", price: "24,000", originalPrice: "30,000", discount: "20% Off", emi: "2133", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000" },
        { name: "Kobbler High Stool", price: "18,500", originalPrice: "23,125", discount: "20% Off", emi: "1644", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000" },
        { name: "Kobbler Leather Bench", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000" },
        { name: "Kobbler Storage Trunk", price: "38,000", originalPrice: "47,500", discount: "20% Off", emi: "3377", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000" },
        { name: "Kobbler Side Chair", price: "15,000", originalPrice: "18,750", discount: "20% Off", emi: "1333", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000" },
        { name: "Kobbler Console Unit", price: "52,000", originalPrice: "65,000", discount: "20% Off", emi: "4622", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000" },
        { name: "Kobbler Sideboard", price: "72,000", originalPrice: "90,000", discount: "20% Off", emi: "6400", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000" },
        { name: "Kobbler Magazine Rack", price: "12,000", originalPrice: "15,000", discount: "20% Off", emi: "1066", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
        { name: "Kobbler Coffee Table", price: "35,000", originalPrice: "43,750", discount: "20% Off", emi: "3111", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000" },
        { name: "Kobbler End Table", price: "22,000", originalPrice: "27,500", discount: "20% Off", emi: "1955", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000" },
        { name: "Kobbler Bedhead - King", price: "85,000", originalPrice: "1,06,250", discount: "20% Off", emi: "7555", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000" },
        { name: "Kobbler Vanity Stool", price: "16,500", originalPrice: "20,625", discount: "20% Off", emi: "1466", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000" },
        { name: "Kobbler Entryway Bench", price: "28,000", originalPrice: "35,000", discount: "20% Off", emi: "2488", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000" },
        { name: "Kobbler Table Lamp", price: "14,000", originalPrice: "17,500", discount: "20% Off", emi: "1244", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
        { name: "Kobbler Desk Chair", price: "32,000", originalPrice: "40,000", discount: "20% Off", emi: "2844", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000" },
        { name: "Kobbler Leather Mirror", price: "18,000", originalPrice: "22,500", discount: "20% Off", emi: "1600", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm bg-[#2c1e14]">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop"
                            alt="Kobbler Collection Hero"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center text-center px-4">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-9xl leading-none font-light tracking-wide uppercase text-white mb-4"
                            >
                                KOBBLER
                            </motion.h1>
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-sm md:text-xl font-light tracking-[0.4em] uppercase text-white/80 max-w-2xl bg-black/30 backdrop-blur-md p-4 rounded-sm"
                            >
                                THE ART OF ARTISANAL LEATHER
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-4xl mx-auto text-center text-gray-800">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-light">Kobbler Collection</h2>
                        <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-3xl mx-auto">
                            Inspired by the rough-hewn charm of old-world workshops, the Kobbler collection is a
                            celebration of raw materials and hand-finished details. Our signature leather pieces
                            are defined by exposed stitching, textured surfaces, and a rich, earthy palette.
                            It's design that feels lived-in, soulful, and deeply authentic.
                        </p>
                    </motion.div>
                </section>

                {/* Featured Product Slider Section */}
                <section className="pb-24 pt-0 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto bg-[#f9f7f4] rounded-sm overflow-hidden border border-gray-100">
                        <div className="flex flex-col lg:flex-row h-full">

                            {/* Content Side (Left) */}
                            <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative bg-white">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-8"
                                    >
                                        <h3 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                                            {featuredProducts[currentSlide].name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg font-light max-w-xl">
                                            {featuredProducts[currentSlide].description}
                                        </p>
                                        <div>
                                            <button className="px-10 py-4 bg-gray-900 text-white text-sm font-medium hover:bg-black transition-all uppercase tracking-widest">
                                                Explore Craft +
                                            </button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Slider Navigation */}
                                <div className="flex items-center gap-6 mt-16 md:absolute md:bottom-12 md:right-12">
                                    <button onClick={toggleSlide} className="p-2 border border-gray-200 hover:bg-gray-100 rounded-full transition-colors">
                                        <ChevronLeft size={20} className="text-gray-900" />
                                    </button>
                                    <span className="text-sm font-bold tracking-widest text-gray-400">
                                        0{currentSlide + 1} / 0{featuredProducts.length}
                                    </span>
                                    <button onClick={toggleSlide} className="p-2 border border-gray-200 hover:bg-gray-100 rounded-full transition-colors">
                                        <ChevronRight size={20} className="text-gray-900" />
                                    </button>
                                </div>
                            </div>

                            {/* Image Side (Right) */}
                            <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto min-h-[500px] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        transition={{ duration: 1 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={featuredProducts[currentSlide].image}
                                            alt={featuredProducts[currentSlide].name}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Explore More - Product Grid */}
                <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-t border-gray-50">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900">The Kobbler Archive</h2>
                        <p className="text-gray-500 font-light text-lg">
                            Durable pieces crafted for a lifetime of stories.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: (idx % 4) * 0.05 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-square overflow-hidden mb-6 bg-[#f9f9f9]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <button className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:text-red-500 text-gray-400">
                                        <Heart size={20} strokeWidth={1.5} />
                                    </button>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-gray-900 text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase shadow-sm">
                                            {product.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2 text-center px-2">
                                    <h3 className="text-lg font-light text-gray-900 group-hover:text-gray-600 transition-colors uppercase tracking-tight">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900 tabular-nums">₹{product.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Brand Banner */}
                <section className="py-28 bg-[#2c1e14] text-center text-white/90">
                    <div className="max-w-3xl mx-auto px-4 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-light tracking-[0.4em] uppercase">
                            MAISHAA
                        </h2>
                        <div className="w-12 h-px bg-white/30 mx-auto"></div>
                        <p className="text-white/60 font-light italic text-lg leading-relaxed">
                            "True luxury is in the details you can feel."
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default KobblerCollection;
