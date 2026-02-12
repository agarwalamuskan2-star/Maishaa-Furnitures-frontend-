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

const ShoeRacksCollection = () => {
    useEffect(() => {
        document.title = "Designer Shoe Racks & Consoles | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Ventura Louvered Shoe Cabinet",
            price: "58,500",
            originalPrice: "68,000",
            discount: "14% Off",
            emi: "4,900",
            tag: "MADE TO ORDER",
            description: "A breathable design with louvered doors, preventing moisture build-up while offering ample storage.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000",
            type: "Shoe Consoles"
        },
        {
            name: "Nordic Minimalist Shoe Bench",
            price: "32,000",
            originalPrice: "38,000",
            discount: "16% Off",
            emi: "2,700",
            tag: "READY TO SHIP",
            description: "Combining seating and storage, this compact bench is perfect for tight entryways.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000",
            type: "Shoe Benches"
        },
        {
            name: "The Grand Foyer Shoe Armoire",
            price: "1,10,000",
            originalPrice: "1,35,000",
            discount: "18% Off",
            emi: "9,200",
            tag: "ARTISAN MADE",
            description: "A tall, statement-making armoire with adjustable shelves to accommodate boots and heels.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=1000",
            type: "Shoe Chests"
        },
        {
            name: "Zenith Rotating Shoe Tower",
            price: "45,000",
            originalPrice: "52,000",
            discount: "13% Off",
            emi: "3,800",
            tag: "MADE TO ORDER",
            description: "Innovative rotating design maximizes vertical space, fitting up to 20 pairs in a small footprint.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1000",
            type: "Shoe Racks"
        },
        {
            name: "Marrakesh Inlay Shoe Chest",
            price: "1,45,000",
            originalPrice: "1,75,000",
            discount: "17% Off",
            emi: "12,200",
            tag: "HANDCRAFTED",
            description: "Exquisite bone inlay patterns transform this functional storage unit into a work of art.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1616489953149-623830209425?q=80&w=1000",
            type: "Shoe Chests"
        },
        {
            name: "Lumina High-Gloss Console",
            price: "72,000",
            originalPrice: "85,000",
            discount: "15% Off",
            emi: "6,000",
            tag: "READY TO SHIP",
            description: "Sleek high-gloss finish with hidden handle-less drawers for a ultra-modern look.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1000",
            type: "Shoe Consoles"
        },
        {
            name: "Cane Weave Shoe Cabinet",
            price: "52,000",
            originalPrice: "62,000",
            discount: "16% Off",
            emi: "4,400",
            tag: "MADE TO ORDER",
            description: "Black-stained wood frame with natural cane webbing door fronts for a trendy, textural contrast.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000",
            type: "Shoe Consoles"
        },
        {
            name: "Industrial Metal & Wood Rack",
            price: "28,000",
            originalPrice: "34,000",
            discount: "17% Off",
            emi: "2,400",
            tag: "READY TO SHIP",
            description: "Open-shelf industrial design using reclaimed pine and powder-coated matte black steel.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1532323544230-ac8d43e29821?q=80&w=1000",
            type: "Shoe Racks"
        },
        {
            name: "The Imperial Drawer Chest",
            price: "95,000",
            originalPrice: "1,12,000",
            discount: "15% Off",
            emi: "8,000",
            tag: "ARTISAN MADE",
            description: "Classic multi-drawer chest with brass hardware, offering categorized storage for the whole family.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000",
            type: "Shoe Chests"
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
        { label: "Shoe Racks", value: "Shoe Racks", count: products.filter(p => p.type === "Shoe Racks").length },
        { label: "Shoe Consoles", value: "Shoe Consoles", count: products.filter(p => p.type === "Shoe Consoles").length },
        { label: "Shoe Chests", value: "Shoe Chests", count: products.filter(p => p.type === "Shoe Chests").length },
        { label: "Shoe Benches", value: "Shoe Benches", count: products.filter(p => p.type === "Shoe Benches").length }
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
                        <Link href="/furniture/entryway" className="hover:text-black transition-colors">Entryway</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Shoe Racks</span>
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
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ShoeRacksCollection;
