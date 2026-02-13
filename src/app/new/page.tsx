"use client";

import React, { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import NewPageSidebar, { NewPageFilterState } from "@/components/sections/new-page-sidebar";
import NewPageGrid from "@/components/sections/new-page-grid";
import SEOContent from "@/components/sections/seo-content";
import AboutYears from "@/components/sections/about-years";
import CuratedGalleries from "@/components/sections/curated-galleries";
import FeaturesGrid from "@/components/sections/features-grid";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

/**
 * NEW LAUNCH PAGE
 * 
 * Replicates the detailed e-commerce listing layout with
 * sidebar filters and detailed product cards.
 */

export default function NewLaunchPage() {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [filters, setFilters] = useState<NewPageFilterState>({
        productTypes: [],
        priceRange: [0, 400000],
        sizes: [],
        discounts: [],
    });

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-6 pb-20">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-8 font-medium">
                    <Link href="/" className="hover:text-black transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-black">New Launch</span>
                </div>

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16 items-start">
                    <NewPageSidebar
                        isOpen={isMobileFilterOpen}
                        onClose={() => setIsMobileFilterOpen(false)}
                        filters={filters}
                        onFiltersChange={setFilters}
                    />
                    <NewPageGrid
                        onFilterClick={() => setIsMobileFilterOpen(true)}
                        filters={filters}
                    />
                </div>
            </main>

            {/* Standard Bottom Sections */}
            <div className="w-full">
            </div>

            <Footer />
        </div>
    );
}
