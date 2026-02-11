"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Typically handle submission logic here
        alert("Thanks for contacting us! We'll get back to you shortly.");
    };

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[40vh] md:h-[50vh] w-full bg-gray-900 flex items-center justify-center">
                    <Image
                        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000"
                        alt="Contact Hero"
                        fill
                        className="object-cover opacity-40 mix-blend-overlay"
                        priority
                    />
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-white text-4xl md:text-6xl font-light tracking-tight mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-gray-300 font-light text-lg tracking-wide max-w-xl mx-auto">
                            We'd love to hear from you. Whether it's a question about our products,
                            a design consultation, or just to say hello.
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto py-24 px-4 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 block">Reach Us</span>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                        <MapPin size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Headquarters</h3>
                                        <p className="text-gray-500 font-light leading-relaxed">
                                            123 Design Avenue, <br />
                                            Creative District, New York, <br />
                                            NY 10012
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                        <Phone size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
                                        <p className="text-gray-500 font-light leading-relaxed">
                                            +1 (555) 123-4567 <br />
                                            +1 (555) 987-6543
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                        <Mail size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                                        <p className="text-gray-500 font-light leading-relaxed">
                                            hello@maishaa.com <br />
                                            support@maishaa.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                                        <Clock size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Hours</h3>
                                        <p className="text-gray-500 font-light leading-relaxed">
                                            Mon - Fri: 9:00 AM - 6:00 PM <br />
                                            Sat: 10:00 AM - 4:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 md:p-12 rounded-sm shadow-sm">
                        <h3 className="text-2xl font-light text-gray-900 mb-8">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide text-[11px]">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-black transition-colors font-light"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide text-[11px]">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-black transition-colors font-light"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide text-[11px]">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-black transition-colors font-light resize-none"
                                    placeholder="How can we help?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-800 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
