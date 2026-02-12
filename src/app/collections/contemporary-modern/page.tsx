"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ChevronRight, Heart } from "lucide-react";

// Product Type Definition
interface Product {
    name: string;
    price: string;
    originalPrice?: string;
    emi?: string;
    tag?: string;
    image: string;
    bestSeller?: boolean;
}

const ContemporaryModernCollection = () => {
    useEffect(() => {
        document.title = "Contemporary Modern Collection | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Zaayah Modular Sofa",
            price: "2,45,000",
            originalPrice: "2,85,000",
            emi: "20,416",
            tag: "MADE TO ORDER",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000",
            bestSeller: true
        },
        {
            name: "Orbital Round Dining Table",
            price: "1,12,000",
            originalPrice: "1,35,000",
            emi: "9,333",
            tag: "READY TO SHIP",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000",
            bestSeller: true
        },
        {
            name: "Lydia Contemporary Chair",
            price: "32,500",
            originalPrice: "38,000",
            emi: "2,708",
            tag: "READY TO SHIP",
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000",
            bestSeller: false
        },
        {
            name: "Monolith Coffee Table",
            price: "45,000",
            originalPrice: "52,000",
            emi: "3,750",
            tag: "MADE TO ORDER",
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
            bestSeller: false
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white overflow-x-hidden text-gray-900 font-sans">
            <Header />

            <main className="flex-1">
                {/* 1. Breadcrumb */}
                <div className="pt-4 pb-2 px-6 md:px-12 lg:px-20">
                    <nav className="flex items-center gap-2 text-[10px] md:text-[11px] text-gray-400 uppercase tracking-widest font-medium">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={10} />
                        <Link href="/collections" className="hover:text-black transition-colors">Collections</Link>
                        <ChevronRight size={10} />
                        <span className="text-black">Contemporary Modern</span>
                    </nav>
                </div>

                {/* 2. Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[85vh] bg-[#f4f4f4] overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop"
                            alt="Contemporary Modern Hero"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/5"></div>
                    </div>

                    {/* Floating Text Overlay */}
                    <div className="absolute top-1/2 left-12 md:left-24 -translate-y-1/2 z-10 max-w-lg">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-2"
                        >
                            <span className="text-white text-sm md:text-lg font-serif italic tracking-wide">Trending & Chic</span>
                            <h1 className="text-5xl md:text-8xl font-serif text-white leading-none tracking-tighter">
                                CONTEMPORARY<br />MODERN
                            </h1>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Introduction Text */}
                <section className="py-24 md:py-32 px-4 sm:px-8 bg-white text-center">
                    <div className="max-w-4xl mx-auto space-y-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-[32px] font-serif uppercase tracking-[0.2em] text-[#1a1a1a]"
                        >
                            CONTEMPORARY MODERN
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#666] leading-relaxed text-lg md:text-xl font-light font-sans max-w-5xl mx-auto"
                        >
                            Defined by its simplicity, Contemporary Modern style features prominent use of clean lines and open spaces with a focus on form of the piece. The furniture in a Contemporary design usually lacks ornamentation and uses rounded edges to add a soft touch.
                        </motion.p>
                    </div>
                </section>

                {/* 4. Pro Tip Section */}
                <section className="bg-white py-0 border-y border-gray-100">
                    <div className="flex flex-col md:flex-row min-h-[600px]">
                        {/* Text Side */}
                        <div className="w-full md:w-5/12 flex items-center justify-center p-12 md:p-24 bg-[#fbfbfb]">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-10"
                            >
                                <div className="space-y-4">
                                    <span className="text-[11px] tracking-[0.3em] font-bold text-gray-400 uppercase block mb-4">
                                        Pro Tip 1
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] leading-tight tracking-tight">
                                        Bold Visible Lines
                                    </h2>
                                    <p className="text-[#555] leading-loose text-[17px] font-light max-w-md">
                                        Strong lines, be it horizontal, vertical or curved, are a prominent feature in any contemporary space. Anchor the room with a bold yet simplistic piece, and use its form to build the rest of the space.
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 pt-4">
                                    <div className="h-[1px] w-12 bg-black"></div>
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase cursor-pointer hover:translate-x-2 transition-transform">Next Tip</span>
                                    <div className="flex gap-4 ml-auto text-sm text-gray-300">
                                        <span className="text-black">01</span>
                                        <span>/</span>
                                        <span>02</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Image Side */}
                        <div className="w-full md:w-7/12 relative min-h-[500px]">
                            <Image
                                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1400"
                                alt="Bold Visible Lines Concept"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* 5. Product Grid - Shop the Look */}
                <section className="py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] mb-6">Explore the Aesthetic</h2>
                        <div className="w-24 h-[1px] bg-black/20 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-[#fafafa] mb-6">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    {/* Top Left Badges */}
                                    {product.bestSeller && (
                                        <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 text-[9px] font-bold tracking-[0.2em] uppercase z-10">
                                            Best Seller
                                        </div>
                                    )}

                                    {/* Action Button - Heart */}
                                    <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm hover:text-red-500 hover:bg-white transition-all duration-300 z-10">
                                        <Heart size={16} strokeWidth={1.5} />
                                    </button>

                                    {/* Hover Quick View Overlay */}
                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="bg-white text-black px-8 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            Quick View
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3.5">
                                    <div className="flex">
                                        <span className="text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase border-b border-gray-100 pb-1">{product.tag}</span>
                                    </div>

                                    <h3 className="text-lg font-medium text-[#1a1a1a] group-hover:text-amber-800 transition-colors duration-300 line-clamp-1">
                                        {product.name}
                                    </h3>

                                    <div className="flex items-baseline gap-4">
                                        <span className="text-xl font-bold text-[#1a1a1a]">₹{product.price}</span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                                        )}
                                    </div>

                                    {product.emi && (
                                        <p className="text-[11px] text-amber-700 font-semibold tracking-wide uppercase italic">
                                            EMI starts from ₹ {product.emi}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 6. Luxury Footer Banner */}
                <section className="relative h-[400px] flex items-center justify-center bg-[#1a1a1a] text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                        <Image
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600"
                            alt="Contemporary Luxury"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative z-10 text-center space-y-8 px-4">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-4xl md:text-6xl font-serif italic"
                        >
                            Elevating the Modern Everyday
                        </motion.h2>
                        <button className="px-12 py-5 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 text-[11px] font-bold tracking-[0.4em] uppercase">
                            View All Style Editions
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContemporaryModernCollection;
