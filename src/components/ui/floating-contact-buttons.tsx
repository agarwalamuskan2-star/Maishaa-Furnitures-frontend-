"use client";

import React from "react";
import { Phone } from "lucide-react";

const FloatingContactButtons = () => {
    return (
        <div className="fixed bottom-20 md:bottom-6 right-6 z-[99999] flex flex-col gap-3 md:gap-4 pointer-events-none">
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110 transition-transform duration-300 pointer-events-auto"
                aria-label="Contact us on WhatsApp"
            >
                <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.116.554 4.183 1.604 6.035L0 24l6.105-1.602a11.832 11.832 0 005.937 1.597h.005c6.632 0 12.028-5.391 12.03-12.024a11.824 11.824 0 00-3.511-8.508z" />
                </svg>
            </a>

            {/* Call Button */}
            <a
                href="tel:+919999999999"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#FFA500] rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110 transition-transform duration-300 pointer-events-auto"
                aria-label="Call us"
            >
                <Phone size={26} fill="currentColor" />
            </a>
        </div>
    );
};

export default FloatingContactButtons;
