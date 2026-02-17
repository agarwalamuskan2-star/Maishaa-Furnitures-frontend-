"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useProductFilter, Product } from "@/hooks/use-product-filter";
import ProductFilterSidebar from "@/components/product/product-filter-sidebar";
import ProductCardDetailed from "@/components/ui/product-card-detailed";

const EntrywayCollection = () => {
    useEffect(() => {
        document.title = "Entryway Furniture | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Shila Console Table",
            price: "67,410",
            originalPrice: "74,900",
            discount: "10% Off",
            emi: "7,067",
            tag: "READY TO SHIP",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800",
            type: "Console Tables"
        },
        {
            name: "Nakashi Chiseled Arch Console",
            price: "1,64,000",
            originalPrice: "2,05,000",
            discount: "20% Off",
            emi: "17,194",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=800",
            type: "Console Tables"
        },
        {
            name: "Tamera Two-Way Reaper Swing",
            price: "96,300",
            originalPrice: "1,20,375",
            discount: "20% Off",
            emi: "11,455",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800",
            type: "Swing"
        },
        {
            name: "Cairn Chiseled Console",
            price: "86,900",
            originalPrice: "1,08,625",
            discount: "20% Off",
            emi: "9,111",
            tag: "MADE TO ORDER",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
            type: "Console Tables"
        },
        {
            name: "Kezia Two-Way Rattan Swing",
            price: "1,02,600",
            originalPrice: "1,28,250",
            discount: "20% Off",
            emi: "12,115",
            tag: "MADE TO ORDER",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800",
            type: "Swing"
        },
        {
            name: "Ahava Chiseled Console",
            price: "89,600",
            originalPrice: "1,12,000",
            discount: "20% Off",
            emi: "9,394",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800",
            type: "Console Tables"
        },
        {
            name: "Vivo Slatted Shoe Console",
            price: "99,920",
            originalPrice: "1,24,900",
            discount: "20% Off",
            emi: "10,476",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800",
            type: "Shoe Rack"
        },
        {
            name: "Alonzo Accent Chair",
            price: "80,910",
            originalPrice: "89,900",
            discount: "10% Off",
            emi: "8,483",
            tag: "MADE TO ORDER",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800",
            type: "Benches"
        }
    ];

    const {
        selectedTypes, setSelectedTypes,
        priceRange, setPriceRange,
        selectedDiscounts, setSelectedDiscounts,
        filteredProducts
    } = useProductFilter(products);

    const availableTypes = [
        { label: "Console Tables", value: "Console Tables", count: products.filter(p => p.type === "Console Tables").length },
        { label: "Shoe Cabinet", value: "Shoe Rack", count: products.filter(p => p.type === "Shoe Rack").length },
        { label: "Benches", value: "Benches", count: products.filter(p => p.type === "Benches").length },
        { label: "Daybeds & Diwans", value: "Daybeds", count: 0 },
        { label: "Center Tables", value: "Center Tables", count: 0 },
        { label: "Swing", value: "Swing", count: products.filter(p => p.type === "Swing").length },
    ].filter(t => t.count > 0 || ["Daybeds", "Center Tables"].includes(t.value));

    const categories = [
        { name: "Consoles", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=200", href: "/furniture/console-tables" },
        { name: "Shoe Rack", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=200", href: "/furniture/shoe-racks" },
        { name: "Benches", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=200", href: "/furniture/benches" },
        { name: "Swing", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=200", href: "/furniture/swing" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans">
            <Header />

            <main className="flex-1">
                {/* Breadcrumbs */}
                <div className="pt-6 pb-4 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <nav className="flex items-center gap-2 text-gray-400 text-[11px] tracking-wide">
                        <Link href="/" className="hover:text-black transition-colors uppercase">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/furniture" className="hover:text-black transition-colors uppercase">Furniture</Link>
                        <ChevronRight size={12} />
                        <span className="text-black uppercase">Entryway</span>
                    </nav>
                </div>

                {/* Hero Section */}
                <section className="px-4 sm:px-8 md:px-16 lg:px-20 mb-12">
                    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop"
                            alt="Entryway Furniture"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </section>

                {/* Category Tags with Images */}
                <section className="px-4 sm:px-8 md:px-16 lg:px-20 mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 border border-gray-100">
                        {categories.map((cat, idx) => (
                            <Link
                                key={idx}
                                href={cat.href}
                                className="flex items-center justify-between p-6 border-r border-b border-gray-100 hover:bg-gray-50 transition-colors group"
                            >
                                <span className="text-sm font-medium text-gray-900 uppercase tracking-widest">{cat.name}</span>
                                <div className="relative w-16 h-16 grayscale group-hover:grayscale-0 transition-all">
                                    <Image src={cat.image} alt={cat.name} fill className="object-cover rounded-sm" />
                                </div>
                            </Link>
                        ))}
                        <div className="hidden lg:block border-b border-gray-100 bg-[#f9f9f9]/30" />
                    </div>
                </section>

                {/* Main Content Section with Sidebar */}
                <section className="pb-24 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <div className="w-full lg:w-72 flex-shrink-0">
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
                        </div>

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            {/* Toolbar */}
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6 border-b border-gray-100 pb-8">
                                <div className="space-y-1">
                                    <h2 className="text-xl font-medium text-gray-900 uppercase tracking-widest">Browse by</h2>
                                    <p className="text-gray-400 font-light tracking-[0.1em] text-[13px]">
                                        {filteredProducts.length} Results
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-950 cursor-pointer group">
                                    Sort: <span className="text-gray-500 font-medium">Featured</span>
                                    <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                                </div>
                            </div>

                            {/* Grid */}
                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                                    {filteredProducts.map((product, idx) => (
                                        <motion.div
                                            key={product.name + idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <ProductCardDetailed
                                                id={idx + 1000}
                                                title={product.name}
                                                price={product.price.startsWith('₹') ? product.price : `₹${product.price}`}
                                                originalPrice={product.originalPrice ? (product.originalPrice.startsWith('₹') ? product.originalPrice : `₹${product.originalPrice}`) : undefined}
                                                discount={product.discount}
                                                emiStart={product.emi}
                                                mainImage={product.image}
                                                isMadeToOrder={product.tag === "MADE TO ORDER"}
                                                isReadyToShip={product.tag === "READY TO SHIP"}
                                                badges={product.bestSeller ? [{ text: "BEST SELLER", color: "black" }] : []}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center p-32 border border-dashed border-gray-200 rounded-sm bg-gray-50/30">
                                    <p className="text-gray-400 font-light italic text-lg uppercase tracking-widest">No products found</p>
                                    <button
                                        onClick={() => {
                                            setSelectedTypes([]);
                                            setPriceRange([0, 200000]);
                                            setSelectedDiscounts([]);
                                        }}
                                        className="mt-6 text-[11px] font-bold uppercase tracking-widest text-black border-b border-black pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors"
                                    >
                                        Clear all filters
                                    </button>
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

export default EntrywayCollection;
