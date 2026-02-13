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

const BenchesCollection = () => {
    useEffect(() => {
        document.title = "Designer Benches & Daybeds | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Moon Rattan Two-Seater Bench",
            price: "53,000",
            originalPrice: "66,250",
            discount: "20% Off",
            emi: "5,557",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000",
            type: "Benches",
            size: ["Two-Seater"]
        },
        {
            name: "Moon Rattan Three-Seater Bench",
            price: "72,900",
            originalPrice: "91,125",
            discount: "20% Off",
            emi: "7,643",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000",
            type: "Benches",
            size: ["Three-Seater"]
        },
        {
            name: "Moon Rattan Four-Seater Bench",
            price: "98,900",
            originalPrice: "123,625",
            discount: "20% Off",
            emi: "10,369",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000",
            type: "Benches",
            size: ["Four-Seater"]
        },
        {
            name: "Nakashi Hand Chiseled Bench",
            price: "83,160",
            originalPrice: "92,400",
            discount: "10% Off",
            emi: "6,930",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1616489953149-623830209425?q=80&w=1000",
            type: "Benches"
        },
        {
            name: "Nakashi Dining Bench",
            price: "55,000",
            originalPrice: "68,750",
            discount: "20% Off",
            emi: "4,583",
            tag: "MADE TO ORDER",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=1000",
            type: "Benches"
        },
        {
            name: "Calypso Bolster Diwan",
            price: "1,15,000",
            originalPrice: "1,43,750",
            discount: "20% Off",
            emi: "9,583",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1550586678-f7225f03c44b?q=80&w=1000",
            type: "Daybeds & Diwans"
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
        { label: "Daybeds & Diwans", value: "Daybeds & Diwans", count: products.filter(p => p.type === "Daybeds & Diwans").length },
        { label: "Outdoor", value: "Outdoor", count: products.filter(p => p.type === "Outdoor").length }
    ].filter(t => t.count > 0);

    const availableSizes = [
        { label: "Two-Seater", value: "Two-Seater", count: products.filter(p => p.size?.includes("Two-Seater")).length },
        { label: "Three-Seater", value: "Three-Seater", count: products.filter(p => p.size?.includes("Three-Seater")).length },
        { label: "Four-Seater", value: "Four-Seater", count: products.filter(p => p.size?.includes("Four-Seater")).length }
    ].filter(s => s.count > 0);

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
                        <Link href="/furniture/entryway" className="hover:text-black transition-colors">Entryway</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Benches</span>
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
                            maxPrice={150000}
                            availableSizes={availableSizes}
                            selectedSizes={selectedSizes}
                            setSelectedSizes={setSelectedSizes}
                            selectedDiscounts={selectedDiscounts}
                            setSelectedDiscounts={setSelectedDiscounts}
                        />

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                                <div className="space-y-2">
                                    <p className="text-gray-400 font-light tracking-[0.1em] text-sm italic font-serif uppercase">
                                        {filteredProducts.length} RESULTS FOUND
                                    </p>
                                </div>
                                <div className="flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-950 border-b border-black pb-1 cursor-pointer">
                                    Sort: Featured
                                    <ChevronDown size={14} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                                {filteredProducts.map((product, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group cursor-pointer flex flex-col bg-white"
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden bg-[#f9f9f9] mb-4">
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

                                        <div className="border border-gray-200 p-4 mt-0 transition-shadow duration-300 group-hover:shadow-sm">
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

                {/* Narrative Intro Section - MOVED BELOW GRID */}
                <section className="py-24 px-4 max-w-4xl mx-auto text-center border-t border-gray-100">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Elevate Your Entryway with Designer Benches
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-500 leading-relaxed text-lg font-light font-serif italic">
                            &quot;More than just a place to sit, a premium bench is a statement of style and functionality. It bridges the gap between decor and utility, offering a welcoming touch to any space.&quot;
                        </p>
                    </div>
                </section>

                {/* BOTTOM CONTENT SECTION */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Discover the Art of Seating: Premium Benches for Every Space
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    A premium bench is an incredibly versatile piece of furniture that can transform the functionality and aesthetic of any room. Whether placed in an entryway to provide a convenient spot for putting on shoes, at the foot of a bed for an extra layer of luxury, or along a dining table for a more communal feel, a well-crafted bench is both practical and beautiful.
                                </p>
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    At Maishaa, we&apos;ve curated a collection of benches that celebrate exceptional craftsmanship and timeless design. From the delicate weave of natural rattan to the robust elegance of hand-chiseled solid wood, each piece is designed to be a focal point in your home, reflecting your personal style while offering enduring value.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Choosing the Perfect Bench: A Guide to Style and Utility
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Entryway Elegance:</span> For foyers and mudrooms, look for benches that offer a slim profile to fit comfortably without obstructing movement. Consider designs with built-in storage or a lower shelf to keep the area organized.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Dining & Living:</span> Benches can replace traditional chairs to create a modern, open feel in dining areas. In the living room, a statement bench like our Nakashi series can serve as extra seating or even a low-profile coffee table alternative.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Material & Finish:</span> Our use of premium materials like East European Ashwood and natural rattan ensures each bench is a masterpiece of texture and durability. Choose from deep finishes like Carbon Black or the warmth of Burnt Amber to suit your existing decor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Why Choose Maishaa&apos;s Benches?
                            </h3>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    We believe that furniture should be more than just functional; it should be an expression of art. Our benches are handcrafted by skilled artisans who pay meticulous attention to every joint and finish. By choosing Maishaa, you are investing in a piece that combines the best of heritage craftsmanship with contemporary modern aesthetics.
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

export default BenchesCollection;
