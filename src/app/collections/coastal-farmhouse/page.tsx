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
            image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1000"
        },
        {
            name: "Verity Table Lamp",
            price: "40,600",
            emi: "3608",
            tag: "READY TO SHIP",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1507473885765-e6ed657f895b?q=80&w=1000"
        },
        {
            name: "Kobbler Tan Bed Cot",
            price: "1,01,080 – ₹1,08,080",
            emi: "9603",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=1000"
        },
        {
            name: "Kobbler Tan Nightstand",
            price: "24,430",
            originalPrice: "34,900",
            emi: "2171",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000"
        },
        {
            name: "Nautical Rope Mirror",
            price: "12,900",
            emi: "1150",
            tag: "READY TO SHIP",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000"
        },
        {
            name: "Driftwood Coffee Table",
            price: "58,000",
            emi: "5120",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000"
        }
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
                        <Link href="/collections" className="hover:text-black transition-colors">Collections</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-semibold">Coastal Farmhouse</span>
                    </nav>
                </div>

                {/* Hero Section */}
                <section className="relative h-[80vh] w-full overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2000"
                        alt="Coastal Farmhouse Collection"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="absolute right-0 top-0 h-full w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-8 md:px-12 lg:px-24 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-white/80 backdrop-blur-sm p-12 md:p-16 space-y-4 max-w-xl"
                        >
                            <p className="text-[12px] md:text-[14px] font-medium tracking-[0.4em] text-gray-500 uppercase">
                                Rustic & Nautical
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-[1.1] uppercase tracking-tighter">
                                Coastal<br />Farmhouse
                            </h1>
                            <div className="pt-8">
                                <button className="border-b-2 border-black pb-2 text-[12px] font-bold tracking-[0.3em] uppercase hover:text-orange-600 hover:border-orange-600 transition-all">
                                    EXPLORE NOW
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Coastal Farmhouse</h2>
                        <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed font-light italic">
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
                                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000"
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
