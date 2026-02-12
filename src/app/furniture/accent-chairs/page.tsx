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

const AccentChairsCollection = () => {
    useEffect(() => {
        document.title = "Luxury Accent & Lounge Chairs | Maishaa";
    }, []);

    const products: Product[] = [
        {
            name: "Thinnai Rattan Lounge Chair",
            price: "89,910",
            originalPrice: "99,900",
            discount: "10% Off",
            emi: "9,426",
            tag: "MADE TO ORDER",
            description: "A natural rattan weave paired with a sturdy wooden frame for an airy, tropical feel.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000",
            type: "Lounge Chairs"
        },
        {
            name: "Lumina Lounge Chair",
            price: "1,25,000",
            originalPrice: "1,50,000",
            discount: "17% Off",
            emi: "13,200",
            tag: "BEST SELLER",
            description: "Sculptural silhouette featuring premium boucle upholstery and high-density foam comfort.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000",
            type: "Lounge Chairs"
        },
        {
            name: "Avalon Grand Armchair",
            price: "1,45,000",
            originalPrice: "1,75,000",
            discount: "17% Off",
            emi: "15,200",
            tag: "READY TO SHIP",
            description: "Deep-seated comfort with exquisite velvet quilting and hand-finished walnut legs.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000",
            type: "Armchairs"
        },
        {
            name: "Ethereal Swivel Chair",
            price: "72,000",
            originalPrice: "85,000",
            discount: "15% Off",
            emi: "7,500",
            tag: "MADE TO ORDER",
            description: "360-degree swivel functionality meets contemporary aesthetic in soft premium linen.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000",
            type: "Swivel Chairs"
        },
        {
            name: "Slink Green Velvet Chair",
            price: "95,000",
            originalPrice: "1,15,000",
            discount: "17% Off",
            emi: "10,200",
            tag: "READY TO SHIP",
            description: "Bold emerald velvet with gold-finished accents for a touch of refined architectural opulence.",
            bestSeller: true,
            image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1000",
            type: "Armchairs"
        },
        {
            name: "The Sovereign Wingback",
            price: "1,85,000",
            originalPrice: "2,20,000",
            discount: "16% Off",
            emi: "19,500",
            tag: "ARTISAN MADE",
            description: "A modern take on the classic wingback, featuring orthopaedic support and rich top-grain leather.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000",
            type: "Armchairs"
        },
        {
            name: "Marrakesh Bone Inlay Chair",
            price: "2,10,000",
            originalPrice: "2,50,000",
            discount: "16% Off",
            emi: "22,200",
            tag: "HANDCRAFTED",
            description: "Intricate hand-carved bone inlay patterns that make every piece a unique work of art.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1000",
            type: "Armchairs"
        },
        {
            name: "Nordic Minimalist Stool",
            price: "45,000",
            originalPrice: "52,000",
            discount: "13% Off",
            emi: "4,800",
            tag: "MADE TO ORDER",
            description: "Clean lines and light ashwood construction, perfect for contemporary nooks and minimalist spaces.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=1000",
            type: "Accent Stools"
        },
        {
            name: "Zenith Occasional Chair",
            price: "65,000",
            originalPrice: "78,000",
            discount: "17% Off",
            emi: "6,900",
            tag: "READY TO SHIP",
            description: "A versatile accent piece with a slim profile and durable, stain-resistant performance fabric.",
            bestSeller: false,
            image: "https://images.unsplash.com/photo-1519452635265-74a4dd926b7b?q=80&w=1000",
            type: "Lounge Chairs"
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
        { label: "Lounge Chairs", value: "Lounge Chairs", count: products.filter(p => p.type === "Lounge Chairs").length },
        { label: "Armchairs", value: "Armchairs", count: products.filter(p => p.type === "Armchairs").length },
        { label: "Swivel Chairs", value: "Swivel Chairs", count: products.filter(p => p.type === "Swivel Chairs").length },
        { label: "Accent Stools", value: "Accent Stools", count: products.filter(p => p.type === "Accent Stools").length }
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
                        <span className="text-black font-medium">Accent Chairs</span>
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
                            maxPrice={250000}
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
                            Elevate Your Home with Luxury Accent Chairs
                        </h2>
                        <div className="w-20 h-px bg-gray-300 mx-auto"></div>
                        <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light font-serif italic text-center">
                            A well-chosen accent chair is more than just a seat; it&apos;s a statement piece that defines the character of your room. From sophisticated rattan designs to plush velvet armchairs, our collection brings together artistry and comfort to transform any space into a premium retreat.
                        </p>
                    </motion.div>
                </section>

                {/* BOTTOM CONTENT SECTION */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Block 1 */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-[32px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Discover the Art of Lounging
                            </h2>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    Accent chairs and lounge chairs serve as the perfect marriage of form and function in modern interior design. They offer an opportunity to introduce new textures, colors, and silhouettes into your living space, creating focal points that draw the eye and invite relaxation.
                                </p>
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    At Maishaa, we believe that every corner of your home should reflect your personal style. Our curated selection of accent chairs features premium materials like solid Ashwood, rich Italian leather, and high-performance tactile fabrics, ensuring each piece is as durable as it is beautiful.
                                </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Choosing the Perfect Accent Chair for Your Space
                            </h3>
                            <div className="space-y-10 pt-4">
                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Scale and Proportion:</span> Consider the size of your existing furniture. A large wingback chair can command a spacious room, while a minimalist rattan chair like the Thinnai is ideal for smaller nooks or as a secondary seating option.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">The Material Story:</span> Choose materials that complement your lifestyle. Our Slink Green velvet offers a touch of opulence, while Rattan brings a natural, airy feel to entryways and sunrooms.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[#1a1a1a] leading-relaxed text-[17px] font-light">
                                        <span className="font-bold uppercase tracking-wider text-sm block mb-1">Color and Contrast:</span> Use your accent chair to introduce a pop of color or a contrasting texture. A saddle leather chair can ground a brightly colored room, while a vibrant velvet piece can serve as the primary artistic element in a neutral space.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-[28px] font-serif text-[#1a1a1a] leading-tight font-medium">
                                Why Choose Maishaa Furnitures?
                            </h3>
                            <div className="space-y-6">
                                <p className="text-[#666] leading-relaxed text-[17px] font-light">
                                    Maishaa stands at the intersection of traditional craftsmanship and contemporary aesthetics. Each accent chair in our collection is meticulously crafted by skilled artisans who understand the nuances of wood, fabric, and ergonomics. We are committed to using sustainably sourced materials, ensuring that your investment in style is also an investment in the environment.
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

export default AccentChairsCollection;
