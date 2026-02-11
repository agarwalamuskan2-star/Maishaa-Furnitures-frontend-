"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const SaturnCollection = () => {
    const products = [
        { name: "Saturn Single Pillar Dining", price: "1,42,000", originalPrice: "1,77,500", discount: "20% Off", emi: "12622", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800" },
        { name: "Saturn Tri Pillar Dining Table", price: "1,65,000", originalPrice: "2,06,250", discount: "20% Off", emi: "14666", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800" },
        { name: "Saturn Dining Table", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "11111", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800" },
        { name: "Saturn Rectangle Coffee", price: "58,000", originalPrice: "72,500", discount: "20% Off", emi: "5155", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1581404476143-fb31d742929f?q=80&w=800" },
        { name: "Saturn Orbital Side Table", price: "24,500", originalPrice: "30,625", discount: "20% Off", emi: "2177", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Saturn Rings Coffee Table", price: "58,000", originalPrice: "72,500", discount: "20% Off", emi: "5155", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1581404476143-fb31d742929f?q=80&w=800" },
        { name: "Saturn Eclipse Console", price: "62,000", originalPrice: "77,500", discount: "20% Off", emi: "5511", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Saturn Galaxy Dining Chair", price: "18,500", originalPrice: "23,125", discount: "20% Off", emi: "1644", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Saturn Nebula Sideboard", price: "88,000", originalPrice: "1,10,000", discount: "20% Off", emi: "7822", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Saturn Comet Bench", price: "34,000", originalPrice: "42,500", discount: "20% Off", emi: "3022", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800" },
        { name: "Saturn Meteor Stool", price: "12,400", originalPrice: "15,500", discount: "20% Off", emi: "1102", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Saturn Voyager Center Table", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800" },
        { name: "Saturn Titan Media Unit", price: "92,000", originalPrice: "1,15,000", discount: "20% Off", emi: "8177", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Saturn Luna Nesting Tables", price: "32,800", originalPrice: "41,000", discount: "20% Off", emi: "2915", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800" },
        { name: "Saturn Aurora Desk", price: "72,000", originalPrice: "90,000", discount: "20% Off", emi: "6400", tag: "DESIGNER'S PICK", bestSeller: false, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800" },
        { name: "Saturn Zenith Bookshelf", price: "52,000", originalPrice: "65,000", discount: "20% Off", emi: "4622", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with requested padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20">
                    <div className="relative w-full h-[50vh] md:h-[75vh] overflow-hidden rounded-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1581404476143-fb31d742929f?q=80&w=2000"
                            alt="Saturn Collection Hero"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-white text-5xl md:text-8xl tracking-tight font-light"
                            >
                                Saturn Table Collection
                            </motion.h1>
                        </div>
                    </div>
                </section>

                {/* Narrative Section - Updated to match screenshot */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-10">
                    <h2 className="text-4xl md:text-5xl">Saturn Table Collection</h2>
                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-medium max-w-4xl mx-auto">
                        Introducing our Saturn Table Collection, inspired by the captivating beauty of the Saturn planet.
                        With mesmerizing wooden ring-like designs, these tables bring celestial elegance to any space.
                        Crafted with exceptional artistry and functionality, they become striking focal points in your home,
                        elevating your interior design. Experience the celestial magic of our Saturn Table Collection and
                        invite the allure of the Saturn planet into your living space.
                    </p>
                </section>

                {/* Designer's Choice - Saturn Rectangle Section - Updated to match screenshot */}
                <section className="bg-[#fcfcfc] overflow-hidden">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 md:p-32 flex flex-col justify-center space-y-12 bg-white">
                            <div className="space-y-4">
                                <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">DESIGNER'S CHOICE</span>
                                <h2 className="text-4xl md:text-7xl text-gray-900 leading-tight">
                                    Saturn Rectangle Coffee Table
                                </h2>
                            </div>

                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
                                Introducing the Coffee Table: A low-height, minimalist table with two captivating capsule-shaped legs..
                            </p>

                            <div className="flex items-center gap-12 pt-8">
                                <button className="border border-black px-12 py-5 text-sm font-light tracking-widest hover:bg-black hover:text-white transition-all uppercase">
                                    Explore +
                                </button>

                                <div className="flex items-center gap-6">
                                    <button className="p-2 hover:text-gray-400 transition-colors">
                                        <ChevronLeft size={24} strokeWidth={1} />
                                    </button>
                                    <span className="text-sm font-light tracking-widest uppercase">1 / 1</span>
                                    <button className="p-2 hover:text-gray-400 transition-colors">
                                        <ChevronRight size={24} strokeWidth={1} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square lg:aspect-auto h-full min-h-[600px]">
                            <Image
                                src="https://images.unsplash.com/photo-1581404476143-fb31d742929f?q=80&w=1200"
                                alt="Saturn Rectangle Coffee Table"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore Grid - 4 Rows - Updated to match screenshot */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto">
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="text-4xl md:text-5xl text-gray-900">Explore more</h2>
                            <p className="text-gray-400 font-light tracking-[0.2em] uppercase text-xs">
                                Furniture to choose from our most promising range of artistries.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-24">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer p-4 border border-transparent hover:border-gray-50 transition-all"
                                >
                                    <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden mb-10">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <button className="absolute top-6 right-6 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                                            <Heart size={18} />
                                        </button>

                                        {product.bestSeller && (
                                            <div className="absolute top-0 left-0 bg-black text-white text-[9px] px-5 py-2 font-bold tracking-[0.2em] uppercase">
                                                BEST SELLER
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-4 px-2">
                                        <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">MADE TO ORDER</span>
                                        <h4 className="text-[17px] text-gray-800 font-normal group-hover:text-black transition-colors min-h-[44px]">
                                            {product.name}
                                        </h4>
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

export default SaturnCollection;
