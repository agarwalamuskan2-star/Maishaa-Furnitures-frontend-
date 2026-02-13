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

const DaybedsCollection = () => {
    useEffect(() => {
        document.title = "Luxury Daybeds & Diwans | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "The Serenity Chaise Daybed",
            price: "1,45,000",
            originalPrice: "1,75,000",
            discount: "17% Off",
            emi: "15,200",
            tag: "MADE TO ORDER",
            description: "A sweeping, ergonomic chaise design that offers the perfect angle for afternoon repose.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000",
            type: "Chaise Lounges"
        },
        {
            name: "The Maharaja Royal Diwan",
            price: "2,10,000",
            originalPrice: "2,45,000",
            discount: "14% Off",
            emi: "22,200",
            tag: "ARTISAN MADE",
            description: "Intricately hand-carved solid teak frame with regal velvet upholstery and bolster pillows.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000",
            type: "Diwans"
        },
        {
            name: "Lumina Button-Tufted Daybed",
            price: "1,25,000",
            originalPrice: "1,45,000",
            discount: "13% Off",
            emi: "13,200",
            tag: "READY TO SHIP",
            description: "Contemporary minimalist silhouette featuring deep button tufting and tapered walnut legs.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1567016432779-094069958bc5?q=80&w=1000",
            type: "Daybeds"
        },
        {
            name: "Aethelred Leather Daybed",
            price: "2,85,000",
            originalPrice: "3,25,000",
            discount: "12% Off",
            emi: "29,800",
            tag: "MADE TO ORDER",
            description: "Rich Italian saddle leather over a heavy-duty steel frame, aging beautifully over time.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1505693419173-42b925b2f27a?q=80&w=1000",
            type: "Daybeds"
        },
        {
            name: "Zenith Fabric Daybed",
            price: "95,000",
            originalPrice: "1,15,000",
            discount: "17% Off",
            emi: "10,200",
            tag: "READY TO SHIP",
            description: "Soft, durable performance-weave fabric in a neutral slate gray, perfect for modern studies.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000",
            type: "Daybeds"
        },
        {
            name: "Marrakesh Bone Inlay Diwan",
            price: "3,45,000",
            originalPrice: "3,95,000",
            discount: "12% Off",
            emi: "36,200",
            tag: "HANDCRAFTED",
            description: "Exquisite handmade bone inlay patterns on a sturdy wooden base, a true statement piece.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=1000",
            type: "Diwans"
        },
        {
            name: "Regency Velvet Chaise",
            price: "1,10,000",
            originalPrice: "1,35,000",
            discount: "18% Off",
            emi: "11,500",
            tag: "MADE TO ORDER",
            description: "Plush emerald velvet with a scalloped backrest and gold-finished metal feet.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000",
            type: "Chaise Lounges"
        },
        {
            name: "Nordic Minimalist Daybed",
            price: "85,000",
            originalPrice: "98,000",
            discount: "13% Off",
            emi: "8,900",
            tag: "READY TO SHIP",
            description: "Light-finished Ashwood frame with a comfortable firm mattress for both seating and sleep.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000",
            type: "Daybeds"
        },
        {
            name: "The Imperial Bolster Diwan",
            price: "1,75,000",
            originalPrice: "2,05,000",
            discount: "14% Off",
            emi: "18,200",
            tag: "ARTISAN MADE",
            description: "A traditional low-profile diwan updated with modern high-density foam for superior support.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000",
            type: "Diwans"
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
        { label: "Daybeds", value: "Daybeds", count: products.filter(p => p.type === "Daybeds").length },
        { label: "Diwans", value: "Diwans", count: products.filter(p => p.type === "Diwans").length },
        { label: "Chaise Lounges", value: "Chaise Lounges", count: products.filter(p => p.type === "Chaise Lounges").length }
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
                        <span className="text-black font-medium">Daybeds & Diwans</span>
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
                            maxPrice={400000}
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
                        </div>
                    </div>
                </section>


            </main>

            <Footer />
        </div>
    );
};

export default DaybedsCollection;
