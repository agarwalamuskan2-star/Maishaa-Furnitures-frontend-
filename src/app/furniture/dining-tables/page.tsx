"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";

/**
 * DINING TABLES COLLECTION PAGE
 * 
 * Features a sidebar for filtering and a grid for product display.
 * Implements the premium look as per the user's reference images.
 */

const DiningTableCollection = () => {
    useEffect(() => {
        document.title = "Buy Stylish Dining Tables Online | Maishaa";
    }, []);

    const products = [
        {
            name: "Kansho Dining Table",
            price: "1,62,400 – ₹1,80,000",
            emi: "18871",
            tag: "MADE TO ORDER",
            description: "A minimalist masterpiece blending traditional joinery with modern design language.",
            bestSeller: false,
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "Monolith Dining Table",
            price: "1,38,000",
            emi: "14468",
            tag: "MADE TO ORDER",
            description: "A solid presence in any dining room, featuring architectural lines and premium finishes.",
            bestSeller: false,
            image: "/images/outdoor/hero.png"
        },
        {
            name: "Julien Dining Table",
            price: "1,23,210 – ₹1,57,410",
            emi: "16503",
            tag: "MADE TO ORDER",
            description: "Graceful proportions and refined details make this a timeless anchor for family gatherings.",
            bestSeller: true,
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "Creston Oval Dining Table",
            price: "1,49,900",
            emi: "15715",
            tag: "MADE TO ORDER",
            description: "The soft curves of the Creston oval table bring a flowing, organic feel to contemporary spaces.",
            bestSeller: false,
            image: "/images/outdoor/hero.png"
        },
        {
            name: "Calissa Dining Table",
            price: "1,49,850 – ₹1,90,260",
            emi: "19947",
            tag: "MADE TO ORDER",
            description: "Sculptural base meets a wide top, creating a balance of stability and airy elegance.",
            bestSeller: true,
            image: "/images/outdoor/accessories-cat.png"
        },
        {
            name: "Nakashi Dining Table",
            price: "1,65,600 – ₹2,05,200",
            emi: "21513",
            tag: "MADE TO ORDER",
            description: "Inspired by traditional Nakashi woodcraft, this table is a true artisan centerpiece.",
            bestSeller: true,
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "Course 4 Round Table",
            price: "92,000",
            emi: "9680",
            tag: "MADE TO ORDER",
            description: "Perfect for intimate dinners and circular conversations, highlighting the beauty of round forms.",
            bestSeller: false,
            image: "/images/outdoor/seating-cat.png"
        },
        {
            name: "Sinag Dining Table",
            price: "1,75,000",
            emi: "18336",
            tag: "MADE TO ORDER",
            description: "Radiant designs and surgical precision in every joint, a hallmark of the Sinag collection.",
            bestSeller: false,
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "X-atura Live Edge Dining Table",
            price: "2,10,000",
            emi: "21980",
            tag: "MADE TO ORDER",
            description: "Live edge wood brings a natural beauty that looks raw yet very refined.",
            bestSeller: true,
            image: "/images/outdoor/dining-cat.png"
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
                        <span className="text-black font-semibold">Dining Tables</span>
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
                                            {["Tables (21)", "0 (1)"].map((type) => (
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
                                                    <span>₹ 200000</span>
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
                                            {["8 feet (12)", "7 feet (11)", "6 feet (9)", "10 feet (4)", "5 feet (1)", "9 feet (1)"].map((size) => (
                                                <li key={size} className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                    <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-black transition-colors"></div>
                                                    <span className="text-[14px] font-light">{size}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Shapes */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Shapes</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {["Rectangle (7)", "Round (3)", "Oval (1)"].map((shape) => (
                                                <li key={shape} className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                    <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-black transition-colors"></div>
                                                    <span className="text-[14px] font-light">{shape}</span>
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
                                        26 Results
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

                                            {/* Tag at bottom of image area like reference */}
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

export default DiningTableCollection;
