"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
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
                                <ShoppingBag size={20} strokeWidth={1.5} />
                                <h2 className="text-sm md:text-base font-serif tracking-[0.2em] uppercase">Your Bag (0)</h2>
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
                                <ShoppingBag size={32} strokeWidth={1} className="text-gray-300" />
                            </div>
                            <h3 className="text-lg font-serif tracking-widest uppercase mb-4">Your bag is empty</h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs mb-8">
                                Sign in to see your saved items or start browsing our latest collections.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-10 py-4 bg-black text-white text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-gray-900 transition-colors"
                            >
                                Start Shopping
                            </button>
                        </div>

                        {/* Footer Placeholder */}
                        <div className="p-8 border-t border-gray-100 bg-gray-50/50">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs uppercase tracking-widest text-gray-500">Subtotal</span>
                                <span className="text-sm font-medium">₹0.00</span>
                            </div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center mb-4">
                                Shipping calculated at checkout
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
