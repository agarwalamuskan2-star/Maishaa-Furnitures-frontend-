"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import StyleHero from "@/components/sections/style-hero";
import StyleIntro from "@/components/sections/style-intro";
import StyleGallery from "@/components/sections/style-gallery";

export default function ShopByStylePage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 w-full">
                {/* Breadcrumbs */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6">
                    <nav className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider">
                        <Link href="/" className="hover:text-black transition-colors uppercase">Home</Link>
                        <span className="text-gray-300">/</span>
                        <Link href="/collections" className="hover:text-black transition-colors uppercase">Collections</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-black uppercase">Shop By Style</span>
                    </nav>
                </div>

                {/* Hero Section */}
                <StyleHero />

                {/* Intro Section */}
                <StyleIntro />

                {/* Gallery Section */}
                <StyleGallery />
            </main>

            <Footer />
        </div>
    );
}
