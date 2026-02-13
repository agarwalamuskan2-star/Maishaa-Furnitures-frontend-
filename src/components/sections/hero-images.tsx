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

    // Auto-play functionality
    useEffect(() => {
        let interval: NodeJS.Timeout;
        
        const startInterval = () => {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            }, 5000);
        };

        startInterval();

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-gray-900">
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
                            className="object-cover"
                            priority={index === 0}
                            sizes="100vw"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows - Left side only */}
            <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft size={24} strokeWidth={1.5} />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                    aria-label="Next Slide"
                >
                    <ChevronRight size={24} strokeWidth={1.5} />
                </button>
            </div>

            {/* Slide Indicators - Bottom left */}
            <div className="absolute bottom-8 left-4 md:left-8 z-10 flex items-center gap-4">
                {/* Progress indicator */}
                <span className="text-white text-sm font-medium tracking-wider">
                    {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className="text-white/40 text-sm font-medium">/</span>
                <span className="text-white/60 text-sm font-medium">
                    {String(slides.length).padStart(2, '0')}
                </span>
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-8 right-4 md:right-8 z-10 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 ${index === currentSlide
                            ? 'w-8 h-1 bg-white'
                            : 'w-2 h-2 bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroImages;
