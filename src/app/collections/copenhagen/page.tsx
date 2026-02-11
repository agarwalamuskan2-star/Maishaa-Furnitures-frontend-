"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const CopenhagenCurves = () => {
    const products = [
        { name: "Copenhagen Sculptural Armchair", price: "95,000", originalPrice: "1,18,750", discount: "20% Off", emi: "8444", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Nordic Wave Three Seater", price: "2,15,000", originalPrice: "2,68,750", discount: "20% Off", emi: "19111", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800" },
        { name: "Oslo Curved Coffee Table", price: "48,000", originalPrice: "60,000", discount: "20% Off", emi: "4266", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800" },
        { name: "Hygge Lounge Chair - Cream", price: "72,000", originalPrice: "90,000", discount: "20% Off", emi: "6400", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800" },
        { name: "Scandinavian Organic Sideboard", price: "1,08,000", originalPrice: "1,35,000", discount: "20% Off", emi: "9600", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Copenhagen Loop Pedestal", price: "18,400", originalPrice: "23,000", discount: "20% Off", emi: "1635", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Nordic Minimalist Bench", price: "32,000", originalPrice: "40,000", discount: "20% Off", emi: "2844", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Bergen Arc Floor Lamp", price: "24,500", originalPrice: "30,625", discount: "20% Off", emi: "2177", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800" },
        { name: "Fjord Curved Bed Frame", price: "1,95,000", originalPrice: "2,43,750", discount: "20% Off", emi: "17333", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Stark White Organic Desk", price: "88,000", originalPrice: "1,10,000", discount: "20% Off", emi: "7822", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800" },
        { name: "Copenhagen Floating Shelves", price: "14,500", originalPrice: "18,125", discount: "20% Off", emi: "1288", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Nordic Sculpt Console", price: "64,000", originalPrice: "80,000", discount: "20% Off", emi: "5688", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1565412850626-25f07b72982d?q=80&w=800" },
        { name: "Aurora Curved Wall Mirror", price: "12,800", originalPrice: "16,000", discount: "20% Off", emi: "1137", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800" },
        { name: "Copenhagen Fabric Ottoman", price: "38,500", originalPrice: "48,125", discount: "20% Off", emi: "3422", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Fjord Low-Mid TV Unit", price: "72,400", originalPrice: "90,500", discount: "20% Off", emi: "6435", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Hygge Sheepskin Stool", price: "21,000", originalPrice: "26,250", discount: "20% Off", emi: "1866", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-[#f0f0f0]">
                    <Image
                        src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop"
                        alt="Copenhagen Curves Hero"
                        fill
                        className="object-cover mix-blend-multiply opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-32 flex flex-col items-center text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="space-y-6"
                        >
                            <span className="text-xs md:text-sm font-bold tracking-[0.8em] text-gray-500 uppercase">SIGNATURE LINE</span>
                            <h1 className="text-5xl md:text-9xl font-serif text-gray-900 leading-none tracking-tighter lowercase italic">
                                copenhagen curves
                            </h1>
                            <p className="text-sm md:text-xl font-light tracking-[0.4em] uppercase text-gray-600 max-w-2xl mx-auto">
                                The new language of Scandinavian sculptural comfort
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-32 px-4 max-w-6xl mx-auto text-center overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="text-left space-y-10">
                            <h2 className="text-4xl md:text-7xl font-serif text-gray-900 leading-tight">Nordic Simplicity, Sculptural Form</h2>
                            <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light">
                                The Copenhagen Curves collection is a tribute to the timeless principles of Nordic design—simplicity, functionality, and beauty.
                                We've taken the classic Scandinavian silhouette and infused it with graceful, sculptural curves that redefine modern seating.
                                Every piece is an exploration of form and comfort, meticulously crafted from the finest materials to create
                                a serene atmosphere in your most cherished spaces.
                            </p>
                        </div>
                        <div className="relative aspect-square md:aspect-[3/4] rounded-full overflow-hidden border-[20px] border-gray-50 shadow-inner">
                            <Image
                                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200"
                                alt="Copenhagen Curves Detail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Material Focus */}
                <section className="bg-[#fcfcfc] py-24 border-y border-gray-100">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-24">
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase">The Frame</h4>
                            <p className="text-gray-900 font-serif text-xl italic">Hand-turned European Ashwood for organic durability.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase">The Fill</h4>
                            <p className="text-gray-900 font-serif text-xl italic">High-resiliency foam tailored for sculptural permanence.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase">The Philosophy</h4>
                            <p className="text-gray-900 font-serif text-xl italic">Form follows feeling, ensuring every curve serves comfort.</p>
                        </div>
                    </div>
                </section>

                {/* Explore More Section */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="text-center mb-24 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-serif text-gray-900">The Signature Collection</h2>
                        <span className="block w-24 h-[1px] bg-gray-200 mx-auto"></span>
                        <p className="text-gray-400 font-light tracking-[0.3em] uppercase text-xs">
                            Discover the sculptural elegance of Copenhagen
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24 lg:gap-y-32">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: (idx % 4) * 0.15 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[3/4] bg-[#fdfdfd] overflow-hidden mb-10 transition-all duration-700 group-hover:rounded-[100px] shadow-sm">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
                                    <button className="absolute top-8 right-8 p-3.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-red-500 hover:scale-110">
                                        <Heart size={22} strokeWidth={1} />
                                    </button>
                                    {product.bestSeller && (
                                        <div className="absolute -left-2 top-8 bg-gray-900 text-white text-[9px] px-6 py-2 font-bold tracking-[0.4em] uppercase shadow-lg transform -rotate-90 origin-bottom-left">
                                            BEST SELLER
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4 px-2">
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-[11px] text-gray-400 font-bold tracking-[0.3em] uppercase">{product.tag}</span>
                                        <p className="text-blue-500 text-[11px] font-bold tracking-widest">{product.discount}</p>
                                    </div>
                                    <h4 className="text-[19px] font-serif text-gray-900 group-hover:text-gray-400 transition-colors leading-tight min-h-[46px]">
                                        {product.name}
                                    </h4>
                                    <div className="pt-6 border-t border-gray-50 space-y-2">
                                        <div className="flex items-center gap-4">
                                            <p className="text-[20px] font-medium text-gray-900">₹{product.price}</p>
                                            <p className="text-[15px] text-gray-400 line-through font-light">₹{product.originalPrice}</p>
                                        </div>
                                        <p className="text-[12px] text-gray-500 font-light italic leading-tight">
                                            EMI starting from ₹ {product.emi} / month
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

export default CopenhagenCurves;
