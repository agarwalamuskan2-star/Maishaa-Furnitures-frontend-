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

const BuffetConsolesCollection = () => {
    useEffect(() => {
        document.title = "Luxury Buffet Consoles & Sideboards | Maishaa";
    }, []);

    const products: (Product & { description?: string, bestSeller?: boolean, emi?: string, discountLabel?: string })[] = [
        {
            name: "Kansas Sideboard Console",
            price: "1,26,900",
            originalPrice: "1,41,000",
            discountLabel: "10% Off",
            emi: "13,304",
            tag: "MADE TO ORDER",
            description: "A minimalist masterpiece in solid wood, offering expansive storage with a clean, contemporary profile.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000",
            type: "Sideboards"
        },
        {
            name: "Claude Buffet Console",
            price: "1,15,560",
            originalPrice: "1,28,400",
            discountLabel: "10% Off",
            emi: "12,115",
            tag: "MADE TO ORDER",
            description: "Architectural elegance with fluted glass doors and dark oak finish, perfect for sophisticated dining spaces.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1000",
            type: "Consoles"
        },
        {
            name: "Thanjavur Chiseled Buffet Console",
            price: "1,74,900",
            originalPrice: "1,94,300",
            discountLabel: "10% Off",
            emi: "18,336",
            tag: "MADE TO ORDER",
            description: "Hand-chiseled patterns on solid teak wood, celebrating traditional Indian craftsmanship in a modern silhouette.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
            type: "Sideboards"
        },
        {
            name: "Chevron Oak Sideboard",
            price: "89,000",
            originalPrice: "98,800",
            discountLabel: "10% Off",
            emi: "9,328",
            tag: "MADE TO ORDER",
            description: "Dynamic chevron-patterned doors in light oak finish, adding visual interest and texture to your interiors.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1000",
            type: "Sideboards"
        },
        {
            name: "Regal Walnut Buffet",
            price: "1,45,000",
            originalPrice: "1,61,000",
            discountLabel: "10% Off",
            emi: "15,200",
            tag: "MADE TO ORDER",
            description: "A commanding presence with rich walnut veneer and polished brass hardware for a touch of classic luxury.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
            type: "Sideboards"
        },
        {
            name: "Midnight Emerald Console",
            price: "1,05,000",
            originalPrice: "1,16,600",
            discountLabel: "10% Off",
            emi: "11,008",
            tag: "MADE TO ORDER",
            description: "Bold emerald lacquer finish with distinctive ring pulls, making it the centerpiece of any design scheme.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000",
            type: "Consoles"
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
        { label: "Sideboards", value: "Sideboards", count: products.filter(p => p.type === "Sideboards").length },
        { label: "Consoles", value: "Consoles", count: products.filter(p => p.type === "Consoles").length },
        { label: "Chest of Drawers", value: "Chest of Drawers", count: products.filter(p => p.type === "Chest of Drawers").length },
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
                        <Link href="/furniture/dining" className="hover:text-black transition-colors">Dining</Link>
                        <ChevronRight size={12} />
                        <span className="text-black font-medium">Buffets Consoles</span>
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
                                    <h1 className="text-2xl font-serif font-medium uppercase tracking-wider">Buffets Consoles</h1>
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
                            The Art of Functional Hosting
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic text-center">
                            A buffet console is the heart of a dining room's organization. Our collection of sideboards and consoles combines generous storage with sculptural elegance, ensuring your hosting essentials are stored with as much style as they are served with.
                        </p>
                    </motion.div>
                </section>

                {/* BOTTOM CONTENT SECTION */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Redefining the Dining Anchor
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    Buffet consoles have transitioned from purely utilitarian storage to central design elements. In modern open-plan living, they often serve as transitional pieces that define spaces while providing a surface for curated decor and beverage service.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Choosing for Your Space
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Scale and Proportion:</span> Ensure your sideboard is proportionate to your dining table. A general rule is to choose a console that is at least half the length of your table to maintain visual balance.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Material Integrity:</span> Consider the dialogue between your table and console. You can create a unified suite with matching woods, or introduce a contrasting material like fluted glass or chiseled wood to create a more curated, layered look.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BuffetConsolesCollection;
