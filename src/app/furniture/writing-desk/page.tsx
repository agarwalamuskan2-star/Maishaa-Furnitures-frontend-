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

const WritingDeskCollection = () => {
    useEffect(() => {
        document.title = "Luxury Writing Desks & Home Office Tables | Maishaa";
    }, []);

    const products: (Product & { description?: string, bestSeller?: boolean, emi?: string, discountLabel?: string })[] = [
        {
            name: "Kenneth Writing Desk with Niche",
            price: "95,500",
            originalPrice: "1,19,300",
            discountLabel: "20% Off",
            emi: "10,012",
            tag: "MADE TO ORDER",
            description: "A comprehensive workstation featuring a dedicated niche for organization, crafted from premium solid wood.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000",
            type: "Writing Desks"
        },
        {
            name: "Kenneth Writing Table",
            price: "85,500",
            originalPrice: "1,06,800",
            discountLabel: "20% Off",
            emi: "8,964",
            tag: "MADE TO ORDER",
            description: "Minimalist design focusing on clean lines and spacious work surface, perfect for the modern professional.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000",
            type: "Tables"
        },
        {
            name: "Mecai Cane Writing Desk",
            price: "69,900",
            originalPrice: "87,300",
            discountLabel: "20% Off",
            emi: "7,329",
            tag: "MADE TO ORDER",
            description: "Elegant fusion of solid wood and natural cane weaving, adding a touch of organic warmth to your study.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?q=80&w=1000",
            type: "Writing Desks"
        },
        {
            name: "Vantage Executive Desk",
            price: "1,45,000",
            originalPrice: "1,81,000",
            discountLabel: "20% Off",
            emi: "12,083",
            tag: "ARTISAN MADE",
            description: "Commanding presence with rich walnut finish and integrated cable management for a clutter-free executive suite.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000",
            type: "Writing Desks"
        },
        {
            name: "Nordic Ladder Shelf Desk",
            price: "55,000",
            originalPrice: "68,000",
            discountLabel: "19% Off",
            emi: "4,583",
            tag: "READY TO SHIP",
            description: "Space-saving leaning design that combines a writing surface with vertical shelving for books and decor.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1595515106937-2997424072f4?q=80&w=1000",
            type: "Bookcase & Shelves"
        },
        {
            name: "Sienna Console Desk",
            price: "42,000",
            originalPrice: "52,500",
            discountLabel: "20% Off",
            emi: "3,500",
            tag: "MADE TO ORDER",
            description: "Slim profile versatile piece that functions beautifully as both a hallway console and a compact writing station.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000",
            type: "Console Tables"
        },
        {
            name: "Aspen Oak Writing Desk",
            price: "78,000",
            originalPrice: "97,500",
            discountLabel: "20% Off",
            emi: "6,500",
            tag: "MADE TO ORDER",
            description: "Solid oak construction with visible grain, featuring three spacious drawers for essential office supplies.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=1000",
            type: "Writing Desks"
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
        { label: "Writing Desks", value: "Writing Desks", count: products.filter(p => p.type === "Writing Desks").length },
        { label: "Bookcase & Shelves", value: "Bookcase & Shelves", count: products.filter(p => p.type === "Bookcase & Shelves").length },
        { label: "Tables", value: "Tables", count: products.filter(p => p.type === "Tables").length },
        { label: "Console Tables", value: "Console Tables", count: products.filter(p => p.type === "Console Tables").length }
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
                        <Link href="/furniture/bedroom" className="hover:text-black transition-colors">Office Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Writing Desk</span>
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
                                    <h1 className="text-2xl font-serif font-medium uppercase tracking-wider">Writing Desk</h1>
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
                            Command Your Workspace
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic text-center">
                            A writing desk is more than furniture; it is the foundation of your creativity and the cockpit of your productivity. Our collection merges ergonomic excellence with sculptural beauty, creating spaces where ideas flourish.
                        </p>
                    </motion.div>
                </section>

                {/* BOTTOM CONTENT SECTION */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Designed for the Modern Intellectual
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    In an era of digital nomadism and home offices, the writing desk has evolved. It must accommodate technology while retaining the warmth of traditional study furniture. Our designs feature discreet cable management and thoughtful storage niches, ensuring your workspace remains pristine.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Materials That Inspires
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Solid Wood:</span> Nothing grounds a room like the weight and grain of solid oak or walnut. These desks age beautifully, acquiring a patina that tells the story of your work.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Cane & Rattan:</span> For a lighter, airier feel, our Mecai collection incorporates woven cane panels, blending colonial charm with contemporary silhouettes.
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

export default WritingDeskCollection;
