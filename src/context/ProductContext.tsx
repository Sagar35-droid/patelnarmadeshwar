import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '../types';
import { PRODUCTS as STATIC_PRODUCTS } from '../data/products';
import { getPricingDetails } from '../utils/pricing';

interface ProductContextType {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  getProductById: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Enhance static products with standard default pricing and stock
const initialProducts: Product[] = STATIC_PRODUCTS.map((prod) => {
  const pricing = getPricingDetails(prod);
  return {
    ...prod,
    mrp: pricing.mrp,
    sellingPrice: pricing.sellingPrice,
    price: pricing.sellingPrice,
    discountPercentage: pricing.discountPercentage,
    stock: pricing.stock,
    stockQuantity: pricing.stock,
    inStock: pricing.inStock,
  };
});

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(initialProducts);

  const getProductById = useCallback(
    (id: string) => {
      if (!id) return undefined;
      const cleanId = id.trim();
      const lowerCleanId = cleanId.toLowerCase();

      // 1. Direct match on ID or slug (case-sensitive first, then case-insensitive)
      const direct = products.find((p) => p.id === cleanId || p.slug === cleanId);
      if (direct) return direct;

      const directLower = products.find(
        (p) => p.id.toLowerCase() === lowerCleanId || (p.slug && p.slug.toLowerCase() === lowerCleanId)
      );
      if (directLower) return directLower;

      // 2. Pure number: e.g. "1" to "38" (or "40")
      const numMatch = cleanId.match(/^(\d+)$/);
      if (numMatch) {
        const num = parseInt(numMatch[1], 10);
        // Direct ID check like product-1
        const byId = products.find((p) => p.id === `product-${num}`);
        if (byId) return byId;

        // 1-based index in the 38 products collection (e.g. Product 30 -> products[29])
        if (num >= 1 && num <= products.length) {
          return products[num - 1];
        }
      }

      // 3. Prefix match: e.g. "product-30", "product-38", "product1", "item-5"
      const prefixMatch = cleanId.match(/^(?:product|item|pr|p)[-_ ]?(\d+)$/i);
      if (prefixMatch) {
        const num = parseInt(prefixMatch[1], 10);
        const byId = products.find((p) => p.id === `product-${num}`);
        if (byId) return byId;

        // If skipped ID (like product-30 or product-38), resolve to 1-based index
        if (num >= 1 && num <= products.length) {
          return products[num - 1];
        }
      }

      return undefined;
    },
    [products]
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading: false,
        error: null,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

