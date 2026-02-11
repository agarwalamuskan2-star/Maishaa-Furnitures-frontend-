"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const IslesOfGreeceCollection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const featuredProducts = [
        {
            name: "Irene Serenity Chest",
            description: "The Irene Serenity Chest is the epitome of refined elegance and practical design. Crafted with attention to detail, it features natural rattan drawer fronts set within a sleek wooden frame finished in a soothing pastel sea green.",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000"
        },
        {
            name: "Andros Storage Console",
            description: "The Andros Storage Console brings the calm of the Aegean Sea to your living space. With its minimalist lines and ample storage, it perfectly balances functionality with a breezy, coastal aesthetic.",
            image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=2000"
        }
    ];

    const toggleSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    };

    const products = [
        { name: "Irene Serenity Chest", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000" },
        { name: "Andros Storage Console", price: "38,000", originalPrice: "47,500", discount: "20% Off", emi: "3377", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000" },
        { name: "Heron Display Console", price: "52,000", originalPrice: "65,000", discount: "20% Off", emi: "4622", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000" },
        { name: "Kleon Storage Console", price: "48,000", originalPrice: "60,000", discount: "20% Off", emi: "4266", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000" },
        { name: "Mykonos Sideboard", price: "68,000", originalPrice: "85,000", discount: "20% Off", emi: "6044", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000" },
        { name: "Santorini Bar Cabinet", price: "55,000", originalPrice: "68,750", discount: "20% Off", emi: "4888", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000" },
        { name: "Corfu Rattan Dresser", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000" },
        { name: "Naxos Media Unit", price: "58,000", originalPrice: "72,500", discount: "20% Off", emi: "5155", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
        { name: "Paros Bedside Table", price: "18,000", originalPrice: "22,500", discount: "20% Off", emi: "1600", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000" },
        { name: "Rhodes Tall Cabinet", price: "72,000", originalPrice: "90,000", discount: "20% Off", emi: "6400", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000" },
        { name: "Crete Buffet", price: "64,000", originalPrice: "80,000", discount: "20% Off", emi: "5688", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000" },
        { name: "Delos Display Cabinet", price: "85,000", originalPrice: "1,06,250", discount: "20% Off", emi: "7555", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000" },
        { name: "Milo Nightstand", price: "22,000", originalPrice: "27,500", discount: "20% Off", emi: "1955", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000" },
        { name: "Samos Chest of Drawers", price: "54,000", originalPrice: "67,500", discount: "20% Off", emi: "4800", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000" },
        { name: "Thasos Wardrobe", price: "1,10,000", originalPrice: "1,37,500", discount: "20% Off", emi: "9777", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
        { name: "Zakynthos Vanity", price: "46,000", originalPrice: "57,500", discount: "20% Off", emi: "4088", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm bg-[#e8ebe9]">
                        <Image
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop"
                            alt="Isles of Greece Hero"
                            fill
                            className="object-cover opacity-90"
                            priority
                        />
                        <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center text-center px-4">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-8xl leading-none font-light tracking-wide uppercase text-gray-800 mb-4"
                            >
                                ISLES OF<br />GREECE
                            </motion.h1>
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-sm md:text-xl font-light tracking-[0.2em] uppercase text-gray-600 max-w-2xl"
                            >
                                STORAGE INSPIRED BY<br />COASTAL SERENITY
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
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900">Isles of Greece</h2>
                        <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-3xl mx-auto">
                            A collection sets to raise a toast on the serene beauty of the Greek islands,
                            "Isles of Greece" triumphs with its artisanal craftsmanship. The soft palette
                            of pastel greens and sandy beiges evokes the tranquil essence of a coastal retreat.
                        </p>
                    </motion.div>
                </section>

                {/* Featured Product Slider Section - Added based on request */}
                <section className="pb-24 pt-0 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto bg-[#f9f9f9] rounded-sm overflow-hidden">
                        <div className="flex flex-col lg:flex-row h-full">

                            {/* Content Side (Left) */}
                            <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative bg-white lg:bg-[#f9f9f9]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-8"
                                    >
                                        <h3 className="text-4xl md:text-5xl font-light text-gray-900">
                                            {featuredProducts[currentSlide].name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg font-light max-w-xl">
                                            {featuredProducts[currentSlide].description}
                                        </p>
                                        <div>
                                            <button className="px-8 py-3 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-black hover:text-white transition-all uppercase tracking-widest">
                                                Explore +
                                            </button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Slider Navigation */}
                                <div className="flex items-center gap-4 mt-16 md:absolute md:bottom-12 md:right-12">
                                    <button onClick={toggleSlide} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                                        <ChevronLeft size={20} className="text-gray-500" />
                                    </button>
                                    <span className="text-sm font-medium tracking-widest text-gray-500">
                                        {currentSlide + 1} / {featuredProducts.length}
                                    </span>
                                    <button onClick={toggleSlide} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                                        <ChevronRight size={20} className="text-gray-500" />
                                    </button>
                                </div>
                            </div>

                            {/* Image Side (Right) */}
                            <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto min-h-[500px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
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
                            </div>

                        </div>
                    </div>
                </section>

                {/* Explore More - Product Grid */}
                <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900">Explore more</h2>
                        <p className="text-gray-500 font-light text-lg">
                            Furniture to choose from our most promising range of artistries.
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
                                        <h4 className="text-[16px] font-medium text-gray-900 group-hover:text-gray-600 transition-colors leading-snug">
                                            {product.name}
                                        </h4>
                                    </div>

                                    <div className="mt-auto space-y-2">
                                        <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[13px] text-gray-400 line-through">₹{(parseInt(product.price.replace(/,/g, '')) * 1.25).toLocaleString()}</span>
                                            <span className="text-[13px] text-orange-600 font-bold">20% Off</span>
                                        </div>
                                        <p className="text-[11px] text-orange-600 font-medium tracking-wide">
                                            EMI starts from ₹ {(parseInt(product.price.replace(/,/g, '')) / 12).toFixed(0)}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Brand Banner */}
                <section className="py-24 bg-[#f9f9f9] text-center">
                    <div className="max-w-3xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-gray-900">
                            MAISHAA
                        </h2>
                        <div className="w-16 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-500 font-light italic text-lg">
                            "Where every piece tells a story of elegance and serenity."
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default IslesOfGreeceCollection;
