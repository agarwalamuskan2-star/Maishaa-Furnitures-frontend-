/**
 * Product Detail Page - Client Component
 * Handles interactive features: color switching, size pricing, add to cart
 */

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, ShoppingCart, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Product, ProductColor, ProductVariant } from '@/types/product';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  // State for selected options
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Initialize selected color based on default_color_id or first available
  useEffect(() => {
    if (product.color_variants && product.color_variants.length > 0) {
      // Try to find the default color
      if (product.default_color_id) {
        const defaultColor = product.color_variants.find(c => c.color_id === product.default_color_id);
        if (defaultColor) {
          setSelectedColor(defaultColor);
          return;
        }
      }
      // Fall back to first color
      setSelectedColor(product.color_variants[0]);
    }
  }, [product.color_variants, product.default_color_id]);

  // Get current images based on selected color
  const currentImages = selectedColor?.images && selectedColor.images.length > 0
    ? selectedColor.images
    : product.images || [];

  // Get the main image to display
  const mainImage = currentImages.find(img => img.is_main)?.image || currentImages[0]?.image;

  // Calculate current price
  const currentPrice = selectedVariant?.price ?? product.price;
  const displayPrice = `₹${currentPrice.toLocaleString('en-IN')}.00`;
  const originalPrice = product.sale_price && product.sale_price < product.price
    ? `₹${product.price.toLocaleString('en-IN')}.00`
    : undefined;

  // Handle color selection
  const handleColorSelect = (color: ProductColor) => {
    setSelectedColor(color);
    setSelectedImageIndex(0);
    
    // Reset variant selection when color changes
    setSelectedVariant(null);
  };

  // Handle size/variant selection
  const handleVariantSelect = (variant: ProductVariant) => {
    if (variant.qty === 0) return; // Don't allow selection of out-of-stock variants
    setSelectedVariant(variant);
  };

  // Get available variants for selected color
  const availableVariants = product.variants?.filter(v => 
    selectedColor ? v.color === selectedColor.color_name : true
  ) || [];

  // Sort variants by display_order
  const sortedVariants = [...availableVariants].sort((a, b) => 
    (a.display_order || 0) - (b.display_order || 0)
  );

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                {mainImage ? (
                  <Image
                    src={mainImage}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No image available
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {currentImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {currentImages.map((img, idx) => (
                    <button
                      key={img.image_id || idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                        idx === selectedImageIndex
                          ? 'border-[#a67f5e]'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={img.image}
                        alt={`${product.name} - Image ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Breadcrumb */}
              <div className="text-sm text-gray-500">
                <a href="/" className="hover:text-[#a67f5e]">Home</a>
                <span className="mx-2">/</span>
                <a href="/collections" className="hover:text-[#a67f5e]">Collections</a>
                <span className="mx-2">/</span>
                <span className="text-gray-900">{product.name}</span>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl font-light text-gray-900">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-medium text-gray-900">
                  {displayPrice}
                </span>
                {originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {originalPrice}
                  </span>
                )}
              </div>

              {/* Color Selection */}
              {product.color_variants && product.color_variants.length > 0 && (
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700">
                    Color: <span className="font-normal">{selectedColor?.color_name}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.color_variants.map((color) => {
                      const hasImages = color.images && color.images.length > 0;
                      const isSelected = selectedColor?.color_id === color.color_id;
                      
                      return (
                        <button
                          key={color.color_id}
                          onClick={() => handleColorSelect(color)}
                          disabled={!hasImages}
                          className={`group relative w-10 h-10 rounded-full border-2 transition-all ${
                            isSelected
                              ? 'border-[#a67f5e] scale-110'
                              : 'border-gray-200 hover:border-gray-400'
                          } ${!hasImages ? 'opacity-40 cursor-not-allowed' : ''}`}
                          title={color.color_name}
                        >
                          {color.color_code ? (
                            <span
                              className="absolute inset-1 rounded-full"
                              style={{ backgroundColor: color.color_code }}
                            />
                          ) : (
                            <span className="absolute inset-1 rounded-full bg-gray-300" />
                          )}
                          {isSelected && (
                            <span className="absolute inset-0 flex items-center justify-center">
                              <Check className="w-4 h-4 text-white drop-shadow-md" />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Size/ Variant Selection */}
              {sortedVariants.length > 0 && (
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sortedVariants.map((variant) => {
                      const isSelected = selectedVariant?.variant_id === variant.variant_id;
                      const isOutOfStock = variant.qty === 0;
                      
                      return (
                        <button
                          key={variant.variant_id}
                          onClick={() => handleVariantSelect(variant)}
                          disabled={isOutOfStock}
                          className={`px-4 py-2 border rounded-md transition-all ${
                            isSelected
                              ? 'border-[#a67f5e] bg-[#a67f5e] text-white'
                              : isOutOfStock
                                ? 'border-gray-200 text-gray-400 cursor-not-allowed line-through'
                                : 'border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          {variant.size}
                          {isOutOfStock && <span className="text-xs ml-1">(Out of Stock)</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart / Wishlist */}
              <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-[#0f172a] text-white px-6 py-3 rounded-md hover:bg-[#1e293b] transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="w-12 h-12 border border-gray-200 rounded-md flex items-center justify-center hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Product Details Accordion */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                {/* Description */}
                <div>
                  <button
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="font-medium text-gray-900">Description</span>
                    {isDescriptionExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {isDescriptionExpanded && (
                    <div className="mt-4 text-gray-600 prose prose-sm max-w-none">
                      {product.description ? (
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                      ) : (
                        <p>{product.short_description || 'No description available.'}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Specifications */}
                {(product.material || product.product_finish || product.length || product.width || product.height) && (
                  <div className="border-t border-gray-200 pt-4">
                    <button
                      onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="font-medium text-gray-900">Specifications</span>
                      {isDescriptionExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {isDescriptionExpanded && (
                      <div className="mt-4 space-y-2 text-sm">
                        {product.material && (
                          <div className="flex justify-between">
                            <span className="text-gray-500">Material</span>
                            <span className="text-gray-900">{product.material}</span>
                          </div>
                        )}
                        {product.product_finish && (
                          <div className="flex justify-between">
                            <span className="text-gray-500">Finish</span>
                            <span className="text-gray-900">{product.product_finish}</span>
                          </div>
                        )}
                        {product.length && product.width && product.height && (
                          <div className="flex justify-between">
                            <span className="text-gray-500">Dimensions</span>
                            <span className="text-gray-900">
                              {product.length} x {product.width} x {product.height} cm
                            </span>
                          </div>
                        )}
                        {product.weight && (
                          <div className="flex justify-between">
                            <span className="text-gray-500">Weight</span>
                            <span className="text-gray-900">{product.weight} kg</span>
                          </div>
                        )}
                        {product.sku && (
                          <div className="flex justify-between">
                            <span className="text-gray-500">SKU</span>
                            <span className="text-gray-900">{product.sku}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
