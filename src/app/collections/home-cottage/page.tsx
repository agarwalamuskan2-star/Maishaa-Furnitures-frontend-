"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const HomeCottageCollection = () => {
    const products = [
        { name: "Rustic Pine Dining Table", price: "48,000", originalPrice: "60,000", discount: "20% Off", emi: "4266", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1000" },
        { name: "Cottage Wingback Chair", price: "32,000", originalPrice: "40,000", discount: "20% Off", emi: "2844", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000" },
        { name: "Vintage Oak Sideboard", price: "55,000", originalPrice: "68,750", discount: "20% Off", emi: "4888", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000" },
        { name: "Farmhouse Coffee Table", price: "24,000", originalPrice: "30,000", discount: "20% Off", emi: "2133", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000" },
        { name: "Lakeside Rattan Bench", price: "18,500", originalPrice: "23,125", discount: "20% Off", emi: "1644", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000" },
        { name: "Wooden Spindle Bed", price: "85,000", originalPrice: "1,06,250", discount: "20% Off", emi: "7555", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1505693419163-57bb38e586b5?q=80&w=1000" },
        { name: "Country Kitchen Island", price: "62,000", originalPrice: "77,500", discount: "20% Off", emi: "5511", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1556911220-e150213ff337?q=80&w=1000" },
        { name: "Cottage Nightstand", price: "14,000", originalPrice: "17,500", discount: "20% Off", emi: "1244", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000" },
        { name: "Woven Wicker Armchair", price: "22,500", originalPrice: "28,125", discount: "20% Off", emi: "2000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000" },
        { name: "Rustic Wooden Bookshelf", price: "38,000", originalPrice: "47,500", discount: "20% Off", emi: "3377", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000" },
        { name: "Cotton Striped Recliner", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000" },
        { name: "Orchard Fruit Bowl Table", price: "12,000", originalPrice: "15,000", discount: "20% Off", emi: "1066", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1000" },
        { name: "Highland Wool Pouf", price: "8,500", originalPrice: "10,625", discount: "20% Off", emi: "755", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000" },
        { name: "Cottage Pine Vanity", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000" },
        { name: "Rustic Entryway Console", price: "28,000", originalPrice: "35,000", discount: "20% Off", emi: "2488", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000" },
        { name: "Cedar Wood Chest", price: "34,000", originalPrice: "42,500", discount: "20% Off", emi: "3022", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm bg-[#faf3e0]">
                        <Image
                            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop"
                            alt="Home and Cottage Hero"
                            fill
                            className="object-cover opacity-80"
                            priority
                        />
                        <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center text-center px-4">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-9xl leading-none font-light tracking-wide uppercase text-gray-800 mb-4"
                            >
                                HOME AND<br />COTTAGE
                            </motion.h1>
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-sm md:text-xl font-light tracking-[0.2em] uppercase text-gray-600 max-w-2xl bg-white/30 backdrop-blur-sm p-4 rounded-sm"
                            >
                                RUSTIC ELEGANCE FOR MODERN SPACES
                            </motion.p>
                        </div>
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
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900">Home & Cottage</h2>
                        <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-3xl mx-auto">
                            Escape to the tranquil charm of the countryside with our Home and Cottage collection.
                            Blending rustic warmth with refined craftsmanship, each piece is designed to create a
                            cozy, inviting sanctuary in the heart of your home. From reclaimed wood textures to
                            soft, earthy tones, rediscover the simple joy of serene living.
                        </p>
                    </motion.div>
                </section>

                {/* Explore More - Product Grid */}
                <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-t border-gray-50">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900">The Cottage Edit</h2>
                        <p className="text-gray-500 font-light text-lg">
                            Handpicked essentials for a warm and characterful home.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: (idx % 4) * 0.05 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-square overflow-hidden mb-6 bg-[#f9f9f9]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <button className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:text-red-500 text-gray-400">
                                        <Heart size={20} strokeWidth={1.5} />
                                    </button>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold tracking-widest text-black uppercase shadow-sm">
                                            {product.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2 text-center">
                                    <h3 className="text-lg font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Brand Banner */}
                <section className="py-24 bg-[#faf7f2] text-center">
                    <div className="max-w-3xl mx-auto px-4 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-gray-900">
                            MAISHAA
                        </h2>
                        <div className="w-16 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-500 font-light italic text-lg">
                            "Bringing the soul of the country to your urban dwelling."
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default HomeCottageCollection;
