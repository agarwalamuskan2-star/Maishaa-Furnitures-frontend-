"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const FloatingContactButtons = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919999999999" // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
                aria-label="Contact us on WhatsApp"
            >
                <div className="relative">
                    {/* Using MessageCircle from Lucide as a close approximation for WhatsApp */}
                    <MessageCircle size={28} fill="currentColor" />
                </div>
            </a>

            {/* Call Button */}
            <a
                href="tel:+919999999999" // Replace with actual number
                className="w-12 h-12 md:w-14 md:h-14 bg-[#FBBF24] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
                aria-label="Call us"
            >
                <Phone size={28} fill="currentColor" />
            </a>
        </div>
    );
};

export default FloatingContactButtons;
