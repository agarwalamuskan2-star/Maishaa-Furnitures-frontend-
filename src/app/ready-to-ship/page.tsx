"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ReadyToShipSidebar, { ReadyToShipFilterState } from "@/components/sections/ready-to-ship-sidebar";
import ReadyToShipGrid from "@/components/sections/ready-to-ship-grid";

export default function ReadyToShipPage() {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [filters, setFilters] = useState<ReadyToShipFilterState>({
        productTypes: [],
        priceRange: [0, 300000],
        discounts: [],
    });

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 w-full pb-20">
                {/* Breadcrumbs */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6">
                    <nav className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 font-medium">
                        <Link href="/" className="hover:text-black transition-colors uppercase tracking-wider">Home</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-black uppercase tracking-wider">Ready To Ship</span>
                    </nav>
                </div>

                {/* Content Layout */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16 items-start mt-4 mb-20">
                        <ReadyToShipSidebar
                            isOpen={isMobileFilterOpen}
                            onClose={() => setIsMobileFilterOpen(false)}
                            filters={filters}
                            onFiltersChange={setFilters}
                        />
                        <ReadyToShipGrid
                            onFilterClick={() => setIsMobileFilterOpen(true)}
                            filters={filters}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
