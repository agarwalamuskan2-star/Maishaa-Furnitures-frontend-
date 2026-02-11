"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const TravancoreRootsCollection = () => {
    const products = [
        { name: "Travancore Teak Lounge Chair", price: "84,000", originalPrice: "1,05,000", discount: "20% Off", emi: "7466", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Malabar Teak Dining Table", price: "1,55,000", originalPrice: "1,93,750", discount: "20% Off", emi: "13777", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800" },
        { name: "Backwater Cane Settee", price: "1,15,000", originalPrice: "1,43,750", discount: "20% Off", emi: "10222", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Spice Coast Coffee Table", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Kerala Heritage Media Unit", price: "98,000", originalPrice: "1,22,500", discount: "20% Off", emi: "8711", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Kovalam Teak Side Table", price: "24,500", originalPrice: "30,625", discount: "20% Off", emi: "2177", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800" },
        { name: "Anamudi Cane Armchair", price: "52,000", originalPrice: "65,000", discount: "20% Off", emi: "4622", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800" },
        { name: "Periyar Teak Console", price: "68,000", originalPrice: "85,000", discount: "20% Off", emi: "6044", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Wayanad Teak Bookshelf", price: "88,000", originalPrice: "1,10,000", discount: "20% Off", emi: "7822", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
        { name: "Kumarakom Daybed", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "11111", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800" },
        { name: "Munnar Writing Desk", price: "62,000", originalPrice: "77,500", discount: "20% Off", emi: "5511", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800" },
        { name: "Cochin Heritage Stool", price: "18,500", originalPrice: "23,125", discount: "20% Off", emi: "1644", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Cardamom Teak Bench", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800" },
        { name: "Vembanad Heritage Runner", price: "12,000", originalPrice: "15,000", discount: "20% Off", emi: "1066", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?q=80&w=800" },
        { name: "Travancore Wall Art Panel", price: "28,000", originalPrice: "35,000", discount: "20% Off", emi: "2488", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800" },
        { name: "Spice Coast Brass Lamp", price: "14,500", originalPrice: "18,125", discount: "20% Off", emi: "1288", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000"
                        alt="Travancore Roots Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            className="space-y-6"
                        >
                            <h1 className="text-white text-5xl md:text-9xl font-serif tracking-tight leading-[0.8] lowercase italic">
                                Travancore
                            </h1>
                            <span className="block text-white text-lg md:text-3xl font-light tracking-[0.4em] uppercase">
                                roots of heritage
                            </span>
                        </motion.div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-6xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <span className="text-xs font-bold tracking-[0.5em] text-amber-800 uppercase">Legacy in Wood</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tight">The Teak Story</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg md:text-2xl font-light max-w-4xl mx-auto">
                        "Travancore Roots is an emotional journey back to the lush landscapes and architectural
                        marvels of old Malabar. Each piece is a celebration of the legendary Travancore teak –
                        known for its unparalleled strength and golden grain. We've married traditional
                        mortise-and-tenon joinery with a clean, tropical minimalist silhouette to create
                        furniture that doesn't just fill a room, but tells a story of generations."
                    </p>
                </section>

                {/* Designer's Choice Section */}
                <section className="bg-[#fcf8f5] overflow-hidden">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 md:p-32 flex flex-col justify-center space-y-12 bg-white lg:order-2">
                            <div className="space-y-4">
                                <span className="text-xs font-bold tracking-[0.3em] text-amber-800 uppercase">DESIGNER'S CHOICE</span>
                                <h2 className="text-4xl md:text-7xl font-serif text-gray-900 leading-[1.1]">
                                    Travancore Teak Lounge
                                </h2>
                            </div>

                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
                                Our signature lounge chair is a tribute to the "Charupady" – the traditional built-in
                                seating of Kerala. Hand-carved from solid reclaimed teak and finished with locally
                                sourced cane, it offers a throne-like experience that breathes with the tropical air.
                            </p>

                            <div className="flex items-center gap-12 pt-8">
                                <button className="bg-amber-900 text-white px-12 py-5 text-sm font-light tracking-widest hover:bg-amber-950 transition-all uppercase rounded-sm">
                                    Explore +
                                </button>

                                <div className="flex items-center gap-6">
                                    <button className="p-3 border border-gray-100 rounded-full hover:bg-amber-50 transition-all">
                                        <ChevronLeft size={24} strokeWidth={1} className="text-amber-900" />
                                    </button>
                                    <span className="text-sm font-light tracking-widest text-amber-900">01 / 03</span>
                                    <button className="p-3 border border-gray-100 rounded-full hover:bg-amber-50 transition-all">
                                        <ChevronRight size={24} strokeWidth={1} className="text-amber-900" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square lg:aspect-auto h-full min-h-[600px] lg:order-1 grayscale hover:grayscale-0 transition-all duration-1000">
                            <Image
                                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200"
                                alt="Travancore Teak Lounge"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore Grid - 4 Rows */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto">
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 lowercase italic">Shop the Roots</h2>
                            <p className="text-gray-400 font-light tracking-[0.4em] uppercase text-[10px]">
                                CRAFTED IN TEAK . INSPIRED BY TRADITION .
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
                                    className="group cursor-pointer p-4 border border-transparent hover:border-amber-50 transition-all text-center"
                                >
                                    <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden mb-10">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-gray-400 hover:text-amber-600 transition-colors">
                                            <Heart size={18} />
                                        </button>

                                        {product.bestSeller && (
                                            <div className="absolute top-0 left-0 bg-amber-900 text-white text-[9px] px-5 py-2 font-bold tracking-[0.2em] uppercase">
                                                BEST SELLER
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] text-amber-800 font-bold tracking-[0.3em] uppercase">{product.tag}</span>
                                        <h4 className="text-[20px] text-gray-800 font-serif lowercase italic group-hover:text-amber-900 transition-colors min-h-[54px] leading-snug px-4">
                                            {product.name}
                                        </h4>
                                        <div className="pt-3 border-t border-gray-50 max-w-[40%] mx-auto">
                                            <p className="text-[18px] font-bold text-gray-900 tracking-tight">₹{product.price}</p>
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

export default TravancoreRootsCollection;
