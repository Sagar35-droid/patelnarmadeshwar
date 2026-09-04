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
      const direct = products.find((p) => p.id === cleanId || p.slug === cleanId);
      if (direct) return direct;

      // Handle pure numeric id e.g. "11" -> "product-11"
      if (/^\d+$/.test(cleanId)) {
        const found = products.find((p) => p.id === `product-${cleanId}` || p.id === `product-new-${cleanId}`);
        if (found) return found;
      }

      // Handle pr-1 or pr1
      const prMatch = cleanId.match(/^pr-?(\d+)$/i);
      if (prMatch) {
        const num = prMatch[1];
        const found = products.find((p) => p.id === `product-${num}` || p.id === `product-new-${num}`);
        if (found) return found;
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

