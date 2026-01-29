"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroImages = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop",
            alt: "Modern Living Room Furniture"
        },
        {
            url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1920&auto=format&fit=crop",
            alt: "Contemporary Furniture Collection"
        },
        {
            url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1920&auto=format&fit=crop",
            alt: "Contemporary Bedroom Design"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Auto-play functionality (optional)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <section className="relative w-full h-[calc(100dvh-70px)] lg:h-[calc(100vh-120px)] overflow-hidden bg-gray-900">
            {/* Slides */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${index === currentSlide
                            ? 'opacity-100 translate-x-0'
                            : index < currentSlide
                                ? 'opacity-0 -translate-x-full'
                                : 'opacity-0 translate-x-full'
                            }`}
                    >
                        <Image
                            src={slide.url}
                            alt={slide.alt}
                            fill
                            className="object-cover object-center"
                            priority={index === 0}
                            sizes="100vw"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 sm:left-8 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 sm:right-8 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
                aria-label="Next Slide"
            >
                <ChevronRight size={32} strokeWidth={1.5} />
            </button>

            {/* Slide Indicators (Dots) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
                {/* Progress indicator like reference image */}
                <span className="text-white text-sm font-medium">
                    {String(currentSlide + 1).padStart(2, '0')}
                </span>

                {/* Dots */}
                <div className="flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 ${index === currentSlide
                                ? 'w-8 h-1 bg-white'
                                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/75'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <span className="text-white/60 text-sm font-medium">
                    {String(slides.length).padStart(2, '0')}
                </span>
            </div>
        </section>
    );
};

export default HeroImages;
