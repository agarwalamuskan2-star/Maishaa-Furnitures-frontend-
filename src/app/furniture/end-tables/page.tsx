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

const EndTablesCollection = () => {
    useEffect(() => {
        document.title = "End Tables & Side Tables | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Aurelia Nero Marquina Table",
            price: "65,000",
            originalPrice: "75,000",
            discount: "13% Off",
            emi: "6,800",
            tag: "READY TO SHIP",
            description: "A compact pedestal of black Nero Marquina marble with stunning white veining, perfect for bedside elegance.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1000",
            type: "Pedestal Tables"
        },
        {
            name: "Zephyr Acrylic Side Table",
            price: "42,000",
            originalPrice: "48,000",
            discount: "13% Off",
            emi: "4,400",
            tag: "MADE TO ORDER",
            description: "Ultra-clear artisan acrylic with polished edges, designed to blend seamlessly into modern living spaces.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1000",
            type: "Pedestal Tables"
        },
        {
            name: "The Gilded Bamboo End Table",
            price: "85,000",
            originalPrice: "98,000",
            discount: "13% Off",
            emi: "8,900",
            tag: "HANDCRAFTED",
            bestSeller: true,
            description: "Gold-leafed iron frame mirroring the organic form of bamboo, topped with a thick crystal glass surface.",
            image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000",
            type: "Pedestal Tables"
        },
        {
            name: "Heritage Teak Nesting Sets",
            price: "55,000",
            originalPrice: "65,000",
            discount: "15% Off",
            emi: "5,800",
            tag: "READY TO SHIP",
            description: "A pair of solid teak nesting tables with a natural matte finish, ideal for flexible entertaining.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000",
            type: "Nesting Sets"
        },
        {
            name: "Solstice Hammered Brass Table",
            price: "72,000",
            originalPrice: "85,000",
            discount: "15% Off",
            emi: "7,500",
            tag: "ARTISAN MADE",
            description: "Hand-hammered brass with a vintage patina, offering a warm and soulful textural accent.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000",
            type: "Pedestal Tables"
        },
        {
            name: "Obsidian Marble C-Table",
            price: "38,000",
            originalPrice: "45,000",
            discount: "16% Off",
            emi: "4,000",
            tag: "READY TO SHIP",
            description: "Multifunctional C-shaped table in polished black stone, designed to slide effortlessly over sofa arms.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000",
            type: "C-Tables"
        },
        {
            name: "Lumina Circular Pedestal Table",
            price: "41,500",
            originalPrice: "48,000",
            discount: "14% Off",
            emi: "4,380",
            tag: "MADE TO ORDER",
            description: "Mid-century inspired pedestal table with a lacquered white top and a slim chrome base.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1000",
            type: "Pedestal Tables"
        },
        {
            name: "Sovereign Inlay End Table",
            price: "68,000",
            originalPrice: "78,000",
            discount: "13% Off",
            emi: "7,150",
            tag: "HANDCRAFTED",
            description: "Rich Moroccan-inspired geometric bone inlay patterns over a durable Sheesham wood core.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000",
            type: "Inlay Designs"
        },
        {
            name: "Brutalist Iron Side Table",
            price: "35,000",
            originalPrice: "42,000",
            discount: "17% Off",
            emi: "3,680",
            tag: "READY TO SHIP",
            description: "Raw, industrial-style heavy iron construction with a protective clear-coat matte finish.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1000",
            type: "Pedestal Tables"
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
        { label: "Pedestal Tables", value: "Pedestal Tables", count: products.filter(p => p.type === "Pedestal Tables").length },
        { label: "Nesting Sets", value: "Nesting Sets", count: products.filter(p => p.type === "Nesting Sets").length },
        { label: "C-Tables", value: "C-Tables", count: products.filter(p => p.type === "C-Tables").length },
        { label: "Inlay Designs", value: "Inlay Designs", count: products.filter(p => p.type === "Inlay Designs").length }
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
                        <Link href="/furniture/living" className="hover:text-black transition-colors">Living</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">End Tables</span>
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

export default EndTablesCollection;
