"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";

const SwingsCollection = () => {
    const products = [
        { name: "Teak Wood Porch Swing", price: "89,000", originalPrice: "111,250", discount: "20% Off", emi: "7,417", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000" },
        { name: "Rattan Hanging Swing Chair", price: "52,000", originalPrice: "65,000", discount: "20% Off", emi: "4,333", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000" },
        { name: "Outdoor Garden Swing Bench", price: "1,25,000", originalPrice: "1,56,250", discount: "20% Off", emi: "10,417", tag: "MADE TO ORDER", bestSeller: false, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000" },
        { name: "Indoor Jhula Swing", price: "78,000", originalPrice: "97,500", discount: "20% Off", emi: "6,500", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1000" },
        { name: "Macrame Hanging Swing", price: "45,000", originalPrice: "56,250", discount: "20% Off", emi: "3,750", tag: "READY TO SHIP", bestSeller: false, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000" },
        { name: "Wooden Patio Swing with Canopy", price: "1,65,000", originalPrice: "2,06,250", discount: "20% Off", emi: "13,750", tag: "MADE TO ORDER", bestSeller: true, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000" },
    ];

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans">
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
                        <span className="text-black">Swings</span>
                    </nav>
                </div>

                {/* Main Collection Section with Sidebar */}
                <section className="pb-12 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
                            <div>
                                <h3 className="text-xl font-serif text-gray-900 mb-8 border-b border-gray-100 pb-4">Browse by</h3>

                                <div className="space-y-10">
                                    {/* Product Type */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Product Type</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {["Porch Swings (8)", "Hanging Chairs (5)", "Garden Swings (4)", "Indoor Jhulas (3)"].map((type) => (
                                                <li key={type} className="flex items-center gap-3 group cursor-pointer text-gray-500 hover:text-black transition-colors">
                                                    <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-black transition-colors"></div>
                                                    <span className="text-[14px] font-light">{type}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Price */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Price</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <div className="px-1 pt-2">
                                            <div className="h-0.5 bg-gray-200 relative mb-6">
                                                <div className="absolute left-0 right-0 h-full bg-black"></div>
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer shadow-sm"></div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-500">
                                                    <span>Min</span>
                                                    <ChevronDown size={14} />
                                                </div>
                                                <span className="text-gray-400">to</span>
                                                <div className="flex-1 border border-gray-200 p-3 flex justify-between items-center text-[13px] text-gray-900">
                                                    <span>₹ 200000</span>
                                                    <ChevronDown size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Material */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Material</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {["Teak Wood (6)", "Rattan (4)", "Metal (2)", "Rope & Fabric (3)"].map((material) => (
                                                <li key={material} className="flex items-center gap-3 text-gray-500 cursor-pointer">
                                                    <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                    <span className="text-[14px] font-light">{material}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Discount */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                                            <span className="text-[13px] font-bold tracking-widest text-gray-900 uppercase">Discount</span>
                                            <span className="text-gray-400 text-lg">−</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {["10% and above", "20% and above", "30% and above"].map((disc) => (
                                                <li key={disc} className="flex items-center gap-3 text-gray-500 cursor-pointer">
                                                    <div className="w-4 h-4 border border-gray-300 rounded-sm"></div>
                                                    <span className="text-[14px] font-light">{disc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Product Grid Content */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
                                <div className="space-y-2">
                                    <p className="text-gray-400 font-light tracking-[0.1em] text-sm italic font-serif uppercase">
                                        20 RESULTS FOUND
                                    </p>
                                </div>
                                <div className="flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-950 border-b border-black pb-1 cursor-pointer">
                                    Sort: Featured
                                    <ChevronDown size={14} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                                {products.map((product, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group cursor-pointer flex flex-col bg-white"
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden bg-[#f9f9f9]">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <button className="absolute top-4 right-4 p-2.5 bg-white rounded-full shadow-sm hover:text-red-500 transition-all duration-300 z-10 group/heart">
                                                <Heart size={18} strokeWidth={1.5} className="group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-colors" />
                                            </button>

                                            {product.bestSeller && (
                                                <div className="absolute top-0 left-0 bg-[#1a1a1a] text-white px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase z-10">
                                                    BEST SELLER
                                                </div>
                                            )}
                                        </div>

                                        <div className="pt-8 flex flex-col flex-1">
                                            <div className="mb-6">
                                                <span className="inline-block bg-[#f5f5f5] text-[#999] px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase mb-4">
                                                    {product.tag}
                                                </span>
                                                <h4 className="text-[17px] font-medium text-gray-900 group-hover:text-orange-600 transition-all duration-500 leading-snug">
                                                    {product.name}
                                                </h4>
                                            </div>

                                            <div className="mt-auto space-y-3">
                                                <p className="text-[20px] font-bold text-gray-900">₹{product.price}</p>

                                                <div className="flex items-center gap-3">
                                                    <span className="text-[14px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                                    <span className="text-[14px] text-orange-600 font-bold whitespace-nowrap">{product.discount}</span>
                                                </div>

                                                <p className="text-[12px] text-orange-600 font-medium tracking-wide">
                                                    EMI starts from ₹ {product.emi}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Narrative Intro Section - MOVED BELOW */}
                <section className="py-24 px-4 max-w-5xl mx-auto text-center border-t border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                            Transform Your Outdoor Space with Premium Swings
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic">
                            Experience the perfect blend of relaxation and elegance with our handcrafted collection of swings, designed to bring comfort and style to your home.
                        </p>
                    </motion.div>
                </section>

                {/* BOTTOM CONTENT SECTION */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Discover the Perfect Swing for Your Home
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    A swing is more than just a piece of furniture—it's an invitation to slow down, relax, and enjoy life's simple pleasures. Whether you're looking to create a cozy reading nook indoors or a serene retreat in your garden, our collection of premium swings offers the perfect solution for every space and style.
                                </p>
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    At Maishaa, we believe in creating furniture that enhances your lifestyle. Our swings are meticulously crafted from the finest materials, including temperature-treated teak wood, natural rattan, and weather-resistant fabrics, ensuring they stand the test of time while maintaining their beauty and comfort.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Choosing the Right Swing: A Guide to Style and Comfort
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Indoor vs. Outdoor:</span> Consider where you'll place your swing. Indoor jhulas and hanging chairs create a bohemian, relaxed atmosphere perfect for reading corners or meditation spaces. Outdoor porch swings and garden benches are designed to withstand the elements while providing a peaceful spot to enjoy nature.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Material Selection:</span> Teak wood offers unparalleled durability and a classic aesthetic, perfect for traditional and contemporary settings alike. Rattan provides a lighter, more casual feel with excellent breathability. For modern spaces, consider our metal-framed swings with weather-resistant cushions.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Size & Capacity:</span> From intimate single-seater hanging chairs to spacious three-seater porch swings, choose a size that fits your space and accommodates your needs. Consider the weight capacity and installation requirements to ensure safe and comfortable use.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold">Style & Design:</span> Our collection ranges from traditional Indian jhulas with intricate carvings to minimalist Scandinavian-inspired hanging chairs. Choose a design that complements your existing decor while adding a unique focal point to your space.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Why Choose Maishaa's Swings?
                            </h3>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    Every swing in our collection is a testament to superior craftsmanship and thoughtful design. Our artisans use time-honored techniques combined with modern engineering to create pieces that are not only beautiful but also incredibly durable and comfortable. From the selection of premium materials to the final finishing touches, we ensure every detail meets our exacting standards.
                                </p>
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    We also provide comprehensive installation guidance and support, ensuring your swing is safely and securely mounted. With proper care, a Maishaa swing will provide years of relaxation and enjoyment, becoming a cherished part of your home where memories are made and moments are savored.
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

export default SwingsCollection;
