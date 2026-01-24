"use client";

import React from "react";
import Image from "next/image";

/**
 * COLLECTIONS GRID COMPONENT
 * 
 * Features 6 rows with 3 images each (18 items total)
 * strictly following the layout and box shape from the user's reference.
 */

interface CollectionItem {
    id: number;
    title: string;
    subtitle?: string;
    image: string;
}

const collections: CollectionItem[] = [
    { id: 1, title: "Monocraft Collection", subtitle: "One shade, endless form", image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Incurve Episodes", subtitle: "The art of curves", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Copenhagen Curves", subtitle: "Scandinavian refinement", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Isles of Greece", subtitle: "Santorini inspired", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" },
    { id: 5, title: "Velvet Dreams", subtitle: "Luxe comfort", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop" },
    { id: 6, title: "Minimalist Loft", subtitle: "Open space living", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop" },
    { id: 7, title: "Heritage Oak", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop" },
    { id: 8, title: "Modern Slate", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" },
    { id: 9, title: "Artisan Walnut", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop" },
    { id: 10, title: "Industrial Vibe", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" },
    { id: 11, title: "Bohemian Rhapsody", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop" },
    { id: 12, title: "Coastal Breeze", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop" },
    { id: 13, title: "Urban Chic", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" },
    { id: 14, title: "Desert Bloom", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop" },
    { id: 15, title: "Forest Retreat", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" },
    { id: 16, title: "Midnight Lounge", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop" },
    { id: 17, title: "Golden Hour", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop" },
    { id: 18, title: "Pure Elegance", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop" },
];

const CollectionsGrid = () => {
    return (
        <section className="bg-white py-6 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
                    {collections.map((item) => (
                        <div key={item.id} className="group cursor-pointer flex flex-col space-y-6">
                            {/* Image Box */}
                            <div className="relative w-full aspect-[3/2] md:aspect-[16/9] overflow-hidden bg-gray-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                {/* Subtle internal overlay if needed for text readability in reference */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Text Labels */}
                            <div className="text-left space-y-1">
                                <h3 className="text-xl md:text-2xl font-normal text-[#1a1a1a] font-body tracking-tight group-hover:text-amber-900 transition-colors">
                                    {item.title}
                                </h3>
                                {item.subtitle && (
                                    <p className="text-sm md:text-base text-gray-500 font-body">
                                        {item.subtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionsGrid;
