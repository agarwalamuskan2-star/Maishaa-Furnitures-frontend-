"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, Smartphone, ArrowLeft } from 'lucide-react';
import { signIn } from "next-auth/react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "sonner";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isOtpMode, setIsOtpMode] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [email, setEmail] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [timer, setTimer] = useState(0);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Get callbackUrl from URL if present
    const [callbackUrl, setCallbackUrl] = useState('/');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const callback = params.get('callbackUrl');
            if (callback) {
                setCallbackUrl(callback);
            }
        }
    }, []);

    // Timer logic for resend OTP
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (isLogin) {
                // Handle Login
                const result = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });

                if (result?.error) {
                    toast.error("Invalid email or password");
                } else {
                    toast.success("Welcome back!");
                    onClose();
                }
            } else {
                // Handle Sign Up
                const response = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password }),
                });

                if (response.ok) {
                    toast.success("Account created! You can now login.");
                    setIsLogin(true);
                } else {
                    const error = await response.text();
                    toast.error(error || "Something went wrong");
                }
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your email address");
            return;
        }

        setIsLoading(true);
        // Mocking OTP send logic
        try {
            console.log("Sending OTP to:", email);
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
            setOtpSent(true);
            setTimer(30); // 30 seconds cooldown
            toast.success("OTP sent successfully to " + email);
        } catch (error) {
            toast.error("Failed to send OTP. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (otpCode.length !== 6) {
            toast.error("Please enter a valid 6-digit OTP");
            return;
        }

        setIsLoading(true);
        try {
            console.log("Verifying OTP:", otpCode);
            // In a real app, you would sign in with the OTP here
            await new Promise(resolve => setTimeout(resolve, 1500));
            toast.success("Login successful!");
            onClose();
        } catch (error) {
            toast.error("Invalid OTP. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

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
                            {isOtpMode ? (otpSent ? 'Verify OTP' : 'OTP Login') : (isLogin ? 'Login' : 'Sign Up')}
                        </h2>

                        {!isOtpMode ? (
                            /* Standard Password Login Form */
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {!isLogin && (
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Full Name*"
                                            className="w-full h-12 px-4 border border-gray-200 outline-none text-sm placeholder:text-gray-400 focus:border-black transition-colors"
                                        />
                                    </div>
                                )}
                                <div className="relative">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email/Mobile Number*"
                                        className="w-full h-12 px-4 border border-gray-200 outline-none text-sm placeholder:text-gray-400 focus:border-black transition-colors"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
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
                                    <button
                                        type="button"
                                        className="text-[11px] text-gray-500 hover:text-black transition-colors"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>

                                {/* Buttons Row - Restored Side-by-Side */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex-1 h-12 bg-black text-white text-[13px] font-medium hover:bg-gray-900 transition-colors disabled:opacity-50"
                                    >
                                        {isLoading ? (isLogin ? 'Signing in...' : 'Registering...') : (isLogin ? 'Sign in' : 'Sign Up')}
                                    </button>
                                    {isLogin && (
                                        <button
                                            type="button"
                                            onClick={() => setIsOtpMode(true)}
                                            className="flex-1 h-12 border border-gray-200 text-black text-[13px] font-medium hover:bg-gray-50 transition-all duration-300"
                                        >
                                            Request OTP
                                        </button>
                                    )}
                                </div>
                            </form>
                        ) : (
                            /* OTP Login Flow - Styled to match original modal */
                            <div className="space-y-6">
                                {!otpSent ? (
                                    <form onSubmit={handleSendOtp} className="space-y-4">
                                        <p className="text-sm text-gray-500 mb-2">
                                            Verification code will be sent to your email.
                                        </p>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Email Address*"
                                                className="w-full h-12 px-4 border border-gray-200 outline-none text-sm placeholder:text-gray-400 focus:border-black transition-colors"
                                            />
                                        </div>
                                        <div className="flex gap-4 pt-4">
                                            <button
                                                disabled={isLoading}
                                                type="submit"
                                                className="flex-1 h-12 bg-black text-white text-[13px] font-medium hover:bg-gray-900 transition-colors disabled:opacity-50"
                                            >
                                                {isLoading ? 'Sending...' : 'Send OTP'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setIsOtpMode(false)}
                                                className="flex-1 h-12 border border-gray-200 text-black text-[13px] font-medium hover:bg-gray-50"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <form onSubmit={handleVerifyOtp} className="space-y-6">
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-500">
                                                Code sent to <span className="text-black font-medium">{email}</span>
                                            </p>
                                        </div>

                                        <div className="flex justify-center py-2">
                                            <InputOTP
                                                maxLength={6}
                                                value={otpCode}
                                                onChange={(value) => setOtpCode(value)}
                                            >
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                </InputOTPGroup>
                                                <InputOTPSeparator />
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </div>

                                        <div className="space-y-4">
                                            <button
                                                disabled={isLoading || otpCode.length !== 6}
                                                type="submit"
                                                className="w-full h-12 bg-black text-white text-[13px] font-medium hover:bg-gray-900 transition-colors disabled:opacity-50"
                                            >
                                                {isLoading ? 'Verifying...' : 'Verify & Login'}
                                            </button>

                                            <div className="flex justify-between items-center px-1">
                                                <button
                                                    type="button"
                                                    onClick={() => setOtpSent(false)}
                                                    className="text-xs text-black font-medium hover:underline"
                                                >
                                                    Back
                                                </button>
                                                {timer > 0 ? (
                                                    <p className="text-xs text-gray-400">
                                                        Resend in <span className="font-medium">{timer}s</span>
                                                    </p>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={handleSendOtp}
                                                        className="text-xs text-orange-500 font-medium hover:underline"
                                                    >
                                                        Resend OTP
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        )}

                        {/* Shift Case */}
                        {!isOtpMode && (
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
                        )}

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
