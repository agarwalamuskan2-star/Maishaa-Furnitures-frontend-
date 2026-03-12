/**
 * TypeScript interfaces for Product API responses
 * Matches the admin panel's public API response structure
 */

// Product image from product_image table
export interface ProductImage {
  image_id: number;
  image: string;
  is_main: boolean;
  sort_order: number;
}

// Category info
export interface Category {
  category_id: number;
  name: string;
}

// Product color image (from product_color_image table)
export interface ProductColorImage {
  image_id: number;
  image: string;
  is_main: boolean;
  sort_order: number;
}

// Color variant with nested images (from product_color table)
export interface ProductColor {
  color_id: number;
  color_name: string;
  color_code: string;
  sort_order: number;
  images: ProductColorImage[];
}

// Size variant (from product_variant table)
export interface ProductVariant {
  variant_id: number;
  product_id: number;
  size: string;
  color: string;
  price: number;
  qty: number;
  display_order: number;
}

// Configuration (from product_configuration table)
export interface ProductConfiguration {
  config_id: number;
  name: string;
  code: string;
  description: string;
}

// Main Product interface (from product table)
export interface Product {
  product_id: number;
  name: string;
  sku: string | null;
  price: number;
  sale_price: number | null;
  short_description: string | null;
  description: string | null;
  slug: string;
  material: string | null;
  product_finish: string | null;
  length: number | null;
  width: number | null;
  height: number | null;
  weight: number | null;
  stock_quantity: number | null;
  length_in: string | null;
  width_in: string | null;
  height_in: string | null;
  meta_title: string | null;
  meta_description: string | null;
  is_active: boolean;
  default_color_id: number | null;
  images: ProductImage[];
  categories: Category[];
  room_name: string | null;
  variants: ProductVariant[];
  color_variants: ProductColor[];
  configurations: ProductConfiguration[];
}

// API Response for product listing
export interface ProductsListResponse {
  products: Product[];
  pagination: {
    limit: number;
    offset: number;
    total: number;
  };
}

// API Response for single product
export interface ProductDetailResponse {
  product: Product;
}

// Filter query params
export interface ProductFilters {
  search?: string;
  category?: number;
  limit?: number;
  offset?: number;
}

// For listing cards (simplified version)
export interface ProductCard {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  slug: string;
  tag?: string;
  isBestSeller?: boolean;
}
