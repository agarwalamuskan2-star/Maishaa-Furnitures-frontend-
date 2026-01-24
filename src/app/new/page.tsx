"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import NewPageSidebar from "@/components/sections/new-page-sidebar";
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
                    <NewPageSidebar />
                    <NewPageGrid />
                </div>
            </main>

            {/* Standard Bottom Sections */}
            <div className="w-full">
            </div>

            <Footer />
        </div>
    );
}
