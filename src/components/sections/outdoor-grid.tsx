"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductCardDetailed from "@/components/ui/product-card-detailed";

const products = [
    {
        id: 1,
        title: "Davyn Outdoor Lounge Chair",
        price: "₹69,900",
        emiStart: "6211",
        mainImage: "/images/outdoor/seating-cat.png",
        isReadyToShip: true,
    },
    {
        id: 2,
        title: "Davyn Outdoor Loveseat",
        price: "₹122,900",
        emiStart: "10919",
        mainImage: "/images/outdoor/seating-cat.png",
        isReadyToShip: true,
    },
    {
        id: 3,
        title: "Davyn Outdoor Nesting Tables",
        price: "₹54,900",
        emiStart: "4878",
        mainImage: "/images/outdoor/accessories-cat.png",
        isReadyToShip: true,
    },
    {
        id: 4,
        title: "Wren Outdoor Lounge Chair",
        price: "₹41,760",
        discount: "10%OFF",
        originalPrice: "₹46,400",
        emiStart: "3711",
        mainImage: "/images/outdoor/wren-chair.png",
        isReadyToShip: true,
    },
    {
        id: 5,
        title: "Bali Teak Outdoor Sofa",
        price: "₹145,900",
        originalPrice: "₹182,375",
        discount: "20%OFF",
        emiStart: "15286",
        mainImage: "/images/outdoor/hero.png",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 6,
        title: "Santorini Outdoor Dining Set",
        price: "₹188,400",
        originalPrice: "₹209,333",
        discount: "10%OFF",
        emiStart: "19736",
        mainImage: "/images/outdoor/dining-cat.png",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 7,
        title: "Malibu Poolside Lounger",
        price: "₹45,910",
        emiStart: "4811",
        mainImage: "/images/outdoor/wren-chair.png",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
    {
        id: 8,
        title: "Capri Garden Armchair",
        price: "₹32,600",
        originalPrice: "₹46,571",
        discount: "30%OFF",
        emiStart: "3417",
        mainImage: "/images/outdoor/seating-cat.png",
        isMadeToOrder: true,
        badges: [{ text: "BEST SELLER", color: "black" as const }],
    },
];

const sortOptions = [
    { name: "Price: Low to High", value: "price-asc" },
    { name: "Price: High to Low", value: "price-desc" },
    { name: "Newest First", value: "newest" },
    { name: "Popularity", value: "popularity" },
];

export default function OutdoorGrid() {
    const [sortBy, setSortBy] = useState("popularity");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const currentSort = sortOptions.find(opt => opt.value === sortBy)?.name || "Sort By";

    return (
        <div className="flex-1 w-full">
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                {products.concat(products).concat(products.slice(0, 4)).map((product, index) => (
                    <ProductCardDetailed key={`${product.id}-${index}`} {...product} id={index + 1} />
                ))}
            </div>
        </div>
    );
}
