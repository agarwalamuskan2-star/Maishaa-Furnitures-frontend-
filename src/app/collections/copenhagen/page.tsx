"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const CopenhagenCurves = () => {
    const products = [
        { name: "Copenhagen Sculptural Armchair - Black", price: "95,000", originalPrice: "1,18,750", discount: "20% Off", emi: "8444", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Nordic Wave Lounge Chair - Tan", price: "72,000", originalPrice: "90,000", discount: "20% Off", emi: "6400", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800" },
        { name: "Copenhagen Minimalist Dining Chair", price: "24,500", originalPrice: "30,625", discount: "20% Off", emi: "2177", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800" },
        { name: "Oslo Curved Lounge Chair", price: "88,000", originalPrice: "1,10,000", discount: "20% Off", emi: "7822", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Scandinavian Organic Sideboard", price: "1,08,000", originalPrice: "1,35,000", discount: "20% Off", emi: "9600", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Copenhagen Loop Pedestal", price: "18,400", originalPrice: "23,000", discount: "20% Off", emi: "1635", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Nordic Minimalist Bench", price: "32,000", originalPrice: "40,000", discount: "20% Off", emi: "2844", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Bergen Arc Floor Lamp", price: "24,500", originalPrice: "30,625", discount: "20% Off", emi: "2177", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800" },
        { name: "Fjord Curved Bed Frame", price: "1,95,000", originalPrice: "2,43,750", discount: "20% Off", emi: "17333", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Stark White Organic Desk", price: "88,000", originalPrice: "1,10,000", discount: "20% Off", emi: "7822", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800" },
        { name: "Copenhagen Floating Shelves", price: "14,500", originalPrice: "18,125", discount: "20% Off", emi: "1288", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Nordic Sculpt Console", price: "64,000", originalPrice: "80,000", discount: "20% Off", emi: "5688", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1565412850626-25f07b72982d?q=80&w=800" },
        { name: "Aurora Curved Wall Mirror", price: "12,800", originalPrice: "16,000", discount: "20% Off", emi: "1137", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800" },
        { name: "Copenhagen Fabric Ottoman", price: "38,500", originalPrice: "48,125", discount: "20% Off", emi: "3422", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Fjord Low-Mid TV Unit", price: "72,400", originalPrice: "90,500", discount: "20% Off", emi: "6435", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Hygge Sheepskin Stool", price: "21,000", originalPrice: "26,250", discount: "20% Off", emi: "1866", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000"
                            alt="Copenhagen Curves Hero"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-white/20" />
                        <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center text-center px-4">
                            <span className="text-sm md:text-xl font-light tracking-[0.5em] text-gray-800 uppercase mb-4">SIGNATURE LINE</span>
                            <h1 className="text-6xl md:text-[8rem] font-bold text-gray-900 leading-tight tracking-tighter lowercase mb-4 font-light italic">
                                copenhagen curves
                            </h1>
                            <p className="text-sm md:text-xl font-light tracking-[0.3em] text-gray-700 uppercase max-w-4xl border-t border-gray-400 pt-4">
                                THE NEW LANGUAGE OF SCANDINAVIAN SCULPTURAL COMFORT
                            </p>
                        </div>
                    </div>
                </section>

                {/* Narrative Section - Centered content matching screenshot */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-8">
                    <h3 className="text-4xl md:text-6xl font-serif text-gray-900">Copenhagen Curves</h3>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-4xl mx-auto">
                        The art of modern seating, rooted in Scandinavian elegance. This collection combines sleek,
                        sculptural designs with exceptional comfort, inspired by the timeless simplicity of Nordic design.
                        Graceful curves, meticulous craftsmanship, and high-quality materials define each piece, making it
                        a perfect addition to dining rooms, living spaces, or modern offices.
                    </p>
                </section>

                {/* Explore More Section - 4 Rows */}
                <section className="pb-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
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

                                <div className="space-y-4 text-center">
                                    <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">{product.tag}</span>
                                    <h4 className="text-[16px] text-gray-900 font-medium group-hover:text-black transition-colors line-clamp-2 min-h-[48px]">
                                        {product.name}
                                    </h4>
                                    <div className="pt-2">
                                        <div className="flex flex-col items-center gap-1">
                                            <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[14px] text-gray-400 line-through">₹{product.originalPrice}</p>
                                                <p className="text-[14px] text-orange-600 font-medium">{product.discount}</p>
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-orange-600 font-light italic mt-2">
                                            EMI starting from ₹ {product.emi}
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

export default CopenhagenCurves;
