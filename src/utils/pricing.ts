import { Product } from '../types';

/**
 * Deterministic pricing helper based on product size and specifications if not explicitly specified.
 */
export function getProductMRP(product: Product): number {
  if (product.mrp && product.mrp > 0) {
    return product.mrp;
  }

  const sizeLower = (product.size || '').toLowerCase();
  const weightLower = (product.weight || '').toLowerCase();

  if (sizeLower.includes('6 inch') || weightLower.includes('10 kg') || weightLower.includes('5 kg')) {
    return 7999;
  }
  if (sizeLower.includes('4 inch') || weightLower.includes('2 kg') || weightLower.includes('3 kg')) {
    return 4499;
  }
  if (sizeLower.includes('3 inch') || weightLower.includes('1 kg') || weightLower.includes('800 grams')) {
    return 3299;
  }
  if (sizeLower.includes('2 inch') || weightLower.includes('500 grams')) {
    return 2499;
  }

  return 2499;
}

export function getProductSellingPrice(product: Product): number {
  if (product.sellingPrice && product.sellingPrice > 0) {
    return product.sellingPrice;
  }
  if (product.price && product.price > 0) {
    return product.price;
  }

  const sizeLower = (product.size || '').toLowerCase();
  const weightLower = (product.weight || '').toLowerCase();

  if (sizeLower.includes('6 inch') || weightLower.includes('10 kg') || weightLower.includes('5 kg')) {
    return 5499;
  }
  if (sizeLower.includes('4 inch') || weightLower.includes('2 kg') || weightLower.includes('3 kg')) {
    return 2999;
  }
  if (sizeLower.includes('3 inch') || weightLower.includes('1 kg') || weightLower.includes('800 grams')) {
    return 2199;
  }
  if (sizeLower.includes('2 inch') || weightLower.includes('500 grams')) {
    return 1699;
  }

  return 1699;
}

// Backward compatible alias
export function getProductPrice(product: Product): number {
  return getProductSellingPrice(product);
}

export function calculateDiscountPercentage(mrp: number, sellingPrice: number): number {
  if (!mrp || mrp <= 0 || !sellingPrice || sellingPrice <= 0 || mrp <= sellingPrice) {
    return 0;
  }
  return Math.round(((mrp - sellingPrice) / mrp) * 100);
}

export function getProductStock(product: Product): number | undefined {
  if (typeof product.stock === 'number') {
    return Math.max(0, product.stock);
  }
  if (typeof product.stockQuantity === 'number') {
    return Math.max(0, product.stockQuantity);
  }
  if (product.inStock === false) {
    return 0;
  }
  // Unknown / unset stock
  return undefined;
}

export function isProductInStock(product: Product): boolean {
  const stock = getProductStock(product);
  if (stock === undefined) {
    return product.inStock !== false;
  }
  return stock > 0;
}

export function getPricingDetails(product: Product) {
  const mrp = getProductMRP(product);
  const sellingPrice = getProductSellingPrice(product);
  const discountPercentage = typeof product.discountPercentage === 'number' && product.discountPercentage > 0
    ? product.discountPercentage
    : calculateDiscountPercentage(mrp, sellingPrice);
  const stock = getProductStock(product);
  const inStock = isProductInStock(product);

  return {
    mrp,
    sellingPrice,
    discountPercentage,
    stock,
    inStock,
  };
}

export function formatPrice(amount?: number | null | string): string {
  const numericAmount = Number(amount);
  if (isNaN(numericAmount) || amount === null || amount === undefined) {
    return '₹0';
  }
  return `₹${Math.round(numericAmount).toLocaleString('en-IN')}`;
}

