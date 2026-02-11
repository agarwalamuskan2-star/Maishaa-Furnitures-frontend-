"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const ApartmentLiving = () => {
    const products = [
        { name: "Eden Single Seater", price: "75,920", originalPrice: "94,900", discount: "20% Off", emi: "6746", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Eden Loveseat", price: "1,12,000", originalPrice: "1,40,000", discount: "20% Off", emi: "9951", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=800" },
        { name: "Candice Wood Single Seater", price: "71,120", originalPrice: "88,900", discount: "20% Off", emi: "6319", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800" },
        { name: "Candice Wood Loveseat", price: "1,11,920", originalPrice: "1,39,900", discount: "20% Off", emi: "9944", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800" },
        { name: "Urban Compact Sofa", price: "85,600", originalPrice: "1,07,000", discount: "20% Off", emi: "7610", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800" },
        { name: "Metro Side Table", price: "12,400", originalPrice: "15,500", discount: "20% Off", emi: "1102", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Loft Studio Bed", price: "98,000", originalPrice: "1,22,500", discount: "20% Off", emi: "8711", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Flexi Wall Shelf", price: "8,900", originalPrice: "11,125", discount: "20% Off", emi: "791", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Skylight Coffee Table", price: "32,000", originalPrice: "40,000", discount: "20% Off", emi: "2844", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800" },
        { name: "Nordic Lounge Chair", price: "42,500", originalPrice: "53,125", discount: "20% Off", emi: "3777", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Studio Desk Pro", price: "28,400", originalPrice: "35,500", discount: "20% Off", emi: "2524", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800" },
        { name: "Petite Dining Set", price: "54,000", originalPrice: "67,500", discount: "20% Off", emi: "4800", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800" },
        { name: "Harbor Ottoman", price: "15,200", originalPrice: "19,000", discount: "20% Off", emi: "1351", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Crest Bookcase", price: "44,800", originalPrice: "56,000", discount: "20% Off", emi: "3982", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800" },
        { name: "Vista Mirror Small", price: "9,600", originalPrice: "12,000", discount: "20% Off", emi: "853", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800" },
        { name: "Zenith Bench", price: "24,000", originalPrice: "30,000", discount: "20% Off", emi: "2133", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Compact Wardrobe", price: "68,000", originalPrice: "85,000", discount: "20% Off", emi: "6044", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800" },
        { name: "Pivot Floor Lamp", price: "18,400", originalPrice: "23,000", discount: "20% Off", emi: "1635", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800" },
        { name: "Nest Bar Stool", price: "11,200", originalPrice: "14,000", discount: "20% Off", emi: "995", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Corner Ease Armchair", price: "38,500", originalPrice: "48,125", discount: "20% Off", emi: "3422", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800" },
        { name: "Sleek Media Console", price: "41,200", originalPrice: "51,500", discount: "20% Off", emi: "3662", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Minimal Daybed", price: "72,800", originalPrice: "91,000", discount: "20% Off", emi: "6471", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Eco Rug 5x7", price: "14,400", originalPrice: "18,000", discount: "20% Off", emi: "1280", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=800" },
        { name: "Aura Pendant Light", price: "7,200", originalPrice: "9,000", discount: "20% Off", emi: "640", tag: "READY TO SHIP", bestSeller: true, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                        alt="Apartment Living Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                        <span className="text-sm md:text-xl font-light tracking-[0.3em] uppercase mb-4 opacity-90">apartment living</span>
                        <h1 className="text-4xl md:text-8xl font-serif mb-6 leading-tight">
                            Small Space, Big Desires
                        </h1>
                        <p className="text-xs md:text-lg font-light tracking-[0.4em] uppercase opacity-80">
                            good things come to those who desire
                        </p>
                    </div>
                </section>

                {/* Description Section */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center space-y-8">
                    <h3 className="text-4xl md:text-6xl font-serif text-gray-900">Apartment Living</h3>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light max-w-3xl mx-auto">
                        Our curated apartment collection is designed to transform limited spaces into beautiful, efficient, and inspiring homes.
                    </p>
                </section>

                {/* Explore More Section */}
                <section className="pb-32 px-4 sm:px-8 md:px-16 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-24">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden mb-6">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-red-500 hover:scale-110">
                                        <Heart size={18} />
                                    </button>
                                    {product.bestSeller && (
                                        <div className="absolute top-0 left-0 bg-black text-white text-[10px] px-4 py-1.5 font-bold tracking-widest">
                                            BEST SELLER
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">{product.tag}</span>
                                    <h4 className="text-[17px] text-gray-900 font-medium group-hover:text-black transition-colors">
                                        {product.name}
                                    </h4>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <p className="text-[17px] font-bold text-gray-900">₹{product.price}</p>
                                            <p className="text-[14px] text-gray-400 line-through">₹{product.originalPrice}</p>
                                            <p className="text-[14px] text-orange-500 font-medium">{product.discount}</p>
                                        </div>
                                        <p className="text-[13px] text-gray-500 font-light italic">
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

export default ApartmentLiving;
