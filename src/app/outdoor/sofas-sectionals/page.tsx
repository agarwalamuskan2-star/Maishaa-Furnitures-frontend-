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

const OutdoorSofasSectionalsPage = () => {
    useEffect(() => {
        document.title = "Buy Modern Outdoor Sofas & Sectionals | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Ethan Outdoor Loveseat",
            price: "1,23,400",
            emi: "2792",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            badge: "BEST SELLER",
            image: "/images/outdoor/seating-cat.png",
            type: "2-Seater Sofas"
        },
        {
            name: "Ethan Outdoor Lounge Sectional",
            price: "2,66,400",
            tag: "SOLD OUT",
            status: "SOLD OUT",
            badge: "BEST SELLER",
            image: "/images/outdoor/accessories-cat.png",
            type: "Outdoor Furniture"
        },
        {
            name: "Sinag Outdoor Corner",
            price: "2,66,400",
            emi: "27922",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            image: "/images/outdoor/dining-cat.png",
            type: "Outdoor Furniture"
        },
        {
            name: "Ethan Outdoor 3-Seater Sofa",
            price: "1,45,600",
            emi: "15267",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            image: "/images/outdoor/hero.png",
            type: "Outdoor Furniture"
        },
        {
            name: "Sinag Outdoor Loveseat",
            price: "1,78,200",
            emi: "18688",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            image: "/images/outdoor/wren-chair.png",
            type: "2-Seater Sofas"
        },
        {
            name: "Ethan Outdoor Corner Sectional",
            price: "2,89,100",
            emi: "30321",
            tag: "MADE TO ORDER",
            status: "MADE TO ORDER",
            image: "/images/outdoor/seating-cat.png",
            type: "Outdoor Furniture"
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
        { label: "Outdoor Furniture", value: "Outdoor Furniture", count: products.filter(p => p.type === "Outdoor Furniture").length },
        { label: "2-Seater Sofas", value: "2-Seater Sofas", count: products.filter(p => p.type === "2-Seater Sofas").length }
    ].filter(t => t.count > 0);

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-b border-gray-50">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide uppercase">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/outdoor" className="hover:text-black transition-colors">Outdoor Collection</Link>
                        <ChevronRight size={12} />
                        <Link href="/outdoor/lounge" className="hover:text-black transition-colors">Outdoor Lounge</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-semibold">Outdoor Sofas & Sectionals</span>
                    </nav>
                </div>

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
                            selectedDiscounts={selectedDiscounts}
                            setSelectedDiscounts={setSelectedDiscounts}
                        />

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
                                                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                                <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:text-red-500 z-10 group/heart">
                                                    <Heart size={18} strokeWidth={1} className="group-hover/heart:fill-red-500 transition-colors" />
                                                </button>
                                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                    {product.badge && (
                                                        <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-black text-white">
                                                            {product.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="absolute bottom-4 left-4">
                                                    <span className={`px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-sm ${product.status === "SOLD OUT" ? "bg-[#666] text-white" : "bg-gray-100 text-gray-600"}`}>
                                                        {product.tag}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="border border-gray-200 p-4 mt-0 transition-shadow duration-300 group-hover:shadow-sm flex flex-col gap-2 pt-2 px-1">
                                                <h4 className="text-[15px] font-medium text-gray-800 transition-colors duration-300 leading-snug tracking-wide uppercase">{product.name}</h4>
                                                <div className="space-y-2">
                                                    <span className="text-[17px] font-bold text-gray-900 tracking-tight">₹{product.price}</span>
                                                    <p className="text-[10px] text-gray-400 font-light tracking-wide italic">Price inclusive of all taxes | Pan India Shipping</p>
                                                    {product.emi && <p className="text-[11px] text-orange-600 font-bold tracking-wider uppercase pt-1">EMI starts from ₹ {product.emi}</p>}
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

export default OutdoorSofasSectionalsPage;
