"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const AboutPage = () => {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000"
                        alt="Maishaa Studio"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-white text-5xl md:text-7xl font-light tracking-tight mb-6">
                                The Art of Living
                            </h1>
                            <p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
                                Crafting timeless furniture that bridges the gap between heritage and modern luxury.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Our Story</span>
                            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight font-light">
                                Born from a passion for <span className="italic">exquisite</span> craftsmanship.
                            </h2>
                            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                                <p>
                                    Maishaa began with a simple vision: to create furniture that isn't just functional,
                                    but emotional. We believe that the objects you surround yourself with should tell a story,
                                    hold a memory, and inspire a feeling of home.
                                </p>
                                <p>
                                    Drawing inspiration from global design movements and local artisanal traditions,
                                    we bridge the gap between the past and the future. Each piece is a dialogue
                                    between material and form, designed to age gracefully and become a cherished
                                    part of your family's narrative.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200"
                                alt="Craftsmanship"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 px-4 sm:px-8 bg-[#f9f9f9]">
                    <div className="max-w-[1920px] mx-auto px-4 md:px-12">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6 font-light">Our Philosophy</h2>
                            <p className="text-gray-500 font-light">
                                We are guided by principles that ensure every piece we create meets the highest standards of quality, sustainability, and design.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div className="space-y-6 px-6">
                                <div className="h-16 flex items-center justify-center text-4xl">✨</div>
                                <h3 className="text-xl text-gray-900 tracking-wide uppercase font-medium">Uncompromising Quality</h3>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    We source only the finest materials—solid hardwoods, premium leathers, and natural fabrics—to ensure longevity and beauty.
                                </p>
                            </div>
                            <div className="space-y-6 px-6 border-l-0 md:border-l border-gray-200">
                                <div className="h-16 flex items-center justify-center text-4xl">🌿</div>
                                <h3 className="text-xl text-gray-900 tracking-wide uppercase font-medium">Sustainable Future</h3>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    Mindful manufacturing is at our core. We strive to minimize our footprint through responsible sourcing and waste reduction.
                                </p>
                            </div>
                            <div className="space-y-6 px-6 border-l-0 md:border-l border-gray-200">
                                <div className="h-16 flex items-center justify-center text-4xl">🎨</div>
                                <h3 className="text-xl text-gray-900 tracking-wide uppercase font-medium">Timeless Design</h3>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    We ignore fleeting trends in favor of enduring style. Our designs are meant to be relevant today, tomorrow, and forever.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Grid / Studio Glimpse */}
                <section className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-square md:aspect-auto min-h-[500px]">
                        <Image
                            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"
                            alt="Studio Detail 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center bg-gray-900 text-white p-16 md:p-24 space-y-8">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">The Workshop</span>
                        <h2 className="text-3xl md:text-5xl font-light leading-tight">
                            Where magic happens.
                        </h2>
                        <p className="text-gray-400 font-light leading-relaxed text-lg">
                            Our workshop is a sanctuary of creation. Here, skilled artisans utilize both traditional hand tools
                            and modern precision machinery to bring our designs to life. Every curve, joint, and finish
                            is inspected with obsessive attention to detail.
                        </p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
