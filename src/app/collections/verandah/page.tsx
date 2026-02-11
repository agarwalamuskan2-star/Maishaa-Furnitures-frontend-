"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const VerandahCollection = () => {
    const products = [
        { name: "Kaayal Rattan Accent Chair", price: "40,800 - 45,800", originalPrice: "51,000", discount: "20% Off", emi: "3625", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Dyuthi High-back Lounge Chair - Slink Green", price: "57,960", originalPrice: "72,450", discount: "20% Off", emi: "5151", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800" },
        { name: "Kaayal Rattan Accent Chair - Signature Edition", price: "40,800", originalPrice: "51,000", discount: "20% Off", emi: "3625", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800" },
        { name: "Kaayal Rattan Accent Chair - Weathered French Grey", price: "40,800", originalPrice: "51,000", discount: "20% Off", emi: "3625", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800" },
        { name: "Verandah Rattan Swing", price: "85,000", originalPrice: "1,06,250", discount: "20% Off", emi: "7555", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Nila Rattan Center Table", price: "28,400", originalPrice: "35,500", discount: "20% Off", emi: "2524", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800" },
        { name: "Prussian Classic Rattan Sofa", price: "1,45,000", originalPrice: "1,81,250", discount: "20% Off", emi: "12888", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800" },
        { name: "Verandah Side Credenza", price: "64,000", originalPrice: "80,000", discount: "20% Off", emi: "5688", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Kaayal Bar Stool", price: "18,900", originalPrice: "23,625", discount: "20% Off", emi: "1680", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Radiant Dining Chair", price: "22,500", originalPrice: "28,125", discount: "20% Off", emi: "2000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800" },
        { name: "Verandah Lounge Ottoman", price: "12,400", originalPrice: "15,500", discount: "20% Off", emi: "1102", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Prussian Nesting Tables", price: "32,800", originalPrice: "41,000", discount: "20% Off", emi: "2915", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800" },
        { name: "Kaayal High-Back Relaxer", price: "72,000", originalPrice: "90,000", discount: "20% Off", emi: "6400", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Verandah Woven Daybed", price: "1,15,000", originalPrice: "1,43,750", discount: "20% Off", emi: "10222", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Radiant Corner Shelf", price: "15,600", originalPrice: "19,500", discount: "20% Off", emi: "1386", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Nila Compact Stool", price: "9,800", originalPrice: "12,250", discount: "20% Off", emi: "871", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000"
                        alt="Verandah Collection Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </section>

                {/* Narrative Section */}
                <section className="py-20 px-4 max-w-5xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">Verandah Collection</h1>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-4xl mx-auto">
                        Crafted pieces that tell a story! Radiant Rattan series in Verandah collection celebrates the skilled
                        craftsmanship of artisans, especially with it's Prussian Classic version! Age-old rattan furniture
                        designs with a modern twist!
                    </p>
                </section>

                {/* Signature Piece Section */}
                <section className="bg-[#fcfcfc] overflow-hidden">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 md:p-24 flex flex-col justify-center space-y-12 bg-white">
                            <div className="space-y-4">
                                <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">Signature Edition</span>
                                <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                                    Kaayal Rattan Accent Chair
                                </h2>
                            </div>

                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
                                A simple occasional chair that emanates the grandeur of a vintage design!
                                Kaayal Rattan Accent Chair echoes the true nature of the backwaters in its
                                classic burnt amber finish. A perfect verandah piece of furniture that blends
                                in with any modern design.
                            </p>

                            <div className="flex items-center gap-12">
                                <button className="border border-black px-10 py-4 text-sm font-light tracking-widest hover:bg-black hover:text-white transition-all uppercase">
                                    Shop Me +
                                </button>

                                <div className="flex items-center gap-6">
                                    <button className="p-2 hover:text-gray-400 transition-colors">
                                        <ChevronLeft size={24} strokeWidth={1} />
                                    </button>
                                    <span className="text-sm font-light tracking-widest">1 / 2</span>
                                    <button className="p-2 hover:text-gray-400 transition-colors">
                                        <ChevronRight size={24} strokeWidth={1} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square lg:aspect-auto h-full min-h-[500px]">
                            <Image
                                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200"
                                alt="Kaayal Rattan Accent Chair"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore Grid - 4 Rows */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-20 text-center md:text-left">Shop now</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-24">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden mb-6">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-red-500">
                                            <Heart size={18} />
                                        </button>
                                        {product.bestSeller && (
                                            <div className="absolute top-0 left-0 bg-black text-white text-[10px] px-4 py-1.5 font-bold tracking-widest uppercase">
                                                BEST SELLER
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">{product.tag}</span>
                                        <div className="space-y-2">
                                            <h4 className="text-[17px] text-gray-900 font-medium group-hover:text-black transition-colors min-h-[44px]">
                                                {product.name}
                                            </h4>
                                            <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>
                                        </div>
                                        <p className="text-[12px] text-orange-600 font-light italic mt-2">
                                            EMI starts from ₹ {product.emi}
                                        </p>
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

export default VerandahCollection;
