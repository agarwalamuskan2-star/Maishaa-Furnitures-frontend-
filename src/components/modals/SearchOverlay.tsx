"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon } from 'lucide-react';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
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
                            onClick={onClose}
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
                                placeholder="What are you looking for?"
                                className="w-full bg-transparent text-xl md:text-3xl font-light placeholder:text-gray-200 outline-none font-serif tracking-wide"
                            />
                        </div>

                        <div className="mt-12 w-full text-left">
                            <h3 className="text-[10px] text-gray-400 uppercase tracking-[0.4em] mb-6">Popular Searches</h3>
                            <div className="flex flex-wrap gap-4">
                                {['Outdoor Seating', 'Luxury Sofas', 'Designer Tables', 'Outdoor Lighting'].map((item) => (
                                    <button key={item} className="text-sm md:text-base font-light text-gray-600 hover:text-black transition-colors border-b border-transparent hover:border-black py-1">
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchOverlay;
