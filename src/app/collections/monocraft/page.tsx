"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const MonocraftCollection = () => {
    const products = [
        { name: "Obra Sculpted End Table", price: "45,500", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800", emi: "4043" },
        { name: "Obel Accent End Table", price: "33,500", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800", emi: "2977" },
        { name: "Voro Accent End Table", price: "33,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800", emi: "2932" },
        { name: "Moro Pedestal End Table", price: "36,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800", emi: "3199" },
        { name: "Orbital Round Coffee Table", price: "45,000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800", emi: "3999" },
        { name: "Zenith Minimalist Stool", price: "18,500", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800", emi: "1644" },
        { name: "Nero Sculptural Plinth", price: "52,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800", emi: "4621" },
        { name: "Onyx Pillar Table", price: "29,000", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800", emi: "2577" },
        { name: "Eclipse Low Table", price: "39,500", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=800", emi: "3510" },
        { name: "Shadow Curve Stand", price: "24,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=800", emi: "2133" },
        { name: "Monolith Accent Block", price: "65,000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800", emi: "5777" },
        { name: "Void Circular Bench", price: "48,000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800", emi: "4266" },
        { name: "Basalt Textured Stand", price: "22,500", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800", emi: "2000" },
        { name: "Carbon Fiber Coffee Table", price: "88,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800", emi: "7821" },
        { name: "Soot Grey Side Cube", price: "12,000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800", emi: "1066" },
        { name: "Ink Geometric Pedestal", price: "42,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800", emi: "3733" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                        alt="Monocraft Collection Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white w-full px-4">
                        <div className="inline-block border border-white/40 px-8 py-4 mb-6 backdrop-blur-sm">
                            <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase">
                                MONOCRAFT
                            </h1>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-serif tracking-tight mb-4">
                            Accent Table Collection
                        </h2>
                        <p className="text-sm md:text-lg font-light tracking-[0.4em] uppercase opacity-80">
                            One shade, endless form
                        </p>
                    </div>
                </section>

                {/* Description Section */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-8">
                    <h3 className="text-3xl md:text-5xl font-serif text-gray-900">Monocraft Accent Table Collection</h3>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-4xl mx-auto">
                        Discover tables that do more than just hold your coffee. The Monocraft Collection adds style,
                        personality, and a touch of art to every corner of your home.
                    </p>
                    <div className="w-24 h-[1px] bg-gray-200 mx-auto pt-8"></div>
                </section>

                {/* Explore More Section */}
                <section className="pb-32 px-4 sm:px-8 md:px-16 lg:px-20">
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
                                    <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-red-500 hover:scale-110">
                                        <Heart size={18} />
                                    </button>
                                    {product.bestSeller && (
                                        <div className="absolute top-0 left-0 bg-black text-white text-[10px] px-4 py-1.5 font-bold tracking-widest">
                                            BEST SELLER
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">{product.tag}</span>
                                    <h4 className="text-[16px] text-gray-900 font-medium group-hover:text-black transition-colors">
                                        {product.name}
                                    </h4>
                                    <div className="space-y-1">
                                        <p className="text-[17px] font-bold text-gray-900">₹{product.price}</p>
                                        <p className="text-[12px] text-gray-500 font-light italic">
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

export default MonocraftCollection;
