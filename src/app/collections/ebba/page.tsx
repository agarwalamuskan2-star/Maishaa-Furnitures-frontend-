"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const EbbaCollection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const featuredProducts = [
        {
            name: "Ebba Classic Sofa",
            description: "The foundation of the Ebba collection, this sofa blends mid-century modern aesthetics with contemporary comfort. Its clean, linear form is softened by slightly tapered wooden legs and plush, resilient cushioning, making it a timeless centerpiece.",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000"
        },
        {
            name: "Ebba Accent Chair",
            description: "A masterclass in organic design, the Ebba Accent Chair features a curved silhouette that cradles the body. Upholstered in premium textured fabric, it adds a touch of sophisticated softness to any room.",
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000"
        }
    ];

    const toggleSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    };

    const products = [
        { name: "Ebba Three Seater Sofa", price: "1,55,000", originalPrice: "1,93,750", discount: "20% Off", emi: "13777", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000" },
        { name: "Ebba Loveseat", price: "95,000", originalPrice: "1,18,750", discount: "20% Off", emi: "8444", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1000" },
        { name: "Ebba Lounge Chair", price: "48,000", originalPrice: "60,000", discount: "20% Off", emi: "4266", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000" },
        { name: "Ebba Ottoman", price: "22,000", originalPrice: "27,500", discount: "20% Off", emi: "1955", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000" },
        { name: "Ebba Rectangular Coffee Table", price: "38,000", originalPrice: "47,500", discount: "20% Off", emi: "3377", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000" },
        { name: "Ebba Glass Top Coffee Table", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000" },
        { name: "Ebba Console Table", price: "28,000", originalPrice: "35,000", discount: "20% Off", emi: "2488", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000" },
        { name: "Ebba Sideboard - Oak", price: "75,000", originalPrice: "93,750", discount: "20% Off", emi: "6666", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000" },
        { name: "Ebba Dining Chair", price: "18,500", originalPrice: "23,125", discount: "20% Off", emi: "1644", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000" },
        { name: "Ebba Oval Dining Table", price: "88,000", originalPrice: "1,10,000", discount: "20% Off", emi: "7822", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000" },
        { name: "Ebba Bed Frame - Queen", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "11111", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000" },
        { name: "Ebba Nightstand", price: "16,000", originalPrice: "20,000", discount: "20% Off", emi: "1422", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000" },
        { name: "Ebba Floor Mirror", price: "24,000", originalPrice: "30,000", discount: "20% Off", emi: "2133", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000" },
        { name: "Ebba Wardrobe", price: "1,45,000", originalPrice: "1,81,250", discount: "20% Off", emi: "12888", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000" },
        { name: "Ebba Desk", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000" },
        { name: "Ebba Floor Lamp", price: "32,000", originalPrice: "40,000", discount: "20% Off", emi: "2844", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm bg-[#fafafa]">
                        <Image
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                            alt="Ebba Collection Hero"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center text-center px-4">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-9xl leading-none font-light tracking-wide uppercase text-gray-900 mb-4"
                            >
                                EBBA
                            </motion.h1>
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-sm md:text-xl font-light tracking-[0.3em] uppercase text-gray-700 max-w-2xl bg-white/20 backdrop-blur-sm p-4 rounded-sm"
                            >
                                TIMELESS SCANDINAVIAN HERITAGE
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
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900">Ebba Collection</h2>
                        <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-3xl mx-auto">
                            The Ebba collection is our original exploration into the essence of minimal design.
                            It stands as a testament to the beauty found in simplicity, defined by clean lines,
                            natural textures, and a harmonious balance of form and function. This is furniture
                            that doesn't just fill a space—it creates an atmosphere of enduring peace.
                        </p>
                    </motion.div>
                </section>

                {/* Featured Product Slider Section */}
                <section className="pb-24 pt-0 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto bg-[#fafafa] rounded-sm overflow-hidden border border-gray-100">
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
                                        <h3 className="text-4xl md:text-5xl font-light text-gray-900">
                                            {featuredProducts[currentSlide].name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg font-light max-w-xl">
                                            {featuredProducts[currentSlide].description}
                                        </p>
                                        <div>
                                            <button className="px-8 py-3 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-black hover:text-white transition-all uppercase tracking-widest">
                                                Discover +
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
                <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-t border-gray-50">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900">The Ebba Edit</h2>
                        <p className="text-gray-500 font-light text-lg">
                            Curated pieces for a balanced and beautiful home.
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
                                <div className="relative aspect-square overflow-hidden mb-6 bg-[#f5f5f5]">
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
                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold tracking-widest text-black uppercase shadow-sm">
                                            {product.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2 text-center">
                                    <h3 className="text-lg font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
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

export default EbbaCollection;
