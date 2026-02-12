"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight } from "lucide-react";

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

const ChandigarhCollection = () => {
    useEffect(() => {
        document.title = "Chandigarh Sangrah | Pierre Jeanneret Collection | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Sinag Dining Table",
            price: "1,32,930",
            originalPrice: "1,53,930",
            emi: "13,676",
            tag: "MADE TO ORDER",
            image: "https://images.unsplash.com/photo-1615876003666-b31e52c87b64?q=80&w=1000",
            bestSeller: true
        },
        {
            name: "Sinag Easy Dining Chair",
            price: "24,430",
            originalPrice: "34,900",
            emi: "2,171",
            tag: "READY TO SHIP",
            image: "https://images.unsplash.com/photo-1596162955779-9c8c7c2b03fb?q=80&w=1000",
            bestSeller: true
        },
        {
            name: "Sinag Bench",
            price: "44,910",
            originalPrice: "49,900",
            emi: "3,990",
            tag: "READY TO SHIP",
            image: "https://images.unsplash.com/photo-1551216017-768ad3388703?q=80&w=1000",
            bestSeller: false
        },
        {
            name: "Sinag Accent Chair",
            price: "59,310",
            originalPrice: "65,900",
            emi: "5,270",
            tag: "MADE TO ORDER",
            image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9bf8?q=80&w=1000",
            bestSeller: false
        },
        {
            name: "Kangaroo Lounge Chair",
            price: "48,500",
            originalPrice: "58,000",
            emi: "4,041",
            tag: "MADE TO ORDER",
            image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=1000",
            bestSeller: true
        },
        {
            name: "Library Chair",
            price: "32,800",
            originalPrice: "38,500",
            emi: "2,733",
            tag: "READY TO SHIP",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000",
            bestSeller: false
        },
        {
            name: "Capitol Complex Office Chair",
            price: "52,200",
            originalPrice: "62,500",
            emi: "4,350",
            tag: "ARTISAN MADE",
            image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000",
            bestSeller: false
        },
        {
            name: "Civil Bench",
            price: "38,900",
            originalPrice: "45,000",
            emi: "3,241",
            tag: "MADE TO ORDER",
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000",
            bestSeller: true
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white overflow-x-hidden text-gray-900 font-sans">
            <Header />

            <main className="flex-1">
                {/* 1. Breadcrumb - Minimal */}
                <div className="pt-4 pb-2 px-6 md:px-12 lg:px-20">
                    <nav className="flex items-center gap-2 text-[10px] md:text-[11px] text-gray-400 uppercase tracking-widest font-medium">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={10} />
                        <Link href="/collections" className="hover:text-black transition-colors">Collections</Link>
                        <ChevronRight size={10} />
                        <span className="text-black">Chandigarh Collection</span>
                    </nav>
                </div>

                {/* 2. Hero Section */}
                <section className="relative w-full h-[50vh] md:h-[70vh] bg-[#f4f4f4]">
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2000&auto=format&fit=crop"
                            alt="Chandigarh Sangrah Hero"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </section>

                {/* 3. Introduction Text */}
                <section className="py-20 md:py-28 px-4 sm:px-8 bg-white text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-serif text-[#1a1a1a] tracking-tight"
                        >
                            Chandigarh Sangrah
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#555] leading-relaxed text-lg md:text-xl font-light font-sans max-w-3xl mx-auto"
                        >
                            Classic never dies. Our 'Chandigarh Sangrah' is a re-edition of the iconic mid-century inspired design by the renowned Swiss architect <span className="text-black font-normal">Pierre Jeanneret's</span> most loved 'Chandigarh Collection'. An architect and a designer of furniture whose work has always been a treasured endeavour that makes each piece a must-have.
                        </motion.p>
                    </div>
                </section>

                {/* 4. Designer's Choice Feature - Asymmetrical Layout */}
                <section className="bg-[#f9f9f9] py-0">
                    <div className="flex flex-col md:flex-row h-auto md:min-h-[600px]">
                        {/* Text Side */}
                        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-20 order-2 md:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-md space-y-8"
                            >
                                <div className="space-y-4">
                                    <span className="text-[11px] tracking-[0.2em] font-bold text-gray-400 uppercase block mb-6">
                                        Designer's Choice
                                    </span>
                                    <h2 className="text-4xl font-serif text-[#1a1a1a] leading-tight">
                                        Sinag Upholstered Armchair
                                    </h2>
                                    <p className="text-[#666] leading-loose text-[15px] font-light">
                                        Defined by simplicity with its signature design, the A-shaped legs mark the recognition of this collection. The flat-side profiled legs supporting the rolled upholstered armrest and a backrest with the seat slightly inclined, provide immense comfort..
                                    </p>
                                </div>

                                <button className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Explore</span>
                                    <span className="text-lg group-hover:translate-x-1 transition-transform">+</span>
                                </button>
                            </motion.div>
                        </div>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2 relative min-h-[400px] md:h-auto order-1 md:order-2">
                            <Image
                                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9bf8?q=80&w=1000"
                                alt="Sinag Upholstered Armchair Detail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* 5. Product Grid - "Explore More" */}
                <section className="py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-4">Explore More</h2>
                        <p className="text-gray-500 font-light text-sm tracking-wide uppercase">Furniture to choose from our most promising range of artistries.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
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
                                <div className="relative aspect-[4/5] overflow-hidden bg-[#fafafa] mb-5">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Badges - Top Left */}
                                    <div className="absolute top-0 left-0 flex flex-col gap-1 p-0">
                                        {product.bestSeller && (
                                            <div className="bg-black text-white px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] uppercase w-fit">
                                                Best Seller
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Buttons - Top Right */}
                                    <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:text-red-500 hover:bg-white transition-all duration-300 z-10 group/heart">
                                        <Heart size={16} strokeWidth={1.5} className="group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-colors" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    {/* Status Tag */}
                                    <div className="bg-gray-100 w-fit px-2 py-1">
                                        <p className="text-[9px] font-bold tracking-[0.1em] text-gray-500 uppercase">{product.tag}</p>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-[15px] font-medium text-[#1a1a1a] group-hover:text-amber-700 transition-colors line-clamp-1">
                                        {product.name}
                                    </h3>

                                    {/* Price Details */}
                                    <div className="space-y-1">
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-[16px] font-bold text-[#1a1a1a]">₹{product.price}</span>
                                            {product.originalPrice && (
                                                <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                            )}
                                        </div>
                                        {product.emi && (
                                            <p className="text-[11px] text-amber-600 font-medium tracking-wide">
                                                EMI starts from ₹ {product.emi}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 6. Footer Callout / Quote */}
                <section className="py-24 bg-[#1a1a1a] text-white text-center px-4">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl font-serif italic opacity-90">
                            "A tribute to the modernist spirit of Chandigarh."
                        </h2>
                        <div className="w-16 h-px bg-white/20 mx-auto"></div>
                        <p className="text-sm tracking-widest uppercase font-bold text-white/60">
                            Handcrafted in India
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ChandigarhCollection;
