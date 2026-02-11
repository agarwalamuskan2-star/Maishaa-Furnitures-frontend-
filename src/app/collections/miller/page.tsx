"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const MillerLoungeSeries = () => {
    const products = [
        { name: "Miller Sectional Sofa", price: "2,45,000", originalPrice: "3,06,250", discount: "20% Off", emi: "21777", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800" },
        { name: "Miller Three Seater Sofa", price: "1,85,000", originalPrice: "2,31,250", discount: "20% Off", emi: "16444", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=800" },
        { name: "Miller Cane Three Seater Sofa", price: "1,95,000", originalPrice: "2,43,750", discount: "20% Off", emi: "17333", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800" },
        { name: "Miller Diwan", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "11111", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540574133041-6811f63b8448?q=80&w=800" },
        { name: "Miller Lounge Chair", price: "72,000", originalPrice: "90,000", discount: "20% Off", emi: "6400", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Miller Coffee Table", price: "48,000", originalPrice: "60,000", discount: "20% Off", emi: "4266", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Miller Side Table", price: "24,000", originalPrice: "30,000", discount: "20% Off", emi: "2133", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800" },
        { name: "Miller Ottoman", price: "32,000", originalPrice: "40,000", discount: "20% Off", emi: "2844", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Miller Media Console", price: "95,000", originalPrice: "1,18,750", discount: "20% Off", emi: "8444", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Miller Bookshelf", price: "82,000", originalPrice: "1,02,500", discount: "20% Off", emi: "7288", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
        { name: "Miller Desk", price: "88,000", originalPrice: "1,10,000", discount: "20% Off", emi: "7822", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800" },
        { name: "Miller Bench", price: "54,000", originalPrice: "67,500", discount: "20% Off", emi: "4800", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Miller Floor Lamp", price: "18,000", originalPrice: "22,500", discount: "20% Off", emi: "1600", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1507473885765-e6ed657f99be?q=80&w=800" },
        { name: "Miller Rug", price: "42,000", originalPrice: "52,500", discount: "20% Off", emi: "3733", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?q=80&w=800" },
        { name: "Miller Wall Art Set", price: "12,000", originalPrice: "15,000", discount: "20% Off", emi: "1066", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800" },
        { name: "Miller Planter Large", price: "8,500", originalPrice: "10,625", discount: "20% Off", emi: "755", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000"
                        alt="Miller Lounge Series Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </section>

                {/* Narrative Section */}
                <section className="py-20 px-4 max-w-5xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">Miller Lounge Series</h1>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light">
                        Experience the perfect balance of aesthetics and relaxation with The Miller Lounge Collection.
                    </p>
                </section>

                {/* Designer's Choice Section */}
                <section className="bg-[#fcfcfc] overflow-hidden">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 md:p-24 flex flex-col justify-center space-y-12 bg-white">
                            <div className="space-y-4">
                                <span className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">Designer's Choice</span>
                                <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                                    Miller Three Seater Sofa
                                </h2>
                            </div>

                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
                                The Miller Three Seater makes for an enticing addition to any living space.
                                Its warm texture and feel of the wood lend bold personality to the sofa's
                                structure in contrast to the generously padded seat and backrest cushions..
                            </p>

                            <div className="flex items-center gap-12">
                                <button className="border border-black px-10 py-4 text-sm font-light tracking-widest hover:bg-black hover:text-white transition-all uppercase">
                                    Explore +
                                </button>

                                <div className="flex items-center gap-6">
                                    <button className="p-2 hover:text-gray-400 transition-colors">
                                        <ChevronLeft size={24} strokeWidth={1} />
                                    </button>
                                    <span className="text-sm font-light tracking-widest">1 / 2</span>
                                    <button className="p-2 hover:text-gray-400 transition-colors">
                                        <ChevronRight size={24} strokeWidth={1} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square lg:aspect-auto h-full min-h-[500px]">
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200"
                                alt="Miller Three Seater Sofa"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore More Section - 4 Rows */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-t border-gray-100">
                    <div className="max-w-[1920px] mx-auto text-center">
                        <div className="space-y-4 mb-24">
                            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Explore more</h2>
                            <p className="text-gray-400 font-light tracking-[0.2em] uppercase text-xs">
                                Furniture to choose from our most promising range of artistries.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-24">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer text-left"
                                >
                                    <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden mb-8">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-red-500">
                                            <Heart size={18} />
                                        </button>
                                        {product.bestSeller && (
                                            <div className="absolute top-0 left-0 bg-black text-white text-[9px] px-4 py-1.5 font-bold tracking-[0.3em] uppercase">
                                                BEST SELLER
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-1.5 px-1">
                                            <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">{product.tag}</span>
                                            <h4 className="text-[17px] text-gray-800 font-normal group-hover:text-black transition-colors min-h-[44px]">
                                                {product.name}
                                            </h4>
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

export default MillerLoungeSeries;
