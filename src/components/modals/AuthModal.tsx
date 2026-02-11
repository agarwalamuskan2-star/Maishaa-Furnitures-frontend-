"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLogin, setIsLogin] = React.useState(true);

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
                    className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors z-10"
                    >
                        <X size={24} strokeWidth={1.5} />
                    </button>

                    <div className="px-8 py-12 md:px-12">
                        <h2 className="text-3xl font-light text-black tracking-widest uppercase mb-10 text-center font-serif">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </h2>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Email/Mobile Field */}
                            <div className="relative border-b border-gray-200 py-3 group focus-within:border-black transition-colors">
                                <input
                                    type="text"
                                    placeholder="Email/Mobile Number*"
                                    className="w-full bg-transparent outline-none text-sm md:text-base placeholder:text-gray-400 font-light"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="relative border-b border-gray-200 py-3 group focus-within:border-black transition-colors">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password*"
                                    className="w-full bg-transparent outline-none text-sm md:text-base placeholder:text-gray-400 font-light"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-medium uppercase tracking-widest text-gray-500 hover:text-black"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>

                            {isLogin && (
                                <div className="text-right">
                                    <button className="text-xs text-gray-500 hover:text-black uppercase tracking-widest transition-colors">
                                        Forgot Password?
                                    </button>
                                </div>
                            )}

                            {/* Buttons */}
                            <div className="space-y-4 pt-4">
                                <button className="w-full h-[54px] bg-black text-white text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-gray-900 transition-colors">
                                    {isLogin ? 'Sign In' : 'Sign Up'}
                                </button>
                                <button className="w-full h-[54px] border border-gray-200 text-black text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-gray-50 transition-all duration-300">
                                    Request OTP
                                </button>
                            </div>
                        </form>

                        {/* Shift Case */}
                        <div className="mt-10 text-center">
                            <p className="text-sm text-gray-500 font-light">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="text-orange-500 font-medium hover:underline"
                                >
                                    {isLogin ? 'Sign Up' : 'Login'}
                                </button>
                            </p>
                        </div>

                        {/* Social Login */}
                        <div className="mt-12">
                            <div className="relative flex items-center justify-center mb-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-100"></div>
                                </div>
                                <span className="relative px-4 text-[10px] text-gray-400 bg-white uppercase tracking-[0.3em]">Or</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-3 h-12 border border-gray-100 text-sm font-medium hover:bg-gray-50 transition-colors">
                                    <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={18} height={18} />
                                    Google
                                </button>
                                <button className="flex items-center justify-center gap-3 h-12 border border-gray-100 text-sm font-medium hover:bg-gray-50 transition-colors">
                                    <Image src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" width={18} height={18} />
                                    Facebook
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
