import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/**
 * PRODUCTS section component for Maishaa Furniture & Furnishings.
 * Features a 3-column grid of product cards with light grey backgrounds.
 */

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  href: string;
}

const products: Product[] = [
  {
    id: 'kwid',
    name: 'KWID',
    price: '₹8500.00',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/09b782d081d2bc88d3f55f90361b03971-5.webp',
    href: '/product/kwid',
  },
  {
    id: 'vivid',
    name: 'VIVID',
    price: '₹24300.00',
    originalPrice: '₹27000.00',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/f1df7e8fafa4b6f159759d8a74b4c9fa1-6.jpg',
    href: '/product/vivid',
  },
  {
    id: 'sky-cocoon',
    name: 'SKY COCOON',
    price: '₹28000.00',
    originalPrice: '₹36000.00',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/f8cb781a77d099a6fbaf8eebdb2e3e3e1-7.jpg',
    href: '/product/sky-cocoon',
  },
  {
    id: 'cube',
    name: 'CUBE',
    price: '₹22400.00',
    originalPrice: '₹28000.00',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/ab7ce02f8319bb5bbe28ceb6cab90e4e1-8.jpg',
    href: '/product/cube',
  },
  {
    id: 'mapple',
    name: 'MAPPLE',
    price: '₹68000.00',
    originalPrice: '₹85000.00',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/2c01b1d07c2472bea3ead660fcdb6a6b1-9.webp',
    href: '/product/mapple',
  },
  {
    id: 'cascade',
    name: 'Cascade',
    price: '₹20000.00',
    originalPrice: '₹25000.00',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7afecfaa-1d29-4229-8a38-47bf00b11636-maishaafurnitures-com/assets/images/1758613119_main-10.png',
    href: '/product/cascade',
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <a
      href={product.href}
      className="group block space-y-4 cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-[12px] w-full h-[320px] transition-all duration-300">
        <Image
          src={product.image}
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
            {product.price}
          </p>
          {product.originalPrice && (
            <span className="text-[14px] line-through text-[#94a3b8] font-body">
              {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default function ProductShowcase() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
