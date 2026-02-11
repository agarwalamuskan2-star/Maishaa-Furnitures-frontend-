"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import StoresHero from "@/components/sections/stores-hero";
import StoreLocation from "@/components/sections/store-location";
import StoreFeatures from "@/components/sections/store-features";

export default function StoresPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 w-full">
                <StoresHero />

                {/* Store 1: Siliguri Main */}
                <StoreLocation
                    city="Siliguri - Sevoke Road"
                    address={`Cosmos Mall, 2nd Floor\nSevoke Road, Siliguri\nWest Bengal 734001`}
                    email="help@maishaa.com"
                    phone="+91 98320 12345"
                    timings="10 AM to 8 PM"
                    image="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1200&auto=format&fit=crop"
                />

                {/* Store 2: Siliguri City Centre */}
                <StoreLocation
                    city="Siliguri - City Centre"
                    address={`City Centre Mall, Ground Floor\nUttorayon Twp, Siliguri\nWest Bengal 734010`}
                    email="help@maishaa.com"
                    phone="+91 98320 67890"
                    timings="9:30 AM to 7:30 PM"
                    image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop"
                    isReversed={true}
                />

                {/* Store 3: Siliguri Hill Cart (Renovation) */}
                <StoreLocation
                    city="Siliguri - Hill Cart Road"
                    address={`Hill Cart Road, Near Venus More\nSiliguri\nWest Bengal 734001`}
                    email="help@maishaa.com"
                    phone="+91 98320 11223"
                    timings="Under Renovation"
                    image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                    isRenovation={true}
                />

                <StoreFeatures />
            </main>

            <Footer />
        </div>
    );
}
