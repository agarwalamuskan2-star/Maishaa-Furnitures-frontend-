"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import BestSellersSidebar from "@/components/sections/best-sellers-sidebar";
import BestSellersGrid from "@/components/sections/best-sellers-grid";

export default function BestSellersPage() {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 w-full pb-20">
                {/* Breadcrumbs */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6">
                    <nav className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider">
                        <Link href="/" className="hover:text-black transition-colors uppercase">Home</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-black uppercase">Best Sellers</span>
                    </nav>
                </div>

                {/* Hero / Title Section */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 tracking-tight">Best Sellers</h1>
                    <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-2xl font-light">
                        Discover our most-loved pieces, from timeless icons to contemporary favorites. These are the items that define our collection and inspire homes across the country.
                    </p>
                </div>

                {/* Main Content Layout */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <div className="flex-shrink-0">
                            <BestSellersSidebar
                                isOpen={isMobileSidebarOpen}
                                onClose={() => setIsMobileSidebarOpen(false)}
                            />
                        </div>

                        {/* Product Grid Area */}
                        <BestSellersGrid
                            onFilterClick={() => setIsMobileSidebarOpen(true)}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
