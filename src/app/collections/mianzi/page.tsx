"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const MianziCollection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const featuredProducts = [
        {
            name: "Mianzi Bamboo Floor Lamp",
            description: "A testament to sustainable elegance, the Mianzi Floor Lamp is hand-woven from ethically sourced bamboo. Its intricate lattice design creates a mesmerizing play of light and shadow, bringing a soft, organic warmth to any contemporary interior.",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2000"
        },
        {
            name: "Mianzi Woven Pendant",
            description: "Lightweight yet structurally bold, the Mianzi Woven Pendant is a sculptural masterpiece. Each strand of bamboo is carefully selected and woven by hand, resulting in a unique lighting fixture that celebrates the natural beauty of grass fibers.",
            image: "https://images.unsplash.com/photo-1543196614-e046c7d3d82e?q=80&w=2000"
        }
    ];

    const toggleSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    };

    const products = [
        { name: "Bamboo Lattice Pendant", price: "8,500", originalPrice: "10,625", discount: "20% Off", emi: "755", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
        { name: "Mianzi Desk Lamp", price: "5,800", originalPrice: "7,250", discount: "20% Off", emi: "515", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1000" },
        { name: "Woven Bamboo Stool", price: "12,000", originalPrice: "15,000", discount: "20% Off", emi: "1066", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000" },
        { name: "Mianzi Storage Basket Set", price: "4,500", originalPrice: "5,625", discount: "20% Off", emi: "400", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000" },
        { name: "Linear Bamboo Shelving", price: "28,000", originalPrice: "35,000", discount: "20% Off", emi: "2488", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000" },
        { name: "Bamboo Mirror - Round", price: "9,200", originalPrice: "11,500", discount: "20% Off", emi: "817", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000" },
        { name: "Eco-Friendly Side Table", price: "18,000", originalPrice: "22,500", discount: "20% Off", emi: "1600", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000" },
        { name: "Mianzi Coffee Table", price: "32,000", originalPrice: "40,000", discount: "20% Off", emi: "2844", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000" },
        { name: "Woven Room Divider", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000" },
        { name: "Bamboo Magazine Rack", price: "3,800", originalPrice: "4,750", discount: "20% Off", emi: "337", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
        { name: "Sustainably Sourced Armchair", price: "55,000", originalPrice: "68,750", discount: "20% Off", emi: "4888", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000" },
        { name: "Mianzi Wall Sconce", price: "4,200", originalPrice: "5,250", discount: "20% Off", emi: "373", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000" },
        { name: "Bamboo Bath Mat", price: "2,500", originalPrice: "3,125", discount: "20% Off", emi: "222", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000" },
        { name: "Mianzi Entryway Console", price: "24,000", originalPrice: "30,000", discount: "20% Off", emi: "2133", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000" },
        { name: "Woven Bamboo Tray Set", price: "3,200", originalPrice: "4,000", discount: "20% Off", emi: "284", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000" },
        { name: "Mianzi Dining Chair", price: "15,500", originalPrice: "19,375", discount: "20% Off", emi: "1377", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm bg-[#e8f5e9]">
                        <Image
                            src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2000&auto=format&fit=crop"
                            alt="Mianzi Collection Hero"
                            fill
                            className="object-cover opacity-80"
                            priority
                        />
                        <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center text-center px-4 bg-green-900/10">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-9xl leading-none font-light tracking-wide uppercase text-gray-800 mb-4"
                            >
                                MIANZI
                            </motion.h1>
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-sm md:text-xl font-light tracking-[0.4em] uppercase text-gray-700 max-w-2xl bg-white/40 backdrop-blur-md p-4 rounded-sm border border-white/20"
                            >
                                CONSCIOUS DESIGN, WOVEN BY NATURE
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900">Mianzi Collection</h2>
                        <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-3xl mx-auto">
                            Mianzi is a zero-waste initiative that explores the incredible versatility of bamboo.
                            Combining traditional weaving techniques with modern engineering, this collection
                            redefines sustainable luxury. Every piece is a celebration of the planet,
                            designed to bring a sense of natural harmony and ethnic elegance to your sanctuary.
                        </p>
                    </motion.div>
                </section>

                {/* Featured Product Slider Section */}
                <section className="pb-24 pt-0 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto bg-[#f1f8e9] rounded-sm overflow-hidden border border-green-50/50">
                        <div className="flex flex-col lg:flex-row h-full">

                            {/* Content Side (Left) */}
                            <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative bg-white lg:bg-[#f1f8e9]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-8"
                                    >
                                        <span className="text-xs font-bold tracking-[0.5em] text-green-700 uppercase">Sustainable Luxury</span>
                                        <h3 className="text-4xl md:text-5xl font-light text-gray-900">
                                            {featuredProducts[currentSlide].name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg font-light max-w-xl">
                                            {featuredProducts[currentSlide].description}
                                        </p>
                                        <div>
                                            <button className="px-10 py-4 bg-green-800 text-white text-sm font-medium hover:bg-green-900 transition-all uppercase tracking-[0.2em] shadow-lg">
                                                Explore sustainable +
                                            </button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Slider Navigation */}
                                <div className="flex items-center gap-6 mt-16 md:absolute md:bottom-12 md:right-12">
                                    <button onClick={toggleSlide} className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors border border-green-100 shadow-sm">
                                        <ChevronLeft size={20} className="text-green-800" />
                                    </button>
                                    <span className="text-sm font-bold tracking-[0.3em] text-green-900/40">
                                        {currentSlide + 1} / {featuredProducts.length}
                                    </span>
                                    <button onClick={toggleSlide} className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors border border-green-100 shadow-sm">
                                        <ChevronRight size={20} className="text-green-800" />
                                    </button>
                                </div>
                            </div>

                            {/* Image Side (Right) */}
                            <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto min-h-[500px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, filter: "blur(10px)" }}
                                        transition={{ duration: 0.8 }}
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
                                <div className="absolute inset-0 bg-green-900/5 pointer-events-none"></div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Explore More - Product Grid */}
                <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-t border-gray-50">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">The Mianzi Edit</h2>
                        <p className="text-gray-500 font-light text-lg">
                            Conscious pieces for a mindful home.
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
                                <div className="relative aspect-square overflow-hidden mb-6 bg-[#f5f5f5] rounded-sm">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <button className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:text-green-600 text-gray-400">
                                        <Heart size={20} strokeWidth={1.5} />
                                    </button>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-green-800 text-white px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase shadow-sm">
                                            {product.tag}
                                        </span>
                                    </div>
                                    {product.bestSeller && (
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] text-green-800 uppercase shadow-sm">
                                            Best Seller
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2 text-center">
                                    <h3 className="text-md font-light text-gray-900 group-hover:text-green-800 transition-colors uppercase tracking-widest">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900 tabular-nums">₹{product.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Brand Banner */}
                <section className="py-28 bg-[#2e342a] text-center text-white/90">
                    <div className="max-w-3xl mx-auto px-4 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-light tracking-[0.5em] uppercase">
                            MAISHAA
                        </h2>
                        <div className="w-16 h-px bg-white/20 mx-auto"></div>
                        <p className="text-white/60 font-light italic text-xl leading-relaxed">
                            "Rooted in nature, designed for the conscious modern soul."
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default MianziCollection;
