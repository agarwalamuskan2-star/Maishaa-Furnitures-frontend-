"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import WarehouseSaleSidebar from "@/components/sections/warehouse-sale-sidebar";
import WarehouseSaleGrid from "@/components/sections/warehouse-sale-grid";

export default function WarehouseSalePage() {
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
                        <span className="text-black uppercase">Warehouse Sale</span>
                    </nav>
                </div>

                {/* Main Content Layout */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <div className="flex-shrink-0">
                            <WarehouseSaleSidebar
                                isOpen={isMobileSidebarOpen}
                                onClose={() => setIsMobileSidebarOpen(false)}
                            />
                        </div>

                        {/* Product Grid Area */}
                        <WarehouseSaleGrid
                            onFilterClick={() => setIsMobileSidebarOpen(true)}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
