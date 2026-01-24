"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

interface StoreLocationProps {
    city: string;
    address: string;
    email: string;
    phone: string;
    timings: string;
    image: string;
    isReversed?: boolean;
    isRenovation?: boolean;
}

const StoreLocation: React.FC<StoreLocationProps> = ({
    city,
    address,
    email,
    phone,
    timings,
    image,
    isReversed = false,
    isRenovation = false,
}) => {
    return (
        <section className="bg-white py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className={`max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>

                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-gray-100">
                        {/* Brand Overlay as per screenshot (DTALE -> MAISHAA) */}
                        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                            <span className="text-white/80 font-bold text-6xl md:text-8xl tracking-widest opacity-30 select-none">
                                MAISHAA
                            </span>
                        </div>
                        <Image
                            src={image}
                            alt={`${city} Store`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">{city}</h2>

                    <div className="space-y-6 text-base text-gray-600">
                        <p className="leading-relaxed whitespace-pre-line">
                            {address}
                        </p>

                        <p>
                            <a href={`mailto:${email}`} className="text-gray-900 hover:underline">{email}</a>
                        </p>

                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Timings</span>
                            {isRenovation ? (
                                <p className="text-amber-700 font-bold">Under Renovation</p>
                            ) : (
                                <>
                                    <p>All Week:</p>
                                    <p className="font-medium text-gray-900">{timings}</p>
                                </>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone</span>
                            <div className="flex items-center gap-2">
                                <MessageSquare size={16} className="text-green-600" />
                                <a href={`tel:${phone.replace(/\s/g, "")}`} className="font-medium text-gray-900 hover:underline">
                                    {phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#"
                            className="px-8 py-3 border border-gray-300 text-gray-900 text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-colors text-center"
                        >
                            Get Directions
                        </Link>
                        <Link
                            href="#"
                            className="px-8 py-3 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors text-center"
                        >
                            Book An Appointment
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StoreLocation;
