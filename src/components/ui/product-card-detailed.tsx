"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useFavorites } from "@/context/favorites-context";

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
    id,
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
    const { addToCart } = useCart();
    const { isFavorite, toggleFavorite } = useFavorites();
    const [isAdding, setIsAdding] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        setIsAdding(true);
        
        addToCart({
            id,
            title,
            price,
            mainImage,
        });

        // Show success animation
        setIsAdding(false);
        setIsAdded(true);
        
        // Reset after 2 seconds
        setTimeout(() => {
            setIsAdded(false);
        }, 2000);
    };

    const handleToggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        toggleFavorite({
            id,
            title,
            price,
            mainImage,
        });
    };

    return (
        <div className="group flex flex-col w-full bg-white relative">
            {/* Image Container */}
            <div className="relative w-full aspect-square bg-[#f5f5f5] overflow-hidden">

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
                <button
                    onClick={handleToggleFavorite}
                    className={`absolute top-3 right-3 z-20 bg-white rounded-full p-2 shadow-sm hover:scale-110 transition-transform ${
                        isFavorite(id) ? "text-red-500" : "text-gray-900"
                    }`}
                >
                    <Heart size={18} className={isFavorite(id) ? "fill-current" : ""} />
                </button>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    disabled={isAdding || isAdded}
                    className={`absolute bottom-0 left-0 right-0 z-20 py-3 px-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2
                        ${isAdded 
                            ? "bg-green-600 text-white" 
                            : "bg-black text-white hover:bg-gray-800"
                        }
                        disabled:opacity-100 disabled:cursor-not-allowed`}
                >
                    {isAdding ? (
                        "Adding..."
                    ) : isAdded ? (
                        <>
                            <Check size={16} />
                            Added to Cart
                        </>
                    ) : (
                        <>
                            <ShoppingBag size={16} />
                            Add to Cart
                        </>
                    )}
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

            {/* Content Box */}
            <div className="border border-gray-200 p-5 mt-0 transition-shadow duration-300 group-hover:shadow-sm">
                {/* Product Tag (Made to Order / Ready to Ship) */}
                {(isMadeToOrder || isReadyToShip) && (
                    <div className="mb-3">
                        {isMadeToOrder && (
                            <span className="bg-[#f3f0eb] text-[#8c6b5d] text-[10px] px-2 py-1 uppercase tracking-widest font-semibold">
                                MADE TO ORDER
                            </span>
                        )}
                        {isReadyToShip && (
                            <span className="bg-[#e6f4ea] text-[#1e7e34] text-[10px] px-2 py-1 uppercase tracking-widest font-semibold">
                                READY TO SHIP
                            </span>
                        )}
                    </div>
                )}

                {/* Details */}
                <h3 className="text-[15px] sm:text-[16px] text-gray-900 font-normal mb-1.5 font-sans leading-snug tracking-wide">{title}</h3>

                <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-[16px] sm:text-[17px] font-bold text-gray-900">{price}</span>
                    {originalPrice && (
                        <span className="text-xs text-gray-400 line-through decoration-1">{originalPrice}</span>
                    )}
                    {discount && (
                        <span className="text-xs text-[#a67f5e] font-bold tracking-wide">{discount}</span>
                    )}
                </div>

                {/* Price Note */}
                <p className="text-[10px] text-gray-400 mb-2.5 font-light tracking-wide">Price inclusive of all taxes | Pan India Shipping</p>

                {/* EMI Info */}
                {emiStart && (
                    <p className="text-[11px] sm:text-xs text-[#d97706] font-medium tracking-wide">
                        EMI starts from ₹ {emiStart}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductCardDetailed;
