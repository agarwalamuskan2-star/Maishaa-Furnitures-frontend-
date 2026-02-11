"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const SaturnCollection = () => {
    const products = [
        { name: "Saturn Marble Dining Table", price: "1,42,000", originalPrice: "1,77,500", discount: "20% Off", emi: "12622", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1577145940719-0c7670d95af2?q=80&w=800" },
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
        { name: "Saturn Pulsar Rug", price: "28,000", originalPrice: "35,000", discount: "20% Off", emi: "2488", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?q=80&w=800" },
        { name: "Saturn Cosmos Wall Art", price: "14,500", originalPrice: "18,125", discount: "20% Off", emi: "1288", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800" },
        { name: "Saturn Stellar Lamp", price: "9,800", originalPrice: "12,250", discount: "20% Off", emi: "871", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800" },
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
                                className="text-white text-5xl md:text-8xl font-serif tracking-tighter"
                            >
                                Saturn Table Collection
                            </motion.h1>
                        </div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-10">
                    <div className="space-y-4">
                        <span className="text-xs font-bold tracking-[0.4em] text-orange-600 uppercase">Celestial Craftsmanship</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight italic">Circles of Elegance</h2>
                    </div>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-2xl font-light max-w-4xl mx-auto">
                        Inspired by the balanced rings of the cosmos, the Saturn Table Collection focuses on circular
                        perfection and balanced weight. Each piece features layered textures and signature rounded
                        edges that evoke a sense of orbital harmony within your living space.
                    </p>
                </section>

                {/* Designer's Choice - Saturn Rings Section */}
                <section className="bg-[#f9f9f9] py-32">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 px-4">
                        <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
                            <div className="space-y-4">
                                <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">Designer's Choice</span>
                                <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                                    Saturn Rings Coffee Table
                                </h2>
                            </div>

                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
                                The centerpiece of the collection, the Saturn Rings Coffee Table features a
                                dual-layered walnut top with a recessed brass inlay that mimics an orbital path.
                                Its heavy-set base provides a grounded contrast to the airy floating effect of
                                the tabletop.
                            </p>

                            <div className="flex items-center gap-12 pt-8">
                                <button className="bg-black text-white px-12 py-5 text-sm font-light tracking-widest hover:bg-gray-800 transition-all uppercase">
                                    View Details +
                                </button>

                                <div className="flex items-center gap-6">
                                    <button className="p-2 border border-gray-200 rounded-full hover:bg-white transition-all">
                                        <ChevronLeft size={20} strokeWidth={1} />
                                    </button>
                                    <button className="p-2 border border-gray-200 rounded-full hover:bg-white transition-all">
                                        <ChevronRight size={20} strokeWidth={1} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative aspect-[4/3] shadow-2xl overflow-hidden group">
                            <Image
                                src="https://images.unsplash.com/photo-1581404476143-fb31d742929f?q=80&w=1200"
                                alt="Saturn Rings Coffee Table"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore Grid - 4 Rows */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto">
                        <div className="text-center mb-24 space-y-4">
                            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 italic">Explore the Galaxy</h2>
                            <p className="text-gray-400 font-light tracking-[0.3em] uppercase text-xs">
                                CURATED TABLES FOR THE MODERN DISCERNING HOME
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-24">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative aspect-[3/4] bg-white border border-gray-100 overflow-hidden mb-10 transition-shadow duration-500 hover:shadow-xl">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                                            <Heart size={20} />
                                        </button>

                                        {product.bestSeller && (
                                            <div className="absolute top-0 left-0 bg-orange-600 text-white text-[9px] px-6 py-2 font-bold tracking-[0.3em] uppercase">
                                                BEST SELLER
                                            </div>
                                        )}
                                        {product.tag === 'DESIGNER\'S PICK' && (
                                            <div className="absolute top-0 left-0 bg-black text-white text-[9px] px-6 py-2 font-bold tracking-[0.3em] uppercase">
                                                DESIGNER'S PICK
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-4 text-center">
                                        <span className="text-[10px] text-orange-600 font-bold tracking-[0.2em] uppercase">{product.tag}</span>
                                        <h4 className="text-[19px] text-gray-900 font-serif lowercase italic group-hover:text-orange-600 transition-colors">
                                            {product.name}
                                        </h4>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="flex items-center gap-4">
                                                <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>
                                                <p className="text-[14px] text-gray-400 line-through">₹{product.originalPrice}</p>
                                            </div>
                                            <p className="text-[11px] text-gray-400 font-light tracking-widest uppercase">
                                                EMI starting from ₹ {product.emi}
                                            </p>
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

export default SaturnCollection;
