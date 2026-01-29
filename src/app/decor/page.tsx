"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import DecorHero from "@/components/sections/decor-hero";
import DecorIntro from "@/components/sections/decor-intro-text";
import DecorCategories from "@/components/sections/decor-categories";
import DecorSidebar from "@/components/sections/decor-sidebar";
import DecorGrid from "@/components/sections/decor-grid";

export default function DecorPage() {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 w-full pb-20">
                {/* Breadcrumbs */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6">
                    <nav className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 font-medium">
                        <Link href="/" className="hover:text-black transition-colors uppercase tracking-wider">Home</Link>
                        <span className="text-gray-300">/</span>
                        <Link href="/collections" className="hover:text-black transition-colors uppercase tracking-wider">Collections</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-black uppercase tracking-wider">Decor & Accents</span>
                    </nav>
                </div>

                {/* Hero Section */}
                <DecorHero />

                {/* Intro Section */}
                <DecorIntro />

                {/* Shopping Layout with Sidebar */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    {/* Side Sidebar + Content Layout */}
                    <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16 items-start mt-10 mb-20">
                        <DecorSidebar
                            isOpen={isMobileFilterOpen}
                            onClose={() => setIsMobileFilterOpen(false)}
                        />
                        <div className="flex-1 w-full">
                            {/* Categories Section */}
                            <DecorCategories />

                            {/* Product Grid */}
                            <DecorGrid
                                onFilterClick={() => setIsMobileFilterOpen(true)}
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
