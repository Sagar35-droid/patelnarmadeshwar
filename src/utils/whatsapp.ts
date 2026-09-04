import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Product } from '../types';

/**
 * ============================================================================
 * WHATSAPP CONFIGURATION
 * EDITABLE: You can update your business WhatsApp number below at any time.
 * Format: Country code followed by mobile number without '+' or special characters.
 * Example: "917697369590" for +91 76973 69590
 * ============================================================================
 */
export const WHATSAPP_NUMBER: string = BUSINESS_CONFIG.whatsappNumber || "917697369590";

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
  const message = customMessage || `Namaste, mujhe Sagar Narmadeshwar Shivling ke baare mein jankari chahiye.`;
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

