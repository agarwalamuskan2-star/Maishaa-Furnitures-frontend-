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

/**
 * MEDIA CONSOLES (TV UNITS) COLLECTION PAGE
 */

const MediaConsolesPage = () => {
    useEffect(() => {
        document.title = "Buy Premium Media Consoles & TV Units | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Samara Fluted Media Console",
            price: "1,07,910",
            originalPrice: "1,19,900",
            emi: "11313",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            badge: "BEST SELLER",
            image: "/images/outdoor/seating-cat.png",
            type: "Media Unit",
            size: ["M"]
        },
        {
            name: "Samara Modular Fluted Media Console with 2 Tall Cabinets",
            price: "2,23,930",
            originalPrice: "3,19,900",
            emi: "23476",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            image: "/images/outdoor/accessories-cat.png",
            type: "Media Unit",
            size: ["L"]
        },
        {
            name: "Samara Modular Media Console with 2 Tall Cabinets",
            price: "2,09,930",
            originalPrice: "2,99,900",
            emi: "22009",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            image: "/images/outdoor/dining-cat.png",
            type: "Media Unit",
            size: ["L"]
        },
        {
            name: "Rattan Weave Modular Unit",
            price: "1,85,500",
            originalPrice: "2,10,000",
            emi: "19400",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            image: "/images/outdoor/hero.png",
            type: "Media Unit",
            size: ["M"]
        },
        {
            name: "Cane Front Low Media Console",
            price: "92,400",
            originalPrice: "1,05,000",
            emi: "9690",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            badge: "BEST SELLER",
            image: "/images/outdoor/wren-chair.png",
            type: "Media Unit",
            size: ["S"]
        },
        {
            name: "Curved Slatted TV Unit",
            price: "1,15,200",
            originalPrice: "1,28,000",
            emi: "12080",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            badge: "BEST SELLER",
            image: "/images/outdoor/seating-cat.png",
            type: "Media Unit",
            size: ["S"]
        }
    ];

    const {
        selectedTypes, setSelectedTypes,
        priceRange, setPriceRange,
        selectedSizes, setSelectedSizes,
        selectedDiscounts, setSelectedDiscounts,
        filteredProducts
    } = useProductFilter(products);

    // Compute available counts
    const availableTypes = [
        { label: "Media Unit", value: "Media Unit", count: products.filter(p => p.type === "Media Unit").length }
    ];

    const availableSizes = [
        { label: "M", value: "M", count: products.filter(p => p.size?.includes("M")).length },
        { label: "S", value: "S", count: products.filter(p => p.size?.includes("S")).length },
        { label: "L", value: "L", count: products.filter(p => p.size?.includes("L")).length },
    ].filter(s => s.count > 0);

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                {/* Breadcrumbs */}
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-b border-gray-50">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide uppercase">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture" className="hover:text-black transition-colors">Furniture</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture/storage" className="hover:text-black transition-colors">Storage Furniture</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-semibold">Tv Units</span>
                    </nav>
                </div>

                {/* Main Content Section with Sidebar */}
                <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">

                        <ProductFilterSidebar
                            availableTypes={availableTypes}
                            selectedTypes={selectedTypes}
                            setSelectedTypes={setSelectedTypes}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            minPrice={0}
                            maxPrice={300000}
                            availableSizes={availableSizes}
                            selectedSizes={selectedSizes}
                            setSelectedSizes={setSelectedSizes}
                            selectedDiscounts={selectedDiscounts}
                            setSelectedDiscounts={setSelectedDiscounts}
                        />

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                                <p className="text-gray-900 font-medium tracking-[0.1em] text-sm uppercase">{filteredProducts.length} Results</p>
                                <div className="flex items-center gap-6 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-950 border-b border-black pb-1 cursor-pointer">
                                    Sort: Featured <ChevronDown size={14} />
                                </div>
                            </div>

                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
                                    {filteredProducts.map((product, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group cursor-pointer flex flex-col"
                                        >
                                            <div className="relative aspect-square overflow-hidden bg-[#f9f9f9] mb-6">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:text-red-500 transition-all duration-300 z-10 group/heart">
                                                    <Heart size={18} strokeWidth={1} className="group-hover/heart:fill-red-500 transition-colors" />
                                                </button>

                                                {product.badge && (
                                                    <div className="absolute top-4 left-4">
                                                        <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-black text-white">
                                                            {product.badge}
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="absolute bottom-4 left-4">
                                                    <span className={`px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-sm ${product.status === "SOLD OUT" ? "bg-[#666] text-white" : "bg-gray-100 text-gray-600"}`}>
                                                        {product.tag}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="border border-gray-200 p-4 mt-0 transition-shadow duration-300 group-hover:shadow-sm flex flex-col gap-2 pt-2 px-1">
                                                <h4 className="text-[15px] font-medium text-gray-800 transition-colors duration-300 leading-snug tracking-wide uppercase">
                                                    {product.name}
                                                </h4>

                                                <div className="space-y-2">
                                                    <div className="flex items-baseline gap-3">
                                                        <span className="text-[17px] font-bold text-gray-900 tracking-tight">₹{product.price}</span>
                                                        {product.originalPrice && (
                                                            <span className="text-[13px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                        )}
                                                    </div>
                                                    <p className="text-[10px] text-gray-400 font-light tracking-wide italic">
                                                        Price inclusive of all taxes | Pan India Shipping
                                                    </p>
                                                    {product.status !== "SOLD OUT" && product.emi && (
                                                        <p className="text-[11px] text-orange-600 font-bold tracking-wider uppercase pt-1">
                                                            EMI starts from ₹ {product.emi}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center p-20 border border-dashed border-gray-200 rounded-lg">
                                    <p className="text-gray-500">No products found for the selected criteria.</p>
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

export default MediaConsolesPage;
