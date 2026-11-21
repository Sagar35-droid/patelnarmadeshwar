import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { Product, CustomerDetails, OrderRecord, CartItem } from '../types';
import { useProducts } from './ProductContext';
import { getPricingDetails } from '../utils/pricing';

interface StoredCartEntry {
  productId: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalMrp: number;
  subtotal: number;
  totalSavings: number;
  orders: OrderRecord[];
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  placeOrder: (params: {
    items: CartItem[];
    customer: CustomerDetails;
    clearCartAfter?: boolean;
  }) => OrderRecord;
  getOrderById: (orderId: string) => OrderRecord | undefined;
}

const CART_STORAGE_KEY = 'authentic_narmadeshwar_cart_v1';
const ORDERS_STORAGE_KEY = 'authentic_narmadeshwar_orders_v1';

const CartContext = createContext<CartContextType | undefined>(undefined);

function readStoredCart(): StoredCartEntry[] {
  try {
    if (typeof window === 'undefined') return [];
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (entry): entry is StoredCartEntry =>
        Boolean(entry && typeof entry.productId === 'string' && typeof entry.quantity === 'number' && entry.quantity > 0)
    );
  } catch {
    return [];
  }
}

function readStoredOrders(): OrderRecord[] {
  try {
    if (typeof window === 'undefined') return [];
    const raw = window.localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { products, getProductById } = useProducts();
  const [entries, setEntries] = useState<StoredCartEntry[]>(readStoredCart);
  const [orders, setOrders] = useState<OrderRecord[]>(readStoredOrders);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [entries]);

  useEffect(() => {
    try {
      window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [orders]);

  const items: CartItem[] = useMemo(() => {
    return entries
      .map((entry) => {
        const product = getProductById(entry.productId) || products.find((p) => p.id === entry.productId);
        if (!product) return null;
        const pricing = getPricingDetails(product);
        const maxStock = pricing.stock !== undefined ? pricing.stock : 99;
        if (!pricing.inStock || maxStock <= 0) return null;
        const safeQty = Math.max(1, Math.min(entry.quantity, maxStock));
        return {
          productId: product.id,
          product,
          name: product.name,
          nameHindi: product.nameHindi,
          image: product.mainImage,
          size: product.size,
          weight: product.weight,
          quantity: safeQty,
          unitPrice: pricing.sellingPrice,
          mrp: pricing.mrp,
          sellingPrice: pricing.sellingPrice,
          discountPercentage: pricing.discountPercentage,
        } as CartItem;
      })
      .filter((item): item is CartItem => item !== null);
  }, [entries, getProductById, products]);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items]
  );

  const totalMrp = useMemo(
    () => items.reduce((sum, item) => sum + (item.mrp || item.unitPrice) * item.quantity, 0),
    [items]
  );

  const totalSavings = Math.max(0, totalMrp - subtotal);

  const addItem = useCallback((product: Product, quantity = 1) => {
    const pricing = getPricingDetails(product);
    if (!pricing.inStock) return;
    const maxStock = pricing.stock !== undefined ? pricing.stock : 99;
    const addQty = Math.max(1, Math.floor(quantity));

    setEntries((prev) => {
      const existing = prev.find((e) => e.productId === product.id);
      if (existing) {
        const nextQty = Math.min(maxStock, existing.quantity + addQty);
        return prev.map((e) => (e.productId === product.id ? { ...e, quantity: nextQty } : e));
      }
      return [...prev, { productId: product.id, quantity: Math.min(maxStock, addQty) }];
    });
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        setEntries((prev) => prev.filter((e) => e.productId !== productId));
        return;
      }
      const product = getProductById(productId);
      const maxStock = product ? (getPricingDetails(product).stock ?? 99) : 99;
      const safeQty = Math.max(1, Math.min(maxStock, Math.floor(quantity)));
      setEntries((prev) =>
        prev.map((e) => (e.productId === productId ? { ...e, quantity: safeQty } : e))
      );
    },
    [getProductById]
  );

  const removeItem = useCallback((productId: string) => {
    setEntries((prev) => prev.filter((e) => e.productId !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setEntries([]);
  }, []);

  const placeOrder = useCallback(
    ({
      items: orderItems,
      customer,
      clearCartAfter = false,
    }: {
      items: CartItem[];
      customer: CustomerDetails;
      clearCartAfter?: boolean;
    }): OrderRecord => {
      const orderSubtotal = orderItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
      const timestamp = Date.now().toString().slice(-6);
      const randomDigits = Math.floor(100 + Math.random() * 900);
      const orderId = `ORD-${timestamp}${randomDigits}`;
      const nowIso = new Date().toISOString();

      const record: OrderRecord = {
        orderId,
        items: orderItems,
        customer,
        subtotal: orderSubtotal,
        shippingFee: 0,
        totalAmount: orderSubtotal,
        orderStatus: 'Prepared for WhatsApp',
        createdAt: nowIso,
        updatedAt: nowIso,
      };

      setOrders((prev) => [record, ...prev].slice(0, 20));
      if (clearCartAfter) {
        setEntries([]);
      }
      return record;
    },
    []
  );

  const getOrderById = useCallback(
    (orderId: string) => {
      if (!orderId) return undefined;
      return orders.find((o) => o.orderId.toLowerCase() === orderId.trim().toLowerCase());
    },
    [orders]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalMrp,
        subtotal,
        totalSavings,
        orders,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        placeOrder,
        getOrderById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
};
