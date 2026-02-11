"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const FosterLiving = () => {
    const products = [
        { name: "Foster Single Seater - Charlotte 902", price: "1,30,000", originalPrice: "1,44,444", discount: "10% Off", emi: "11550", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Foster Three Seater Sofa - Charlotte 902", price: "2,07,000", originalPrice: "2,30,000", discount: "10% Off", emi: "18391", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800" },
        { name: "Foster Modular Four Seater Sofa 240 - Charlotte 902", price: "2,34,000", originalPrice: "2,60,000", discount: "10% Off", emi: "20790", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800" },
        { name: "Foster Apartment Four Seater Sofa With Storage - Charlotte 902", price: "2,43,000", originalPrice: "2,70,000", discount: "10% Off", emi: "21590", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800" },
        { name: "Foster Fluted Console Table", price: "72,000", originalPrice: "90,000", discount: "20% Off", emi: "6400", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Foster Metal Leg Lounge Chair", price: "88,000", originalPrice: "1,10,000", discount: "20% Off", emi: "7822", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Architectural Oak Credenza", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "11111", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800" },
        { name: "Linear Ribbed Coffee Table", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800" },
        { name: "Structure Sideboard with Storage", price: "95,000", originalPrice: "1,18,750", discount: "20% Off", emi: "8444", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Contemporary Fluted Nightstand", price: "28,000", originalPrice: "35,000", discount: "20% Off", emi: "2488", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800" },
        { name: "Modern Grille TV Unit", price: "1,12,000", originalPrice: "1,40,000", discount: "20% Off", emi: "9955", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Minimalist Metal Leg Desk", price: "68,000", originalPrice: "85,000", discount: "20% Off", emi: "6044", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800" },
        { name: "Foster Three Seater Bench", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Ribbed Detail Wall Shelf", price: "12,500", originalPrice: "15,625", discount: "20% Off", emi: "1111", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Metropolitan Armchair - Charcoal", price: "58,000", originalPrice: "72,500", discount: "20% Off", emi: "5155", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Modern Linear Bed Frame", price: "1,65,000", originalPrice: "2,06,250", discount: "20% Off", emi: "14666", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
                            alt="Foster Living Hero"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-x-0 bottom-24 flex flex-col items-center text-white text-center px-4">
                            <span className="text-sm md:text-xl font-light tracking-[0.5em] uppercase mb-4 opacity-90">MODERN AND MODULAR</span>
                            <h1 className="text-4xl md:text-8xl mb-4 leading-tight uppercase font-bold tracking-tighter">
                                A DESIGNER TOUCH
                            </h1>
                            <p className="text-xs md:text-lg font-light tracking-[0.4em] uppercase opacity-80 max-w-2xl">
                                OUR EXCLUSIVE FOSTER COLLECTION
                            </p>
                        </div>
                    </div>
                </section>

                {/* Concept Section */}
                <section className="py-28 px-4 max-w-5xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-4xl md:text-6xl font-serif text-gray-900 font-light italic">Foster Collection</h3>
                        <div className="w-20 h-[1px] bg-black mx-auto"></div>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-4xl mx-auto">
                        The Foster collection is a modern masterpiece that effortlessly marries style and comfort.
                        Its fluted wooden frame, reminiscent of classic architectural detailing, is paired with sleek metal legs,
                        creating a harmonious blend of traditional and contemporary elements.
                    </p>
                </section>

                {/* Featured Highlight */}
                <section className="bg-[#f2f2f2] text-black overflow-hidden border-y border-gray-100">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 min-h-[600px]">
                        <div className="lg:col-span-5 p-12 md:p-24 flex flex-col justify-center space-y-10">
                            <span className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase">DESIGNER'S CHOICE</span>
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-7xl font-serif leading-tight">
                                    Foster Apartment Four Seater With Storage
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light">
                                    The Foster Apartment Four Seater Sofa with Storage is a perfect blend of style, functionality, and smart design for apartment spaces.
                                    This sofa features a fluted wooden frame and sleek metal legs, combining timeless elegance with contemporary appeal.
                                </p>
                            </div>
                            <button className="w-fit px-12 py-5 border border-black text-black text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500">
                                EXPLORE +
                            </button>
                        </div>
                        <div className="lg:col-span-7 relative h-[500px] md:h-auto group">
                            <Image
                                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1500"
                                alt="Foster Apartment Four Seater"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore More Section - 4 Rows */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif text-gray-900 font-normal">Explore more</h2>
                        <p className="text-gray-400 font-light tracking-[0.2em] uppercase text-xs">
                            Furniture to choose from our most promising range of artistries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20 lg:gap-y-28">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: (idx % 4) * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/5] bg-[#f5f5f5] overflow-hidden mb-8">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                    <button className="absolute top-5 right-5 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-red-500 hover:scale-110">
                                        <Heart size={20} />
                                    </button>
                                </div>

                                <div className="space-y-4 px-1 text-center">
                                    <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">{product.tag}</span>
                                    <h4 className="text-[16px] text-gray-900 font-medium group-hover:text-black transition-colors line-clamp-2 min-h-[48px]">
                                        {product.name}
                                    </h4>
                                    <div className="pt-2">
                                        <div className="flex flex-col items-center gap-1">
                                            <p className="text-[19px] font-bold text-gray-900 tracking-tight">₹{product.price}</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-[14px] text-gray-400 line-through font-light">₹{product.originalPrice}</p>
                                                <p className="text-[14px] text-orange-600 font-medium">{product.discount}</p>
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-orange-500 font-light italic mt-2">
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

export default FosterLiving;
