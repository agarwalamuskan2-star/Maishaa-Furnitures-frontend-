"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Catalog {
    id: number;
    title: string;
    image: string;
    pdfUrl: string;
}

const catalogs: Catalog[] = [
    {
        id: 1,
        title: "Collection 2025",
        image: "/images/outdoor/seating-cat.png",
        pdfUrl: "#",
    },
    {
        id: 2,
        title: "Project Collection",
        image: "/images/outdoor/dining-cat.png",
        pdfUrl: "#",
    },
    {
        id: 3,
        title: "Hospitality Catalog",
        image: "/images/outdoor/accessories-cat.png",
        pdfUrl: "#",
    },
    {
        id: 4,
        title: "Bespoke Designs",
        image: "/images/outdoor/wren-chair.png",
        pdfUrl: "#",
    }
];

const CatalogList = () => {
    return (
        <section className="bg-white pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {catalogs.map((catalog, index) => (
                        <motion.div
                            key={catalog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="flex flex-col items-center"
                        >
                            {/* Catalog Cover */}
                            <div className="relative aspect-[3/4] w-full max-w-[500px] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                                <Image
                                    src={catalog.image}
                                    alt={catalog.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Optional subtle overlay */}
                                <div className="absolute inset-0 bg-black/5"></div>
                            </div>

                            {/* Catalog Info */}
                            <div className="mt-8 text-center flex flex-col items-center">
                                <h3 className="text-xl md:text-2xl font-light text-black tracking-[0.2em] uppercase mb-8">
                                    {catalog.title}
                                </h3>

                                <a
                                    href={catalog.pdfUrl}
                                    className="inline-block px-12 py-3 border border-black/40 text-black text-[13px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500 font-light"
                                >
                                    Download the catalog
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CatalogList;
