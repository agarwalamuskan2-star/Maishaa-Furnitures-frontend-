"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const BombayClubCollection = () => {
    const products = [
        { name: "Bombay Club Lounge Chair", price: "78,000", originalPrice: "97,500", discount: "20% Off", emi: "6933", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Colonial Three Seater Sofa", price: "1,95,000", originalPrice: "2,43,750", discount: "20% Off", emi: "17333", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800" },
        { name: "Regency Dining Table", price: "1,45,000", originalPrice: "1,81,250", discount: "20% Off", emi: "12888", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800" },
        { name: "Bombay Bar Stool", price: "24,000", originalPrice: "30,000", discount: "20% Off", emi: "2133", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Heritage Media Unit", price: "82,000", originalPrice: "1,02,500", discount: "20% Off", emi: "7288", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Bombay Club Side Table", price: "28,500", originalPrice: "35,625", discount: "20% Off", emi: "2533", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Victoria Wingbeat Chair", price: "64,000", originalPrice: "80,000", discount: "20% Off", emi: "5688", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800" },
        { name: "Bombay Club Buffet Console", price: "1,15,000", originalPrice: "1,43,750", discount: "20% Off", emi: "10222", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Antique Oak Bookcase", price: "92,000", originalPrice: "1,15,000", discount: "20% Off", emi: "8177", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
        { name: "Bombay Club Nesting Tables", price: "34,800", originalPrice: "43,500", discount: "20% Off", emi: "3093", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800" },
        { name: "Regency Dining Chair", price: "22,000", originalPrice: "27,500", discount: "20% Off", emi: "1955", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Bombay Club Ottoman", price: "28,000", originalPrice: "35,000", discount: "20% Off", emi: "2488", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Colonial High-Back Settee", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "11111", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Heritage Writing Desk", price: "72,000", originalPrice: "90,000", discount: "20% Off", emi: "6400", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800" },
        { name: "Bombay Club Floor Lamp", price: "18,500", originalPrice: "23,125", discount: "20% Off", emi: "1644", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800" },
        { name: "Victoria Plush Rug", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "4000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section with Padding */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2000"
                            alt="Bombay Club Hero"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="text-white text-5xl md:text-8xl tracking-tight font-light"
                            >
                                Bombay Club Collection
                            </motion.h1>
                        </div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-6xl mx-auto text-center space-y-10">
                    <h2 className="text-3xl md:text-4xl leading-tight">Heritage Reimagined</h2>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-2xl font-light max-w-5xl mx-auto italic">
                        "The Bombay Club Collection is a tribute to the timeless elegance of colonial craftsmanship.
                        Inspired by the grand architecture and warm textures of historic landmarks, each piece
                        is handcrafted using seasoned hardwoods and premium fabrics, bringing a sense of
                        stately grandeur to the modern home."
                    </p>
                </section>

                {/* Designer's Choice Section */}
                <section className="bg-[#fcfcfc] overflow-hidden border-t border-b border-gray-100">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 md:p-32 flex flex-col justify-center space-y-12 bg-white">
                            <div className="space-y-4">
                                <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">DESIGNER'S CHOICE</span>
                                <h2 className="text-4xl md:text-7xl text-gray-900 leading-tight">
                                    Bombay Club Lounge
                                </h2>
                            </div>

                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
                                A masterclass in vintage comfort. The Bombay Club Lounge Chair features a
                                deep-set frame, intricate hand-turned legs, and plush upholstery that
                                invites you to relax in old-world luxury.
                            </p>

                            <div className="flex items-center gap-12 pt-8">
                                <button className="border border-black px-12 py-5 text-sm font-light tracking-widest hover:bg-black hover:text-white transition-all uppercase">
                                    Explore +
                                </button>

                                <div className="flex items-center gap-6">
                                    <button className="p-2 border border-gray-200 rounded-full hover:bg-white transition-all">
                                        <ChevronLeft size={20} strokeWidth={1} />
                                    </button>
                                    <span className="text-sm font-light tracking-widest uppercase">1 / 2</span>
                                    <button className="p-2 border border-gray-200 rounded-full hover:bg-white transition-all">
                                        <ChevronRight size={20} strokeWidth={1} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square lg:aspect-auto h-full min-h-[600px]">
                            <Image
                                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200"
                                alt="Bombay Club Lounge Chair"
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
                            <h2 className="text-4xl md:text-6xl text-gray-900 tracking-tight">Shop the Collection</h2>
                            <p className="text-gray-400 font-light tracking-[0.3em] uppercase text-xs">
                                EXQUISITE CRAFTMANSHIP FOR STATELY LIVING
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
                                    className="group cursor-pointer p-4 border border-transparent hover:border-gray-50 transition-all text-center"
                                >
                                    <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden mb-10">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                                            <Heart size={18} />
                                        </button>

                                        {product.bestSeller && (
                                            <div className="absolute top-0 left-0 bg-black text-white text-[9px] px-5 py-2 font-bold tracking-[0.2em] uppercase">
                                                BEST SELLER
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">{product.tag}</span>
                                        <h4 className="text-[19px] text-gray-900 lowercase italic group-hover:text-amber-800 transition-colors min-h-[54px] leading-snug">
                                            {product.name}
                                        </h4>
                                        <div className="pt-2 border-t border-gray-100 w-1/3 mx-auto">
                                            <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>
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

export default BombayClubCollection;
