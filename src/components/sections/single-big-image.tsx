"use client";

import React from 'react';
import Image from 'next/image';

const SingleBigImage = () => {
    return (
        <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="relative w-full h-[150px] sm:h-[230px] md:h-[310px] lg:h-[380px] xl:h-[450px] overflow-hidden outline-none border-none">
                <Image
                    src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1920&auto=format&fit=crop"
                    alt="Neutral Modern Interior"
                    fill
                    className="object-cover outline-none border-none"
                    sizes="100vw"
                    style={{ outline: 'none', border: 'none' }}
                    priority
                />
            </div>
        </div>
    );
};

export default SingleBigImage;
