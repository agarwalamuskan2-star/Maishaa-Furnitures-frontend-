"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Check } from "lucide-react";

const PartnerPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        website: '',
        role: 'Interior Designer'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your application! Our trade team will review it and get back to you within 48 hours.");
    };

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[60vh] w-full bg-gray-900 flex items-center justify-center">
                    <Image
                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000"
                        alt="Trade Partner Hero"
                        fill
                        className="object-cover opacity-50 mix-blend-overlay"
                        priority
                    />
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <span className="text-xs font-bold tracking-[0.3em] text-gray-300 uppercase mb-6 block">For Professionals</span>
                        <h1 className="text-white text-5xl md:text-7xl font-light tracking-tight mb-8">Maishaa Trade Program</h1>
                        <p className="text-white/90 text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                            Join our community of interior designers, architects, and industry professionals.
                            Unlock exclusive benefits tailored to your business needs.
                        </p>
                    </div>
                </section>

                <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-20 max-w-[1920px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Benefits */}
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-tight">Program Benefits</h2>
                                <p className="text-gray-500 font-light leading-relaxed max-w-lg">
                                    We understand the unique demands of your profession. Our program is designed to support your vision and streamline your projects.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="p-3 bg-gray-50 rounded-full h-fit group-hover:bg-black group-hover:text-white transition-colors">
                                        <Check size={20} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-medium text-gray-900">Trade Pricing</h3>
                                        <p className="text-gray-500 font-light">Enjoy significant discounts across our entire catalog, with tiered pricing based on annual spend.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="p-3 bg-gray-50 rounded-full h-fit group-hover:bg-black group-hover:text-white transition-colors">
                                        <Check size={20} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-medium text-gray-900">Dedicated Support</h3>
                                        <p className="text-gray-500 font-light">Work with a dedicated account manager who understands your projects and timelines.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="p-3 bg-gray-50 rounded-full h-fit group-hover:bg-black group-hover:text-white transition-colors">
                                        <Check size={20} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-medium text-gray-900">Customization</h3>
                                        <p className="text-gray-500 font-light">Access to COM (Customer's Own Material) options and bespoke finish selections for your clients.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="p-3 bg-gray-50 rounded-full h-fit group-hover:bg-black group-hover:text-white transition-colors">
                                        <Check size={20} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-medium text-gray-900">Priority Shipping</h3>
                                        <p className="text-gray-500 font-light">Expedited production and shipping options available for tight project deadlines.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Application Form */}
                        <div className="bg-gray-50 p-10 md:p-16 rounded-sm">
                            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center uppercase tracking-widest">Apply Now</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-black transition-colors font-light"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-black transition-colors font-light"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Company Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-black transition-colors font-light"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Website / Portfolio URL</label>
                                    <input
                                        type="url"
                                        className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-black transition-colors font-light"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        placeholder="https://"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Professional Role</label>
                                    <select
                                        className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-black transition-colors font-light"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    >
                                        <option>Interior Designer</option>
                                        <option>Architect</option>
                                        <option>Decorator</option>
                                        <option>Hospitality Buyer</option>
                                        <option>Retailer</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors mt-8"
                                >
                                    Submit Application
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    By submitting, you agree to our <a href="/terms-conditions" className="underline hover:text-black">Terms of Service</a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PartnerPage;
