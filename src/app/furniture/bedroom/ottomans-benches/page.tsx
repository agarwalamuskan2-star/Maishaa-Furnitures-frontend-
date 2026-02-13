"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";
import { useProductFilter, Product } from "@/hooks/use-product-filter";
import ProductFilterSidebar from "@/components/product/product-filter-sidebar";

const OttomansBenchesCollection = () => {
    useEffect(() => {
        document.title = "Luxury Ottomans & Bedroom Benches | Maishaa";
    }, []);

    const products: (Product & { description?: string, bestSeller?: boolean, emi?: string, discountLabel?: string })[] = [
        {
            name: "Ebba 2.0 Upholstered Bench - Caillou 778",
            price: "76,500",
            originalPrice: "85,000",
            discountLabel: "10% Off",
            emi: "8,020",
            tag: "MADE TO ORDER",
            description: "A statement piece featuring plush upholstery in Caillou 778 fabric, perfect for the foot of a king-sized bed.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=1000",
            type: "Benches"
        },
        {
            name: "Monroe Upholstered Bench",
            price: "83,400",
            originalPrice: "92,600",
            discountLabel: "10% Off",
            emi: "8,744",
            tag: "MADE TO ORDER",
            description: "Mid-century modern aesthetic with a solid wood base and cream upholstery, blending comfort with timeless style.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000",
            type: "Benches"
        },
        {
            name: "Meraki Upholstered Ottoman",
            price: "30,000",
            originalPrice: "37,500",
            discountLabel: "20% Off",
            emi: "3,146",
            tag: "MADE TO ORDER",
            description: "Compact and versatile, this tufted ottoman serves as additional seating or a stylish footrest.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1589584649628-b4030948956b?q=80&w=1000",
            type: "Ottomans"
        },
        {
            name: "Caspian Velvet Bench",
            price: "55,000",
            originalPrice: "68,750",
            discountLabel: "20% Off",
            emi: "4,583",
            tag: "READY TO SHIP",
            description: "Luxurious velvet upholstery with button tufting, adding a touch of glamour to any bedroom or hallway.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000",
            type: "Benches"
        },
        {
            name: "Nordic Woven Ottoman",
            price: "22,500",
            originalPrice: "28,000",
            discountLabel: "19% Off",
            emi: "1,875",
            tag: "READY TO SHIP",
            description: "Hand-woven texture in neutral tones, bringing warmth and organic beauty to your living space.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?q=80&w=1000",
            type: "Ottomans"
        },
        {
            name: "Sterling Leather Bench",
            price: "92,000",
            originalPrice: "1,15,000",
            discountLabel: "20% Off",
            emi: "7,666",
            tag: "ARTISAN MADE",
            description: "Premium full-grain leather stretched over a sleek metal frame, embodying industrial chic refinement.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1000",
            type: "Benches"
        },
        {
            name: "Luna Round Ottoman",
            price: "18,900",
            originalPrice: "23,600",
            discountLabel: "20% Off",
            emi: "1,575",
            tag: "READY TO SHIP",
            description: "Soft curves and bouclé fabric make this round ottoman a trendy and comfortable accent piece.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1540573133985-29bd9663b90c?q=80&w=1000",
            type: "Ottomans"
        },
        {
            name: "Oxford Storage Bench",
            price: "64,500",
            originalPrice: "80,600",
            discountLabel: "20% Off",
            emi: "5,375",
            tag: "MADE TO ORDER",
            description: "Functional elegance with hidden storage compartment, upholstered in durable linen blend fabric.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9bf8?q=80&w=1000",
            type: "Benches"
        },
    ];

    const {
        selectedTypes, setSelectedTypes,
        priceRange, setPriceRange,
        selectedSizes, setSelectedSizes,
        selectedDiscounts, setSelectedDiscounts,
        filteredProducts
    } = useProductFilter(products);

    const availableTypes = [
        { label: "Benches", value: "Benches", count: products.filter(p => p.type === "Benches").length },
        { label: "Ottomans", value: "Ottomans", count: products.filter(p => p.type === "Ottomans").length },
    ].filter(t => t.count > 0);

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
                        <Link href="/furniture/bedroom" className="hover:text-black transition-colors">Bedroom</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Ottomans & Benches</span>
                    </nav>
                </div>

                {/* Main Collection Section with Sidebar */}
                <section className="pb-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
                        <ProductFilterSidebar
                            availableTypes={availableTypes}
                            selectedTypes={selectedTypes}
                            setSelectedTypes={setSelectedTypes}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            minPrice={0}
                            maxPrice={200000}
                            selectedDiscounts={selectedDiscounts}
                            setSelectedDiscounts={setSelectedDiscounts}
                        />

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                                <div className="space-y-2">
                                    <h1 className="text-2xl font-serif font-medium uppercase tracking-wider">Ottomans & Benches</h1>
                                    <p className="text-gray-400 font-light tracking-[0.1em] text-sm italic font-serif uppercase">
                                        {filteredProducts.length} RESULTS FOUND
                                    </p>
                                </div>
                                <div className="flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-950 border-b border-black pb-1 cursor-pointer">
                                    Sort: Featured
                                    <ChevronDown size={14} />
                                </div>
                            </div>

                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
                                    {filteredProducts.map((product, idx) => (
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

                                                {(product as any).bestSeller && (
                                                    <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase z-10">
                                                        BEST SELLER
                                                    </div>
                                                )}
                                            </div>

                                            <div className="border border-gray-200 p-4 mt-0 transition-shadow duration-300 group-hover:shadow-sm flex flex-col gap-2 flex-grow">
                                                <div className="flex">
                                                    <span className="bg-[#f5f5f5] text-gray-500 px-2 py-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                                                        {product.tag}
                                                    </span>
                                                </div>

                                                <h4 className="text-[15px] font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-snug h-10 line-clamp-2">
                                                    {product.name}
                                                </h4>

                                                <div className="space-y-4 mt-1">
                                                    <div className="flex items-baseline gap-3">
                                                        <span className="text-[16px] font-bold text-gray-900">₹{product.price}</span>
                                                        <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                        <span className="text-[13px] text-orange-600 font-bold">{(product as any).discountLabel}</span>
                                                    </div>

                                                    <div className="space-y-1">
                                                        <p className="text-[10px] text-gray-500 font-light">
                                                            Price inclusive of all taxes | Pan India Shipping
                                                        </p>
                                                        <p className="text-[11px] text-orange-600 font-medium tracking-wide">
                                                            EMI starts from ₹ {(product as any).emi}
                                                        </p>
                                                    </div>

                                                    <div className="pt-2">
                                                        <p className="text-[12px] text-gray-600 font-light leading-relaxed mb-4 line-clamp-2">
                                                            {(product as any).description}
                                                        </p>

                                                        <button className="w-full bg-black text-white py-3 text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-600">
                                                            BUY NOW
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center p-20 border border-dashed border-gray-200 rounded-lg">
                                    <p className="text-gray-500">No products found.</p>
                                </div>
                            )}
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
                            Versatile Comfort, Elevated Style
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic text-center">
                            Our curated collection of ottomans and benches brings functionality and flair to your bedroom. Whether serving as a chic seat at the foot of your bed or a plush accent in a reading nook, each piece is designed to harmonize with your personal retreat.
                        </p>
                    </motion.div>
                </section>

                {/* BOTTOM CONTENT SECTION */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                The Flexible Essentials
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    Few pieces of furniture offer the versatility of an ottoman or bench. In the bedroom, they provide a convenient spot for dressing, a surface for laying out tomorrow's attire, or simply a visual anchor that completes the room's composition.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Selecting Your Perfect Piece
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Bedroom Benches:</span> Ideally placed at the foot of the bed, a bench should extend roughly two-thirds the width of the mattress. Choose an upholstered option like the Ebba for softness, or a wood-framed design like the Monroe for architectural interest.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Ottomans & Poufs:</span> Perfect for smaller spaces or as mobile seating. A pair of Meraki ottomans can replace a traditional coffee table or serve as flexible seating when guests arrive.
                                    </p>
                                </div>
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
