"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const MianziCollection = () => {
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
                                className="text-sm md:text-xl font-light tracking-[0.4em] uppercase text-gray-700 max-w-2xl bg-white/40 backdrop-blur-sm p-4 rounded-sm border border-white/20"
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

                {/* Explore More - Product Grid */}
                <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-t border-gray-50">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">The Mianzi Edit</h2>
                        <p className="text-gray-500 font-light text-lg">
                            Conscious pieces for a mindful home.
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
                                    {/* Top-Right Heart Icon */}
                                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:text-red-500 transition-colors z-10">
                                        <Heart size={18} strokeWidth={1.5} />
                                    </button>

                                    {/* Top-Left Status Tag */}
                                    {product.bestSeller && (
                                        <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase z-10">
                                            BEST SELLER
                                        </div>
                                    )}
                                    {!product.bestSeller && product.tag === "READY TO SHIP" && (
                                        <div className="absolute top-0 left-0 bg-[#2d5a27] text-white px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase z-10">
                                            RECOMMENDED
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <span className="inline-block bg-[#f5f5f5] text-[#888] px-3 py-1 text-[9px] font-bold tracking-widest uppercase mb-3">
                                            {product.tag}
                                        </span>
                                        <h4 className="text-[15px] font-medium text-gray-900 group-hover:text-green-800 transition-colors leading-snug">
                                            {product.name}
                                        </h4>
                                    </div>

                                    <div className="mt-auto space-y-2">
                                        <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>

                                        <div className="flex items-center gap-2">
                                            <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                            <span className="text-[13px] text-orange-500 font-bold">{product.discount} Off</span>
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



            </main>

            <Footer />
        </div>
    );
};

export default MianziCollection;
