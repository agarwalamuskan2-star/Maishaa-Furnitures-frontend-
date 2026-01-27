"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import OutdoorHero from "@/components/sections/outdoor-hero";
import OutdoorIntro from "@/components/sections/outdoor-intro-text";
import OutdoorDesignerChoice from "@/components/sections/outdoor-designer-choice";
import OutdoorCategories from "@/components/sections/outdoor-categories";
import OutdoorSidebar from "@/components/sections/outdoor-sidebar";
import OutdoorGrid from "@/components/sections/outdoor-grid";

export default function OutdoorPage() {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 w-full pb-20">
                {/* Hero Section */}
                <OutdoorHero />

                {/* Intro Section */}
                <OutdoorIntro />

                {/* Featured Section */}
                <OutdoorDesignerChoice />

                {/* Shopping Layout */}
                <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    {/* Categories Bar */}
                    <OutdoorCategories />

                    {/* Side Sidebar + Grid Layout */}
                    <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16 items-start mt-10">
                        <OutdoorSidebar
                            isOpen={isMobileFilterOpen}
                            onClose={() => setIsMobileFilterOpen(false)}
                        />
                        <OutdoorGrid
                            onFilterClick={() => setIsMobileFilterOpen(true)}
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
