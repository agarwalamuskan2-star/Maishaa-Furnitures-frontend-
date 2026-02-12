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

const TVUnitsCollection = () => {
    useEffect(() => {
        document.title = "Designer TV Units & Media Consoles | Maishaa";
    }, []);

    const products: (Product & { description?: string, bestSeller?: boolean, emi?: string, discountLabel?: string })[] = [
        {
            name: "Samara Fluted Media Console",
            price: "1,07,910",
            originalPrice: "1,19,900",
            discountLabel: "10% Off",
            emi: "11,313",
            tag: "MADE TO ORDER",
            description: "A stunning fluted design in solid light oak, offering both texture and sophisticated storage for your entertainment system.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000",
            type: "Media Unit"
        },
        {
            name: "Samara Modular Fluted Media Console with 2 Tall Cabinets",
            price: "2,23,930",
            originalPrice: "3,19,900",
            discountLabel: "30% Off",
            emi: "23,476",
            tag: "READY TO SHIP",
            description: "An expansive modular entertainment center combining the fluted console with two tall display cabinets for a complete wall solution.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
            type: "Media Unit"
        },
        {
            name: "Samara Modular Media Console with 2 Tall Cabinets",
            price: "2,09,930",
            originalPrice: "2,99,900",
            discountLabel: "30% Off",
            emi: "22,009",
            tag: "MADE TO ORDER",
            description: "The classic Samara modular set with a smooth-front media console, providing a clean and contemporary focal point for the living room.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
            type: "Media Unit"
        },
        {
            name: "Linear Oak Media Console",
            price: "72,500",
            originalPrice: "85,000",
            discountLabel: "15% Off",
            emi: "7,601",
            tag: "MADE TO ORDER",
            description: "Defined by clean lines and a low profile, this oak console features push-to-open doors for a seamless, modern look.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000",
            type: "Media Unit"
        },
        {
            name: "Caspian Fluted TV Stand",
            price: "95,000",
            originalPrice: "1,12,000",
            discountLabel: "15% Off",
            emi: "9,958",
            tag: "READY TO SHIP",
            description: "Elegantly curved ends and vertical fluting give this media console a soft yet commanding presence.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000",
            type: "Media Unit"
        },
        {
            name: "Midnight Walnut Media Console",
            price: "1,18,000",
            originalPrice: "1,35,000",
            discountLabel: "12% Off",
            emi: "12,374",
            tag: "MADE TO ORDER",
            description: "Deep walnut tones and brass hardware create a luxurious foundation for your home theater.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000",
            type: "Media Unit"
        }
    ];

    const {
        selectedTypes, setSelectedTypes,
        priceRange, setPriceRange,
        selectedSizes, setSelectedSizes,
        selectedDiscounts, setSelectedDiscounts,
        filteredProducts
    } = useProductFilter(products);

    const availableTypes = [
        { label: "Media Unit", value: "Media Unit", count: products.filter(p => p.type === "Media Unit").length },
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
                        <Link href="/furniture/storage" className="hover:text-black transition-colors">Storage Furniture</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Tv Units</span>
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
                            maxPrice={300000}
                            selectedDiscounts={selectedDiscounts}
                            setSelectedDiscounts={setSelectedDiscounts}
                        />

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                                <div className="space-y-2">
                                    <h1 className="text-2xl font-serif font-medium uppercase tracking-wider">Tv Units</h1>
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

                {/* Narrative Section */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center border-t border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Entertainment, Reimagined
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic text-center">
                            A TV unit is more than just a stand; it's the architectural anchor of your living room. Our collection of media consoles and wall-mounted units blends high-performance functionality with quiet, minimalist elegance.
                        </p>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default TVUnitsCollection;
