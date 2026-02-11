"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    slug: string;
}

const collections: CollectionItem[] = [
    { id: 1, title: "Monocraft Collection", subtitle: "One shade, endless form", image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=800", slug: "monocraft" },
    { id: 2, title: "Incurve Episodes", subtitle: "The art of curves", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800", slug: "incurve" },
    { id: 3, title: "Copenhagen Curves", subtitle: "Scandinavian refinement", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800", slug: "copenhagen" },
    { id: 4, title: "Isles of Greece", subtitle: "Coastal serenity", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800", slug: "isles" },
    { id: 5, title: "Ebba 2.0", subtitle: "Scandinavian reimagined", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800", slug: "ebba-2" },
    { id: 6, title: "Ebba", subtitle: "The original heritage", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800", slug: "ebba" },
    { id: 7, title: "Chandigarh Sangrah", subtitle: "Modernist vision", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800", slug: "chandigarh" },
    { id: 8, title: "Kobbler Collection", subtitle: "Artisanal leather", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800", slug: "kobbler" },
    { id: 9, title: "Mianzi Collection", subtitle: "Eco-friendly bamboo", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800", slug: "mianzi" },
    { id: 10, title: "Home and Cottage", subtitle: "Rustic charm", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800", slug: "home-cottage" },
    { id: 11, title: "Manhattan", subtitle: "Urban organic", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800", slug: "manhattan" },
    { id: 12, title: "Jess Design", subtitle: "Minimalist luxury", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800", slug: "jess" },
    { id: 13, title: "Bombay", subtitle: "Traditional elegance", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800", slug: "bombay" },
    { id: 14, title: "Saturn", subtitle: "Sleek & bold", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800", slug: "saturn" },
    { id: 15, title: "Travancore", subtitle: "Timeless artistry", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800", slug: "travancore" },
    { id: 16, title: "Veda", subtitle: "Pure form", image: "https://images.unsplash.com/photo-1574739782594-db4ead022697?q=80&w=800", slug: "veda" },
    { id: 17, title: "Miller", subtitle: "Modern industrial", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800", slug: "miller" },
    { id: 18, title: "Verandah", subtitle: "Outdoor living", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800", slug: "verandah" },
];

const CollectionsGrid = () => {
    return (
        <section className="bg-white py-6 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-10">
                    {collections.map((item) => (
                        <Link
                            key={item.id}
                            href={`/collections/${item.slug}`}
                            className="group cursor-pointer flex flex-col space-y-6"
                        >
                            {/* Image Box */}
                            <div className="relative w-full aspect-[3/2] md:aspect-[16/9] overflow-hidden bg-gray-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
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
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectionsGrid;

