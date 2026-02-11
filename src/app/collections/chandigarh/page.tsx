"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const ChandigarhCollection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const featuredProducts = [
        {
            name: "The Capital Lounge Chair",
            description: "A defining piece of the Chandigarh collection, the Capital Lounge Chair features the iconic 'V' leg design. Crafted from seasoned teak wood and hand-woven natural cane, it embodies the perfect marriage of architectural form and artisanal grace.",
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000"
        },
        {
            name: "High Court Dining Chair",
            description: "Inspired by the monumental architecture of Chandigarh, this dining chair brings a sense of structure and history to your home. Its balanced proportions and raw material honesty make it a timeless addition to any modern dining space.",
            image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2000"
        }
    ];

    const toggleSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    };

    const products = [
        { name: "Capital V-Leg Chair", price: "28,500", originalPrice: "35,625", discount: "20% Off", emi: "2533", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000" },
        { name: "Committee Armchair", price: "34,000", originalPrice: "42,500", discount: "20% Off", emi: "3022", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000" },
        { name: "Floating Back Chair", price: "31,000", originalPrice: "38,750", discount: "20% Off", emi: "2755", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000" },
        { name: "Public Bench - Three Seater", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000" },
        { name: "Sukhna Lake Side Table", price: "16,500", originalPrice: "20,625", discount: "20% Off", emi: "1466", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000" },
        { name: "Geometry Coffee Table", price: "32,000", originalPrice: "40,000", discount: "20% Off", emi: "2844", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000" },
        { name: "Heritage Writing Desk", price: "68,000", originalPrice: "85,000", discount: "20% Off", emi: "6044", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000" },
        { name: "Capitol Complex Console", price: "52,000", originalPrice: "65,000", discount: "20% Off", emi: "4622", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000" },
        { name: "Sector 17 Lounge Chair", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000" },
        { name: "Modular Teak Bookshelf", price: "85,000", originalPrice: "1,06,250", discount: "20% Off", emi: "7555", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000" },
        { name: "Easy Cane Stool", price: "12,500", originalPrice: "15,625", discount: "20% Off", emi: "1111", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000" },
        { name: "Corbusier Mirror", price: "15,000", originalPrice: "18,750", discount: "20% Off", emi: "1333", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000" },
        { name: "Jeanneret Media Unit", price: "58,000", originalPrice: "72,500", discount: "20% Off", emi: "5155", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
        { name: "Open Hand Chest", price: "64,000", originalPrice: "80,000", discount: "20% Off", emi: "5688", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000" },
        { name: "Pierre Low Stool", price: "14,500", originalPrice: "18,125", discount: "20% Off", emi: "1288", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000" },
        { name: "Sun Shade Floor Lamp", price: "22,000", originalPrice: "27,500", discount: "20% Off", emi: "1955", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm bg-[#dcdcdc]">
                        <Image
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                            alt="Chandigarh Sangrah Hero"
                            fill
                            className="object-cover grayscale-0 opacity-100"
                            priority
                        />
                        <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center text-center px-4 bg-black/10">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-9xl leading-none font-light tracking-wide uppercase text-white mb-4 drop-shadow-lg"
                            >
                                CHANDIGARH<br />SANGRAH
                            </motion.h1>
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-sm md:text-xl font-light tracking-[0.4em] uppercase text-white max-w-2xl bg-black/20 backdrop-blur-md p-4 rounded-sm border border-white/20"
                            >
                                AN ARCHITECTURAL ODE TO MODERNISM
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
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 border-b border-gray-100 pb-8">Chandigarh Sangrah</h2>
                        <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-3xl mx-auto">
                            A tribute to the modernist vision of Le Corbusier and Pierre Jeanneret. The Chandigarh Sangrah
                            celebrates the raw beauty of natural materials and geometric structural honesty.
                            Characterized by the iconic 'V' and 'X' motifs, this collection brings a piece of Indian
                            architectural history into the contemporary home with seasoned teak and hand-woven cane.
                        </p>
                    </motion.div>
                </section>

                {/* Featured Product Slider Section - Included as requested */}
                <section className="pb-24 pt-0 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto bg-[#f5f5f5] rounded-sm overflow-hidden border border-gray-100">
                        <div className="flex flex-col lg:flex-row h-full">

                            {/* Content Side (Left) */}
                            <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative bg-white lg:bg-[#f5f5f5]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-8"
                                    >
                                        <div className="w-12 h-px bg-orange-600 mb-4"></div>
                                        <h3 className="text-4xl md:text-5xl font-light text-gray-900">
                                            {featuredProducts[currentSlide].name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg font-light max-w-xl">
                                            {featuredProducts[currentSlide].description}
                                        </p>
                                        <div>
                                            <button className="px-10 py-4 bg-black text-white text-sm font-medium hover:bg-orange-600 transition-all uppercase tracking-[0.2em]">
                                                View Masterpiece +
                                            </button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Slider Navigation */}
                                <div className="flex items-center gap-6 mt-16 md:absolute md:bottom-12 md:left-24">
                                    <button onClick={toggleSlide} className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-sm transition-colors border border-gray-100">
                                        <ChevronLeft size={20} className="text-gray-900" />
                                    </button>
                                    <span className="text-sm font-bold tracking-[0.3em] text-gray-400">
                                        0{currentSlide + 1} / 0{featuredProducts.length}
                                    </span>
                                    <button onClick={toggleSlide} className="p-3 bg-white hover:bg-gray-100 rounded-full shadow-sm transition-colors border border-gray-100">
                                        <ChevronRight size={20} className="text-gray-900" />
                                    </button>
                                </div>
                            </div>

                            {/* Image Side (Right) */}
                            <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto min-h-[550px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
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
                                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Explore More - Product Grid */}
                <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-t border-gray-50">
                    <div className="text-center mb-24 space-y-4">
                        <span className="text-xs font-bold tracking-[0.3em] text-orange-600 uppercase">THE ARCHIVE</span>
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900">Explore the Sangrah</h2>
                        <p className="text-gray-500 font-light text-lg">
                            Authentic recreations and inspired modernist pieces.
                        </p>
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
                                        <h4 className="text-[16px] font-medium text-gray-900 group-hover:text-orange-600 transition-colors leading-snug font-serif">
                                            {product.name}
                                        </h4>
                                    </div>

                                    <div className="mt-auto space-y-2">
                                        <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                            <span className="text-[13px] text-orange-600 font-bold">{product.discount}</span>
                                        </div>
                                        <p className="text-[11px] text-orange-600 font-medium tracking-wide">
                                            EMI starts from ₹ {product.emi}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>



            </main>

            <Footer />
        </div>
    );
};

export default ChandigarhCollection;
