"use client";

import React from 'react';
import Image from 'next/image';

const FurnitureImages = () => {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop",
            alt: "Modern Luxury Interior"
        },
        {
            url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1920&auto=format&fit=crop",
            alt: "Neutral Modern Interior"
        }
    ];

    return (
        <div className="w-full py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className={`grid grid-cols-1 gap-8 md:gap-24`}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[180px] sm:h-[300px] md:h-[380px] lg:h-[450px] xl:h-[520px] overflow-hidden"
                    >
                        <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FurnitureImages;
