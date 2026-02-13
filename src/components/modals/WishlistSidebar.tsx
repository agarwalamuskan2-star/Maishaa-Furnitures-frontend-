"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Trash2 } from 'lucide-react';
import { useFavorites } from '@/context/favorites-context';

interface WishlistSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const WishlistSidebar = ({ isOpen, onClose }: WishlistSidebarProps) => {
    const { favorites, removeFromFavorites, favoritesCount } = useFavorites();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[120] bg-black/40 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 z-[130] w-full max-w-md bg-white shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <Heart size={20} strokeWidth={1.5} />
                                <h2 className="text-sm md:text-base font-light tracking-[0.2em] uppercase">My Wishlist ({favoritesCount})</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 hover:text-black transition-colors"
                                aria-label="Close"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto">
                            {favorites.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full p-12 text-center">
                                    <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                                        <Heart size={32} strokeWidth={1} className="text-gray-300" />
                                    </div>
                                    <h3 className="text-lg font-light tracking-widest uppercase mb-4">No items saved yet</h3>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs mb-8">
                                        Love something? Tap the heart icon on any product to save it here for later.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="px-10 py-4 border border-black text-black text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-black hover:text-white transition-all duration-300"
                                    >
                                        Browse Collections
                                    </button>
                                </div>
                            ) : (
                                <div className="p-4">
                                    {favorites.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex gap-4 p-4 mb-4 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors"
                                        >
                                            {/* Product Image */}
                                            <div className="relative w-20 h-20 bg-white rounded-md overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={item.mainImage}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            
                                            {/* Product Details */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium text-gray-900 truncate mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    {item.price}
                                                </p>
                                                <button
                                                    onClick={() => removeFromFavorites(item.id)}
                                                    className="text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
                                                >
                                                    <Trash2 size={12} />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {/* Clear All Button */}
                                    {favorites.length > 0 && (
                                        <button
                                            onClick={() => {
                                                favorites.forEach(item => removeFromFavorites(item.id));
                                            }}
                                            className="w-full py-3 text-xs text-gray-400 hover:text-red-500 transition-colors border-t border-gray-100 mt-4"
                                        >
                                            Clear Wishlist
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WishlistSidebar;
