import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Product } from '../types';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Tracks a Google Ads contact conversion when a visitor clicks any WhatsApp button.
 * Conversion Action: AW-18356820286/vVwuCNmx9O4cEL6ym7FE
 * Fires synchronously before opening/redirecting to WhatsApp.
 */
export function trackWhatsAppConversion(): void {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18356820286/vVwuCNmx9O4cEL6ym7FE'
      });
    }
  } catch (error) {
    console.error('WhatsApp conversion tracking error:', error);
  }
}

/**
 * ============================================================================
 * WHATSAPP CONFIGURATION
 * EDITABLE: You can update your business WhatsApp number below at any time.
 * Format: Country code followed by mobile number without '+' or special characters.
 * Example: "919301531448" for +91 9301531448
 * ============================================================================
 */
export const WHATSAPP_NUMBER: string = BUSINESS_CONFIG.whatsappNumber || "919301531448";

/**
 * Generate a WhatsApp order link for any product.
 * Message format: "Namaste, mujhe [Product Name] order karna hai."
 */
export function getProductWhatsAppLink(product: { name: string; size?: string; price?: number } | Product): string {
  const number = WHATSAPP_NUMBER;
  const message = `Namaste, mujhe ${product.name} order karna hai.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp order link with optional details (size, quantity, price)
 */
export function getProductWhatsAppOrderLink(
  product: { name: string; size?: string; price?: number } | Product,
  quantity?: number
): string {
  const number = WHATSAPP_NUMBER;
  let message = `Namaste, mujhe ${product.name} order karna hai.`;
  if (product.size) {
    message += `\nSize: ${product.size}`;
  }
  if (quantity && quantity > 1) {
    message += `\nQuantity: ${quantity}`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppLink(customMessage?: string): string {
  const number = WHATSAPP_NUMBER;
  const message = customMessage || `Namaste, mujhe Authentic Narmadeshwar Shivling ke baare mein jankari chahiye.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getEnquiryFormWhatsAppLink(formData: {
  name: string;
  phone: string;
  message: string;
}): string {
  const number = WHATSAPP_NUMBER;
  const text = `Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export interface OrderWhatsAppParams {
  orderId?: string;
  items: Array<{
    productId: string;
    name?: string;
    size?: string;
    weight?: string;
    quantity: number;
    unitPrice: number;
  }>;
  subtotal: number;
  customer?: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    notes?: string;
  };
}

export function getOrderWhatsAppMessageText(params: OrderWhatsAppParams): string {
  const lines: string[] = [];

  lines.push('Namaste! Mujhe Authentic Narmadeshwar se order karna hai.');
  if (params.orderId) {
    lines.push(`Reference ID: ${params.orderId}`);
  }

  if (params.customer) {
    lines.push('');
    lines.push('*Customer Details:*');
    lines.push(`Name: ${params.customer.fullName}`);
    lines.push(`Phone: ${params.customer.phone}`);
    lines.push(
      `Delivery Address: ${params.customer.address}, ${params.customer.city}, ${params.customer.state} - ${params.customer.pincode}`
    );
    if (params.customer.notes) {
      lines.push(`Notes: ${params.customer.notes}`);
    }
  }

  lines.push('');
  lines.push('*Ordered Products:*');
  params.items.forEach((item, idx) => {
    const lineTotal = item.unitPrice * item.quantity;
    lines.push(
      `${idx + 1}. ${item.name || item.productId} (ID: ${item.productId}) | Qty: ${item.quantity} | Price: ₹${item.unitPrice.toLocaleString('en-IN')} each | Subtotal: ₹${lineTotal.toLocaleString('en-IN')}`
    );
  });

  lines.push('');
  lines.push(`*Total Order Amount:* ₹${params.subtotal.toLocaleString('en-IN')}`);
  lines.push('');
  lines.push('Please share payment methods, delivery details, and confirm my order.');

  return lines.join('\n');
}

export function getOrderWhatsAppLink(params: OrderWhatsAppParams): string {
  const number = WHATSAPP_NUMBER;
  const text = getOrderWhatsAppMessageText(params);
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
