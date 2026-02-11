"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";

const ShoeRackCollection = () => {
    const products = [
        { name: "Vivo Slatted Shoe Rack", price: "51,920", originalPrice: "64,900", discount: "20% Off", emi: "3279", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000" },
        { name: "Vivo Slatted Shoe Console", price: "99,920", originalPrice: "124,900", discount: "20% Off", emi: "5444", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000" },
        { name: "Vivo Slatted Shoe Chest", price: "75,520", originalPrice: "94,400", discount: "20% Off", emi: "4211", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000" },
        { name: "Rio Rattan Shoe Rack", price: "47,920", originalPrice: "59,900", discount: "20% Off", emi: "5024", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000" },
        { name: "Rio Rattan Shoe Console", price: "95,920", originalPrice: "119,900", discount: "20% Off", emi: "10056", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000" },
        { name: "Rio Rattan Shoe Chest", price: "71,920", originalPrice: "89,900", discount: "20% Off", emi: "7540", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans">
            <Header />

            <main className="flex-1">
                {/* Header Title Section */}
                <div className="pt-32 pb-8 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 uppercase tracking-widest">
                        Shoe Racks
                    </h1>
                </div>

                {/* Breadcrumbs Section */}
                <div className="py-6 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-b border-gray-100">
                    <nav className="flex items-center gap-2 text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={10} />
                        <Link href="/furniture" className="hover:text-black transition-colors">Furniture</Link>
                        <ChevronRight size={10} />
                        <Link href="/furniture/entryway" className="hover:text-black transition-colors">Entryway</Link>
                        <ChevronRight size={10} />
                        <span className="text-black">Shoe Racks</span>
                    </nav>
                </div>

                {/* Main Collection Section with Sidebar */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
                            <div>
                                <h3 className="text-xl font-serif text-gray-900 mb-8 border-b border-gray-100 pb-4">Browse by</h3>

                                <div className="space-y-10">
                                    {/* Product Type */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Product Type</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {["Shoe Racks (12)", "Shoe Consoles (4)", "Shoe Chests (3)"].map((type) => (
                                                <li key={type} className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                    <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-black transition-colors"></div>
                                                    <span className="text-[14px] font-light">{type}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Price */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Price</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <div className="px-1 pt-2">
                                            <div className="h-0.5 bg-gray-200 relative mb-6">
                                                <div className="absolute left-0 right-0 h-full bg-black"></div>
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-500">
                                                    <span>Min</span>
                                                    <ChevronDown size={14} />
                                                </div>
                                                <span className="text-gray-400">to</span>
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-900">
                                                    <span>₹ 150000</span>
                                                    <ChevronDown size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Discount */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Discount</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {["10% and above", "20% and above", "30% and above"].map((disc) => (
                                                <li key={disc} className="flex items-center gap-3 text-gray-500 cursor-pointer">
                                                    <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                    <span className="text-[14px] font-light">{disc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                                <div className="space-y-2">
                                    <p className="text-gray-400 font-light tracking-[0.1em] text-sm italic font-serif uppercase">
                                        19 RESULTS FOUND
                                    </p>
                                </div>
                                <div className="flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-950 border-b border-black pb-1 cursor-pointer">
                                    Sort: Featured
                                    <ChevronDown size={14} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                                {products.map((product, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group cursor-pointer flex flex-col bg-white"
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden bg-[#f9f9f9]">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <button className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow-sm hover:text-red-500 transition-all duration-300 z-10 group/heart">
                                                <Heart size={18} strokeWidth={1.5} className="group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-colors" />
                                            </button>

                                            {product.bestSeller && (
                                                <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase z-10">
                                                    BEST SELLER
                                                </div>
                                            )}
                                        </div>

                                        <div className="pt-8 flex flex-col flex-1">
                                            <div className="mb-6">
                                                <span className="inline-block bg-[#f5f5f5] text-[#999] px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
                                                    {product.tag}
                                                </span>
                                                <h4 className="text-[17px] font-medium text-gray-900 group-hover:text-orange-600 transition-all duration-500 leading-snug">
                                                    {product.name}
                                                </h4>
                                            </div>

                                            <div className="mt-auto space-y-3">
                                                <p className="text-[20px] font-bold text-gray-900">₹{product.price}</p>

                                                <div className="flex items-center gap-3">
                                                    <span className="text-[14px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                    <span className="text-[14px] text-orange-600 font-bold whitespace-nowrap">{product.discount}</span>
                                                </div>

                                                <p className="text-[12px] text-orange-600 font-medium tracking-wide">
                                                    EMI starts from ₹ {product.emi}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Narrative Intro Section - MOVED BELOW */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center border-t border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Get the Perfect Wooden Shoe Rack for Your Home
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic">
                            A shoe cabinet, especially a wooden one, is a piece of furniture particularly designed to store and organise shoes neatly. They create an aesthetic appeal in entryways, closets, or mudrooms by keeping footwear accessible while preventing clutter.
                        </p>
                    </motion.div>
                </section>

                {/* BOTTOM CONTENT SECTION */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Get the Perfect Wooden Shoe Rack for Your Home
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    A shoe cabinet, especially a wooden one, is a piece of furniture particularly designed to store and organise shoes neatly. They create an aesthetic appeal in entryways, closets, or mudrooms by keeping footwear accessible while preventing clutter. These racks come in various styles, materials, and sizes, catering to different needs and spaces.
                                </p>
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    At Maishaa, we offer a great selection of premium shoe racks that not only keep your space tidy but also enhance your home decor. Whether you’re working with a cosy nook or a spacious foyer, we have the perfect shoe rack that offers a complete storage solution.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                What Are Some Important Points to Remember While Shopping for a Shoe Rack for Home?
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Size and Space:</span> Measure the entryway is wide enough for the shoe rack to fit comfortably without overcrowding the area. While in large spaces, you can go for multi-tiered options, compact designs are ideal for limited space. Vertical designs that maximise storage without taking up too much floor space is also worth considering.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Material:</span> Choose a wooden shoe rack made from strong and durable materials that can withstand daily use. Solid wood options provide longevity and aesthetic appeal. Look for racks made from materials like temperature treated East European Ashwood which are known for their strength and resistance to wear.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Design and Style:</span> Go for a design that matches the interiors of your space. From modern minimalist styles to traditional rustic looks, the right shoe rack can enhance your decor. Consider finishes like Carbon Black and Burnt Amber that complement your existing furniture.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Capacity:</span> Consider how many pairs of shoes you need to store. Look for racks with adjustable shelves for flexibility. Some racks also feature compartments for boots, sandals, heels, wedges, flip-flops, and sneakers, ensuring all types of footwear are accommodated.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Why Shop for Shoe Racks from Maishaa?
                            </h3>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    At Maishaa, one of the top premium furniture providers in the industry, we are highly committed to offering our customers high quality, durable furniture while adhering to sustainability and environmental responsibility. Our highly skilled craftsmen help create each piece to ensure it stands the test of time, providing you with long lasting value for years to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ShoeRackCollection;
