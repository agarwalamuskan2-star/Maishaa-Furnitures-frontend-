"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/cart-context';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
    const { cartItems, cartCount, removeFromCart, updateQuantity } = useCart();

    const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity), 0);

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
                                <h2 className="text-sm md:text-base font-serif tracking-[0.2em] uppercase">Your Bag ({cartCount})</h2>
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
                        {cartItems.length === 0 ? (
                            <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-12 text-center">
                                <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                                    <ShoppingBag size={32} strokeWidth={1} className="text-gray-300" />
                                </div>
                                <h3 className="text-lg font-serif tracking-widest uppercase mb-4">Your bag is empty</h3>
                                <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs mb-8">
                                    Add items to your bag to start shopping.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="px-10 py-4 bg-black text-white text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-gray-900 transition-colors"
                                >
                                    Start Shopping
                                </button>
                            </div>
                        ) : (
                            <div className="flex-1 overflow-y-auto p-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
                                        <div className="w-24 h-24 bg-gray-50 rounded-md overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.mainImage}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">{item.title}</h4>
                                            <p className="text-sm text-gray-500 mb-3">{item.price.startsWith('₹') ? item.price : `₹${item.price}`}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-gray-100 rounded"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm w-6 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-gray-100 rounded"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs uppercase tracking-widest text-gray-500">Subtotal</span>
                                    <span className="text-lg font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center mb-4">
                                    Shipping calculated at checkout
                                </p>
                                <button className="w-full py-4 bg-black text-white text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-gray-900 transition-colors">
                                    Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
