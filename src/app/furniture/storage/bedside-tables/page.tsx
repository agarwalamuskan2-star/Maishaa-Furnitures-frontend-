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

const BedsideTablesCollection = () => {
    useEffect(() => {
        document.title = "Designer Bedside Tables | Maishaa";
    }, []);

    const products: (Product & { description?: string, bestSeller?: boolean, emi?: string, discountLabel?: string })[] = [
        {
            name: "Barrett Reaper Nightstand",
            price: "34,580",
            originalPrice: "49,400",
            discountLabel: "30% Off",
            emi: "2,881",
            tag: "MADE TO ORDER",
            description: "A premium modern nightstand with two drawers made of textured reaper wood and minimalist metal accents.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1550226124-2b36e23738e4?q=80&w=1000",
            type: "Bedside Table"
        },
        {
            name: "Lydia Nightstand",
            price: "28,280",
            originalPrice: "40,400",
            discountLabel: "30% Off",
            emi: "2,356",
            tag: "MADE TO ORDER",
            description: "Elegant bedside companion featuring a softened silhouette, wicker-front drawers, and solid ashwood legs.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000",
            type: "Bedside Table"
        },
        {
            name: "Walter Nightstand",
            price: "34,580",
            originalPrice: "49,400",
            discountLabel: "30% Off",
            emi: "2,881",
            tag: "MADE TO ORDER",
            description: "Architectural design with an open shelf and single drawer, finished in a rich walnut veneer.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1499916078039-92c739b07f7f?q=80&w=1000",
            type: "Bedside Table"
        },
        {
            name: "Caspian Fluted Bedside Table",
            price: "42,000",
            originalPrice: "56,000",
            discountLabel: "25% Off",
            emi: "3,500",
            tag: "MADE TO ORDER",
            description: "Handcrafted fluted details paired with a marble top, defining the peak of bedroom luxury.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=1000",
            type: "Bedside Table"
        },
        {
            name: "Nova Modern Bedside Table",
            price: "26,500",
            originalPrice: "38,000",
            discountLabel: "30% Off",
            emi: "2,208",
            tag: "MADE TO ORDER",
            description: "Sleek matte black finish with integrated wireless charging functionality for the modern home.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000",
            type: "Bedside Table"
        },
        {
            name: "Kensington Classic Table",
            price: "38,000",
            originalPrice: "52,000",
            discountLabel: "27% Off",
            emi: "3,166",
            tag: "ARTISAN MADE",
            description: "Traditional design with intricate carving and antique brass hardware, perfect for a classic suite.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000",
            type: "Bedside Table"
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
        { label: "Bedside Table", value: "Bedside Table", count: products.filter(p => p.type === "Bedside Table").length },
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
                        <span className="text-black font-medium">Bedside Tables</span>
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
                            minPrice={10000}
                            maxPrice={40000}
                            selectedDiscounts={selectedDiscounts}
                            setSelectedDiscounts={setSelectedDiscounts}
                        />

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                                <div className="space-y-2">
                                    <h1 className="text-2xl font-serif font-medium uppercase tracking-wider">Bedside Tables</h1>
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
            </main>

            <Footer />
        </div>
    );
};

export default BedsideTablesCollection;
