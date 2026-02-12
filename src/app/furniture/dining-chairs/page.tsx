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

const DiningChairCollection = () => {
    useEffect(() => {
        document.title = "Buy Stylish Dining Chairs Online | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Kansho Dining Chair",
            price: "32,400",
            emi: "3421",
            tag: "MADE TO ORDER",
            description: "Ergonomic comfort meets minimalist design, crafted for enduring support.",
            bestSeller: true,
            image: "/images/outdoor/wren-chair.png",
            type: "Chairs"
        },
        {
            name: "Monolith Cane Chair",
            price: "28,000",
            emi: "2956",
            tag: "READY TO SHIP",
            description: "Classic cane weaving paired with a robust wooden frame for a timeless appeal.",
            bestSeller: false,
            image: "/images/outdoor/seating-cat.png",
            type: "Chairs"
        },
        {
            name: "Julien Velvet Dining Chair",
            price: "42,000",
            emi: "4433",
            tag: "MADE TO ORDER",
            description: "Plush velvet upholstery in rich tones, bringing luxury to your dining space.",
            bestSeller: true,
            image: "/images/outdoor/wren-chair.png",
            type: "Chairs"
        },
        {
            name: "Creston Leather Chair",
            price: "48,500",
            emi: "5120",
            tag: "MADE TO ORDER",
            description: "Top-grain leather and solid wood construction for a sophisticated dining experience.",
            bestSeller: false,
            image: "/images/outdoor/seating-cat.png",
            type: "Chairs"
        },
        {
            name: "Calissa Sculptural Chair",
            price: "38,850",
            emi: "4102",
            tag: "MADE TO ORDER",
            description: "A piece of functional art, featuring bold lines and a comfortable curved back.",
            bestSeller: true,
            image: "/images/outdoor/wren-chair.png",
            type: "Chairs"
        },
        {
            name: "Nakashi Carver Chair",
            price: "35,600",
            emi: "3758",
            tag: "MADE TO ORDER",
            description: "Inspired by heritage craftsmanship, with intricate details and armrests for added comfort.",
            bestSeller: false,
            image: "/images/outdoor/seating-cat.png",
            type: "Armchairs"
        },
        {
            name: "Sinag Modern Armchair",
            price: "45,000",
            emi: "4752",
            tag: "MADE TO ORDER",
            description: "Radiant designs and surgical precision in every joint, a hallmark of the Sinag collection.",
            bestSeller: true,
            image: "/images/outdoor/seating-cat.png",
            type: "Armchairs"
        },
        {
            name: "Wren Dining Chair",
            price: "34,500",
            emi: "3641",
            tag: "MADE TO ORDER",
            description: "Sculptural form meets functional art, perfectly complementing any modern dining table.",
            bestSeller: true,
            image: "/images/outdoor/wren-chair.png",
            type: "Chairs"
        },
        {
            name: "Orbit Swivel Chair",
            price: "52,000",
            emi: "5488",
            tag: "MADE TO ORDER",
            description: "Versatile and stylish, featuring a 360-degree swivel and premium fabric options.",
            bestSeller: false,
            image: "/images/outdoor/wren-chair.png",
            type: "Armchairs"
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
        { label: "Chairs", value: "Chairs", count: products.filter(p => p.type === "Chairs").length },
        { label: "Armchairs", value: "Armchairs", count: products.filter(p => p.type === "Armchairs").length },
        { label: "Stools", value: "Stools", count: products.filter(p => p.type === "Stools").length }
    ].filter(t => t.count > 0);

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                {/* Breadcrumbs */}
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide uppercase">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture" className="hover:text-black transition-colors">Furniture</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture/dining-collections" className="hover:text-black transition-colors">Dining</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-semibold">Dining Chairs</span>
                    </nav>
                </div>

                {/* Main Content Section with Sidebar */}
                <section className="pb-24 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
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
                                    <p className="text-black font-medium tracking-[0.1em] text-sm uppercase">
                                        {filteredProducts.length} Results
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
                                                    <Heart size={18} strokeWidth={1} className="group-hover/heart:fill-red-500 transition-colors" />
                                                </button>

                                                {product.bestSeller && (
                                                    <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase z-10">
                                                        BEST SELLER
                                                    </div>
                                                )}

                                                <div className="absolute bottom-4 left-4">
                                                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                                                        {product.tag}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-3 flex-grow pt-2">
                                                <h4 className="text-[17px] font-serif text-gray-800 transition-colors duration-300 leading-snug">
                                                    {product.name}
                                                </h4>

                                                <div className="space-y-4">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[18px] font-bold text-gray-900 tracking-tight">₹{product.price}</span>
                                                        <p className="text-[10px] text-gray-400 font-light tracking-wide italic">
                                                            Price inclusive of all taxes | Pan India Shipping
                                                        </p>
                                                    </div>

                                                    <p className="text-[11px] text-orange-600 font-bold tracking-wider uppercase">
                                                        EMI starts from ₹ {product.emi}
                                                    </p>

                                                    <div className="pt-4 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <p className="text-[12px] text-gray-500 font-light leading-relaxed line-clamp-2 italic mb-6">
                                                            {product.description}
                                                        </p>
                                                        <button className="w-full bg-black text-white py-3.5 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:bg-orange-600">
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

export default DiningChairCollection;
