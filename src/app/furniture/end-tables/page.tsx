"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";

const EndTablesCollection = () => {
    const products = [
        {
            name: "Aurelia Nero Marquina Table",
            price: "65,000",
            originalPrice: "75,000",
            discount: "13% Off",
            emi: "6,800",
            tag: "READY TO SHIP",
            description: "A compact pedestal of black Nero Marquina marble with stunning white veining, perfect for bedside elegance.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000"
        },
        {
            name: "Zephyr Acrylic Side Table",
            price: "42,000",
            originalPrice: "48,000",
            discount: "13% Off",
            emi: "4,400",
            tag: "MADE TO ORDER",
            description: "Ultra-clear artisan acrylic with polished edges, designed to blend seamlessly into modern living spaces.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1000"
        },
        {
            name: "The Gilded Bamboo End Table",
            price: "85,000",
            originalPrice: "98,000",
            discount: "13% Off",
            emi: "8,900",
            tag: "HANDCRAFTED",
            bestSeller: true,
            description: "Gold-leafed iron frame mirroring the organic form of bamboo, topped with a thick crystal glass surface.",
            image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000"
        },
        {
            name: "Heritage Teak Nesting Sets",
            price: "55,000",
            originalPrice: "65,000",
            discount: "15% Off",
            emi: "5,800",
            tag: "READY TO SHIP",
            description: "A pair of solid teak nesting tables with a natural matte finish, ideal for flexible entertaining.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000"
        },
        {
            name: "Solstice Hammered Brass Table",
            price: "72,000",
            originalPrice: "85,000",
            discount: "15% Off",
            emi: "7,500",
            tag: "ARTISAN MADE",
            description: "Hand-hammered brass with a vintage patina, offering a warm and soulful textural accent.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000"
        },
        {
            name: "Obsidian Marble C-Table",
            price: "38,000",
            originalPrice: "45,000",
            discount: "16% Off",
            emi: "4,000",
            tag: "READY TO SHIP",
            description: "Multifunctional C-shaped table in polished black stone, designed to slide effortlessly over sofa arms.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000"
        },
        {
            name: "Lumina Circular Pedestal Table",
            price: "41,500",
            originalPrice: "48,000",
            discount: "14% Off",
            emi: "4,380",
            tag: "MADE TO ORDER",
            description: "Mid-century inspired pedestal table with a lacquered white top and a slim chrome base.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1000"
        },
        {
            name: "Sovereign Inlay End Table",
            price: "68,000",
            originalPrice: "78,000",
            discount: "13% Off",
            emi: "7,150",
            tag: "HANDCRAFTED",
            description: "Rich Moroccan-inspired geometric bone inlay patterns over a durable Sheesham wood core.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000"
        },
        {
            name: "Brutalist Iron Side Table",
            price: "35,000",
            originalPrice: "42,000",
            discount: "17% Off",
            emi: "3,680",
            tag: "READY TO SHIP",
            description: "Raw, industrial-style heavy iron construction with a protective clear-coat matte finish.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1000"
        },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                {/* Breadcrumbs */}
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture" className="hover:text-black transition-colors">Furniture</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture/living" className="hover:text-black transition-colors">Living</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">End Tables</span>
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
                                            {["Pedestal Tables (18)", "Nesting Sets (12)", "C-Tables (14)", "Inlay Designs (10)"].map((type) => (
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
                                                <div className="absolute left-0 right-[40%] h-full bg-black"></div>
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                                <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-500">
                                                    <span>Min</span>
                                                    <ChevronDown size={14} />
                                                </div>
                                                <span className="text-gray-400">to</span>
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-900">
                                                    <span>₹ 150000</span>
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
                                        58 RESULTS FOUND
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
                                                <Heart size={16} strokeWidth={1.5} className="group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-colors" />
                                            </button>

                                            {product.bestSeller && (
                                                <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase z-10">
                                                    BEST SELLER
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col gap-2 flex-grow">
                                            <div className="flex">
                                                <span className="bg-[#f5f5f5] text-gray-500 px-2 py-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                                                    {product.tag}
                                                </span>
                                            </div>

                                            <h4 className="text-[15px] font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-snug h-10 line-clamp-2">
                                                {product.name}
                                            </h4>

                                            <div className="space-y-4 mt-1">
                                                <div className="flex items-baseline gap-3">
                                                    <span className="text-[16px] font-bold text-gray-900">₹{product.price}</span>
                                                    <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                    <span className="text-[13px] text-orange-600 font-bold">{product.discount}</span>
                                                </div>

                                                <div className="space-y-1">
                                                    <p className="text-[10px] text-gray-500 font-light">
                                                        Price inclusive of all taxes | Pan India Shipping
                                                    </p>
                                                    <p className="text-[11px] text-orange-600 font-medium tracking-wide">
                                                        EMI starts from ₹ {product.emi}
                                                    </p>
                                                </div>

                                                <div className="pt-2">
                                                    <p className="text-[12px] text-gray-600 font-light leading-relaxed mb-4 line-clamp-2">
                                                        {product.description}
                                                    </p>

                                                    <button className="w-full bg-black text-white py-3 text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-600">
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

export default EndTablesCollection;
