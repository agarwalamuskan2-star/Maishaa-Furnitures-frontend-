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

const LanternsCollection = () => {
    useEffect(() => {
        document.title = "Luxury Lanterns & Candle Holders | Maishaa";
    }, []);

    const products: (Product & { description?: string, bestSeller?: boolean, emi?: string, discountLabel?: string })[] = [
        {
            name: "Ranthal Glass Oil Lamp - Disc (Set of 3)",
            price: "18,900",
            originalPrice: "21,000",
            discountLabel: "10% Off",
            emi: "1,982",
            tag: "READY TO SHIP",
            description: "A trio of disc-shaped glass oil lamps that create a mesmerizing play of light and shadow.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1572044162444-ad60f128bde7?q=80&w=1000",
            type: "Lanterns"
        },
        {
            name: "Ranthal Glass Oil Lamp - Round (Set of 3)",
            price: "17,910",
            originalPrice: "19,900",
            discountLabel: "10% Off",
            emi: "1,878",
            tag: "READY TO SHIP",
            description: "Spherical handcrafted glass lamps in varying sizes, offering a modern take on traditional oil lighting.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1603031737475-6804593855a9?q=80&w=1000",
            type: "Lanterns"
        },
        {
            name: "Ranthal Glass Oil Lamp - Round (L)",
            price: "6,750",
            originalPrice: "7,500",
            discountLabel: "10% Off",
            emi: "708",
            tag: "READY TO SHIP",
            description: "A singular, large round glass oil lamp that serves as a stunning centerpiece for any table setting.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1548041595-69020967885e?q=80&w=1000",
            type: "Lanterns"
        },
        {
            name: "Antique Brass Pillar Lantern",
            price: "8,500",
            originalPrice: "10,200",
            discountLabel: "17% Off",
            emi: "892",
            tag: "READY TO SHIP",
            description: "Classic architectural lantern with an antique brass finish and clear glass panels.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1517482811327-0c15f9b4807a?q=80&w=1000",
            type: "Lanterns"
        },
        {
            name: "Smoked Glass Candle Holder - Set of 2",
            price: "4,200",
            originalPrice: "5,500",
            discountLabel: "24% Off",
            emi: "441",
            tag: "READY TO SHIP",
            description: "Contemporary smoked glass holders that add a moody, sophisticated glow to pillar candles.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1581404090264-9fb6fc138122?q=80&w=1000",
            type: "Decor"
        },
        {
            name: "Gilded Cage Lantern",
            price: "12,800",
            originalPrice: "15,000",
            discountLabel: "15% Off",
            emi: "1,343",
            tag: "READY TO SHIP",
            description: "Intricately detailed gold-finished wire cage that transforms candle light into patterns.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000",
            type: "Lanterns"
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
        { label: "Lanterns", value: "Lanterns", count: products.filter(p => p.type === "Lanterns").length },
        { label: "Decor", value: "Decor", count: products.filter(p => p.type === "Decor").length },
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
                        <Link href="/decor" className="hover:text-black transition-colors">Decor</Link>
                        <ChevronRight size={12} />
                        <Link href="/decor/objects" className="hover:text-black transition-colors">Decorative Objects</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Lanterns & Candle Holders</span>
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
                            maxPrice={40000}
                            selectedDiscounts={selectedDiscounts}
                            setSelectedDiscounts={setSelectedDiscounts}
                        />

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                                <div className="space-y-2">
                                    <h1 className="text-2xl font-serif font-medium uppercase tracking-wider">Lanterns & Candle Holders</h1>
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

                                            <div className="flex flex-col gap-2 flex-grow">
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
                            Illuminating Elegant Spaces
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic text-center">
                            Our collection of lanterns and candle holders is designed to be as beautiful when unlit as they are when glowing. From handcrafted glass oil lamps to architectural brass lanterns, each piece is a celebration of the play between light, glass, and shadow.
                        </p>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LanternsCollection;
