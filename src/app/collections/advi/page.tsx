"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const AdviCollection = () => {
    const products = [
        { name: "Vanity Circle", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
        { name: "Course 4 Oval Dining Table", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "11111", tag: "DESIGNER'S PICK", bestSeller: false, image: "https://images.unsplash.com/photo-1577145940719-0c7670d95af2?q=80&w=800" },
        { name: "Setl Nesting Coffee Table (Set of 2)", price: "58,000", originalPrice: "72,500", discount: "20% Off", emi: "5155", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Nestling Console Table", price: "38,500", originalPrice: "48,125", discount: "20% Off", emi: "3422", tag: "BEST SELLER", bestSeller: true, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Situate Accent Chair", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Advi Minimalist Sofa", price: "1,65,000", originalPrice: "2,06,250", discount: "20% Off", emi: "14666", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800" },
        { name: "Raw Oak Sideboard", price: "82,000", originalPrice: "1,02,500", discount: "20% Off", emi: "7288", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Circular Poise Stool", price: "12,400", originalPrice: "15,500", discount: "20% Off", emi: "1102", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Advi Lounge Settee", price: "92,000", originalPrice: "1,15,000", discount: "20% Off", emi: "8177", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Elegance Bench", price: "34,000", originalPrice: "42,500", discount: "20% Off", emi: "3022", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800" },
        { name: "Raw Wood Media Unit", price: "72,000", originalPrice: "90,000", discount: "20% Off", emi: "6400", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Advi Nesting Stools", price: "18,500", originalPrice: "23,125", discount: "20% Off", emi: "1644", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Linear Bookshelf", price: "52,000", originalPrice: "65,000", discount: "20% Off", emi: "4622", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
        { name: "Poised Dining Chair", price: "24,000", originalPrice: "30,000", discount: "20% Off", emi: "2133", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Advi Coffee Float", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Raw Texture Rug", price: "28,000", originalPrice: "35,000", discount: "20% Off", emi: "2488", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2000"
                        alt="Advi Collection Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/5" />

                    {/* Overlay Identity */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="space-y-4"
                        >
                            <h1 className="text-white text-6xl md:text-9xl font-light tracking-[0.2em] uppercase">ADVI</h1>
                            <p className="text-white text-lg md:text-2xl font-light tracking-[0.3em] lowercase italic">
                                a collection of raw elegance
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-6xl mx-auto text-center space-y-10">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-[0.2em] uppercase">A D V I Series</h2>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-2xl font-light max-w-5xl mx-auto">
                        Defined by the poise and balance of stance, Advi collection is an ode to the craftsmanship in
                        furniture. It's raw and sophisticated at the same time – exuding warmth, invoking memories of
                        glorious wood work and yet reflecting the modern space that it is meant to be contained in.
                    </p>
                </section>

                {/* Designer's Choice - Situate Section */}
                <section className="bg-[#fcfcfc] overflow-hidden">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 md:p-32 flex flex-col justify-center space-y-12 bg-white">
                            <div className="space-y-4">
                                <span className="text-xs font-bold tracking-[0.3em] text-gray-300 uppercase">DESIGNER'S CHOICE</span>
                                <h2 className="text-4xl md:text-7xl font-serif text-gray-900 tracking-[0.1em] uppercase">
                                    SITUATE
                                </h2>
                            </div>

                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
                                An aesthetically minimal chair that evokes a throne-like poise. The simple,
                                angular structure magically captures an unmistakable aura of grandeur, while
                                the fine craft in wood is accentuated with delicate brass details. And with a
                                finishing touch of premium fabric – it's indeed a masterpiece to behold..
                            </p>

                            <button className="border border-black px-12 py-5 text-sm font-light tracking-[0.3em] hover:bg-black hover:text-white transition-all uppercase w-fit">
                                Explore +
                            </button>
                        </div>

                        <div className="relative aspect-square lg:aspect-auto h-full min-h-[600px] grayscale hover:grayscale-0 transition-all duration-1000">
                            <Image
                                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200"
                                alt="Situate Chair"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore Grid - 4 Rows */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto">
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-[0.1em] uppercase">Explore</h2>
                            <p className="text-gray-400 font-light tracking-[0.3em] uppercase text-xs">
                                YOUR STORIES , OUR FURNITURE .
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-24">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer p-4 border border-transparent hover:border-gray-50 transition-all"
                                >
                                    <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden mb-10">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                                            <Heart size={18} />
                                        </button>

                                        <div className="absolute top-0 left-0 bg-black/80 text-white text-[9px] px-4 py-1.5 font-bold tracking-[0.2em] uppercase">
                                            {product.tag}
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-center">
                                        <h4 className="text-[18px] text-gray-900 font-normal tracking-wide group-hover:text-orange-600 transition-colors">
                                            {product.name}
                                        </h4>
                                        <div className="pt-2">
                                            <p className="text-[17px] font-bold text-gray-900">₹{product.price}</p>
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

export default AdviCollection;
