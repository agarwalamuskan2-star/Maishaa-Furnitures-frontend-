"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import OutdoorHero from "@/components/sections/outdoor-hero";
import OutdoorIntro from "@/components/sections/outdoor-intro-text";
import OutdoorDesignerChoice from "@/components/sections/outdoor-designer-choice";
import OutdoorCategories from "@/components/sections/outdoor-categories";
import OutdoorGrid from "@/components/sections/outdoor-grid";
import OutdoorSEOContent from "@/components/sections/outdoor-seo-content";

export default function OutdoorPage() {
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
                        <span className="text-black uppercase tracking-wider">Outdoor Collections</span>
                    </nav>
                </div>

                {/* Hero Section */}
                <OutdoorHero />

                {/* Intro Section */}
                <OutdoorIntro />

                {/* Featured Section */}
                <OutdoorDesignerChoice />

                {/* Categories Bar */}
                <OutdoorCategories />

                {/* Shopping Layout */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-20">
                    <OutdoorGrid />
                </div>

                {/* SEO Content */}
                <OutdoorSEOContent />
            </main>

            <Footer />
        </div>
    );
}
