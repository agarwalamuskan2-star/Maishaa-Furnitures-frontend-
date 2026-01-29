"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
    {
        name: "Entryway",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/entryway",
    },
    {
        name: "Living",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/living",
    },
    {
        name: "Dining",
        image: "https://images.unsplash.com/photo-1544107759-001dd2286de1?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/dining",
    },
    {
        name: "Bedroom",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/bedroom",
    },
    {
        name: "Office Home",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop",
        href: "/furniture/office",
    },
];

export default function FurnitureCategories() {
    return (
        <section className="w-full mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        href={cat.href}
                        className="group flex items-center justify-between bg-white border border-gray-100 p-3 sm:p-4 hover:shadow-md transition-all h-full"
                    >
                        <div className="flex flex-col">
                            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-900 uppercase tracking-widest leading-tight">
                                {cat.name}
                            </span>
                        </div>
                        <div className="relative w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 overflow-hidden bg-gray-50 flex-shrink-0">
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
