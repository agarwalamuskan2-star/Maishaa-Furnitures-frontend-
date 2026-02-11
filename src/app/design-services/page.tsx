"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ArrowRight, Box, PenTool } from "lucide-react";

const DesignServicesPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[70vh] w-full overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000"
                        alt="Design Services"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-white text-5xl md:text-8xl font-light tracking-tight mb-8"
                        >
                            Maishaa Design Studio
                        </motion.h1>
                        <p className="text-white/90 text-xl font-light tracking-wide max-w-2xl mx-auto">
                            Transforming spaces into personalized sanctuaries.
                        </p>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-32 px-4 max-w-5xl mx-auto text-center space-y-12">
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Our Approach</span>
                    <h2 className="text-3xl md:text-5xl text-gray-900 leading-tight font-light">
                        "Design is not just what it looks like and feels like. Design is how it <span className="italic font-normal">works</span>."
                    </h2>
                    <p className="text-gray-500 font-light text-lg leading-relaxed max-w-3xl mx-auto">
                        At Maishaa, we believe that your home should be a reflection of your unique journey.
                        Our expert design team works closely with you to curate spaces that harmonize aesthetics
                        with functionality, ensuring every corner tells a story of elegance and comfort.
                    </p>
                </section>

                {/* Process Steps */}
                <section className="bg-gray-50 py-32 px-4 sm:px-8 md:px-16 lg:px-20">
                    <div className="max-w-[1920px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                            {/* Step 1 */}
                            <div className="space-y-8 group">
                                <div className="text-6xl text-gray-200 font-light group-hover:text-black transition-colors">01</div>
                                <h3 className="text-2xl font-medium tracking-tight">The Consultation</h3>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    We begin with a conversation. Understanding your lifestyle, aesthetic preferences,
                                    and functional needs is paramount. Whether in-home or virtual, we listen to your vision.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="space-y-8 group">
                                <div className="text-6xl text-gray-200 font-light group-hover:text-black transition-colors">02</div>
                                <h3 className="text-2xl font-medium tracking-tight">Concept & Curation</h3>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    Our designers craft a bespoke mood board, selecting furniture, fabrics, and finishes
                                    from our exclusive collections. We propose layouts that optimize flow and light.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="space-y-8 group">
                                <div className="text-6xl text-gray-200 font-light group-hover:text-black transition-colors">03</div>
                                <h3 className="text-2xl font-medium tracking-tight">Execution</h3>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    From white-glove delivery to the final styling touches, we handle every detail.
                                    Watch as your vision comes to life, creating a space you'll love for years to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Includes */}
                <section className="py-32 px-4 sm:px-8 md:px-16 lg:px-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-black text-white rounded-sm overflow-hidden">
                        <div className="p-16 md:p-24 flex flex-col justify-between space-y-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-light mb-12">What We Offer</h2>
                                <ul className="space-y-6">
                                    <li className="flex items-center gap-4 text-lg font-light tracking-wide border-b border-white/20 pb-4">
                                        <Box size={20} className="text-gray-400" /> Space Planning & Layout
                                    </li>
                                    <li className="flex items-center gap-4 text-lg font-light tracking-wide border-b border-white/20 pb-4">
                                        <PenTool size={20} className="text-gray-400" /> Consultative Styling
                                    </li>
                                    <li className="flex items-center gap-4 text-lg font-light tracking-wide border-b border-white/20 pb-4">
                                        <span className="text-xl">✨</span> Custom Furniture Design
                                    </li>
                                    <li className="flex items-center gap-4 text-lg font-light tracking-wide pb-4">
                                        <span className="text-xl">🎨</span> Materal & Finish Selection
                                    </li>
                                </ul>
                            </div>

                            <button className="bg-white text-black px-12 py-5 text-sm font-medium tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors w-full sm:w-auto flex items-center justify-between group">
                                Book Consultation
                                <ArrowRight size={20} className="ml-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                        <div className="relative min-h-[500px] lg:min-h-full">
                            <Image
                                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200"
                                alt="Design Service Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default DesignServicesPage;
