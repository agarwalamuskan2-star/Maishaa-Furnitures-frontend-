"use client";

import {
    ShieldCheck,
    Factory,
    ClipboardCheck,
    Layers,
    Box,
    Infinity,
    BadgeCheck,
    UserRoundX
} from "lucide-react";

/**
 * FEATURES GRID SECTION
 * 
 * Redesigned to show individual boxes with borders and gaps as per 
 * user request and reference image.
 */

const features = [
    {
        icon: ShieldCheck,
        text: "10 Year Warranty",
    },
    {
        icon: Factory,
        text: "Direct Selling : Factory To Customer",
    },
    {
        icon: ClipboardCheck,
        text: "66 Quality Checks",
    },
    {
        icon: Layers,
        text: "KD (Kiln Dried) and HT (Heat Treated)",
    },
    {
        icon: Box,
        text: "Ergonomically Designed",
    },
    {
        icon: Infinity,
        text: "Generations Long Durability",
    },
    {
        icon: BadgeCheck,
        text: "All India Service Warranty",
    },
    {
        icon: UserRoundX,
        text: "Free Of Child Labour",
    },
];

export default function FeaturesGrid() {
    return (
        <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-[#faf7f2]">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-6 p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group rounded-md min-h-[140px]"
                    >
                        <div className="flex-shrink-0">
                            <feature.icon className="w-10 h-10 text-[#1a1a1a] group-hover:scale-105 transition-transform" strokeWidth={1} />
                        </div>
                        <span className="text-sm md:text-base font-medium text-[#1a1a1a] leading-relaxed">
                            {feature.text}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
