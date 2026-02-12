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

const BedsCollection = () => {
    useEffect(() => {
        document.title = "Luxury Modern Beds & Bedroom Furniture | Maishaa";
    }, []);

    const products: (Product & { description?: string, bestSeller?: boolean, emi?: string, discountLabel?: string, sizes?: string[] })[] = [
        {
            name: "Rylaan Bed Cot-Single",
            price: "1,08,000",
            originalPrice: "1,20,000",
            discountLabel: "10% Off",
            emi: "11,323",
            tag: "MADE TO ORDER",
            description: "A sleek single bed cot featuring a minimalist headboard and premium upholstery, perfect for modern compact spaces.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1505693419133-ba7f4f9bb724?q=80&w=1000",
            type: "Beds",
            sizes: ["Single"]
        },
        {
            name: "Palmira Poster Bed Cot",
            price: "2,11,400",
            originalPrice: "2,23,900",
            discountLabel: "6% Off",
            emi: "23,473",
            tag: "MADE TO ORDER",
            description: "An elegant four-poster bed that defines luxury. Crafted with precision from sustainable wood with canework detailing.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000",
            type: "Beds",
            sizes: ["King", "Queen"]
        },
        {
            name: "Rylaan Bed Cot",
            price: "1,84,900",
            originalPrice: "1,99,900",
            discountLabel: "8% Off",
            emi: "20,957",
            tag: "MADE TO ORDER",
            description: "Our signature Rylaan bed in a full-size configuration, combining timeless aesthetics with unparalleled comfort.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000",
            type: "Beds",
            sizes: ["King", "Queen"]
        },
        {
            name: "Mianzi Cane Bed",
            price: "1,45,000",
            originalPrice: "1,65,000",
            discountLabel: "12% Off",
            emi: "15,200",
            tag: "MADE TO ORDER",
            description: "Sustainable luxury at its best. This bed features handcrafted cane-weaving that adds a tropical modern touch to your bedroom.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1617335735033-ee372728373b?q=80&w=1000",
            type: "Beds",
            sizes: ["King", "Queen"]
        },
        {
            name: "Veda Upholstered Bed",
            price: "1,92,000",
            originalPrice: "2,15,000",
            discountLabel: "10% Off",
            emi: "17,666",
            tag: "ARTISAN MADE",
            description: "Featuring a plush, wingback headboard with intricate tufting, the Veda bed is the ultimate sanctuary for rest.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000",
            type: "Beds",
            sizes: ["King"]
        },
        {
            name: "Advi Low-Profile Bed",
            price: "1,25,000",
            originalPrice: "1,48,000",
            discountLabel: "15% Off",
            emi: "10,416",
            tag: "READY TO SHIP",
            description: "A mid-century modern inspired low-profile bed with tapered legs and a clean, horizontal orientation.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000",
            type: "Beds",
            sizes: ["Queen"]
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
        { label: "Beds", value: "Beds", count: products.filter(p => p.type === "Beds").length },
        { label: "Benches", value: "Benches", count: products.filter(p => p.type === "Benches").length },
        { label: "Daybeds & Diwans", value: "Daybeds & Diwans", count: products.filter(p => p.type === "Daybeds & Diwans").length },
    ].filter(t => t.count > 0);

    const availableSizes = [
        { label: "King", value: "King", count: 21 },
        { label: "Queen", value: "Queen", count: 21 },
        { label: "Single", value: "Single", count: 1 },
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
                        <Link href="/furniture/bedroom" className="hover:text-black transition-colors">Bedroom</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Beds</span>
                    </nav>
                </div>

                {/* Main Collection Section with Sidebar */}
                <section className="pb-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
                        <ProductFilterSidebar
                            availableTypes={availableTypes}
                            selectedTypes={selectedTypes}
                            setSelectedTypes={setSelectedTypes}
                            availableSizes={availableSizes}
                            selectedSizes={selectedSizes}
                            setSelectedSizes={setSelectedSizes}
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
                                    <h1 className="text-2xl font-serif font-medium uppercase tracking-wider">Beds</h1>
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
                            The Centerpiece of Your Sanctuary
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic text-center">
                            Your bed is where the day begins and ends. Our curated collection of designer beds combines architectural form with uncompromising comfort, creating a focal point that transforms your bedroom into a true retreat.
                        </p>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BedsCollection;
