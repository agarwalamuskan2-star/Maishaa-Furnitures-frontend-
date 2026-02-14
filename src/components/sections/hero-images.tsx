"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';


const HeroImages = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop",
            alt: "Modern Living Room Furniture",
            title: "Nila",
            subtitle: "Paper Mache Lamps",
            description: "Like the moon, beautifully uneven."
        },
        {
            url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1920&auto=format&fit=crop",
            alt: "Contemporary Furniture Collection",
            title: "Artisan",
            subtitle: "Luxury Seating",
            description: "Elegance in every curve."
        },
        {
            url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1920&auto=format&fit=crop",
            alt: "Contemporary Bedroom Design",
            title: "Minimal",
            subtitle: "Bedroom Series",
            description: "Designed for peaceful dreams."
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
        <section className="relative w-full h-[55vh] md:h-[90vh] overflow-hidden bg-gray-900">
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
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        {/* Text Overlay */}
                        <div className="absolute bottom-16 md:bottom-24 left-4 md:left-20 text-white z-10 max-w-lg">
                            <h2 className="text-4xl md:text-7xl font-light mb-1">{slide.title}</h2>
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium mb-6 opacity-80">{slide.subtitle}</p>
                            <p className="text-lg md:text-3xl font-light leading-snug mb-8">{slide.description}</p>
                            <Link href="/products" className="inline-block border-b border-white pb-1 text-[10px] md:text-xs uppercase tracking-widest font-medium hover:opacity-80 transition-opacity">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Previous Slide"
            >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Next Slide"
            >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 z-10 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                            ? 'w-2 h-2 bg-orange-400'
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
