"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { signIn } from "next-auth/react";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLogin, setIsLogin] = React.useState(true);
    
    // Get callbackUrl from URL if present (for redirecting after login)
    const [callbackUrl, setCallbackUrl] = React.useState('/');
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const callback = params.get('callbackUrl');
            if (callback) {
                setCallbackUrl(callback);
            }
        }
    }, []);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors z-10"
                    >
                        <X size={24} strokeWidth={1.5} />
                    </button>

                    <div className="px-8 py-12 md:px-12">
                        <h2 className="text-2xl font-medium text-black mb-8 text-left">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </h2>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            {/* Email/Mobile Field */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Email/Mobile Number*"
                                    className="w-full h-12 px-4 border border-gray-200 outline-none text-sm placeholder:text-gray-400 focus:border-black transition-colors"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password*"
                                    className="w-full h-12 px-4 border border-gray-200 outline-none text-sm placeholder:text-gray-400 focus:border-black transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-black hover:text-gray-600"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>

                            <div className="flex justify-end pt-1">
                                <button className="text-[11px] text-gray-500 hover:text-black transition-colors">
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Buttons Row */}
                            <div className="flex gap-4 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 h-12 bg-black text-white text-[13px] font-medium hover:bg-gray-900 transition-colors"
                                >
                                    {isLogin ? 'Sign in' : 'Sign Up'}
                                </button>
                                <button className="flex-1 h-12 border border-gray-200 text-black text-[13px] font-medium hover:bg-gray-50 transition-all duration-300">
                                    Request OTP
                                </button>
                            </div>
                        </form>

                        {/* Shift Case */}
                        <div className="mt-8 text-center">
                            <p className="text-[13px] text-black">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="text-orange-500 font-medium hover:underline ml-1"
                                >
                                    {isLogin ? 'Sign Up' : 'Login'}
                                </button>
                            </p>
                        </div>

                        {/* Social Login */}
                        <div className="mt-8">
                            <div className="relative flex items-center justify-center mb-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-100"></div>
                                </div>
                                <span className="relative px-4 text-xs text-gray-400 bg-white">Or</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    className="flex items-center justify-center gap-3 h-12 border border-gray-100 text-[13px] font-medium hover:bg-gray-50 transition-colors opacity-50 cursor-not-allowed"
                                    disabled
                                >
                                    <Image src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" width={18} height={18} />
                                    Facebook
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        signIn("google", { callbackUrl: callbackUrl, redirect: true });
                                    }}
                                    className="flex items-center justify-center gap-3 h-12 border border-gray-100 text-[13px] font-medium hover:bg-gray-50 transition-colors cursor-pointer active:scale-[0.98]"
                                >
                                    <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={18} height={18} />
                                    Google
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default AuthModal;
