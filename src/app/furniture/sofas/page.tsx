"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";

const SofasCollection = () => {
    const products = [
        { name: "Modern Velvet 3-Seater Sofa", price: "1,45,000", originalPrice: "1,81,250", discount: "20% Off", emi: "12,083", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000" },
        { name: "Leather Chesterfield Sofa", price: "2,10,000", originalPrice: "2,62,500", discount: "20% Off", emi: "17,500", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000" },
        { name: "Scandinavian Fabric Sofa", price: "98,000", originalPrice: "1,22,500", discount: "20% Off", emi: "8,167", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000" },
        { name: "Mid-Century Modern Sofa", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "10,417", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000" },
        { name: "Tufted Linen Sofa", price: "1,35,000", originalPrice: "1,68,750", discount: "20% Off", emi: "11,250", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1000" },
        { name: "Contemporary L-Shape Sofa", price: "1,85,000", originalPrice: "2,31,250", discount: "20% Off", emi: "15,417", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1567016432779-094069958ad5?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans">
            <Header />

            <main className="flex-1">
                {/* Breadcrumbs */}
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture" className="hover:text-black transition-colors">Furniture</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture/living-room" className="hover:text-black transition-colors">Living Room</Link>
                        <ChevronRight size={12} />
                        <span className="text-black">Sofas</span>
                    </nav>
                </div>

                {/* Main Collection Section with Sidebar */}
                <section className="pb-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
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
                                            {["3-Seater Sofas (12)", "2-Seater Sofas (8)", "Loveseats (5)", "Sofa Beds (4)"].map((type) => (
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
                                            <span className="text-gray-400 text-lg">−</span>
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
                                                <span className="text-gray-400">to</span>
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-900">
                                                    <span>₹ 300000</span>
                                                    <ChevronDown size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Material */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Material</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {["Velvet (8)", "Leather (6)", "Linen (5)", "Fabric (10)"].map((material) => (
                                                <li key={material} className="flex items-center gap-3 text-gray-500 cursor-pointer">
                                                    <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                    <span className="text-[14px] font-light">{material}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Discount */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Discount</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {["10% and above", "20% and above", "30% and above"].map((disc) => (
                                                <li key={disc} className="flex items-center gap-3 text-gray-500 cursor-pointer">
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
                                    <p className="text-gray-400 font-light tracking-[0.1em] text-sm italic font-serif uppercase">
                                        29 RESULTS FOUND
                                    </p>
                                </div>
                                <div className="flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-950 border-b border-black pb-1 cursor-pointer">
                                    Sort: Featured
                                    <ChevronDown size={14} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                                {products.map((product, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group cursor-pointer flex flex-col bg-white"
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden bg-[#f9f9f9]">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <button className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow-sm hover:text-red-500 transition-all duration-300 z-10 group/heart">
                                                <Heart size={18} strokeWidth={1.5} className="group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-colors" />
                                            </button>

                                            {product.bestSeller && (
                                                <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase z-10">
                                                    BEST SELLER
                                                </div>
                                            )}
                                        </div>

                                        <div className="pt-8 flex flex-col flex-1">
                                            <div className="mb-6">
                                                <span className="inline-block bg-[#f5f5f5] text-[#999] px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
                                                    {product.tag}
                                                </span>
                                                <h4 className="text-[17px] font-medium text-gray-900 group-hover:text-orange-600 transition-all duration-500 leading-snug">
                                                    {product.name}
                                                </h4>
                                            </div>

                                            <div className="mt-auto space-y-3">
                                                <p className="text-[20px] font-bold text-gray-900">₹{product.price}</p>

                                                <div className="flex items-center gap-3">
                                                    <span className="text-[14px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                    <span className="text-[14px] text-orange-600 font-bold whitespace-nowrap">{product.discount}</span>
                                                </div>

                                                <p className="text-[12px] text-orange-600 font-medium tracking-wide">
                                                    EMI starts from ₹ {product.emi}
                                                </p>
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

export default SofasCollection;
