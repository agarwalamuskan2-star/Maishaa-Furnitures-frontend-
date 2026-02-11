"use client";

import React, { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        category: "Ordering & Payment",
        questions: [
            { q: "Do you offer customization?", a: "Yes, many of our pieces are made-to-order and can be customized in terms of fabric, finish, and dimensions. Please contact our design team for details." },
            { q: "What payment methods do you accept?", a: "We accept all major credit cards, bank transfers, and financing options through our partners." },
            { q: "Can I modify my order after placing it?", a: "Orders enter production within 24 hours. Modifications are possible within this window by contacting customer support immediately." }
        ]
    },
    {
        category: "Shipping & Delivery",
        questions: [
            { q: "Do you ship internationally?", a: "We currently ship to select international destinations. Please contact us for a shipping quote." },
            { q: "What is your white-glove delivery service?", a: "Our premium delivery includes bringing the furniture into your room of choice, assembly, and removal of all packaging materials." },
            { q: "How can I track my order?", a: "Once your order is ready for dispatch, you will receive a tracking link via email to monitor its journey." }
        ]
    },
    {
        category: "Returns & Warranty",
        questions: [
            { q: "What is your return policy?", a: "We accept returns on standard items within 14 days of delivery. Custom orders are final sale. Please review our full return policy for details." },
            { q: "Do your products come with a warranty?", a: "Yes, all Maishaa furniture comes with a 5-year warranty on structural integrity and a 1-year warranty on fabrics and finishes." }
        ]
    }
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Header />

            <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-24 w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">Frequently Asked Questions</h1>
                    <p className="text-gray-500 font-light text-lg">
                        Find answers to common questions about our products and services.
                    </p>
                </div>

                <div className="space-y-16">
                    {faqs.map((category, catIdx) => (
                        <div key={catIdx} className="space-y-8">
                            <h2 className="text-xl font-medium tracking-wide uppercase border-b border-gray-100 pb-4">{category.category}</h2>
                            <div className="space-y-4">
                                {category.questions.map((item, qIdx) => {
                                    const id = `${catIdx}-${qIdx}`;
                                    const isOpen = openIndex === id;

                                    return (
                                        <div key={qIdx} className="border border-gray-100 rounded-sm overflow-hidden">
                                            <button
                                                onClick={() => toggleFAQ(id)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="text-lg font-light text-gray-900 pr-8">{item.q}</span>
                                                <span className="text-gray-400">
                                                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                                </span>
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div className="p-6 pt-0 text-gray-500 font-light leading-relaxed">
                                                            {item.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 bg-gray-50 p-12 text-center rounded-sm">
                    <h3 className="text-2xl font-light text-gray-900 mb-4">Still have questions?</h3>
                    <p className="text-gray-500 font-light mb-8 max-w-lg mx-auto">
                        Our customer service team is here to help with any inquiries you might have.
                    </p>
                    <a href="/contact" className="inline-block px-10 py-4 border border-black text-black uppercase tracking-[0.2em] text-xs font-bold hover:bg-black hover:text-white transition-colors">
                        Contact Support
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FAQPage;
