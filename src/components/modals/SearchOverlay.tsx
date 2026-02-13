"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';
import Link from 'next/link';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

// Sample products for search (you can replace with actual data from your API)
const allProducts = [
    { id: 1, title: "Iconic Velvet Sofa", price: "₹1,24,900", category: "Living Room", url: "/furniture/sofas" },
    { id: 2, title: "Solid Oak Dining Table", price: "₹84,900", category: "Dining Room", url: "/furniture/dining-tables" },
    { id: 3, title: "Artisan Lounge Chair", price: "₹34,600", category: "Living Room", url: "/furniture/accent-chairs" },
    { id: 4, title: "Minimalist Bed Frame", price: "₹72,400", category: "Bedroom", url: "/furniture/bedroom/beds" },
    { id: 5, title: "Glass Coffee Table", price: "₹18,900", category: "Living Room", url: "/furniture/coffee-tables" },
    { id: 6, title: "Woven Pendant Light", price: "₹12,600", category: "Lighting", url: "/decor/lighting/pendant-lights" },
    { id: 7, title: "Modern Floor Lamp", price: "₹22,400", category: "Lighting", url: "/decor/lighting/floor-lamps" },
    { id: 8, title: "Velvet Cushion Set", price: "₹4,500", category: "Decor", url: "/decor/objects/cushions" },
    { id: 9, title: "Oak Nightstand", price: "₹14,900", category: "Bedroom", url: "/furniture/bedroom/nightstands" },
    { id: 10, title: "Outdoor Seating", price: "₹45,000", category: "Outdoor", url: "/outdoor" },
    { id: 11, title: "Luxury Sofas", price: "₹1,50,000", category: "Living Room", url: "/furniture/sofas" },
    { id: 12, title: "Designer Tables", price: "₹85,000", category: "Dining Room", url: "/furniture/dining-tables" },
    { id: 13, title: "Outdoor Lighting", price: "₹15,000", category: "Outdoor", url: "/decor/lighting" },
];

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<typeof allProducts>([]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const searchTerms = query.toLowerCase().split(' ');
        const filtered = allProducts.filter(product => {
            const searchString = `${product.title} ${product.category}`.toLowerCase();
            return searchTerms.some(term => searchString.includes(term));
        });

        setResults(filtered);
    }, [query]);

    const handleClose = () => {
        setQuery('');
        setResults([]);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed inset-0 z-[110] bg-white flex flex-col"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 md:p-10">
                        <div className="w-10"></div> {/* Spacer */}
                        <div className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase">Search</div>
                        <button
                            onClick={handleClose}
                            className="p-2 text-gray-500 hover:text-black transition-colors"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>
                    </div>

                    {/* Search Input Body */}
                    <div className="flex-1 flex flex-col items-center justify-start pt-20 px-6 max-w-4xl mx-auto w-full">
                        <div className="relative w-full border-b border-gray-200 pb-4 flex items-center group focus-within:border-black transition-colors">
                            <SearchIcon size={24} className="text-gray-400 mr-4" strokeWidth={1.5} />
                            <input
                                autoFocus
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="What are you looking for?"
                                className="w-full bg-transparent text-xl md:text-3xl font-light placeholder:text-gray-200 outline-none font-serif tracking-wide"
                            />
                        </div>

                        {/* Search Results */}
                        <AnimatePresence>
                            {results.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="mt-8 w-full text-left"
                                >
                                    <h3 className="text-[10px] text-gray-400 uppercase tracking-[0.4em] mb-4">Results</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {results.map((product) => (
                                            <Link
                                                key={product.id}
                                                href={product.url}
                                                onClick={handleClose}
                                                className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                                                    <SearchIcon size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-sm md:text-base font-light text-gray-900">{product.title}</p>
                                                    <p className="text-xs text-gray-500">{product.price} • {product.category}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* No Results Message */}
                        <AnimatePresence>
                            {query.trim() !== '' && results.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="mt-8 w-full text-left"
                                >
                                    <p className="text-sm text-gray-500">No products found for "{query}"</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Popular Searches */}
                        <AnimatePresence>
                            {results.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-12 w-full text-left"
                                >
                                    <h3 className="text-[10px] text-gray-400 uppercase tracking-[0.4em] mb-6">Popular Searches</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {['Outdoor Seating', 'Luxury Sofas', 'Designer Tables', 'Outdoor Lighting'].map((item) => (
                                            <button
                                                key={item}
                                                onClick={() => setQuery(item)}
                                                className="text-sm md:text-base font-light text-gray-600 hover:text-black transition-colors border-b border-transparent hover:border-black py-1"
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchOverlay;
