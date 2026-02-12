"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";

const OttomansBenchesCollection = () => {
    const products = [
        {
            name: "Sitar Upholstered Ottoman",
            price: "28,800",
            originalPrice: "32,000",
            discount: "10% Off",
            emi: "3050",
            tag: "MADE TO ORDER",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000"
        },
        {
            name: "Sitar Upholstered Bench",
            price: "57,600",
            originalPrice: "64,000",
            discount: "10% Off",
            emi: "6080",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000"
        },
        {
            name: "Tanmay Rattan Bench",
            price: "61,200",
            originalPrice: "68,000",
            discount: "10% Off",
            emi: "6450",
            tag: "MADE TO ORDER",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000"
        },
        {
            name: "Seraphina Tufted Grand Ottoman",
            price: "42,000",
            originalPrice: "48,000",
            discount: "13% Off",
            emi: "4420",
            tag: "EXCLUSIVE",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000"
        },
        {
            name: "Luminere Sculptural Bouclé Ottoman",
            price: "35,000",
            originalPrice: "38,000",
            discount: "8% Off",
            emi: "3710",
            tag: "READY TO SHIP",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000"
        },
        {
            name: "Windsor Estate Entryway Bench",
            price: "1,15,000",
            originalPrice: "1,25,000",
            discount: "8% Off",
            emi: "12150",
            tag: "MADE TO ORDER",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000"
        },
        {
            name: "Atelier Bespoke Hall Bench",
            price: "88,000",
            originalPrice: "98,000",
            discount: "10% Off",
            emi: "9280",
            tag: "MADE TO ORDER",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000"
        },
        {
            name: "Arboretum Reclaimed Teak Bench",
            price: "72,500",
            originalPrice: "85,000",
            discount: "15% Off",
            emi: "7650",
            tag: "ECO-FRIENDLY",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000"
        },
        {
            name: "Opulence Vanity Bench",
            price: "45,000",
            originalPrice: "52,000",
            discount: "13% Off",
            emi: "4750",
            tag: "READY TO SHIP",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1000"
        },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                {/* Breadcrumbs */}
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture" className="hover:text-black transition-colors">Furniture</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture/living" className="hover:text-black transition-colors">Living</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Ottomans & Benches</span>
                    </nav>
                </div>

                {/* Main Collection Section with Sidebar */}
                <section className="pb-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
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
                                            {["Benches (20)", "Ottomans (6)", "Stools (15)", "Vanity Benches (8)"].map((type) => (
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
                                                <div className="absolute left-0 right-[25%] h-full bg-black"></div>
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                                <div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-500">
                                                    <span>Min</span>
                                                    <ChevronDown size={14} />
                                                </div>
                                                <span className="text-gray-400">to</span>
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-900">
                                                    <span>₹ 200000</span>
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
                                        32 RESULTS FOUND
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
                                        className="group cursor-pointer flex flex-col"
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden bg-[#f9f9f9] mb-4">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:text-red-500 transition-all duration-300 z-10 group/heart">
                                                <Heart size={16} strokeWidth={1.5} className="group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-colors" />
                                            </button>

                                            {product.bestSeller && (
                                                <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase z-10">
                                                    BEST SELLER
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex">
                                                <span className="bg-[#f5f5f5] text-gray-500 px-2 py-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                                                    {product.tag}
                                                </span>
                                            </div>

                                            <h4 className="text-[15px] font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-snug">
                                                {product.name}
                                            </h4>

                                            <div className="space-y-1 mt-1">
                                                <div className="flex items-baseline gap-3">
                                                    <span className="text-[16px] font-bold text-gray-900">₹{product.price}</span>
                                                    <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                    <span className="text-[13px] text-orange-600 font-bold">{product.discount}</span>
                                                </div>

                                                <p className="text-[10px] text-gray-500 font-light">
                                                    Price inclusive of all taxes | Pan India Shipping
                                                </p>

                                                <p className="text-[11px] text-orange-600 font-medium tracking-wide">
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

                {/* Narrative Intro Section */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center border-t border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                            The Undeniable Charm of Ottomans & Benches
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic text-center">
                            Ottomans and benches are the versatile gems of interior design, offering the perfect blend of portable comfort and sculptural grace. From the foot of a grand bed to a curated entryway, these pieces invite a moment of pause and add a layer of sophisticated texture to your living narrative.
                        </p>
                    </motion.div>
                </section>

                {/* BOTTOM CONTENT SECTION */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Redefining Versatility through Craftsmanship
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    An ottoman is more than just a footrest; it's a dynamic addition that can serve as an impromptu guest seat, a soft coffee table alternative, or a sculptural accent piece. Benches, similarly, provide a gracious welcome in hallways and add a regal finish to bedroom configurations.
                                </p>
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    At Maishaa, we explore the boundaries of material and form. Our "Tanmay" rattan bench brings a light, airy aesthetic rooted in natural heritage, while the "Seraphina" tufted grand ottoman offers the opulent weight of performance-grade velvet and artisan hand-tufting.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Styling Your Living Space with Stools and Benches
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">The Entryway Statement:</span> Use an upholstered hall bench like the "Atelier" to create an immediate sense of luxury and functionality in your foyer, providing a convenient and stylish spot for guests to pause.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Bedroom Grandeur:</span> Placing a bench at the foot of your bed not only adds a classic design element but also serves as a practical surface for morning routines. Match it with your headboard for a cohesive look or use a contrasting material like reclaimed teak for an organic touch.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Layered Living Rooms:</span> A pair of smaller ottomans or stools tucked under a console table can be pulled out for extra seating during social gatherings, maintaining a clean look while offering effortless flexibility.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Heirloom Quality in Every Detail
                            </h3>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    We believe that every piece of furniture, regardless of scale, deserves obsessive attention to detail. Our ottomans and benches feature kiln-dried hardwood frames, high-density resilient foam, and premium upholstery fabrics. From the hand-stitched leather of our "Aethelred" series to the sustainable teak of our "Arboretum" collection, we ensure that your investment in Maishaa is an investment in enduring style.
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

export default OttomansBenchesCollection;
