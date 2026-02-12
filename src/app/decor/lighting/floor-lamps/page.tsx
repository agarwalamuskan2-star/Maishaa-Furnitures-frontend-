"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";

/**
 * FLOOR LAMPS COLLECTION PAGE
 */

const FloorLampsCollection = () => {
    useEffect(() => {
        document.title = "Buy Premium Floor Lamps Online | Maishaa";
    }, []);

    const products = [
        {
            name: "Ciana Floor Lamp Nox - Set of 3",
            price: "74,400",
            originalPrice: "93,000",
            emi: "10673",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            image: "/images/outdoor/seating-cat.png"
        },
        {
            name: "Ciana Floor Lamp - Set of 3",
            price: "74,400",
            originalPrice: "93,000",
            emi: "10673",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            image: "/images/outdoor/accessories-cat.png"
        },
        {
            name: "Ciana Floor Lamp - M",
            price: "25,600",
            originalPrice: "32,000",
            emi: "3444",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "Arching Nickel Floor Lamp",
            price: "24,500",
            emi: "2161",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            image: "/images/outdoor/hero.png"
        },
        {
            name: "Tripod Walnut & Linen Floor Lamp",
            price: "19,800",
            emi: "1747",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            image: "/images/outdoor/wren-chair.png"
        },
        {
            name: "Minimalist LED Slim Floor Lamp",
            price: "15,900",
            tag: "SOLD OUT",
            status: "SOLD OUT",
            image: "/images/outdoor/seating-cat.png"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-b border-gray-50">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide uppercase">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/decor" className="hover:text-black transition-colors">Accents</Link>
                        <ChevronRight size={12} />
                        <span className="hover:text-black transition-colors">Lighting</span>
                        <ChevronRight size={12} />
                        <span className="text-black font-semibold">Floor Lamps</span>
                    </nav>
                </div>

                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
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
                                            <li className="flex items-center gap-3 text-gray-900 font-medium">
                                                <div className="w-4 h-4 border border-black rounded-sm flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-black"></div>
                                                </div>
                                                <span className="text-[14px]">Floor Lamps (18)</span>
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

                                    {/* Size */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Size</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black transition-colors">
                                                <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                <span className="text-[14px] font-light">L (1)</span>
                                            </li>
                                        </ul>
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

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                                <p className="text-gray-900 font-medium tracking-[0.1em] text-sm uppercase">18 Results</p>
                                <div className="flex items-center gap-6 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-950 border-b border-black pb-1 cursor-pointer">
                                    Sort: Featured <ChevronDown size={14} />
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
                                            <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                            <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:text-red-500 z-10 group/heart">
                                                <Heart size={18} strokeWidth={1} className="group-hover/heart:fill-red-500 transition-colors" />
                                            </button>
                                            <div className="absolute bottom-4 left-4">
                                                <span className={`px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-sm ${product.status === "SOLD OUT" ? "bg-[#666] text-white" : "bg-gray-100 text-gray-600"}`}>
                                                    {product.tag}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 pt-2 px-1">
                                            <h4 className="text-[15px] font-medium text-gray-800 transition-colors duration-300 leading-snug tracking-wide uppercase">{product.name}</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-baseline gap-3">
                                                    <span className="text-[17px] font-bold text-gray-900 tracking-tight">₹{product.price}</span>
                                                    {product.originalPrice && (
                                                        <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                    )}
                                                </div>
                                                <p className="text-[10px] text-gray-400 font-light tracking-wide italic">Price inclusive of all taxes | Pan India Shipping</p>
                                                {product.emi && <p className="text-[11px] text-orange-600 font-bold tracking-wider uppercase pt-1">EMI starts from ₹ {product.emi}</p>}
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

export default FloorLampsCollection;
