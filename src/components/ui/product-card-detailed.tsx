"use client";

import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

interface ProductCardDetailedProps {
    id: number;
    title: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    emiStart?: string;
    mainImage: string;
    hoverImage?: string;
    badges?: {
        text: string;
        color: "black" | "white";
    }[];
    isMadeToOrder?: boolean;
    isReadyToShip?: boolean;
}

const ProductCardDetailed: React.FC<ProductCardDetailedProps> = ({
    title,
    price,
    originalPrice,
    discount,
    emiStart,
    mainImage,
    hoverImage,
    badges = [],
    isMadeToOrder,
    isReadyToShip,
}) => {
    return (
        <div className="group flex flex-col w-full bg-white relative">
            {/* Image Container */}
            <div className="relative w-full aspect-square bg-[#f5f5f5] overflow-hidden mb-4 rounded-sm">

                {/* Badges (Top Left) */}
                <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                    {badges.map((badge, index) => (
                        <span
                            key={index}
                            className={`px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider ${badge.color === "black"
                                    ? "bg-black text-white"
                                    : "bg-white text-black border border-gray-200"
                                }`}
                        >
                            {badge.text}
                        </span>
                    ))}
                </div>

                {/* Wishlist Icon (Top Right) */}
                <button className="absolute top-3 right-3 z-20 bg-white rounded-full p-2 shadow-sm hover:scale-110 transition-transform">
                    <Heart size={18} className="text-gray-900" />
                </button>

                {/* Images */}
                <Image
                    src={mainImage}
                    alt={title}
                    fill
                    className={`object-cover transition-opacity duration-300 ${hoverImage ? "group-hover:opacity-0" : ""}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                {hoverImage && (
                    <Image
                        src={hoverImage}
                        alt={`${title} alternate`}
                        fill
                        className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                )}
            </div>

            {/* Product Tag (Made to Order / Ready to Ship) */}
            <div className="mb-2">
                {isMadeToOrder && (
                    <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 uppercase tracking-wider font-medium">
                        MADE TO ORDER
                    </span>
                )}
                {isReadyToShip && (
                    <span className="bg-green-50 text-green-700 text-[10px] px-2 py-0.5 uppercase tracking-wider font-medium">
                        READY TO SHIP
                    </span>
                )}
            </div>

            {/* Details */}
            <h3 className="text-base text-gray-900 font-normal mb-1 font-body">{title}</h3>

            <div className="flex items-baseline gap-2 mb-1">
                <span className="text-lg font-bold text-gray-900">{price}</span>
                {originalPrice && (
                    <span className="text-sm text-gray-400 line-through decoration-1">{originalPrice}</span>
                )}
                {discount && (
                    <span className="text-sm text-amber-700 font-medium">{discount}</span>
                )}
            </div>

            {/* Price Note */}
            <p className="text-[10px] text-gray-500 mb-2">Price inclusive of all taxes | Pan India Shipping</p>

            {/* EMI Info */}
            {emiStart && (
                <p className="text-xs text-amber-700 font-medium">
                    EMI starts from ₹ {emiStart}
                </p>
            )}
        </div>
    );
};

export default ProductCardDetailed;
