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

const ReadyToShipStorage = () => {
    useEffect(() => {
        document.title = "In Stock Storage | Ready to Ship | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Lydia Chest of 6 Drawers",
            price: "85,600",
            emi: "7,133",
            tag: "READY TO SHIP",
            status: "READY TO SHIP",
            badge: "IN STOCK",
            image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1000",
            type: "Chest of Drawers"
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
        { label: "Chest of Drawers", value: "Chest of Drawers", count: products.filter(p => p.type === "Chest of Drawers").length }
    ].filter(t => t.count > 0);

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans text-black">
            <Header />

            <main className="flex-1">
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white border-b border-gray-50">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide uppercase">
                        <Link href="/" className="hover:text-black transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/ready-to-ship" className="hover:text-black transition-colors">Ready to Ship</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-semibold">In Stock Storage</span>
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
                            maxPrice={200000}
                            selectedDiscounts={selectedDiscounts}
                            setSelectedDiscounts={setSelectedDiscounts}
                        />

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                                <p className="text-gray-900 font-medium tracking-[0.1em] text-sm uppercase">{filteredProducts.length} Results</p>
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
                                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                    {(product as any).badge && (
                                                        <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-black text-white">
                                                            {(product as any).badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="absolute bottom-4 left-4">
                                                    <span className="px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-sm shadow-sm bg-gray-100 text-gray-600">
                                                        {product.tag}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 pt-2 px-1">
                                                <h4 className="text-[15px] font-medium text-gray-800 transition-colors duration-300 leading-snug tracking-wide uppercase">{product.name}</h4>
                                                <span className="text-[17px] font-bold text-gray-900 tracking-tight">₹{product.price}</span>
                                                {(product as any).emi && <p className="text-[11px] text-orange-600 font-bold tracking-wider uppercase pt-1">EMI starts from ₹ {(product as any).emi}</p>}
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

export default ReadyToShipStorage;
