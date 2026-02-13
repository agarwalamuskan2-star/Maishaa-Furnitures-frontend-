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

const ConsoleTableCollection = () => {
    useEffect(() => {
        document.title = "Console Tables & Entryway | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Capitol Complex Console",
            price: "52,000",
            originalPrice: "65,000",
            discount: "20% Off",
            emi: "4,622",
            tag: "MADE TO ORDER",
            description: "A tribute to Pierre Jeanneret's Chandigarh architecture, featuring a robust V-leg structure and tempered glass.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000",
            type: "Console Tables"
        },
        {
            name: "Vivo Slatted Shoe Console",
            price: "99,920",
            originalPrice: "1,24,900",
            discount: "20% Off",
            emi: "5,444",
            tag: "MADE TO ORDER",
            description: "A functional entryway statement with vertical slats and hidden storage, balancing privacy and airflow.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000",
            type: "Hall Tables"
        },
        {
            name: "Rio Rattan Shoe Console",
            price: "95,920",
            originalPrice: "1,19,900",
            discount: "20% Off",
            emi: "10,056",
            tag: "MADE TO ORDER",
            description: "Natural rattan weaving meets a solid mahogany frame, offering a warm tropical welcome to your guests.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000",
            type: "Hall Tables"
        },
        {
            name: "Manhattan Console - Ash Wood",
            price: "48,400",
            originalPrice: "60,500",
            discount: "20% Off",
            emi: "4,302",
            tag: "MADE TO ORDER",
            description: "Minimalist Scandinavian design in light-finished Ashwood, perfect for tight corridors and modern nooks.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000",
            type: "Console Tables"
        },
        {
            name: "Urban Organic Console Table",
            price: "38,000",
            originalPrice: "47,500",
            discount: "20% Off",
            emi: "3,377",
            tag: "READY TO SHIP",
            description: "Smooth, rounded edges and a soft matte finish make this table a child-friendly yet sophisticated choice.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000",
            type: "Console Tables"
        },
        {
            name: "Jeanneret Media Unit",
            price: "58,000",
            originalPrice: "72,500",
            discount: "20% Off",
            emi: "5,155",
            tag: "MADE TO ORDER",
            description: "Low-profile media console with ventilated rear panels and a signature cross-woven rattan front.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000",
            type: "Media Units"
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
        { label: "Console Tables", value: "Console Tables", count: products.filter(p => p.type === "Console Tables").length },
        { label: "Media Units", value: "Media Units", count: products.filter(p => p.type === "Media Units").length },
        { label: "Hall Tables", value: "Hall Tables", count: products.filter(p => p.type === "Hall Tables").length }
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
                        <Link href="/furniture/entryway" className="hover:text-black transition-colors">Entryway</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Console Tables</span>
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

                                                {product.bestSeller && (
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
                                                        <span className="text-[13px] text-orange-600 font-bold">{product.discount}</span>
                                                    </div>

                                                    <div className="space-y-1">
                                                        <p className="text-[10px] text-gray-500 font-light">
                                                            Price inclusive of all taxes | Pan India Shipping
                                                        </p>
                                                        <p className="text-[11px] text-orange-600 font-medium tracking-wide">
                                                            EMI starts from ₹ {product.emi}
                                                        </p>
                                                    </div>

                                                    <div className="pt-2">
                                                        <p className="text-[12px] text-gray-600 font-light leading-relaxed mb-4 line-clamp-2">
                                                            {product.description}
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
            </main>

            <Footer />
        </div>
    );
};

export default ConsoleTableCollection;
