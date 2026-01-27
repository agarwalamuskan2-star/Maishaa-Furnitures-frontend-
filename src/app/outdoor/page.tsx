"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import OutdoorCategories from "@/components/sections/outdoor-categories";
import OutdoorSidebar from "@/components/sections/outdoor-sidebar";
import OutdoorGrid from "@/components/sections/outdoor-grid";

export default function OutdoorPage() {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-6 pb-20">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 font-medium">
                    <Link href="/" className="hover:text-black transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-black">Outdoor</span>
                </div>

                {/* Categories Bar */}
                <OutdoorCategories />

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16 items-start">
                    <OutdoorSidebar
                        isOpen={isMobileFilterOpen}
                        onClose={() => setIsMobileFilterOpen(false)}
                    />
                    <OutdoorGrid
                        onFilterClick={() => setIsMobileFilterOpen(true)}
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
}
