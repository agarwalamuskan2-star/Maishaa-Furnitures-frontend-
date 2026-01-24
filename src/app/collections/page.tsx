"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import CollectionsHero from "@/components/sections/collections-hero";
import CollectionsGrid from "@/components/sections/collections-grid";

/**
 * COLLECTIONS PAGE
 * 
 * Landing page featuring a premium hero banner and a 
 * 6-row x 3-column collection grid.
 * 
 * Bottom sections (Galleries, Features, SEO) remain intact 
 * across all pages as requested.
 */

export default function CollectionsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />
            <main className="flex-1">
                <CollectionsHero />

                <section className="bg-white">
                    <CollectionsGrid />
                </section>
            </main>
            <Footer />
        </div>
    );
}
