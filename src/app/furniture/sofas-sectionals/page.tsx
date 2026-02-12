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

const SofasSectionalsCollection = () => {
    useEffect(() => {
        document.title = "Sofas & Sectionals | Maishaa";
    }, []);

    const products: Product[] = [
        { name: "Modern Velvet 3-Seater Sofa", price: "1,45,000", originalPrice: "1,81,250", discount: "20% Off", emi: "12,083", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000", type: "Sofas" },
        { name: "Modern U-Shape Sectional", price: "2,45,000", originalPrice: "3,06,250", discount: "20% Off", emi: "20,417", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000", type: "Sectionals" },
        { name: "Leather Chesterfield Sofa", price: "2,10,000", originalPrice: "2,62,500", discount: "20% Off", emi: "17,500", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000", type: "Sofas" },
        { name: "L-Shape Modular Sectional", price: "1,95,000", originalPrice: "2,43,750", discount: "20% Off", emi: "16,250", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000", type: "Sectionals" },
        { name: "Scandinavian Fabric Sofa", price: "98,000", originalPrice: "1,22,500", discount: "20% Off", emi: "8,167", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000", type: "Sofas" },
        { name: "Curved Velvet Sectional", price: "2,75,000", originalPrice: "3,43,750", discount: "20% Off", emi: "22,917", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000", type: "Sectionals" },
        { name: "Mid-Century Modern Sofa", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "10,417", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000", type: "Sofas" },
        { name: "Corner Sectional with Chaise", price: "2,10,000", originalPrice: "2,62,500", discount: "20% Off", emi: "17,500", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000", type: "Sectionals" },
        { name: "Tufted Linen Sofa", price: "1,35,000", originalPrice: "1,68,750", discount: "20% Off", emi: "11,250", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1000", type: "Sofas" },
    ];

    const {
        selectedTypes, setSelectedTypes,
        priceRange, setPriceRange,
        selectedSizes, setSelectedSizes,
        selectedDiscounts, setSelectedDiscounts,
        filteredProducts
    } = useProductFilter(products);

    const availableTypes = [
        { label: "Sofas", value: "Sofas", count: products.filter(p => p.type === "Sofas").length },
        { label: "Sectionals", value: "Sectionals", count: products.filter(p => p.type === "Sectionals").length }
    ].filter(t => t.count > 0);

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans">
            <Header />

            <main className="flex-1">
                {/* Breadcrumbs */}
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture" className="hover:text-black transition-colors">Furniture</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture/living-room" className="hover:text-black transition-colors">Living Room</Link>
                        <ChevronRight size={12} />
                        <span className="text-black">Sofas & Sectionals</span>
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
                            maxPrice={500000}
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
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

                                            <div className="flex flex-col gap-2">
                                                {/* Tag */}
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

export default SofasSectionalsCollection;
