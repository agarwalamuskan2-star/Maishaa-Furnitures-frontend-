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

const WritingChairCollection = () => {
    useEffect(() => {
        document.title = "Luxury Office Chairs & Writing Chairs | Maishaa";
    }, []);

    const products: (Product & { description?: string, bestSeller?: boolean, emi?: string, discountLabel?: string })[] = [
        {
            name: "Vantage Leather Executive Chair",
            price: "45,500",
            originalPrice: "56,800",
            discountLabel: "20% Off",
            emi: "3,791",
            tag: "MADE TO ORDER",
            description: "High-back executive chair upholstered in premium top-grain leather with ergonomic lumbar support.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000",
            type: "Executive Chairs"
        },
        {
            name: "Mecai Cane Office Chair",
            price: "28,900",
            originalPrice: "36,000",
            discountLabel: "20% Off",
            emi: "2,408",
            tag: "MADE TO ORDER",
            description: "A breathable cane backrest paired with a cushioned seat, perfect for long writing sessions in a warm climate.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1519947486511-4639940be434?q=80&w=1000",
            type: "Desk Chairs"
        },
        {
            name: "Sienna Velvet Swivel Chair",
            price: "32,000",
            originalPrice: "40,000",
            discountLabel: "20% Off",
            emi: "2,666",
            tag: "READY TO SHIP",
            description: "Soft velvet upholstery in a jewel tone, bringing a touch of luxury and comfort to the home office.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000",
            type: "Swivel Chairs"
        },
        {
            name: "Nordic Minimalist Task Chair",
            price: "18,500",
            originalPrice: "23,000",
            discountLabel: "19% Off",
            emi: "1,541",
            tag: "READY TO SHIP",
            description: "Clean lines and a molded shell design, ideal for modern, compact workspaces.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?q=80&w=1000",
            type: "Task Chairs"
        },
        {
            name: "Sterling Mid-Century Armchair",
            price: "38,000",
            originalPrice: "47,500",
            discountLabel: "20% Off",
            emi: "3,166",
            tag: "ARTISAN MADE",
            description: "Sculptural wooden arms and textured fabric upholstery, doubling as an accent chair when not in use.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000",
            type: "Desk Chairs"
        },
        {
            name: "Oxford Tufted Wingback",
            price: "52,000",
            originalPrice: "65,000",
            discountLabel: "20% Off",
            emi: "4,333",
            tag: "MADE TO ORDER",
            description: "Classic tufted design with a high back, offering a distinguished look for the traditional study.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000",
            type: "Executive Chairs"
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
        { label: "Executive Chairs", value: "Executive Chairs", count: products.filter(p => p.type === "Executive Chairs").length },
        { label: "Desk Chairs", value: "Desk Chairs", count: products.filter(p => p.type === "Desk Chairs").length },
        { label: "Swivel Chairs", value: "Swivel Chairs", count: products.filter(p => p.type === "Swivel Chairs").length },
        { label: "Task Chairs", value: "Task Chairs", count: products.filter(p => p.type === "Task Chairs").length }
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
                        <span className="text-black font-medium">Writing Chair</span>
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
                            maxPrice={100000}
                            selectedDiscounts={selectedDiscounts}
                            setSelectedDiscounts={setSelectedDiscounts}
                        />

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                                <div className="space-y-2">
                                    <h1 className="text-2xl font-serif font-medium uppercase tracking-wider">Writing Chair</h1>
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
                            Seating that Inspires Success
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic text-center">
                            The perfect writing chair is a balance of support and style. Maishaa's collection offers ergonomic excellence without compromising on aesthetics.
                        </p>
                    </motion.div>
                </section>

                {/* BOTTOM CONTENT SECTION */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Ergonomics Meets Elegance
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    Your chair is your most important tool. We believe that ergonomic support shouldn't look like a machine. Our chairs hide advanced adjustments and lumbar support within sleek, upholstered silhouettes that complement your home decor.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Choosing the Right Chair
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Executive Presence:</span> For a grand statement, choose our high-back leather executive chairs. They offer maximum support and an undeniable aura of authority.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Daily Comfort:</span> If you spend hours at your desk, our mesh and cane options provide necessary breathability, keeping you cool and focused.
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

export default WritingChairCollection;
