"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const IncurveEpisodes = () => {
    const products = [
        { name: "Preston Curved Lounge Chair - Manuka Honey", price: "92,000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Preston Curved Loveseat - Manuka Honey", price: "1,45,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800" },
        { name: "Preston Curved Three Seater Sofa - Manuka Honey", price: "2,10,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800" },
        { name: "Elena Curved Lounge Chair", price: "92,000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Curva Velvet Armchair", price: "78,000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800" },
        { name: "Orbital Round Coffee Table", price: "45,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Luna Crescent Sofa", price: "1,85,000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800" },
        { name: "Serpentine Bench", price: "65,000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Lotus Petal Chair", price: "55,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=800" },
        { name: "Helix Spiral Side Table", price: "22,000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800" },
        { name: "Crescent Moon Headboard", price: "38,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Wave Form Dining Table", price: "1,20,000", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800" },
        { name: "Pebble Stone Stool", price: "15,000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Cloud Nine Sectional", price: "3,20,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=800" },
        { name: "Aura Round Mirror", price: "12,000", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800" },
        { name: "Infinity Loop Shelf", price: "28,000", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
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
                            alt="Incurve Collection"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-x-0 bottom-12 flex flex-col items-center text-white text-center px-4">
                            <h1 className="text-4xl md:text-7xl font-light tracking-tighter mb-2">
                                <span className="font-bold">INCURVE</span> The Soft Curve Collection
                            </h1>
                            <p className="text-sm md:text-lg font-light tracking-widest uppercase opacity-90">
                                Curves that flow like whispers of comfort
                            </p>
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <section className="py-20 px-4 max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif text-gray-900 italic">Incurve Episodes</h2>
                    <p className="text-gray-600 leading-relaxed text-lg font-light">
                        Step into a realm where furniture becomes an expression of art. InCurve Episode is not merely a collection;
                        it is an artistic narrative that invites you to immerse yourself in the beauty of curved lines and sculpted forms.
                        Every piece is a conversation starter, a statement that speaks volumes about your discerning taste.
                    </p>
                </section>

                {/* Designer's Choice */}
                <section className="bg-[#f2f2f2] w-full">
                    <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className="p-12 md:p-24 space-y-8">
                            <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">Designer's Choice</span>
                            <h3 className="text-4xl md:text-6xl font-serif text-gray-900">Tess Curved Sofa</h3>
                            <p className="text-gray-600 leading-relaxed text-lg font-light">
                                The Tess Curved Sofa brings sculptural charm to any setting with its flowing silhouette and rounded contours.
                                Its asymmetrical backrest and deep, generous seat offer both visual intrigue and laid-back comfort.
                            </p>
                            <button className="px-10 py-4 border border-black text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
                                Explore +
                            </button>
                        </div>
                        <div className="relative h-[400px] md:h-full min-h-[500px]">
                            <Image
                                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop"
                                alt="Tess Curved Sofa"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Explore More Section */}
                <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-20">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Explore more</h2>
                        <p className="text-gray-500 font-light tracking-wide uppercase text-sm">
                            Furniture to choose from our most promising range of artistries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-square bg-[#f9f9f9] overflow-hidden mb-6">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-500">
                                        <Heart size={18} />
                                    </button>
                                    {product.bestSeller && (
                                        <div className="absolute top-0 left-0 bg-black text-white text-[10px] px-3 py-1 font-bold">
                                            BEST SELLER
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <span className="text-[10px] text-gray-400 font-bold tracking-widest">{product.tag}</span>
                                    <h4 className="text-[14px] text-gray-800 font-medium group-hover:text-black transition-colors line-clamp-2">
                                        {product.name}
                                    </h4>
                                    <p className="text-[15px] font-semibold text-gray-900">₹{product.price}</p>
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

export default IncurveEpisodes;
