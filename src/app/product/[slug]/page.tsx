/**
 * Product Detail Page - Server Component
 * Fetches product data on the server for SEO and passes to client component
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/services/api';
import ProductDetailClient from '@/components/product/ProductDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate dynamic metadata for SEO
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Maishaa Furnitures',
    };
  }

  // Get main image for Open Graph
  const ogImage = product.images?.find(img => img.is_main)?.image 
    || product.images?.[0]?.image 
    || '/og-image.jpg';

  return {
    title: product.meta_title || product.name || 'Product',
    description: product.meta_description || product.short_description || `Buy ${product.name} at Maishaa Furnitures` || undefined,
    openGraph: {
      title: product.meta_title || product.name || 'Product',
      description: product.meta_description || product.short_description || `Buy ${product.name} at Maishaa Furnitures` || undefined,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: product.name || 'Product',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.meta_title || product.name || 'Product',
      description: product.meta_description || product.short_description || undefined,
      images: [ogImage],
    },
  };
}

/**
 * Product Detail Page
 */
export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
