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

const NightstandsCollection = () => {
    useEffect(() => {
        document.title = "Designer Bedside Tables & Nightstands | Maishaa";
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
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000",
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
            name: "Arlo Minimalist Side Table",
            price: "18,500",
            originalPrice: "24,500",
            discountLabel: "24% Off",
            emi: "1,541",
            tag: "READY TO SHIP",
            description: "Clean lines and a single drawer make this the perfect companion for a contemporary bedroom setup.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000",
            type: "Side Table"
        },
        {
            name: "Caspian Fluted Nightstand",
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
            name: "Orion Mid-Century Table",
            price: "22,900",
            originalPrice: "32,000",
            discountLabel: "28% Off",
            emi: "1,908",
            tag: "READY TO SHIP",
            description: "Tapered legs and a warm oak finish bring a nostalgic yet fresh feel to your bedside.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1505693419173-42b925b10e54?q=80&w=1000",
            type: "Side Table"
        },
        {
            name: "Selene Marble Nightstand",
            price: "55,000",
            originalPrice: "75,000",
            discountLabel: "26% Off",
            emi: "4,583",
            tag: "ARTISAN MADE",
            description: "Genuine white marble top supported by a hand-welded brass frame for an opulent aesthetic.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
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
            name: "Luna Floating Nightstand",
            price: "15,800",
            originalPrice: "21,000",
            discountLabel: "25% Off",
            emi: "1,316",
            tag: "READY TO SHIP",
            description: "A minimalist wall-mounted solution that saves floor space and adds a contemporary floating effect.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000",
            type: "Side Table"
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
        {
            name: "Maya Rattan Side Table",
            price: "12,500",
            originalPrice: "18,000",
            discountLabel: "30% Off",
            emi: "1,041",
            tag: "MADE TO ORDER",
            description: "Sustainable rattan weave on a solid teak frame, bringing an organic warmth to your bedside.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1499916078039-92c739b07f7f?q=80&w=1000",
            type: "Side Table"
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
        { label: "Side Table", value: "Side Table", count: products.filter(p => p.type === "Side Table").length }
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
                        <Link href="/furniture/bedroom" className="hover:text-black transition-colors">Bedroom</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Nightstands</span>
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
                            maxPrice={100000}
                            selectedDiscounts={selectedDiscounts}
                            setSelectedDiscounts={setSelectedDiscounts}
                        />

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                                <div className="space-y-2">
                                    <h1 className="text-2xl font-serif font-medium uppercase tracking-wider">Nightstands</h1>
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

                {/* Narrative Intro Section */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center border-t border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Refined Nightstands for the Modern Bedroom
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic text-center">
                            Your bedside table is the final touch in creating a sanctuary of rest. Our collection of designer nightstands and bedside tables blends functional storage with exquisite aesthetics, ensuring that your most personal space is both organized and impeccably styled.
                        </p>
                    </motion.div>
                </section>

                {/* BOTTOM CONTENT SECTION */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                The Essence of Bedside Elegance
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    Nightstands are more than just a place to set your morning coffee or evening read. They are the anchors of your bedroom's symmetry, providing a balance to the bed and a platform for personal expression through lighting and decor.
                                </p>
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    At Maishaa, we explore the intersection of traditional craftsmanship and modern utility. From the textured wood of our Reaper collection to the fluted elegance of the Caspian, each piece is designed to tell a story of material and form.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Finding Your Perfect Bedside Companion
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Height and Scale:</span> Ideally, your nightstand should be roughly level with the top of your mattress. This ensures ease of access while maintaining the visual flow of the room.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Storage Needs:</span> If you prefer a clutter-free environment, opt for designs with multiple drawers like the Barrett or Lydia. For a more minimalist look, an open-shelf side table provides a sense of airy openness.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Material Harmony:</span> Consider the finish of your bed frame. You can choose to match materials for a cohesive suite, or introduce a contrasting texture like marble or brass to break the uniformity and add visual interest.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Quality That Lasts a Lifetime
                            </h3>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    Every Maishaa nightstand is built with longevity in mind. We use premium solid woods, high-grade veneers, and durable hardware to ensure that your furniture remains as functional and beautiful as the day it arrived. Our commitment to quality means your bedroom will remain a source of comfort and pride for years to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default NightstandsCollection;
