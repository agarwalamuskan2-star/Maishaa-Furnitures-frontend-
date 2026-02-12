"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";

/**
 * DINING CHAIRS COLLECTION PAGE
 * 
 * Features a sidebar for filtering and a grid for product display.
 * Implements the premium look as per the user's reference images.
 */

const DiningChairCollection = () => {
    useEffect(() => {
        document.title = "Buy Stylish Dining Chairs Online | Maishaa";
    }, []);

    const products = [
        {
            name: "Kansho Dining Chair",
            price: "32,400",
            emi: "3421",
            tag: "MADE TO ORDER",
            description: "Ergonomic comfort meets minimalist design, crafted for enduring support.",
            bestSeller: true,
            image: "/images/outdoor/wren-chair.png"
        },
        {
            name: "Monolith Cane Chair",
            price: "28,000",
            emi: "2956",
            tag: "READY TO SHIP",
            description: "Classic cane weaving paired with a robust wooden frame for a timeless appeal.",
            bestSeller: false,
            image: "/images/outdoor/seating-cat.png"
        },
        {
            name: "Julien Velvet Dining Chair",
            price: "42,000",
            emi: "4433",
            tag: "MADE TO ORDER",
            description: "Plush velvet upholstery in rich tones, bringing luxury to your dining space.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000"
        },
        {
            name: "Creston Leather Chair",
            price: "48,500",
            emi: "5120",
            tag: "MADE TO ORDER",
            description: "Top-grain leather and solid wood construction for a sophisticated dining experience.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1000"
        },
        {
            name: "Calissa Sculptural Chair",
            price: "38,850",
            emi: "4102",
            tag: "MADE TO ORDER",
            description: "A piece of functional art, featuring bold lines and a comfortable curved back.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000"
        },
        {
            name: "Nakashi Carver Chair",
            price: "35,600",
            emi: "3758",
            tag: "MADE TO ORDER",
            description: "Inspired by heritage craftsmanship, with intricate details and armrests for added comfort.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000"
        },
        {
            name: "Sinag Modern Armchair",
            price: "45,000",
            emi: "4752",
            tag: "MADE TO ORDER",
            description: "Radiant designs and surgical precision in every joint, a hallmark of the Sinag collection.",
            bestSeller: true,
            image: "/images/outdoor/seating-cat.png"
        },
        {
            name: "Wren Dining Chair",
            price: "34,500",
            emi: "3641",
            tag: "MADE TO ORDER",
            description: "Sculptural form meets functional art, perfectly complementing any modern dining table.",
            bestSeller: true,
            image: "/images/outdoor/wren-chair.png"
        },
        {
            name: "Orbit Swivel Chair",
            price: "52,000",
            emi: "5488",
            tag: "MADE TO ORDER",
            description: "Versatile and stylish, featuring a 360-degree swivel and premium fabric options.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000"
        },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                {/* Breadcrumbs */}
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide uppercase">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture" className="hover:text-black transition-colors">Furniture</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture/dining-collections" className="hover:text-black transition-colors">Dining</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-semibold">Dining Chairs</span>
                    </nav>
                </div>

                {/* Main Content Section with Sidebar */}
                <section className="pb-24 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
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
                                            {["Chairs (18)", "Armchairs (6)", "Stools (2)"].map((type) => (
                                                <li key={type} className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                    <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-black transition-colors"></div>
                                                    <span className="text-[14px] font-light">{type}</span>
                                                </li>
                                            ))}
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
                                                <div className="absolute left-0 right-[20%] h-full bg-black"></div>
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                                <div className="absolute left-[80%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-500">
                                                    <span>Min</span>
                                                    <ChevronDown size={14} />
                                                </div>
                                                <span className="text-gray-400 uppercase text-[10px] font-bold">to</span>
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-900">
                                                    <span>₹ 80000</span>
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
                                            {["10% and above", "20% and above", "30% and above"].map((disc) => (
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
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                                <div className="space-y-2">
                                    <p className="text-black font-medium tracking-[0.1em] text-sm uppercase">
                                        24 Results
                                    </p>
                                </div>
                                <div className="flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-950 border-b border-black pb-1 cursor-pointer">
                                    Sort: Featured
                                    <ChevronDown size={14} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
                                {products.map((product, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group cursor-pointer flex flex-col"
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden bg-[#f9f9f9] mb-4">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:text-red-500 transition-all duration-300 z-10 group/heart">
                                                <Heart size={18} strokeWidth={1} className="group-hover/heart:fill-red-500 transition-colors" />
                                            </button>

                                            {product.bestSeller && (
                                                <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase z-10">
                                                    BEST SELLER
                                                </div>
                                            )}

                                            <div className="absolute bottom-4 left-4">
                                                <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                                                    {product.tag}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 flex-grow pt-2">
                                            <h4 className="text-[17px] font-serif text-gray-800 transition-colors duration-300 leading-snug">
                                                {product.name}
                                            </h4>

                                            <div className="space-y-4">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[18px] font-bold text-gray-900 tracking-tight">₹{product.price}</span>
                                                    <p className="text-[10px] text-gray-400 font-light tracking-wide italic">
                                                        Price inclusive of all taxes | Pan India Shipping
                                                    </p>
                                                </div>

                                                <p className="text-[11px] text-orange-600 font-bold tracking-wider uppercase">
                                                    EMI starts from ₹ {product.emi}
                                                </p>

                                                <div className="pt-4 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <p className="text-[12px] text-gray-500 font-light leading-relaxed line-clamp-2 italic mb-6">
                                                        {product.description}
                                                    </p>
                                                    <button className="w-full bg-black text-white py-3.5 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-orange-600">
                                                        BUY NOW
                                                    </button>
                                                </div>
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

export default DiningChairCollection;
