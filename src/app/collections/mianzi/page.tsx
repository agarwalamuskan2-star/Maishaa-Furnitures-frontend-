"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Heart } from "lucide-react";

const MianziCollection = () => {
    const products = [
        {
            name: "Metamorphosis Linear Pendant Lamp H-001",
            price: "26,490",
            originalPrice: "26,990",
            emi: "2354",
            tag: "READY TO SHIP",
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/mianzi-1.jpg"
        },
        {
            name: "Metamorphosis Linear Pendant Lamp H-001S",
            price: "23,490",
            originalPrice: "26,990",
            emi: "2087",
            tag: "READY TO SHIP",
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/mianzi-2.jpg"
        },
        {
            name: "Metamorphosis Linear Pendant Lamp H-002",
            price: "26,490",
            originalPrice: "26,990",
            emi: "2354",
            tag: "READY TO SHIP",
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/mianzi-3.jpg"
        },
        {
            name: "Metamorphosis Linear Pendant Lamp H-02S",
            price: "23,490",
            originalPrice: "26,990",
            emi: "2087",
            tag: "READY TO SHIP",
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/mianzi-4.jpg"
        },
        {
            name: "Woven Bamboo Pendant Large",
            price: "28,500",
            originalPrice: "32,000",
            emi: "2533",
            tag: "READY TO SHIP",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000"
        },
        {
            name: "Ethical Bamboo Sconce H-05",
            price: "12,490",
            originalPrice: "14,990",
            emi: "1110",
            tag: "READY TO SHIP",
            image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1000"
        }
    ];

    const heroImage = "https://dtalemodern.com/media/wysiwyg/Mianzi_Banner_1.jpg"; // Placeholder or direct link if possible, using unsplash as fallback
    const mianziLogo = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/mianzi-logo.png";

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full relative h-[60vh] md:h-[90vh] overflow-hidden bg-[#222]">
                    <Image
                        src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2000&auto=format&fit=crop"
                        alt="Mianzi Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Hero Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-sm border border-white/20"
                        >
                            <span className="text-white text-3xl font-serif tracking-tighter uppercase font-bold">MIANZI</span>
                            <span className="text-white text-2xl font-light scale-x-125 mx-2">X</span>
                            <span className="text-white text-2xl font-sans tracking-[0.2em] uppercase font-medium">MAISHAA</span>
                        </motion.div>
                    </div>
                </section>

                {/* Title Section */}
                <section className="py-24 px-4 text-center max-w-4xl mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h1 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] tracking-wide font-normal">Timeless Designs</h1>
                        <p className="text-[#666] leading-relaxed text-lg md:text-xl font-light font-serif px-4">
                            Crafted with intention. Rooted in tradition. Defined by design. Connecting you to a world-class Indian Artisans
                        </p>
                    </motion.div>
                </section>

                {/* Product Grid */}
                <section className="pb-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] overflow-hidden bg-[#f7f7f7] mb-6">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    {/* Wishlist Button */}
                                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:text-red-500 transition-all duration-300 z-10 group/heart">
                                        <Heart size={18} strokeWidth={1.5} className="group-hover/heart:fill-red-500 group-hover/heart:text-red-500" />
                                    </button>

                                    {/* Ready to Ship Badge */}
                                    <div className="absolute bottom-4 left-6 right-6">
                                        <div className="bg-white/90 backdrop-blur-sm text-[#888] py-2 px-4 text-[10px] font-bold tracking-[0.2em] uppercase text-center border-t border-gray-100">
                                            {product.tag}
                                        </div>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="space-y-4 px-2">
                                    <h3 className="text-[15px] font-medium text-[#1a1a1a] leading-snug h-10 line-clamp-2 transition-colors group-hover:text-orange-600">
                                        {product.name}
                                    </h3>

                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[17px] font-bold text-[#1a1a1a]">₹{product.price}</span>
                                            <span className="text-[14px] text-gray-400 line-through">₹{product.originalPrice}</span>
                                        </div>
                                        <p className="text-[12px] text-orange-600 font-medium tracking-wide">
                                            EMI starts from ₹ {product.emi}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Narrative / About Section */}
                <section className="py-32 bg-[#faf9f6]">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 relative aspect-[4/5]">
                            <Image
                                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000"
                                alt="Mianzi Craftsmanship"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-10">
                            <h2 className="text-4xl font-serif text-[#1a1a1a] leading-tight font-light">The Soul of Bamboo</h2>
                            <p className="text-lg text-[#666] leading-relaxed font-light font-serif italic">
                                "Our collaboration with Mianzi explores the intersection of linear geometry and organic textures. We've taken the humble bamboo and transformed it into architectural lighting that defines modern living spaces."
                            </p>
                            <div className="space-y-6 text-[#666] font-light leading-relaxed">
                                <p>
                                    Sustainable design isn't just a choice; it's our philosophy. The Mianzi collection at Maishaa represents our commitment to eco-friendly luxury without compromising on the high-end aesthetic our clients expect.
                                </p>
                                <p>
                                    Each piece is meticulously hand-woven by skilled artisans, ensuring that every lamp carries a unique fingerprint of human touch and natural character.
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

export default MianziCollection;
