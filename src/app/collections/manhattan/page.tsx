"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const ManhattanCollection = () => {
    const products = [
        { name: "Manhattan Three Seater Sofa - Crushed Linen", price: "1,85,000", originalPrice: "2,31,250", discount: "20% Off", emi: "16444", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000" },
        { name: "Manhattan Corner Sectional - Sand Stone", price: "2,75,000", originalPrice: "3,43,750", discount: "20% Off", emi: "24444", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000" },
        { name: "Manhattan Ottoman - Cloud Grey", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000" },
        { name: "Urban Organic Accent Chair", price: "68,000", originalPrice: "85,000", discount: "20% Off", emi: "6044", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000" },
        { name: "Skyline Low Coffee Table", price: "35,000", originalPrice: "43,750", discount: "20% Off", emi: "3111", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000" },
        { name: "Hudson Sideboard - Natural Ash", price: "92,000", originalPrice: "1,15,000", discount: "20% Off", emi: "8177", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000" },
        { name: "Metropolitan Floor Lamp", price: "18,400", originalPrice: "23,000", discount: "20% Off", emi: "1635", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
        { name: "Times Square Bookcase", price: "74,000", originalPrice: "92,500", discount: "20% Off", emi: "6577", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000" },
        { name: "Central Park Bench", price: "28,000", originalPrice: "35,000", discount: "20% Off", emi: "2488", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000" },
        { name: "Broadway Media Console", price: "52,000", originalPrice: "65,000", discount: "20% Off", emi: "4622", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000" },
        { name: "Chelsea Dining Chair", price: "15,800", originalPrice: "19,750", discount: "20% Off", emi: "1404", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000" },
        { name: "Soho Nightstand - Matte White", price: "22,400", originalPrice: "28,000", discount: "20% Off", emi: "1991", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1000" },
        { name: "Madison Queen Bed", price: "1,45,000", originalPrice: "1,81,250", discount: "20% Off", emi: "12888", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000" },
        { name: "Gramercy Armchair", price: "54,200", originalPrice: "67,750", discount: "20% Off", emi: "4817", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000" },
        { name: "Empire Study Desk", price: "48,400", originalPrice: "60,500", discount: "20% Off", emi: "4302", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000" },
        { name: "Liberty Round Mirror", price: "12,900", originalPrice: "16,125", discount: "20% Off", emi: "1146", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop"
                            alt="Manhattan Collection Hero"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center text-center px-4">
                            <span className="text-xs md:text-lg font-light tracking-[0.6em] uppercase mb-6 text-gray-800 opacity-80 italic">urban organic living charm</span>
                            <div className="overflow-hidden">
                                <motion.h1
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="text-5xl md:text-9xl leading-tight tracking-tight uppercase font-light italic"
                                >
                                    MANHATTAN
                                </motion.h1>
                            </div>
                            <p className="mt-8 text-sm md:text-xl font-light tracking-[0.3em] uppercase text-gray-700 max-w-3xl">
                                A retreat from the city within the city
                            </p>
                        </div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-28 px-4 max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h3 className="text-4xl md:text-6xl font-serif text-gray-900 font-normal italic">Casual Coziness</h3>
                        <p className="text-gray-500 leading-relaxed text-lg md:text-2xl font-light max-w-4xl mx-auto font-serif">
                            "The Manhattan Collection transforms your living space into a personal retreat.
                            Inspired by the serene vacational retreats found hidden in the bustling heart of the city,
                            our signature crushed linen and cotton designs offer a soft, inviting touch
                            that brings nature's calm into the urban lifestyle."
                        </p>
                        <div className="flex justify-center gap-4">
                            <div className="w-12 h-[1px] bg-gray-300"></div>
                            <div className="w-2 h-[1px] bg-gray-300"></div>
                            <div className="w-12 h-[1px] bg-gray-300"></div>
                        </div>
                    </motion.div>
                </section>

                {/* Collection Feature */}
                <section className="py-20 bg-[#fafafa]">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-8 md:px-24 items-center">
                        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop"
                                alt="Manhattan Lounge Detail"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-10">
                            <span className="text-xs font-bold tracking-[0.4em] text-gray-400 uppercase">THE SIGNATURE TOUCH</span>
                            <h2 className="text-4xl md:text-7xl font-serif text-gray-900 leading-tight">
                                Crushed Linen & Soft Cotton
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light">
                                Our bespoke blends of crushed linen and soft cotton are the soul of the Manhattan series.
                                Every stitch is a promise of comfort, and every texture is an invitation to unwind.
                                We've traded sharp edges for organic curves, ensuring your home is as gentle as it is sophisticated.
                            </p>
                            <button className="px-12 py-5 bg-white border border-gray-200 text-gray-900 text-xs uppercase tracking-[0.3em] shadow-sm hover:bg-black hover:text-white hover:border-black transition-all duration-500">
                                SHOP COLLECTION
                            </button>
                        </div>
                    </div>
                </section>

                {/* Explore More - 4 Rows */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-serif text-gray-900">Explore more</h2>
                            <p className="text-gray-400 font-light tracking-[0.2em] uppercase text-xs">
                                CURATED URBAN ORGANIC PIECES
                            </p>
                        </div>
                        <Link href="/collections" className="text-xs uppercase tracking-[0.3em] font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
                            View All Collections
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer flex flex-col bg-white border border-gray-100"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm hover:text-red-500 transition-colors z-10">
                                        <Heart size={18} strokeWidth={1.5} />
                                    </button>

                                    {product.bestSeller && (
                                        <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase z-10">
                                            BEST SELLER
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <span className="inline-block bg-[#f5f5f5] text-[#888] px-3 py-1 text-[9px] font-bold tracking-widest uppercase mb-3">
                                            {product.tag}
                                        </span>
                                        <h4 className="text-[16px] font-medium text-gray-900 group-hover:text-gray-500 transition-colors leading-snug font-serif">
                                            {product.name}
                                        </h4>
                                    </div>

                                    <div className="mt-auto space-y-2">
                                        <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>

                                        <div className="flex items-center gap-2">
                                            <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                            <span className="text-[13px] text-orange-500 font-bold">{product.discount}</span>
                                        </div>

                                        <p className="text-[11px] text-orange-500 font-medium tracking-wide">
                                            EMI starts from ₹ {product.emi}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ManhattanCollection;
