import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getProducts } from '@/services/api';
import { Product } from '@/types/product';

/**
 * PRODUCTS section component for Maishaa Furniture & Furnishings.
 * Features a 3-column grid of product cards with light grey backgrounds.
 * Data is fetched from the admin panel API.
 */

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Get the main image or first available image
  const mainImage = product.images?.find(img => img.is_main)?.image 
    || product.images?.[0]?.image 
    || '/placeholder-product.jpg';
  
  // Format price
  const displayPrice = product.sale_price && product.sale_price < product.price
    ? `₹${product.sale_price.toLocaleString('en-IN')}.00`
    : `₹${product.price.toLocaleString('en-IN')}.00`;
  
  const originalPrice = product.sale_price && product.sale_price < product.price
    ? `₹${product.price.toLocaleString('en-IN')}.00`
    : undefined;

  return (
    <a
      href={`/product/${product.slug}`}
      className="group block space-y-4 cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-[12px] w-full h-[320px] transition-all duration-300 bg-gray-100">
        <Image
          src={mainImage}
          alt={product.name}
          fill
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="text-center space-y-1">
        <h4 className="text-[18px] font-normal text-[#0f172a] font-body uppercase tracking-wider">
          {product.name}
        </h4>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-[16px] font-medium text-[#64748b] font-body">
            {displayPrice}
          </p>
          {originalPrice && (
            <span className="text-[14px] line-through text-[#94a3b8] font-body">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

async function ProductShowcase() {
  // Fetch products from API (server component)
  const products = await getProducts({ limit: 6 });

  return (
    <section className="bg-[#faf7f2] py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 pb-4 border-b border-[#e2e8f0]">
          <h3 className="text-[24px] md:text-[36px] font-body font-normal text-[#0f172a] uppercase tracking-[0.05em]">
            PRODUCTS
          </h3>
          <a
            href="/collections"
            className="flex items-center space-x-2 text-[14px] md:text-[16px] font-medium text-[#0f172a] hover:text-[#a67f5e] transition-colors tracking-widest font-body group"
          >
            <span className="uppercase">ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
