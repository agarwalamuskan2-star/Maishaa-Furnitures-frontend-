import { useState, useMemo } from 'react';

export type Product = {
    name: string;
    price: string;
    originalPrice?: string;
    tag?: string;
    status?: string;
    badge?: string;
    image: string;
    type?: string;
    size?: string[];
    emi?: string;
    bestSeller?: boolean;
    discount?: string;
};

export function useProductFilter(initialProducts: Product[]) {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number[]>([0, 500000]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedDiscounts, setSelectedDiscounts] = useState<number[]>([]);

    const filteredProducts = useMemo(() => {
        return initialProducts.filter(product => {
            // Type Filter
            if (selectedTypes.length > 0 && product.type && !selectedTypes.includes(product.type)) {
                return false;
            }

            // Price Filter
            const price = parseInt(product.price.replace(/,/g, ''), 10);
            if (price < priceRange[0] || price > priceRange[1]) {
                return false;
            }

            // Size Filter
            if (selectedSizes.length > 0) {
                // For now, if product has no size, we might include or exclude. 
                // If filtering by size, usually exclude products without size
                if (!product.size || !product.size.some(s => selectedSizes.includes(s))) {
                    return false;
                }
            }

            // Discount Filter
            if (selectedDiscounts.length > 0) {
                let discount = 0;
                if (product.originalPrice) {
                    const original = parseInt(product.originalPrice.replace(/,/g, ''), 10);
                    discount = Math.round(((original - price) / original) * 100);
                }

                // Match ANY selected discount range (e.g. if 10% is selected, item with 15% is shown)
                const matchesDiscount = selectedDiscounts.some(d => discount >= d);
                if (!matchesDiscount) return false;
            }

            return true;
        });
    }, [initialProducts, selectedTypes, priceRange, selectedSizes, selectedDiscounts]);

    return {
        selectedTypes, setSelectedTypes,
        priceRange, setPriceRange,
        selectedSizes, setSelectedSizes,
        selectedDiscounts, setSelectedDiscounts,
        filteredProducts
    };
}
