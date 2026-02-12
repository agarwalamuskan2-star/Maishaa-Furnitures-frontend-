"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";

/**
 * READY TO SHIP - LIGHTING COLLECTION PAGE
 */

const ReadyToShipLightingPage = () => {
    useEffect(() => {
        document.title = "Ready to Ship Lighting | Maishaa";
    }, []);

    const products = [
        {
            name: "Modern Brass Table Lamp",
            price: "14,900",
            originalPrice: "18,000",
            emi: "1312",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            badge: "BEST SELLER",
            image: "/images/outdoor/seating-cat.png"
        },
        {
            name: "Minimalist Floor Lamp",
            price: "22,250",
            originalPrice: "27,500",
            emi: "1961",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            image: "/images/outdoor/accessories-cat.png"
        },
        {
            name: "Pendant Light - Rattan",
            price: "7,850",
            originalPrice: "9,500",
            emi: "692",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "Wall Sconce - Brushed Gold",
            price: "8,250",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            image: "/images/outdoor/hero.png"
        },
        {
            name: "Crystal Chandelier - 6 Lights",
            price: "89,960",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            image: "/images/outdoor/wren-chair.png"
        },
        {
            name: "Industrial Pendant Set of 3",
            price: "24,920",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            image: "/images/outdoor/dining-cat.png"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                {/* Breadcrumbs */}
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-b border-gray-50">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide uppercase">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/ready-to-ship" className="hover:text-black transition-colors">Ready to Ship</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-semibold">Lighting</span>
                    </nav>
                </div>

                {/* Main Content Section with Sidebar */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
                            <div>
                                <h3 className="text-xl font-serif text-gray-900 mb-8 border-b border-gray-100 pb-4">Browse by</h3>

                                <div className="space-y-10">
                                    {/* Product Type */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Product Type</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 group cursor-pointer text-gray-900 font-medium">
                                                <div className="w-4 h-4 border border-black rounded-sm flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-black"></div>
                                                </div>
                                                <span className="text-[14px]">Table Lamps (22)</span>
                                            </li>
                                            <li className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                <span className="text-[14px]">Decor (9)</span>
                                            </li>
                                            <li className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                <span className="text-[14px]">Pendant Lights (5)</span>
                                            </li>
                                            <li className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                <span className="text-[14px]">Cushion (5)</span>
                                            </li>
                                            <li className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                <span className="text-[14px]">Floor Lamps (4)</span>
                                            </li>
                                            <li className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                <span className="text-[14px]">Pot (4)</span>
                                            </li>
                                            <li className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                <span className="text-[14px]">Mirrors (3)</span>
                                            </li>
                                            <li className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                <span className="text-[14px]">Vases (2)</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Price */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Price</span>
                                            <Link href="#" className="text-[10px] text-gray-400 font-bold hover:text-black hover:underline transition-all">Clear</Link>
                                        </div>
                                        <div className="px-1 pt-2">
                                            <div className="h-0.5 bg-gray-200 relative mb-6">
                                                <div className="absolute left-0 right-0 h-full bg-black"></div>
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-500">
                                                    <span>Min</span>
                                                    <ChevronDown size={14} />
                                                </div>
                                                <span className="text-gray-400 uppercase text-[10px] font-bold">to</span>
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-900">
                                                    <span>₹ 300000</span>
                                                    <ChevronDown size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Discount */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Discount</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {["10% and above", "20% and above", "30% and above", "40% and above"].map((disc) => (
                                                <li key={disc} className="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black transition-colors">
                                                    <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                    <span className="text-[14px] font-light">{disc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                                <div className="space-y-2">
                                    <p className="text-gray-900 font-medium tracking-[0.1em] text-sm uppercase">
                                        80 Results
                                    </p>
                                </div>
                                <div className="flex items-center gap-6 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-950 border-b border-black pb-1 cursor-pointer">
                                    Sort: Featured
                                    <ChevronDown size={14} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
                                {products.map((product, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group cursor-pointer flex flex-col"
                                    >
                                        <div className="relative aspect-square overflow-hidden bg-[#f9f9f9] mb-6">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:text-red-500 transition-all duration-300 z-10 group/heart">
                                                <Heart size={18} strokeWidth={1} className="group-hover/heart:fill-red-500 transition-colors" />
                                            </button>

                                            <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                {product.badge && (
                                                    <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-black text-white">
                                                        {product.badge}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="absolute bottom-4 left-4">
                                                <span className="px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-sm bg-gray-100 text-gray-600">
                                                    {product.tag}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 pt-2 px-1">
                                            <h4 className="text-[15px] font-medium text-gray-800 transition-colors duration-300 leading-snug tracking-wide uppercase">
                                                {product.name}
                                            </h4>

                                            <div className="space-y-2">
                                                <div className="flex items-baseline gap-3">
                                                    <span className="text-[17px] font-bold text-gray-900 tracking-tight">₹{product.price}</span>
                                                    {product.originalPrice && (
                                                        <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                    )}
                                                </div>
                                                <p className="text-[10px] text-gray-400 font-light tracking-wide italic">
                                                    Price inclusive of all taxes | Pan India Shipping
                                                </p>
                                                {product.emi && (
                                                    <p className="text-[11px] text-orange-600 font-bold tracking-wider uppercase pt-1">
                                                        EMI starts from ₹ {product.emi}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ReadyToShipLightingPage;
