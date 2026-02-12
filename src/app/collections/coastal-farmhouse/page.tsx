"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";

/**
 * COASTAL FARMHOUSE COLLECTION PAGE
 * 
 * Implements the aesthetic from the user-provided screenshots.
 * Features a large hero, narrative section, pro-tip section, and product grid.
 */

const CoastalFarmhouseCollection = () => {
    useEffect(() => {
        document.title = "Coastal Farmhouse Collection | Maishaa";
    }, []);

    const products = [
        {
            name: "Verity Decorative Jar",
            price: "30,510",
            originalPrice: "33,900",
            emi: "2711",
            tag: "READY TO SHIP",
            bestSeller: false,
            image: "/images/outdoor/seating-cat.png"
        },
        {
            name: "Verity Table Lamp",
            price: "40,600",
            emi: "3608",
            tag: "READY TO SHIP",
            bestSeller: false,
            image: "/images/outdoor/accessories-cat.png"
        },
        {
            name: "Kobbler Tan Bed Cot",
            price: "1,01,080 – ₹1,08,080",
            emi: "9603",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "/images/outdoor/hero.png"
        },
        {
            name: "Kobbler Tan Nightstand",
            price: "24,430",
            originalPrice: "34,900",
            emi: "2171",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "/images/outdoor/wren-chair.png"
        },
        {
            name: "Nautical Rope Mirror",
            price: "12,900",
            emi: "1150",
            tag: "READY TO SHIP",
            bestSeller: false,
            image: "/images/outdoor/dining-cat.png"
        },
        {
            name: "Driftwood Coffee Table",
            price: "58,000",
            emi: "5120",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "/images/outdoor/hero.png"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                {/* Hero Section - Full Width, No Side Padding */}
                <section className="w-full mb-20">
                    <div className="relative h-[70vh] w-full overflow-hidden group">
                        <Image
                            src="/images/outdoor/hero.png"
                            alt="Coastal Farmhouse Collection"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/5" />

                        {/* Text Overlay - Sophisticated, lighter typography to match reference */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-end px-8 md:px-16 lg:px-40 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="bg-white/95 backdrop-blur-md p-12 md:p-16 text-center space-y-6 max-w-lg shadow-lg border border-white/20 pointer-events-auto"
                            >
                                <p className="text-[10px] md:text-[12px] font-medium tracking-[0.5em] text-gray-400 uppercase">
                                    Rustic & Nautical
                                </p>
                                <h1 className="text-3xl md:text-5xl font-serif text-gray-700 leading-[1.2] uppercase tracking-[0.05em] font-light">
                                    Coastal<br />Farmhouse
                                </h1>
                                <div className="pt-8">
                                    <button className="border-b border-gray-400 pb-2 text-[10px] font-bold tracking-[0.4em] uppercase hover:text-orange-600 hover:border-orange-600 transition-all text-gray-600">
                                        EXPLORE NOW
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Narrative Section - No redundant title */}
                <section className="py-24 px-4 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-500 text-[16px] md:text-[19px] leading-[1.8] font-light italic tracking-wide">
                            Coastal Farmhouse is all about creating a harmonious blend of elements from both worlds,
                            bringing the best of seaside and countryside aesthetics into your living space. The result is a home
                            that captures the easygoing spirit of coastal living and the enduring charm of farmhouse style—a
                            perfect retreat where every day feels like a vacation.
                        </p>
                    </motion.div>
                </section>

                {/* Pro Tip Section */}
                <section className="bg-[#fcf8f5] py-24 overflow-hidden">
                    <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="lg:col-span-4 space-y-8"
                            >
                                <span className="text-[12px] font-bold text-gray-400 tracking-[0.3em] uppercase">Pro Tip 1</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">Coastal Farmhouse</h2>
                                <p className="text-gray-600 text-[16px] leading-relaxed font-light">
                                    The Right Blend Stick to neutrals like whites, creams and beiges. Then, add
                                    in the coastal style with touches of blue, and the farmhouse style with deeper
                                    browns and industrial finishes, like with metal legs and lamp stands or curios on shelves.
                                </p>
                                <div className="pt-4">
                                    <button className="bg-white border border-black px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300">
                                        Explore +
                                    </button>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="lg:col-span-8 relative aspect-[16/9] w-full"
                            >
                                <Image
                                    src="/images/outdoor/dining-cat.png"
                                    alt="Coastal Farmhouse Living Room"
                                    fill
                                    className="object-cover shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Product Grid Section */}
                <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-serif text-gray-900">Explore more</h2>
                            <p className="text-gray-500 text-[14px] font-light tracking-wide italic">
                                Furniture to choose from our most promising range of artistries.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
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

                                    <div className="flex flex-col gap-2 pt-2">
                                        <h4 className="text-[15px] font-medium text-gray-900 leading-snug h-10 line-clamp-2 uppercase tracking-wide">
                                            {product.name}
                                        </h4>

                                        <div className="space-y-2 mt-2">
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-[18px] font-bold text-gray-900 tracking-tight">₹{product.price}</span>
                                                {product.originalPrice && (
                                                    <span className="text-[14px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[11px] text-orange-600 font-bold tracking-wider uppercase">
                                                    EMI starts from ₹ {product.emi}
                                                </p>
                                            </div>
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

export default CoastalFarmhouseCollection;
