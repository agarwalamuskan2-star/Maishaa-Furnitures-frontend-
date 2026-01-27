"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        name: "Outdoor Seating",
        image: "https://images.unsplash.com/photo-1590059346654-e9102ca633b4?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/seating",
    },
    {
        name: "Outdoor Dining",
        image: "https://images.unsplash.com/photo-1596700422223-7467614d9b3d?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/dining",
    },
    {
        name: "Outdoor Accessories",
        image: "https://images.unsplash.com/photo-1621506821199-a99a74461933?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/accessories",
    },
    {
        name: "Loungers",
        image: "https://images.unsplash.com/photo-1544161515-4ae6ce6ca8b8?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/loungers",
    },
    {
        name: "Garden Decor",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=400&auto=format&fit=crop",
        href: "/outdoor/garden-decor",
    },
];

export default function OutdoorCategories() {
    return (
        <section className="w-full mb-10 overflow-x-auto no-scrollbar">
            <div className="flex gap-4 min-w-max pb-4">
                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        href={cat.href}
                        className="group flex items-center justify-between bg-white border border-gray-100 p-3 sm:p-4 w-[200px] sm:w-[240px] hover:shadow-md transition-all"
                    >
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                                {cat.name}
                            </span>
                        </div>
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 overflow-hidden bg-gray-50 flex-shrink-0">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
