"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, Plus, Minus, Shield, Leaf, Trees, UserCheck, ChevronRight } from "lucide-react";

const JessDesign = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const products = [
        { name: "Jess My Home Sofa - Cognac Leather", price: "4,45,000", originalPrice: "5,56,250", discount: "20% Off", emi: "39555", tag: "IMPORT", bestSeller: true, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800" },
        { name: "Jess Earl Low Armchair", price: "1,85,000", originalPrice: "2,31,250", discount: "20% Off", emi: "16444", tag: "IMPORT", bestSeller: true, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Jess Norman Dining Chair", price: "52,000", originalPrice: "65,000", discount: "20% Off", emi: "4622", tag: "IMPORT", bestSeller: false, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800" },
        { name: "Jess Shuffle Side Table", price: "48,000", originalPrice: "60,000", discount: "20% Off", emi: "4266", tag: "IMPORT", bestSeller: false, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" },
        { name: "Zoro High-Back Lounge", price: "2,15,000", originalPrice: "2,68,750", discount: "20% Off", emi: "19111", tag: "IMPORT", bestSeller: true, image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=800" },
        { name: "Dutch Craft Coffee Table", price: "82,000", originalPrice: "1,02,500", discount: "20% Off", emi: "7288", tag: "IMPORT", bestSeller: false, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800" },
        { name: "荷兰 Series Bench", price: "74,000", originalPrice: "92,500", discount: "20% Off", emi: "6577", tag: "IMPORT", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Vintage Lux Ottoman", price: "32,000", originalPrice: "40,000", discount: "20% Off", emi: "2844", tag: "IMPORT", bestSeller: true, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800" },
        { name: "Oss Heritage Console", price: "95,000", originalPrice: "1,18,750", discount: "20% Off", emi: "8444", tag: "IMPORT", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800" },
        { name: "Leather Wrap Stool", price: "18,400", originalPrice: "23,000", discount: "20% Off", emi: "1635", tag: "IMPORT", bestSeller: false, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800" },
        { name: "Netherlands Study Desk", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "11111", tag: "IMPORT", bestSeller: false, image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800" },
        { name: "Pure Silk Accent Pillow", price: "4,500", originalPrice: "5,625", discount: "20% Off", emi: "400", tag: "IMPORT", bestSeller: true, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800" },
        { name: "Design Icon Lounge", price: "1,98,000", originalPrice: "2,47,500", discount: "20% Off", emi: "17600", tag: "IMPORT", bestSeller: false, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800" },
        { name: "Oss Sideboard - Oak", price: "1,12,000", originalPrice: "1,40,000", discount: "20% Off", emi: "9955", tag: "IMPORT", bestSeller: false, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" },
        { name: "Amsterdam Floor Lamp", price: "24,000", originalPrice: "30,000", discount: "20% Off", emi: "2133", tag: "IMPORT", bestSeller: false, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800" },
        { name: "Holland Minimal Nightstand", price: "12,800", originalPrice: "16,000", discount: "20% Off", emi: "1137", tag: "IMPORT", bestSeller: true, image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section - Full Width Image */}
                <section className="relative w-full h-[65vh] md:h-[95vh] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
                        alt="Jess Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center text-white px-4">
                        <span className="text-xs md:text-sm font-bold tracking-[0.6em] uppercase mb-8 opacity-80">INTRODUCING</span>

                        {/* Custom Brand Logo Overlay */}
                        <div className="relative mb-8">
                            <div className="w-32 h-32 md:w-56 md:h-56 bg-[#f15a24] rounded-full flex items-center justify-center shadow-2xl">
                                <span className="text-4xl md:text-8xl font-serif font-bold italic tracking-tighter">Jess</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-8 h-[1px] bg-white opacity-40"></div>
                            <span className="text-2xl md:text-4xl font-light tracking-[0.2em] font-serif">X</span>
                            <div className="w-8 h-[1px] bg-white opacity-40"></div>
                        </div>

                        <h2 className="mt-8 text-3xl md:text-7xl font-bold tracking-[0.4em] uppercase">DTALEMODERN</h2>
                    </div>
                </section>

                {/* Narrative Section - Dutch Icon Intro */}
                <section className="py-32 px-4 max-w-5xl mx-auto text-center">
                    <p className="text-2xl md:text-5xl font-serif text-gray-900 leading-[1.3] font-normal">
                        Welcome to the intriguing world of Jess. Immerse yourself in the informal ambience
                        of our furniture. Jess, a design icon from the Netherlands,
                        now exclusively in India with Dtale.
                    </p>
                </section>

                {/* Why Jess Section - Sustainable Commitment */}
                <section className="py-24 bg-[#fafafa]">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-8 items-center">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h3 className="text-4xl md:text-6xl font-serif text-gray-900 border-b-2 border-black w-fit pb-4">Why Jess</h3>
                                <p className="text-gray-500 text-lg md:text-2xl font-light leading-relaxed max-w-lg">
                                    We are deeply committed to improving the environment through sustainable business practices.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                                <div className="space-y-4">
                                    <div className="p-4 bg-white shadow-sm w-fit border border-gray-100 rounded-lg">
                                        <Shield className="text-orange-600" size={24} />
                                    </div>
                                    <h4 className="text-xl font-medium text-gray-900">Natural Leather</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white shadow-sm w-fit border border-gray-100 rounded-lg">
                                        <Leaf className="text-orange-600" size={24} />
                                    </div>
                                    <h4 className="text-xl font-medium text-gray-900">High-end Fabric</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white shadow-sm w-fit border border-gray-100 rounded-lg">
                                        <Trees className="text-orange-600" size={24} />
                                    </div>
                                    <h4 className="text-xl font-medium text-gray-900">Natural Wood</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white shadow-sm w-fit border border-gray-100 rounded-lg">
                                        <UserCheck className="text-orange-600" size={24} />
                                    </div>
                                    <h4 className="text-xl font-medium text-gray-900">Exclusive designer support</h4>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200"
                                alt="Jess Craftsmanship"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Discover Jess - Profile Section */}
                <section className="py-32 px-8 max-w-[1400px] mx-auto">
                    <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-20 text-center md:text-left">Discover Jess Design</h2>

                    <div className="space-y-8">
                        {/* Maarten profile Item */}
                        <div className="border-t border-gray-200">
                            <div
                                onClick={() => toggleAccordion(0)}
                                className="flex justify-between items-center py-10 cursor-pointer group"
                            >
                                <h3 className="text-2xl md:text-4xl font-serif text-gray-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight">Maarten Van De Goor</h3>
                                {openIndex === 0 ? <Minus size={24} /> : <Plus size={24} />}
                            </div>

                            <AnimatePresence>
                                {openIndex === 0 && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 items-center">
                                            <div className="lg:col-span-5 relative aspect-square grayscale">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800"
                                                    alt="Maarten Van De Goor"
                                                    fill
                                                    className="object-cover rounded-sm"
                                                />
                                            </div>
                                            <div className="lg:col-span-7 space-y-8">
                                                <h4 className="text-xl md:text-2xl font-bold text-gray-400 font-serif lowercase italic">Director / Owner Jess</h4>
                                                <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-light">
                                                    Jess's home base has always been in the city of Oss, where our design
                                                    and production processes are still located. An authentic Dutch product!
                                                    Our showroom displays all of our models and furniture families,
                                                    and this is where you get to see, feel and truly experience Jess.
                                                </p>
                                                <button className="flex items-center gap-3 text-orange-600 font-bold uppercase tracking-widest text-xs">
                                                    VIEW STORY <ChevronRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Other Items Placeholders */}
                        <div className="border-t border-gray-200">
                            <div
                                onClick={() => toggleAccordion(1)}
                                className="flex justify-between items-center py-10 cursor-pointer group"
                            >
                                <h3 className="text-2xl md:text-4xl font-serif text-gray-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight">Over 30 years of Jess</h3>
                                <Plus size={24} />
                            </div>
                        </div>

                        <div className="border-t border-b border-gray-200">
                            <div
                                onClick={() => toggleAccordion(2)}
                                className="flex justify-between items-center py-10 cursor-pointer group"
                            >
                                <h3 className="text-2xl md:text-4xl font-serif text-gray-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight">Our Collection</h3>
                                <Plus size={24} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-32 bg-white text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-20">How It Works</h2>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-20">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center space-y-8 px-8 border-r border-gray-100 last:border-0">
                            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">1</div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-serif text-gray-900">Fill Our Enquiry Form</h3>
                                <p className="text-gray-500 font-light text-lg">
                                    Start by filling out our enquiry form to effortlessly complete your purchase
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center space-y-8 px-8 border-r border-gray-100 last:border-0">
                            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">2</div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-serif text-gray-900">Get Catalogue</h3>
                                <p className="text-gray-500 font-light text-lg">
                                    Our team will share the catalogue with you
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center space-y-8 px-8">
                            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">3</div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-serif text-gray-900">Finalise on Call</h3>
                                <p className="text-gray-500 font-light text-lg">
                                    We can finalise the details on call to ensure everything is tailored to your needs
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className="border border-black px-12 py-4 text-sm font-light tracking-widest hover:bg-black hover:text-white transition-all uppercase">
                        Enquire Now +
                    </button>
                </section>

                {/* Meet The Jess Collection - Refined Grid */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-24">Meet The Jess Collection</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-24">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer border border-transparent hover:border-gray-100 transition-all p-4"
                                >
                                    <div className="relative aspect-[4/5] bg-[#f9f9f9] overflow-hidden mb-8">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                                            <Heart size={18} strokeWidth={1} />
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <span className={`text-[10px] font-bold tracking-widest px-3 py-1 bg-gray-100 text-gray-500 rounded-sm uppercase ${product.tag === 'SOLD OUT' ? 'bg-red-50 text-red-400' : ''}`}>
                                                {product.tag === 'IMPORT' ? 'READY TO SHIP' : product.tag}
                                            </span>
                                            <h4 className="text-[18px] text-gray-900 font-normal leading-tight min-h-[44px]">
                                                {product.name}
                                            </h4>
                                        </div>

                                        <p className="text-[18px] font-bold text-gray-900">₹{product.price}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Final Hero Section - After Collection Grid */}
                <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2000"
                        alt="Jess Lifestyle"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default JessDesign;
