"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
    {
        name: "Entryway",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=200&auto=format&fit=crop",
        href: "/furniture/entryway",
    },
    {
        name: "Living",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=200&auto=format&fit=crop",
        href: "/furniture/living",
    },
    {
        name: "Dining",
        image: "https://images.unsplash.com/photo-1617806118233-18e1de24739f?q=80&w=800&auto=format&fit=crop",
        href: "/furniture/dining",
    },
    {
        name: "Bedroom",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
        href: "/furniture/bedroom",
    },
    {
        name: "Office Home",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=200&auto=format&fit=crop",
        href: "/furniture/office",
    },
];

export default function FurnitureCategories() {
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
