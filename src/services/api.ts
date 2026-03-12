/**
 * API Service Layer for Admin Panel Integration
 * Provides typed fetch functions for the public API
 */

import { 
  Product, 
  ProductsListResponse, 
  ProductDetailResponse,
  ProductFilters 
} from '@/types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_URL) {
  console.warn('NEXT_PUBLIC_API_URL is not defined. API calls will fail.');
}

if (!API_KEY) {
  console.warn('NEXT_PUBLIC_API_KEY is not defined. API calls may fail.');
}

/**
 * Default headers for API requests
 */
const getHeaders = () => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (API_KEY) {
    headers['X-API-Key'] = API_KEY;
  }
  
  return headers;
};

/**
 * Build query string from filters
 */
const buildQueryString = (filters: ProductFilters): string => {
  const params = new URLSearchParams();
  
  if (filters.search) params.set('search', filters.search);
  if (filters.category) params.set('category', filters.category.toString());
  if (filters.limit) params.set('limit', filters.limit.toString());
  if (filters.offset) params.set('offset', filters.offset.toString());
  
  return params.toString();
};

/**
 * Fetch all active products with optional filters
 */
export async function getProducts(filters: ProductFilters = {}): Promise<Product[]> {
  if (!API_URL) {
    console.error('NEXT_PUBLIC_API_URL is not configured');
    return [];
  }
  
  try {
    const queryString = buildQueryString(filters);
    const url = `${API_URL}/api/public/products${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url, {
      headers: getHeaders(),
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    
    const data: ProductsListResponse = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

/**
 * Fetch a single product by slug or ID
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!API_URL) {
    console.error('NEXT_PUBLIC_API_URL is not configured');
    return null;
  }
  
  try {
    const response = await fetch(`${API_URL}/api/public/products/${slug}`, {
      headers: getHeaders(),
      next: { revalidate: 30 }, // Revalidate every 30 seconds for product pages
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch product: ${response.status}`);
    }
    
    const data: ProductDetailResponse = await response.json();
    return data.product || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

/**
 * Fetch categories for filtering
 */
export async function getCategories() {
  if (!API_URL) {
    console.error('NEXT_PUBLIC_API_URL is not configured');
    return [];
  }
  
  try {
    const response = await fetch(`${API_URL}/api/public/categories`, {
      headers: getHeaders(),
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }
    
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Fetch rooms for filtering
 */
export async function getRooms() {
  if (!API_URL) {
    console.error('NEXT_PUBLIC_API_URL is not configured');
    return [];
  }
  
  try {
    const response = await fetch(`${API_URL}/api/public/rooms`, {
      headers: getHeaders(),
      next: { revalidate: 300 },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch rooms: ${response.status}`);
    }
    
    const data = await response.json();
    return data.rooms || [];
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return [];
  }
}

/**
 * Fetch configurations for filtering
 */
export async function getConfigurations() {
  if (!API_URL) {
    console.error('NEXT_PUBLIC_API_URL is not configured');
    return [];
  }
  
  try {
    const response = await fetch(`${API_URL}/api/public/configurations`, {
      headers: getHeaders(),
      next: { revalidate: 300 },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch configurations: ${response.status}`);
    }
    
    const data = await response.json();
    return data.configurations || [];
  } catch (error) {
    console.error('Error fetching configurations:', error);
    return [];
  }
}
