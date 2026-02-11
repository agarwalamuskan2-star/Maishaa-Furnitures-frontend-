"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

interface WishlistSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const WishlistSidebar = ({ isOpen, onClose }: WishlistSidebarProps) => {
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
                                <h2 className="text-sm md:text-base font-serif tracking-[0.2em] uppercase">My Wishlist (0)</h2>
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
                        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-12 text-center">
                            <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                                <Heart size={32} strokeWidth={1} className="text-gray-300" />
                            </div>
                            <h3 className="text-lg font-serif tracking-widest uppercase mb-4">No items saved yet</h3>
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
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WishlistSidebar;
