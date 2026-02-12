"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

/**
 * MID-CENTURY MODERN COLLECTION PAGE
 */

const MidCenturyModernPage = () => {
    useEffect(() => {
        document.title = "Mid-Century Modern Furniture Collection | Maishaa";
    }, []);

    const products = [
        {
            name: "Ebba Single Seater",
            price: "1,11,600",
            originalPrice: "1,11,600",
            emi: "6915",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            badge: "BEST SELLER",
            image: "/images/outdoor/seating-cat.png"
        },
        {
            name: "Ebba Chaise Sectional Sofa",
            price: "2,84,000",
            originalPrice: "2,84,000",
            emi: "28632",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            badge: "BEST SELLER",
            image: "/images/outdoor/accessories-cat.png"
        },
        {
            name: "Grant Centre Table | Side Table",
            price: "70,110",
            originalPrice: "70,110",
            emi: "6229",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            badge: "BEST SELLER",
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "Sinag Chair",
            price: "26,530",
            originalPrice: "37,900",
            emi: "2358",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            badge: "BEST SELLER",
            image: "/images/outdoor/hero.png"
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
                        <span className="text-gray-300">/</span>
                        <Link href="/collections" className="hover:text-black transition-colors">Collections</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-black font-semibold">Mid Century Modern</span>
                    </nav>
                </div>

                {/* Hero Section */}
                <section className="relative h-[500px] overflow-hidden">
                    <Image
                        src="/images/outdoor/hero.png"
                        alt="Mid-Century Modern Collection"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-8 md:px-16 lg:px-20">
                        <div className="text-right text-white max-w-xl">
                            <p className="text-sm tracking-[0.3em] uppercase mb-4 font-light">Sleek & Timeless</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
                                MID-CENTURY<br />MODERN
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">MID CENTURY MODERN</h2>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            Mid-Century Modern is the perfect throwback style that embraces mixed materials - like wood and metal, with low-profile furniture with tapered legs to create a look that is trendy, yet timeless. The Mid-Century look has a flexible palette, so keep it simple with neutral tones or, lean into the more retro vibe with pumpkin orange, avocado green, or mustard yellow.
                        </p>
                    </div>
                </section>

                {/* Pro Tips Section */}
                <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif text-gray-900">Pro Tip 1</h3>
                                <h4 className="text-4xl md:text-5xl font-light text-gray-900">Juxtapose</h4>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    Don't be afraid to overlay materials. Metals, wood, stone and glass are all very popular elements of this design. A wooden chair with metal legs accented with a glass side table is pinnacle mid-century design.
                                </p>
                            </div>
                            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/images/outdoor/dining-cat.png"
                                    alt="Juxtapose materials"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Explore More Section */}
                <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">Explore more</h2>
                            <p className="text-base text-gray-600">
                                Pick your furniture style from our artful curations to build your dream home.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer flex flex-col bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="relative aspect-square overflow-hidden bg-[#f9f9f9]">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:text-red-500 transition-all duration-300 z-10 group/heart">
                                            <Heart size={18} strokeWidth={1} className="group-hover/heart:fill-red-500 transition-colors" />
                                        </button>

                                        <div className="absolute top-4 left-4">
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

                                    <div className="flex flex-col gap-3 p-4">
                                        <h4 className="text-[14px] font-medium text-gray-800 leading-snug tracking-wide">
                                            {product.name}
                                        </h4>

                                        <div className="space-y-1">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-[16px] font-bold text-gray-900">₹{product.price}</span>
                                                {product.originalPrice !== product.price && (
                                                    <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                )}
                                            </div>
                                            {product.emi && (
                                                <p className="text-[10px] text-orange-600 font-bold tracking-wider uppercase">
                                                    EMI starts from ₹ {product.emi}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MidCenturyModernPage;
